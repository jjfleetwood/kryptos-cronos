import type { EpochConfig, StageConfig } from "./types";

// ── Cyber Range: Traffic Analysis ────────────────────────────────────────────
// Reading the wire: Wireshark packet analysis, tcpdump/CLI capture, man-in-the-
// middle (ARP spoofing), and protocol analysis / exfil detection. Simulated
// faithful tooling; every offensive capture pairs with the blue-team detection
// and the encrypt-everything fix. Public sources (Wireshark docs, MITRE ATT&CK).

export const rangeTrafficEpoch: EpochConfig = {
  id: "range-traffic",
  name: "Traffic Analysis",
  subtitle: "Wireshark, tcpdump, MITM, and exfil detection",
  description:
    "The network sees everything. Learn to read it: capture and dissect packets in Wireshark, filter at the CLI with tcpdump, run a man-in-the-middle with ARP spoofing, and analyze protocols to catch data exfiltration — each paired with the encrypt-everything defense and the detection that catches it.",
  emoji: "📡",
  color: "Teal",
  unlocked: true,
};

const kali = { ip: "10.10.14.5", hostname: "kali", os: "Kali Linux 2024.1" } as const;
const net = (vuln: string) => ({ ip: "10.10.10.0/24", hostname: "lab-network", os: "mixed", openPorts: "various", vulnerability: vuln });

