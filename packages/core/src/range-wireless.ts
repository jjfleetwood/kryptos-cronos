import type { EpochConfig, StageConfig } from "./types";

// ── Cyber Range: Wireless Attacks ────────────────────────────────────────────
// The air gap that isn't: WPA2 4-way-handshake capture + offline crack, evil-twin
// rogue APs + captive-portal harvesting, clientless PMKID/WPS attacks, and
// WPA2-Enterprise EAP attacks → WPA3/802.1X defenses. Faithful simulation of the
// aircrack-ng / hcxtools / hostapd toolchain. Public sources (aircrack-ng docs,
// hashcat PMKID disclosure, Wi-Fi Alliance WPA3, IEEE 802.11w).

export const rangeWirelessEpoch: EpochConfig = {
  id: "range-wireless",
  name: "Wireless Attacks",
  subtitle: "Crack WPA2, raise an evil twin, and defend the air",
  description:
    "Wi-Fi is the perimeter you can't see. Capture and crack a WPA2 4-way handshake, stand up an evil-twin rogue AP with a captive portal, run clientless PMKID and WPS attacks, and break WPA2-Enterprise EAP — each paired with the WPA3 / 802.1X / 802.11w defense that stops it.",
  emoji: "📡",
  color: "Cyan",
  unlocked: true,
};

const ap = (vuln: string) => ({ ip: "n/a (radio)", hostname: "CORP-WIFI (BSSID AA:BB:CC:11:22:33)", os: "802.11 AP — channel 6", openPorts: "WPA2-PSK (and a WPA2-Enterprise SSID)", vulnerability: vuln });

