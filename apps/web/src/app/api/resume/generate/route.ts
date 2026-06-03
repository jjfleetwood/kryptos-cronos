import { NextRequest, NextResponse } from "next/server";
import { redis } from "@/lib/redis";
import { getAuthedUsername } from "@/lib/api-auth";
import { renderToBuffer, Document, Page, View, Text, StyleSheet } from "@react-pdf/renderer";
import { createElement as h } from "react";
import { stagesMeta } from "@/data/stages-meta";

// Map epoch IDs to security skill labels for the resume
const EPOCH_SKILLS: Record<string, string> = {
  "first-journey": "Security Fundamentals",
  "ancient": "Cryptography & Historical Security",
  "cisco-core": "Network Security & CVE Analysis",
  "cisco-enterprise": "Enterprise Attack Patterns",
  "cisco-secops": "Security Operations (SecOps)",
  "tech-audit-1": "IT Audit & Compliance (ISACA/COBIT)",
  "tech-audit-2": "Technical Security Auditing",
  "tech-audit-3": "Agentic AI Security & MCP",
  "tech-audit-4": "Continuous Monitoring 2.0",
  "mitre": "MITRE ATT&CK Framework",
  "mitre-atlas": "AI/ML Adversarial Security (MITRE ATLAS)",
  "owasp-llm": "OWASP LLM Top 10",
  "quantum-1": "Quantum Threat Landscape",
  "quantum-2": "Post-Quantum Cryptography (PQC)",
  "quantum-3": "Quantum Key Distribution (QKD)",
  "umbrella": "SASE & Cisco Umbrella",
  "cisco-advanced": "Advanced Network Defense",
};

type Experience = { title: string; company: string; start: string; end: string; bullets: string[] };
type Education = { degree: string; school: string; year: string };

type ResumePayload = {
  name: string;
  headline: string;
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  github: string;
  summary: string;
  skills: string[];
  experience: Experience[];
  education: Education[];
};

const s = StyleSheet.create({
  page: { backgroundColor: "#ffffff", padding: 40, fontFamily: "Helvetica", fontSize: 10, color: "#1a1a1a" },
  header: { marginBottom: 18, borderBottomWidth: 2, borderBottomColor: "#0891b2", paddingBottom: 12 },
  name: { fontSize: 22, fontFamily: "Helvetica-Bold", color: "#0891b2", marginBottom: 3 },
  headline: { fontSize: 11, color: "#374151", marginBottom: 6 },
  contactRow: { flexDirection: "row", flexWrap: "wrap", gap: 12 },
  contact: { fontSize: 8.5, color: "#6b7280" },
  section: { marginBottom: 14 },
  sectionTitle: { fontSize: 9, fontFamily: "Helvetica-Bold", color: "#0891b2", letterSpacing: 2, textTransform: "uppercase", borderBottomWidth: 1, borderBottomColor: "#e5e7eb", paddingBottom: 4, marginBottom: 8 },
  summary: { fontSize: 9.5, color: "#374151", lineHeight: 1.5 },
  skillsRow: { flexDirection: "row", flexWrap: "wrap", gap: 6 },
  skill: { fontSize: 8.5, backgroundColor: "#f0f9ff", color: "#0369a1", paddingHorizontal: 7, paddingVertical: 3, borderRadius: 3, borderWidth: 1, borderColor: "#bae6fd" },
  expTitle: { fontSize: 10, fontFamily: "Helvetica-Bold", color: "#111827" },
  expMeta: { fontSize: 8.5, color: "#6b7280", marginBottom: 4 },
  bullet: { fontSize: 9, color: "#374151", marginBottom: 2, paddingLeft: 10 },
  eduDegree: { fontSize: 10, fontFamily: "Helvetica-Bold", color: "#111827" },
  eduMeta: { fontSize: 8.5, color: "#6b7280" },
  achieveRow: { flexDirection: "row", flexWrap: "wrap", gap: 6 },
  achieve: { fontSize: 8, backgroundColor: "#f0fdf4", color: "#166534", paddingHorizontal: 7, paddingVertical: 3, borderRadius: 3, borderWidth: 1, borderColor: "#86efac" },
  footer: { position: "absolute", bottom: 24, left: 40, right: 40, flexDirection: "row", justifyContent: "space-between" },
  footerText: { fontSize: 7.5, color: "#9ca3af" },
});