export const rangeTrafficStages: StageConfig[] = [
  // ─── Lab 1: Wireshark ───────────────────────────────────────────────────────
  {
    epochId: "range-traffic",
    wonder: { name: "The Wire", location: "Offensive Security Lab", era: "Present Day", emoji: "📡" },
    id: "traf-01",
    order: 1,
    title: "Packet Analysis: Wireshark",
    subtitle: "Read the conversation off the wire",
    category: "cybersecurity",
    xp: 150,
    badge: { id: "badge-traf-wireshark", name: "Packet Reader", emoji: "🦈" },
    challengeType: "ctf",
    info: {
      tagline: "Anyone who can see the traffic can read a cleartext protocol — and Wireshark reassembles the whole conversation.",
      year: 1998,
      overview: [
        "Wireshark is the world's standard packet analyzer: it captures network traffic and dissects every protocol layer — Ethernet, IP, TCP, and the application data on top — into a readable form. The skill is filtering the firehose down to what matters with display filters (`http`, `tcp.port == 21`, `ip.addr == 10.10.10.40`, `dns`), and then reassembling a TCP conversation with Follow TCP/HTTP Stream to read it as the two endpoints saw it. For an attacker who can see traffic — on a shared/monitor-mode segment, a SPAN port, or after a man-in-the-middle — this is a direct path to credentials and data.",
        "The single most important lesson is the danger of cleartext protocols. HTTP, FTP, Telnet, POP3, IMAP, and SNMPv1/2 all send credentials and data in plaintext, so a packet capture reveals usernames, passwords, session cookies, and transferred files outright. Wireshark can even export files reconstructed from a stream (File > Export Objects > HTTP). This is exactly why the entire internet moved to TLS: encryption makes the captured packets opaque. The defenses follow directly — use encrypted protocols everywhere (HTTPS, SSH, SFTP, SNMPv3), kill cleartext services, segment and switch the network so traffic isn't broadcast to everyone, and on the blue-team side, monitoring for plaintext credentials and anomalous flows turns the same packet view into detection.",
      ],
      technical: {
        title: "Capture, Filter, Follow",
        body: [
          "The Wireshark workflow:\n- Capture on an interface (promiscuous/monitor mode to see more than your own traffic).\n- Display filters narrow the view: http, ftp, tcp.port==23 (telnet), ip.addr==<x>, dns, tcp.flags.syn==1.\n- Follow TCP/HTTP Stream — reassemble a conversation to read it end to end.\n- File > Export Objects > HTTP — pull files transferred over the wire.",
          "What leaks in cleartext (and where to look):\n- HTTP — credentials in POST bodies, cookies in headers, full pages/files.\n- FTP (21) / Telnet (23) — USER/PASS commands in the clear.\n- POP3/IMAP/SMTP — email credentials and message bodies.\n- SNMPv1/2 — community strings (often 'public'/'private').",
          "The defenses (encrypt + segment + monitor):\n- Use TLS/SSH everywhere (HTTPS, SFTP/SCP, SSH, SNMPv3); disable all cleartext services.\n- Switched networks + segmentation so traffic isn't visible to every host.\n- Blue team: IDS/NSM (Zeek/Suricata) to flag cleartext creds + anomalous flows; you can read the wire too.",
        ],
        codeExample: {
          label: "Cleartext creds in a capture",
          code: `# Display filter for FTP, then read the login
ftp
  192.168.1.5 -> 10.10.10.40  Request: USER bob
  192.168.1.5 -> 10.10.10.40  Request: PASS S3cr3tFtp!     # ← plaintext password!

# HTTP login (Follow HTTP Stream)
http.request.method == "POST"
  POST /login  ...  user=admin&pass=Hunter2     # ← creds in the clear

# Pull a transferred file: File > Export Objects > HTTP

# THE FIX: TLS/SSH everywhere; kill FTP/Telnet/HTTP; switch + segment`,
        },
      },
      incident: {
        title: "Firesheep — Sniffing Sessions Pushed the Web to HTTPS",
        when: "2010 (Firesheep) → HTTPS-everywhere",
        where: "Open/shared WiFi networks; any cleartext-HTTP site",
        impact: "Trivial session hijacking over open WiFi accelerated the industry-wide move to TLS",
        body: [
          "In 2010, the Firesheep browser extension let anyone on an open WiFi network capture and hijack other users' web sessions for major sites with a single click — because those sites sent session cookies over plaintext HTTP. It was a public, undeniable demonstration that 'anyone who can see your traffic owns your session,' and it accelerated the industry's move to HTTPS everywhere, HSTS, and Secure cookies.",
          "The lesson is the foundation of this epoch: confidentiality on a network requires encryption, not trust in the medium. Encrypt every protocol, kill the cleartext ones, and assume someone is always reading the wire — because with Wireshark, someone can. The same packet analysis that exposes the credential is also the defender's detection tool when tuned to flag plaintext secrets.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Analyst (Wireshark)", sub: "capture + filter", type: "attacker" },
          { label: "Cleartext protocol", sub: "FTP/HTTP/Telnet", type: "system" },
          { label: "Follow Stream", sub: "creds + files in the clear", type: "victim" },
          { label: "Compromise", sub: "→ fix: TLS + segment", type: "result" },
        ],
      },
      timeline: [
        { year: 1998, event: "Ethereal (later Wireshark) released" },
        { year: 2010, event: "Firesheep demonstrates trivial session hijacking over HTTP", highlight: true },
        { year: 2018, event: "HTTPS-everywhere + HSTS make cleartext web the exception" },
      ],
      keyTakeaways: [
        "Wireshark captures and dissects every protocol layer into a readable form",
        "Display filters (http, ftp, ip.addr==) narrow the firehose; Follow Stream reassembles a conversation",
        "Cleartext protocols (HTTP/FTP/Telnet/POP3/SNMPv1-2) leak credentials and files to anyone who can see the wire",
        "Wireshark can export files reconstructed from a stream",
        "Fix: encrypt everything (TLS/SSH/SFTP/SNMPv3), kill cleartext, switch + segment, and monitor for plaintext creds",
      ],
      references: [
        { title: "Wireshark — User's Guide", url: "https://www.wireshark.org/docs/wsug_html_chunked/" },
        { title: "Wireshark — Display Filters", url: "https://wiki.wireshark.org/DisplayFilters" },
      ],
    },
    quiz: {
      questions: [
        { id: "traf-01-q1", type: "Tool", challenge: "What it does.", text: "What is Wireshark?", options: ["A packet analyzer that captures and dissects network traffic", "A password cracker", "A firewall", "A web server"], correctIndex: 0, explanation: "Wireshark captures and decodes packets layer by layer." },
        { id: "traf-01-q2", type: "Filter", challenge: "Narrow it.", text: "What does the display filter tcp.port == 21 show?", options: ["FTP traffic (port 21)", "HTTPS only", "DNS only", "All UDP"], correctIndex: 0, explanation: "Port 21 is FTP; the filter isolates it." },
        { id: "traf-01-q3", type: "Reassemble", challenge: "Read the convo.", text: "What does Follow TCP Stream do?", options: ["Reassembles a TCP conversation so you can read it end to end", "Encrypts the capture", "Blocks the connection", "Scans ports"], correctIndex: 0, explanation: "It stitches the packets into the full conversation." },
        { id: "traf-01-q4", type: "Cleartext", challenge: "The danger.", text: "Why are HTTP/FTP/Telnet dangerous on a shared network?", options: ["They send credentials and data in plaintext, readable by anyone capturing", "They are encrypted", "They use MFA", "They can't be captured"], correctIndex: 0, explanation: "Cleartext protocols expose secrets to any sniffer." },
        { id: "traf-01-q5", type: "Extract", challenge: "Pull files.", text: "How can Wireshark recover a transferred file?", options: ["File > Export Objects > HTTP reconstructs it from the stream", "It can't", "By cracking a hash", "Via DNS"], correctIndex: 0, explanation: "Export Objects rebuilds files carried over the wire." },
        { id: "traf-01-q6", type: "SNMP", challenge: "Community string.", text: "What sensitive value does SNMPv1/2 leak in cleartext?", options: ["The community string (often 'public'/'private')", "The MAC vendor", "The CPU model", "Nothing"], correctIndex: 0, explanation: "SNMPv1/2 community strings traverse in plaintext." },
        { id: "traf-01-q7", type: "Real World", challenge: "Firesheep.", text: "What did Firesheep (2010) demonstrate?", options: ["Trivial session hijacking over open WiFi due to cleartext HTTP cookies", "A buffer overflow", "WiFi cracking", "Phishing"], correctIndex: 0, explanation: "It hijacked sessions by sniffing plaintext cookies." },
        { id: "traf-01-q8", type: "Defense", challenge: "The fix.", text: "What's the core defense for traffic confidentiality?", options: ["Encrypt everything (TLS/SSH/SFTP), kill cleartext, switch + segment", "Hide the SSID", "Use longer usernames", "Disable logging"], correctIndex: 0, explanation: "Encryption + segmentation makes captured traffic useless." },
      ],
    },
    ctf: {
      attackerMachine: kali,
      targetMachine: net("cleartext FTP/HTTP credentials visible in a capture"),
      scenario: "You have a packet capture (capture.pcap) from a lab segment that still runs cleartext services. Open it in Wireshark, filter to the login traffic, and recover the credentials sent in the clear.",
      hint: "Filter for FTP/HTTP, then follow the stream to read the username and password.",
      hints: [
        "Read the briefing. Run: cat briefing.txt",
        "Open the capture and filter cleartext logins. Run: wireshark-open capture.pcap",
        "Follow the stream to extract the credentials. Run: follow-stream",
        "Run 'assemble' to view the assembled flag and the submit command",
      ],
      fragments: [
        { trigger: "/briefing.txt", value: "FLAG{W1R3SH4RK_", label: "Wireshark Briefing" },
        { trigger: "wireshark-open capture.pcap", value: "CL34RT3XT_", label: "Cleartext Traffic Found" },
        { trigger: "follow-stream", value: "CR3DS}", label: "Credentials Recovered" },
      ],
      files: {
        "/briefing.txt": [
          "RANGE — TRAFFIC LAB 1: WIRESHARK",
          "File: capture.pcap (segment with cleartext services)",
          "Goal: filter the login traffic, recover the credentials.",
          "Sequence: wireshark-open capture.pcap -> follow-stream -> assemble",
        ].join("\n"),
        "/capture.pcap": "[binary pcap — 4,182 packets — open with wireshark-open]",
      },
      dirs: { "/": [{ name: "briefing.txt", isDir: false }, { name: "capture.pcap", isDir: false }] },
      extraCommands: {
        "wireshark-open": (args: string[]) => {
          if (!String(args[0] || "").includes("capture")) return { lines: ["Usage: wireshark-open capture.pcap"] };
          return {
            lines: [
              "Loaded capture.pcap (4182 packets). Applying filter: ftp || http.request",
              "  No. Proto  Info",
              "  812 FTP    Request: USER bob",
              "  814 FTP    Request: PASS  ********  (cleartext — follow stream to read)",
              "  1933 HTTP  POST /login  (form data present)",
              "",
              ">> LEARN: display filters cut 4182 packets down to the few that matter",
              "   FTP/HTTP carry creds in the clear — follow the stream next.",
              "   Fragment collected.",
            ],
          };
        },
        "follow-stream": (_args: string[]) => ({
          lines: [
            "[Follow TCP Stream — FTP login]",
            "  USER bob",
            "  PASS S3cr3tFtp!          <-- plaintext password recovered",
            "[Follow HTTP Stream — POST /login]",
            "  user=admin&pass=Hunter2  <-- web creds in the clear",
            "",
            ">> LEARN: the conversation, reassembled, hands over the credentials",
            ">> BLUE TEAM: TLS/SSH everywhere kills this; IDS can flag plaintext creds.",
            "   Run 'assemble' to view the flag and the submit command.",
          ],
        }),
      },
    },
  },

  // ─── Lab 2: tcpdump / CLI capture ───────────────────────────────────────────
  {
    epochId: "range-traffic",
    wonder: { name: "The Command-Line Sniffer", location: "Offensive Security Lab", era: "Present Day", emoji: "⌨️" },
    id: "traf-02",
    order: 2,
    title: "tcpdump & CLI Capture",
    subtitle: "Sniff from a shell, filter with BPF",
    category: "cybersecurity",
    xp: 150,
    badge: { id: "badge-traf-tcpdump", name: "CLI Sniffer", emoji: "⌨️" },
    challengeType: "ctf",
    info: {
      tagline: "On a compromised box with no GUI, tcpdump captures the wire from the command line — and BPF filters make it precise.",
      year: 1988,
      overview: [
        "tcpdump is the command-line packet sniffer that's installed almost everywhere and works over SSH on a headless server — which makes it the attacker's capture tool of choice on a compromised host. After landing a foothold, sniffing local traffic can reveal credentials, internal hosts, and protocols in use that recon from outside never showed. The power comes from Berkeley Packet Filter (BPF) expressions: `tcp port 80`, `host 10.10.10.40`, `udp port 53`, `not arp` — these compile into kernel-level filters so you capture exactly the traffic you want and nothing else, even on a busy link.",
        "The professional workflow pairs tcpdump with Wireshark: capture to a file on the target with `tcpdump -i eth0 -w capture.pcap`, pull the file back, and analyze it in Wireshark's GUI. tcpdump can also print readable output inline (`-A` for ASCII, `-X` for hex+ASCII) to spot cleartext credentials live. The defensive considerations are twofold: monitoring is built on exactly this capability (network security monitoring sensors like Zeek run continuous capture), and detection should flag a host suddenly running tcpdump or putting an interface into promiscuous mode — on a server, an attacker sniffing is a strong anomaly. As always, the durable fix for what tcpdump can read is encryption: TLS/SSH everywhere means the captured packets carry nothing useful.",
      ],
      technical: {
        title: "tcpdump + BPF",
        body: [
          "Core invocation:\n- tcpdump -i eth0 — capture on an interface.\n- -w capture.pcap — write to a file (then analyze in Wireshark).\n- -A / -X — print ASCII / hex+ASCII inline (spot cleartext live).\n- -nn — don't resolve names/ports (faster, clearer); -c 100 — stop after N packets.",
          "BPF filter expressions (precise capture):\n- host 10.10.10.40 — to/from a host; net 10.10.20.0/24 — a subnet.\n- tcp port 80 / udp port 53 — a protocol/port; port not 22 — exclude your SSH.\n- 'tcp[tcpflags] & tcp-syn != 0' — SYNs only; combine with and/or/not.",
          "Attacker use + the defense:\n- On a foothold: tcpdump local traffic for creds, internal hosts, protocols → feeds the pivot.\n- Detect: alert on tcpdump/promiscuous-mode on servers; NSM (Zeek/Suricata) does authorized capture.\n- Fix: encrypt everything — a sniffed TLS/SSH session yields nothing readable.",
        ],
        codeExample: {
          label: "Capture on a foothold, analyze later",
          code: `# On the compromised host — capture cleartext to a file (exclude your own SSH)
www-data$ tcpdump -i eth0 -w /tmp/cap.pcap 'not port 22' -nn

# Live ASCII view to spot creds immediately
www-data$ tcpdump -i eth0 -A 'tcp port 21 or tcp port 80'
  USER svc_backup
  PASS Backup#2024            # ← cleartext credential, captured live

# BPF: only DNS to a suspicious server
$ tcpdump -i eth0 'udp port 53 and host 10.10.10.99'

# THE FIX/DETECT: encrypt everything; alert on promiscuous-mode/tcpdump on servers`,
        },
      },
      incident: {
        title: "Sniffing the Foothold — A Standard Post-Exploitation Move",
        when: "Ubiquitous in real intrusions",
        where: "Compromised Linux/Unix hosts on internal networks",
        impact: "Local capture on a foothold routinely yields credentials and the map for lateral movement",
        body: [
          "After gaining a foothold, attackers very commonly run tcpdump (or a libpcap-based tool) to sniff the local segment, because cleartext internal traffic — legacy app protocols, database connections, service authentications — frequently still flows unencrypted inside the perimeter even when the edge is TLS. That capture hands over service-account credentials and a map of internal hosts, directly fueling the pivot and escalation phases.",
          "The defense is two-pronged and well-understood: encrypt internal traffic too (the perimeter is not a trust boundary — assume internal sniffing), and detect the act of sniffing (a server process opening a raw socket or flipping an interface to promiscuous mode is anomalous and alertable). Network security monitoring does the same capture for defense; the difference, again, is authorization and intent.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Foothold (www-data)", sub: "tcpdump -i eth0", type: "attacker" },
          { label: "BPF filter", sub: "port/host/proto", type: "system" },
          { label: "Cleartext internal traffic", sub: "creds + hosts", type: "victim" },
          { label: "Pivot fuel", sub: "→ fix: encrypt + detect sniff", type: "result" },
        ],
      },
      timeline: [
        { year: 1988, event: "tcpdump + libpcap created at LBL" },
        { year: 2000, event: "BPF becomes the standard capture-filter language", highlight: true },
        { year: 2015, event: "Internal-traffic encryption pushed as 'assume breach'" },
      ],
      keyTakeaways: [
        "tcpdump is the everywhere CLI sniffer — the capture tool of choice on a headless foothold",
        "BPF filters (host/port/net/proto, and/or/not) capture exactly what you want at kernel speed",
        "Capture to a file (-w) and analyze in Wireshark; -A/-X print cleartext live",
        "Sniffing a foothold yields internal creds + a host map, fueling the pivot",
        "Fix: encrypt internal traffic too (perimeter isn't a trust boundary); detect promiscuous-mode/tcpdump on servers",
      ],
      references: [
        { title: "tcpdump — Manual", url: "https://www.tcpdump.org/manpages/tcpdump.1.html" },
        { title: "pcap-filter (BPF) syntax", url: "https://www.tcpdump.org/manpages/pcap-filter.7.html" },
      ],
    },
    quiz: {
      questions: [
        { id: "traf-02-q1", type: "Tool", challenge: "Why tcpdump.", text: "Why is tcpdump the attacker's capture tool on a compromised server?", options: ["It's a CLI sniffer installed almost everywhere and works over SSH (no GUI)", "It cracks passwords", "It's a firewall", "It encrypts traffic"], correctIndex: 0, explanation: "CLI + ubiquity makes it ideal on headless footholds." },
        { id: "traf-02-q2", type: "BPF", challenge: "Filters.", text: "What is BPF in tcpdump?", options: ["A filter language (host/port/proto) compiled to kernel-level capture filters", "A payload encoder", "A hash format", "A scanning mode"], correctIndex: 0, explanation: "Berkeley Packet Filter precisely selects traffic." },
        { id: "traf-02-q3", type: "File", challenge: "Save it.", text: "What does tcpdump -w capture.pcap do?", options: ["Writes captured packets to a file for later analysis (e.g. in Wireshark)", "Encrypts the link", "Cracks WiFi", "Blocks a port"], correctIndex: 0, explanation: "-w saves a pcap to analyze offline." },
        { id: "traf-02-q4", type: "Live", challenge: "See creds now.", text: "Which flag prints packet contents as ASCII to spot cleartext live?", options: ["-A", "-w", "-c", "-D"], correctIndex: 0, explanation: "-A shows ASCII payloads inline." },
        { id: "traf-02-q5", type: "Filter", challenge: "Exclude SSH.", text: "Why might you filter 'not port 22' while capturing?", options: ["To exclude your own noisy SSH session from the capture", "To crack SSH", "To open port 22", "To disable BPF"], correctIndex: 0, explanation: "Excluding your SSH keeps the capture clean and quiet." },
        { id: "traf-02-q6", type: "Post-Ex", challenge: "Why sniff.", text: "Why sniff after gaining a foothold?", options: ["Internal cleartext traffic yields service creds + a host map for the pivot", "To reboot the host", "To patch it", "To scan the internet"], correctIndex: 0, explanation: "Internal traffic is often unencrypted and rich in secrets." },
        { id: "traf-02-q7", type: "Detection", challenge: "Catch the sniff.", text: "What's a detectable sign of an attacker sniffing on a server?", options: ["A process opening a raw socket / interface in promiscuous mode", "A normal HTTP request", "A scheduled backup", "High RAM"], correctIndex: 0, explanation: "Promiscuous mode / raw sockets on a server are anomalous." },
        { id: "traf-02-q8", type: "Defense", challenge: "The durable fix.", text: "What makes a sniffed session useless?", options: ["Encrypting internal traffic too (TLS/SSH everywhere)", "Hiding the hostname", "A longer password", "Disabling DNS"], correctIndex: 0, explanation: "Encryption means captured packets carry nothing readable." },
      ],
    },
    ctf: {
      attackerMachine: { ip: "10.10.10.40", hostname: "lab-target", os: "Linux (www-data shell)" },
      targetMachine: net("internal cleartext service authentication on the local segment"),
      scenario: "You have a www-data shell on a host with no GUI. Use tcpdump to capture local traffic, filter to the cleartext service login on the segment, and recover the service-account credential.",
      hint: "Capture on the interface excluding your SSH, then filter to the cleartext service port to read the login.",
      hints: [
        "Read the briefing. Run: cat briefing.txt",
        "Capture local traffic to a file. Run: tcpdump-capture eth0",
        "Filter live to the cleartext service login. Run: tcpdump-filter",
        "Run 'assemble' to view the assembled flag and the submit command",
      ],
      fragments: [
        { trigger: "/briefing.txt", value: "FLAG{TCPDUMP_", label: "tcpdump Briefing" },
        { trigger: "tcpdump-capture eth0", value: "BPF_", label: "Capture Running" },
        { trigger: "tcpdump-filter", value: "C4PTUR3D}", label: "Credential Captured" },
      ],
      files: {
        "/briefing.txt": [
          "RANGE — TRAFFIC LAB 2: TCPDUMP (you are www-data, no GUI)",
          "Goal: capture local traffic, filter the cleartext service login.",
          "Sequence: tcpdump-capture eth0 -> tcpdump-filter -> assemble",
        ].join("\n"),
      },
      dirs: { "/": [{ name: "briefing.txt", isDir: false }] },
      extraCommands: {
        "tcpdump-capture": (args: string[]) => {
          if (args[0] !== "eth0") return { lines: ["Usage: tcpdump-capture eth0"] };
          return {
            lines: [
              "www-data$ tcpdump -i eth0 -w /tmp/cap.pcap 'not port 22' -nn",
              "  tcpdump: listening on eth0 ...",
              "  ^C  431 packets captured -> /tmp/cap.pcap",
              "",
              ">> LEARN: -w saves to a pcap; 'not port 22' keeps your SSH out of it",
              "   tcpdump runs on a headless box where Wireshark can't. Fragment collected.",
            ],
          };
        },
        "tcpdump-filter": (_args: string[]) => ({
          lines: [
            "www-data$ tcpdump -r /tmp/cap.pcap -A 'tcp port 21 or tcp port 23'",
            "  USER svc_backup",
            "  PASS Backup#2024          <-- cleartext service-account credential",
            "  (also seen: internal host 10.10.20.20 — a pivot lead)",
            "",
            ">> LEARN: internal cleartext auth handed over a service account + a host",
            ">> BLUE TEAM: encrypt internal traffic; alert on promiscuous-mode on servers.",
            "   Run 'assemble' to view the flag and the submit command.",
          ],
        }),
      },
    },
  },

  // ─── Lab 3: MITM / ARP spoofing ─────────────────────────────────────────────
  {
    epochId: "range-traffic",
    wonder: { name: "The Man in the Middle", location: "Offensive Security Lab", era: "Present Day", emoji: "🎭" },
    id: "traf-03",
    order: 3,
    title: "Man-in-the-Middle: ARP Spoofing",
    subtitle: "Put yourself between two hosts and read their traffic",
    category: "cybersecurity",
    xp: 175,
    badge: { id: "badge-traf-mitm", name: "Interceptor", emoji: "🎭" },
    challengeType: "ctf",
    info: {
      tagline: "ARP has no authentication, so on a local network you can tell two hosts you're each other — and route their conversation through you.",
      year: 1982,
      overview: [
        "On a switched local network you normally only see your own traffic — but a man-in-the-middle attack changes that by abusing ARP, the protocol that maps IP addresses to MAC addresses. ARP has no authentication: any host can send unsolicited 'ARP replies' claiming an IP belongs to its MAC, and others will believe it. ARP spoofing (poisoning) sends forged replies to a victim and the gateway, telling each that the attacker is the other, so both send their traffic to the attacker, who forwards it on (keeping the connection alive) while capturing everything in between. Tools like ettercap, bettercap, and arpspoof automate it.",
        "Once in the middle, the attacker reads (and can modify) the victim's traffic, capturing cleartext credentials, cookies, and data exactly as in the Wireshark lab — but now without needing a SPAN port or shared medium. Historically, sslstrip downgraded HTTPS to HTTP to defeat encryption, though HSTS and modern browsers have largely closed that. The defenses are specific to the attack's mechanics: Dynamic ARP Inspection (DAI) on managed switches drops forged ARP replies, port security and DHCP snooping limit spoofing, static ARP entries protect critical hosts, network segmentation shrinks the attack surface to a single broadcast domain, and — the universal answer — end-to-end encryption (TLS/SSH with certificate validation) means that even a perfect MITM captures only ciphertext. On detection, duplicate-MAC and rapid ARP-change alerts catch the poisoning.",
      ],
      technical: {
        title: "ARP Poisoning Mechanics",
        body: [
          "Why ARP is abusable:\n- ARP maps IP → MAC and has NO authentication.\n- Unsolicited 'gratuitous' ARP replies are accepted and cached by hosts.\n- Poison the victim (gateway is at attacker-MAC) AND the gateway (victim is at attacker-MAC) → bidirectional MITM.\n- Enable IP forwarding so traffic still flows (connection stays alive while you capture).",
          "The attack + what it yields:\n- arpspoof / ettercap / bettercap -> forge the replies + forward.\n- Capture the now-visible traffic in Wireshark/tcpdump → cleartext creds, cookies, data.\n- Historically sslstrip downgraded HTTPS→HTTP (HSTS now mitigates).\n- Can also modify traffic in flight (inject, tamper).",
          "The defenses (switch + crypto + detect):\n- Dynamic ARP Inspection (DAI) + DHCP snooping + port security on managed switches.\n- Static ARP entries for critical hosts; segmentation shrinks the broadcast domain.\n- End-to-end TLS/SSH with cert validation → a perfect MITM still only sees ciphertext.\n- Detect: duplicate-MAC / rapid ARP-table-change alerts (arpwatch, NDR).",
        ],
        codeExample: {
          label: "ARP poison → capture between victim and gateway",
          code: `# Enable forwarding so the victim stays online
attacker$ echo 1 > /proc/sys/net/ipv4/ip_forward

# Poison both directions (victim <-> gateway) through us
attacker$ arpspoof -i eth0 -t 10.10.10.50 10.10.10.1   # tell victim: gw = us
attacker$ arpspoof -i eth0 -t 10.10.10.1 10.10.10.50   # tell gw: victim = us

# Now capture the victim's traffic flowing through us
attacker$ tcpdump -i eth0 -A host 10.10.10.50 and tcp port 80
  POST /login user=victim&pass=Spr1ng!     # ← captured in the middle

# THE FIX: DAI/DHCP-snooping + TLS everywhere; detect duplicate MACs`,
        },
      },
      incident: {
        title: "MITM on the LAN — Why the Local Network Isn't Trusted",
        when: "ARP spoofing has been practical since the 1990s",
        where: "Any shared layer-2 network — offices, cafes, conferences",
        impact: "An attacker on the same LAN can intercept cleartext traffic for every host in the broadcast domain",
        body: [
          "ARP spoofing made it clear decades ago that being on the same local network as a victim is enough to intercept their traffic — the switch's normal isolation is bypassed by poisoning the address-resolution cache. It underpins rogue-access-point and 'evil twin' attacks and remains a staple of internal penetration tests, because so much internal traffic is still cleartext and so many networks lack DAI.",
          "The enduring lesson is 'the network is not a trust boundary.' Defenders harden layer 2 (DAI, DHCP snooping, port security), segment to shrink broadcast domains, and — decisively — encrypt end to end so that a successful MITM yields only ciphertext. Certificate validation matters: the browser warning on a bad cert is the user-facing defense against the downgrade/interception the MITM attempts.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Attacker", sub: "forged ARP replies", type: "attacker" },
          { label: "Victim + Gateway", sub: "poisoned ARP caches", type: "system" },
          { label: "Traffic routes through attacker", sub: "capture / modify", type: "victim" },
          { label: "Interception", sub: "→ fix: DAI + TLS", type: "result" },
        ],
      },
      timeline: [
        { year: 1982, event: "ARP (RFC 826) — no authentication by design" },
        { year: 1999, event: "dsniff/arpspoof popularize practical ARP MITM", highlight: true },
        { year: 2009, event: "sslstrip; later HSTS closes most HTTPS-downgrade MITM" },
      ],
      keyTakeaways: [
        "ARP has no authentication, so forged ARP replies poison hosts' IP→MAC caches",
        "Poisoning the victim AND the gateway routes their traffic through the attacker (MITM)",
        "Enable IP forwarding to keep the connection alive while capturing/modifying",
        "On a switched LAN, MITM defeats normal isolation without a SPAN port or shared medium",
        "Fix: DAI/DHCP-snooping/port-security + segmentation + end-to-end TLS (a perfect MITM still sees only ciphertext); detect duplicate MACs",
      ],
      references: [
        { title: "Cisco — Dynamic ARP Inspection (DAI)", url: "https://www.cisco.com/c/en/us/td/docs/switches/lan/catalyst9300/software/release/17-x/configuration_guide/sec/b_17x_sec_9300_cg/configuring_dynamic_arp_inspection.html" },
        { title: "ettercap / bettercap", url: "https://www.bettercap.org/" },
      ],
    },
    quiz: {
      questions: [
        { id: "traf-03-q1", type: "Protocol", challenge: "Why abusable.", text: "Why can ARP be spoofed?", options: ["ARP has no authentication — forged replies are accepted and cached", "ARP is encrypted", "ARP needs a password", "ARP uses TLS"], correctIndex: 0, explanation: "Unauthenticated ARP lets any host claim any IP→MAC mapping." },
        { id: "traf-03-q2", type: "Mechanics", challenge: "Both sides.", text: "For a bidirectional MITM, who must be poisoned?", options: ["Both the victim and the gateway (each told the attacker is the other)", "Only the victim", "Only the DNS server", "Nobody"], correctIndex: 0, explanation: "Poisoning both directions routes the full conversation through you." },
        { id: "traf-03-q3", type: "Forwarding", challenge: "Stay alive.", text: "Why enable IP forwarding during ARP spoofing?", options: ["So the victim's traffic still flows (connection stays up) while you capture", "To crack a hash", "To scan ports", "To encrypt traffic"], correctIndex: 0, explanation: "Forwarding keeps the victim online while you sit in the middle." },
        { id: "traf-03-q4", type: "Tool", challenge: "Automate it.", text: "Which tools automate ARP MITM?", options: ["ettercap / bettercap / arpspoof", "John / Hashcat", "nmap only", "sqlmap"], correctIndex: 0, explanation: "These automate poisoning + forwarding + capture." },
        { id: "traf-03-q5", type: "Impact", challenge: "What you get.", text: "Once in the middle, what can the attacker do?", options: ["Read (and modify) the victim's traffic — cleartext creds, cookies, data", "Only ping", "Nothing", "Patch the host"], correctIndex: 0, explanation: "MITM exposes (and can alter) the victim's traffic." },
        { id: "traf-03-q6", type: "Switch Defense", challenge: "Layer 2.", text: "Which switch feature drops forged ARP replies?", options: ["Dynamic ARP Inspection (DAI)", "Spanning Tree", "QoS", "NAT"], correctIndex: 0, explanation: "DAI validates ARP against DHCP snooping bindings." },
        { id: "traf-03-q7", type: "Crypto Defense", challenge: "Decisive fix.", text: "Why does end-to-end TLS defeat a successful MITM?", options: ["The attacker captures only ciphertext; cert validation flags tampering", "It blocks ARP", "It speeds the network", "It hides the SSID"], correctIndex: 0, explanation: "Encryption + cert validation makes interception useless." },
        { id: "traf-03-q8", type: "Detection", challenge: "Catch it.", text: "What detects ARP poisoning?", options: ["Duplicate-MAC / rapid ARP-change alerts (arpwatch, NDR)", "A spam filter", "A CAPTCHA", "More RAM"], correctIndex: 0, explanation: "ARP anomalies (a MAC suddenly owning two IPs) are detectable." },
      ],
    },
    ctf: {
      attackerMachine: kali,
      targetMachine: { ip: "10.10.10.50", hostname: "victim-host", os: "Windows 10", openPorts: "ARP/LAN", vulnerability: "no Dynamic ARP Inspection — ARP cache poisonable" },
      scenario: "On the lab LAN, a victim host (10.10.10.50) talks to the gateway (10.10.10.1) over cleartext HTTP, and the switch has no DAI. ARP-poison both sides to insert yourself in the middle, then capture the victim's login.",
      hint: "Enable forwarding and poison both the victim and the gateway, then capture the traffic now flowing through you.",
      hints: [
        "Read the briefing. Run: cat briefing.txt",
        "ARP-poison the victim and gateway. Run: arp-poison 10.10.10.50",
        "Capture the intercepted login. Run: mitm-capture",
        "Run 'assemble' to view the assembled flag and the submit command",
      ],
      fragments: [
        { trigger: "/briefing.txt", value: "FLAG{4RP_", label: "MITM Briefing" },
        { trigger: "arp-poison 10.10.10.50", value: "M1TM_", label: "Position Established" },
        { trigger: "mitm-capture", value: "1NT3RC3PT3D}", label: "Traffic Intercepted" },
      ],
      files: {
        "/briefing.txt": [
          "RANGE — TRAFFIC LAB 3: ARP MITM",
          "Victim 10.10.10.50  Gateway 10.10.10.1  (no DAI, cleartext HTTP)",
          "Goal: poison both, intercept the victim's login.",
          "Sequence: arp-poison 10.10.10.50 -> mitm-capture -> assemble",
        ].join("\n"),
      },
      dirs: { "/": [{ name: "briefing.txt", isDir: false }] },
      extraCommands: {
        "arp-poison": (args: string[]) => {
          if (args[0] !== "10.10.10.50") return { lines: ["Usage: arp-poison 10.10.10.50"] };
          return {
            lines: [
              "attacker$ echo 1 > /proc/sys/net/ipv4/ip_forward",
              "attacker$ arpspoof -i eth0 -t 10.10.10.50 10.10.10.1   (victim: gw = us)",
              "attacker$ arpspoof -i eth0 -t 10.10.10.1 10.10.10.50   (gw: victim = us)",
              "  [+] both ARP caches poisoned — traffic now routes THROUGH you",
              "",
              ">> LEARN: forged ARP + IP forwarding = a transparent man in the middle",
              "   Switched LAN isolation bypassed, no SPAN port needed. Fragment collected.",
            ],
          };
        },
        "mitm-capture": (_args: string[]) => ({
          lines: [
            "attacker$ tcpdump -i eth0 -A host 10.10.10.50 and tcp port 80",
            "  POST /login HTTP/1.1",
            "  user=victim&pass=Spr1ng!2024     <-- intercepted in the middle",
            "  Cookie: session=...              <-- also captured",
            "",
            ">> LEARN: from the middle you read (and could modify) everything cleartext",
            ">> BLUE TEAM: DAI + DHCP snooping + TLS everywhere; arpwatch flags dup MACs.",
            "   Run 'assemble' to view the flag and the submit command.",
          ],
        }),
      },
    },
  },

  // ─── Lab 4: protocol analysis + exfil detection ─────────────────────────────
  {
    epochId: "range-traffic",
    wonder: { name: "The Covert Channel", location: "Offensive Security Lab", era: "Present Day", emoji: "🕳️" },
    id: "traf-04",
    order: 4,
    title: "Protocol Analysis & Exfil Detection",
    subtitle: "Hunt data exfiltration hiding in normal-looking traffic",
    category: "cybersecurity",
    xp: 200,
    badge: { id: "badge-traf-exfil", name: "Exfil Hunter", emoji: "🕳️" },
    challengeType: "ctf",
    info: {
      tagline: "Attackers smuggle data out inside protocols you'd never block — and the same packet analysis that hides it is how the blue team finds it.",
      year: 2004,
      overview: [
        "This lab flips fully to the defender's chair, because traffic analysis is as much a blue-team skill as a red one. After compromise, attackers exfiltrate data and command-and-control over channels that blend into normal traffic — most notoriously DNS tunneling, which encodes stolen data into DNS queries (`<base32-data>.attacker.com`) that traverse almost any network because DNS is rarely blocked. Other covert channels hide C2 in HTTPS, ICMP payloads, or legitimate cloud services. The tells are statistical and behavioral: unusually high DNS query volume to one domain, long/encoded subdomains, regular 'beaconing' intervals, large outbound transfers at odd hours, and data flowing to never-before-seen destinations.",
        "Finding exfiltration is protocol analysis applied with a hunter's eye: in a capture you look for the anomaly, not the signature — DNS with abnormal entropy in the names, periodic callbacks (beaconing) regardless of payload, and volume/timing that don't fit a baseline. Wireshark's Statistics (Conversations, Protocol Hierarchy, I/O graphs) and NSM tools (Zeek logs, RITA for beacon analysis) surface these. The defenses are layered: egress filtering and DNS through controlled resolvers (with logging and anomaly detection), DLP to catch sensitive data leaving, blocking direct outbound DNS/ICMP, and baselining normal traffic so deviations stand out. This closes the Traffic epoch on its core thesis — the packet view is dual-use: the same analysis an attacker uses to read the wire is the defender's most powerful tool for catching what the attacker tries to sneak past.",
      ],
      technical: {
        title: "Covert Channels + Hunting Them",
        body: [
          "Common exfil / C2 channels:\n- DNS tunneling — data encoded into subdomains (<base32>.evil.com); DNS is rarely blocked.\n- HTTPS C2 — blends with normal web; look at beaconing, not payload.\n- ICMP tunneling — data in ping payloads.\n- Abusing legit services (cloud storage, paste sites) to blend in.",
          "The tells (hunt the anomaly, not the signature):\n- DNS: high query volume to one domain, long/high-entropy subdomains, TXT/NULL records.\n- Beaconing: regular call-home intervals (jittered but periodic) — RITA / Zeek detect this.\n- Volume/timing: large outbound at odd hours; new/rare destinations.\n- Wireshark Statistics: Conversations, Protocol Hierarchy, I/O graphs to spot the outlier.",
          "The defenses (egress + DNS control + baseline):\n- Egress filtering: block direct outbound DNS/ICMP; force DNS through logged resolvers with anomaly detection.\n- DLP to catch sensitive data leaving; proxy + inspect outbound web.\n- Baseline normal traffic so deviations alert; NSM (Zeek) + threat hunting.\n- The packet view is dual-use — the attacker's read tool is the defender's catch tool.",
        ],
        codeExample: {
          label: "Spotting DNS exfiltration in a capture",
          code: `# Wireshark filter — DNS to a single suspicious domain
dns && dns.qry.name contains "evil.com"
  Query: a1b2c3d4e5...base32....evil.com   (TXT)   # long encoded subdomain
  Query: f6g7h8i9j0...base32....evil.com   (TXT)   # ...thousands of them
  -> high volume + encoded names = DNS tunneling exfil

# Zeek/RITA: beaconing detection (regular call-home interval)
$ rita show-beacons mydataset   # score ~0.95 to evil.com -> C2

# THE FIX: egress-filter DNS/ICMP; logged resolvers + anomaly detection; DLP`,
        },
      },
      incident: {
        title: "DNS Tunneling — The Channel You Can't Block",
        when: "2004 (early DNS-tunnel tools) → a staple of modern C2/exfil",
        where: "Enterprise networks where DNS is allowed out (almost all of them)",
        impact: "Data exfiltration and C2 that survive perimeter blocking by riding DNS",
        body: [
          "DNS tunneling endures because DNS is essential and therefore almost never blocked outbound — so encoding stolen data or C2 into DNS queries gives attackers a channel that passes most perimeters. It has appeared in malware families and APT toolkits for two decades, precisely because it hides in plain sight: to a casual look, it's just DNS.",
          "But it is detectable to anyone analyzing the traffic with the right lens, which is the epoch's closing point: the volume, the encoded names, the beaconing rhythm all stand out against a baseline. Defenders win here by controlling and logging egress (especially DNS), baselining normal behavior, and hunting the anomaly — and the very packet-analysis skills that let an attacker read the wire are what let the defender catch the data sneaking off it. Offense and defense read the same packets; intent and authorization decide which side you're on.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Compromised host", sub: "DNS-tunnel exfil", type: "attacker" },
          { label: "DNS (rarely blocked)", sub: "encoded subdomains", type: "system" },
          { label: "Anomaly in the capture", sub: "volume/entropy/beacon", type: "victim" },
          { label: "Hunter catches it", sub: "→ egress + baseline + DLP", type: "result" },
        ],
      },
      timeline: [
        { year: 2004, event: "Early DNS-tunneling tools (NSTX/iodine)" },
        { year: 2016, event: "Beacon-analysis tooling (Zeek/RITA) matures for hunting", highlight: true },
        { year: 2020, event: "Egress control + DNS logging standard against tunneling" },
      ],
      keyTakeaways: [
        "Attackers exfiltrate/C2 over channels that blend in — DNS tunneling most notably (DNS is rarely blocked)",
        "Hunt the anomaly, not the signature: DNS volume/entropy, beaconing intervals, odd-hour volume, rare destinations",
        "Wireshark Statistics + NSM (Zeek/RITA) surface the outlier and the beacon",
        "Defenses: egress filtering, DNS through logged resolvers with anomaly detection, DLP, traffic baselining",
        "The packet view is dual-use: the attacker's read tool is the defender's catch tool — intent + authorization decide the side",
      ],
      references: [
        { title: "MITRE ATT&CK — Exfiltration Over C2 / DNS (T1048/T1071.004)", url: "https://attack.mitre.org/techniques/T1071/004/" },
        { title: "Zeek (Bro) Network Security Monitor", url: "https://zeek.org/" },
      ],
    },
    quiz: {
      questions: [
        { id: "traf-04-q1", type: "Channel", challenge: "Hide in DNS.", text: "What is DNS tunneling?", options: ["Encoding stolen data / C2 into DNS queries, which are rarely blocked", "Cracking DNS", "A DoS on DNS", "Encrypting DNS"], correctIndex: 0, explanation: "Data is smuggled inside DNS query names." },
        { id: "traf-04-q2", type: "Why", challenge: "Why DNS.", text: "Why is DNS a favored exfil channel?", options: ["DNS is essential and almost never blocked outbound", "DNS is encrypted", "DNS is fast only", "DNS needs no resolver"], correctIndex: 0, explanation: "Because DNS must work, it's rarely filtered — perfect cover." },
        { id: "traf-04-q3", type: "Hunt", challenge: "The tell.", text: "What signals DNS tunneling in a capture?", options: ["High query volume + long/high-entropy subdomains to one domain", "A single A record", "Normal web browsing", "An ICMP echo"], correctIndex: 0, explanation: "Volume and encoded names are the tells." },
        { id: "traf-04-q4", type: "Beacon", challenge: "Call home.", text: "What is 'beaconing'?", options: ["Regular, periodic call-home intervals from a compromised host to C2", "A single login", "A DNS cache hit", "A patch check"], correctIndex: 0, explanation: "Beaconing is the rhythmic C2 callback, detectable by interval." },
        { id: "traf-04-q5", type: "Tooling", challenge: "Find beacons.", text: "Which tool scores beaconing behavior from network logs?", options: ["RITA (on Zeek logs)", "John", "sqlmap", "Hydra"], correctIndex: 0, explanation: "RITA analyzes Zeek logs to surface beacons." },
        { id: "traf-04-q6", type: "Approach", challenge: "Signature vs anomaly.", text: "How should you hunt covert channels?", options: ["Hunt the anomaly (volume/entropy/timing), not a fixed signature", "Block all DNS", "Only use AV signatures", "Ignore DNS"], correctIndex: 0, explanation: "Covert channels evade signatures; behavior gives them away." },
        { id: "traf-04-q7", type: "Defense", challenge: "Egress.", text: "What defensive control most directly limits tunneling exfil?", options: ["Egress filtering + DNS through logged resolvers with anomaly detection", "A longer password", "Disabling logging", "Opening more ports"], correctIndex: 0, explanation: "Controlling and logging egress (esp. DNS) breaks/exposes tunneling." },
        { id: "traf-04-q8", type: "Thesis", challenge: "Dual use.", text: "What's the epoch's core point about packet analysis?", options: ["It's dual-use: the attacker's read tool is the defender's catch tool", "Only attackers use it", "Only defenders use it", "It's obsolete"], correctIndex: 0, explanation: "Same packets, opposite intent — the analysis serves both sides." },
      ],
    },
    ctf: {
      attackerMachine: { ip: "10.10.14.5", hostname: "soc-analyst", os: "Security Onion / Zeek" },
      targetMachine: net("a compromised host exfiltrating data via DNS tunneling"),
      scenario: "You're the SOC analyst. A host on the network is suspected of exfiltrating data. Analyze the capture for the covert channel, identify the DNS tunneling, and confirm the exfiltration.",
      hint: "Look at protocol statistics for an anomaly, then drill into the suspicious DNS to spot the tunneling.",
      hints: [
        "Read the briefing. Run: cat briefing.txt",
        "Analyze the capture's protocol statistics. Run: analyze-pcap exfil.pcap",
        "Confirm the DNS tunneling exfiltration. Run: detect-exfil",
        "Run 'assemble' to view the assembled flag and the submit command",
      ],
      fragments: [
        { trigger: "/briefing.txt", value: "FLAG{DNS_", label: "Exfil-Hunt Briefing" },
        { trigger: "analyze-pcap exfil.pcap", value: "TUNN3L_", label: "Anomaly Spotted" },
        { trigger: "detect-exfil", value: "3XF1L_C4UGHT}", label: "Exfiltration Confirmed" },
      ],
      files: {
        "/briefing.txt": [
          "RANGE — TRAFFIC LAB 4: EXFIL DETECTION (you are the SOC)",
          "File: exfil.pcap — a host is suspected of exfiltrating data.",
          "Goal: find the covert channel, confirm DNS tunneling.",
          "Sequence: analyze-pcap exfil.pcap -> detect-exfil -> assemble",
        ].join("\n"),
        "/exfil.pcap": "[binary pcap — 19,338 packets — analyze with analyze-pcap]",
      },
      dirs: { "/": [{ name: "briefing.txt", isDir: false }, { name: "exfil.pcap", isDir: false }] },
      extraCommands: {
        "analyze-pcap": (args: string[]) => {
          if (!String(args[0] || "").includes("exfil")) return { lines: ["Usage: analyze-pcap exfil.pcap"] };
          return {
            lines: [
              "[Wireshark > Statistics > Protocol Hierarchy / Conversations]",
              "  DNS: 71% of packets (!!)  — wildly abnormal for normal browsing",
              "  Top talker: 10.10.10.55 -> 9,021 DNS queries to one domain (evil-c2.com)",
              "  I/O graph: steady ~60s interval (beaconing pattern)",
              "",
              ">> LEARN: hunt the ANOMALY — 71% DNS + one domain + a beacon interval",
              "   Volume + timing flagged it before reading a single payload. Fragment collected.",
            ],
          };
        },
        "detect-exfil": (_args: string[]) => ({
          lines: [
            "[drill into the DNS to evil-c2.com]",
            "  Query: a1b2c3d4e5f6g7h8...base32...evil-c2.com   (TXT)",
            "  Query: i9j0k1l2m3n4o5p6...base32...evil-c2.com   (TXT)  x thousands",
            "  decode(base32 subdomains) -> '/etc/passwd; customer_db dump...'",
            "  RITA beacon score: 0.96 -> confirmed C2 + DNS-tunnel exfil",
            "",
            ">> LEARN: long high-entropy subdomains over DNS = data smuggled out",
            ">> BLUE TEAM: egress-filter DNS, force logged resolvers + anomaly detection, DLP.",
            "   Same packet skill, defensive intent. Run 'assemble' for the flag.",
          ],
        }),
      },
    },
  },
];
