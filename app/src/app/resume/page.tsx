"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

type Experience = { title: string; company: string; start: string; end: string; bullets: string[] };
type Education = { degree: string; school: string; year: string };

type Form = {
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

const blank: Form = {
  name: "", headline: "", email: "", phone: "", location: "",
  linkedin: "", github: "", summary: "", skills: [],
  experience: [{ title: "", company: "", start: "", end: "", bullets: ["", "", ""] }],
  education: [{ degree: "", school: "", year: "" }],
};

const INPUT = "w-full bg-white/5 border border-white/10 text-gray-200 text-sm rounded-lg px-3 py-2 focus:outline-none focus:border-cyan-500/50 placeholder-gray-700";
const LABEL = "text-xs text-gray-500 font-semibold uppercase tracking-wider block mb-1";
const SECTION = "rounded-2xl border border-white/8 bg-white/2 p-6 space-y-4";

export default function ResumePage() {
  const router = useRouter();
  const [form, setForm] = useState<Form>(blank);
  const [suggestedSkills, setSuggestedSkills] = useState<string[]>([]);
  const [skillInput, setSkillInput] = useState("");
  const [generating, setGenerating] = useState(false);
  const [authed, setAuthed] = useState<boolean | null>(null);

  useEffect(() => {
    fetch("/api/auth/me")
      .then((r) => r.ok ? r.json() : null)
      .then(async (me) => {
        if (!me) { router.replace("/login"); return; }
        setAuthed(true);
        setForm((f) => ({ ...f, name: me.username, email: me.email || "" }));

        // Load progress to suggest skills
        const prog = await fetch("/api/progress").then((r) => r.ok ? r.json() : null);
        if (prog?.stages?.length) {
          const stageIds: string[] = prog.stages;
          // Derive epoch IDs from stage ID prefixes
          const epochHints: Record<string, string> = {
            "bt-": "first-journey", "stage-0": "ancient",
            "stage-m0": "cisco-core", "stage-m1": "cisco-enterprise",
            "stage-m2": "cisco-secops", "audit-a": "tech-audit-3",
            "audit-cm": "tech-audit-4", "audit-t": "tech-audit-2",
            "audit-": "tech-audit-1", "mitre-": "mitre",
            "atlas-": "mitre-atlas", "llm-": "owasp-llm",
            "quantum-t": "quantum-1", "quantum-p": "quantum-2",
            "quantum-q": "quantum-3", "umbrella-": "umbrella",
            "stage-m3": "cisco-advanced", "stage-m4": "cisco-advanced",
            "stage-m5": "cisco-advanced",
          };
          const found = new Set<string>();
          for (const sid of stageIds) {
            for (const [prefix, epochId] of Object.entries(epochHints)) {
              if (sid.startsWith(prefix) && EPOCH_SKILLS[epochId]) {
                found.add(EPOCH_SKILLS[epochId]);
              }
            }
          }
          setSuggestedSkills(Array.from(found));
        }
      })
      .catch(() => router.replace("/login"));
  }, [router]);

  function set(field: keyof Form, value: unknown) {
    setForm((f) => ({ ...f, [field]: value }));
  }

  function addSkill(skill: string) {
    const s = skill.trim();
    if (s && !form.skills.includes(s)) set("skills", [...form.skills, s]);
    setSkillInput("");
  }

  function removeSkill(s: string) {
    set("skills", form.skills.filter((x) => x !== s));
  }

  function addExp() {
    set("experience", [...form.experience, { title: "", company: "", start: "", end: "", bullets: ["", "", ""] }]);
  }

  function removeExp(i: number) {
    set("experience", form.experience.filter((_, idx) => idx !== i));
  }

  function setExp(i: number, field: keyof Experience, value: string | string[]) {
    const updated = form.experience.map((e, idx) => idx === i ? { ...e, [field]: value } : e);
    set("experience", updated);
  }

  function setBullet(ei: number, bi: number, value: string) {
    const bullets = [...form.experience[ei].bullets];
    bullets[bi] = value;
    setExp(ei, "bullets", bullets);
  }

  function addEdu() {
    set("education", [...form.education, { degree: "", school: "", year: "" }]);
  }

  function removeEdu(i: number) {
    set("education", form.education.filter((_, idx) => idx !== i));
  }

  function setEdu(i: number, field: keyof Education, value: string) {
    const updated = form.education.map((e, idx) => idx === i ? { ...e, [field]: value } : e);
    set("education", updated);
  }

  async function generate() {
    setGenerating(true);
    try {
      const res = await fetch("/api/resume/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) { alert("PDF generation failed. Try again."); setGenerating(false); return; }
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `${(form.name || "resume").replace(/\s+/g, "-").toLowerCase()}-resume.pdf`;
      a.click();
      URL.revokeObjectURL(url);
    } catch {
      alert("Something went wrong.");
    }
    setGenerating(false);
  }

  if (authed === null) {
    return (
      <main className="min-h-screen flex items-center justify-center" style={{ background: "#0d1117" }}>
        <div className="w-6 h-6 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin" />
      </main>
    );
  }

  return (
    <main className="min-h-screen pt-24 pb-16 px-4" style={{ background: "linear-gradient(135deg, #0d1117 0%, #0f1a2e 50%, #1a0a2e 100%)" }}>
      <div className="max-w-2xl mx-auto space-y-6">

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-black text-white mb-1">Resume Builder</h1>
          <p className="text-sm text-gray-500">Build a security-focused resume PDF from your training history.</p>
        </div>

        {/* Personal Info */}
        <section className={SECTION}>
          <h2 className="text-xs font-bold uppercase tracking-widest text-gray-500">Personal Info</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2"><label className={LABEL}>Full Name</label><input className={INPUT} value={form.name} onChange={(e) => set("name", e.target.value)} placeholder="Jane Smith" /></div>
            <div className="col-span-2"><label className={LABEL}>Professional Headline</label><input className={INPUT} value={form.headline} onChange={(e) => set("headline", e.target.value)} placeholder="Cybersecurity Analyst · CompTIA Security+ · MITRE ATT&CK" /></div>
            <div><label className={LABEL}>Email</label><input className={INPUT} value={form.email} onChange={(e) => set("email", e.target.value)} placeholder="jane@example.com" /></div>
            <div><label className={LABEL}>Phone</label><input className={INPUT} value={form.phone} onChange={(e) => set("phone", e.target.value)} placeholder="+1 (555) 000-0000" /></div>
            <div><label className={LABEL}>Location</label><input className={INPUT} value={form.location} onChange={(e) => set("location", e.target.value)} placeholder="San Francisco, CA" /></div>
            <div><label className={LABEL}>LinkedIn</label><input className={INPUT} value={form.linkedin} onChange={(e) => set("linkedin", e.target.value)} placeholder="linkedin.com/in/janesmith" /></div>
            <div className="col-span-2"><label className={LABEL}>GitHub</label><input className={INPUT} value={form.github} onChange={(e) => set("github", e.target.value)} placeholder="github.com/janesmith" /></div>
          </div>
        </section>

        {/* Summary */}
        <section className={SECTION}>
          <h2 className="text-xs font-bold uppercase tracking-widest text-gray-500">Professional Summary</h2>
          <textarea
            className={INPUT + " resize-none h-24"}
            value={form.summary}
            onChange={(e) => set("summary", e.target.value)}
            placeholder="Cybersecurity professional with hands-on experience in threat analysis, network security, and MITRE ATT&CK framework..."
          />
        </section>

        {/* Skills */}
        <section className={SECTION}>
          <h2 className="text-xs font-bold uppercase tracking-widest text-gray-500">Technical Skills</h2>
          {suggestedSkills.length > 0 && (
            <div>
              <p className="text-xs text-gray-600 mb-2">Suggested from your completed training:</p>
              <div className="flex flex-wrap gap-2">
                {suggestedSkills.filter((s) => !form.skills.includes(s)).map((s) => (
                  <button key={s} onClick={() => addSkill(s)} className="text-xs px-2.5 py-1 rounded-full border border-cyan-500/30 text-cyan-400/70 hover:border-cyan-400/60 hover:text-cyan-300 transition-colors">
                    + {s}
                  </button>
                ))}
              </div>
            </div>
          )}
          <div className="flex flex-wrap gap-2 min-h-8">
            {form.skills.map((s) => (
              <span key={s} className="inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300">
                {s}
                <button onClick={() => removeSkill(s)} className="text-cyan-500/50 hover:text-cyan-300 text-base leading-none">×</button>
              </span>
            ))}
          </div>
          <div className="flex gap-2">
            <input
              className={INPUT + " flex-1"}
              value={skillInput}
              onChange={(e) => setSkillInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && addSkill(skillInput)}
              placeholder="Add a skill and press Enter..."
            />
            <button onClick={() => addSkill(skillInput)} disabled={!skillInput.trim()} className="px-4 py-2 rounded-lg text-sm font-semibold bg-white/5 border border-white/10 text-gray-300 hover:border-white/25 transition-colors disabled:opacity-40">Add</button>
          </div>
        </section>

        {/* Experience */}
        <section className={SECTION}>
          <div className="flex items-center justify-between">
            <h2 className="text-xs font-bold uppercase tracking-widest text-gray-500">Experience</h2>
            <button onClick={addExp} className="text-xs text-cyan-500 hover:text-cyan-300 transition-colors">+ Add role</button>
          </div>
          {form.experience.map((exp, i) => (
            <div key={i} className="space-y-3 pt-4 border-t border-white/5 first:border-t-0 first:pt-0">
              <div className="flex items-start justify-between gap-4">
                <div className="grid grid-cols-2 gap-3 flex-1">
                  <div><label className={LABEL}>Job Title</label><input className={INPUT} value={exp.title} onChange={(e) => setExp(i, "title", e.target.value)} placeholder="Security Analyst" /></div>
                  <div><label className={LABEL}>Company</label><input className={INPUT} value={exp.company} onChange={(e) => setExp(i, "company", e.target.value)} placeholder="Acme Corp" /></div>
                  <div><label className={LABEL}>Start</label><input className={INPUT} value={exp.start} onChange={(e) => setExp(i, "start", e.target.value)} placeholder="Jan 2023" /></div>
                  <div><label className={LABEL}>End</label><input className={INPUT} value={exp.end} onChange={(e) => setExp(i, "end", e.target.value)} placeholder="Present" /></div>
                </div>
                {form.experience.length > 1 && (
                  <button onClick={() => removeExp(i)} className="text-gray-700 hover:text-red-400 text-lg transition-colors mt-5">×</button>
                )}
              </div>
              <div className="space-y-2">
                <label className={LABEL}>Key Achievements</label>
                {exp.bullets.map((b, bi) => (
                  <input key={bi} className={INPUT} value={b} onChange={(e) => setBullet(i, bi, e.target.value)} placeholder={`Achievement ${bi + 1}…`} />
                ))}
              </div>
            </div>
          ))}
        </section>

        {/* Education */}
        <section className={SECTION}>
          <div className="flex items-center justify-between">
            <h2 className="text-xs font-bold uppercase tracking-widest text-gray-500">Education</h2>
            <button onClick={addEdu} className="text-xs text-cyan-500 hover:text-cyan-300 transition-colors">+ Add</button>
          </div>
          {form.education.map((edu, i) => (
            <div key={i} className="grid grid-cols-2 gap-3 pt-4 border-t border-white/5 first:border-t-0 first:pt-0">
              <div className="col-span-2 flex gap-3 items-start">
                <div className="flex-1"><label className={LABEL}>Degree / Certification</label><input className={INPUT} value={edu.degree} onChange={(e) => setEdu(i, "degree", e.target.value)} placeholder="B.S. Computer Science" /></div>
                {form.education.length > 1 && (
                  <button onClick={() => removeEdu(i)} className="text-gray-700 hover:text-red-400 text-lg transition-colors mt-5">×</button>
                )}
              </div>
              <div><label className={LABEL}>Institution</label><input className={INPUT} value={edu.school} onChange={(e) => setEdu(i, "school", e.target.value)} placeholder="State University" /></div>
              <div><label className={LABEL}>Year</label><input className={INPUT} value={edu.year} onChange={(e) => setEdu(i, "year", e.target.value)} placeholder="2022" /></div>
            </div>
          ))}
        </section>

        {/* Generate */}
        <button
          onClick={generate}
          disabled={generating || !form.name.trim()}
          className="w-full py-3.5 rounded-xl text-sm font-black transition-opacity hover:opacity-90 disabled:opacity-40"
          style={{ background: "linear-gradient(90deg, #22d3ee, #818cf8, #6366f1)", color: "#000" }}
        >
          {generating ? "Generating PDF…" : "Download Resume PDF →"}
        </button>

        <p className="text-center text-xs text-gray-700 pb-4">
          Your Kryptós CronOS training achievements are automatically included.
        </p>
      </div>
    </main>
  );
}