export async function POST(req: NextRequest) {
  const username = await getAuthedUsername(req);
  if (!username) return NextResponse.json({ error: "unauthorized" }, { status: 401 });

  const body = await req.json() as ResumePayload;
  const lower = username.toLowerCase();

  // Read completed stages from Redis
  const progressData = await redis.hgetall(`progress:${lower}`);
  const completedStages: string[] = progressData?.stages
    ? JSON.parse(progressData.stages as string)
    : [];

  // Derive completed epochs for achievements section
  const completedEpochIds = new Set(
    completedStages.map((id) => stagesMeta.find((s) => s.id === id)?.epochId).filter(Boolean)
  );
  const achievements = Array.from(completedEpochIds)
    .map((eid) => EPOCH_SKILLS[eid as string])
    .filter(Boolean);

  const generatedDate = new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });

  const doc = h(
    Document,
    { title: `${body.name} — Resume` },
    h(Page, { size: "A4", style: s.page },

      // Header
      h(View, { style: s.header },
        h(Text, { style: s.name }, body.name || username),
        body.headline ? h(Text, { style: s.headline }, body.headline) : null,
        h(View, { style: s.contactRow },
          body.email ? h(Text, { style: s.contact }, body.email) : null,
          body.phone ? h(Text, { style: s.contact }, `· ${body.phone}`) : null,
          body.location ? h(Text, { style: s.contact }, `· ${body.location}`) : null,
          body.linkedin ? h(Text, { style: s.contact }, `· ${body.linkedin}`) : null,
          body.github ? h(Text, { style: s.contact }, `· ${body.github}`) : null,
        )
      ),

      // Summary
      body.summary ? h(View, { style: s.section },
        h(Text, { style: s.sectionTitle }, "Professional Summary"),
        h(Text, { style: s.summary }, body.summary)
      ) : null,

      // Skills
      body.skills?.length > 0 ? h(View, { style: s.section },
        h(Text, { style: s.sectionTitle }, "Technical Skills"),
        h(View, { style: s.skillsRow },
          ...body.skills.map((skill) => h(Text, { key: skill, style: s.skill }, skill))
        )
      ) : null,

      // Experience
      body.experience?.length > 0 ? h(View, { style: s.section },
        h(Text, { style: s.sectionTitle }, "Experience"),
        ...body.experience.map((exp, i) =>
          h(View, { key: i, style: { marginBottom: 10 } },
            h(Text, { style: s.expTitle }, exp.title),
            h(Text, { style: s.expMeta }, `${exp.company}${exp.start ? `  ·  ${exp.start}${exp.end ? ` – ${exp.end}` : " – Present"}` : ""}`),
            ...(exp.bullets || []).filter(Boolean).map((b, j) =>
              h(Text, { key: j, style: s.bullet }, `• ${b}`)
            )
          )
        )
      ) : null,

      // Education
      body.education?.length > 0 ? h(View, { style: s.section },
        h(Text, { style: s.sectionTitle }, "Education"),
        ...body.education.map((edu, i) =>
          h(View, { key: i, style: { marginBottom: 8 } },
            h(Text, { style: s.eduDegree }, edu.degree),
            h(Text, { style: s.eduMeta }, `${edu.school}${edu.year ? `  ·  ${edu.year}` : ""}`)
          )
        )
      ) : null,

      // Kryptós achievements
      achievements.length > 0 ? h(View, { style: s.section },
        h(Text, { style: s.sectionTitle }, "Kryptós CronOS — Completed Training Tracks"),
        h(View, { style: s.achieveRow },
          ...achievements.map((a) => h(Text, { key: a, style: s.achieve }, a))
        )
      ) : null,

      // Footer
      h(View, { style: s.footer },
        h(Text, { style: s.footerText }, `Generated by Kryptós CronOS · kryptoscronos.com`),
        h(Text, { style: s.footerText }, generatedDate)
      )
    )
  );

  let buffer: Buffer;
  try {
    buffer = await renderToBuffer(doc);
  } catch (err) {
    console.error("[resume/generate] renderToBuffer failed:", err);
    return NextResponse.json({ error: "PDF generation failed" }, { status: 500 });
  }

  const safeName = (body.name || username).replace(/[^a-z0-9]/gi, "-").toLowerCase();
  return new NextResponse(buffer as unknown as BodyInit, {
    status: 200,
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename="${safeName}-resume.pdf"`,
      "Cache-Control": "no-store",
    },
  });
}
