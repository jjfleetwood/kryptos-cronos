"use client";

import React from "react";

// ── Pattern definitions ────────────────────────────────────────────────────────
// Patterns applied in priority order — first match at a position wins.

type PatternDef = {
  regex: RegExp;
  render: (match: string, groups: RegExpExecArray) => React.ReactNode;
};

// Security / networking acronyms that should flip to monospace font
const SECURITY_ACRONYMS = [
  // Exploit & vuln classes
  "XSS","CSRF","SSRF","RCE","LFI","RFI","XXE","IDOR","SQLi","SSTI","CORS","CSP","WAF",
  // Network protocols
  "DNS","HTTP","HTTPS","TCP","UDP","SSH","TLS","SSL","FTP","SFTP","SMTP","SNMP","LDAP",
  "SMB","RDP","ICMP","ARP","BGP","OSPF","DHCP","NTP","IMAP","POP3","SIP","SCTP",
  // Auth / crypto
  "JWT","OAuth","SAML","PKI","MFA","2FA","OTP","HMAC","PBKDF2","AES","RSA","SHA","MD5",
  "ECDSA","ECC","DH","TLS","mTLS",
  // Infra & tools
  "VPN","API","SDK","CLI","GUI","CDN","DNS","IDS","IPS","SIEM","SOAR","SOC","NOC",
  "DMZ","NAT","PAT","VLAN","ACL","IAM","MFA","SaaS","PaaS","IaaS","S3","EC2","GCP",
  "AWS","GKE","EKS","IAC","CSPM","UEBA","NDR","EDR","XDR","EPP",
  // Threat intel & standards
  "APT","IOC","TTPs","STIX","TAXII","MITRE","OWASP","NIST","CISA","NSA","CIA","FBI",
  "NVD","CVSS","CVE","CWE","CAPEC","ATT&CK","STRIDE","DREAD",
  // OS / runtime
  "PHP","SQL","XML","JSON","YAML","HTML","CSS","JS","TS","npm","pip","bash","zsh","cmd",
  "PowerShell","WMI","COM","DLL","EXE","NTLM","Kerberos","LDAP","AD","GPO",
].join("|");

// Distinctive command-line tools / commands — rendered neon green for the hacker
// feel. Curated to avoid common English words (no `find`, `make`, `host`, `cat`,
// `less`, `top`, `kill`, `id`, `source`, `service`, `route`, `node`…). Longest
// first so multi-token tools (ssh-keygen, aircrack-ng) match before their prefix.
const CLI_COMMANDS = [
  "ls","cd","pwd","grep","awk","sed","sudo","chmod","chown","chgrp","rmdir","mkdir",
  "rsync","scp","sftp","ssh-keygen","ssh","curl","wget","nmap","masscan","netstat",
  "ifconfig","ipconfig","ip6tables","iptables","ufw","firewalld","netcat","ncat","socat",
  "tcpdump","tshark","nslookup","whois","whoami","killall","pkill","htop","lsof","strace",
  "ltrace","objdump","readelf","hexdump","xxd","base64","openssl","gpg","systemctl",
  "journalctl","crontab","apt-get","dpkg","yum","dnf","pacman","npx","kubectl",
  "docker-compose","docker","podman","terraform","ansible","vagrant","msfconsole","msfvenom",
  "meterpreter","mimikatz","bloodhound","crackmapexec","responder","sqlmap","nikto","gobuster",
  "dirbuster","dirb","ffuf","wfuzz","wpscan","hashcat","hydra","medusa","aircrack-ng","airmon-ng",
  "airodump-ng","ettercap","bettercap","reaver","certutil","rundll32","regsvr32","mshta",
  "vssadmin","schtasks","netsh","bcdedit","powershell","pwsh","dmesg","modprobe","sysctl",
  "traceroute","tracert","chroot","gunzip","gzip","unzip","tar","fdisk","lsblk","mount",
  "umount","ping","git","vim","nano","rm","mv","cp",
].sort((a, b) => b.length - a.length).join("|");