export const rangeWirelessStages: StageConfig[] = [
  // ─── Lab 1: WPA2 handshake capture + crack ──────────────────────────────────
  {
    epochId: "range-wireless",
    wonder: { name: "The Four-Way Handshake", location: "Authorized Wireless Assessment", era: "Present Day", emoji: "🤝" },
    id: "wifi-01",
    order: 1,
    title: "WPA2 Handshake Capture & Crack",
    subtitle: "Deauth, capture the handshake, crack the PSK offline",
    category: "cybersecurity",
    xp: 175,
    badge: { id: "badge-wifi-wpa2", name: "Handshake Hunter", emoji: "🤝" },
    challengeType: "ctf",
    info: {
      tagline: "WPA2 never sends the password over the air — but it sends a handshake derived from it, and a weak password makes that handshake crackable offline.",
      year: 2004,
      overview: [
        "WPA2-Personal (WPA2-PSK) secures most home and small-business Wi-Fi, and its security rests entirely on the pre-shared key — the Wi-Fi password. When a client joins, the access point and client perform a four-way handshake that proves both sides know the PSK without ever transmitting it, deriving fresh session keys in the process. The attack doesn't break the crypto; it captures that handshake (which contains a value derived from the PSK) and then guesses the password offline, computing the same derivation for each candidate until one matches. To avoid waiting for a natural join, the attacker sends a forged deauthentication frame to knock a connected client off — it instantly reconnects, and the handshake is captured. From there it's an offline password-cracking problem identical to the Password epoch.",
        "The whole chain is a few commands: put the adapter in monitor mode (airmon-ng), capture on the target's channel (airodump-ng), deauth a client to force a re-handshake (aireplay-ng), and crack the captured `.cap`/`.hccapx` with aircrack-ng or Hashcat (mode 22000) against a wordlist. Because the derivation (PBKDF2 with the SSID as salt, 4096 iterations) is deliberately slow, a long random passphrase is effectively uncrackable — but a short, common, or dictionary password falls quickly. That is exactly the defense: WPA2-PSK security is your passphrase, so use a long, random one (or better, move to WPA3-SAE, whose 'Dragonfly' handshake resists offline guessing entirely because each guess requires a live interaction). Disable WPS, hide nothing in 'hidden' SSIDs (they don't help), and for any real organization use WPA2/WPA3-Enterprise (802.1X) so there's no shared password to capture at all.",
      ],
      technical: {
        title: "Capture and Crack the Handshake",
        body: [
          "The capture chain (a few commands):\n- airmon-ng start wlan0 — monitor mode.\n- airodump-ng -c 6 --bssid AA:BB:.. -w cap wlan0mon — capture on the AP's channel.\n- aireplay-ng --deauth 5 -a <bssid> -c <client> wlan0mon — force a re-handshake.\n- Wait for the 'WPA handshake' banner in airodump → you have it.",
          "The offline crack (the password is everything):\n- aircrack-ng -w rockyou.txt cap-01.cap  (or hashcat -m 22000).\n- The PSK is run through PBKDF2(SSID, 4096 iters) — slow by design, but a weak password still falls.\n- A 20-char random passphrase is effectively uncrackable; 'Summer2024!' is not.",
          "The defenses (passphrase + protocol):\n- Long, random WPA2 passphrase (the only thing protecting WPA2-PSK).\n- WPA3-SAE (Dragonfly) — resists OFFLINE guessing; each attempt needs a live handshake.\n- 802.11w (Protected Management Frames) blocks the deauth that forces re-handshakes.\n- WPA2/WPA3-Enterprise (802.1X) — no shared password to capture; disable WPS.",
        ],
        codeExample: {
          label: "Deauth → capture → crack",
          code: `# Monitor mode + capture on the AP's channel
$ airmon-ng start wlan0
$ airodump-ng -c 6 --bssid AA:BB:CC:11:22:33 -w cap wlan0mon

# Knock a client off so it re-handshakes (captured instantly)
$ aireplay-ng --deauth 5 -a AA:BB:CC:11:22:33 -c 44:55:66:77:88:99 wlan0mon
  >> airodump banner: "WPA handshake: AA:BB:CC:11:22:33"

# Crack the captured handshake offline
$ aircrack-ng -w rockyou.txt cap-01.cap     # or: hashcat -m 22000
  KEY FOUND! [ Summer2024! ]                # weak PSK -> cracked

# THE FIX: long random passphrase; WPA3-SAE; 802.11w stops the deauth`,
        },
      },
      incident: {
        title: "WPA2-PSK — Strong Crypto, Weak Passwords",
        when: "WPA2 ratified 2004; handshake-capture cracking standard ever since",
        where: "Home and small-business Wi-Fi worldwide",
        impact: "Any WPA2-PSK network with a weak password is one deauth + offline crack from compromise",
        body: [
          "WPA2's cryptography is sound — the four-way handshake never exposes the password and derives strong session keys — yet the entire scheme is only as strong as the human-chosen pre-shared key. Capturing the handshake (helped along by a forged deauth frame) turns Wi-Fi security into the same offline password-cracking problem covered in the Password epoch, and weak or dictionary passphrases fall in minutes on a GPU. The 2017 KRACK research showed even the handshake itself had implementation flaws, but the everyday risk is simply weak PSKs.",
          "The defense is a passphrase and a protocol upgrade. A long, random WPA2 passphrase makes offline cracking infeasible; WPA3-SAE removes the offline attack class entirely by requiring a live interaction per guess; 802.11w Protected Management Frames blocks the deauth that accelerates capture; and any organization should run Enterprise (802.1X) so there is no shared secret to steal. The lesson mirrors the rest of the Range — the protocol is fine, the human-set credential is the weakness, and the fix is known.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Attacker (monitor mode)", sub: "deauth a client", type: "attacker" },
          { label: "4-way handshake", sub: "derived from PSK", type: "system" },
          { label: "Offline crack", sub: "weak passphrase", type: "victim" },
          { label: "Wi-Fi PSK recovered", sub: "→ fix: long pw / WPA3 / 802.11w", type: "result" },
        ],
      },
      timeline: [
        { year: 2004, event: "WPA2 (802.11i) ratified", highlight: true },
        { year: 2017, event: "KRACK — key-reinstallation flaws in the 4-way handshake" },
        { year: 2018, event: "WPA3-SAE released — resists offline PSK guessing" },
      ],
      keyTakeaways: [
        "WPA2-PSK's security is entirely the passphrase; the handshake never sends it but is derived from it",
        "Capture the 4-way handshake (force it with a deauth) → crack offline (aircrack-ng / hashcat -m 22000)",
        "PBKDF2(SSID, 4096) is slow, so a long random passphrase is effectively uncrackable; weak ones fall fast",
        "WPA3-SAE removes the offline-guessing attack; 802.11w blocks the deauth that forces re-handshakes",
        "Organizations should use WPA2/WPA3-Enterprise (802.1X) — no shared password to capture",
      ],
      references: [
        { title: "aircrack-ng — WPA handshake cracking", url: "https://www.aircrack-ng.org/doku.php?id=cracking_wpa" },
        { title: "Wi-Fi Alliance — WPA3", url: "https://www.wi-fi.org/discover-wi-fi/security" },
      ],
    },
    quiz: {
      questions: [
        { id: "wifi-01-q1", type: "Concept", challenge: "What protects WPA2-PSK.", text: "What does WPA2-PSK security ultimately rest on?", options: ["The pre-shared key (the Wi-Fi password)", "The SSID name", "The channel number", "MAC filtering"], correctIndex: 0, explanation: "The passphrase is the whole defense for WPA2-PSK." },
        { id: "wifi-01-q2", type: "Handshake", challenge: "What's captured.", text: "What does the attacker capture to crack WPA2?", options: ["The 4-way handshake (a value derived from the PSK)", "The plaintext password over the air", "The router firmware", "The DNS cache"], correctIndex: 0, explanation: "The handshake derives from the PSK without sending it." },
        { id: "wifi-01-q3", type: "Deauth", challenge: "Force it.", text: "Why send a deauthentication frame?", options: ["To knock a client off so it reconnects and you capture the handshake", "To crack the password", "To boost signal", "To change channel"], correctIndex: 0, explanation: "Deauth forces an immediate re-handshake." },
        { id: "wifi-01-q4", type: "Crack", challenge: "Offline.", text: "How is the captured handshake cracked?", options: ["Offline against a wordlist (aircrack-ng / hashcat -m 22000)", "By brute-forcing the AP live", "It can't be cracked", "By spoofing DNS"], correctIndex: 0, explanation: "It becomes an offline password-cracking problem." },
        { id: "wifi-01-q5", type: "Why Slow", challenge: "The derivation.", text: "Why isn't a long random passphrase practically crackable?", options: ["PBKDF2 with 4096 iterations makes each guess slow, so a big keyspace is infeasible", "WPA2 has no math", "It uses MFA", "The handshake is encrypted twice"], correctIndex: 0, explanation: "Slow KDF + huge keyspace defeats guessing." },
        { id: "wifi-01-q6", type: "Defense", challenge: "Best protocol fix.", text: "What removes the offline-guessing attack entirely?", options: ["WPA3-SAE (Dragonfly) — each guess needs a live interaction", "Hiding the SSID", "MAC filtering", "A shorter password"], correctIndex: 0, explanation: "SAE defeats offline dictionary attacks." },
        { id: "wifi-01-q7", type: "Defense", challenge: "Stop the deauth.", text: "What blocks the deauth that forces re-handshakes?", options: ["802.11w Protected Management Frames", "A longer SSID", "Channel hopping", "WEP"], correctIndex: 0, explanation: "PMF protects management frames from forgery." },
        { id: "wifi-01-q8", type: "Enterprise", challenge: "No shared secret.", text: "Why is WPA2/WPA3-Enterprise stronger against this attack?", options: ["There's no shared password to capture (per-user 802.1X auth)", "It hides the SSID", "It's faster", "It uses WEP"], correctIndex: 0, explanation: "802.1X removes the single shared PSK." },
      ],
    },
    ctf: {
      attackerMachine: { ip: "10.10.30.50", hostname: "kali-wifi", os: "Kali Linux (Alfa adapter, monitor mode)" },
      targetMachine: ap("WPA2-PSK with a weak, dictionary passphrase"),
      scenario: "You're assessing the CORP-WIFI WPA2-PSK network. Put your adapter in monitor mode, capture the 4-way handshake (force it with a deauth), and crack the passphrase offline.",
      hint: "Capture on the AP's channel, deauth a client to force the handshake, then crack the .cap.",
      hints: [
        "Read the briefing. Run: cat briefing.txt",
        "Capture the handshake (deauth forces it). Run: capture-handshake",
        "Crack the captured handshake offline. Run: crack-wpa",
        "Run 'assemble' to view the assembled flag and the submit command",
      ],
      fragments: [
        { trigger: "/briefing.txt", value: "FLAG{WPA2_", label: "WPA2 Briefing" },
        { trigger: "capture-handshake", value: "H4NDSH4K3_", label: "Handshake Captured" },
        { trigger: "crack-wpa", value: "CR4CK3D}", label: "Passphrase Cracked" },
      ],
      files: {
        "/briefing.txt": [
          "RANGE — WIRELESS LAB 1: WPA2 HANDSHAKE (target CORP-WIFI, ch 6)",
          "Goal: capture the 4-way handshake, crack the PSK offline.",
          "Sequence: capture-handshake -> crack-wpa -> assemble",
        ].join("\n"),
      },
      dirs: { "/": [{ name: "briefing.txt", isDir: false }] },
      extraCommands: {
        "capture-handshake": (_args: string[]) => ({
          lines: [
            "$ airmon-ng start wlan0   ->  wlan0mon (monitor mode)",
            "$ airodump-ng -c 6 --bssid AA:BB:CC:11:22:33 -w cap wlan0mon",
            "  CLIENT 44:55:66:77:88:99 associated",
            "$ aireplay-ng --deauth 5 -a AA:BB:CC:11:22:33 -c 44:55:66:77:88:99 wlan0mon",
            "  >> airodump: 'WPA handshake: AA:BB:CC:11:22:33'   [CAPTURED]",
            "",
            ">> LEARN: a forged deauth forces a re-handshake you capture instantly",
            ">> BLUE TEAM: 802.11w (PMF) blocks the deauth. Fragment collected.",
          ],
        }),
        "crack-wpa": (_args: string[]) => ({
          lines: [
            "$ aircrack-ng -w rockyou.txt cap-01.cap",
            "  [00:00:14] 18211 keys tested ...",
            "  KEY FOUND! [ Summer2024! ]",
            "  -> CORP-WIFI PSK = Summer2024!  (weak, dictionary)",
            "",
            ">> LEARN: WPA2 crypto is fine; the human passphrase was the weakness",
            ">> BLUE TEAM: long random passphrase, or WPA3-SAE (no offline guessing).",
            "   Run 'assemble' to view the flag and the submit command.",
          ],
        }),
      },
    },
  },

  // ─── Lab 2: evil twin + captive portal ──────────────────────────────────────
  {
    epochId: "range-wireless",
    wonder: { name: "The Evil Twin", location: "Authorized Wireless Assessment", era: "Present Day", emoji: "👯" },
    id: "wifi-02",
    order: 2,
    title: "Evil Twin & Captive Portal",
    subtitle: "Impersonate the AP, harvest the credentials",
    category: "cybersecurity",
    xp: 175,
    badge: { id: "badge-wifi-eviltwin", name: "Evil Twin", emoji: "👯" },
    challengeType: "ctf",
    info: {
      tagline: "Clients trust an SSID, not an access point — so clone the name, knock them off the real one, and let them reconnect to you.",
      year: 2008,
      overview: [
        "An evil twin is a rogue access point that broadcasts the same SSID as a legitimate network. Wi-Fi clients identify networks by name and will happily associate with whichever matching AP has the strongest signal, so an attacker stands up a clone (often with a stronger signal or after deauthing victims off the real AP), and devices reconnect to the impostor. From there the attacker is the network: they can run a captive portal — a fake 'please re-enter your Wi-Fi password / company login to continue' page — and harvest credentials directly, or man-in-the-middle the victim's traffic. This is a staple of coffee-shop and conference attacks and a favorite for stealing WPA2 passphrases and corporate logins without ever cracking anything.",
        "The toolchain is mature: hostapd (or airbase-ng / the Wifiphisher and eaphammer frameworks) raises the rogue AP, a deauth flood pushes clients off the real network, and a DNS/captive-portal server (dnsmasq + a cloned login page) collects whatever the victim types. The harvested 'Wi-Fi password' can even be validated against the real handshake to confirm it on the spot. The defenses are about authenticating the network to the client and protecting the management plane: WPA3-Enterprise / 802.1X with server-certificate validation means the client verifies the AP's identity (a rogue AP has no valid cert), 802.11w blocks the deauth that drives victims away, and Wireless Intrusion Prevention Systems (WIPS) detect rogue/duplicate SSIDs. User-side, never enter credentials into an unexpected Wi-Fi portal, and disable auto-join for open networks. The core lesson: open and PSK Wi-Fi authenticate the client to the AP but not the AP to the client — and that asymmetry is the whole attack.",
      ],
      technical: {
        title: "Raise the Twin, Harvest the Creds",
        body: [
          "The evil-twin chain:\n- hostapd / airbase-ng — broadcast a clone of the target SSID (stronger signal).\n- aireplay-ng --deauth — flood the real AP so clients drop and reconnect to you.\n- dnsmasq + a captive portal (cloned login) — harvest the typed Wi-Fi/corp password.\n- Frameworks automate it: Wifiphisher, eaphammer, Fluxion.",
          "Why clients fall for it:\n- Wi-Fi identifies networks by SSID (name), not by a verified AP identity.\n- Clients auto-join the strongest matching SSID — including a rogue clone.\n- Open/PSK Wi-Fi authenticates the CLIENT to the AP, never the AP to the client.",
          "The defenses (authenticate the AP + protect mgmt frames):\n- WPA3-Enterprise / 802.1X with server-CERT validation — the client verifies the AP; a rogue has no valid cert.\n- 802.11w (PMF) blocks the deauth that pushes victims to the twin.\n- WIPS detects rogue/duplicate SSIDs; disable client auto-join for open nets.\n- User: never type credentials into an unexpected Wi-Fi portal.",
        ],
        codeExample: {
          label: "Clone the SSID, capture the login",
          code: `# Raise a rogue AP cloning the target SSID
$ hostapd evil.conf      # ssid=CORP-WIFI, channel=6, stronger TX power

# Push clients off the real AP so they reconnect to the twin
$ aireplay-ng --deauth 0 -a AA:BB:CC:11:22:33 wlan0mon

# Serve a captive portal that asks for the "Wi-Fi password"
$ dnsmasq + http://10.0.0.1/login  ->  victim submits: Summer2024!
  [+] harvested CORP-WIFI credential from 10.0.0.37

# THE FIX: 802.1X w/ server-cert validation; 802.11w; WIPS rogue-AP alerts`,
        },
      },
      incident: {
        title: "Evil Twins — The SSID You Trust",
        when: "A staple of public-Wi-Fi attacks for 15+ years",
        where: "Coffee shops, airports, hotels, conferences, corporate campuses",
        impact: "Credential theft and full man-in-the-middle without cracking anything",
        body: [
          "The evil twin endures because it exploits trust in a name rather than a flaw in crypto: clients pick networks by SSID and reconnect to the strongest match, so a clone with a captive portal harvests Wi-Fi passwords and corporate logins from victims who believe they're on the real network. Deauthing them off the legitimate AP makes the switch automatic. It needs no password cracking — the victim hands over the credential.",
          "The countermeasure is to authenticate the access point to the client, which only enterprise authentication (802.1X) with server-certificate validation truly provides — a rogue AP cannot present a valid certificate, so a correctly-configured client refuses it. Protected Management Frames stop the driving deauth, WIPS flags duplicate SSIDs, and users must be trained never to enter credentials into an unexpected portal. The asymmetry of PSK/open Wi-Fi — client proves itself to the AP, but not vice-versa — is the lesson and the fix.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Rogue AP (clone SSID)", sub: "stronger signal", type: "attacker" },
          { label: "Deauth the real AP", sub: "victims reconnect to twin", type: "system" },
          { label: "Captive portal", sub: "fake login harvest", type: "victim" },
          { label: "Credentials stolen", sub: "→ fix: 802.1X cert + 802.11w", type: "result" },
        ],
      },
      timeline: [
        { year: 2008, event: "Evil-twin / rogue-AP attacks become mainstream", highlight: true },
        { year: 2015, event: "Wifiphisher automates captive-portal harvesting" },
        { year: 2018, event: "WPA3 + Enhanced Open (OWE) address some open-Wi-Fi risk" },
      ],
      keyTakeaways: [
        "An evil twin clones a legitimate SSID; clients auto-join the strongest matching name",
        "Deauthing victims off the real AP makes them reconnect to the rogue one",
        "A captive portal harvests the typed Wi-Fi/corporate password — no cracking needed",
        "Open/PSK Wi-Fi authenticates the client to the AP but NOT the AP to the client",
        "Fix: 802.1X with server-certificate validation, 802.11w, WIPS rogue-AP detection, user training",
      ],
      references: [
        { title: "Wifiphisher — rogue-AP framework", url: "https://github.com/wifiphisher/wifiphisher" },
        { title: "Wi-Fi Alliance — Enhanced Open (OWE) / WPA3", url: "https://www.wi-fi.org/discover-wi-fi/security" },
      ],
    },
    quiz: {
      questions: [
        { id: "wifi-02-q1", type: "Concept", challenge: "What it is.", text: "What is an evil twin?", options: ["A rogue AP broadcasting the same SSID as a legitimate network", "A cracked password", "A second router brand", "A DNS server"], correctIndex: 0, explanation: "It clones the network name to lure clients." },
        { id: "wifi-02-q2", type: "Why", challenge: "Client behavior.", text: "Why do clients connect to the evil twin?", options: ["They identify networks by SSID and auto-join the strongest match", "They verify the AP's certificate", "They prefer new MACs", "They scan ports"], correctIndex: 0, explanation: "SSID + signal strength drive auto-join." },
        { id: "wifi-02-q3", type: "Drive", challenge: "Force the switch.", text: "How does the attacker push victims onto the twin?", options: ["Deauth them off the real AP so they reconnect to the stronger clone", "Crack the PSK", "Change the SSID name", "Spoof DNS only"], correctIndex: 0, explanation: "A deauth flood forces reconnection." },
        { id: "wifi-02-q4", type: "Harvest", challenge: "Captive portal.", text: "What does the captive portal do?", options: ["Presents a fake login that harvests the typed credential", "Encrypts traffic", "Boosts signal", "Cracks WPA2"], correctIndex: 0, explanation: "The victim hands over the password directly." },
        { id: "wifi-02-q5", type: "Asymmetry", challenge: "The flaw.", text: "What asymmetry makes evil twins possible?", options: ["PSK/open Wi-Fi authenticates the client to the AP, not the AP to the client", "Clients are always admins", "APs have no MAC", "DNS is unencrypted"], correctIndex: 0, explanation: "The AP's identity isn't verified by the client." },
        { id: "wifi-02-q6", type: "Defense", challenge: "Authenticate the AP.", text: "What lets a client verify the AP is legitimate?", options: ["802.1X with server-certificate validation", "A longer SSID", "MAC filtering", "Hiding the SSID"], correctIndex: 0, explanation: "A rogue AP can't present a valid server cert." },
        { id: "wifi-02-q7", type: "Defense", challenge: "Mgmt frames.", text: "What blocks the deauth that drives victims to the twin?", options: ["802.11w Protected Management Frames", "WEP", "Channel 6", "A captive portal"], correctIndex: 0, explanation: "PMF stops forged deauth frames." },
        { id: "wifi-02-q8", type: "User", challenge: "Human defense.", text: "What's the key user-side defense?", options: ["Never enter credentials into an unexpected Wi-Fi portal; disable open-net auto-join", "Use a shorter password", "Turn off the firewall", "Broadcast your SSID"], correctIndex: 0, explanation: "User vigilance defeats the harvest step." },
      ],
    },
    ctf: {
      attackerMachine: { ip: "10.10.30.50", hostname: "kali-wifi", os: "Kali Linux (rogue-AP capable adapter)" },
      targetMachine: ap("clients auto-join by SSID; no AP authentication (open/PSK)"),
      scenario: "Stand up an evil twin of CORP-WIFI, deauth clients off the real AP so they reconnect to yours, and harvest a credential via a captive portal.",
      hint: "Raise the rogue AP cloning the SSID, then run the captive portal to harvest the login.",
      hints: [
        "Read the briefing. Run: cat briefing.txt",
        "Raise the evil twin + deauth victims over. Run: evil-twin",
        "Harvest the credential via captive portal. Run: captive-portal",
        "Run 'assemble' to view the assembled flag and the submit command",
      ],
      fragments: [
        { trigger: "/briefing.txt", value: "FLAG{3V1L_TW1N_", label: "Evil Twin Briefing" },
        { trigger: "evil-twin", value: "C4PT1V3_", label: "Rogue AP Live" },
        { trigger: "captive-portal", value: "CR3DS}", label: "Credentials Harvested" },
      ],
      files: {
        "/briefing.txt": [
          "RANGE — WIRELESS LAB 2: EVIL TWIN (clone CORP-WIFI)",
          "Goal: rogue AP + captive portal -> harvest a credential.",
          "Sequence: evil-twin -> captive-portal -> assemble",
        ].join("\n"),
      },
      dirs: { "/": [{ name: "briefing.txt", isDir: false }] },
      extraCommands: {
        "evil-twin": (_args: string[]) => ({
          lines: [
            "$ hostapd evil.conf    (ssid=CORP-WIFI, ch 6, +TX power)",
            "  [+] rogue AP 'CORP-WIFI' broadcasting (BSSID DE:AD:BE:EF:00:01)",
            "$ aireplay-ng --deauth 0 -a AA:BB:CC:11:22:33 wlan0mon",
            "  [+] real AP flooded -> client 10.0.0.37 reconnected to the TWIN",
            "",
            ">> LEARN: clients trust the SSID name, not the AP — the strongest clone wins",
            ">> BLUE TEAM: 802.1X server-cert validation; 802.11w. Fragment collected.",
          ],
        }),
        "captive-portal": (_args: string[]) => ({
          lines: [
            "$ dnsmasq + portal @ http://10.0.0.1/login  (cloned CORP-WIFI page)",
            "  [*] victim 10.0.0.37 redirected to portal ...",
            "  [+] POST /login  ssid_password=Summer2024!  user=bob",
            "  [+] HARVESTED: CORP-WIFI / bob / Summer2024! (validated vs real handshake)",
            "",
            ">> LEARN: no cracking needed — the victim typed the credential to you",
            ">> BLUE TEAM: train users; WIPS rogue-AP alerts; Enhanced Open/WPA3.",
            "   Run 'assemble' to view the flag and the submit command.",
          ],
        }),
      },
    },
  },

  // ─── Lab 3: PMKID + WPS (clientless) ────────────────────────────────────────
  {
    epochId: "range-wireless",
    wonder: { name: "The Clientless Capture", location: "Authorized Wireless Assessment", era: "Present Day", emoji: "🎯" },
    id: "wifi-03",
    order: 3,
    title: "PMKID & WPS Attacks",
    subtitle: "Crack WPA2 with no client connected at all",
    category: "cybersecurity",
    xp: 175,
    badge: { id: "badge-wifi-pmkid", name: "Clientless", emoji: "🎯" },
    challengeType: "ctf",
    info: {
      tagline: "You don't even need a connected client — many APs hand you a PMKID you can crack offline, and WPS PINs fall to a 'pixie-dust' flaw.",
      year: 2018,
      overview: [
        "The PMKID attack, disclosed by the Hashcat team (Jens 'atom' Steube) in 2018, removed the last inconvenience of WPA2 cracking: you no longer need a connected client or a deauth. Many access points include a PMKID — a value derived from the same Pairwise Master Key (and thus the PSK) — in the first message of the handshake, sent to anyone who simply asks to associate. An attacker requests association with hcxdumptool, grabs the PMKID directly from the AP, and cracks it offline with Hashcat (mode 16800/22000), exactly like a captured handshake but without needing any victim on the network. It made WPA2-PSK assessment a single-attacker, single-AP operation.",
        "Alongside it, Wi-Fi Protected Setup (WPS) — the 'press a button or enter an 8-digit PIN' convenience feature — has its own long-standing weaknesses. The original WPS PIN design leaks whether the first and second halves are correct independently, collapsing a billion-PIN space to roughly 11,000 guesses (Reaver, 2011), and the 'Pixie Dust' attack (2014) recovers the PIN almost instantly on routers with weak nonce generation by attacking the protocol's E-S1/E-S2 values offline. A recovered WPS PIN yields the WPA2 passphrase outright. The defenses are configuration: disable WPS entirely (it's the single best Wi-Fi hardening step), use a long random passphrase so a captured PMKID is uncrackable, deploy WPA3-SAE (which doesn't expose a crackable PMKID and resists offline guessing), and keep AP firmware current so weak-nonce Pixie-Dust bugs are patched. The theme holds: convenience features and exposed key-derived values are the attack surface, and turning them off or upgrading the protocol is the fix.",
      ],
      technical: {
        title: "PMKID Roasting + WPS PIN Attacks",
        body: [
          "PMKID (clientless — no victim needed):\n- hcxdumptool requests association → many APs return a PMKID in handshake msg 1.\n- hcxpcapngtool converts it; hashcat -m 22000 cracks it offline against a wordlist.\n- Same math as a captured handshake, but ZERO connected clients required.",
          "WPS PIN attacks:\n- Reaver (2011): the PIN is validated in two halves → ~11,000 guesses, not 10^8.\n- Pixie Dust (2014): recover the PIN offline in seconds on weak-nonce routers (E-S1/E-S2).\n- A recovered WPS PIN reveals the WPA2 passphrase directly.",
          "The defenses (turn it off + upgrade):\n- DISABLE WPS — the single best Wi-Fi hardening step.\n- Long random passphrase → a captured PMKID is uncrackable.\n- WPA3-SAE — no crackable PMKID exposed; resists offline guessing.\n- Patch AP firmware (kills weak-nonce Pixie-Dust).",
        ],
        codeExample: {
          label: "Grab a PMKID, crack it (no client)",
          code: `# Clientless: ask the AP to associate and grab the PMKID
$ hcxdumptool -i wlan0mon --enable_status=1 -o corp.pcapng
  [+] PMKID captured from AA:BB:CC:11:22:33 (no client connected!)
$ hcxpcapngtool -o hash.22000 corp.pcapng
$ hashcat -m 22000 hash.22000 rockyou.txt    # -> Summer2024!

# WPS: pixie-dust the PIN on a weak-nonce router
$ reaver -i wlan0mon -b AA:BB:CC:11:22:33 -K 1
  [+] WPS PIN: 12345670   ->  WPA PSK: Summer2024!

# THE FIX: disable WPS; long random passphrase; WPA3; patch firmware`,
        },
      },
      incident: {
        title: "PMKID & WPS — Convenience as Attack Surface",
        when: "WPS flaws 2011–2014; PMKID attack disclosed 2018",
        where: "Consumer/SMB routers with WPS and PMKID-emitting APs",
        impact: "WPA2 cracked with no connected client, or the passphrase recovered straight from a WPS PIN",
        body: [
          "Both of these attacks come from features meant to help. WPS exists to make joining Wi-Fi easy, but its PIN design and weak router nonce generation let Reaver and Pixie Dust recover the passphrase, sometimes in seconds. The PMKID attack showed that many APs volunteer a key-derived value to anyone who asks, removing the need for a victim and making WPA2-PSK cracking a quiet, one-sided operation.",
          "The fixes are unglamorous and effective: disable WPS (there is rarely a reason to keep it), choose a long random passphrase so any captured PMKID is uncrackable, upgrade to WPA3-SAE which neither exposes a crackable PMKID nor permits offline guessing, and keep firmware patched. As throughout the Range, the lesson is that convenience features and exposed cryptographic intermediates are the attack surface — and the hardening is to remove them.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Attacker (associate req)", sub: "no client needed", type: "attacker" },
          { label: "AP emits PMKID / weak WPS", sub: "key-derived value / PIN", type: "system" },
          { label: "Offline crack", sub: "hashcat / reaver", type: "victim" },
          { label: "PSK recovered", sub: "→ fix: disable WPS, WPA3", type: "result" },
        ],
      },
      timeline: [
        { year: 2011, event: "Reaver — WPS PIN brute force (~11k guesses)" },
        { year: 2014, event: "Pixie Dust — offline WPS PIN recovery on weak-nonce routers" },
        { year: 2018, event: "Hashcat PMKID attack — clientless WPA2 capture", highlight: true },
      ],
      keyTakeaways: [
        "The PMKID attack captures a crackable, PSK-derived value with NO connected client and no deauth",
        "Grab it with hcxdumptool, crack offline (hashcat -m 22000) — same as a handshake but clientless",
        "WPS PINs fall to Reaver (~11k guesses) and Pixie Dust (offline, seconds on weak-nonce routers)",
        "A recovered WPS PIN yields the WPA2 passphrase directly",
        "Fix: disable WPS, long random passphrase, WPA3-SAE, patch AP firmware",
      ],
      references: [
        { title: "Hashcat — PMKID attack (atom)", url: "https://hashcat.net/forum/thread-7717.html" },
        { title: "Reaver / Pixie Dust — WPS attacks", url: "https://github.com/t6x/reaver-wps-fork-t6x" },
      ],
    },
    quiz: {
      questions: [
        { id: "wifi-03-q1", type: "Concept", challenge: "What's new.", text: "What makes the PMKID attack notable?", options: ["It cracks WPA2 with NO connected client and no deauth", "It breaks AES", "It needs Domain Admin", "It only works on WEP"], correctIndex: 0, explanation: "It's clientless — the AP volunteers the PMKID." },
        { id: "wifi-03-q2", type: "Source", challenge: "Where it comes from.", text: "Where does the PMKID come from?", options: ["The AP includes it in handshake msg 1, derived from the PSK", "The client's browser", "DNS", "The SSID"], correctIndex: 0, explanation: "It's a PSK-derived value the AP sends on association." },
        { id: "wifi-03-q3", type: "Crack", challenge: "Offline.", text: "How is a captured PMKID cracked?", options: ["Offline with hashcat (-m 22000) against a wordlist", "Online at the AP", "It can't be", "By DNS spoofing"], correctIndex: 0, explanation: "Same offline cracking as a handshake." },
        { id: "wifi-03-q4", type: "WPS", challenge: "Reaver.", text: "Why is the WPS PIN weaker than 10^8?", options: ["It's validated in two halves, collapsing to ~11,000 guesses", "It's only 2 digits", "It's printed publicly", "It uses WEP"], correctIndex: 0, explanation: "The split-validation flaw shrinks the keyspace." },
        { id: "wifi-03-q5", type: "WPS", challenge: "Pixie dust.", text: "What does the Pixie Dust attack exploit?", options: ["Weak nonce generation to recover the WPS PIN offline in seconds", "A cracked AES key", "A captive portal", "DNS cache"], correctIndex: 0, explanation: "Weak E-S1/E-S2 nonces enable offline PIN recovery." },
        { id: "wifi-03-q6", type: "Impact", challenge: "WPS payoff.", text: "What does a recovered WPS PIN give you?", options: ["The WPA2 passphrase directly", "Only the SSID", "Admin on the client", "Nothing useful"], correctIndex: 0, explanation: "The PIN yields the PSK." },
        { id: "wifi-03-q7", type: "Defense", challenge: "Best single step.", text: "What's the single best hardening step here?", options: ["Disable WPS entirely", "Hide the SSID", "Use channel 11", "Shorten the password"], correctIndex: 0, explanation: "WPS rarely has value and is a big risk." },
        { id: "wifi-03-q8", type: "Defense", challenge: "Protocol fix.", text: "Why does WPA3-SAE blunt the PMKID attack?", options: ["It doesn't expose a crackable PMKID and resists offline guessing", "It hides the AP", "It's faster", "It uses WPS by default"], correctIndex: 0, explanation: "SAE removes the offline-crackable artifact." },
      ],
    },
    ctf: {
      attackerMachine: { ip: "10.10.30.50", hostname: "kali-wifi", os: "Kali Linux (hcxdumptool / reaver)" },
      targetMachine: ap("emits a PMKID on association AND has WPS enabled with weak nonces"),
      scenario: "CORP-WIFI has no clients connected right now. Grab a PMKID directly from the AP (clientless) and crack it offline — no victim, no deauth required.",
      hint: "Request association to capture the PMKID, then crack it offline with hashcat.",
      hints: [
        "Read the briefing. Run: cat briefing.txt",
        "Grab the PMKID from the AP (clientless). Run: pmkid-capture",
        "Crack the PMKID offline. Run: crack-pmkid",
        "Run 'assemble' to view the assembled flag and the submit command",
      ],
      fragments: [
        { trigger: "/briefing.txt", value: "FLAG{PMK1D_", label: "PMKID Briefing" },
        { trigger: "pmkid-capture", value: "CL13NTL3SS_", label: "PMKID Captured" },
        { trigger: "crack-pmkid", value: "R04ST3D}", label: "PSK Recovered" },
      ],
      files: {
        "/briefing.txt": [
          "RANGE — WIRELESS LAB 3: PMKID (clientless; CORP-WIFI has no clients)",
          "Goal: grab a PMKID from the AP, crack it offline.",
          "Sequence: pmkid-capture -> crack-pmkid -> assemble",
        ].join("\n"),
      },
      dirs: { "/": [{ name: "briefing.txt", isDir: false }] },
      extraCommands: {
        "pmkid-capture": (_args: string[]) => ({
          lines: [
            "$ hcxdumptool -i wlan0mon --enable_status=1 -o corp.pcapng",
            "  [+] requesting association to AA:BB:CC:11:22:33 ...",
            "  [+] PMKID received from AP (NO client connected!)",
            "$ hcxpcapngtool -o hash.22000 corp.pcapng   -> 1 hash written",
            "",
            ">> LEARN: the AP volunteered a PSK-derived value to anyone who asked",
            ">> BLUE TEAM: WPA3-SAE exposes no crackable PMKID. Fragment collected.",
          ],
        }),
        "crack-pmkid": (_args: string[]) => ({
          lines: [
            "$ hashcat -m 22000 hash.22000 rockyou.txt",
            "  ...:Summer2024!     <-- CRACKED",
            "  -> CORP-WIFI PSK recovered with zero connected clients",
            "  (WPS was also open: reaver -K -> pixie-dust PIN 12345670 -> same PSK)",
            "",
            ">> LEARN: clientless capture made this a quiet, one-sided attack",
            ">> BLUE TEAM: disable WPS; long random passphrase; WPA3; patch firmware.",
            "   Run 'assemble' to view the flag and the submit command.",
          ],
        }),
      },
    },
  },

  // ─── Lab 4: WPA2-Enterprise EAP + the defense ───────────────────────────────
  {
    epochId: "range-wireless",
    wonder: { name: "The Enterprise SSID", location: "Authorized Wireless Assessment", era: "Present Day", emoji: "🛡️" },
    id: "wifi-04",
    order: 4,
    title: "WPA2-Enterprise EAP & Wireless Defense",
    subtitle: "Steal the MSCHAPv2 challenge — then lock the air down",
    category: "cybersecurity",
    xp: 250,
    badge: { id: "badge-wifi-enterprise", name: "Air Defender", emoji: "🛡️" },
    challengeType: "ctf",
    info: {
      tagline: "Enterprise Wi-Fi removes the shared password — but if clients don't validate the server certificate, an evil twin steals their domain credentials anyway.",
      year: 2013,
      overview: [
        "WPA2-Enterprise (802.1X) is the right answer to everything in the previous labs: instead of one shared passphrase, every user authenticates individually to a RADIUS server, typically with their domain username and password over an EAP method like PEAP-MSCHAPv2. There is no PSK to capture or crack. But it introduces a new requirement that's frequently misconfigured: the client must validate the RADIUS server's certificate before sending credentials. When that validation is off (or the user is allowed to click 'trust' on an unknown cert), an attacker stands up a rogue Enterprise AP with the same SSID and a fake RADIUS server (eaphammer/hostapd-wpe), the victim's device connects and offers up the PEAP-MSCHAPv2 exchange, and the attacker captures the MSCHAPv2 challenge/response — which is crackable offline to recover the user's actual domain password. The evil twin returns, but now the prize is enterprise credentials.",
        "This closes the wireless arc and ties it to the rest of the Range: a stolen domain password feeds straight into the Active Directory and Password epochs — spray it, roast with it, BloodHound from it. The defenses are specific and they make Enterprise Wi-Fi genuinely strong: enforce server-certificate validation on every client (via GPO/MDM) and pin the expected RADIUS CA so a rogue server is rejected outright; prefer certificate-based EAP-TLS (no password to phish at all) over PEAP-MSCHAPv2; deploy WPA3-Enterprise; enable 802.11w to stop the deauth; run WIPS to catch rogue SSIDs; and segment/monitor the wireless network. Done correctly, 802.1X with EAP-TLS and validated certificates defeats handshake cracking, PMKID, WPS, and evil twins at once — which is the synthesis this epoch builds toward: every wireless attack you learned maps to a control, and configured properly, the air is defensible.",
      ],
      technical: {
        title: "EAP Credential Theft → Wireless Hardening",
        body: [
          "The attack (when cert validation is off):\n- eaphammer / hostapd-wpe — rogue WPA2-Enterprise AP + fake RADIUS, same SSID.\n- Victim connects, offers PEAP-MSCHAPv2 → you capture the challenge/response.\n- Crack offline (asleap / hashcat -m 5500) → the user's real DOMAIN password.\n- That credential pivots to AD: spray / Kerberoast / BloodHound (prior epochs).",
          "Why it works:\n- Enterprise removes the PSK — but requires clients to VALIDATE the RADIUS server cert.\n- Misconfigured clients (no validation / user can 'trust' a cert) connect to the rogue.\n- The evil twin returns, now harvesting enterprise creds, not a PSK.",
          "The synthesis defense (locks down the whole epoch):\n- Enforce server-cert validation on every client (GPO/MDM) + pin the RADIUS CA.\n- Prefer EAP-TLS (client certs — nothing to phish) over PEAP-MSCHAPv2.\n- WPA3-Enterprise; 802.11w (PMF); WIPS rogue-AP detection; segment + monitor.\n- Done right, 802.1X + EAP-TLS defeats handshake/PMKID/WPS/evil-twin at once.",
        ],
        codeExample: {
          label: "Rogue RADIUS → steal + crack the domain cred",
          code: `# Rogue Enterprise AP + fake RADIUS, same SSID (CORP-SECURE)
$ eaphammer --interface wlan0 --essid CORP-SECURE --creds
  [+] victim connected; PEAP-MSCHAPv2 challenge/response captured:
      bob::CORP:1122..:aabb..:ccdd..

# Crack the MSCHAPv2 offline -> the real domain password
$ hashcat -m 5500 bob.hash rockyou.txt   ->  bob:Summer2024!
  [!] now: spray / Kerberoast / BloodHound into the domain

# THE FIX: enforce server-cert validation + EAP-TLS; WPA3-Ent; 802.11w; WIPS`,
        },
      },
      incident: {
        title: "Enterprise Wi-Fi — Right Idea, Missing Cert Check",
        when: "hostapd-wpe (2013) / eaphammer popularized EAP credential theft",
        where: "Corporate WPA2-Enterprise networks with lax client cert validation",
        impact: "Domain credentials harvested over the air, then pivoted into Active Directory",
        body: [
          "WPA2-Enterprise is the correct architecture — per-user 802.1X authentication with no shared password — but it shifts the critical control onto the client: validating the RADIUS server's certificate before handing over credentials. When organizations skip that step (or let users click through unknown-cert prompts), a rogue Enterprise AP with a fake RADIUS server captures the PEAP-MSCHAPv2 exchange and an attacker cracks it into the user's real domain password, which then feeds the Active Directory and Password attacks from earlier epochs.",
          "Configured correctly, though, Enterprise Wi-Fi is the answer to the whole epoch: enforced server-certificate validation rejects the rogue, EAP-TLS removes the phishable password entirely, WPA3-Enterprise and 802.11w harden the rest, and WIPS catches the twin. This is the synthesis the Wireless epoch builds toward — every attack across these four labs (handshake cracking, evil twins, PMKID/WPS, EAP theft) maps to a concrete control, and a properly configured 802.1X/EAP-TLS deployment defeats all of them at once. Learn the attacks to earn the architecture.",
        ],
      },
      diagram: {
        nodes: [
          { label: "Rogue Enterprise AP", sub: "fake RADIUS, same SSID", type: "attacker" },
          { label: "No client cert validation", sub: "the misconfiguration", type: "system" },
          { label: "Capture PEAP-MSCHAPv2", sub: "crack → domain password", type: "victim" },
          { label: "AD pivot / or → defense", sub: "→ fix: cert validation + EAP-TLS", type: "result" },
        ],
      },
      timeline: [
        { year: 2013, event: "hostapd-wpe — rogue RADIUS EAP credential capture", highlight: true },
        { year: 2017, event: "eaphammer streamlines Enterprise evil-twin attacks" },
        { year: 2019, event: "WPA3-Enterprise + enforced cert validation guidance" },
      ],
      keyTakeaways: [
        "WPA2-Enterprise (802.1X) removes the shared PSK — every user authenticates to RADIUS",
        "If clients don't validate the RADIUS server certificate, a rogue AP captures PEAP-MSCHAPv2 creds",
        "The challenge/response cracks offline to the user's real domain password (asleap / hashcat -m 5500)",
        "That credential pivots straight into the Active Directory and Password epochs",
        "Fix (synthesis): enforce cert validation + pin the CA, prefer EAP-TLS, WPA3-Enterprise, 802.11w, WIPS",
      ],
      references: [
        { title: "eaphammer — Enterprise Wi-Fi attacks", url: "https://github.com/s0lst1c3/eaphammer" },
        { title: "Microsoft — 802.1X server-cert validation hardening", url: "https://learn.microsoft.com/en-us/windows-server/networking/technologies/extensible-authentication-protocol/network-access" },
      ],
    },
    quiz: {
      questions: [
        { id: "wifi-04-q1", type: "Concept", challenge: "What it changes.", text: "What does WPA2-Enterprise (802.1X) remove?", options: ["The single shared passphrase — each user authenticates individually to RADIUS", "All encryption", "The need for an AP", "DNS"], correctIndex: 0, explanation: "Per-user auth replaces the PSK." },
        { id: "wifi-04-q2", type: "Critical Control", challenge: "The new requirement.", text: "What must the client do for Enterprise Wi-Fi to be safe?", options: ["Validate the RADIUS server's certificate before sending credentials", "Hide its MAC", "Use channel 6", "Broadcast its SSID"], correctIndex: 0, explanation: "Cert validation rejects rogue RADIUS servers." },
        { id: "wifi-04-q3", type: "Attack", challenge: "Rogue RADIUS.", text: "What does a rogue Enterprise AP capture when cert validation is off?", options: ["The PEAP-MSCHAPv2 challenge/response", "The AES key", "The SSID only", "Nothing"], correctIndex: 0, explanation: "It harvests the EAP exchange." },
        { id: "wifi-04-q4", type: "Crack", challenge: "Offline.", text: "What does cracking the captured MSCHAPv2 yield?", options: ["The user's real domain password", "The SSID", "A WPS PIN", "The AP firmware"], correctIndex: 0, explanation: "asleap / hashcat -m 5500 recovers the password." },
        { id: "wifi-04-q5", type: "Pivot", challenge: "Chain it.", text: "Where does a stolen domain password go next?", options: ["Into the AD/Password attacks — spray, Kerberoast, BloodHound", "Nowhere", "Only the printer", "The captive portal"], correctIndex: 0, explanation: "Wireless feeds the domain attack chain." },
        { id: "wifi-04-q6", type: "Defense", challenge: "No password.", text: "Which EAP method removes the phishable password entirely?", options: ["EAP-TLS (client certificates)", "PEAP-MSCHAPv2", "Open auth", "WEP"], correctIndex: 0, explanation: "EAP-TLS uses certs, not a password." },
        { id: "wifi-04-q7", type: "Defense", challenge: "Enforce it.", text: "How do you stop the rogue-RADIUS attack at scale?", options: ["Enforce server-cert validation + pin the RADIUS CA via GPO/MDM", "Tell users to be careful only", "Use a longer SSID", "Disable encryption"], correctIndex: 0, explanation: "Enforced validation + CA pinning rejects the rogue." },
        { id: "wifi-04-q8", type: "Synthesis", challenge: "The big picture.", text: "What does a correct 802.1X/EAP-TLS deployment defeat?", options: ["Handshake cracking, PMKID, WPS, and evil twins — all at once", "Only WPS", "Only PMKID", "Nothing"], correctIndex: 0, explanation: "Done right, it closes the whole epoch's attack surface." },
      ],
    },
    ctf: {
      attackerMachine: { ip: "10.10.30.50", hostname: "kali-wifi", os: "Kali Linux (eaphammer / hostapd-wpe)" },
      targetMachine: ap("WPA2-Enterprise SSID 'CORP-SECURE' where clients don't validate the RADIUS cert"),
      scenario: "CORP-SECURE is WPA2-Enterprise — no PSK to crack. But clients don't validate the RADIUS certificate. Stand up a rogue Enterprise AP, capture a user's PEAP-MSCHAPv2 exchange, and crack it to their domain password.",
      hint: "Raise a rogue Enterprise AP with a fake RADIUS server, capture the EAP creds, then crack offline.",
      hints: [
        "Read the briefing. Run: cat briefing.txt",
        "Raise the rogue Enterprise AP + fake RADIUS. Run: rogue-radius",
        "Crack the captured MSCHAPv2 to a domain password. Run: crack-eap",
        "Run 'assemble' to view the assembled flag and the submit command",
      ],
      fragments: [
        { trigger: "/briefing.txt", value: "FLAG{3NT3RPR1S3_", label: "Enterprise Briefing" },
        { trigger: "rogue-radius", value: "3AP_", label: "EAP Credentials Captured" },
        { trigger: "crack-eap", value: "WP43_S4F3}", label: "Domain Password Cracked" },
      ],
      files: {
        "/briefing.txt": [
          "RANGE — WIRELESS LAB 4: WPA2-ENTERPRISE (CORP-SECURE, no cert validation)",
          "Goal: rogue RADIUS -> capture PEAP-MSCHAPv2 -> crack the domain password.",
          "Sequence: rogue-radius -> crack-eap -> assemble",
        ].join("\n"),
      },
      dirs: { "/": [{ name: "briefing.txt", isDir: false }] },
      extraCommands: {
        "rogue-radius": (_args: string[]) => ({
          lines: [
            "$ eaphammer --interface wlan0 --essid CORP-SECURE --creds",
            "  [+] rogue WPA2-Enterprise AP + fake RADIUS up (same SSID)",
            "  [+] victim 'bob' connected (his client did NOT validate the cert)",
            "  [+] PEAP-MSCHAPv2 captured: bob::CORP:1122..:aabb..:ccdd..",
            "",
            ">> LEARN: Enterprise has no PSK — but a missing cert check leaks domain creds",
            ">> BLUE TEAM: enforce server-cert validation; EAP-TLS. Fragment collected.",
          ],
        }),
        "crack-eap": (_args: string[]) => ({
          lines: [
            "$ hashcat -m 5500 bob.hash rockyou.txt",
            "  bob::CORP:...:Summer2024!     <-- CRACKED",
            "  -> bob's REAL domain password = Summer2024!",
            "  [!] pivot: password-spray / Kerberoast / BloodHound into CORP.LOCAL",
            "",
            ">> LEARN: wireless fed straight into the AD attack chain",
            ">> BLUE TEAM: enforced cert validation + EAP-TLS defeats handshake/PMKID/WPS/twin AT ONCE.",
            "   Run 'assemble' to view the flag and the submit command.",
          ],
        }),
      },
    },
  },
];
