import type { StageConfig, EpochConfig } from "./types";

export const techAudit3Epoch: EpochConfig = {
  id: "tech-audit-3",
  name: "Agentic Continuous Monitoring",
  subtitle: "Automated Audit with Claude Tools",
  description: "Automate the full audit lifecycle using Claude's tool use API and MCP servers — agentic API enumeration, AI-powered secrets scanning, automated compliance report generation, and multi-agent audit pipeline design.",
  emoji: "🤖",
  color: "indigo",
  unlocked: true,
};

export const techAudit3Stages: StageConfig[] = [
  // ─── audit-a01: Claude Tool Use Basics ───────────────────────────────────────
  {
    epochId: "tech-audit-3",
    wonder: { name: "Anthropic HQ", location: "San Francisco, California", era: "Present Day", emoji: "🧪" },
    id: "audit-a01",
    order: 1,
    title: "Tools as Audit Instruments",
    subtitle: "Claude Tool Use Basics — defining tools for audit tasks",
    category: "ai",
    xp: 200,
    badge: { id: "audit-a-badge-01", name: "Tool Architect", emoji: "🔧" },
    easeScore: 8,
    valueScore: 9,
    rank: 1,
    challengeType: "ctf",
    info: {
      tagline: "An AI auditor without tools is just a text generator. Tools give Claude hands.",
      year: 2024,
      overview: [
        "Claude's tool use API (function calling) is what turns an AI from a text generator into an auditor with hands. Instead of answering from training data, Claude calls functions you define, reads the real results, and reasons over live system state — and for audit, a hallucinated answer about your AWS config has zero value while a verified API result has all of it.",
        "A tool definition is a small JSON object Claude reads at inference time (not training), so you can point it at brand-new systems on the fly:\n- `name` — a unique identifier Claude uses to call the tool.\n- `description` — what it does, when to use it, and what it returns; this is what drives reliable tool selection.\n- `input_schema` — JSON Schema describing the arguments it accepts.",
        "Everything runs in the agentic loop: your code sends the message plus tool definitions; Claude replies with either an answer or a `tool_use` request; your code runs the tool and returns a `tool_result`; Claude reads it and either calls another tool or finishes. The loop repeats until Claude stops asking for tools.",
        "In practice each audit procedure becomes one tool — clicking through S3 settings becomes `list_s3_buckets`, reviewing IAM by hand becomes `check_iam_policy`. That swap buys three things:\n- Consistency — the check runs identically every time.\n- Speed — API calls are far faster than human navigation.\n- Repeatability — the same audit runs on every release with no extra labor.",
        "Two rules keep it safe and effective:\n- Write tool descriptions like API-reference entries — precise inputs, outputs, and use conditions; vague ones make selection erratic.\n- Apply least privilege to agents exactly like users: an S3-audit agent gets no IAM write, a dev-repo scanner gets no production credentials.",
        "The payoff is capacity. Five auditors can't manually review 500 IAM roles, 200 security groups, and 300 buckets every quarter — but you define the audit logic once and the agent runs it against any number of resources. Audit coverage scales with compute, not headcount.",
      ],
      technical: {
        title: "Tool Definition Pattern",
        body: [
          "Each tool definition is a rigid JSON shape the API validates first:\n- `name` — unique, alphanumeric and underscores; Claude references it in its `tool_use` blocks.\n- `description` — free-form text covering purpose, inputs, outputs, and when to use it.\n- `input_schema` — JSON Schema (draft-07) defining argument types, required fields, and per-property descriptions.",
          "Implementing the agentic loop means handling two outcomes: when `stop_reason` is `tool_use`, execute each requested call and reply with a matching `tool_result`; when it's `end_turn`, Claude is done and the loop ends. Return tool errors as a `tool_result` rather than throwing — that lets Claude reason about the failure and try another approach.",
          "Validate tool inputs in your code, never in the prompt: Claude is a reasoning engine, not a trust boundary. A crafted prompt, an injection in retrieved content, or an ambiguous instruction can make it pass unexpected arguments — so check bucket-name patterns, confirm ARNs are in scope, and gate any write before executing. Treat its arguments with the same skepticism as external API input.",
          "Design tool output for reasoning quality: return structured JSON with consistent fields, not prose, and pack in enough context to act on. A bare `public_access: true` is far weaker than a result that also names the bucket, whether the public-access block is set, and the ACL — richer output means better analysis and a cleaner log of what the agent did.",
          "Test agentic tools at three levels:\n- Unit — each tool function returns correct outputs for given inputs.\n- Integration — the full loop produces the right findings against a known-state environment.\n- Red team — the agent stays safe on adversarial inputs: injection in tool results, resource names that mimic instructions, oversized payloads.",
        ],
        codeExample: {
          label: "Minimal audit tool definition (Anthropic Python SDK)",
          code: `import anthropic

client = anthropic.Anthropic()

tools = [
  {
    "name": "check_s3_public_access",
    "description": "Check if an S3 bucket has public access enabled. Returns the bucket ACL and public access block settings.",
    "input_schema": {
      "type": "object",
      "properties": {
        "bucket_name": {"type": "string", "description": "The S3 bucket name to audit"}
      },
      "required": ["bucket_name"]
    }
  }
]

response = client.messages.create(
  model="claude-opus-4-7",
  max_tokens=1024,
  tools=tools,
  messages=[{"role": "user", "content": "Audit the acme-prod-data bucket for public access."}]
)

# If response.stop_reason == "tool_use", execute the tool and loop`,
        },
      },
      incident: {
        title: "Capital One Data Breach — Manual Process Failure (2019)",
        when: "March–July 2019",
        where: "AWS US-East-1",
        impact: "106 million customer records exposed; $190M settlement; SSRF via misconfigured WAF",
        body: [
          "The 2019 Capital One breach started with a misconfigured AWS WAF that let a Server-Side Request Forgery (SSRF) request reach the EC2 metadata service (IMDS) and leak the WAF instance's IAM credentials. Those credentials were wildly over-scoped — `s3:ListAllMyBuckets` and `s3:GetObject` on `*` instead of one log bucket — so the attacker listed every bucket, found the customer data, and exfiltrated over 100 million records. The misconfiguration sat there for months; infrequent manual review of complex WAF rules never caught it.",
          "An agentic audit polling against a known-good baseline would have flagged it within hours, by checking:\n- The WAF instance's metadata-service access settings.\n- The IAM permissions attached to that instance.\n- Whether those permissions were scoped to the minimum required resources.",
          "All three deviations were visible through standard AWS API calls — which is exactly why continuous agentic auditing, not point-in-time manual review, is the right model for the cloud. The regulatory fallout drove it home: an $80M OCC fine and a separate $190M FTC settlement, both consent orders mandating automated configuration monitoring — the very tooling that would have prevented the breach.",
          "The lesson outlives Capital One: SSRF was common in 2019 and still is, and what separates a contained SSRF from a mega-breach is the IAM role on the compromised instance. No tool stops SSRF from being introduced, but every team can continuously audit that IAM roles stay least-privilege — the control that breaks the attack chain at its most damaging point.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Audit Prompt", sub: "user instruction", type: "attacker" },
          { label: "Claude + Tools", sub: "tool use API", type: "system" },
          { label: "Real Systems", sub: "AWS / APIs / files", type: "victim" },
          { label: "Findings Report", sub: "structured output", type: "result" },
        ],
      },
      timeline: [
        { year: 2023, event: "Anthropic releases tool use API — Claude can call external functions" },
        { year: 2024, event: "Tool use becomes standard pattern for agentic audit automation", highlight: true },
        { year: 2024, event: "MCP (Model Context Protocol) released — standardized tool server protocol" },
        { year: 2025, event: "Claude 4 series — improved tool selection accuracy and multi-step reasoning" },
      ],
      keyTakeaways: [
        "Tool descriptions drive Claude's tool selection — write them like API reference documentation, not user-facing help text",
        "The agentic loop: message → tool_use → tool_result → repeat until end_turn stop_reason",
        "Audit tools replace manual procedures with consistent, re-runnable checks that scale to thousands of resources",
        "Always validate tool inputs server-side — treat Claude's arguments with the same skepticism as external API inputs",
        "Least-privilege applies to AI agents: give each agent only the tools and permissions needed for its specific audit scope",
        "Structured JSON tool outputs produce more reliable Claude reasoning than narrative prose responses",
        "Test agentic loops with unit tests (tool functions), integration tests (full loop), and red team tests (adversarial inputs)",
        "The Capital One breach was preventable with automated IAM permission auditing — a direct application of tool-based audit agents",
        "Audit coverage scales with compute, not headcount, when tools replace manual procedures",
      ],
      references: [
        { title: "Anthropic Tool Use Documentation", url: "https://docs.anthropic.com/en/docs/tool-use" },
        { title: "Capital One Breach OCC Report", url: "https://www.occ.gov/news-issuances/news-releases/2020/nr-occ-2020-97.html" },
      ],
    },
    quiz: {
      questions: [
        { id: "audit-a01-q1", type: "Core Idea", challenge: "Hands for the AI.", text: "What does Claude's tool use API let it do?", options: ["Call functions you define, read real results, and reason over live system state","Only generate text from training data","Encrypt files","Replace the database"], correctIndex: 0, explanation: "Tool use turns Claude from a text generator into an auditor that acts on live systems." },
        { id: "audit-a01-q2", type: "Tool Definition", challenge: "The three parts.", text: "A tool definition has which three components?", options: ["name, description, and input_schema","id, secret, and token","host, port, and path","user, role, and policy"], correctIndex: 0, explanation: "Name identifies it, description guides selection, input_schema defines arguments." },
        { id: "audit-a01-q3", type: "Selection", challenge: "What guides Claude.", text: "What does Claude use to decide when to call a specific tool?", options: ["The tool's description field","The tool's name length","Random choice","The time of day"], correctIndex: 0, explanation: "Write descriptions like API-reference entries — they drive reliable selection." },
        { id: "audit-a01-q4", type: "Agentic Loop", challenge: "Who runs the tool.", text: "In the agentic loop, who executes the tool call?", options: ["Your code runs it and returns a tool_result; Claude doesn't execute it","Claude executes it inside the API call","The user runs it manually","Nobody — it's simulated"], correctIndex: 0, explanation: "Claude requests a tool_use; your code executes and returns a tool_result." },
        { id: "audit-a01-q5", type: "Security", challenge: "Trust the arguments?", text: "Should you validate tool inputs server-side?", options: ["Yes — Claude can pass unexpected argument shapes; always validate","No — Claude's arguments are always perfect","Only in production","Only for writes"], correctIndex: 0, explanation: "Claude is a reasoning engine, not a trust boundary — validate every argument." },
        { id: "audit-a01-q6", type: "Real Incident", challenge: "Capital One.", text: "Which Capital One vector would an agentic audit polling WAF rules have caught early?", options: ["A deviation from the known-good WAF configuration baseline","A guessed password","A phishing email","A DDoS"], correctIndex: 0, explanation: "Continuous baseline-deviation checks would have flagged the misconfig in hours." },
        { id: "audit-a01-q7", type: "Least Privilege", challenge: "Scope the agent.", text: "How should agent permissions be scoped?", options: ["Only the tools and access needed for that audit's scope","Full admin for flexibility","Production credentials always","No restrictions"], correctIndex: 0, explanation: "Least privilege applies to agents exactly as to human users." },
        { id: "audit-a01-q8", type: "Concept", challenge: "The payoff.", text: "With tool-using agents, audit coverage scales with…", options: ["Compute, not headcount","The number of auditors","Office size","Meeting frequency"], correctIndex: 0, explanation: "Define the logic once; the agent runs it against any number of resources." },
      ],
    },
    ctf: {
      scenario: "You have infiltrated Anthropic's internal audit lab. A researcher left a tool definition spec and partial audit agent code on the filesystem. Collect the three configuration fragments to reconstruct the master audit tool schema.",
      hint: "Read the tool spec files. The flag assembles from three fragments hidden in the configuration documents.",
      hints: [
        "Start with `ls` to see what files are in the current directory.",
        "The tool schema is split across three files — read each one carefully.",
        "Use `cat /audit-lab/tool-spec/fragment-c.json` for the final piece.",
      ],
      files: {
        "/audit-lab/tool-spec/fragment-a.json": `{
  "_fragment": "A/3",
  "_note": "Tool definition header fragment",
  "name": "check_iam_policy",
  "description": "Analyze an IAM policy document for overly permissive statements",
  "fragment_value": "FLAG{T00L_"
}`,
        "/audit-lab/tool-spec/fragment-b.json": `{
  "_fragment": "B/3",
  "_note": "Input schema fragment",
  "input_schema": {
    "type": "object",
    "properties": {
      "policy_json": {"type": "string"},
      "principal": {"type": "string"}
    },
    "required": ["policy_json"]
  },
  "fragment_value": "USE_4UD1T_"
}`,
        "/audit-lab/tool-spec/fragment-c.json": `{
  "_fragment": "C/3",
  "_note": "Output schema and assembly key",
  "returns": "findings array with severity ratings",
  "example_finding": "Action '*' with Resource '*' violates least privilege",
  "fragment_value": "P1PEL1NE}"
}`,
        "/audit-lab/README.md": `# Agentic Audit Lab — Tool Use Basics

This lab covers Claude's tool use API for audit automation.

## Key concepts
- Tool definitions: name, description, input_schema
- Agentic loop: message -> tool_use -> tool_result -> repeat
- Audit tools replace manual procedures

## Files
- tool-spec/fragment-a.json  — tool definition header
- tool-spec/fragment-b.json  — input schema
- tool-spec/fragment-c.json  — output schema and key

─────────────────────────────────────────────────────────────────────
WHAT YOU'RE LEARNING:
  1. Tool descriptions drive Claude's selection decisions — vague descriptions produce unreliable tool calls
  2. The agentic loop (message → tool_use → tool_result → repeat) is the foundation of every automated audit pipeline
  3. Audit tools replace manual procedures with consistent, re-runnable checks that scale to thousands of resources
─────────────────────────────────────────────────────────────────────
`,
      },
      dirs: {
        "/": [
          { name: "audit-lab", isDir: true },
        ],
        "/audit-lab": [
          { name: "README.md", isDir: false },
          { name: "tool-spec", isDir: true },
        ],
        "/audit-lab/tool-spec": [
          { name: "fragment-a.json", isDir: false },
          { name: "fragment-b.json", isDir: false },
          { name: "fragment-c.json", isDir: false },
        ],
      },
      fragments: [
        { trigger: "/audit-lab/tool-spec/fragment-a.json", value: "FLAG{T00L_", label: "Fragment A — Tool Header" },
        { trigger: "/audit-lab/tool-spec/fragment-b.json", value: "USE_4UD1T_", label: "Fragment B — Input Schema" },
        { trigger: "/audit-lab/tool-spec/fragment-c.json", value: "P1PEL1NE}", label: "Fragment C — Assembly Key" },
      ],
    },
  },

  // ─── audit-a02: Agentic API Enumeration ──────────────────────────────────────
  {
    epochId: "tech-audit-3",
    wonder: { name: "API Security Lab", location: "San Francisco, California", era: "Present Day", emoji: "🔌" },
    id: "audit-a02",
    order: 2,
    title: "The Endpoint Cartographer",
    subtitle: "Agentic API Enumeration — Claude mapping attack surface",
    category: "ai",
    xp: 200,
    badge: { id: "audit-a-badge-02", name: "API Cartographer", emoji: "🗺️" },
    easeScore: 7,
    valueScore: 9,
    rank: 4,
    challengeType: "ctf",
    info: {
      tagline: "You can't audit what you can't see. Claude's first job is building the map.",
      year: 2024,
      overview: [
        "API surface area is the single largest blind spot in modern security audits. Organizations routinely run 40–60% more endpoints than their inventory documents acknowledge, and the gap only widens:\n- Shadow APIs — endpoints shipped by individual teams outside central governance — accumulate faster than any manual documentation workflow can track.\n- Legacy version endpoints linger long after they're officially deprecated.\n- Internal service-to-service APIs are frequently never documented at all.\n- The attack surface grows continuously while the defenders' map stays static.",
        "Agentic enumeration uses Claude to run a systematic, multi-step discovery pipeline no human auditor could finish by hand. Four tools work in sequence, and Claude decides the order and handles edge cases — paginated route tables, auth-gated specs, rate limiting — without per-scenario code:\n- `fetch_openapi_spec` retrieves the official API specification from its documented location.\n- `list_gateway_routes` pulls the live route table from the gateway (AWS API Gateway, Kong, NGINX).\n- `probe_endpoint` issues low-risk requests to confirm liveness and gather response metadata.\n- `compare_to_inventory` diffs discovered routes against the approved inventory to surface the gaps.",
        "The highest-value outputs come from reasoning across versions and beyond the gateway:\n- Authentication regression — when a v1 endpoint requires a Bearer token but its v2 successor returns data unauthenticated after a botched migration, Claude issues both authenticated and unauthenticated requests to every multi-version endpoint and flags wherever enforcement dropped.\n- Shadow API discovery — it scans several vectors (DNS subdomain enumeration, port scans on internal ranges, traffic-log analysis) to find endpoints deployed outside the primary gateway entirely.",
        "Two design rules keep enumeration both safe and useful:\n- Encode scope in the tools, not the prompt — `probe_endpoint` checks every target against an allowlist, enforces token-bucket rate limits, and refuses excluded paths, so prompt injection can't widen scope.\n- Run it continuously — on every deploy, gateway change, and DNS update — so the discovered inventory feeds authentication, authorization, and input-validation testing instead of going stale between quarterly audits.",
      ],
      technical: {
        title: "Enumeration Agent Architecture",
        body: [
          "The agent runs the discovery pipeline end to end:\n- Fetch the official OpenAPI/Swagger spec and the gateway's live route table at once, then diff them to find routes that exist in the gateway but not the spec.\n- Probe each undocumented route (an `OPTIONS` or a minimal `GET` with no sensitive params) to confirm liveness and gather behavior metadata.\n- Compare authenticated versus unauthenticated responses on every live endpoint to surface auth-bypass candidates.",
          "Rate limits and scope live in the tool code, never in Claude's judgment — a separation that is both a security boundary and a reliability design:\n- Claude decides what to test from its analysis of the discovered surface area.\n- Your tools enforce the rules of engagement: max requests per minute, allowed domains and IP ranges, excluded paths, maximum response size.\n- Because the limits are in code, they hold regardless of what instructions Claude receives.",
          "Each finding is structured for both human review and machine consumption — path, discovered HTTP methods, authentication status, inventory match, and a risk score:\n- Sensitive paths (`/admin`, `/config`, `/export`, `/billing`) raise the severity.\n- `POST`, `PUT`, or `DELETE` available on an unauthenticated endpoint is a critical finding.\n- The output flows straight into the ticket-creation and report-generation phases of the full pipeline.",
          "Continuous runs need efficient delta handling so daily scans don't drown the team in alerts:\n- A full scan of a large surface takes 15–30 minutes; reporting every finding daily creates fatigue.\n- Maintain a persistent known-good inventory and alert only on new endpoints, removed endpoints (a possible unauthorized deletion), or auth-behavior changes on existing ones.\n- Claude weighs each change against deployment logs or change tickets to judge whether it's a real risk or an expected release.",
        ],
        codeExample: {
          label: "Enumeration agent tool loop (pseudocode)",
          code: `# Claude decides which tools to call and in what order
tools = [fetch_openapi_spec, list_gateway_routes, probe_endpoint, compare_to_inventory]

messages = [{"role": "user", "content":
  "Enumerate all API endpoints for api.acme.com. "
  "Compare to the approved inventory in s3://acme-audit/api-inventory.json. "
  "Flag any undocumented endpoints and test auth on each."}]

while True:
    response = claude.messages.create(model="claude-opus-4-7", tools=tools, messages=messages)
    if response.stop_reason == "end_turn":
        break  # Claude has synthesized its final report
    # Execute tool calls, append results, continue loop
    for tool_call in response.tool_use_blocks:
        result = execute_tool(tool_call.name, tool_call.input)
        messages.append(tool_result(tool_call.id, result))`,
        },
      },
      incident: {
        title: "Peloton API Exposure (2021)",
        when: "May 2021",
        where: "Peloton API, public internet",
        impact: "Personal data of 4M+ users accessible unauthenticated via undocumented /stats/v2/workouts endpoint",
        body: [
          "In May 2021, researcher Jan Masters found that Peloton's `/stats/v2/workouts` endpoint returned full user profiles — age, gender, city, workout stats, account creation date, follower counts — with no authentication:\n- The endpoint was undocumented and absent from Peloton's internal API inventory.\n- It exposed all 4 million-plus users, including those who had set their accounts to private.\n- Peloton first dismissed the data as intentionally public, adding authentication only after sustained pressure.",
          "A weekly enumeration audit would have flagged this within days of deployment:\n- `/stats/v1/workouts` required authentication while its path-pattern successor `/stats/v2/workouts` — identical data sensitivity — did not.\n- That v1-versus-v2 diff is a trivial comparison for a tool-using agent, yet it is exactly the edge case manual documentation review keeps missing.",
          "The deeper lesson is that API versioning creates security-regression risk:\n- Every new version's authentication and authorization must be explicitly verified against the previous one — a step routinely skipped under shipping pressure.\n- Agentic enumeration bakes that verification into the deployment pipeline, so a new version can't ship without its auth being checked against established patterns.",
          "Regulators have hardened their stance since 2021:\n- GDPR treats unauthenticated access to personal data as a reportable breach whether or not anyone malicious read it — the exposure alone suffices, and CCPA follows the same logic.\n- For any regulated organization, an unauthenticated endpoint returning personal data is a per se violation, making continuous enumeration a compliance requirement, not merely a best practice.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Claude Orchestrator", sub: "enumeration agent", type: "attacker" },
          { label: "API Gateway + Spec", sub: "live routes vs docs", type: "system" },
          { label: "Undocumented Endpoints", sub: "shadow APIs", type: "victim" },
          { label: "Enumeration Report", sub: "gap analysis", type: "result" },
        ],
      },
      timeline: [
        { year: 2019, event: "OWASP API Security Project launched — API risks formalized" },
        { year: 2021, event: "Peloton API exposure — 4M users' data accessible unauthenticated" },
        { year: 2023, event: "Agentic API testing frameworks emerge using LLM orchestration", highlight: true },
        { year: 2024, event: "Claude tool use enables production-grade agentic enumeration pipelines" },
      ],
      keyTakeaways: [
        "60%+ of organizations have undocumented APIs not captured in their official inventory — shadow APIs are the norm, not the exception",
        "Diff OpenAPI spec against live gateway route tables to identify endpoints deployed outside the API governance process",
        "Authentication regression detection: systematically compare authentication requirements across all API versions for every endpoint pattern",
        "Encode rate limits, scope constraints, and allowed targets in tool implementations — Claude decides what to test, your code enforces boundaries",
        "Shadow API discovery requires multiple vectors: gateway route tables, DNS enumeration, port scans, and traffic log analysis",
        "Continuous enumeration on every deployment catches auth regressions within hours of introduction rather than months",
        "GDPR and CCPA treat unauthenticated access to personal data as a reportable breach — API security is a compliance requirement",
        "Structured enumeration output (endpoint, methods, auth status, risk) feeds directly into subsequent test phases and ticket creation",
      ],
      references: [
        { title: "OWASP API Security Top 10", url: "https://owasp.org/www-project-api-security/" },
        { title: "Peloton API Disclosure (TechCrunch)", url: "https://techcrunch.com/2021/05/05/peloton-data-exposure/" },
      ],
    },
    quiz: {
      questions: [
        { id: "audit-a02-q1", type: "Core Idea", challenge: "Map first.", text: "Why must an agent enumerate endpoints before auditing an API?", options: ["You can't audit what you can't see — undocumented endpoints are the risk","To slow the API down","To delete old routes","To rename the API"], correctIndex: 0, explanation: "Claude's first job is building a complete map of the attack surface." },
        { id: "audit-a02-q2", type: "Shadow APIs", challenge: "Finding the hidden ones.", text: "What's the primary technique for finding shadow (undocumented) APIs?", options: ["Diff the live gateway route table against the official OpenAPI spec","Read the marketing site","Guess random URLs forever","Ask the users"], correctIndex: 0, explanation: "Comparing live routes to the documented spec surfaces undocumented endpoints." },
        { id: "audit-a02-q3", type: "Scale", challenge: "How common.", text: "Roughly how many orgs have undocumented endpoints outside their inventory?", options: ["60% or more","Almost none","Exactly half, always","Only startups"], correctIndex: 0, explanation: "Shadow APIs are the norm, not the exception — enumeration is essential." },
        { id: "audit-a02-q4", type: "Real Incident", challenge: "Peloton again.", text: "The Peloton exposure (one API version authed, another didn't) illustrates…", options: ["Auth regression — a newer version weakened authentication","A hardware failure","A DDoS","A password leak"], correctIndex: 0, explanation: "Version drift can silently drop authentication — enumerate every version." },
        { id: "audit-a02-q5", type: "Security", challenge: "Where to enforce.", text: "Where should rate limits and scope rules be enforced for an enumeration agent?", options: ["In the tool implementations, not in Claude's prompt reasoning","In the prompt only","Nowhere","In the user's browser"], correctIndex: 0, explanation: "Guardrails belong in code; never rely on the model to self-limit." },
        { id: "audit-a02-q6", type: "Agentic Loop", challenge: "Loop's end.", text: "When `stop_reason` is `end_turn` during enumeration, it means…", options: ["Claude has synthesized its final report and needs no more tool calls","An error occurred","The API is down","It will loop forever"], correctIndex: 0, explanation: "end_turn signals the agent is done calling tools." },
        { id: "audit-a02-q7", type: "Concept", challenge: "Why it matters.", text: "An undocumented endpoint is dangerous because…", options: ["It's reachable and often unmonitored, yet absent from security review","It loads faster","It uses less bandwidth","It can't be called"], correctIndex: 0, explanation: "Unknown endpoints are unaudited attack surface." },
        { id: "audit-a02-q8", type: "Defense", challenge: "Keep the map current.", text: "A continuous endpoint-discovery agent helps by…", options: ["Re-mapping the API on every release so new shadow endpoints are caught fast","Deleting documentation","Blocking all traffic","Ignoring new routes"], correctIndex: 0, explanation: "Continuous diffing catches drift as it's introduced." },
      ],
    },
    ctf: {
      scenario: "You are running an agentic enumeration against a target API gateway. The agent has already run and left its findings on disk. Three fragments of the enumeration report contain the flag. Reconstruct the full finding.",
      hint: "The enumeration agent split its report into sections. Cat each report file to collect the flag fragments.",
      hints: [
        "List the /api-enum directory to find the report files.",
        "The fragments are in the discovery/, auth-check/, and summary/ subdirectories.",
        "Cat each findings file in order.",
      ],
      files: {
        "/api-enum/discovery/undocumented-routes.txt": `# Undocumented Routes — api.target.com
# Found by agentic enumeration agent (Claude claude-opus-4-7)

Route                    Method  Status  In-Spec
/api/v2/users/export     GET     200     NO      ← SHADOW API
/api/v1/admin/config     POST    403     NO      ← SHADOW API
/api/v2/billing/raw      GET     200     NO      ← SHADOW API
/api/v1/health           GET     200     YES     (expected)

Fragment-1: FLAG{4G3NT1C_
`,
        "/api-enum/auth-check/auth-regression.txt": `# Auth Regression Analysis
# /api/v2/users/export: v1 requires Bearer token, v2 returns 200 WITHOUT auth
# Classification: CRITICAL — auth bypass on data export endpoint

Endpoint               v1 Auth  v2 Auth  Regression
/api/vX/users/export   REQUIRED NONE     YES — CRITICAL

Fragment-2: 4P1_3NUM3R
`,
        "/api-enum/summary/report.txt": `# Agentic Enumeration Summary
# Total endpoints discovered: 47
# In approved inventory: 31
# Shadow APIs found: 3
# Auth regressions: 1 CRITICAL

Recommendation: Block /api/v2/users/export pending auth fix.

Fragment-3: 4T10N}

─────────────────────────────────────────────────────────────────────
WHAT YOU'RE LEARNING:
  1. API cartography closes the inventory gap — 60%+ of orgs have undocumented endpoints not in their official spec
  2. Auth regression detection is uniquely suited to AI: compare authentication behavior across API versions to catch security regressions automatically
  3. Rate limits and scope rules must be enforced in tool code — Claude decides what to test, your code enforces the rules of engagement
─────────────────────────────────────────────────────────────────────
`,
        "/api-enum/README.md": `# API Enumeration Agent Output

This directory contains the output of an agentic API enumeration run.

## Structure
- discovery/   — undocumented route findings
- auth-check/  — authentication regression analysis
- summary/     — final report and recommendations
`,
      },
      dirs: {
        "/": [{ name: "api-enum", isDir: true }],
        "/api-enum": [
          { name: "README.md", isDir: false },
          { name: "discovery", isDir: true },
          { name: "auth-check", isDir: true },
          { name: "summary", isDir: true },
        ],
        "/api-enum/discovery": [{ name: "undocumented-routes.txt", isDir: false }],
        "/api-enum/auth-check": [{ name: "auth-regression.txt", isDir: false }],
        "/api-enum/summary": [{ name: "report.txt", isDir: false }],
      },
      fragments: [
        { trigger: "/api-enum/discovery/undocumented-routes.txt", value: "FLAG{4G3NT1C_", label: "Fragment 1 — Discovery" },
        { trigger: "/api-enum/auth-check/auth-regression.txt", value: "4P1_3NUM3R", label: "Fragment 2 — Auth Check" },
        { trigger: "/api-enum/summary/report.txt", value: "4T10N}", label: "Fragment 3 — Summary" },
      ],
    },
  },

  // ─── audit-a03: AI Secrets Detection ─────────────────────────────────────────
  {
    epochId: "tech-audit-3",
    wonder: { name: "Secrets Scanning Lab", location: "San Francisco, California", era: "Present Day", emoji: "🔑" },
    id: "audit-a03",
    order: 3,
    title: "The Secrets Hunter",
    subtitle: "AI-Powered Secrets Detection — Claude scanning repos and configs",
    category: "ai",
    xp: 200,
    badge: { id: "audit-a-badge-03", name: "Secrets Hunter", emoji: "🕵️" },
    easeScore: 7,
    valueScore: 10,
    rank: 2,
    challengeType: "ctf",
    info: {
      tagline: "Regex catches patterns. Claude understands context. Both are necessary.",
      year: 2024,
      overview: [
        "Traditional secrets scanners use regular expressions to match known formats — `AKIA` AWS keys, `ghp_` GitHub tokens, PEM private-key headers, high-entropy strings. They're fast and reliable on well-formed secrets, but a growing class of issues slips past them:\n- Obfuscated credentials split across multiple variables, or base64-encoded values.\n- Environment-variable secrets set in CI config files, or secrets buried in code comments.\n- Custom internal token formats unique to the organization's own systems.\n- Credentials in operational scripts that never reach the primary source repositories.",
        "Claude reasons about context in ways a regex can't — which is what catches the misses and clears the false positives that make regex-only scanning unsustainable at scale:\n- Is this a real credential or a realistically formatted test placeholder?\n- Is this variable name suspiciously credential-like even though today's value looks benign — hinting the secret is injected at runtime?\n- Does this base64 string decode to a private key or to harmless binary?\n- Does the surrounding code show the value is actually used to authenticate, or is it a template placeholder?",
        "The scanner pairs regex pre-screening for speed with Claude analysis for context, across every place secrets leak — git history (all branches and tags), env configs, IaC templates, Docker layers, CI/CD definitions, Kubernetes manifests, and developer machines reached via MCP:\n- Phase 1 regex processes the whole codebase in seconds — high recall, low precision, many false positives by design.\n- Phase 2 sends each hit to Claude with full surrounding context to call it a confirmed secret, a likely placeholder, or a false positive — cutting analyst review time 80%+ while keeping near-perfect recall.\n- Git history is non-negotiable: a credential committed then deleted stays reachable via `git log` and `git show`, and sits in every clone until it's rotated.",
        "Detection only sticks if false positives and prevention are handled too:\n- An allowlist of known-benign values (test fixtures, doc examples, intentionally public keys) stops the scanner re-flagging them — without it analysts tune out every finding within weeks.\n- Prevention beats detection: pre-commit hooks (detect-secrets, Gitleaks) and CI/CD merge checks block credentials before they ever land.\n- AI scanning is the backstop for when prevention fails — and it does, via bypassed hooks, `commit --no-verify`, or tools that skip hooks entirely.",
      ],
      technical: {
        title: "Two-Phase Scanning Architecture",
        body: [
          "Phase 1 is fast and regex-based: run truffleHog or detect-secrets across the full scope including complete git history, flagging known formats (`AKIA`, `ghp_`, `sk-ant-`) and high-entropy strings above a threshold:\n- It runs in seconds to minutes and produces many false positives — by design.\n- The goal is high recall, not precision: missing a real credential is an incident, while false positives are an acceptable cost that Phase 2 cleans up.",
          "Phase 2 is accurate and Claude-based: for each Phase 1 hit, build a context window and ask for a classification:\n- Include ~10 lines of surrounding code, the file path and extension, the variable or key name, the raw value, and metadata (commit author, timestamp, branch).\n- Claude returns `confirmed_secret`, `likely_placeholder`, or `false_positive`, plus a one-sentence rationale the analyst can use to calibrate trust.",
          "A `confirmed_secret` triggers a rotation workflow whose order minimizes the exposure window:\n- Immediately disable the old credential in the issuing service (AWS IAM, GitHub token settings) before anything else.\n- Audit access logs to see whether it was already used by unauthorized parties.\n- Issue a replacement and store it in a secrets manager (AWS Secrets Manager, HashiCorp Vault, Azure Key Vault).\n- Update every dependent service to read the new value, then verify the old credential no longer works.\n- Skipping or reordering these steps opens windows of either continued exposure or operational outage.",
          "Comprehensive scope is what separates a real audit from a token one — and operational scripts are the most-missed category:\n- Deployment scripts, runbooks, and automation in Bash/PowerShell/Python often live on file shares or workstations, predate the secrets manager, and skip the hooks that guard primary repos; Claude reaches them through MCP filesystem servers.\n- A full engagement covers all branches and complete history of every repo, CI/CD definitions, Docker image layers, Kubernetes secret manifests (base64 is encoding, not encryption), IaC env files, and those operational scripts.",
        ],
        codeExample: {
          label: "Phase 2 Claude classification call",
          code: `def classify_finding(finding: dict) -> str:
    prompt = f"""Classify this potential secret finding:

File: {finding['file']}
Line: {finding['line_number']}
Variable: {finding['variable_name']}
Value: {finding['value']}
Context:
{finding['surrounding_code']}

Respond with one of: confirmed_secret | likely_placeholder | false_positive
Then explain your reasoning in one sentence."""

    response = client.messages.create(
        model="claude-opus-4-7",
        max_tokens=200,
        messages=[{"role": "user", "content": prompt}]
    )
    return response.content[0].text`,
        },
      },
      incident: {
        title: "Uber GitHub Secret Leak (2022)",
        when: "September 2022",
        where: "GitHub, internal Uber repositories",
        impact: "57M user records; attacker used leaked AWS credential to access S3 buckets",
        body: [
          "The 2022 Uber breach started with MFA fatigue — the attacker spammed an employee with push prompts until one was accepted — but the damage came from hardcoded credentials:\n- Lateral movement and production access depended on secrets found in internal PowerShell scripts on a network file share.\n- Those operational scripts sat outside the primary repositories that Uber's existing secrets-scanning program covered.",
          "Claude-powered scanning with MCP filesystem access would have reached those scripts:\n- It would flag variable names like `$uberProdKey` and `$awsToken` as credential-pattern matches even when the values were obfuscated beyond regex's reach.\n- Recognizing credential semantics from naming and surrounding context is exactly the capability pure regex lacks — a variable named `$prodAwsSecret` is suspicious in an operational script whatever format its value takes.",
          "The breach is a lesson in coverage, not just a single bug:\n- Uber's primary repos were likely scanned; the attacker simply used credentials from outside those boundaries.\n- Effective scanning must span the entire credential surface — CI/CD systems, automation tools, operational scripts, workstation configs — and MCP integrations extend Claude's reach into file systems, Confluence wikis, and Slack archives that are traditionally hard to scan.",
          "The regulatory response judged Uber's program design, not only the vulnerability:\n- Regulators assessed whether reasonable controls — including adequately scoped secrets scanning — were in place.\n- That makes scanning coverage a compliance question: regulated organizations must show their program covers every credential storage location, not just the easy ones.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Regex Pre-Scanner", sub: "truffleHog / detect-secrets", type: "attacker" },
          { label: "Claude Classifier", sub: "context-aware analysis", type: "system" },
          { label: "Secret Candidates", sub: "repos / configs / CI", type: "victim" },
          { label: "Triaged Findings", sub: "confirmed / fp / review", type: "result" },
        ],
      },
      timeline: [
        { year: 2017, event: "truffleHog released — first major git history secret scanner" },
        { year: 2022, event: "Uber breach — hardcoded credentials in operational scripts not caught by scanners" },
        { year: 2023, event: "AI-augmented secret classification reduces false positive rate 80%+", highlight: true },
        { year: 2024, event: "Claude used in production secrets triage pipelines at Fortune 500 companies" },
      ],
      keyTakeaways: [
        "Regex finds known formats at speed; Claude finds intent and context — use both phases in sequence for high recall and high precision",
        "Scan beyond git repos: CI pipeline definitions, Docker image layers, IaC templates, Kubernetes manifests, and operational scripts",
        "Git history scanning is mandatory — secrets committed and later deleted remain in history and are accessible to every repository clone",
        "Three-tier Claude classification: confirmed_secret (rotate immediately), likely_placeholder (add to allowlist), false_positive (document and suppress)",
        "Rotation workflow order matters: disable old credential → audit access logs → issue new → update dependent services → verify old no longer works",
        "Pre-commit hooks and CI/CD checks are preventive controls; AI scanning is the backstop when prevention fails",
        "False positive allowlists prevent alert fatigue — without them, analysts begin ignoring all findings within weeks",
        "MCP filesystem server integration extends scanning to operational scripts, file shares, and developer tools outside formal source control",
        "The Uber 2022 breach used credentials from operational scripts outside the formal repository boundary — comprehensive coverage is a compliance requirement",
      ],
      references: [
        { title: "Uber 2022 Breach Analysis (Krebs)", url: "https://krebsonsecurity.com/2022/09/uber-was-hacked-to-its-core-purportedly-by-an-18-year-old/" },
        { title: "detect-secrets GitHub", url: "https://github.com/Yelp/detect-secrets" },
      ],
    },
    quiz: {
      questions: [
        { id: "audit-a03-q1", type: "Core Idea", challenge: "Regex vs context.", text: "What's the main limitation of regex-only secret scanners like truffleHog?", options: ["They catch well-formatted secrets but miss obfuscated or context-dependent ones","They're too slow to run","They delete the secrets","They only work on images"], correctIndex: 0, explanation: "Regex catches patterns; Claude adds the contextual understanding regex lacks." },
        { id: "audit-a03-q2", type: "Claude's Edge", challenge: "Understanding context.", text: "How does Claude improve on pattern-only secret detection?", options: ["It reasons about context — recognizing a secret even when it doesn't match a known pattern","It runs regex faster","It encrypts the repo","It ignores comments"], correctIndex: 0, explanation: "Context understanding catches obfuscated/unusual secrets regex misses." },
        { id: "audit-a03-q3", type: "Git History", challenge: "It persists.", text: "Why must secret scanning cover git history, not just the current tree?", options: ["A secret committed earlier remains in history on every clone and fork","History is encrypted","Old commits are deleted","History can't hold secrets"], correctIndex: 0, explanation: "A committed secret lives in history until rotated and history is rewritten." },
        { id: "audit-a03-q4", type: "Technique", challenge: "Beyond patterns.", text: "Which signal helps detect a secret that doesn't match a known format?", options: ["High entropy combined with surrounding context (variable names, usage)","File size","File extension only","The commit time"], correctIndex: 0, explanation: "Entropy plus context flags credentials regex rules don't recognize." },
        { id: "audit-a03-q5", type: "Coverage", challenge: "Scan everywhere.", text: "A secrets program should scan…", options: ["Repos, CI/CD variables, container images, file shares, and scripts","Only the main branch","Only README files","Only production"], correctIndex: 0, explanation: "Secrets hide across the whole supply chain." },
        { id: "audit-a03-q6", type: "Remediation", challenge: "After a find.", text: "When a live secret is found, the first action is…", options: ["Rotate it — assume it's compromised","Just delete the file","Make the repo private","Add a comment"], correctIndex: 0, explanation: "Exposure means rotation; deletion alone leaves it in history." },
        { id: "audit-a03-q7", type: "Concept", challenge: "The combo.", text: "The best secrets-detection approach is…", options: ["Fast regex/entropy gates plus Claude's contextual reasoning for the hard cases","Regex only","Claude only, no patterns","Manual review only"], correctIndex: 0, explanation: "Layer cheap pattern checks with semantic reasoning." },
        { id: "audit-a03-q8", type: "Why It Matters", challenge: "The stakes.", text: "Why is an undetected committed secret so dangerous?", options: ["It's a working credential anyone with repo access (now or later) can use","It slows builds","It bloats the repo","It's harmless"], correctIndex: 0, explanation: "A leaked credential is a live key into your systems." },
      ],
    },
    ctf: {
      scenario: "You are running the AI secrets scanner against a target repository. Three scan result files contain flag fragments — one a confirmed secret, one a false positive analysis, and one the final triage summary.",
      hint: "The scanner output is in /secrets-scan. Read each findings file to collect the fragments.",
      hints: [
        "List /secrets-scan to see the output directories.",
        "Check phase1/ for regex findings and phase2/ for Claude classifications.",
        "The triage-summary.txt in /secrets-scan contains the final fragment.",
      ],
      files: {
        "/secrets-scan/phase1/regex-hits.txt": `# Phase 1 — Regex Scanner Output
# Tool: truffleHog v3.4.1
# Scan scope: full git history (1,847 commits), all branches

[HIGH] File: config/deploy.sh  Line: 47
  Variable: AWS_ACCESS_KEY_ID
  Value: AKIA4EXAMPLE7REDACTED
  Pattern: AWS Access Key (AKIA prefix)
  Fragment: FLAG{S3CR3TS_

  >> WHAT TO KNOW: The AKIA prefix is deterministic — all AWS access keys start with it.
     truffleHog uses this exact regex to catch them at high confidence.
     This key was committed 6 months ago and "deleted" in a later commit — but git
     history is permanent. Every developer who cloned this repo has a copy.
     Real action: invalidate the key in AWS IAM immediately, then rotate.

[MEDIUM] File: tests/fixtures/mock-creds.json  Line: 12
  Variable: api_key
  Value: test-key-1234-placeholder
  Pattern: generic api_key pattern

  >> WHAT TO KNOW: This is a FALSE POSITIVE — a real example of regex scanner noise.
     Regex cannot tell 'test-key-1234-placeholder' from a real key by pattern alone.
     This is why Phase 2 (Claude) exists: context eliminates false positives.
     High false-positive rates cause alert fatigue — analysts stop reviewing findings.

# ──────────────────────────────────────────────────────────────────────────────
# KEY TAKEAWAYS — Phase 1 (Regex Scanning)
# ──────────────────────────────────────────────────────────────────────────────
# 1. Regex scanning is fast and catches well-known formats (AKIA, ghp_, sk-ant-)
# 2. Always scan FULL git history, not just HEAD — deleted secrets are not gone
# 3. High-entropy strings also flag likely secrets even without a known pattern
# 4. Expect 30-70% false positive rate — Phase 2 (AI triage) reduces this to <5%
# 5. Tools: truffleHog, Gitleaks, detect-secrets (Yelp), git-secrets (AWS Labs)
# ──────────────────────────────────────────────────────────────────────────────
`,
        "/secrets-scan/phase2/claude-classifications.txt": `# Phase 2 — Claude Classification Results
# Claude model: claude-opus-4-7
# Input per finding: file path, variable name, value, 10 lines of surrounding code

Finding #1 (config/deploy.sh:47)
  Claude verdict: confirmed_secret
  Confidence: HIGH
  Reasoning: AKIA prefix is an active AWS access key prefix. Variable name
    AWS_ACCESS_KEY_ID is the canonical name used in AWS SDKs. File path
    config/deploy.sh suggests production deployment context, not a test fixture.
    No 'test', 'example', 'placeholder', or 'fake' indicators present.
  Action: ROTATE IMMEDIATELY — disable in IAM, issue new key, update secrets store
  Fragment: 4I_SCN_

  >> WHAT TO KNOW: This is Claude doing what regex cannot — reading context.
     Claude understands that deploy.sh + AWS_ACCESS_KEY_ID + AKIA prefix = real credential.
     The same value in tests/fixtures/fake-creds.json would likely be classified false_positive.
     Claude's classification: confirmed_secret | likely_placeholder | false_positive

Finding #2 (tests/fixtures/mock-creds.json:12)
  Claude verdict: false_positive
  Confidence: HIGH
  Reasoning: Value contains literal substrings 'test' and 'placeholder'. File path
    is tests/fixtures — a standard location for test data. Variable name 'api_key'
    is generic. No deployment context, no real format match (not AKIA, not ghp_, etc).
  Action: no action required — consider adding to .secrets-ignore allowlist

  >> WHAT TO KNOW: False positive management is critical for scanner sustainability.
     An allowlist (.secrets-ignore or detect-secrets baseline) prevents re-flagging.
     Without triage, analysts see the same false positive every scan → they stop looking.
     Claude reduces analyst review load by 80%+ compared to regex-only output.

# ──────────────────────────────────────────────────────────────────────────────
# KEY TAKEAWAYS — Phase 2 (AI Classification)
# ──────────────────────────────────────────────────────────────────────────────
# 1. Claude reads surrounding code, file path, and variable name — not just the value
# 2. Three-tier classification: confirmed_secret / likely_placeholder / false_positive
# 3. 'Confirmed secret' → immediate action: rotate, audit access logs, notify security
# 4. 'False positive' → add to allowlist so it doesn't appear in future scans
# 5. The combination (regex speed + Claude accuracy) is more effective than either alone
# ──────────────────────────────────────────────────────────────────────────────
`,
        "/secrets-scan/triage-summary.txt": `# Secrets Scan Triage Summary
# Run date: 2024-11-15 03:47 UTC
# Agent: Claude Secrets Hunter v2.1

Confirmed secrets: 1 (CRITICAL — rotate AWS key immediately)
False positives:   1 (added to allowlist)
Pending review:    0

Total scan time: 4m 12s
Repos scanned: 3
Commits scanned (git history): 1,847  ← not just HEAD — full history
Files scanned: 2,341
Findings before Claude triage: 2
Findings after Claude triage: 1 confirmed

Action items generated: 1
  [CRITICAL] Rotate AWS_ACCESS_KEY_ID (AKIA4EXAMPLE7REDACTED)
    → Disable key in AWS IAM Console immediately
    → Check CloudTrail logs for unauthorized API calls using this key
    → Replace with AWS Secrets Manager dynamic credentials (no static keys)
    → Add pre-commit hook or CI check to prevent future secret commits

Final fragment: TR14G3}

# ──────────────────────────────────────────────────────────────────────────────
# KEY TAKEAWAYS — The Full Secrets Scanning Pipeline
# ──────────────────────────────────────────────────────────────────────────────
# 1. SCAN GIT HISTORY: 'git rm secret.txt' does NOT remove it from history.
#    Every developer who ever cloned the repo still has it. Rotation is the only fix.
#
# 2. ROTATION WORKFLOW: invalidate old key → issue new key → update secrets store →
#    update all systems using the key → verify old key no longer works.
#
# 3. PREVENTION > REMEDIATION: Pre-commit hooks (using detect-secrets or Gitleaks)
#    block secrets BEFORE they reach the repo. CI/CD pipeline checks add a second layer.
#
# 4. NEVER USE STATIC LONG-LIVED CREDENTIALS: Use IAM roles, short-lived tokens,
#    or dynamic secrets from Vault/AWS Secrets Manager. No static API keys in code.
#
# 5. THE UBER LESSON (2022): Uber's breach involved credentials in PowerShell scripts
#    on a network share — not in git. Scan EVERYWHERE: CI configs, IaC, Docker images,
#    Kubernetes secrets, operational scripts, and developer machines.
# ──────────────────────────────────────────────────────────────────────────────
`,
      },
      dirs: {
        "/": [{ name: "secrets-scan", isDir: true }],
        "/secrets-scan": [
          { name: "phase1", isDir: true },
          { name: "phase2", isDir: true },
          { name: "triage-summary.txt", isDir: false },
        ],
        "/secrets-scan/phase1": [{ name: "regex-hits.txt", isDir: false }],
        "/secrets-scan/phase2": [{ name: "claude-classifications.txt", isDir: false }],
      },
      fragments: [
        { trigger: "/secrets-scan/phase1/regex-hits.txt", value: "FLAG{S3CR3TS_", label: "Fragment 1 — Regex Hits" },
        { trigger: "/secrets-scan/phase2/claude-classifications.txt", value: "4I_SCN_", label: "Fragment 2 — Claude Classifications" },
        { trigger: "/secrets-scan/triage-summary.txt", value: "TR14G3}", label: "Fragment 3 — Triage Summary" },
      ],
    },
  },

  // ─── audit-a04: Automated Cloud Enumeration ───────────────────────────────────
  {
    epochId: "tech-audit-3",
    wonder: { name: "Cloud Audit Lab", location: "AWS US-East-1", era: "Present Day", emoji: "☁️" },
    id: "audit-a04",
    order: 4,
    title: "The Cloud Cartographer",
    subtitle: "Automated Cloud Resource Enumeration — Claude + AWS SDK tools",
    category: "ai",
    xp: 200,
    badge: { id: "audit-a-badge-04", name: "Cloud Cartographer", emoji: "☁️" },
    easeScore: 5,
    valueScore: 9,
    rank: 7,
    challengeType: "ctf",
    info: {
      tagline: "The cloud is not a place. It's a configuration. And configurations drift.",
      year: 2024,
      overview: [
        "Cloud resource enumeration is the non-negotiable foundation of every cloud audit — before assessing any control you must know what exists, across which regions and accounts:\n- The targets are S3 buckets, EC2 instances, Lambda functions, RDS databases, IAM roles, VPCs, subnets, security groups, CloudFront distributions, API Gateways, and EKS clusters.\n- Without a complete, current inventory every finding is incomplete — you can't tell whether a misconfiguration is isolated or a pattern across resources you never examined.\n- Manual inventory doesn't scale: one large AWS account holds thousands of resources across a dozen regions and is outdated before the report is finalized.\n- Agentic enumeration with Claude and the AWS SDK runs in minutes, emits a machine-readable inventory, and re-runs on any schedule or change event.",
        "The agent runs a systematic multi-service sweep and, crucially, builds the dependency graph manual audits rarely produce:\n- It lists resources by service, checks each for security-relevant properties, flags deviations from the baseline, and synthesizes a structured inventory with risk annotations.\n- Claude prioritizes services by audit scope, handles API pagination, and correlates resources across services through their ARNs.\n- The dependency graph maps the chain — this Lambda uses this IAM role, which has this S3 policy, which reaches these buckets at this data sensitivity — revealing privilege chains and data-access paths that flat lists hide.",
        "Scale and a baseline are what turn raw inventory into findings:\n- Multi-account, multi-region — using AWS Organizations, Claude enumerates every account ID, assumes the audit role in each, and sweeps every region in parallel for a consolidated estate-wide inventory.\n- Configuration baseline comparison — the baseline (JSON, aligned to CIS Benchmarks or NIST, versioned in a repo) defines expectations like 'public access blocked,' 'encryption enabled,' and 'no `0.0.0.0/0` ingress on management ports,' and Claude flags every deviation.",
        "Front-loading enumeration makes it the shared context for every later audit phase:\n- IAM analysis needs the roles and policies, IaC secrets scanning needs the Lambda functions and their repos, segmentation analysis needs the VPCs and security groups, and evidence collection needs the full inventory to know which resources each control covers.\n- Sharing one inventory across agents avoids redundant API calls and keeps every agent working from a consistent view of infrastructure state.",
      ],
      technical: {
        title: "Cloud Enumeration Tool Set",
        body: [
          "The AWS enumeration agent covers the six most security-relevant service categories, each tool returning the properties that matter:\n- `list_s3_buckets` — public-access block, encryption, versioning, ACL.\n- `list_rds_instances` — `publicly_accessible` flag, encryption, backup retention, VPC config.\n- `list_ec2_instances` — security group IDs, IAM instance profile, subnet.\n- `list_lambda_functions` — VPC config (or lack of it), execution role, env-variable names (not values, to flag potential secrets).\n- `list_iam_roles` — attached managed policies, inline policy count, last-used date.\n- `list_security_groups` — inbound/outbound rules, flagging `0.0.0.0/0` or `::/0` sources.",
          "Claude prioritizes services by audit scope, mirroring how an experienced auditor works:\n- A data-centric audit starts with S3 and RDS, where sensitive data lives.\n- A network audit starts with VPCs and security groups to map topology before compute.\n- An IAM audit starts with the identity landscape before examining what those identities can reach.",
          "Estate-wide enumeration and drift detection are the two hardest parts to do by hand:\n- Multi-account — call `list_accounts` on the Organizations management account, `sts:AssumeRole` into each account's `SecurityAuditRole`, and run the full tool set in that account-scoped session; Claude wraps this in an `enumerate_account` tool and consolidates results.\n- Drift — compare each run against a baseline stored in a versioned artifact store; expected drift (new resources, pipeline changes) is fine, but unexpected drift not tied to any recorded deployment is the security finding.",
          "Resource tagging adds the organizational context that makes findings prioritizable:\n- Tags encode environment (prod/dev/staging), owner, data classification, and compliance scope (SOC 2, PCI, HIPAA).\n- Claude checks tag coverage (missing required tags violate policy), tag consistency (mismatched environment tags in one VPC hint at misconfiguration), and tag-based access control (that IAM tag-condition policies actually match the resources' tags).",
        ],
        codeExample: {
          label: "Cloud enumeration agent — multi-service sweep",
          code: `# Claude orchestrates the enumeration order based on audit focus
system = """You are a cloud security auditor. Use the provided tools to enumerate
all AWS resources in the target account. Start with data stores (S3, RDS),
then compute (EC2, Lambda), then IAM. Flag any resource that:
- Has public access enabled
- Lacks encryption at rest
- Has overly permissive security groups (0.0.0.0/0 ingress on port 22/3389/3306)
Produce a structured inventory with risk ratings."""

response = client.messages.create(
    model="claude-opus-4-7",
    max_tokens=4096,
    system=system,
    tools=cloud_audit_tools,
    messages=[{"role": "user", "content": "Audit account 123456789012, all regions."}]
)`,
        },
      },
      incident: {
        title: "Toyota Connected Car Data Exposure (2023)",
        when: "May 2023",
        where: "Toyota Connected Services, Japan + Global",
        impact: "2.15M customers' vehicle location data exposed for 10 years; misconfigured cloud environment",
        body: [
          "In May 2023, Toyota disclosed that vehicle location data for 2.15 million customers had been publicly accessible for over ten years — February 2012 to May 2023 — through a misconfigured cloud environment:\n- A storage resource had public access enabled when it should have been restricted to authorized Toyota services only.\n- The exposed GPS coordinates and vehicle identification numbers let anyone who found the endpoint track Toyota vehicles across a decade of historical records.",
          "The ten-year timeline is the point: Toyota is a sophisticated company with substantial IT resources, yet the misconfiguration persisted invisibly:\n- The environment grew and changed over a decade, and the flaw — introduced at or near setup — was never caught by manual auditing.\n- Annual audits across hundreds of storage resources routinely miss individual misconfigurations, especially ones that have become invisible through familiarity.",
          "An agentic enumeration sweep on a weekly schedule would have caught it on the first run:\n- Comparing against a baseline, the agent would immediately note one storage resource with public access enabled while all others had it disabled.\n- That deviation would have been finding number one in report number one — not a decade-long undiscovered exposure.",
          "Regulators now treat a long-lived misconfiguration as a governance failure, not an unfortunate technical error:\n- Japan's Personal Information Protection Commission found inadequate data-protection controls, and EU authorities applied GDPR scrutiny for affected residents.\n- Continuous agentic enumeration is the governance control that demonstrates ongoing oversight of cloud configuration.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Claude Orchestrator", sub: "enumeration agent", type: "attacker" },
          { label: "AWS SDK Tools", sub: "S3/EC2/IAM/RDS/Lambda", type: "system" },
          { label: "Cloud Account", sub: "multi-region resources", type: "victim" },
          { label: "Inventory + Risk Report", sub: "structured findings", type: "result" },
        ],
      },
      timeline: [
        { year: 2012, event: "Toyota cloud misconfiguration introduced — 2.15M vehicle records exposed" },
        { year: 2018, event: "AWS Config launches continuous compliance monitoring" },
        { year: 2023, event: "Toyota discloses 10-year data exposure; agentic auditing gains urgency", highlight: true },
        { year: 2024, event: "Claude-based cloud enumeration agents enter production use" },
      ],
      keyTakeaways: [
        "Cloud inventory is the prerequisite to every subsequent audit check — you cannot assess what you have not enumerated",
        "Enumerate all six security-relevant service categories: storage, database, compute, serverless, identity, and network",
        "Build resource dependency graphs showing which role accesses which bucket and which Lambda uses which VPC — flat lists miss privilege chains",
        "Multi-account enumeration via AWS Organizations and cross-account IAM roles covers the full organizational AWS estate",
        "Configuration baseline comparison identifies drift — unexpected changes not associated with recorded deployment events are the findings that matter",
        "Resource tagging analysis adds organizational context: environment, owner, data classification, and compliance scope per resource",
        "Toyota's ten-year exposure resulted from a single storage misconfiguration that continuous agentic sweeps would have flagged on the first weekly run",
        "Regulatory bodies treat decade-long cloud misconfigurations as governance failures, not technical errors — continuous monitoring is the required control",
      ],
      references: [
        { title: "Toyota Cloud Exposure (BleepingComputer)", url: "https://www.bleepingcomputer.com/news/security/toyota-discloses-data-breach-exposing-customers-personal-info/" },
        { title: "AWS Config Documentation", url: "https://docs.aws.amazon.com/config/latest/developerguide/WhatIsConfig.html" },
      ],
    },
    quiz: {
      questions: [
        { id: "audit-a04-q1", type: "Core Idea", challenge: "See it all.", text: "Why build a complete cloud inventory before auditing?", options: ["You can't audit resources you don't know exist","To increase the bill","To delete old accounts","To rename regions"], correctIndex: 0, explanation: "Discovery across accounts and regions is the foundation of cloud audit." },
        { id: "audit-a04-q2", type: "Scope", challenge: "Everywhere.", text: "A thorough cloud discovery must cover…", options: ["All accounts and all regions, not just the primary one","Only us-east-1","Only production","Only one account"], correctIndex: 0, explanation: "Resources hide in unused regions and forgotten accounts." },
        { id: "audit-a04-q3", type: "Drift", challenge: "Things change.", text: "Why does cloud inventory need continuous re-discovery?", options: ["Configurations drift — new resources appear and settings change constantly","Clouds are static","It's a one-time task","Inventories never change"], correctIndex: 0, explanation: "The cloud is a configuration, and configurations drift." },
        { id: "audit-a04-q4", type: "Shadow Resources", challenge: "Forgotten assets.", text: "Why are untracked 'shadow' cloud resources risky?", options: ["They're unmonitored and often misconfigured, yet still internet-reachable","They cost nothing","They're auto-secured","They can't be attacked"], correctIndex: 0, explanation: "Unknown resources are unaudited exposure." },
        { id: "audit-a04-q5", type: "Technique", challenge: "How agents map.", text: "How does an agent enumerate cloud resources?", options: ["Via provider API calls (list/describe) across accounts and regions","By guessing IPs","By reading the website","By emailing the team"], correctIndex: 0, explanation: "Cloud provider APIs expose the full resource inventory programmatically." },
        { id: "audit-a04-q6", type: "Baseline", challenge: "Compare to known-good.", text: "What makes discovered inventory actionable?", options: ["Comparing it to a known-good baseline to spot deviations","Counting the resources","Coloring the diagram","Ignoring changes"], correctIndex: 0, explanation: "Deviation from baseline is what a continuous audit flags." },
        { id: "audit-a04-q7", type: "Concept", challenge: "The cloud is…", text: "The stage's framing 'the cloud is not a place, it's a configuration' means…", options: ["Security depends on the config state, which must be continuously verified","The cloud doesn't exist","Location is everything","Config never matters"], correctIndex: 0, explanation: "Misconfiguration is the dominant cloud risk; verify config continuously." },
        { id: "audit-a04-q8", type: "Defense", challenge: "Continuous map.", text: "The value of an agentic cloud cartographer is…", options: ["A continuously refreshed inventory that catches new/changed resources fast","A one-time snapshot","Fewer log sources","A static diagram"], correctIndex: 0, explanation: "Continuous discovery keeps the audit current as the cloud changes." },
      ],
    },
    ctf: {
      scenario: "A cloud enumeration agent swept the target AWS account and stored its findings on disk. Three report files contain the flag fragments — S3 findings, IAM findings, and the risk summary.",
      hint: "The agent output is in /cloud-enum. Read the findings files to collect the flag.",
      hints: [
        "List /cloud-enum to see what the agent found.",
        "Check s3-findings.txt and iam-findings.txt for the first two fragments.",
        "The risk-summary.txt file contains the final fragment.",
      ],
      files: {
        "/cloud-enum/s3-findings.txt": `# S3 Bucket Enumeration — Claude Audit Agent
# Account: 123456789012  Region: us-east-1

Bucket                      Public  Encryption  Versioning  Finding
acme-prod-data              NO      AES-256     YES         OK
acme-backup-2019            YES     NONE        NO          CRITICAL: Public + Unencrypted
acme-logs-archive           NO      AES-256     NO          LOW: No versioning

Fragment-1: FLAG{CL0UD_
`,
        "/cloud-enum/iam-findings.txt": `# IAM Role Analysis — Claude Audit Agent

Role: prod-lambda-role
  Attached: arn:aws:iam::aws:policy/AdministratorAccess
  Finding: CRITICAL — Lambda role has AdministratorAccess (should be least-privilege)

Role: backup-role
  Attached: arn:aws:iam::aws:policy/AmazonS3FullAccess
  Finding: HIGH — Full S3 access on backup role; scope to specific buckets

Fragment-2: 3NUM_4G3NT_
`,
        "/cloud-enum/risk-summary.txt": `# Cloud Enumeration Risk Summary
# Claude claude-opus-4-7 — agentic sweep complete

CRITICAL: 2 findings
HIGH: 1 finding
LOW: 1 finding

Top priorities:
1. Remove public access from acme-backup-2019 and enable encryption
2. Replace AdministratorAccess on prod-lambda-role with least-privilege policy

Fragment-3: SW33P}

─────────────────────────────────────────────────────────────────────
WHAT YOU'RE LEARNING:
  1. Cloud inventory is prerequisite to every subsequent audit check — you cannot assess what you have not enumerated
  2. Resource dependency graphs (which Lambda role → which bucket) reveal privilege chains that static inventory lists miss entirely
  3. Toyota's 10-year data exposure (2023) resulted from a single S3 public-access misconfiguration — agentic sweeps catch these in minutes, not decades
─────────────────────────────────────────────────────────────────────
`,
      },
      dirs: {
        "/": [{ name: "cloud-enum", isDir: true }],
        "/cloud-enum": [
          { name: "s3-findings.txt", isDir: false },
          { name: "iam-findings.txt", isDir: false },
          { name: "risk-summary.txt", isDir: false },
        ],
      },
      fragments: [
        { trigger: "/cloud-enum/s3-findings.txt", value: "FLAG{CL0UD_", label: "Fragment 1 — S3 Findings" },
        { trigger: "/cloud-enum/iam-findings.txt", value: "3NUM_4G3NT_", label: "Fragment 2 — IAM Findings" },
        { trigger: "/cloud-enum/risk-summary.txt", value: "SW33P}", label: "Fragment 3 — Risk Summary" },
      ],
    },
  },

  // ─── audit-a05: AI IAM Policy Analyzer ───────────────────────────────────────
  {
    epochId: "tech-audit-3",
    wonder: { name: "IAM Analysis Lab", location: "San Francisco, California", era: "Present Day", emoji: "🪪" },
    id: "audit-a05",
    order: 5,
    title: "The Policy Whisperer",
    subtitle: "AI IAM Policy Analyzer — Claude reasoning over policy documents",
    category: "ai",
    xp: 200,
    badge: { id: "audit-a-badge-05", name: "Policy Whisperer", emoji: "🪪" },
    easeScore: 6,
    valueScore: 10,
    rank: 3,
    challengeType: "ctf",
    info: {
      tagline: "IAM policies are the access control layer. Claude reads them faster than any human auditor.",
      year: 2024,
      overview: [
        "IAM policy analysis is one of the highest-value applications of AI in cloud auditing, because the policy landscape is far too large to review by hand:\n- A large AWS account holds hundreds of roles, thousands of statements across managed and inline policies, permission boundaries, Organizations SCPs, and resource-based policies on S3, KMS, and Lambda.\n- A human reviewing ten roles an hour takes weeks; Claude analyzes hundreds of policies in minutes and reasons across all the layers at once.",
        "Claude grasps IAM semantics that simple rule engines can't:\n- It distinguishes identity-based policies (on principals) from resource-based policies (on buckets and keys).\n- It understands how permission boundaries cap a principal's maximum permissions even when broader policies are attached.\n- It spots when a `Condition` block actually restricts access versus when its keys are trivially satisfied, and when `NotAction`/`NotResource` grant more than they appear to.",
        "The unique value is reasoning about escalation paths and effective permissions:\n- Escalation paths chain limited permissions into broad ones — `iam:CreatePolicyVersion` rewrites any policy, `iam:AttachRolePolicy` attaches admin to a controlled role, and `iam:PassRole` + `ec2:RunInstances` launches an instance under a privileged role.\n- Effective permissions are not the sum of attached policies but their intersection with permission boundaries, SCPs, resource-based policies, and `Condition` blocks — letting Claude answer 'if this role is compromised, what's the maximum privilege an attacker can reach through legitimate API calls?'",
        "Three outputs make the analysis actionable and complete:\n- Least-privilege remediation — Claude reads the workload's code via MCP to learn which actions and buckets it actually uses, then generates the minimal replacement policy, turning a finding into an hours-long task.\n- Cross-account analysis — it enumerates every `AssumeRole` trust relationship, checks for `Condition` limits, and flags stale or overly broad trusts to external accounts.\n- Pairing with AWS IAM Access Analyzer — Access Analyzer uses formal reasoning for cross-boundary access while Claude is stronger on escalation paths and intent-versus-effect, so production pipelines run both.",
      ],
      technical: {
        title: "Privilege Escalation Patterns Claude Detects",
        body: [
          "The critical escalation actions fall into three policy- and role-management categories:\n- Policy management — `iam:CreatePolicyVersion` writes a new version of any policy (admin included), and `iam:SetDefaultPolicyVersion` activates a previously planted malicious version.\n- Role management — `iam:AttachRolePolicy` attaches any policy (including `AdministratorAccess`) to any role, and `iam:PutRolePolicy` writes inline policies.\n- Trust modification — `iam:UpdateAssumeRolePolicy` changes which principals can assume a role, letting an attacker add themselves to a privileged one.",
          "Compute-leveraged escalation pairs `iam:PassRole` with a resource-creation permission so the attacker runs code under a privileged role:\n- `iam:PassRole` + `ec2:RunInstances` launches an EC2 instance with an admin role.\n- `iam:PassRole` + `lambda:CreateFunction` + `lambda:InvokeFunction` runs arbitrary code under an admin role.\n- `iam:PassRole` + `glue:CreateJob` + `glue:StartJobRun` does the same via Glue; Claude checks each three-action pattern across every principal's full permission set.",
          "Two analyses catch the mistakes manual audits make most:\n- Condition reliability — a `Condition` only restricts if its keys are always present and trustworthy: `aws:RequestedRegion` is reliable, `aws:PrincipalTag` only if tag assignment is controlled, `aws:SourceIp` only for user calls from controlled networks (useless for role access); Claude flags conditions that protect less than they appear to.\n- Resource wildcards — `Resource: \"*\"` is classified by the actions it enables: read-only (low risk), state-modifying like `ec2:StopInstances` (medium), and destructive like `ec2:TerminateInstances` (high).",
          "Claude also generates the documentation large organizations lack:\n- Years of policies written by different teams accumulate without explanatory comments.\n- Claude produces a plain-language description of what each policy allows and why — based on its attached role and referenced resources — which doubles as a sanity check that intent matches effect and as evidence in compliance audits.",
        ],
        codeExample: {
          label: "IAM policy analysis prompt pattern",
          code: `def analyze_policy(role_name: str, policy_doc: dict) -> dict:
    response = client.messages.create(
        model="claude-opus-4-7",
        max_tokens=1000,
        messages=[{"role": "user", "content": f"""Analyze this IAM policy for role '{role_name}':

{json.dumps(policy_doc, indent=2)}

Identify:
1. Overly permissive statements (Action: * or Resource: *)
2. Privilege escalation paths (iam:CreatePolicyVersion, iam:PassRole, etc.)
3. Missing Condition constraints that should be present
4. Recommended least-privilege replacement

Format as JSON with keys: findings, escalation_paths, severity, remediation"""}]
    )
    return json.loads(response.content[0].text)`,
        },
      },
      incident: {
        title: "AWS IAM Privilege Escalation — Capital One (2019)",
        when: "March–July 2019",
        where: "Capital One AWS environment",
        impact: "SSRF → EC2 metadata → IAM role → S3 access → 106M records",
        body: [
          "The 2019 Capital One breach is the textbook IAM privilege chain:\n- An SSRF flaw in a WAF app on EC2 was exploited to reach the Instance Metadata Service at `169.254.169.254` and retrieve the instance profile's temporary IAM credentials.\n- Those credentials called `s3:ListBuckets`, identified data buckets by naming pattern, and `s3:GetObject` downloaded over 100 million customer records.\n- It worked because the WAF role held `s3:ListAllMyBuckets` and `s3:GetObject` on Resource `*` — far broader than its job required.",
          "Claude analysis of that role would have flagged the over-permissioning immediately:\n- `s3:ListAllMyBuckets` on `*` is unnecessary for a WAF that only writes logs to one bucket, and `s3:GetObject` on `*` grants read access to every object in every bucket.\n- Together they form a data-exfiltration risk for anyone holding the credentials; the fix — scoping both to the specific log-bucket ARN — was a two-line change, against a cost of 106 million records and a $190 million settlement.",
          "IMDSv2 hardens this attack class but doesn't replace least privilege:\n- It requires a request token for metadata access, blocking SSRF-based exfiltration, and AWS now enforces it by default on new instances.\n- But an attacker who gets code execution by another route (application RCE, not SSRF) still reaches the IMDS — only the role's permissions decide what the credentials can do, so least privilege limits the blast radius regardless of entry.",
          "The breach drove lasting regulatory and industry change:\n- The OCC consent order required a formal cloud-security program with automated configuration monitoring, and AWS strengthened IAM Access Analyzer to detect cross-account and public access.\n- Financial-services guidance reclassified least-privilege IAM from best practice to hard requirement, and the breach remains the standard example of why over-permissioned roles are critical vulnerabilities, not housekeeping.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Claude IAM Analyzer", sub: "policy reasoning engine", type: "attacker" },
          { label: "IAM Roles + Policies", sub: "identity-based + resource-based", type: "system" },
          { label: "Privilege Escalation Paths", sub: "iam:* / sts:AssumeRole", type: "victim" },
          { label: "Remediation Report", sub: "least-privilege replacements", type: "result" },
        ],
      },
      timeline: [
        { year: 2019, event: "Capital One breach — SSRF + overly permissive IAM role = 106M records" },
        { year: 2021, event: "AWS IAM Access Analyzer launched — automated policy analysis" },
        { year: 2023, event: "Claude begins analyzing full IAM configurations with privilege chain reasoning", highlight: true },
        { year: 2024, event: "AI IAM analysis reduces policy review time by 90% at enterprise scale" },
      ],
      keyTakeaways: [
        "Privilege escalation actions to flag: iam:CreatePolicyVersion, iam:AttachRolePolicy, iam:PutRolePolicy, iam:UpdateAssumeRolePolicy, iam:PassRole",
        "Claude reasons about effective permissions across all policy layers: identity-based, resource-based, permission boundaries, and SCPs",
        "Ask Claude: 'If this role is compromised, what is the maximum privilege an attacker can achieve through legitimate API calls?'",
        "Condition blocks only restrict access when the referenced condition keys are reliably set — Claude evaluates whether conditions provide real protection",
        "Resource wildcard analysis: classify by action risk level (read-only low, state-modifying medium, destructive high)",
        "Compute-leveraged escalation: iam:PassRole + ec2:RunInstances, + lambda:CreateFunction, or + glue:CreateJob are critical patterns",
        "Least-privilege remediation requires analyzing what the principal actually uses — scan the code to find the minimum required actions and resources",
        "Capital One (2019): two overly broad IAM permissions turned an SSRF into a 106M-record breach and $190M settlement",
        "AWS IAM Access Analyzer and Claude analysis are complementary: Access Analyzer for boundary violations, Claude for escalation paths and intent analysis",
      ],
      references: [
        { title: "AWS IAM Privilege Escalation (Rhino Security)", url: "https://rhinosecuritylabs.com/aws/aws-privilege-escalation-methods-mitigation/" },
        { title: "AWS IAM Access Analyzer", url: "https://docs.aws.amazon.com/IAM/latest/UserGuide/what-is-access-analyzer.html" },
      ],
    },
    quiz: {
      questions: [
        { id: "audit-a05-q1", type: "Core Idea", challenge: "Read the policy.", text: "What does an IAM policy analysis agent do?", options: ["Reads access-control policies and flags over-permissive grants","Encrypts the policies","Deletes IAM users","Resets passwords"], correctIndex: 0, explanation: "IAM policies are the access-control layer; Claude reads them fast and at scale." },
        { id: "audit-a05-q2", type: "Red Flag", challenge: "The wildcard.", text: "Which policy statement is a top finding?", options: ["Action:* on Resource:* — full access to everything","s3:GetObject on one named bucket","Read-only access to logs","Deny-all"], correctIndex: 0, explanation: "Wildcard action and resource grants are maximal over-permissioning." },
        { id: "audit-a05-q3", type: "Priv-Esc", challenge: "Hidden escalation.", text: "Why analyze combinations of permissions, not just individual ones?", options: ["Certain combinations form privilege-escalation paths (e.g. iam:PassRole + ec2:RunInstances)","Combinations are faster","Single permissions never matter","It's required by law"], correctIndex: 0, explanation: "Escalation paths emerge from permission interactions." },
        { id: "audit-a05-q4", type: "Least Privilege", challenge: "The goal.", text: "What's the standard an IAM audit measures against?", options: ["Least privilege — only the permissions each principal actually needs","Maximum flexibility","Shared admin","No policies at all"], correctIndex: 0, explanation: "Least privilege is the benchmark; excess grants are findings." },
        { id: "audit-a05-q5", type: "Scale", challenge: "Faster than humans.", text: "Why use an agent for IAM review?", options: ["It reads hundreds of policies faster and more consistently than any human","It writes new policies randomly","It deletes roles","It's slower but cheaper"], correctIndex: 0, explanation: "Policy analysis at scale is exactly where agents beat manual review." },
        { id: "audit-a05-q6", type: "Stale Access", challenge: "Old keys.", text: "Which IAM hygiene issue should the agent flag?", options: ["Access keys older than 90 days on active users","Keys rotated yesterday","MFA enabled","Roles with temporary credentials"], correctIndex: 0, explanation: "Long-lived keys are a standard finding to rotate." },
        { id: "audit-a05-q7", type: "Roles vs Users", challenge: "Best practice.", text: "For applications, what does IAM best practice favor?", options: ["Roles with temporary credentials over users with long-lived keys","Hardcoded keys","Shared root","One key for all apps"], correctIndex: 0, explanation: "Roles issue short-lived credentials with nothing to leak." },
        { id: "audit-a05-q8", type: "Concept", challenge: "Why it matters.", text: "Over-permissioned IAM is dangerous because…", options: ["A single compromised principal then has far more reach than its job requires","It's slower","It costs more","It's invisible"], correctIndex: 0, explanation: "Excess privilege turns one compromise into a broad breach." },
      ],
    },
    ctf: {
      scenario: "The IAM analyzer agent has completed its run on the target account. Three policy analysis files contain the flag fragments. Read each to understand the privilege escalation chain and collect the flag.",
      hint: "IAM analysis output is in /iam-analysis. Three files contain the flag pieces.",
      hints: [
        "List /iam-analysis to find the output files.",
        "Start with policy-findings.txt for the first fragment.",
        "The escalation-chain.txt and remediation.txt contain the remaining fragments.",
      ],
      files: {
        "/iam-analysis/policy-findings.txt": `# IAM Policy Analysis — Claude claude-opus-4-7

Role: prod-data-processor
Policy: arn:aws:iam::123456789012:policy/DataProcessorPolicy

CRITICAL Finding: Action wildcards on sensitive services
  Statement: {"Action": "s3:*", "Resource": "*", "Effect": "Allow"}
  Risk: Full S3 access — can read/write/delete any bucket in account

HIGH Finding: iam:PassRole present without Condition
  Statement: {"Action": "iam:PassRole", "Resource": "*"}
  Risk: Can pass any role to any service — privilege escalation vector

Fragment-1: FLAG{14M_PR1V_
`,
        "/iam-analysis/escalation-chain.txt": `# Privilege Escalation Chain Analysis

Chain identified for role: prod-data-processor

Step 1: iam:PassRole (Resource: *) — can pass admin-role to EC2
Step 2: ec2:RunInstances — can launch new EC2 instance
Step 3: Launched EC2 inherits admin-role
Step 4: Full account access achieved

Severity: CRITICAL — full account takeover from data processor compromise

Fragment-2: 3SC_
`,
        "/iam-analysis/remediation.txt": `# Remediation Recommendations

prod-data-processor policy replacement:
  REMOVE: s3:* on Resource:*
  ADD: s3:GetObject, s3:PutObject on Resource: arn:aws:s3:::acme-data-proc/*

  REMOVE: iam:PassRole on Resource:*
  ADD: Remove iam:PassRole entirely (data processor does not need to launch instances)

Estimated effort: 2 hours
Risk reduction: CRITICAL → LOW

Fragment-3: CH41N}

─────────────────────────────────────────────────────────────────────
WHAT YOU'RE LEARNING:
  1. iam:PassRole without Condition constraints is a privilege escalation vector — it lets any service launch instances with admin roles
  2. Claude reasons across policy layers to answer: "What is the maximum privilege this role can escalate to if compromised?" — a question manual review rarely completes
  3. Capital One (2019): an overly permissive IAM role turned an SSRF vulnerability into a 106M-record breach; least-privilege scoping is the direct mitigation
─────────────────────────────────────────────────────────────────────
`,
      },
      dirs: {
        "/": [{ name: "iam-analysis", isDir: true }],
        "/iam-analysis": [
          { name: "policy-findings.txt", isDir: false },
          { name: "escalation-chain.txt", isDir: false },
          { name: "remediation.txt", isDir: false },
        ],
      },
      fragments: [
        { trigger: "/iam-analysis/policy-findings.txt", value: "FLAG{14M_PR1V_", label: "Fragment 1 — Policy Findings" },
        { trigger: "/iam-analysis/escalation-chain.txt", value: "3SC_", label: "Fragment 2 — Escalation Chain" },
        { trigger: "/iam-analysis/remediation.txt", value: "CH41N}", label: "Fragment 3 — Remediation" },
      ],
    },
  },

  // ─── audit-a06: MCP Server Integration ───────────────────────────────────────
  {
    epochId: "tech-audit-3",
    wonder: { name: "MCP Integration Lab", location: "San Francisco, California", era: "Present Day", emoji: "🔗" },
    id: "audit-a06",
    order: 6,
    title: "The Protocol Integrator",
    subtitle: "MCP Server Integration — filesystem, git, and web fetch tools",
    category: "ai",
    xp: 200,
    badge: { id: "audit-a-badge-06", name: "MCP Integrator", emoji: "🔗" },
    easeScore: 6,
    valueScore: 8,
    rank: 8,
    challengeType: "ctf",
    info: {
      tagline: "MCP is the USB standard for AI tools. One protocol, every system.",
      year: 2024,
      overview: [
        "The Model Context Protocol (MCP) is an open standard from Anthropic, released in late 2024, for connecting AI models to external tools and data sources:\n- Before MCP, every AI audit tool needed custom integration code per data source — a bespoke AWS SDK wrapper, a git history reader, a log parser.\n- MCP replaces that with a client-server model: servers expose resources and callable tools, and Claude connects as a client through one uniform interface regardless of the underlying system.\n- A large ecosystem of pre-built servers already covers filesystem, git, GitHub, web fetch, and Postgres, with community servers for AWS, GCP, Kubernetes, Splunk, Datadog, PagerDuty, and Jira.",
        "MCP's separation of concerns is what makes it safe for audit work:\n- The server authenticates to the target, enforces access controls, transforms raw data for Claude, and respects rate limits — all in code you control, not in a prompt that adversarial input could influence.\n- Claude only reasons about what to request and how to synthesize findings.\n- The server configuration is the agent's access-control list: scope the filesystem server to one root directory, the GitHub server to specific repos, the database server to read-only credentials on specific tables — minimum viable access for the audit scope.",
        "Two design choices shape each deployment:\n- Transport — `stdio` runs the server as a local subprocess with the agent's credentials and no network exposure (simpler and safer for single-host audits), while HTTP+SSE runs it as a network service for distributed cloud pipelines with network-level controls.\n- Resource model — read-only resources (requested by URI) versus tools (callable functions with side effects); audits use mostly resources, but tools enable workflow integrations like filing Jira tickets or posting PR comments, and servers can be locked to read-only mode.",
        "MCP access is a real trust boundary that demands defense-in-depth:\n- A server with read access to all production tables means Claude can request any data in that scope.\n- Prompt injection is a genuine risk — if Claude processes an audit finding whose text instructs it to exfiltrate data via its tools, a naive agent might comply.\n- Mitigate by scoping server access tightly, allowlisting requestable resources, logging every resource request and tool invocation, and running agents in isolated environments that block lateral movement even if compromised.",
      ],
      technical: {
        title: "MCP Architecture for Audit",
        body: [
          "MCP is a client-server model where Claude is the client and the server wraps an external system:\n- The server exposes resources (URI-addressable, read-only data like files, database rows, or API responses) and tools (callable functions that may act).\n- Communication is JSON-RPC 2.0 over `stdio` (server as subprocess) or HTTP+SSE (server as network service).\n- Claude receives the list of available resources and tools in its context and requests or invokes them as part of its reasoning.",
          "Servers are configured declaratively, and several can run at once:\n- Claude Code reads them from `claude_desktop_config.json`; API agents pass them when initializing the client or session.\n- Each entry gives the start command (stdio) or URL (HTTP+SSE), any auth environment variables, and a description that tells Claude what the server provides.",
          "A handful of servers cover most infrastructure and application audits, each scoped to minimum viable access:\n- `@modelcontextprotocol/server-filesystem` — file read/write within a configured root limited to the audit workspace, not the whole disk.\n- `@modelcontextprotocol/server-github` — repo contents, commit history, PRs, and Actions, using a read-only token scoped to specific repos.\n- `@modelcontextprotocol/server-fetch` — public web pages, security policies, and HTTP headers for web assessments.\n- `@modelcontextprotocol/server-postgres` — read-only queries for log analysis and compliance data; inject every credential via environment or a secrets manager, never the config file, and log every invocation.",
          "Custom servers wrap any internal system using the official Python or TypeScript SDK:\n- Implement `list_resources` to advertise data, `read_resource` to return it by URI, and `call_tool` for write operations.\n- High-value internal targets include a Splunk server for SIEM queries, a ServiceNow server for change records, a Vault server that lists which secrets exist (not their values), and a Terraform-state server for current infrastructure state.",
        ],
        codeExample: {
          label: "MCP config for audit agent (claude_desktop_config.json)",
          code: `{
  "mcpServers": {
    "filesystem": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-filesystem", "/audit/workspace"],
      "description": "Read audit evidence files and configuration documents"
    },
    "github": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"],
      "env": {"GITHUB_PERSONAL_ACCESS_TOKEN": "<token>"},
      "description": "Access GitHub repos for source code and history review"
    },
    "fetch": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-fetch"],
      "description": "Fetch public web pages for compliance documentation"
    }
  }
}`,
        },
      },
      incident: {
        title: "SolarWinds Supply Chain — Lack of Automated Audit Tooling (2020)",
        when: "October 2019 – December 2020",
        where: "SolarWinds build pipeline, global",
        impact: "18,000+ organizations compromised; SUNBURST backdoor in Orion updates",
        body: [
          "SolarWinds SUNBURST is the defining supply-chain incident of the modern era:\n- Attackers attributed to Russia's SVR breached SolarWinds' development environment and modified the Orion build process to inject the SUNBURST backdoor into legitimately signed updates.\n- It went undetected from roughly October 2019 to December 2020 — over fourteen months — until FireEye, itself a victim, found it.\n- About 18,000 organizations installed the backdoored update, and the attackers used it for persistent access to roughly 100 high-value targets, including US government agencies.",
          "The technical indicators existed across several systems at once, but nothing correlated them:\n- The git repo held a commit adding the backdoor with no associated pull request or code review.\n- The build system signed binaries that differed from the compiled source, because the backdoor was injected during the build before signing.\n- The artifact store's distributed-binary hash didn't match the hash a clean compile would produce — any one ambiguous alone, all three together conclusive.",
          "An MCP-connected agent with simultaneous access to the git server, build system, project-management system, and artifact repository could have caught the correlation:\n- Query git for commits touching security-sensitive files, then cross-reference them against pull requests to find commits with no review.\n- Compare build-artifact hashes against locally compiled hashes to detect build tampering, and correlate build and commit timestamps to spot artifacts built from source states that never existed.\n- Each check needs custom integration on its own; MCP provides the standardized layer that makes the combined analysis practical.",
          "SolarWinds forced an industry- and government-wide reassessment of supply-chain security:\n- Executive Order 14028 (2021) mandated Software Bill of Materials (SBOM) requirements for software sold to the US government.\n- NIST SP 800-218 added controls for build-environment security and artifact integrity, making cross-system supply-chain audit a compliance requirement for government vendors, not just a best practice.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Claude Audit Agent", sub: "MCP client", type: "attacker" },
          { label: "MCP Servers", sub: "filesystem / git / fetch / db", type: "system" },
          { label: "Audit Data Sources", sub: "repos / configs / logs", type: "victim" },
          { label: "Unified Audit Report", sub: "cross-system findings", type: "result" },
        ],
      },
      timeline: [
        { year: 2020, event: "SolarWinds SUNBURST — supply chain attack undetected for 14 months" },
        { year: 2024, event: "Anthropic releases Model Context Protocol (MCP) — open standard", highlight: true },
        { year: 2024, event: "MCP ecosystem grows to 1000+ community servers" },
        { year: 2025, event: "MCP becomes standard integration layer for enterprise AI audit tooling" },
      ],
      keyTakeaways: [
        "MCP is the standardized protocol for connecting Claude to external audit data sources — one server spec works in Claude Code and in production API pipelines",
        "Pre-built servers for filesystem, git, GitHub, fetch, postgres eliminate custom integration boilerplate — focus on audit logic, not I/O code",
        "MCP separates concerns: servers enforce access controls and rate limits; Claude reasons about what to request and how to synthesize findings",
        "Scope each MCP server to minimum required access: specific directories, read-only credentials, specific repositories, specific database tables",
        "Stdio transport for local single-host audit environments; HTTP+SSE for distributed cloud-based audit pipelines",
        "MCP resource model distinguishes read-only resources from write tools — configure audit servers in read-only mode to prevent unintended system modifications",
        "Custom MCP servers wrap any internal system using the official Python or TypeScript SDK — Splunk, ServiceNow, Vault, Terraform state are high-value targets",
        "SolarWinds (2020) succeeded partly because no system correlated git commits, build artifacts, and project management records — MCP enables this cross-system correlation",
        "Prompt injection through retrieved content is a real attack vector against MCP agents — log all invocations and run agents in isolated environments",
      ],
      references: [
        { title: "Model Context Protocol Documentation", url: "https://modelcontextprotocol.io/docs" },
        { title: "MCP Server Registry", url: "https://github.com/modelcontextprotocol/servers" },
      ],
    },
    quiz: {
      questions: [
        { id: "audit-a06-q1", type: "Core Idea", challenge: "USB for AI tools.", text: "What is MCP (Model Context Protocol)?", options: ["A standard protocol for connecting AI models to tools and data — 'USB for AI tools'","A new encryption cipher","A cloud provider","A password manager"], correctIndex: 0, explanation: "MCP standardizes tool/resource access: one protocol, many systems." },
        { id: "audit-a06-q2", type: "Why Standardize", challenge: "The benefit.", text: "What does a standard protocol like MCP give you?", options: ["Reusable tool servers that work across any MCP-compatible client","Slower integrations","Vendor lock-in","Fewer tools"], correctIndex: 0, explanation: "One protocol means tools built once work everywhere." },
        { id: "audit-a06-q3", type: "Server", challenge: "What it exposes.", text: "An MCP server exposes…", options: ["Tools and resources a model can invoke through the protocol","A website","A database backup","A VPN"], correctIndex: 0, explanation: "MCP servers publish tools/resources for the client model to use." },
        { id: "audit-a06-q4", type: "Security", challenge: "Untrusted results.", text: "Why scan MCP tool results before the model acts on them?", options: ["Retrieved content can carry prompt injection that hijacks the agent","To compress them","To translate them","They're always safe"], correctIndex: 0, explanation: "Tool results are untrusted data — scan for injection." },
        { id: "audit-a06-q5", type: "Least Privilege", challenge: "Scope the server.", text: "How should MCP tool permissions be scoped?", options: ["To the minimum each tool needs — same least-privilege rule as any integration","Full admin","Unlimited","Production secrets for all"], correctIndex: 0, explanation: "Scope MCP tools tightly; an over-permissioned tool is an attack surface." },
        { id: "audit-a06-q6", type: "Audit Use", challenge: "Why it helps audit.", text: "How does MCP help agentic auditing?", options: ["It lets one audit agent plug into many systems through a common interface","It blocks all tools","It removes the need for tools","It only works offline"], correctIndex: 0, explanation: "Standardized connectivity lets agents audit diverse systems uniformly." },
        { id: "audit-a06-q7", type: "Trust Boundary", challenge: "Treat it carefully.", text: "An MCP tool's output should be treated as…", options: ["Untrusted input that must be validated/scanned","Fully trusted","Encrypted by default","Irrelevant"], correctIndex: 0, explanation: "Validate MCP output like any external input." },
        { id: "audit-a06-q8", type: "Concept", challenge: "One protocol.", text: "The point of 'one protocol, every system' is…", options: ["Interoperability — build the tool once, use it across clients and models","Slower development","More silos","Less reuse"], correctIndex: 0, explanation: "Standardization maximizes reuse across the ecosystem." },
      ],
    },
    ctf: {
      scenario: "You are configuring MCP servers for an audit agent. Three configuration fragments are stored across the MCP lab filesystem. Assemble the configuration to complete the audit pipeline setup.",
      hint: "MCP config fragments are in /mcp-lab. Read each fragment file.",
      hints: [
        "List /mcp-lab to find the configuration fragments.",
        "The fragments are split across servers/, config/, and keys/ directories.",
        "Read all three files to collect the flag pieces.",
      ],
      files: {
        "/mcp-lab/servers/filesystem-server.json": `{
  "server": "filesystem",
  "command": "npx @modelcontextprotocol/server-filesystem",
  "args": ["/audit/workspace"],
  "status": "configured",
  "fragment": "FLAG{MCP_"
}`,
        "/mcp-lab/config/mcp-config.json": `{
  "mcpServers": {
    "filesystem": "configured",
    "github": "configured",
    "fetch": "configured"
  },
  "audit_scope": "all-repos-in-org",
  "fragment": "4UD1T_"
}`,
        "/mcp-lab/keys/integration-key.txt": `# MCP Integration Key
# This key authorizes the audit agent to connect all configured MCP servers
# Key hash: sha256:a3f9b2c1d4e5f678...

Integration status: ACTIVE
All MCP servers: CONNECTED
Fragment: PR0T0C0L}

─────────────────────────────────────────────────────────────────────
WHAT YOU'RE LEARNING:
  1. MCP is the standardized protocol for connecting Claude to audit data sources — one server spec works in Claude Code IDE and in production API pipelines
  2. Pre-built MCP servers (filesystem, git, GitHub, fetch, postgres) eliminate custom integration work; focus on audit logic, not I/O boilerplate
  3. SolarWinds (2020) succeeded partly because no MCP-style integration connected git history, build artifacts, and network monitoring — the anomaly existed in each system but nothing correlated them
─────────────────────────────────────────────────────────────────────
`,
      },
      dirs: {
        "/": [{ name: "mcp-lab", isDir: true }],
        "/mcp-lab": [
          { name: "servers", isDir: true },
          { name: "config", isDir: true },
          { name: "keys", isDir: true },
        ],
        "/mcp-lab/servers": [{ name: "filesystem-server.json", isDir: false }],
        "/mcp-lab/config": [{ name: "mcp-config.json", isDir: false }],
        "/mcp-lab/keys": [{ name: "integration-key.txt", isDir: false }],
      },
      fragments: [
        { trigger: "/mcp-lab/servers/filesystem-server.json", value: "FLAG{MCP_", label: "Fragment 1 — Server Config" },
        { trigger: "/mcp-lab/config/mcp-config.json", value: "4UD1T_", label: "Fragment 2 — MCP Config" },
        { trigger: "/mcp-lab/keys/integration-key.txt", value: "PR0T0C0L}", label: "Fragment 3 — Integration Key" },
      ],
    },
  },

  // ─── audit-a07: Agentic IaC Review ───────────────────────────────────────────
  {
    epochId: "tech-audit-3",
    wonder: { name: "IaC Scanning Lab", location: "San Francisco, California", era: "Present Day", emoji: "📐" },
    id: "audit-a07",
    order: 7,
    title: "The Infrastructure Auditor",
    subtitle: "Agentic IaC Review — Claude reading Terraform plans",
    category: "ai",
    xp: 200,
    badge: { id: "audit-a-badge-07", name: "IaC Auditor", emoji: "📐" },
    easeScore: 6,
    valueScore: 9,
    rank: 5,
    challengeType: "ctf",
    info: {
      tagline: "The terraform plan is the audit artifact. Claude reads it before apply.",
      year: 2024,
      overview: [
        "Infrastructure as Code (IaC) — Terraform, CloudFormation, Pulumi, Kubernetes manifests — describes your cloud's exact intended state in machine-readable form. That creates a powerful audit opportunity: review the code before anything is deployed. A misconfiguration caught in a pull request costs an engineering hour; the same one caught after a production deploy can cost millions.",
        "Agentic IaC review slots into the CI/CD pipeline as a required gate between a code change and deployment:\n- When a PR touches Terraform, CI runs `terraform plan` and converts it to JSON with `terraform show -json`.\n- The plan is sent to Claude with a structured audit prompt, and structured findings come back.\n- A formatted security review is posted on the PR — and the merge is blocked if any critical findings are present.\n- Developers get the feedback while the context is fresh, before any infrastructure actually changes.",
        "The edge over rule-based scanners like tfsec and Checkov is that Claude reasons about intent and effect instead of matching a fixed rule library:\n- It knows `publicly_accessible = true` on a production RDS instance is a finding, and that a security group opening port 3306 to `0.0.0.0/0` exposes a database to the internet — without each rule being pre-programmed.\n- It reads the planned diff, so it credits `encrypted = false → true` as a fix but blocks `publicly_accessible = false → true` as a critical regression.\n- It catches multi-resource risk chains a single-resource rule misses — e.g., a public S3 bucket plus an over-permissive IAM role together form a data-exfiltration path.\n- It flags sensitive details hardcoded in the IaC itself — internal CIDR ranges, VPC IDs, internal endpoints — that would help an attacker map your environment.",
        "The biggest long-term payoff is the remediation loop: instead of 'add encryption,' Claude returns the exact Terraform block to paste in. Findings get fixed in minutes, and the steady stream of specific, actionable feedback trains the team — so each new pull request arrives with fewer findings than the last.",
      ],
      technical: {
        title: "PR-Integrated IaC Review Pipeline",
        body: [
          "When a PR modifies a `.tf`, `.yaml`, or `.json` infra file, a CI job runs the review gate:\n- Check out the branch and run `terraform init` against the production state backend.\n- Run `terraform plan -out=plan.tfplan`, then `terraform show -json plan.tfplan > plan.json` for structured output.\n- Send `plan.json` to the review agent and get findings back as JSON.\n- Post a formatted GitHub PR comment, and exit non-zero on any critical finding so the required status check fails and blocks the merge.",
          "The audit prompt needs specific engineering to produce consistent, machine-readable output. Spell out:\n- The provider and version (AWS Terraform provider 5.x) and the baseline (e.g. CIS AWS Foundations Benchmark v1.4).\n- The severity threshold that blocks a merge — CRITICAL only, or CRITICAL and HIGH.\n- The exact output JSON shape, plus any sanctioned exceptions that must not be flagged (like an intentionally public website bucket).",
          "Severity should map to the real impact of deploying the misconfiguration:\n- CRITICAL — immediate exposure or access-control bypass: public databases, internet ingress on management ports, CloudTrail or KMS-key deletion.\n- HIGH — materially raises risk without immediate exposure: missing encryption, weak backup retention, over-broad IAM.\n- MEDIUM — best-practice violations with no immediate risk: missing tags, weak logging, non-recommended TLS versions.\n- LOW — style and consistency only.",
          "Layer it with the rules-based scanners rather than replacing them: run `tfsec` or `Checkov` first as a fast, cheap gate for obvious violations, then send the change to Claude for the semantic reasoning — multi-resource interactions and org-specific policy — that justifies its extra latency and cost.",
          "Exception management keeps it sustainable: some resources are intentionally non-compliant (a public assets bucket, an open load-balancer security group, an unencrypted dev database). Document each with a justification, get security approval, and track it in a suppression file the agent reads before flagging — Claude can even vet the justifications and surface exceptions that are expiring or missing approval.",
        ],
        codeExample: {
          label: "IaC review agent — Terraform plan analysis",
          code: `def review_terraform_plan(plan_json: str) -> dict:
    response = client.messages.create(
        model="claude-opus-4-7",
        max_tokens=2000,
        messages=[{"role": "user", "content": f"""Review this Terraform plan for security issues.
Apply CIS AWS Foundations Benchmark v1.4 as the baseline.

{plan_json}

For each resource change, identify:
1. Security misconfigurations (public access, unencrypted storage, open security groups)
2. Missing required controls (CloudTrail, VPC flow logs, MFA delete on S3)
3. Dangerous changes (deleting security controls, weakening IAM policies)

Return JSON: {{"findings": [{{"resource": str, "severity": str, "issue": str, "recommendation": str}}]}}
Severity: CRITICAL | HIGH | MEDIUM | LOW"""}]
    )
    return json.loads(response.content[0].text)`,
        },
      },
      incident: {
        title: "Twitch Source Code Leak — Terraform Misconfiguration (2021)",
        when: "October 2021",
        where: "Twitch AWS infrastructure",
        impact: "125GB of source code, internal tools, and creator payout data leaked",
        body: [
          "In October 2021, attackers leaked 125 GB of Twitch's most sensitive internal data — its full source-code history, internal developer tools, mobile clients, and three years of creator payout figures. The dump also included Twitch's Terraform files, documenting its AWS architecture in detail — a reconnaissance goldmine for an attacker.",
          "That exposure shows the dual security role of IaC review:\n- Preventive — catch misconfigured infrastructure in the PR before it ever reaches production.\n- Defensive — make sure the IaC files themselves don't hand an attacker a map if they're exfiltrated.",
          "Claude flags both categories: configuration risks in the Terraform resources, and information leakage in the values — internal CIDR ranges, internal DNS names, ARNs for sensitive resources, and comments documenting security-relevant decisions. The fix is variable-based design: replace hardcoded values with Terraform variables, data sources, and remote state so nothing sensitive is frozen into a file that may outlive the infrastructure it describes.",
          "It's increasingly a compliance requirement, not just good practice: NIST SP 800-218 (the Secure Software Development Framework) includes IaC security review, and FedRAMP explicitly requires it — so for regulated or government work, automated IaC review with documented results is becoming required evidence, not just a best practice.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Pull Request", sub: ".tf file changes", type: "attacker" },
          { label: "Claude IaC Reviewer", sub: "terraform plan analysis", type: "system" },
          { label: "Infrastructure Changes", sub: "S3 / RDS / SG / IAM", type: "victim" },
          { label: "PR Security Comment", sub: "findings before merge", type: "result" },
        ],
      },
      timeline: [
        { year: 2016, event: "tfsec released — first open-source Terraform security scanner" },
        { year: 2021, event: "Twitch leak — IaC configs expose infrastructure architecture" },
        { year: 2022, event: "Checkov adds 1000+ IaC security policies" },
        { year: 2024, event: "Claude IaC review integrated into CI/CD pipelines — semantic analysis", highlight: true },
      ],
      keyTakeaways: [
        "Integrate IaC review into CI/CD: terraform plan → JSON conversion → Claude analysis → PR comment → merge block on critical findings",
        "Claude understands IaC semantics without explicit rules — it reasons about configuration intent and effect, not just pattern matching",
        "CIS AWS Foundations Benchmark v1.4 is the standard baseline for Terraform security reviews; map findings to specific benchmark controls",
        "CRITICAL findings must block PR merge via required status checks — optional review comments get bypassed under delivery pressure",
        "Multi-resource analysis catches risk chains that single-resource rules miss: combinations of misconfigurations create compounding vulnerabilities",
        "IaC files themselves leak sensitive data if exposed — flag hardcoded internal network details, DNS names, and architecture-revealing comments",
        "Exception management requires documented business justification, approval chain, and expiration date — manage exceptions as suppressions in a versioned file",
        "Layer static analysis tools (Checkov, tfsec) with Claude — static tools catch obvious violations fast; Claude catches complex semantic findings",
        "Twitch (2021): exposed Terraform files gave attackers a detailed map of AWS infrastructure, accelerating post-breach lateral movement",
      ],
      references: [
        { title: "CIS AWS Foundations Benchmark", url: "https://www.cisecurity.org/benchmark/amazon_web_services" },
        { title: "Checkov IaC Scanner", url: "https://github.com/bridgecrewio/checkov" },
      ],
    },
    quiz: {
      questions: [
        { id: "audit-a07-q1", type: "Core Idea", challenge: "Review before apply.", text: "Why is reviewing a `terraform plan` so valuable?", options: ["You catch misconfigurations in the code before any infrastructure is deployed","It runs the app faster","It encrypts the state file","It deletes old resources"], correctIndex: 0, explanation: "Shift-left: a finding in a PR costs an hour; in production it can cost millions." },
        { id: "audit-a07-q2", type: "Pipeline", challenge: "How it gates.", text: "How does agentic IaC review fit the CI/CD pipeline?", options: ["A required gate: plan → JSON → Claude review → block merge on critical findings","It runs after deployment only","It replaces git","It's manual"], correctIndex: 0, explanation: "It sits between the code change and deployment as a required check." },
        { id: "audit-a07-q3", type: "Claude vs Rules", challenge: "The edge.", text: "What does Claude add over rule-based scanners like tfsec/Checkov?", options: ["Semantic reasoning about intent — multi-resource risk and org-specific policy","Faster regex","Nothing — it's identical","Only formatting"], correctIndex: 0, explanation: "It reasons about effect, not just a fixed rule library." },
        { id: "audit-a07-q4", type: "Plan Diff", challenge: "Improvement vs regression.", text: "Why is the planned diff richer than scanning static config?", options: ["It distinguishes a fix (encrypted false→true) from a regression (public false→true)","It's shorter","It hides changes","It ignores context"], correctIndex: 0, explanation: "Reading the change in context separates improvements from regressions." },
        { id: "audit-a07-q5", type: "Multi-Resource", challenge: "Risk chains.", text: "What multi-resource pattern should IaC review catch?", options: ["A public S3 bucket plus an over-permissive IAM role forming a data-exfil path","Two identical buckets","A renamed variable","A formatting change"], correctIndex: 0, explanation: "Interacting resources create risk neither flags alone." },
        { id: "audit-a07-q6", type: "Info Leakage", challenge: "Files leak too.", text: "Beyond config, what should IaC review flag in the files themselves?", options: ["Hardcoded internal CIDRs, VPC IDs, and endpoints that help an attacker map you","Indentation","Comment style","File names"], correctIndex: 0, explanation: "IaC files can leak reconnaissance-grade detail if exfiltrated." },
        { id: "audit-a07-q7", type: "Remediation", challenge: "Actionable fixes.", text: "What makes IaC review feedback most valuable long-term?", options: ["It returns the exact Terraform block to paste in, training the team over time","It just says 'fix it'","It blocks all merges","It rewrites the whole repo"], correctIndex: 0, explanation: "Specific, actionable fixes reduce findings in future PRs." },
        { id: "audit-a07-q8", type: "Layering", challenge: "Defense in depth.", text: "How should Claude and the rules-based scanners be combined?", options: ["Run tfsec/Checkov first as a cheap gate, then Claude for the subtle findings","Use only Claude","Use only the scanners","Run neither"], correctIndex: 0, explanation: "Layer fast rules with semantic reasoning to balance cost and depth." },
      ],
    },
    ctf: {
      scenario: "An agentic IaC reviewer ran against a Terraform plan and stored its findings. Three finding files contain the flag. Read each to understand the infrastructure vulnerabilities.",
      hint: "IaC review output is in /iac-review. Read the finding files in the subdirectories.",
      hints: [
        "List /iac-review to find the output structure.",
        "Check s3/, rds/, and sg/ directories for findings.",
        "Each findings file contains one flag fragment.",
      ],
      files: {
        "/iac-review/s3/s3-findings.txt": `# S3 Bucket — IaC Review Finding

Resource: aws_s3_bucket.prod_data
Change: CREATE

CRITICAL: bucket ACL set to "public-read"
  Line 12: acl = "public-read"
  Recommendation: Remove ACL, use bucket policies with explicit denies

HIGH: Server-side encryption not configured
  Recommendation: Add aws_s3_bucket_server_side_encryption_configuration

Fragment-1: FLAG{14C_
`,
        "/iac-review/rds/rds-findings.txt": `# RDS Instance — IaC Review Finding

Resource: aws_db_instance.prod_postgres
Change: MODIFY

HIGH: publicly_accessible changing from false to true
  This exposes the database endpoint to the public internet
  Recommendation: Set publicly_accessible = false; use VPC + bastion for access

MEDIUM: backup_retention_period reducing from 14 to 1
  Recommendation: Maintain minimum 7-day retention for production databases

Fragment-2: CL4UD3_
`,
        "/iac-review/sg/sg-findings.txt": `# Security Group — IaC Review Finding

Resource: aws_security_group_rule.allow_ssh
Change: CREATE

CRITICAL: SSH open to 0.0.0.0/0
  cidr_blocks = ["0.0.0.0/0"] on port 22
  Recommendation: Restrict to VPN CIDR or use AWS Systems Manager Session Manager

IaC Review Complete — 2 CRITICAL, 2 HIGH, 1 MEDIUM
All findings posted as PR comment. Merge blocked pending CRITICAL resolution.

Fragment-3: R3V13W}

─────────────────────────────────────────────────────────────────────
WHAT YOU'RE LEARNING:
  1. IaC review in CI/CD catches misconfigurations before deployment — a PR comment costs nothing; a production breach costs millions
  2. Claude understands IaC semantics without explicit rule programming — it knows publicly_accessible=true on RDS or 0.0.0.0/0 on port 22 are findings
  3. Critical findings blocking PR merge (via required status checks) is the enforcement mechanism — without it, developers can override the review
─────────────────────────────────────────────────────────────────────
`,
      },
      dirs: {
        "/": [{ name: "iac-review", isDir: true }],
        "/iac-review": [
          { name: "s3", isDir: true },
          { name: "rds", isDir: true },
          { name: "sg", isDir: true },
        ],
        "/iac-review/s3": [{ name: "s3-findings.txt", isDir: false }],
        "/iac-review/rds": [{ name: "rds-findings.txt", isDir: false }],
        "/iac-review/sg": [{ name: "sg-findings.txt", isDir: false }],
      },
      fragments: [
        { trigger: "/iac-review/s3/s3-findings.txt", value: "FLAG{14C_", label: "Fragment 1 — S3 Findings" },
        { trigger: "/iac-review/rds/rds-findings.txt", value: "CL4UD3_", label: "Fragment 2 — RDS Findings" },
        { trigger: "/iac-review/sg/sg-findings.txt", value: "R3V13W}", label: "Fragment 3 — SG Findings" },
      ],
    },
  },

  // ─── audit-a08: Automated Evidence Collection ─────────────────────────────────
  {
    epochId: "tech-audit-3",
    wonder: { name: "Evidence Collection Lab", location: "Washington, D.C.", era: "Present Day", emoji: "📋" },
    id: "audit-a08",
    order: 8,
    title: "The Evidence Collector",
    subtitle: "Automated Evidence Collection — Claude structuring audit artifacts",
    category: "ai",
    xp: 200,
    badge: { id: "audit-a-badge-08", name: "Evidence Collector", emoji: "📋" },
    easeScore: 7,
    valueScore: 8,
    rank: 6,
    challengeType: "ctf",
    info: {
      tagline: "Evidence collection is 60% of audit time. Agents do it in 6 minutes.",
      year: 2024,
      overview: [
        "Evidence collection is the most time-consuming phase of a traditional IT audit — 50–60% of total hours on a typical SOC 2 or ISO 27001 engagement:\n- Auditors manually export console screenshots, download SIEM logs, run and capture configuration queries, and collect approval records from ticketing systems.\n- They then organize hundreds of artifacts into packages mapped to specific controls — weeks of work on large engagements, with heavy coordination with IT staff.\n- It's inherently point-in-time: the evidence reflects system state at the moment of collection, which may not represent the audited period.",
        "Agentic collection connects Claude to the systems where evidence actually lives and validates what it finds:\n- For each control, the agent knows what evidence proves it operates, which APIs provide that evidence, how to retrieve it in the auditor's required format, and how to confirm it actually supports the control objective.\n- Control coverage is the quality metric — a control with no evidence is an automatic finding, but the subtler failure is evidence that exists yet doesn't demonstrate the control.\n- Claude catches that by reasoning about requirement versus content: an IAM credential report with MFA status is direct evidence for an MFA control, while a general user list with creation dates is not.",
        "The output is a structured package collected on a continuous schedule rather than once a year:\n- Each artifact carries the control identifier (COBIT DS5.4, SOC 2 CC6.1, NIST AC-2), collection timestamp and method, raw data, and Claude's assessment — satisfied, partially satisfied, or not satisfied — with a note on any gap.\n- Cadence matches each control's assurance need: monthly for patch management and vulnerability scanning, quarterly for access reviews, continuous with event-triggered snapshots for IDS alerting and failed-auth monitoring.\n- The result is an always-current evidence library that turns the annual audit into a review exercise, not a collection one.",
        "Two things make this production-grade compliance automation:\n- Integration with Vanta, Drata, Secureframe, or Tugboat Logic populates their evidence libraries automatically, removing the manual upload step that bottlenecks continuous compliance, with Claude flagging insufficient evidence before it reaches the auditor's queue.\n- The auditor's role shifts from collection operator to reviewer — investigating gaps, judging whether partially-satisfied controls cross the materiality threshold, and advising management on remediation, which is the judgment work clients actually pay for.",
      ],
      technical: {
        title: "Evidence Package Structure",
        body: [
          "A production evidence package is hierarchical so auditors can navigate from summary to artifact without losing context:\n- Engagement level — scope, applicable frameworks, collection period, and overall posture summary.\n- Control domain — grouped by framework section (logical access, change management, incident response) with domain summary statistics.\n- Individual control — statement, evidence requirement, collected artifacts, Claude's assessment, and identified gaps.\n- Evidence artifact — raw data, collection metadata, and supporting context.",
          "Validation is where Claude adds value beyond mere collection, by reasoning about the semantic fit between a requirement and an artifact:\n- The control 'all privileged accounts must have MFA enabled' needs evidence of MFA status for every account with administrative access.\n- An AWS IAM credential report satisfies it — it lists every user's MFA device status and attached policies — while an Active Directory user list does not, because it lacks MFA status.\n- Claude makes that distinction by reasoning about each artifact's information content relative to the specific requirement being tested.",
          "Two outputs make the package defensible:\n- Gap identification — when a control is 'partially satisfied,' Claude names the exact gap (which systems lack evidence, which accounts are exceptions, which periods lack coverage), so the auditor re-collects only the five controls that need it rather than all 150 — cutting time-to-complete a SOC 2 audit 40–60%.\n- Evidence integrity — artifacts are traceable to source, timestamped, and hash- or signature-protected; automated collection is actually more defensible than manual, since the method is in code, API calls are logged with timestamps, and raw responses are stored alongside processed artifacts.",
          "Control mapping is the hardest engineering challenge, because frameworks differ in numbering, granularity, and evidence requirements for similar controls:\n- SOC 2 CC6.1 and ISO 27001 A.9.4.1 overlap substantially but aren't identical, and NIST SP 800-53 AC-2 has dozens of sub-requirements each needing different artifacts.\n- A production system maintains a control-to-evidence mapping table specifying, per control per framework, which API calls produce satisfying evidence, the expected format, and how to validate it — and Claude uses that table as its collection guide.",
        ],
        codeExample: {
          label: "Evidence collection and validation agent",
          code: `def collect_and_validate_evidence(control: dict, tools: list) -> dict:
    """Claude collects evidence for a control and validates it."""
    response = client.messages.create(
        model="claude-opus-4-7",
        max_tokens=2000,
        tools=tools,
        messages=[{"role": "user", "content": f"""
Control: {control['id']} — {control['description']}
Required evidence: {control['evidence_required']}

Use the available tools to:
1. Collect all required evidence for this control
2. Validate whether the collected evidence satisfies the control requirement
3. Return structured JSON:
   {{"evidence_collected": [...], "assessment": "satisfied|partial|not_satisfied", "gaps": [...]}}
"""}]
    )
    # Handle tool calls in agentic loop, then return final assessment
    return parse_final_assessment(response)`,
        },
      },
      incident: {
        title: "Equifax SOC 2 Evidence Gap — Pre-Breach (2017)",
        when: "2016–2017",
        where: "Equifax Atlanta HQ",
        impact: "147M records breached; post-incident audit revealed evidence collection gaps masked control failures",
        body: [
          "The 2017 Equifax breach exposed personal data for 147 million Americans and remains one of the largest in history:\n- The root cause was an unpatched Apache Struts vulnerability, CVE-2017-5638, public with a patch available since March 2017.\n- The breach hit in May 2017 — two months after the fix — because the patch-management control wasn't operating as designed: its completion certificate didn't actually verify that the Struts flaw was patched on the specific internet-facing servers.",
          "Equifax illustrates the gap between evidence existence and evidence validity:\n- It had patch-management artifacts — activity reports, completion certificates, scan results — but none proved the specific vulnerable component was patched on the in-scope web servers within the required window.\n- Claude validation would have flagged exactly that: the evidence showed patching of general server categories but never demonstrated the Apache Struts component patched on the internet-facing servers in scope.",
          "The FTC settlement imposed, as a mandate, what a mature automated evidence program produces proactively:\n- Equifax had to build a comprehensive information security program with specific evidence-documentation requirements per control, independent assessment of evidence quality, and board-level reporting on control effectiveness.",
          "The incident reshaped how the industry views compliance certification:\n- Equifax held SOC 2 certifications while its patch-management control was failing, prompting the AICPA to stress the difference between a control existing (Type I) and operating effectively over a sustained period (Type II).\n- Automated evidence collection with continuous validation is the technical implementation of Type II assurance — proving the control works every day throughout the period, not just that it exists.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Claude Orchestrator", sub: "evidence collection agent", type: "attacker" },
          { label: "Evidence Sources", sub: "APIs / logs / configs / docs", type: "system" },
          { label: "Control Requirements", sub: "COBIT / SOC 2 / NIST", type: "victim" },
          { label: "Evidence Package", sub: "validated, organized, mapped", type: "result" },
        ],
      },
      timeline: [
        { year: 2017, event: "Equifax breach — evidence collection gaps masked patch control failures" },
        { year: 2020, event: "AICPA updates SOC 2 evidence requirements — automated collection growing" },
        { year: 2023, event: "First production agentic evidence collection systems deployed", highlight: true },
        { year: 2024, event: "Claude evidence validation achieves 95%+ accuracy vs manual auditor review" },
      ],
      keyTakeaways: [
        "Evidence collection consumes 50–60% of traditional audit hours — agentic collection reduces this to hours while improving completeness",
        "Map each evidence artifact to a specific control requirement using a control-to-evidence mapping table that defines what satisfying evidence looks like",
        "Claude validates whether evidence actually satisfies the control's requirement — not just whether an evidence file exists",
        "Three assessment outcomes: satisfied (evidence directly demonstrates control operation), partially satisfied (evidence covers most but not all requirements), not satisfied (evidence does not demonstrate control operation or is missing)",
        "Gap identification is the highest-value output: which systems are missing, which accounts are exceptions, which time periods lack coverage",
        "Continuous evidence collection on control-specific schedules produces Type II assurance — control operating effectively every day, not just at audit time",
        "Evidence integrity requires timestamp, collection method documentation, raw API response storage, and hash verification of evidence files",
        "Integration with Vanta, Drata, or Secureframe automates the full flow from collection through auditor review without manual upload steps",
        "Equifax (2017): evidence existed for patch management but did not cover the specific vulnerable component — Claude validation would have flagged this gap before the breach",
      ],
      references: [
        { title: "AICPA SOC 2 Trust Services Criteria", url: "https://www.aicpa.org/resources/article/soc-2-types-and-requirements" },
        { title: "Equifax FTC Settlement", url: "https://www.ftc.gov/enforcement/refunds/equifax-data-breach-settlement" },
      ],
    },
    quiz: {
      questions: [
        { id: "audit-a08-q1", type: "Core Idea", challenge: "The time sink.", text: "Why automate audit evidence collection?", options: ["Evidence gathering is ~60% of audit time; agents do it in minutes","It's the fun part","It can't be automated","Regulators ban automation"], correctIndex: 0, explanation: "Automating the biggest time cost is where agents pay off most." },
        { id: "audit-a08-q2", type: "How", challenge: "Pull the proof.", text: "How does an agent collect compliance evidence?", options: ["Automated API calls to cloud, IdP, and SaaS systems on a schedule","By emailing system owners","By guessing","By reading screenshots"], correctIndex: 0, explanation: "API-driven collection replaces manual screenshot-gathering." },
        { id: "audit-a08-q3", type: "Integrity", challenge: "Trustworthy evidence.", text: "What makes collected evidence audit-grade?", options: ["It's timestamped and tamper-evident, with a record of how it was gathered","It's colorful","It's short","It's verbal"], correctIndex: 0, explanation: "Evidence must be verifiable and immutable to be relied on." },
        { id: "audit-a08-q4", type: "Consistency", challenge: "Same every time.", text: "An advantage of agentic evidence collection is…", options: ["It runs identically every cycle, eliminating human inconsistency","It's random","It skips controls","It's slower"], correctIndex: 0, explanation: "Repeatable collection makes audits consistent and re-runnable." },
        { id: "audit-a08-q5", type: "Frameworks", challenge: "Map to controls.", text: "Evidence should be tied to…", options: ["Specific framework controls (SOC 2, ISO 27001, etc.) it satisfies","Nothing in particular","Random tags","The weather"], correctIndex: 0, explanation: "Each piece of evidence should map to the control it proves." },
        { id: "audit-a08-q6", type: "Continuous", challenge: "Not once a year.", text: "Why collect evidence continuously rather than at audit time?", options: ["It catches control drift between audits and slashes prep time","It's cheaper to wait","Auditors prefer surprises","It's the same either way"], correctIndex: 0, explanation: "Continuous collection finds drift early and reduces crunch." },
        { id: "audit-a08-q7", type: "Scale", challenge: "Coverage.", text: "Automated evidence collection lets you cover…", options: ["Far more controls and systems than manual gathering allows","Fewer controls","Only one system","Only annually"], correctIndex: 0, explanation: "Automation expands coverage without more headcount." },
        { id: "audit-a08-q8", type: "Concept", challenge: "The win.", text: "The core value of an evidence-collection agent is…", options: ["Turning the slowest, most manual part of audit into fast, repeatable automation","Prettier reports","Fewer controls","Less rigor"], correctIndex: 0, explanation: "It automates the 60% that used to be manual toil." },
      ],
    },
    ctf: {
      scenario: "An evidence collection agent ran against the target organization and produced an evidence package. Three evidence files contain flag fragments. Read each to understand what the agent collected.",
      hint: "Evidence is organized in /evidence-pkg by control area. Read the files in each subdirectory.",
      hints: [
        "List /evidence-pkg to see the control areas.",
        "Check patch-mgmt/, access-ctrl/, and audit-log/ for evidence files.",
        "Each evidence file contains one flag fragment.",
      ],
      files: {
        "/evidence-pkg/patch-mgmt/patch-evidence.txt": `# Evidence — Patch Management Control
# Control: CM-8 (NIST) — All systems patched within 30 days of critical CVE release

Evidence Collected: 2024-11-15T14:30:00Z
Method: AWS Systems Manager — Patch Compliance API

Systems in scope: 47
Fully patched: 45
Critical patches missing: 2 (EC2 i-0abc123, i-0def456)

Claude Assessment: PARTIALLY SATISFIED
Gap: 2 systems with missing critical patches

Fragment-1: FLAG{3V1D3NC3_
`,
        "/evidence-pkg/access-ctrl/mfa-evidence.txt": `# Evidence — MFA Control
# Control: IA-3 (NIST) — MFA required for all privileged access

Evidence Collected: 2024-11-15T14:31:00Z
Method: IAM Credential Report API

Users with admin privileges: 8
MFA enabled: 7
MFA NOT enabled: 1 (admin-legacy@acme.com)

Claude Assessment: PARTIALLY SATISFIED
Gap: 1 admin user without MFA — immediate remediation required

Fragment-2: P4CK_
`,
        "/evidence-pkg/audit-log/cloudtrail-evidence.txt": `# Evidence — Audit Logging Control
# Control: AU-2 (NIST) — Audit logging enabled for all management events

Evidence Collected: 2024-11-15T14:32:00Z
Method: CloudTrail DescribeTrails API

Trails configured: 2
Management events: ENABLED (both trails)
S3 data events: ENABLED (prod buckets only)
Log file validation: ENABLED

Claude Assessment: SATISFIED
All required logging controls are operational.

Fragment-3: 4G3NT}

─────────────────────────────────────────────────────────────────────
WHAT YOU'RE LEARNING:
  1. Evidence collection is 60% of traditional audit time — an agent collects the same evidence in minutes and maps each artifact directly to its control requirement
  2. Claude's assessment (satisfied / partially satisfied / not satisfied) validates that the evidence actually proves the control works, not just that a file exists
  3. Equifax (2017): patch evidence existed but didn't cover the specific vulnerable Apache Struts instance — AI validation would have caught the gap before the breach
─────────────────────────────────────────────────────────────────────
`,
      },
      dirs: {
        "/": [{ name: "evidence-pkg", isDir: true }],
        "/evidence-pkg": [
          { name: "patch-mgmt", isDir: true },
          { name: "access-ctrl", isDir: true },
          { name: "audit-log", isDir: true },
        ],
        "/evidence-pkg/patch-mgmt": [{ name: "patch-evidence.txt", isDir: false }],
        "/evidence-pkg/access-ctrl": [{ name: "mfa-evidence.txt", isDir: false }],
        "/evidence-pkg/audit-log": [{ name: "cloudtrail-evidence.txt", isDir: false }],
      },
      fragments: [
        { trigger: "/evidence-pkg/patch-mgmt/patch-evidence.txt", value: "FLAG{3V1D3NC3_", label: "Fragment 1 — Patch Mgmt" },
        { trigger: "/evidence-pkg/access-ctrl/mfa-evidence.txt", value: "P4CK_", label: "Fragment 2 — Access Control" },
        { trigger: "/evidence-pkg/audit-log/cloudtrail-evidence.txt", value: "4G3NT}", label: "Fragment 3 — Audit Log" },
      ],
    },
  },

  // ─── audit-a09: Multi-Agent Audit Pipeline ────────────────────────────────────
  {
    epochId: "tech-audit-3",
    wonder: { name: "Multi-Agent Lab", location: "San Francisco, California", era: "Present Day", emoji: "🤝" },
    id: "audit-a09",
    order: 9,
    title: "The Orchestrator",
    subtitle: "Multi-Agent Audit Pipeline — orchestrator and specialist agents",
    category: "ai",
    xp: 200,
    badge: { id: "audit-a-badge-09", name: "Orchestrator", emoji: "🎼" },
    easeScore: 4,
    valueScore: 9,
    rank: 11,
    challengeType: "ctf",
    info: {
      tagline: "One agent audits a control. A pipeline of agents audits an organization.",
      year: 2024,
      overview: [
        "Single-agent tools audit one control or domain well, but they miss the cross-domain chains behind the most serious breaches:\n- Real breaches exploit several domains at once — a network-reachable service, an unpatched application flaw, an over-permissive IAM role, and thin logging together form an attack chain no single-domain audit fully sees.\n- Multi-agent pipelines fix this with specialist agents, each expert in one domain, coordinated by an orchestrator that plans the audit, delegates, synthesizes cross-domain findings, and writes the integrated report.\n- The pattern mirrors a human audit team — not by accident, but because it's a sound division of labor for complex analysis, run at far higher speed and scale.",
        "The orchestrator and specialists have deliberately distinct roles:\n- The orchestrator parses the scope into workstreams, spawns specialists with the right tools and context, runs them in parallel (or sequentially where data depends), then synthesizes their findings into an executive summary and prioritized remediation plan.\n- A specialist does deep, focused analysis in its own domain only, receiving a domain system prompt, its relevant tools, the scope, and an output schema; it returns structured JSON and terminates.\n- Specialists are stateless — they never reason outside their domain, accumulate cross-run context, or talk to each other; all coordination lives at the orchestrator.",
        "The two big advantages come from parallelism and synthesis:\n- Parallel execution — a two-hour sequential audit finishes in about 20 minutes when five specialists run at once; the only constraint is data dependency, so inventory must finish first, after which IAM, network, secrets, and IaC analyses run together.\n- Cross-domain synthesis — a secrets agent finds an exposed DB credential in a dev repo, an IAM agent finds the data-processor role has broad S3 access, and a network agent finds the EC2 host reachable from the internet on port 443; alone they're three findings, but combined they're a critical chain the orchestrator stitches together.",
        "Structured JSON output from specialists is non-negotiable for reliable synthesis:\n- If specialists return natural language, the orchestrator must parse it before it can correlate, introducing ambiguity and reducing reliability.\n- With consistent JSON fields (resource identifier, severity, category, affected components, remediation), the orchestrator correlates findings programmatically by resource ID, then reasons about the clusters — so the output schema is designed at the architecture level before any agent is built.",
      ],
      technical: {
        title: "Orchestrator-Specialist Pattern",
        body: [
          "The orchestrator owns the full lifecycle from planning to report:\n- Planning — read the scope and generate a workstream plan: which domains, which agents, what tool sets, what context, and what output format each needs.\n- Execution — spawn specialists in parallel (`asyncio.gather` or equivalent), monitor them, handle failures with retry or reduced-scope fallback, and collect results as they finish.\n- Synthesis — correlate findings by resource identifier, identify multi-finding risk chains, weigh chain severity against individual findings, and write the cross-domain section of the report.",
          "Specialists are narrow by design, and the orchestrator hands each one a consistent context bundle:\n- A specialist runs all the tool calls for its domain, handles pagination and retries, and returns structured JSON — findings, severities, supporting evidence, and remediation — without assuming anything about other domains.\n- That narrowness makes each agent independently testable: a failing specialist is diagnosed and fixed in isolation.\n- The handoff gives each specialist a role system prompt, a scope object (accounts, regions, service categories), a domain-appropriate tool set (VPC and security group tools for network, IAM and STS tools for identity), and the shared Phase 1 inventory — so specialists never re-enumerate and all work from one consistent view.",
          "Error handling needs defensive design at three levels:\n- Tool calls fail on rate limits, permission denials, or timeouts — specialists retry with exponential backoff and return partial results rather than aborting.\n- Specialists may emit malformed JSON — the orchestrator validates output against the expected schema and flags incomplete output instead of crashing.\n- The orchestrator may lack enough specialist output to synthesize — it produces a partial report of what was collected rather than failing silently.",
          "Cost optimization matters more as audit frequency rises, since each specialist invocation costs tokens:\n- Cache the inventory and reuse it across agents in the same run.\n- Use smaller Claude models for well-defined structured extraction and larger ones only for synthesis and report generation.\n- Batch multiple control checks into a single call rather than one per control, and run an incremental mode that re-analyzes only resources changed since the last run.",
        ],
        codeExample: {
          label: "Multi-agent orchestrator pattern",
          code: `async def run_full_audit(scope: AuditScope) -> AuditReport:
    # Orchestrator spawns specialist agents in parallel
    results = await asyncio.gather(
        run_specialist_agent("iam", scope, iam_tools),
        run_specialist_agent("network", scope, network_tools),
        run_specialist_agent("secrets", scope, secrets_tools),
        run_specialist_agent("iac", scope, iac_tools),
    )

    # Orchestrator synthesizes cross-domain findings
    synthesis_prompt = f"""You are an audit engagement manager.
    Here are findings from four specialist agents:
    IAM: {results[0]}
    Network: {results[1]}
    Secrets: {results[2]}
    IaC: {results[3]}

    Identify cross-domain findings and risk chains.
    Produce an executive summary and prioritized remediation plan."""

    return orchestrator_claude.synthesize(synthesis_prompt)`,
        },
      },
      incident: {
        title: "MOVEit Transfer Supply Chain — Cross-Domain Audit Gap (2023)",
        when: "May–June 2023",
        where: "MOVEit Transfer, global (Cl0p ransomware group)",
        impact: "2,000+ organizations compromised; 60M+ individuals' data stolen",
        body: [
          "The May 2023 MOVEit Transfer breach was the largest data-theft event of the year, hitting over 2,000 organizations — government agencies, banks, healthcare providers, universities:\n- The Cl0p ransomware group exploited a SQL injection flaw, CVE-2023-34362, in the widely used managed file-transfer software.\n- Unauthenticated attackers ran arbitrary SQL against the MOVEit database and extracted every file transferred through the system, exploiting a vulnerability that had existed for years.",
          "The flaw touched three audit domains at once, which is why siloed audits each only half-saw it:\n- Network — MOVEit was internet-accessible on standard HTTP/S ports, a large public attack surface.\n- Application — the SQL injection lived in the application layer, a web-app assessment finding.\n- Database — the injection reached a database holding all transferred file metadata and contents, an access-control and data-classification finding.",
          "A multi-agent pipeline run in the months before the breach would have produced one combined finding:\n- The network agent flags MOVEit's internet exposure handling sensitive transfers, the application agent flags the installed version's known vulnerabilities, and the data agent flags unencrypted file contents with weak access controls.\n- The orchestrator rates the combination CRITICAL — an internet-facing app with known vulnerabilities holding unencrypted sensitive data — specific enough to drive immediate remediation: upgrade MOVEit and restrict internet access to trusted IP ranges.",
          "The scale — 2,000+ organizations and 60+ million individuals — reflects how supply-chain flaws hit every user of the software at once:\n- Single-organization audit programs can't fully address that; the systemic response is industry-level intelligence sharing through ISACs (Information Sharing and Analysis Centers).\n- Pipelines that include a vendor-software-inventory specialist can correlate installed versions against CVE/NVD automatically, flagging known-critical vulnerabilities even before public exploitation.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Orchestrator Agent", sub: "plans + delegates + synthesizes", type: "attacker" },
          { label: "Specialist Agents", sub: "IAM / network / secrets / IaC", type: "system" },
          { label: "Audit Domains", sub: "parallel, independent workstreams", type: "victim" },
          { label: "Integrated Report", sub: "cross-domain risk chains", type: "result" },
        ],
      },
      timeline: [
        { year: 2023, event: "MOVEit breach — cross-domain vulnerability exploited at 2000+ orgs" },
        { year: 2023, event: "Multi-agent frameworks (LangGraph, CrewAI) reach production maturity", highlight: true },
        { year: 2024, event: "Anthropic Agent SDK released — first-party multi-agent tooling" },
        { year: 2025, event: "Enterprise audit firms deploy multi-agent pipelines replacing manual workstreams" },
      ],
      keyTakeaways: [
        "Orchestrator plans, delegates, and synthesizes; specialists execute focused domain audits — never mix these responsibilities in a single agent",
        "Run specialist agents in parallel after inventory phase to match human audit team structure and reduce total runtime by 5-10x",
        "Cross-domain synthesis identifies risk chains that single-domain agents and siloed human teams cannot — this is the primary value of multi-agent pipelines",
        "Specialist agents must return structured JSON with consistent fields — natural language output breaks programmatic correlation at synthesis time",
        "Data dependency graph: inventory must complete before all specialists; IAM, network, secrets, and IaC analyses can run in parallel after inventory",
        "Defensive error handling: retry tool calls with backoff, return partial results on partial failure, validate specialist output schema before synthesis",
        "Shared inventory output ensures all specialists work from a consistent view of infrastructure state — prevents timing-related discrepancies",
        "Cost optimization: cache inventory, use smaller models for structured extraction, batch control checks, implement incremental mode for frequent runs",
        "MOVEit (2023): network exposure + application vulnerability + database access control failure was a cross-domain chain; single-domain audits each partially missed it",
      ],
      references: [
        { title: "MOVEit CVE-2023-34362 Analysis", url: "https://www.cisa.gov/news-events/cybersecurity-advisories/aa23-158a" },
        { title: "Anthropic Agent SDK", url: "https://docs.anthropic.com/en/docs/agents" },
      ],
    },
    quiz: {
      questions: [
        { id: "audit-a09-q1", type: "Core Idea", challenge: "From control to org.", text: "What does an orchestration pipeline of agents enable?", options: ["One agent audits a control; a pipeline of agents audits an entire organization","Slower audits","Fewer checks","Manual review only"], correctIndex: 0, explanation: "Composing agents scales from a single control to org-wide coverage." },
        { id: "audit-a09-q2", type: "Architecture", challenge: "Divide the work.", text: "How is a multi-agent audit typically organized?", options: ["Specialized sub-agents per domain (IAM, network, data) coordinated by an orchestrator","One giant prompt","Random agents","No structure"], correctIndex: 0, explanation: "Domain sub-agents under an orchestrator scale and stay focused." },
        { id: "audit-a09-q3", type: "Aggregation", challenge: "Pull it together.", text: "What does the orchestrator do with sub-agent results?", options: ["Aggregates and deduplicates findings into a unified report","Discards them","Runs them again forever","Emails each separately"], correctIndex: 0, explanation: "The orchestrator consolidates findings across domains." },
        { id: "audit-a09-q4", type: "Least Privilege", challenge: "Scope each agent.", text: "Each sub-agent should have…", options: ["Only the permissions for its specific domain","Full org admin","Production secrets","No limits"], correctIndex: 0, explanation: "Scoping per sub-agent contains the blast radius." },
        { id: "audit-a09-q5", type: "Parallelism", challenge: "Speed.", text: "A benefit of a multi-agent pipeline is…", options: ["Domains can be audited in parallel, covering the org quickly","It's slower than one agent","It needs no compute","It skips domains"], correctIndex: 0, explanation: "Parallel sub-agents make org-wide audits fast." },
        { id: "audit-a09-q6", type: "Consistency", challenge: "Repeatable.", text: "Why is an orchestrated pipeline valuable for recurring audits?", options: ["It re-runs the same coverage every cycle with no extra labor","It changes scope randomly","It needs rebuilding each time","It can't repeat"], correctIndex: 0, explanation: "Define once, run every cycle — the agentic audit advantage." },
        { id: "audit-a09-q7", type: "Error Handling", challenge: "When a tool fails.", text: "How should a sub-agent handle a failed tool call?", options: ["Return the error as a tool_result so it can reason and try alternatives","Crash the whole pipeline","Ignore it silently","Retry forever"], correctIndex: 0, explanation: "Graceful error handling keeps the pipeline robust." },
        { id: "audit-a09-q8", type: "Concept", challenge: "Scale up.", text: "The orchestration model scales auditing by…", options: ["Composing focused agents into an org-wide, repeatable pipeline","Hiring more auditors","Doing less","Auditing once a decade"], correctIndex: 0, explanation: "Composition turns single-control checks into organizational coverage." },
      ],
    },
    ctf: {
      scenario: "A multi-agent audit pipeline ran against the target. Three agent output files — from the orchestrator, IAM specialist, and synthesis report — contain the flag. Read each to follow the audit chain.",
      hint: "Multi-agent output is in /multi-agent. Read files from orchestrator/, specialists/, and synthesis/.",
      hints: [
        "List /multi-agent to find the agent output directories.",
        "The orchestrator log contains the first fragment.",
        "The synthesis report contains the final fragment.",
      ],
      files: {
        "/multi-agent/orchestrator/orchestrator-log.txt": `# Orchestrator Agent Log

Audit scope: acme-corp — full infrastructure review
Spawning specialist agents in parallel...

  [IAM Agent]     → started
  [Network Agent] → started
  [Secrets Agent] → started
  [IaC Agent]     → started

All specialists complete. Beginning cross-domain synthesis.

Fragment-1: FLAG{MULT1_
`,
        "/multi-agent/specialists/iam-findings.json": `{
  "agent": "iam-specialist",
  "findings": [
    {
      "severity": "CRITICAL",
      "resource": "prod-data-processor-role",
      "issue": "AdministratorAccess attached — privilege escalation path",
      "cross_domain_note": "This role has s3:GetObject on acme-backup — correlates with secrets agent finding"
    }
  ],
  "fragment": "4G3NT_"
}`,
        "/multi-agent/synthesis/final-report.txt": `# Orchestrator Synthesis — Cross-Domain Findings

CRITICAL Risk Chain Identified:
  [Secrets Agent] acme-backup S3 bucket: exposed database credential in config.yml
  [IAM Agent] prod-data-processor-role: can read acme-backup (AdministratorAccess)
  [Network Agent] prod-data-processor EC2: publicly accessible on port 443

Risk chain: public EC2 → compromised app → role credential → exposed DB password in S3

This cross-domain finding was not visible to any individual specialist.

Fragment-3: 4UD1T}

─────────────────────────────────────────────────────────────────────
WHAT YOU'RE LEARNING:
  1. Cross-domain synthesis is where multi-agent pipelines find what single-domain agents cannot — risk chains span IAM, network, and secrets simultaneously
  2. Specialist agents return structured JSON (never natural language) so the orchestrator can reliably parse and correlate findings across domains
  3. MOVEit (2023): the SQL injection + internet exposure + database permissions was a cross-domain chain; single-domain audits each partially missed it
─────────────────────────────────────────────────────────────────────
`,
      },
      dirs: {
        "/": [{ name: "multi-agent", isDir: true }],
        "/multi-agent": [
          { name: "orchestrator", isDir: true },
          { name: "specialists", isDir: true },
          { name: "synthesis", isDir: true },
        ],
        "/multi-agent/orchestrator": [{ name: "orchestrator-log.txt", isDir: false }],
        "/multi-agent/specialists": [{ name: "iam-findings.json", isDir: false }],
        "/multi-agent/synthesis": [{ name: "final-report.txt", isDir: false }],
      },
      fragments: [
        { trigger: "/multi-agent/orchestrator/orchestrator-log.txt", value: "FLAG{MULT1_", label: "Fragment 1 — Orchestrator Log" },
        { trigger: "/multi-agent/specialists/iam-findings.json", value: "4G3NT_", label: "Fragment 2 — IAM Specialist" },
        { trigger: "/multi-agent/synthesis/final-report.txt", value: "4UD1T}", label: "Fragment 3 — Synthesis Report" },
      ],
    },
  },

  // ─── audit-a10: AI Report Generation ─────────────────────────────────────────
  {
    epochId: "tech-audit-3",
    wonder: { name: "Report Generation Lab", location: "New York, New York", era: "Present Day", emoji: "📄" },
    id: "audit-a10",
    order: 10,
    title: "The Report Writer",
    subtitle: "AI Report Generation — Claude drafting findings and recommendations",
    category: "ai",
    xp: 200,
    badge: { id: "audit-a-badge-10", name: "Report Writer", emoji: "✍️" },
    easeScore: 8,
    valueScore: 7,
    rank: 9,
    challengeType: "ctf",
    info: {
      tagline: "The finding is only as useful as the report. Claude writes faster than any auditor.",
      year: 2024,
      overview: [
        "Audit report writing is where the value of findings is either realized or lost:\n- Technically expert auditors routinely ship vague recommendations — 'improve security posture,' 'strengthen access controls,' 'enhance monitoring' — that management reads, acknowledges, and never acts on because they aren't specific enough.\n- The finding was real; the report failed to translate it into actionable direction.\n- Auditors spend 30–40% of engagement hours writing, much of it producing output that doesn't achieve its purpose.",
        "Claude excels at report generation because it sustains three things that are hard to hold across a long engagement:\n- Consistent precision — every finding section uses the same structure, severity language, and formatting regardless of which auditor produced the underlying finding.\n- Audience calibration — the executive summary speaks business impact while the technical appendix speaks system specifics, each at the right level without mixing.\n- Specificity under volume — with 200 findings to document, the 200th gets the same specific, actionable recommendation as the first.",
        "The architecture separates finding content from report format, then generates per-audience views:\n- The pipeline produces structured JSON findings (resource identifier, severity, category, technical description, business impact, remediation), and a report agent applies a template to render professional prose for each section.\n- The template defines the executive summary (severity counts, top risks, impact narrative), the finding section (title, observation, risk, recommendation, management-response field), and the appendix (evidence references, tool config, methodology).\n- From one structured finding, Claude writes the CISO view (business risk and priority), the sysadmin view (the exact configuration change), and the board view (financial impact and regulatory exposure).",
        "Three operational features make the reports drive action:\n- Specificity — instead of 'implement MFA for all administrative accounts,' Claude names the 12 affected IAM users from artifact A-4, the acceptable methods (RFC 6238 authenticators or hardware tokens), a 30-day deadline, the owner, and the verification step, so it can be assigned as an engineering task immediately.\n- Management-response workflow — after the draft, responses (accepted, accepted with timeline, rejected with compensating control, risk accepted) are captured and fed into a revision call, and the final report is hashed, signed by the engagement lead, and delivered securely.\n- Template customization — the same finding data renders as Big 4, internal-audit, regulatory-examination, or pentest format by adjusting the system prompt and output specification.",
      ],
      technical: {
        title: "Report Generation Prompt Architecture",
        body: [
          "Report generation lives or dies on system-prompt engineering, which must specify:\n- Writing style — formal, third person, past tense is the professional standard.\n- Audience — CISO and IT leadership for the technical report, the board for the executive summary.\n- Severity language mapping — CRITICAL → 'Immediate Action Required,' HIGH → '30 Days,' MEDIUM → '90 Days,' LOW → 'Recommended Improvement.'\n- Required section structure (title, observation, risk, recommendation, management-response field) and prohibitions (no speculation about attacker intent, no exploitation-probability claims, no naming individuals).",
          "Large finding sets are handled by the context window, with chunking above a threshold:\n- For 50+ findings, the extended context window processes them all in one call for a coherent executive summary that reflects the full set.\n- For 500+ findings, chunk by domain so each domain's findings draft a section separately, then a final synthesis call writes the summary from the section summaries — preserving domain depth, keeping the whole report coherent, and letting section generation run in parallel.",
          "Two reasoning steps turn raw findings into a prioritized narrative:\n- Executive summary — Claude weighs materiality and business impact rather than summarizing every finding equally, leading with the biggest risks, grouping findings that share a root cause (a systemic issue, not isolated incidents), and proposing a remediation roadmap ranked by risk reduction.\n- Deduplication — when the IAM specialist flags an over-permissive role and the network specialist flags that the same role serves an internet-facing service, Claude merges them by matching resource identifiers into one compound finding documenting both angles.",
          "Quality assurance needs both automated validation and human review:\n- Automated — confirm every finding section has all required fields, severity labels match the source data, evidence references point to artifacts that exist, recommendations avoid prohibited content, and the executive-summary count matches the detailed sections.\n- Human — check the accuracy of Claude's business-impact descriptions (which can over- or understate impact outside well-documented domains), the fit of recommendations to the organization's environment and risk tolerance, and the completeness of management-response sections.",
        ],
        codeExample: {
          label: "Report generation call — findings to prose",
          code: `def generate_audit_report(findings: list[dict], scope: str) -> str:
    system = """You are a senior IT auditor writing a formal audit report.
    Style: professional, third person, past tense.
    Audience: CISO and IT leadership (assume technical literacy).
    Each finding section must include:
      - Finding title (concise, action-oriented)
      - Observation (what was found, with evidence reference)
      - Risk (business impact if not remediated)
      - Recommendation (specific, actionable, prioritized)
      - Management Response: [Leave blank for client to complete]"""

    content = f"Audit scope: {scope}\\n\\nFindings (JSON):\\n{json.dumps(findings, indent=2)}"

    response = client.messages.create(
        model="claude-opus-4-7",
        max_tokens=8000,
        system=system,
        messages=[{"role": "user", "content": content}]
    )
    return response.content[0].text`,
        },
      },
      incident: {
        title: "Dyn DNS DDoS — Report Writing Delayed Remediation (2016)",
        when: "October 21, 2016",
        where: "Dyn DNS infrastructure, US-East",
        impact: "Twitter, Netflix, Reddit, GitHub, Spotify down for hours; Mirai botnet via IoT devices",
        body: [
          "The October 21, 2016 Dyn DDoS attack took major parts of the internet offline for hours — Twitter, Netflix, Reddit, GitHub, Spotify:\n- The Mirai botnet of compromised IoT devices (IP cameras, DVRs, home routers) generated 1.2 terabits per second against Dyn's DNS infrastructure.\n- Mirai scaled by exploiting IoT devices shipped with hardcoded default credentials (admin/admin, admin/password) via automated credential stuffing.",
          "Multiple assessments before the attack had flagged the risk, but their vagueness got them shelved:\n- Reports described it generically — 'improve your IoT security posture,' 'IoT devices present emerging risks,' 'network-connected devices without controls create systemic risk.'\n- Management acknowledged the risk and deprioritized remediation because nothing in the recommendation was specific enough to generate an engineering work order.",
          "A Claude-generated recommendation turns that same finding into a sprint ticket:\n- 'Disable Telnet (TCP 23) and SSH (TCP 22) on all production-network IoT devices using the VLAN segmentation procedure in runbook RB-042; for devices that can't disable remote management, isolate them in VLAN 192.168.100.0/24 with inbound blocked from outside the management network. Complete within 30 days. Owner: Network Operations (Sarah Chen). Verification: run the IoT port-scan script (Appendix D) and confirm zero devices expose management ports on the production VLAN.'\n- That specificity gives engineering everything it needs without further research.",
          "Dyn forced a reckoning with IoT security governance:\n- NIST published NISTIR 8228, the FTC took enforcement action against D-Link, and California's SB-327 became the first US IoT security law, requiring unique default credentials or a forced password setup before operation.\n- Audits of IoT-using organizations now routinely include IoT inventory, firmware assessment, and credential-policy verification — and the specificity of those recommendations determines whether controls get implemented before the next Mirai-class event.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Structured Findings", sub: "JSON from audit agents", type: "attacker" },
          { label: "Claude Report Writer", sub: "findings to professional prose", type: "system" },
          { label: "Report Template", sub: "exec summary / findings / roadmap", type: "victim" },
          { label: "Draft Audit Report", sub: "ready for auditor review", type: "result" },
        ],
      },
      timeline: [
        { year: 2016, event: "Dyn DDoS — vague audit report language delays IoT security remediation" },
        { year: 2022, event: "Big 4 firms begin using LLMs for first-draft audit report generation" },
        { year: 2023, event: "Claude generates audit report sections indistinguishable from senior auditor prose", highlight: true },
        { year: 2024, event: "Report generation cuts audit delivery time by 40% at enterprise audit firms" },
      ],
      keyTakeaways: [
        "Vague recommendations ('improve security posture') don't produce engineering work orders — Claude generates specific, owner-assigned, deadline-dated, verifiable recommendations",
        "System prompts must specify writing style, audience, severity language mapping, required finding section structure, and prohibited content",
        "Audience calibration: generate separate sections for CISO (risk + priority), engineers (specific configuration changes), and board (financial impact + regulatory exposure)",
        "Extended context window allows processing all findings in a single call for coherent executive summary generation across the full finding set",
        "Finding deduplication before report generation prevents related findings from appearing as independent issues across specialist domains",
        "Report generation reduces audit delivery time by 40% — auditors review and finalize rather than write from scratch, shifting time to judgment-intensive work",
        "Quality assurance automation: validate all required fields populated, severity labels match source data, evidence references valid, finding count consistent",
        "Management response workflow: structured response capture → revision generation call → version-controlled final report delivery",
        "Dyn (2016): vague IoT security recommendations were acknowledged and deprioritized; specific recommendations with owners and deadlines get implemented",
      ],
      references: [
        { title: "Dyn DDoS Post-Mortem (Dyn)", url: "https://dyn.com/blog/dyn-analysis-summary-of-friday-october-21-attack/" },
        { title: "Claude Extended Context Window", url: "https://docs.anthropic.com/en/docs/about-claude/models" },
      ],
    },
    quiz: {
      questions: [
        { id: "audit-a10-q1", type: "Core Idea", challenge: "The deliverable.", text: "Why does report quality matter so much?", options: ["A finding is only as useful as the report that communicates it","Reports are optional","Only auditors read them","Length is what matters"], correctIndex: 0, explanation: "The report is the product that drives remediation." },
        { id: "audit-a10-q2", type: "Finding Structure", challenge: "Four elements.", text: "A complete audit finding states which four things?", options: ["Condition, Criteria, Cause, and Effect","Who, What, When, Where","Title, body, footer, date","Risk, cost, time, scope"], correctIndex: 0, explanation: "What was found, the standard, why, and the resulting risk." },
        { id: "audit-a10-q3", type: "Speed", challenge: "Faster writing.", text: "How does Claude help with audit reporting?", options: ["It drafts structured, consistent findings faster than a human writer","It hides findings","It only writes summaries","It deletes evidence"], correctIndex: 0, explanation: "Report writing is a natural fit for the model's strengths." },
        { id: "audit-a10-q4", type: "Audience", challenge: "Two readers.", text: "A good report serves which audiences?", options: ["Executives (summary, risk) and engineers (specific, actionable remediation)","Only executives","Only auditors","Nobody"], correctIndex: 0, explanation: "Layer an exec summary over actionable technical detail." },
        { id: "audit-a10-q5", type: "Actionable", challenge: "Fix-ready.", text: "What makes a finding actionable?", options: ["A specific remediation the team can implement, not a vague 'fix it'","A longer description","More jargon","No recommendation"], correctIndex: 0, explanation: "Concrete remediation steps get findings fixed." },
        { id: "audit-a10-q6", type: "Severity", challenge: "Rank it.", text: "Why assign severity to each finding?", options: ["So teams remediate the highest-impact issues first","To make it longer","Severity is decorative","To confuse readers"], correctIndex: 0, explanation: "Severity drives prioritization of limited remediation effort." },
        { id: "audit-a10-q7", type: "Evidence", challenge: "Back it up.", text: "Each finding in the report should include…", options: ["The supporting evidence that substantiates it","Only an opinion","A guess","Nothing"], correctIndex: 0, explanation: "Evidence is what turns a finding from opinion into fact." },
        { id: "audit-a10-q8", type: "Concept", challenge: "Why it's the product.", text: "Everything before the report is…", options: ["Just the work — the report is what delivers the value","More important than the report","Irrelevant","The deliverable itself"], correctIndex: 0, explanation: "The report communicates the risk and drives action." },
      ],
    },
    ctf: {
      scenario: "An AI report writer generated an audit report draft. Three sections of the report contain the flag fragments. Read each section to collect the complete flag.",
      hint: "Report sections are in /audit-report. Read the three section files.",
      hints: [
        "List /audit-report to find the report section files.",
        "Start with executive-summary.txt for the first fragment.",
        "The roadmap.txt file contains the final fragment.",
      ],
      files: {
        "/audit-report/executive-summary.txt": `# ACME Corp IT Security Audit — Executive Summary

Engagement period: November 1–15, 2024
Scope: AWS infrastructure, IAM, application security, secrets management

This audit identified 2 critical, 4 high, and 6 medium risk findings across the
ACME Corp cloud environment. Immediate remediation is required for the critical
findings to prevent potential data breach and regulatory non-compliance.

Fragment-1: FLAG{4I_R3P0RT_
`,
        "/audit-report/findings-summary.txt": `# Key Findings — Technical Summary

CRITICAL-1: Publicly accessible S3 bucket (acme-backup-2019) without encryption
  Risk: Exposure of 3 years of backup data including customer PII
  Recommendation: Enable S3 block public access; enable AES-256 encryption immediately

CRITICAL-2: Administrator IAM role attached to production Lambda function
  Risk: Full account takeover if Lambda is compromised via code injection
  Recommendation: Replace AdministratorAccess with least-privilege policy scoped to required S3 and DynamoDB actions

Fragment-2: G3N3R4T0R_
`,
        "/audit-report/roadmap.txt": `# Remediation Roadmap

Week 1 (Critical): S3 public access block + encryption; Lambda IAM least-privilege
Week 2-3 (High): MFA enforcement for all admins; rotate exposed AWS credentials
Week 4-6 (Medium): IaC pipeline security checks; SIEM coverage gap remediation

Estimated total remediation effort: 120 engineering hours
Estimated risk reduction: CRITICAL → LOW (after critical items resolved)

Fragment-3: DONE}

[Auditor review note: Replace Fragment-3 with actual report conclusion]

─────────────────────────────────────────────────────────────────────
WHAT YOU'RE LEARNING:
  1. Vague report language ("improve security posture") does not get implemented — Claude generates specific, owner-assigned, deadline-dated recommendations
  2. System prompts enforce consistent report structure: finding title, observation, risk, recommendation, and management response field — every time
  3. Report generation cuts audit delivery time by 40%; auditors review and finalize rather than write from scratch, freeing time for judgment-intensive work
─────────────────────────────────────────────────────────────────────
`,
      },
      dirs: {
        "/": [{ name: "audit-report", isDir: true }],
        "/audit-report": [
          { name: "executive-summary.txt", isDir: false },
          { name: "findings-summary.txt", isDir: false },
          { name: "roadmap.txt", isDir: false },
        ],
      },
      fragments: [
        { trigger: "/audit-report/executive-summary.txt", value: "FLAG{4I_R3P0RT_", label: "Fragment 1 — Executive Summary" },
        { trigger: "/audit-report/findings-summary.txt", value: "G3N3R4T0R_", label: "Fragment 2 — Findings" },
        { trigger: "/audit-report/roadmap.txt", value: "DONE}", label: "Fragment 3 — Roadmap" },
      ],
    },
  },

  // ─── audit-a11: Continuous Compliance Monitoring ──────────────────────────────
  {
    epochId: "tech-audit-3",
    wonder: { name: "Continuous Monitoring Lab", location: "Washington, D.C.", era: "Present Day", emoji: "📡" },
    id: "audit-a11",
    order: 11,
    title: "The Sentinel",
    subtitle: "Continuous Compliance Monitoring — scheduled Claude agents",
    category: "ai",
    xp: 200,
    badge: { id: "audit-a-badge-11", name: "The Sentinel", emoji: "📡" },
    easeScore: 5,
    valueScore: 8,
    rank: 10,
    challengeType: "ctf",
    info: {
      tagline: "Annual audits find last year's problems. Continuous monitoring finds today's.",
      year: 2024,
      overview: [
        "Traditional IT audit is a point-in-time model that no longer fits cloud-native environments:\n- The team examines control state at the audit moment and delivers a report weeks or months later.\n- By the time the client reads findings from three months ago, the infrastructure has changed, some issues are fixed, and new ones have appeared.\n- The annual model came from financial auditing of slow-changing systems and is mismatched to clouds that change on every deployment.",
        "Continuous compliance monitoring replaces the snapshot with scheduled Claude agents reflecting current control state:\n- Agents run on cadence — daily for fast-changing controls, weekly for slower ones, monthly for high-effort ones — and alert the moment a control deviates from baseline.\n- When a developer creates a public S3 bucket at 11 PM Friday, the agent catches it by 6 AM Saturday and PagerDuty reaches the on-call engineer before any unauthorized access.\n- The key architectural requirement is a baseline plus the ability to tell authorized changes (tied to a Terraform apply, change ticket, or provisioning automation) from unauthorized drift (any change that can't be traced to one).",
        "Two capabilities keep a program both sustainable and complete:\n- Alert routing and suppression — without them, hundreds of controls produce thousands of weekly alerts of mostly noise, so route by severity (CRITICAL → PagerDuty, HIGH → Slack + Jira, MEDIUM → Jira, LOW → weekly digest), suppress documented exceptions, and deduplicate repeats.\n- Behavioral baselines — beyond 'did a config change,' these ask 'did an entity change its behavior': a production role that normally calls from one EC2 IP during business hours suddenly calling from an unfamiliar IP at 3 AM, hitting buckets it never touched, is an anomaly worth investigating even with no policy change.",
        "Findings only matter once they drive response and satisfy regulators:\n- SecOps integration — a CRITICAL finding opens a Jira incident pre-populated with the affected resource, expected versus actual config, detection time, and violated control, auto-assigned by owner tag, with an SLA timer and optional automated remediation; Claude generates all the structured data for it.\n- Regulatory alignment — the SEC's 2023 disclosure rules (material incidents within four business days plus annual risk-program disclosure) and FedRAMP's continuous-monitoring deliverables are converging on continuous compliance monitoring as the expected baseline, not a leading practice.",
      ],
      technical: {
        title: "Scheduling and Alerting Architecture",
        body: [
          "Scheduling spans a few implementation approaches with different operational tradeoffs:\n- AWS EventBridge + Lambda — a cron expression triggers a Lambda that initializes the Anthropic client, runs the compliance agent, and routes findings; the common AWS-centric choice.\n- GitHub Actions scheduled workflows — `schedule: [{cron: '0 6 * * *'}]` runs the agent daily at 6 AM UTC, with the agent code version-controlled alongside the compliance rules.\n- Temporal or Apache Airflow — for complex dependency chains where monitoring is one step in a larger pipeline of enrichment, deduplication, and alert management.",
          "Alerting maps each severity to a channel stack that reaches the right people at the right time:\n- CRITICAL (immediate exposure or control bypass) → PagerDuty high-urgency, a Slack @here to security-alerts, and a P1 Jira ticket to the on-call security engineer.\n- HIGH → Slack plus a P2 Jira ticket for same-day attention.\n- MEDIUM → a Jira ticket only, for the week.\n- LOW → a weekly email digest reviewed at the regular compliance meeting.",
          "Two layers translate the raw stream into a managed, governable view:\n- Suppression rules track known exceptions with justification, approval chain, and expiration — e.g. 'acme-marketing-assets, control S3-PUB-01, suppressed until 2025-03-31, public website hosting, approved by CISO 2024-12-01'; expired suppressions automatically become active findings again, and the rules are themselves auditable artifacts.\n- A compliance dashboard shows compliance percentage by framework, trend over time, open findings by severity, and mean time to remediation, with Claude writing the narrative for executives while engineers get the detailed finding breakdown.",
          "Cost is the practical constraint, since a naive full sweep checks every control against every resource each run:\n- Use change-event-driven checks — watch AWS CloudTrail for configuration-change events and run checks only on the specific resource that changed.\n- Run full sweeps weekly or monthly for completeness while change-driven checks maintain real-time coverage between them — a hybrid that cuts cost 80–90% versus daily full sweeps with the same drift-detection coverage.",
        ],
        codeExample: {
          label: "Scheduled compliance agent — AWS EventBridge + Lambda",
          code: `# Lambda handler for scheduled compliance run
import json
import anthropic
from alert_router import route_findings

def lambda_handler(event, context):
    client = anthropic.Anthropic()

    # Run full compliance check
    findings = run_compliance_agent(client, scope=AUDIT_SCOPE, tools=COMPLIANCE_TOOLS)

    # Route findings by severity
    critical = [f for f in findings if f['severity'] == 'CRITICAL']
    high = [f for f in findings if f['severity'] == 'HIGH']

    if critical:
        route_findings(critical, channels=['pagerduty', 'slack-security', 'jira'])
    if high:
        route_findings(high, channels=['slack-security', 'jira'])

    # Store compliance history in DynamoDB
    store_compliance_snapshot(findings, timestamp=context.aws_request_id)

    return {"statusCode": 200, "findings_count": len(findings)}`,
        },
      },
      incident: {
        title: "LastPass Breach — Undetected Configuration Drift (2022)",
        when: "August–November 2022",
        where: "LastPass development and production environments",
        impact: "Encrypted password vaults for 33M customers stolen; attack persisted for months undetected",
        body: [
          "The 2022 LastPass breach is among the most consequential incidents in recent memory because of what was stolen — encrypted password vaults for 33 million customers:\n- Anyone who can decrypt those vaults holds every password the customer stored, a master key to their digital life.\n- The attacker gained initial access in August 2022 by compromising a senior DevOps engineer's home computer, then pivoted to the corporate environment and finally the backup storage holding the vaults.\n- The intrusion persisted undetected from August through November — four months.",
          "The four-month dwell time is the critical operational failure, and behavioral monitoring of the compromised account would have caught it within hours:\n- Production access from a home IP not on the approved access list.\n- Access to backup storage the account had never touched in its normal pattern.\n- External data-transfer volumes far outside the account's normal range.",
          "Configuration and access monitoring offered more detection opportunities that were missed:\n- LastPass disclosed the attacker moved laterally from the developer machine to cloud resources using credentials stored on it.\n- Continuous monitoring of IAM access patterns — which credentials reached which resources from which IPs at which times — would have flagged the unfamiliar network path, and the four-month dwell time reflects monitoring too weak to catch the anomaly while containment was still possible.",
          "The breach reshaped expectations for the password-manager industry and beyond:\n- Vendors accelerated zero-knowledge architecture improvements and hardened backup encryption-key management.\n- The broader lesson is that static configuration checking misses attackers who hold legitimate credentials and use them in seemingly legitimate ways — behavioral monitoring against established baselines is required for comprehensive coverage.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Scheduler", sub: "EventBridge / GitHub Actions / cron", type: "attacker" },
          { label: "Claude Compliance Agent", sub: "recurring audit pipeline", type: "system" },
          { label: "Infrastructure State", sub: "drift from baseline", type: "victim" },
          { label: "Alerts + Tickets", sub: "PagerDuty / Slack / Jira", type: "result" },
        ],
      },
      timeline: [
        { year: 2022, event: "LastPass breach — 4-month dwell time due to lack of continuous monitoring" },
        { year: 2023, event: "AWS Security Hub adds continuous compliance rules across 1000+ controls" },
        { year: 2024, event: "Scheduled Claude compliance agents enter production at enterprise scale", highlight: true },
        { year: 2025, event: "Continuous AI compliance monitoring becomes SOC 2 Type II audit standard" },
      ],
      keyTakeaways: [
        "Annual audits find last year's problems — continuous monitoring on daily/weekly schedules finds today's drift within one schedule cycle of introduction",
        "Schedule Claude agents using AWS EventBridge cron rules, GitHub Actions schedule triggers, or Temporal/Airflow workflow orchestration",
        "Alert routing by severity: CRITICAL → PagerDuty + Slack + Jira (immediate); HIGH → Slack + Jira (same-day); MEDIUM → Jira (weekly); LOW → digest",
        "Suppression rules manage known exceptions with business justification, approval chain, and expiration date — expired suppressions automatically become active findings",
        "Behavioral baseline monitoring tracks access patterns (IP ranges, times, resources accessed) not just static configurations — catches credential theft attacks",
        "Change-event-driven monitoring (CloudTrail → check only changed resource) reduces cost by 80-90% vs full sweeps while maintaining real-time coverage",
        "Compliance posture dashboard with trend analysis and mean time to remediation metrics translates monitoring data into executive-level governance reporting",
        "SEC cybersecurity disclosure rules and FedRAMP authorization both require continuous monitoring programs as formal compliance deliverables",
        "LastPass (2022): four-month dwell time reflects absent behavioral monitoring — continuous monitoring turns a 4-month exposure into a 4-hour response window",
      ],
      references: [
        { title: "LastPass Breach Timeline (Wired)", url: "https://www.wired.com/story/lastpass-breach-vaults-password-managers/" },
        { title: "AWS Security Hub Continuous Compliance", url: "https://docs.aws.amazon.com/securityhub/latest/userguide/what-is-securityhub.html" },
      ],
    },
    quiz: {
      questions: [
        { id: "audit-a11-q1", type: "Core Idea", challenge: "Today vs last year.", text: "Why move from annual audits to continuous monitoring?", options: ["Annual audits find last year's problems; continuous monitoring finds today's","Annual is cheaper to ignore","Continuous is less accurate","There's no difference"], correctIndex: 0, explanation: "Continuous checking catches issues as they appear, not months later." },
        { id: "audit-a11-q2", type: "Scheduling", challenge: "Always-on agents.", text: "How does a sentinel agent achieve continuous coverage?", options: ["It runs on a schedule (e.g. cron) re-checking controls automatically","It runs once and stops","It waits for a human","It never runs"], correctIndex: 0, explanation: "Scheduled re-runs provide ongoing assurance." },
        { id: "audit-a11-q3", type: "Drift", challenge: "Catch the change.", text: "What does continuous monitoring detect that point-in-time audits miss?", options: ["Control drift — a control falling out of compliance between audits","Nothing new","Only old issues","The weather"], correctIndex: 0, explanation: "Drift detection is the core benefit of continuous monitoring." },
        { id: "audit-a11-q4", type: "Alerting", challenge: "Tell someone.", text: "When a sentinel agent finds a deviation, it should…", options: ["Alert the right team promptly so it's remediated fast","Stay silent","Wait for the annual report","Delete the finding"], correctIndex: 0, explanation: "Fast alerting shrinks the window of exposure." },
        { id: "audit-a11-q5", type: "Baseline", challenge: "Compare to known-good.", text: "Continuous monitoring works by comparing current state to…", options: ["A known-good baseline, flagging deviations","Random values","Nothing","Last decade's config"], correctIndex: 0, explanation: "Baseline comparison is how deviations are surfaced." },
        { id: "audit-a11-q6", type: "Real-World", challenge: "Why it matters.", text: "Many breaches stayed undetected for months because…", options: ["No continuous monitoring caught the deviation that enabled them","The attackers were invisible","Logs don't exist","It was unavoidable"], correctIndex: 0, explanation: "Continuous monitoring is the control that shortens dwell time." },
        { id: "audit-a11-q7", type: "Coverage", challenge: "Scale.", text: "A continuous agent can monitor…", options: ["Far more controls, far more often, than periodic manual review","One control per year","Nothing automatically","Only on request"], correctIndex: 0, explanation: "Automation enables broad, frequent coverage." },
        { id: "audit-a11-q8", type: "Concept", challenge: "The shift.", text: "The sentinel model changes audit from…", options: ["A periodic snapshot to a continuous stream of assurance","Continuous to annual","Automated to manual","Useful to pointless"], correctIndex: 0, explanation: "Continuous monitoring is the modern security posture." },
      ],
    },
    ctf: {
      scenario: "A continuous compliance sentinel caught a drift event. Three monitoring log files contain the flag — the scheduler log, the drift detection alert, and the incident ticket. Read all three.",
      hint: "Monitoring logs are in /sentinel-logs. Three files contain the flag fragments.",
      hints: [
        "List /sentinel-logs to find the log files.",
        "The scheduler.log contains the first fragment.",
        "Check drift-alert.txt and incident-ticket.txt for the remaining fragments.",
      ],
      files: {
        "/sentinel-logs/scheduler.log": `# Compliance Sentinel — Scheduled Run Log
# AWS EventBridge cron: 0 6 * * * (daily at 06:00 UTC)

2024-11-16T06:00:01Z  Compliance agent triggered by EventBridge
2024-11-16T06:00:03Z  Running 47 compliance checks across us-east-1
2024-11-16T06:01:47Z  All checks complete — 1 CRITICAL drift detected
2024-11-16T06:01:48Z  Routing CRITICAL findings to alert channels

Fragment-1: FLAG{C0NT1N_
`,
        "/sentinel-logs/drift-alert.txt": `# Drift Detection Alert — CRITICAL

Timestamp: 2024-11-16T06:01:47Z
Control: S3-PUB-01 (S3 buckets must not allow public access)

DRIFT DETECTED:
  Bucket: acme-marketing-assets (created 2024-11-15T23:12:00Z)
  Public access block: DISABLED
  ACL: public-read

Baseline: ALL buckets must have S3 Block Public Access enabled
Drift introduced: 2024-11-15 (within last 24h — agent caught within one schedule cycle)

Fragment-2: C0MPL14NC3_
`,
        "/sentinel-logs/incident-ticket.txt": `# Auto-Generated Incident Ticket — JIRA-4821

Title: [COMPLIANCE] S3 Public Access Drift — acme-marketing-assets
Severity: CRITICAL
Assigned: cloud-security-oncall@acme.com
PagerDuty: triggered (incident #P-8821)
Slack: posted to #security-alerts

Status: OPEN
SLA: 4 hours to remediation confirmation

Automated remediation available: run sentinel-remediate --bucket acme-marketing-assets

Fragment-3: CAUGHT}

─────────────────────────────────────────────────────────────────────
WHAT YOU'RE LEARNING:
  1. Annual audits find last year's problems; continuous monitoring (daily/weekly schedules) finds today's — this drift was introduced yesterday and caught within one schedule cycle
  2. Alert routing by severity prevents alert fatigue: CRITICAL → PagerDuty + Slack + Jira; HIGH → Slack + Jira; MEDIUM → Jira only
  3. LastPass (2022) had a 4-month dwell time; continuous behavioral baseline monitoring turns a 4-month exposure into a 4-hour response window
─────────────────────────────────────────────────────────────────────
`,
      },
      dirs: {
        "/": [{ name: "sentinel-logs", isDir: true }],
        "/sentinel-logs": [
          { name: "scheduler.log", isDir: false },
          { name: "drift-alert.txt", isDir: false },
          { name: "incident-ticket.txt", isDir: false },
        ],
      },
      fragments: [
        { trigger: "/sentinel-logs/scheduler.log", value: "FLAG{C0NT1N_", label: "Fragment 1 — Scheduler Log" },
        { trigger: "/sentinel-logs/drift-alert.txt", value: "C0MPL14NC3_", label: "Fragment 2 — Drift Alert" },
        { trigger: "/sentinel-logs/incident-ticket.txt", value: "CAUGHT}", label: "Fragment 3 — Incident Ticket" },
      ],
    },
  },

  // ─── audit-a12: End-to-End Agentic Audit ─────────────────────────────────────
  {
    epochId: "tech-audit-3",
    wonder: { name: "Agentic Audit Command Center", location: "San Francisco, California", era: "Present Day", emoji: "🎯" },
    id: "audit-a12",
    order: 12,
    title: "The Full Pipeline",
    subtitle: "End-to-End Agentic Audit — complete pipeline synthesis",
    category: "ai",
    xp: 200,
    badge: { id: "audit-a-badge-12", name: "Agentic Auditor", emoji: "🎯" },
    easeScore: 4,
    valueScore: 10,
    rank: 12,
    challengeType: "ctf",
    info: {
      tagline: "The future of audit: define scope, press run, receive report.",
      year: 2024,
      overview: [
        "The end-to-end agentic audit pipeline isn't one tool or agent — it's an orchestrated system that automates the full audit lifecycle, with every component from this epoch playing a role:\n- Tool use for structured collection, MCP servers for diverse integrations, and multi-agent orchestration for parallel analysis and cross-domain synthesis.\n- AI analysis for IAM and IaC, automated evidence collection for control validation, report generation for documentation, and a continuous sentinel for ongoing assurance.",
        "A complete engagement runs in five phases:\n- Inventory — the auditor defines scope as a config object (accounts, regions, frameworks, in-scope services, exclusions, exceptions), and the inventory agent sweeps everything, building the dependency graph all later agents use.\n- Parallel domain analysis — IAM, network, secrets, IaC, and logging specialists run simultaneously off the shared inventory.\n- Synthesis — the orchestrator correlates findings by resource identifier and builds the cross-domain risk picture.\n- Output — the report generator and evidence-package builder run in parallel.\n- Sentinel activation — continuous monitoring is configured with the engagement's scope and baseline and switched on.",
        "The pipeline doesn't replace auditors — it changes what they do:\n- The mechanical work that fills the manual model — exporting evidence, writing finding descriptions, eyeballing configs a rule could check — is automated.\n- Auditors shift to the judgment AI can't reliably do: assessing materiality in business context, evaluating whether a compensating control is adequate, advising on remediation tradeoffs, communicating to diverse audiences, and applying professional skepticism to system output.\n- It's a better use of expertise and produces higher-quality outcomes.",
        "Running this in production is an engineering and governance undertaking, not just agent code:\n- It needs secrets management, an isolated execution environment, observability, a persistence layer for inventories/findings/evidence/history, scope and exception configuration, and a delivery path to human reviewers.\n- Cost is favorable — a medium AWS environment (100–300 resources, five specialists, full report) runs roughly 2–5M input and 500K–1M output tokens, far below a single day of manual audit labor, with continuous monitoring scaling linearly but optimized via change-event-driven checks.\n- Standards written for manual audit (SOC 2, ISO 27001, NIST RMF) must still resolve how AI findings are documented, what validation attestation-relevant tools need, and whether continuous AI monitoring satisfies Type II — so the discipline now demands both audit judgment and software engineering, the combined skill set this course builds toward.",
      ],
      technical: {
        title: "Full Pipeline Component Stack",
        body: [
          "The architecture is layered with clean interfaces between layers:\n- Layer 1 (data collection) — MCP servers and custom SDK tools giving authenticated access (filesystem/git for code, cloud SDK tools for enumeration, database connectors for logs, GitHub/Jira/ServiceNow for change management), each with input validation, rate limiting, and error handling.\n- Layer 2 (analysis) — domain Claude agents (inventory, IAM, network, secrets, IaC, logging), each with an engineered system prompt, tool subset, and output schema.\n- Layer 3 (orchestration) — the orchestrator that runs the dependency graph and performs synthesis.\n- Layers 4–5 (output and operations) — the report generator and evidence builder, then the continuous sentinel with scheduling, alerting, and suppression.",
          "Execution is a directed acyclic graph (DAG) where nodes are agent tasks and edges are data dependencies:\n- The inventory agent is the root; the IAM, network, secrets, IaC, and logging specialists depend only on it and form a parallel tier.\n- Synthesis waits for all specialists; the report generator and evidence builder both depend on synthesis but are independent of each other, forming a parallel output tier; sentinel activation depends on the synthesized baseline.\n- Running the five specialists at once cuts the analysis phase from the sum of agent times to the longest single agent's time.",
          "A persistent state layer survives individual agent failures and supports resumption:\n- Each agent writes its output to a defined location (DynamoDB table or S3 bucket) as it completes, so a failed specialist restarts alone without re-running the others.\n- The same store backs the compliance-history database — timestamped inventory and finding snapshots for trend analysis and drift detection — and immutable storage (S3 Object Lock) provides the tamper-resistant evidence chain regulators require.",
          "The pipeline itself needs defense-in-depth and observability:\n- Security — audit agents run with read-only credentials (never write access), each MCP server is scoped to minimum access with immutable invocation logging, the execution environment is isolated by network policy, IAM boundaries, and container isolation, agents communicate only through the structured state store, and prompt-injection defenses sanitize retrieved content, cap tool-output length, and use structured output formats.\n- Observability — every agent call emits a trace ID, system-prompt hash, tool calls and arguments, token counts, duration, and errors to a platform like CloudWatch or Datadog, so a questioned finding traces back to a specific run, tool outputs, and model version.",
        ],
        codeExample: {
          label: "Full pipeline orchestration (high-level)",
          code: `async def run_full_agentic_audit(scope: AuditScope) -> AuditPackage:
    # Phase 1: Inventory (sequential — all subsequent phases depend on this)
    inventory = await run_inventory_agent(scope)

    # Phase 2: Domain analysis (parallel — all use inventory as input)
    domain_findings = await asyncio.gather(
        run_iam_agent(inventory, scope),
        run_network_agent(inventory, scope),
        run_secrets_agent(inventory, scope),
        run_iac_agent(inventory, scope),
        run_logging_agent(inventory, scope),
    )

    # Phase 3: Synthesis (sequential — needs all domain findings)
    synthesized = await run_synthesis_agent(domain_findings, scope)

    # Phase 4: Output (parallel — report and evidence are independent)
    report, evidence_pkg = await asyncio.gather(
        run_report_agent(synthesized, scope),
        run_evidence_agent(synthesized, scope),
    )

    # Phase 5: Activate continuous monitoring sentinel
    await activate_sentinel(scope, baseline=synthesized)

    return AuditPackage(report=report, evidence=evidence_pkg, sentinel_active=True)`,
        },
      },
      incident: {
        title: "MGM Resorts Breach — Manual Audit Couldn't Keep Pace (2023)",
        when: "September 2023",
        where: "MGM Resorts International, Las Vegas",
        impact: "$100M+ operational losses; hotel systems, slot machines, digital keys offline for 10 days",
        body: [
          "The September 2023 MGM Resorts breach began outside the reach of any technical control — a social-engineering phone call to the IT helpdesk:\n- Attackers tied to Scattered Spider impersonated an employee, supplied personal details scraped from LinkedIn, and convinced the helpdesk to reset the target's credentials.\n- That initial access is addressed by employee training and helpdesk verification, not technical audit controls — but everything after it relied on technical vulnerabilities comprehensive agentic auditing would have surfaced.",
          "The lateral movement, escalation, and ransomware phases exploited vulnerabilities across several domains at once:\n- Overly permissive IAM roles allowed escalation from a low-privilege foothold to domain administrator.\n- Network segmentation between corporate IT and operational technology (hotel management, slot machines, key cards) was insufficient.\n- Privileged-account monitoring failed to detect the unusual access during a 10-day dwell time, and backups reachable from the compromised environment let attackers reach the encrypted backups that could have aided recovery.",
          "MGM is representative of large enterprises in every industry, and that's the point:\n- A sprawling infrastructure accumulated over decades of operations and acquisitions, with many systems predating modern cloud security, run by an IT team whose manual-assessment capacity is bounded by headcount.\n- An agentic pipeline with continuous monitoring would have kept a current inventory of every IAM role and its permissions, every corporate-to-OT network path, every privileged account's recent access, and every backup system's exposure — giving defenders the awareness to break the chain or respond in hours instead of ten days.",
          "The $100M+ in losses — reservations down, digital keys dead, casino systems offline for 10 days — exposes the operational-technology dimension agentic auditing must absorb:\n- The casino floor is an IT environment: slot machines are networked computers, key systems are IoT devices, and food-and-beverage systems are cloud apps.\n- Auditing an enterprise like MGM requires specialist agents for OT security, IoT inventory, and physical-digital integration — domains still immature in today's tooling but clearly demanded by the evolving threat environment.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Audit Scope Definition", sub: "accounts / regions / standards", type: "attacker" },
          { label: "Full Agent Pipeline", sub: "inventory → analysis → synthesis → report → sentinel", type: "system" },
          { label: "Enterprise Infrastructure", sub: "cloud / IAM / network / code", type: "victim" },
          { label: "Audit Package + Sentinel", sub: "report + evidence + monitoring", type: "result" },
        ],
      },
      timeline: [
        { year: 2023, event: "MGM breach — $100M loss; complex enterprise environment too large for manual audit" },
        { year: 2024, event: "First enterprise agentic audit pipelines achieve full automation end-to-end", highlight: true },
        { year: 2025, event: "Big 4 firms deploy agentic audit pipelines to replace 60% of manual procedures" },
        { year: 2026, event: "Agentic continuous auditing becomes regulatory baseline expectation" },
      ],
      keyTakeaways: [
        "End-to-end pipeline phases: inventory (sequential) → parallel domain analysis → synthesis → output (parallel report + evidence) → sentinel activation",
        "DAG execution model: inventory is the root node; specialists form a parallel tier; synthesis, output, and sentinel activation follow in sequence",
        "Agentic pipelines eliminate mechanical audit work (collection, formatting, pattern matching) — auditors focus on judgment, materiality, and communication",
        "Production deployment requires: secrets management, isolated execution environment, observability tooling, persistent state store, and configuration management",
        "Defense-in-depth for the pipeline itself: read-only credentials, scoped MCP servers, immutable audit logging, content sanitization for prompt injection defense",
        "DAG parallelism reduces analysis phase from sum of individual agent times to the maximum individual agent time — 5x–10x speedup for multi-specialist runs",
        "Compliance history database enables trend analysis: is compliance improving or degrading over time, what is the mean time to remediation by severity and team?",
        "Regulatory alignment: SEC disclosure rules, FedRAMP continuous monitoring requirements, and SOC 2 Type II assurance all converge on continuous agentic monitoring as the expected baseline",
        "MGM (2023): $100M loss from an attack that exploited cross-domain vulnerabilities in an environment too complex for manual audit to track comprehensively",
      ],
      references: [
        { title: "MGM Breach Analysis (Dark Reading)", url: "https://www.darkreading.com/threat-intelligence/mgm-resorts-attack-exposed-details" },
        { title: "Anthropic Claude API Documentation", url: "https://docs.anthropic.com/en/api" },
      ],
    },
    quiz: {
      questions: [
        { id: "audit-a12-q1", type: "Capstone", challenge: "The vision.", text: "What does the full agentic audit pipeline promise?", options: ["Define scope, press run, receive report — end to end","Manual review forever","No reports","One control only"], correctIndex: 0, explanation: "The capstone composes discovery, analysis, evidence, and reporting." },
        { id: "audit-a12-q2", type: "Composition", challenge: "Putting it together.", text: "The full pipeline combines which stages?", options: ["Discovery, analysis, evidence collection, and report generation","Only reporting","Only discovery","Only a single tool"], correctIndex: 0, explanation: "It chains every capability from the epoch into one flow." },
        { id: "audit-a12-q3", type: "Human-in-Loop", challenge: "Keep oversight.", text: "Where do humans stay in the loop of a full pipeline?", options: ["Reviewing and approving findings before action, especially high-impact ones","Nowhere — full autonomy","Only at signup","Writing every check by hand"], correctIndex: 0, explanation: "Humans validate findings and authorize consequential actions." },
        { id: "audit-a12-q4", type: "Least Privilege", challenge: "Scope the whole thing.", text: "Across the pipeline, permissions should be…", options: ["Scoped per agent to the minimum each stage requires","Full admin everywhere","Shared root","Unlimited"], correctIndex: 0, explanation: "Least privilege applies to every agent in the pipeline." },
        { id: "audit-a12-q5", type: "Repeatability", challenge: "Run it again.", text: "A key benefit of the full pipeline is…", options: ["The same comprehensive audit re-runs on demand with no extra labor","It must be rebuilt each time","It runs once only","It can't repeat"], correctIndex: 0, explanation: "Define once, run anytime — coverage scales with compute." },
        { id: "audit-a12-q6", type: "Validation", challenge: "Trust the output.", text: "How do you keep a full pipeline trustworthy?", options: ["Validate tool inputs/outputs, test the agents, and review findings","Trust it blindly","Skip testing","Remove logging"], correctIndex: 0, explanation: "Validation, testing, and review keep the pipeline reliable." },
        { id: "audit-a12-q7", type: "Scale", challenge: "Org-wide.", text: "The full pipeline lets a small team…", options: ["Audit an entire organization continuously","Audit one server a year","Do less","Replace all security with one prompt"], correctIndex: 0, explanation: "Composed agents give small teams org-scale coverage." },
        { id: "audit-a12-q8", type: "Concept", challenge: "The future of audit.", text: "The epoch's thesis is that agentic audit is…", options: ["Continuous, scalable, and repeatable — not point-in-time and manual","Slower and manual","Annual and human-only","Impossible"], correctIndex: 0, explanation: "Define scope, press run, receive report — continuously." },
      ],
    },
    ctf: {
      scenario: "You have completed all modules of the Agentic Audit epoch. The final pipeline run logged its complete execution across three phases. Read each phase log to collect the final flag.",
      hint: "Full pipeline logs are in /pipeline-run. Three phase log files contain the flag fragments.",
      hints: [
        "List /pipeline-run to find the phase log files.",
        "Phase 1 (inventory) contains the first fragment.",
        "Phase 3 (synthesis + output) contains the final fragment.",
      ],
      files: {
        "/pipeline-run/phase1-inventory.log": `# Phase 1 — Inventory Agent
# Agentic Audit Pipeline v2.0 — Full Run

Scope: acme-corp — all AWS accounts, all regions
Standards: SOC 2 Type II, CIS AWS Foundations v1.4, NIST CSF

Inventory complete:
  S3 buckets: 23
  EC2 instances: 47
  IAM roles: 112
  Lambda functions: 31
  RDS instances: 8

Fragment-1: FLAG{3ND_T0_
`,
        "/pipeline-run/phase2-parallel.log": `# Phase 2 — Parallel Domain Agents

IAM Agent     → 4 findings (2 CRITICAL, 2 HIGH)    ✓ complete
Network Agent → 3 findings (1 CRITICAL, 2 MEDIUM)  ✓ complete
Secrets Agent → 2 findings (1 CRITICAL, 1 HIGH)    ✓ complete
IaC Agent     → 5 findings (1 HIGH, 4 MEDIUM)      ✓ complete
Logging Agent → 1 finding (1 HIGH)                 ✓ complete

All domain agents complete. Passing to orchestrator synthesis.

Fragment-2: 3ND_4G3NT1C_
`,
        "/pipeline-run/phase3-output.log": `# Phase 3 — Synthesis + Output

Cross-domain findings: 3 risk chains identified
Report draft: generated (47 pages, executive summary + technical appendix)
Evidence package: assembled (112 artifacts, all controls mapped)
Continuous sentinel: ACTIVATED (daily schedule, PagerDuty integrated)

Pipeline complete. Audit package delivered to engagement manager.

Total pipeline runtime: 14 minutes 33 seconds
Equivalent manual audit time estimate: 3-4 weeks

Fragment-3: 4UD1T}

─────────────────────────────────────────────────────────────────────
WHAT YOU'RE LEARNING:
  1. End-to-end pipeline: inventory (sequential) → domain analysis (parallel) → synthesis → report + evidence (parallel) → sentinel activation
  2. Agents eliminate mechanical audit work (data collection, formatting, basic pattern matching); auditors focus on judgment, risk context, and stakeholder communication
  3. 14 minutes vs 3-4 weeks: this is the productivity transformation of agentic auditing — the same coverage, in a fraction of the time, on every release cycle
─────────────────────────────────────────────────────────────────────
`,
      },
      dirs: {
        "/": [{ name: "pipeline-run", isDir: true }],
        "/pipeline-run": [
          { name: "phase1-inventory.log", isDir: false },
          { name: "phase2-parallel.log", isDir: false },
          { name: "phase3-output.log", isDir: false },
        ],
      },
      fragments: [
        { trigger: "/pipeline-run/phase1-inventory.log", value: "FLAG{3ND_T0_", label: "Fragment 1 — Phase 1 Inventory" },
        { trigger: "/pipeline-run/phase2-parallel.log", value: "3ND_4G3NT1C_", label: "Fragment 2 — Phase 2 Parallel" },
        { trigger: "/pipeline-run/phase3-output.log", value: "4UD1T}", label: "Fragment 3 — Phase 3 Output" },
      ],
    },
  },
];