const PATTERNS: PatternDef[] = [
  // ── CVE identifiers — neon green pill (highest priority) ──────────────────
  {
    regex: /CVE-\d{4}-\d+/g,
    render: (m) => (
      <span className="text-green-400 font-mono font-bold bg-green-400/10 px-1.5 py-0.5 rounded text-[0.85em] border border-green-400/20 whitespace-nowrap">
        {m}
      </span>
    ),
  },

  // ── SQL keywords — yellow monospace ───────────────────────────────────────
  {
    regex: /\b(SELECT|INSERT\s+INTO|INSERT|UPDATE|DELETE\s+FROM|DELETE|DROP\s+TABLE|DROP|CREATE\s+TABLE|CREATE|ALTER|TRUNCATE|EXEC(?:UTE)?|UNION\s+SELECT|UNION|WHERE|ORDER\s+BY|GROUP\s+BY|HAVING|JOIN|INNER\s+JOIN|LEFT\s+JOIN|FROM|VALUES|SET\s+\w|GRANT|REVOKE|xp_cmdshell|sp_executesql)\b/gi,
    render: (m) => (
      <span className="text-green-300 font-mono font-semibold text-[0.88em] bg-green-400/5 px-0.5 rounded">{m}</span>
    ),
  },

  // ── Security / tech acronyms — purple monospace ───────────────────────────
  {
    regex: new RegExp(`\\b(${SECURITY_ACRONYMS})\\b`, "g"),
    render: (m) => (
      <span className="text-purple-300 font-mono font-semibold text-[0.88em]">{m}</span>
    ),
  },

  // ── File paths (Unix and Windows) — green monospace ──────────────────────
  {
    regex: /(?:\/(?:etc|var|usr|bin|tmp|home|proc|root|dev|lib|sys)\/[\w./\-]+|C:\\(?:Windows|Users|Program Files|System32)[\\\w. \-]*)/g,
    render: (m) => (
      <span className="text-green-300 font-mono text-[0.85em] bg-green-400/5 px-1 rounded">{m}</span>
    ),
  },

  // ── IPv4 addresses — teal monospace ──────────────────────────────────────
  {
    regex: /\b(?:\d{1,3}\.){3}\d{1,3}(?:\/\d{1,2})?\b/g,
    render: (m) => (
      <span className="text-teal-300 font-mono text-[0.88em]">{m}</span>
    ),
  },

  // ── Port numbers in context (:80, :443, port 22) ─────────────────────────
  {
    regex: /\bport\s+\d+\b|:\d{2,5}\b(?=[\s,;.)]|$)/gi,
    render: (m) => (
      <span className="text-teal-300 font-mono text-[0.88em]">{m}</span>
    ),
  },

  // ── Quoted strings — amber ────────────────────────────────────────────────
  {
    regex: /"([^"]{2,80})"/g,
    render: (m) => (
      <span className="text-amber-300 font-medium">{m}</span>
    ),
  },

  // ── Dollar amounts — cyan bold ────────────────────────────────────────────
  {
    regex: /\$[\d,.]+\s*(?:trillion|billion|million|thousand|[BMK])?(?=[\s.,;:!?)—–]|$)/gi,
    render: (m) => (
      <span className="text-cyan-300 font-semibold">{m}</span>
    ),
  },

  // ── Large numbers with scale word ────────────────────────────────────────
  {
    regex: /\b\d[\d,]*(?:\.\d+)?\s*(?:trillion|billion|million|thousand)\b/gi,
    render: (m) => (
      <span className="text-cyan-300 font-semibold">{m}</span>
    ),
  },

  // ── Percentages ───────────────────────────────────────────────────────────
  {
    regex: /\b\d+(?:\.\d+)?%/g,
    render: (m) => (
      <span className="text-cyan-300 font-semibold">{m}</span>
    ),
  },

  // ── Version numbers — teal monospace ─────────────────────────────────────
  {
    regex: /\bv\d+\.\d+(?:\.\d+)?\b/g,
    render: (m) => (
      <span className="text-teal-300 font-mono text-[0.88em]">{m}</span>
    ),
  },

  // ── CVSS score references — orange ───────────────────────────────────────
  {
    regex: /\bCVSS\s*(?:score\s+of\s+)?(\d+\.\d)\b/gi,
    render: (m) => (
      <span className="text-orange-300 font-mono font-semibold">{m}</span>
    ),
  },

  // ── Year anchors ─────────────────────────────────────────────────────────
  {
    regex: /\b(19|20)\d{2}\b/g,
    render: (m) => (
      <span className="text-gray-300 font-medium">{m}</span>
    ),
  },

  // ── Backtick code spans — cyan monospace pill ────────────────────────────
  {
    regex: /`([^`]+)`/g,
    render: (_m, g) => (
      <span className="text-cyan-200 font-mono text-[0.85em] bg-cyan-400/10 px-1 rounded">{g[1]}</span>
    ),
  },

  // ── Single-quoted terms — amber pill (contraction-safe: not after a letter) ─
  {
    regex: /(?<![A-Za-z])'([^']{2,80})'(?=[\s.,;:!?)]|$)/g,
    render: (m) => (
      <span className="text-amber-300 font-semibold bg-amber-400/10 px-1 rounded">{m}</span>
    ),
  },

  // ── CLI commands / tools — neon green monospace (hacker feel) ─────────────
  {
    regex: new RegExp(`\\b(${CLI_COMMANDS})\\b`, "g"),
    render: (m) => (
      <span className="font-mono font-semibold text-[#39ff14]" style={{ textShadow: "0 0 6px rgba(57,255,20,0.45)" }}>
        {m}
      </span>
    ),
  },

  // ── ALL-CAPS emphasis words — light shade to draw the reader's eye ────────
  // Lowest priority: acronyms/CVEs/SQL above already claim their spots; this
  // catches the remaining emphasized ALL-CAPS terms (SUPERVISED, OVERFITTING…).
  {
    regex: /\b[A-Z]{2,}\b/g,
    render: (m) => (
      <span className="text-amber-100 font-medium">{m}</span>
    ),
  },
];

// ── Tokeniser ─────────────────────────────────────────────────────────────────

function tokenise(text: string): React.ReactNode[] {
  const hits: Array<{ start: number; end: number; node: React.ReactNode }> = [];

  for (const { regex, render } of PATTERNS) {
    regex.lastIndex = 0;
    let m: RegExpExecArray | null;
    while ((m = regex.exec(text)) !== null) {
      hits.push({ start: m.index, end: m.index + m[0].length, node: render(m[0], m) });
    }
  }

  hits.sort((a, b) => a.start - b.start || b.end - a.end);
  const kept: typeof hits = [];
  let cursor = 0;
  for (const h of hits) {
    if (h.start >= cursor) {
      kept.push(h);
      cursor = h.end;
    }
  }

  const nodes: React.ReactNode[] = [];
  let pos = 0;
  for (let i = 0; i < kept.length; i++) {
    const { start, end, node } = kept[i];
    if (start > pos) nodes.push(text.slice(pos, start));
    nodes.push(React.cloneElement(node as React.ReactElement, { key: i }));
    pos = end;
  }
  if (pos < text.length) nodes.push(text.slice(pos));
  return nodes;
}

// ── Patterns that only apply to security/technical content ────────────────────
const SECURITY_PATTERN_INDEXES = new Set([0, 1, 2, 3, 4, 5]); // CVE, SQL, acronyms, file paths, IPs, ports

// ── Public component ──────────────────────────────────────────────────────────

export default function RichText({
  text,
  className = "",
  context = "security",
}: {
  text: string;
  className?: string;
  /** "security" applies all patterns; "general" skips security-specific highlights */
  context?: "security" | "general";
}) {
  if (context === "general") {
    const generalPatterns = PATTERNS.filter((_, i) => !SECURITY_PATTERN_INDEXES.has(i));
    const nodes: React.ReactNode[] = [];
    const hits: Array<{ start: number; end: number; node: React.ReactNode }> = [];
    for (const { regex, render } of generalPatterns) {
      regex.lastIndex = 0;
      let m: RegExpExecArray | null;
      while ((m = regex.exec(text)) !== null) {
        hits.push({ start: m.index, end: m.index + m[0].length, node: render(m[0], m) });
      }
    }
    hits.sort((a, b) => a.start - b.start || b.end - a.end);
    const kept: typeof hits = [];
    let cursor = 0;
    for (const h of hits) {
      if (h.start >= cursor) { kept.push(h); cursor = h.end; }
    }
    let pos = 0;
    for (let i = 0; i < kept.length; i++) {
      const { start, end, node } = kept[i];
      if (start > pos) nodes.push(text.slice(pos, start));
      nodes.push(React.cloneElement(node as React.ReactElement, { key: i }));
      pos = end;
    }
    if (pos < text.length) nodes.push(text.slice(pos));
    return <span className={className}>{nodes}</span>;
  }
  return <span className={className}>{tokenise(text)}</span>;
}
