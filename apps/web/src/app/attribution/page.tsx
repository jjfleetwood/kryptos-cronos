import Link from "next/link";

const ATTRIBUTIONS = [
  {
    name: "MITRE ATT&CK®",
    owner: "The MITRE Corporation",
    license: "CC BY 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by/4.0/",
    sourceUrl: "https://attack.mitre.org/",
    description:
      "The MITRE ATT&CK® epoch uses the ATT&CK® knowledge base as a framework for its tactic and technique curriculum. MITRE ATT&CK® is a registered trademark of The MITRE Corporation.",
    modules: ["MITRE ATT&CK epoch", "First Journey — stages referencing ATT&CK techniques"],
  },
  {
    name: "MITRE ATLAS™",
    owner: "The MITRE Corporation",
    license: "CC BY 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by/4.0/",
    sourceUrl: "https://atlas.mitre.org/",
    description:
      "The MITRE ATLAS™ epoch is based on the ATLAS knowledge base for adversarial machine learning threats. MITRE ATLAS™ is a trademark of The MITRE Corporation.",
    modules: ["MITRE ATLAS epoch"],
  },
  {
    name: "OWASP LLM Top 10",
    owner: "OWASP Foundation, Inc.",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
    sourceUrl: "https://owasp.org/www-project-top-10-for-large-language-model-applications/",
    description:
      "The OWASP LLM epoch is adapted from the OWASP Top 10 for Large Language Model Applications. OWASP® is a registered trademark of the OWASP Foundation, Inc.",
    modules: ["OWASP LLM Top 10 epoch", "Tech Audit modules referencing OWASP guidance"],
  },
  {
    name: "CVE® / National Vulnerability Database",
    owner: "The MITRE Corporation / NIST",
    license: "Public — NVD Data Use Policy",
    licenseUrl: "https://nvd.nist.gov/general/nvd-data-use-policy",
    sourceUrl: "https://nvd.nist.gov/",
    description:
      "CVE missions reference publicly disclosed CVE identifiers and vulnerability descriptions from the National Vulnerability Database (NVD). CVE® is a registered trademark of The MITRE Corporation. NVD data is provided by NIST.",
    modules: ["CVE-based epochs"],
  },
  {
    name: "NIST / FIPS Standards",
    owner: "National Institute of Standards and Technology (U.S. Government)",
    license: "Public Domain",
    licenseUrl: "https://www.nist.gov/open",
    sourceUrl: "https://csrc.nist.gov/",
    description:
      "Quantum Era modules reference NIST post-quantum cryptography standards (FIPS 203, 204, 205) and NIST Special Publications (SP 800-137, 800-207, 800-30, 800-34, 800-53, 800-161). Tech Audit modules reference NIST SP 800-series control frameworks. NIST publications are works of the U.S. Government and are in the public domain.",
    modules: ["Quantum Era epochs (Quantum 1, 2, 3)", "Tech Audit epochs (1, 2, 4)"],
  },
  {
    name: "ISACA® / COBIT® 2019",
    owner: "ISACA",
    license: "Educational fair use — no verbatim reproduction",
    licenseUrl: "https://www.isaca.org/resources/cobit",
    sourceUrl: "https://www.isaca.org/",
    description:
      "Tech Audit modules reference ISACA® frameworks including COBIT® 2019 control objectives and the CISA® and CRISC® certification domains. ISACA®, COBIT®, CISA®, and CRISC® are registered trademarks of ISACA. No proprietary ISACA content is reproduced verbatim; references are descriptive and educational.",
    modules: ["Tech Audit 1"],
  },
  {
    name: "OWASP API Security Top 10 (2023)",
    owner: "OWASP Foundation, Inc.",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
    sourceUrl: "https://owasp.org/API-Security/",
    description:
      "Tech Audit 2 stages map directly to OWASP API Security Top 10 2023 categories including BOLA (API1), Broken Authentication (API2), and others. OWASP® is a registered trademark of the OWASP Foundation, Inc. Content is adapted for educational use under CC BY-SA 4.0. The ShareAlike clause applies to any redistribution of adapted OWASP content.",
    modules: ["Tech Audit 2"],
  },
  {
    name: "CIS Benchmarks™",
    owner: "Center for Internet Security, Inc.",
    license: "Educational fair use",
    licenseUrl: "https://www.cisecurity.org/cis-benchmarks/cis-benchmarks-faq/",
    sourceUrl: "https://www.cisecurity.org/",
    description:
      "Tech Audit modules reference CIS Benchmarks™ for Docker, Kubernetes, and AWS (CIS AWS Foundations Benchmark™). CIS Benchmarks™ are trademarks of the Center for Internet Security, Inc. References are descriptive and educational; no benchmark content is reproduced verbatim.",
    modules: ["Tech Audit 1", "Tech Audit 2", "Tech Audit 4"],
  },
  {
    name: "ITIL®",
    owner: "PeopleCert International Ltd.",
    license: "Educational fair use — trademark reference only",
    licenseUrl: "https://www.peoplecert.org/",
    sourceUrl: "https://www.axelos.com/certifications/itil-service-management/",
    description:
      "Tech Audit 1 references ITIL® v2 and v4 service management framework concepts. ITIL® is a registered trademark of PeopleCert International Ltd. References are descriptive and educational; no ITIL® content is reproduced verbatim.",
    modules: ["Tech Audit 1"],
  },
  {
    name: "PCI DSS®",
    owner: "PCI Security Standards Council, LLC",
    license: "Educational fair use — trademark reference only",
    licenseUrl: "https://www.pcisecuritystandards.org/",
    sourceUrl: "https://www.pcisecuritystandards.org/document_library/",
    description:
      "Tech Audit 1 references PCI DSS® (Payment Card Industry Data Security Standard) requirements. PCI DSS® is a registered trademark of PCI Security Standards Council, LLC. References are descriptive and educational; no PCI DSS® specification text is reproduced verbatim.",
    modules: ["Tech Audit 1"],
  },
  {
    name: "Claude™ / Model Context Protocol (MCP)",
    owner: "Anthropic PBC",
    license: "Anthropic public documentation",
    licenseUrl: "https://www.anthropic.com/legal/usage-policy",
    sourceUrl: "https://docs.anthropic.com/",
    description:
      "Tech Audit 3 stages are built around Claude™ tool-use workflows and Model Context Protocol (MCP) server integration patterns. Claude™ is a trademark of Anthropic PBC. MCP is an open protocol published by Anthropic. References are based on Anthropic's publicly available documentation. No proprietary Anthropic content is reproduced verbatim.",
    modules: ["Tech Audit 3"],
  },
  {
    name: "HashiCorp Vault®",
    owner: "HashiCorp, Inc.",
    license: "Educational fair use — trademark reference only",
    licenseUrl: "https://www.hashicorp.com/products/vault",
    sourceUrl: "https://www.vaultproject.io/",
    description:
      "Tech Audit 3 references HashiCorp Vault® as a secrets management solution in the context of cloud security workflows. HashiCorp Vault® is a registered trademark of HashiCorp, Inc. References are descriptive and educational; no HashiCorp documentation is reproduced verbatim.",
    modules: ["Tech Audit 3"],
  },
  {
    name: "STIX™ / TAXII™ (OASIS Open Standards)",
    owner: "OASIS Open",
    license: "OASIS open standard",
    licenseUrl: "https://www.oasis-open.org/policies-guidelines/ipr/",
    sourceUrl: "https://oasis-open.github.io/cti-documentation/",
    description:
      "Tech Audit 4 references STIX™ 2.1 (Structured Threat Intelligence eXpression) and TAXII™ 2.1 (Trusted Automated eXchange of Intelligence Information) as threat intelligence sharing standards. STIX™ and TAXII™ are trademarks of OASIS Open. These are open standards freely available for implementation.",
    modules: ["Tech Audit 4"],
  },
  {
    name: "Wikimedia Commons imagery",
    owner: "Wikimedia Commons contributors",
    license: "Public domain / Creative Commons",
    licenseUrl: "https://commons.wikimedia.org/wiki/Commons:Licensing",
    sourceUrl: "https://commons.wikimedia.org/",
    description:
      "Illustrative photographs on stage briefing pages are sourced from Wikimedia Commons under their respective free licenses (public domain or Creative Commons) and self-hosted. The Debate & Speech track uses, among others, the Pnyx (Athens), and busts/portraits of Aristotle, Cicero, and Demosthenes; the House of Commons; the Bodleian Library; and anatomical illustration. Each file remains under the license stated on its Commons page.",
    modules: ["Debate & Speech track", "Stage briefing imagery"],
  },
];

// Per-file credits for the Our First Journey imagery (Wikimedia Commons; free licenses + public domain).
const FIRST_JOURNEY_IMAGE_CREDITS = [
  { stage: "bt-01", device: "Port of Piraeus, Athens", file: "Μαρίνα Ζέας 8017.JPG", author: "C messier", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/", url: "https://commons.wikimedia.org/wiki/File:%CE%9C%CE%B1%CF%81%CE%AF%CE%BD%CE%B1_%CE%96%CE%AD%CE%B1%CF%82_8017.JPG" },
  { stage: "bt-02", device: "Athens International Airport", file: "Letiste ateny dlouha chodba.jpg", author: "Křžut", license: "Public domain", licenseUrl: "https://commons.wikimedia.org/wiki/Commons:Public_domain", url: "https://commons.wikimedia.org/wiki/File:Letiste_ateny_dlouha_chodba.jpg" },
  { stage: "bt-03", device: "Airport baggage claim", file: "VHHH baggage claim area.jpg", author: "Base64", license: "CC BY-SA 3.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/", url: "https://commons.wikimedia.org/wiki/File:VHHH_baggage_claim_area.jpg" },
  { stage: "bt-04", device: "Highway overpass / interchange", file: "USNR SH-60F Seahawk on highway overpass.jpg", author: "U.S. Navy / PH1 Ken J. Riley", license: "Public domain", licenseUrl: "https://commons.wikimedia.org/wiki/Commons:Public_domain", url: "https://commons.wikimedia.org/wiki/File:USNR_SH-60F_Seahawk_on_highway_overpass.jpg" },
  { stage: "bt-07", device: "Santa Cruz coast (Cliff Drive)", file: "Cliff Drive, Santa Cruz, California, USA, c.1905.jpg", author: "Public domain", license: "Public domain", licenseUrl: "https://commons.wikimedia.org/wiki/Commons:Public_domain", url: "https://commons.wikimedia.org/wiki/File:Cliff_Drive,_Santa_Cruz,_California,_USA,_c.1905.jpg" },
  { stage: "bt-08", device: "Santa Cruz Harbor patrol boat", file: "Santa Cruz harbor patrol boat.jpg", author: "Chris", license: "CC BY-SA 2.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0/", url: "https://commons.wikimedia.org/wiki/File:Santa_Cruz_harbor_patrol_boat.jpg" },
  { stage: "bt-09", device: "Downtown Santa Cruz trolley", file: "Santa Cruz beach and boardwalk downtown shuttle trolley.jpg", author: "Runner1928", license: "CC BY-SA 3.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/", url: "https://commons.wikimedia.org/wiki/File:Santa_Cruz_beach_and_boardwalk_downtown_shuttle_trolley.jpg" },
  { stage: "bt-10", device: "Bixby Creek Bridge, Highway 1", file: "Bixby Creek Bridge, California, USA - May 2013.jpg", author: "Diliff", license: "CC BY-SA 3.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/", url: "https://commons.wikimedia.org/wiki/File:Bixby_Creek_Bridge,_California,_USA_-_May_2013.jpg" },
  { stage: "bt-11", device: "Surfer, Santa Cruz", file: "Jbodyglove2.jpg", author: "David Dennis from Scotts Valley, CA, USA", license: "CC BY 2.0", licenseUrl: "https://creativecommons.org/licenses/by/2.0/", url: "https://commons.wikimedia.org/wiki/File:Jbodyglove2.jpg" },
  { stage: "bt-12", device: "Surfboards at a surf shop", file: "Surfboards, Newquay - geograph.org.uk - 1758827.jpg", author: "Derek Harper", license: "CC BY-SA 2.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0/", url: "https://commons.wikimedia.org/wiki/File:Surfboards,_Newquay_-_geograph.org.uk_-_1758827.jpg" },
  { stage: "bt-13", device: "Surf lesson", file: "Surfing lesson, Essaouira, Morocco.jpg", author: "Goldfinchshuffle", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/", url: "https://commons.wikimedia.org/wiki/File:Surfing_lesson,_Essaouira,_Morocco.jpg" },
  { stage: "bt-14", device: "Lifeguard tower", file: "Venice Beach Lifeguard Tower.JPG", author: "Adrian104", license: "Public domain", licenseUrl: "https://commons.wikimedia.org/wiki/Commons:Public_domain", url: "https://commons.wikimedia.org/wiki/File:Venice_Beach_Lifeguard_Tower.JPG" },
  { stage: "bt-15", device: "Surfer, California", file: "Surfer Newport Beach California.jpg", author: "Travis from Fullerton, CA, USA", license: "CC BY 2.0", licenseUrl: "https://creativecommons.org/licenses/by/2.0/", url: "https://commons.wikimedia.org/wiki/File:Surfer_Newport_Beach_California.jpg" },
  { stage: "bt-17", device: "Pleasure Point, Santa Cruz", file: "Pleasure Point in Santa Cruz CA. - panoramio.jpg", author: "Noah_Loverbear", license: "CC BY-SA 3.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/", url: "https://commons.wikimedia.org/wiki/File:Pleasure_Point_in_Santa_Cruz_CA._-_panoramio.jpg" },
  { stage: "bt-18", device: "Santa Cruz Beach Boardwalk", file: "SantaCruz BeachBoardwalk DipperEntrance DSCN9359.JPG", author: "Larry Pieniazek (User:Lar)", license: "CC BY 2.5", licenseUrl: "https://creativecommons.org/licenses/by/2.5/", url: "https://commons.wikimedia.org/wiki/File:SantaCruz_BeachBoardwalk_DipperEntrance_DSCN9359.JPG" },
  { stage: "bt-19", device: "Surf boat through the break", file: "SurfBoatGoingTroughBreak.jpg", author: "Klaus-Dieter Liss", license: "CC BY-SA 3.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/", url: "https://commons.wikimedia.org/wiki/File:SurfBoatGoingTroughBreak.jpg" },
  { stage: "bt-20", device: "California coast at sunset", file: "A New Day (199459553).jpeg", author: "Cayetano Gil", license: "CC BY 3.0", licenseUrl: "https://creativecommons.org/licenses/by/3.0/", url: "https://commons.wikimedia.org/wiki/File:A_New_Day_(199459553).jpeg" },
  { stage: "bt-21", device: "Fisherman’s Wharf, Monterey", file: "Fisherman's Wharf in Monterey from harbour.jpg", author: "Davric", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/", url: "https://commons.wikimedia.org/wiki/File:Fisherman%27s_Wharf_in_Monterey_from_harbour.jpg" },
  { stage: "bt-23", device: "Cannery Row, Monterey", file: "Cannery Row at night.jpg", author: "Amadscientist (Mark Miller)", license: "CC BY 3.0", licenseUrl: "https://creativecommons.org/licenses/by/3.0/", url: "https://commons.wikimedia.org/wiki/File:Cannery_Row_at_night.jpg" },
  { stage: "bt-24", device: "Sea otter, Monterey Bay", file: "Sea Otter, Monterey Bay Aquarium.jpg", author: "Jim G from Silicon Valley, CA, USA", license: "CC BY 2.0", licenseUrl: "https://creativecommons.org/licenses/by/2.0/", url: "https://commons.wikimedia.org/wiki/File:DSC28161,_Sea_Otter,_Monterey_Bay_Aquarium,_Monterey,_California,_USA_(5738293869).jpg" },
  { stage: "bt-26", device: "Boatyard (yacht cradle)", file: "Yacht Cradle.jpg", author: "APoMDI", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/", url: "https://commons.wikimedia.org/wiki/File:Yacht_Cradle.jpg" },
  { stage: "bt-27", device: "Moss Landing harbor (aerial)", file: "Moss Landing California aerial view.jpg", author: "U.S. Army Corps of Engineers", license: "Public domain", licenseUrl: "https://commons.wikimedia.org/wiki/Commons:Public_domain", url: "https://commons.wikimedia.org/wiki/File:Moss_Landing_California_aerial_view.jpg" },
  { stage: "bt-28", device: "Kelp forest, Monterey Bay", file: "Diver in kelp tank at Monterey Bay Aquarium.jpg", author: "Fred Hsu", license: "CC BY-SA 3.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/", url: "https://commons.wikimedia.org/wiki/File:Diver_in_kelp_tank_at_Monterey_Bay_Aquarium.jpg" },
  { stage: "bt-29", device: "Santa Cruz Harbor", file: "Santa Cruz Harbor - Flickr - Don Fulano.jpg", author: "Mike Fernwood, Santa Cruz, CA", license: "CC BY-SA 2.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0/", url: "https://commons.wikimedia.org/wiki/File:Santa_Cruz_Harbor_-_Flickr_-_Don_Fulano.jpg" },
];

// Per-file credits for the Foundations (ancient) imagery — wonders of the ancient
// world (Commons photos + public-domain engravings for the destroyed wonders).
const ANCIENT_IMAGE_CREDITS = [
  { stage: "stage-01", device: "Great Pyramid & Sphinx, Giza", file: "Egypt.Giza.Sphinx.01.jpg", author: "User:Hajor", license: "CC BY-SA 3.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/", url: "https://commons.wikimedia.org/wiki/File:Egypt.Giza.Sphinx.01.jpg" },
  { stage: "stage-02", device: "Temple of Apollo, Delphi", file: "Delphi BW 2017-10-08 11-38-38.jpg", author: "Berthold Werner", license: "CC BY-SA 3.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/", url: "https://commons.wikimedia.org/wiki/File:Delphi_BW_2017-10-08_11-38-38.jpg" },
  { stage: "stage-03", device: "Bibliotheca Alexandrina", file: "Bibliotheca Alexandrina -- Wall detail.jpg", author: "Cary Bass", license: "CC BY-SA 3.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/", url: "https://commons.wikimedia.org/wiki/File:Bibliotheca_Alexandrina_--_Wall_detail.jpg" },
  { stage: "stage-04", device: "Parthenon, Acropolis of Athens", file: "Parthenon - facade ouest.jpg", author: "Eusebius", license: "CC BY 3.0", licenseUrl: "https://creativecommons.org/licenses/by/3.0/", url: "https://commons.wikimedia.org/wiki/File:Parthenon_-_facade_ouest.jpg" },
  { stage: "stage-05", device: "Lighthouse of Alexandria (reconstruction)", file: "Lighthouse of Alexandria in Changsha.jpg", author: "Unknown", license: "Public domain", licenseUrl: "https://commons.wikimedia.org/wiki/Commons:Public_domain", url: "https://commons.wikimedia.org/wiki/File:Lighthouse_of_Alexandria_in_Changsha.jpg" },
  { stage: "stage-06", device: "Colossus of Rhodes (engraving)", file: "Colossus of Rhodes.jpg", author: "Maarten van Heemskerck / Philip Galle", license: "Public domain", licenseUrl: "https://commons.wikimedia.org/wiki/Commons:Public_domain", url: "https://commons.wikimedia.org/wiki/File:Colossus_of_Rhodes.jpg" },
  { stage: "stage-07", device: "Hanging Gardens of Babylon (depiction)", file: "Hanging Gardens of Babylon.jpg", author: "Unknown", license: "Public domain", licenseUrl: "https://commons.wikimedia.org/wiki/Commons:Public_domain", url: "https://commons.wikimedia.org/wiki/File:Hanging_Gardens_of_Babylon.jpg" },
  { stage: "stage-08", device: "Temple of Artemis, Ephesus", file: "Ephesus, ruins of the Temple of Artemis.jpg", author: "Dguendel", license: "CC BY 3.0", licenseUrl: "https://creativecommons.org/licenses/by/3.0/", url: "https://commons.wikimedia.org/wiki/File:Ephesus,_ruins_of_the_Temple_of_Artemis.jpg" },
  { stage: "stage-09", device: "Stonehenge", file: "Stonehenge2007 07 30.jpg", author: "garethwiscombe", license: "CC BY 2.0", licenseUrl: "https://creativecommons.org/licenses/by/2.0/", url: "https://commons.wikimedia.org/wiki/File:Stonehenge2007_07_30.jpg" },
  { stage: "stage-10", device: "Colosseum, Rome", file: "Colosseum in Rome, Italy - April 2007.jpg", author: "Diliff", license: "CC BY-SA 2.5", licenseUrl: "https://creativecommons.org/licenses/by-sa/2.5/", url: "https://commons.wikimedia.org/wiki/File:Colosseum_in_Rome,_Italy_-_April_2007.jpg" },
  { stage: "stage-11", device: "Mausoleum at Halicarnassus", file: "Mausoleum of Halicarnassus 2009.jpg", author: "Dorushiva", license: "CC BY-SA 3.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/", url: "https://commons.wikimedia.org/wiki/File:Mausoleum_of_Halicarnassus_2009.jpg" },
  { stage: "stage-12", device: "Temple of Zeus, Olympia", file: "Olympia ruins near the Temple of Zeus.jpg", author: "Wknight94", license: "CC BY-SA 3.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/", url: "https://commons.wikimedia.org/wiki/File:Olympia_ruins_near_the_Temple_of_Zeus.jpg" },
];


// Per-file credits for the Race Through Space imagery (Wikimedia Commons; NASA/
// NOAA public domain + Creative Commons). PD images credited as good practice.
const SPACE_IMAGE_CREDITS = [
  { stage: "01", device: "International Space Station", file: "ISS after STS-132 undocking.jpg", author: "NASA / Crew of STS-132", license: "Public domain", licenseUrl: "https://commons.wikimedia.org/wiki/Commons:Public_domain", url: "https://commons.wikimedia.org/wiki/File:International_Space_Station_after_undocking_of_STS-132.jpg" },
  { stage: "02", device: "TIROS satellite ground antenna", file: "TIROS antenna Spac0212.jpg", author: "NOAA Photo Library", license: "Public domain", licenseUrl: "https://commons.wikimedia.org/wiki/Commons:Public_domain", url: "https://commons.wikimedia.org/wiki/File:TIROS_antenna_Spac0212.jpg" },
  { stage: "03", device: "GPS satellite (NASA art)", file: "GPS Satellite NASA art-iif.jpg", author: "NASA", license: "Public domain", licenseUrl: "https://commons.wikimedia.org/wiki/Commons:Public_domain", url: "https://commons.wikimedia.org/wiki/File:GPS_Satellite_NASA_art-iif.jpg" },
  { stage: "04", device: "Deep Space Network antenna", file: "NASA Deep Space Antenna (Voyager).jpg", author: "NASA / CDSCC", license: "Public domain", licenseUrl: "https://commons.wikimedia.org/wiki/Commons:Public_domain", url: "https://commons.wikimedia.org/wiki/File:NASA%27s_Deep_Space_Antenna_Upgrade_to_Affect_Voyager.jpg" },
  { stage: "05", device: "Radio antenna (Cité de l'espace)", file: "Radio antenna, Cite de l'espace.jpg", author: "Mike Peel", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/", url: "https://commons.wikimedia.org/wiki/File:Radio_antenna,_Cite_de_l%27espace.jpg" },
  { stage: "06", device: "ATS-3 VHF ground-station antenna", file: "ATS-3 Satellite VHF Ground Station Antenna.jpg", author: "Gregory Back (ampledata)", license: "CC BY-SA 2.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0/", url: "https://commons.wikimedia.org/wiki/File:ATS-3_Satellite_VHF_Ground_Station_Antenna.jpg" },
  { stage: "07", device: "CubeSat", file: "CubeSat in hand.jpg", author: "Svobodat", license: "CC BY-SA 3.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/", url: "https://commons.wikimedia.org/wiki/File:CubeSat_in_hand.jpg" },
  { stage: "08", device: "Starlink satellites in orbit", file: "Starlink Mission.jpg", author: "Official SpaceX Photos", license: "CC0", licenseUrl: "https://creativecommons.org/publicdomain/zero/1.0/", url: "https://commons.wikimedia.org/wiki/File:Starlink_Mission_(47926144123).jpg" },
  { stage: "09", device: "Orbital debris (GEO)", file: "Debris-GEO1280.jpg", author: "NASA", license: "Public domain", licenseUrl: "https://commons.wikimedia.org/wiki/Commons:Public_domain", url: "https://commons.wikimedia.org/wiki/File:Debris-GEO1280.jpg" },
  { stage: "10", device: "Soyuz launch", file: "Soyuz TMA-5 launch.jpg", author: "NASA / Bill Ingalls", license: "Public domain", licenseUrl: "https://commons.wikimedia.org/wiki/Commons:Public_domain", url: "https://commons.wikimedia.org/wiki/File:Soyuz_TMA-5_launch.jpg" },
];

// Per-file credits for the Wired & Autonomous (vehicle) imagery (Wikimedia Commons, free licenses).
const VEHICLE_IMAGE_CREDITS = [
  { stage: "01", device: "Vehicle cockpit / instrumentation", file: "Nissan GTP ZX-Turbo cockpit.JPG", author: "The359", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/", url: "https://commons.wikimedia.org/wiki/File:Nissan_GTP_ZX-Turbo_cockpit.JPG" },
  { stage: "02", device: "OBD-II / CAN connector", file: "OBD-USB connector.JPG", author: "Snewkirk7953", license: "CC BY-SA 3.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/", url: "https://commons.wikimedia.org/wiki/File:OBD-USB_connector.JPG" },
  { stage: "03", device: "OBD2 diagnostic scanner", file: "Veepeak obd2 scanner tool.jpg", author: "hinoew", license: "CC0", licenseUrl: "https://creativecommons.org/publicdomain/zero/1.0/", url: "https://commons.wikimedia.org/wiki/File:Veepeak_obd2_scanner_tool.jpg" },
  { stage: "04", device: "Car key fob", file: "Car Keys.jpg", author: "Mpelletier1", license: "CC BY-SA 3.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/", url: "https://commons.wikimedia.org/wiki/File:Car_Keys.jpg" },
  { stage: "05", device: "EV charging station", file: "Car2Go Charging Station Stuttgart.jpg", author: "Julian Herzog", license: "CC BY 4.0", licenseUrl: "https://creativecommons.org/licenses/by/4.0/", url: "https://commons.wikimedia.org/wiki/File:Car2Go_Charging_Station_Stuttgart_2013_01.jpg" },
  { stage: "06", device: "Nissan Leaf (EV / battery)", file: "Nissan Leaf 012.JPG", author: "Tennen-Gas", license: "CC BY-SA 3.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/", url: "https://commons.wikimedia.org/wiki/File:Nissan_Leaf_012.JPG" },
  { stage: "07", device: "Car infotainment / head unit", file: "Lamborghini Infotainment.jpg", author: "Tabascogiuseppe1960", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/", url: "https://commons.wikimedia.org/wiki/File:Lamborghini_Infotainment_.jpg" },
  { stage: "08", device: "Autonomous car LiDAR sensor", file: "Uber car with lidar.jpg", author: "Timtempleton", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/", url: "https://commons.wikimedia.org/wiki/File:Uber_car_with_lidar.jpg" },
  { stage: "09", device: "Tesla digital panels (OTA)", file: "Tesla Model S digital panels.jpg", author: "Steve Jurvetson", license: "CC BY 2.0", licenseUrl: "https://creativecommons.org/licenses/by/2.0/", url: "https://commons.wikimedia.org/wiki/File:Tesla_Model_S_digital_panels.jpg" },
  { stage: "10", device: "Vehicle fleet (parking lot)", file: "UCC Cars in Parking Lot.jpg", author: "Tomwsulcer", license: "CC0", licenseUrl: "https://creativecommons.org/publicdomain/zero/1.0/", url: "https://commons.wikimedia.org/wiki/File:UCC_Cars_in_Parking_Lot.jpg" },
];

// Per-file credits for the Machines That Move (robotics) imagery (Wikimedia Commons, free licenses).
const ROBOT_IMAGE_CREDITS = [
  { stage: "01", device: "CHARLI humanoid robot", file: "Virginia Tech CHARLI humanoid.jpg", author: "Jiuguang Wang", license: "CC BY-SA 2.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0/", url: "https://commons.wikimedia.org/wiki/File:Virginia_Tech%27s_CHARLI_humanoid_robot_on_display_at_AAAI_2010.jpg" },
  { stage: "02", device: "Mobile robot (PatrolBot)", file: "Robot MobileRobotsPatrolBot.jpg", author: "Jdietsch", license: "CC BY-SA 3.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/", url: "https://commons.wikimedia.org/wiki/File:Robot_MobileRobotsPatrolBot.jpg" },
  { stage: "03", device: "Industrial robot arm", file: "Robotic Arm Polishing Guitars.jpg", author: "Henrysz", license: "CC BY 4.0", licenseUrl: "https://creativecommons.org/licenses/by/4.0/", url: "https://commons.wikimedia.org/wiki/File:Robotic_Arm_Polishing_Guitars_at_Martin_Guitar_Factory.jpg" },
  { stage: "04", device: "Quadcopter drone", file: "Remote controlled quadcopter.jpg", author: "Tomwsulcer", license: "CC0", licenseUrl: "https://creativecommons.org/publicdomain/zero/1.0/", url: "https://commons.wikimedia.org/wiki/File:Remote_controlled_flying_machine_with_four_helicopter_blades.jpg" },
  { stage: "05", device: "Teleoperated / proxy robotics", file: "Robotics and Proxy Robotics.JPG", author: "K Dean Stephens", license: "CC BY-SA 3.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/", url: "https://commons.wikimedia.org/wiki/File:Robotics_and_Proxy_Robotics.JPG" },
  { stage: "06", device: "FIDO rover camera/arm (NASA)", file: "FIDO Rover camera.jpg", author: "NASA", license: "Public domain", licenseUrl: "https://commons.wikimedia.org/wiki/Commons:Public_domain", url: "https://commons.wikimedia.org/wiki/File:FIDO_Rover_Retracted_Arm_and_Camera_-_GPN-2000-000515.jpg" },
  { stage: "07", device: "REEM-A humanoid robot", file: "REEM-A humanoid robot.jpg", author: "Facontidavide", license: "Public domain", licenseUrl: "https://commons.wikimedia.org/wiki/Commons:Public_domain", url: "https://commons.wikimedia.org/wiki/File:REEM-A_humanoid_robot.jpg" },
  { stage: "08", device: "Collaborative robot (cobot)", file: "Collaborative Robot Cobot.png", author: "Rlistmedia", license: "CC BY 4.0", licenseUrl: "https://creativecommons.org/licenses/by/4.0/", url: "https://commons.wikimedia.org/wiki/File:Collaborative_Robot_Cobot.png" },
  { stage: "09", device: "EOD transportable robot (US Navy)", file: "EOD Manned Transportable Robot.jpg", author: "U.S. Navy", license: "Public domain", licenseUrl: "https://commons.wikimedia.org/wiki/Commons:Public_domain", url: "https://commons.wikimedia.org/wiki/File:US_Navy_091024-N-4267W-034_Electronics_Technician_2nd_Class_Bruce_Hammon,_assigned_to_Explosive_Ordnance_Disposal_Expeditionary_Support_Unit_(EODESU)_2,_demonstrates_an_EOD_Manned_Transportable_Robot.jpg" },
  { stage: "10", device: "Air-Cobot collaborative robot", file: "Air-Cobot.jpg", author: "Stanislas Larnier", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/", url: "https://commons.wikimedia.org/wiki/File:RFIA2016_Air-Cobot_Jeremy_Frejaville.jpg" },
];

// Per-file credits for the Silicon: Sand to Superchips imagery (Wikimedia Commons, free licenses + public domain).
const SILICON_IMAGE_CREDITS = [
  { stage: "02", device: "Silicon wafer (die grid)", file: "Wafer 20110212.jpg", author: "Sangitiana Fararano", license: "CC BY-SA 2.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0/", url: "https://commons.wikimedia.org/wiki/File:Wafer_20110212.jpg" },
  { stage: "05", device: "Ion implantation machine", file: "Ion implantation machine at LAAS 0522.jpg", author: "Guillaume Paumier", license: "CC BY-SA 3.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/", url: "https://commons.wikimedia.org/wiki/File:Ion_implantation_machine_at_LAAS_0522.jpg" },
  { stage: "06", device: "Integrated-circuit die & bond wires", file: "D2316E die photo.jpg", author: "Mister rf", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/", url: "https://commons.wikimedia.org/wiki/File:D2316E_die_photo.jpg" },
  { stage: "07", device: "Microprocessor die (Motorola 68000)", file: "Motorola 68000 die.JPG", author: "Pauli Rautakorpi", license: "CC BY 3.0", licenseUrl: "https://creativecommons.org/licenses/by/3.0/", url: "https://commons.wikimedia.org/wiki/File:Motorola_68000_die.JPG" },
  { stage: "08", device: "Graphics card (GPU)", file: "ASUS NVIDIA GeForce 210 graphics card.JPG", author: "Joydeep", license: "CC BY-SA 3.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/", url: "https://commons.wikimedia.org/wiki/File:ASUS_NVIDIA_GeForce_210_silent_graphics_card_with_HDMI.JPG" },
  { stage: "09", device: "Semiconductor cleanroom", file: "Clean room.jpg", author: "Public domain (Wikimedia Commons)", license: "Public domain", licenseUrl: "https://commons.wikimedia.org/wiki/Commons:Public_domain", url: "https://commons.wikimedia.org/wiki/File:Clean_room.jpg" },
  { stage: "10", device: "Quantum processor (ion trap, NIST)", file: "Quantum Computing; Ion Trapping.jpg", author: "National Institute of Standards and Technology", license: "Public domain", licenseUrl: "https://commons.wikimedia.org/wiki/Commons:Public_domain", url: "https://commons.wikimedia.org/wiki/File:Quantum_Computing;_Ion_Trapping_(5941055642).jpg" },
];

// Per-file credits for the How Computers Really Work + Physics of Hacking imagery
// (Wikimedia Commons, free licenses + public domain). Self-hosted, credited below.
const COMPUTING_PHYSICS_CREDITS = [
  { stage: "cf-01", device: "Incandescent bulb filament", file: "cf-01.jpg", author: "Robert Wiedemann (antilumen)", license: "CC0", licenseUrl: "https://creativecommons.org/publicdomain/zero/1.0/", url: "https://commons.wikimedia.org/wiki/File:Falling_lamp_(Unsplash).jpg" },
  { stage: "cf-02", device: "Breadboard prototype circuit", file: "cf-02.jpg", author: "Barney Livingston", license: "CC BY-SA 2.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0/", url: "https://commons.wikimedia.org/wiki/File:Binary_Clock_-_prototype.jpg" },
  { stage: "cf-03", device: "Assorted transistors", file: "cf-03.jpg", author: "ArnoldReinhold", license: "CC BY-SA 3.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/", url: "https://commons.wikimedia.org/wiki/File:Transistors.agr.jpg" },
  { stage: "cf-04", device: "Vintage CPU board (DEC VAX)", file: "cf-04.jpg", author: "Adamantios", license: "CC BY-SA 3.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/", url: "https://commons.wikimedia.org/wiki/File:DEC-VAX-KA820AA-CPU.jpg" },
  { stage: "cf-05", device: "FORTRAN punched card", file: "cf-05.jpg", author: "Public domain (Wikimedia Commons)", license: "Public domain", licenseUrl: "https://commons.wikimedia.org/wiki/Commons:Public_domain", url: "https://commons.wikimedia.org/wiki/File:Punch-card--fortran.jpg" },
  { stage: "cf-06", device: "Op-amp IC die & bond wires", file: "cf-06.jpg", author: "Analogdesigner", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/", url: "https://commons.wikimedia.org/wiki/File:Fairchild_uA741_opamp_6920.jpg" },
  { stage: "cf-07", device: "Magnetic-core memory", file: "cf-07.jpg", author: "Thierry46", license: "CC BY-SA 3.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/", url: "https://commons.wikimedia.org/wiki/File:Magnetic_core_memory_card.jpg" },
  { stage: "cf-08", device: "CPU pin grid (underside)", file: "cf-08.jpg", author: "Justin Mathews", license: "CC BY 3.0", licenseUrl: "https://creativecommons.org/licenses/by/3.0/", url: "https://commons.wikimedia.org/wiki/File:Intel_Underside_(44256686).jpeg" },
  { stage: "cf-09", device: "Printed circuit-board traces", file: "cf-09.jpg", author: "Peter Shanks (Hobart, Australia)", license: "CC BY 2.0", licenseUrl: "https://creativecommons.org/licenses/by/2.0/", url: "https://commons.wikimedia.org/wiki/File:Green_circuit_board_II_(2389301870).jpg" },
  { stage: "cf-10", device: "Silicon wafer (die grid)", file: "cf-10.jpg", author: "Sangitiana Fararano", license: "CC BY-SA 2.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0/", url: "https://commons.wikimedia.org/wiki/File:Wafer_20110212.jpg" },
  { stage: "poh-01", device: "Digital oscilloscope", file: "poh-01.jpg", author: "Ordercrazy", license: "CC0", licenseUrl: "https://creativecommons.org/publicdomain/zero/1.0/", url: "https://commons.wikimedia.org/wiki/File:Hameg_Oscilloscope_HMO3004_Series.jpg" },
  { stage: "poh-02", device: "Electronics measurement bench", file: "poh-02.jpg", author: "Mvdiogo", license: "CC BY-SA 3.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/", url: "https://commons.wikimedia.org/wiki/File:Circuito0518.jpg" },
  { stage: "poh-04", device: "Electronics workbench", file: "poh-04.jpg", author: "James Bastow", license: "CC BY-SA 2.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0/", url: "https://commons.wikimedia.org/wiki/File:Electronics_workbench.jpg" },
  { stage: "poh-05", device: "Optical laser laboratory", file: "poh-05.jpg", author: "U.S. Air Force", license: "Public domain", licenseUrl: "https://commons.wikimedia.org/wiki/Commons:Public_domain", url: "https://commons.wikimedia.org/wiki/File:Military_laser_experiment.jpg" },
  { stage: "poh-06", device: "DRAM memory modules", file: "poh-06.jpg", author: "Cyberdex (Wikimedia Commons)", license: "Public domain", licenseUrl: "https://commons.wikimedia.org/wiki/Commons:Public_domain", url: "https://commons.wikimedia.org/wiki/File:Elixir_M2U51264DS8HC3G-5T_20060320.jpg" },
  { stage: "poh-08", device: "FPGA development board", file: "poh-08.jpg", author: "SparkFun Electronics (Boulder, USA)", license: "CC BY 2.0", licenseUrl: "https://creativecommons.org/licenses/by/2.0/", url: "https://commons.wikimedia.org/wiki/File:Mojo_v3_FPGA_Development_Board_(9303578174).jpg" },
  { stage: "poh-09", device: "CPU die (AMD Athlon 64 X2)", file: "poh-09.jpg", author: "cole8888", license: "CC BY-SA 2.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0/", url: "https://commons.wikimedia.org/wiki/File:AMD_Athlon64X2_4400%2B_90nm_2006.jpg" },
  { stage: "poh-10", device: "Data-center cold aisle", file: "poh-10.jpg", author: "123net", license: "CC BY-SA 3.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/", url: "https://commons.wikimedia.org/wiki/File:123Net_Data_Center_(DC2).jpg" },
];

// Per-file credits for the Italian Basics imagery (Wikimedia Commons + public domain).
const ITALIAN_IMAGE_CREDITS = [
  { stage: "italian-01", device: "Galleria Vittorio Emanuele II (Milan)", file: "italian-01.jpg", author: "Pilgab", license: "CC BY-SA 3.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/", url: "https://commons.wikimedia.org/wiki/File:Galleria_Vittorio_Emanuele_II_(Milan).jpg" },
  { stage: "italian-03", device: "Spaghetti with tomato sauce", file: "italian-03.jpg", author: "Silar", license: "CC BY-SA 3.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/", url: "https://commons.wikimedia.org/wiki/File:04666_Polish_spaghetti_pasta_with_sauce_made_of_pork_meat,_tomatoes,_garlic_and_olive.JPG" },
  { stage: "italian-04", device: "Via Montenapoleone (Milan fashion)", file: "italian-04.jpg", author: "Tengis Bilegsaikhan", license: "CC BY 2.0", licenseUrl: "https://creativecommons.org/licenses/by/2.0/", url: "https://commons.wikimedia.org/wiki/File:Gucci_Shop,_Via_Montenapoleone,_Milan.jpg" },
  { stage: "italian-05", device: "Historic Milan tram", file: "italian-05.jpg", author: "Arbalete", license: "Public domain", licenseUrl: "https://commons.wikimedia.org/wiki/Commons:Public_domain", url: "https://commons.wikimedia.org/wiki/File:Milano_-_corso_Colombo_-_tram_ATM_1725.jpg" },
  { stage: "italian-06", device: "Market fruit & vegetable stall (Snyders)", file: "italian-06.jpg", author: "Frans Snyders / Jan Wildens", license: "Public domain", licenseUrl: "https://commons.wikimedia.org/wiki/Commons:Public_domain", url: "https://commons.wikimedia.org/wiki/File:Frans_Snyders_-_Fruit_Stall_-_WGA21520.jpg" },
  { stage: "italian-07", device: "Piazza Cordusio, Milan (Mantovani)", file: "italian-07.jpg", author: "Luigi Mantovani", license: "CC BY-SA 3.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/", url: "https://commons.wikimedia.org/wiki/File:Artgate_Fondazione_Cariplo_-_Mantovani_Luigi,_Piazza_Cordusio_a_Milano.jpg" },
  { stage: "italian-08", device: "Milan Cathedral (Duomo)", file: "italian-08.jpg", author: "Skarkkai", license: "CC0", licenseUrl: "https://creativecommons.org/publicdomain/zero/1.0/", url: "https://commons.wikimedia.org/wiki/File:Milan-duomo-front-facade.jpg" },
  { stage: "italian-09", device: "Carabinieri on an Italian street", file: "italian-09.jpg", author: "Public domain", license: "Public domain", licenseUrl: "https://commons.wikimedia.org/wiki/Commons:Public_domain", url: "https://commons.wikimedia.org/wiki/File:Carabinieri_car_in_Rome.jpg" },
  { stage: "italian-10", device: "Aperitivo (Spritz)", file: "italian-10.jpg", author: "Ralf Steinberger", license: "CC BY 2.0", licenseUrl: "https://creativecommons.org/licenses/by/2.0/", url: "https://commons.wikimedia.org/wiki/File:Italian_Aperitivo_culture_-_pre-dinner_evening_drink_as_an_appetizer_(32876800955).jpg" },
  { stage: "italian-11", device: "Italian gelato counter", file: "italian-11.jpg", author: "Kat Phillips", license: "CC BY 2.0", licenseUrl: "https://creativecommons.org/licenses/by/2.0/", url: "https://commons.wikimedia.org/wiki/File:Sicilian_ice_cream_parlor.jpg" },
  { stage: "italian-12", device: "Risotto alla milanese", file: "italian-12.jpg", author: "cyclonebill", license: "CC BY-SA 2.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0/", url: "https://commons.wikimedia.org/wiki/File:Risotto_med_safran_(6977872494).jpg" },
  { stage: "italian-13", device: "Chianti wine", file: "italian-13.jpg", author: "MATSUOKA Kohei", license: "CC BY 2.0", licenseUrl: "https://creativecommons.org/licenses/by/2.0/", url: "https://commons.wikimedia.org/wiki/File:CHIANTI_glass_%26_bottle.jpg" },
  { stage: "italian-14", device: "Italian pharmacy (farmacia)", file: "italian-14.jpg", author: "MOs810", license: "CC BY-SA 3.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/", url: "https://commons.wikimedia.org/wiki/File:Monza_farmacia.JPG" },
  { stage: "italian-15", device: "Hotel concierge with keys (Rome)", file: "italian-15.jpg", author: "Jorge Royan", license: "CC BY-SA 3.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/", url: "https://commons.wikimedia.org/wiki/File:A_hotel_concierge_handing_room_keys,_Rome_-_3566.jpg" },
  { stage: "italian-16", device: "St Mark's Clock Tower, Venice", file: "italian-16.jpg", author: "Snapshots Of The Past", license: "CC BY-SA 2.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0/", url: "https://commons.wikimedia.org/wiki/File:Clock_tower_(torre_dellOrologio)_Piazzetta_di_San_Marco_Venice_Italy.jpg" },
  { stage: "italian-18", device: "San Siro stadium (Milan)", file: "italian-18.jpg", author: "Samoano", license: "CC BY-SA 3.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/", url: "https://commons.wikimedia.org/wiki/File:Stadio_San_Siro_-_Giuseppe_Meazza,_Milano.jpg" },
  { stage: "italian-20", device: "Naviglio Grande canal, Milan", file: "italian-20.jpg", author: "Giovanni Dall'Orto", license: "CC BY-SA 2.5", licenseUrl: "https://creativecommons.org/licenses/by-sa/2.5/", url: "https://commons.wikimedia.org/wiki/File:DSC09674_-_Milano_-_Naviglio_Grande_-_Foto_Giovanni_Dall%27Orto_-_14-sept-2003.jpg" },
];

// Per-file credits for the French Basics imagery (Wikimedia Commons + public domain).
const FRENCH_IMAGE_CREDITS = [
  { stage: "french-01", device: "Parisian café terrace (Place Colette)", file: "french-01.jpg", author: "zoetnet", license: "CC BY 2.0", licenseUrl: "https://creativecommons.org/licenses/by/2.0/", url: "https://commons.wikimedia.org/wiki/File:Cafe,_Place_Colette,_Paris_2010.jpg" },
  { stage: "french-02", device: "Coffee & croissants", file: "french-02.jpg", author: "Andy Li", license: "CC0", licenseUrl: "https://creativecommons.org/publicdomain/zero/1.0/", url: "https://commons.wikimedia.org/wiki/File:Breakfast_in_Le_Grand_St_Marc,_Rouen_2025-03-23.jpg" },
  { stage: "french-03", device: "French bistro interior", file: "french-03.jpg", author: "Véronique PAGNIER", license: "CC BY-SA 3.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/", url: "https://commons.wikimedia.org/wiki/File:Bistrot_St_Trinit.JPG" },
  { stage: "french-04", device: "French street market", file: "french-04.jpg", author: "Joenomias Menno De Jong", license: "CC0", licenseUrl: "https://creativecommons.org/publicdomain/zero/1.0/", url: "https://commons.wikimedia.org/wiki/File:Greengrocer_At_A_Street_Market_In_France_Dordogne_(242326619).jpeg" },
  { stage: "french-05", device: "Paris Métro entrance (Guimard)", file: "french-05.jpg", author: "Blubadger", license: "CC BY-SA 3.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/", url: "https://commons.wikimedia.org/wiki/File:Station-metro-paris-entrance-guimard.jpg" },
  { stage: "french-06", device: "Euro banknote (€5)", file: "french-06.jpg", author: "Robert Kalina (ECB)", license: "CC BY-SA 3.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/", url: "https://commons.wikimedia.org/wiki/File:EUR_5_reverse_(2002_issue).jpg" },
  { stage: "french-07", device: "Paris Métro train & platform", file: "french-07.jpg", author: "Fabio Venni", license: "CC BY-SA 2.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0/", url: "https://commons.wikimedia.org/wiki/File:Paris_Metro_Le_pont_de_Lavallois_Becon.jpg" },
  { stage: "french-08", device: "The Louvre & glass pyramid at night", file: "french-08.jpg", author: "Benh Lieu Song", license: "CC BY 2.5", licenseUrl: "https://creativecommons.org/licenses/by/2.5/", url: "https://commons.wikimedia.org/wiki/File:Cour_Napol%C3%A9on_at_night_-_Louvre.jpg" },
  { stage: "french-09", device: "French Red Cross ambulance", file: "french-09.jpg", author: "Kevin.B", license: "CC BY-SA 3.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/", url: "https://commons.wikimedia.org/wiki/File:Peugeot_Boxer_Ambulance_Croix-Rouge_Strasbourg.jpg" },
  { stage: "french-10", device: "Boulevard Montmartre (Pissarro)", file: "french-10.jpg", author: "Camille Pissarro", license: "Public domain", licenseUrl: "https://commons.wikimedia.org/wiki/Commons:Public_domain", url: "https://commons.wikimedia.org/wiki/File:The_Boulevard_Montmartre_on_a_Winter_Morning.JPG" },
  { stage: "french-11", device: "Boulangerie-pâtisserie shopfront", file: "french-11.jpg", author: "Fritz Geller-Grimm", license: "CC BY-SA 2.5", licenseUrl: "https://creativecommons.org/licenses/by-sa/2.5/", url: "https://commons.wikimedia.org/wiki/File:Montpellier_fg09.jpg" },
  { stage: "french-12", device: "Boeuf bourguignon", file: "french-12.jpg", author: "DC", license: "CC BY 3.0", licenseUrl: "https://creativecommons.org/licenses/by/3.0/", url: "https://commons.wikimedia.org/wiki/File:Boeuf_bourguignon_servi_avec_des_p%C3%A2tes.jpg" },
  { stage: "french-13", device: "Champagne village & vineyards", file: "french-13.jpg", author: "Phillip Capper", license: "CC BY 2.0", licenseUrl: "https://creativecommons.org/licenses/by/2.0/", url: "https://commons.wikimedia.org/wiki/File:Village_and_vineyards_in_Champagne.jpg" },
  { stage: "french-14", device: "French pharmacy (green cross)", file: "french-14.jpg", author: "Hermann Luyken", license: "CC BY-SA 3.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/", url: "https://commons.wikimedia.org/wiki/File:2010.05.29.160438_Pharmacie_Boucherie_Rue_Sainte_Odile_Obernai_FR.jpg" },
  { stage: "french-15", device: "Art Deco hotel salon (1931)", file: "french-15.jpg", author: "Unknown (public domain)", license: "Public domain", licenseUrl: "https://commons.wikimedia.org/wiki/Commons:Public_domain", url: "https://commons.wikimedia.org/wiki/File:Hotel_Nogar%C3%B3_(living_room)_1931.JPG" },
  { stage: "french-16", device: "Musée d'Orsay & its clocks", file: "french-16.jpg", author: "Sanchezn", license: "CC BY-SA 3.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/", url: "https://commons.wikimedia.org/wiki/File:MuseeDOrsay.jpg" },
  { stage: "french-17", device: "Parisians in the rain (Boilly)", file: "french-17.jpg", author: "Louis-Léopold Boilly", license: "Public domain", licenseUrl: "https://commons.wikimedia.org/wiki/Commons:Public_domain", url: "https://commons.wikimedia.org/wiki/File:Passer-payez-Boilly-ca1803.jpg" },
  { stage: "french-18", device: "Minitel terminal", file: "french-18.jpg", author: "Tieum", license: "CC BY-SA 3.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/", url: "https://commons.wikimedia.org/wiki/File:Minitel1.jpg" },
  { stage: "french-20", device: "Paris from the Eiffel Tower (Champ de Mars)", file: "french-20.jpg", author: "Diliff (edit Fir0002)", license: "CC BY 2.5", licenseUrl: "https://creativecommons.org/licenses/by/2.5/", url: "https://commons.wikimedia.org/wiki/File:Champ_de_Mars_from_the_Eiffel_Tower_-_July_2006_edit.jpg" },
];

// Per-file credits for the Tapestry imagery (Wikimedia Commons + public domain museum works).
const TAPESTRY_IMAGE_CREDITS = [
  { stage: "tapestry-01", device: "Bayeux Tapestry (Halley's Comet & Harold)", file: "tapestry-01.jpg", author: "Myrabella", license: "Public domain", licenseUrl: "https://commons.wikimedia.org/wiki/Commons:Public_domain", url: "https://commons.wikimedia.org/wiki/File:Bayeux_Tapestry_32-33_comet_Halley_Harold.jpg" },
  { stage: "tapestry-02", device: "The Lady and the Unicorn tapestries", file: "tapestry-02.jpg", author: "Joe deSousa", license: "CC0", licenseUrl: "https://creativecommons.org/publicdomain/zero/1.0/", url: "https://commons.wikimedia.org/wiki/File:The_Lady_and_the_Unicorn_Tapestries,_Paris_9_July_2015.jpg" },
  { stage: "tapestry-03", device: "Chinese kesi silk tapestry (Met)", file: "tapestry-03.jpg", author: "The Metropolitan Museum of Art", license: "CC0", licenseUrl: "https://creativecommons.org/publicdomain/zero/1.0/", url: "https://commons.wikimedia.org/wiki/File:%E4%B8%AD%E4%BA%9E%E6%88%96%E8%8F%AF%E5%8C%97%EF%BC%88%E5%8D%81%E4%B8%89%E4%B8%96%E7%B4%80%EF%BC%89_%E8%93%AE%E6%B1%A0%E6%B0%B4%E7%A6%BD%E7%B4%8B%E7%B7%99%E7%B5%B2-Textile_with_Aquatic_Birds_and_Recumbent_Animal_MET_DT4121.jpg" },
  { stage: "tapestry-04", device: "The Paracas Textile (Nasca, Peru)", file: "tapestry-04.jpg", author: "Nasca culture, Peru (Brooklyn Museum)", license: "Public domain", licenseUrl: "https://commons.wikimedia.org/wiki/Commons:Public_domain", url: "https://commons.wikimedia.org/wiki/File:Nasca._Mantle_(%22The_Paracas_Textile%22),_overall.jpg" },
  { stage: "tapestry-05", device: "Dyed wool yarn", file: "tapestry-05.jpg", author: "Roy & Danielle", license: "CC BY 2.0", licenseUrl: "https://creativecommons.org/licenses/by/2.0/", url: "https://commons.wikimedia.org/wiki/File:Dyed_wool_-_Salinas.jpg" },
  { stage: "tapestry-06", device: "Weaver tying warp threads at the loom", file: "tapestry-06.jpg", author: "Lewis Hine (NARA)", license: "Public domain", licenseUrl: "https://commons.wikimedia.org/wiki/Commons:Public_domain", url: "https://commons.wikimedia.org/wiki/File:Paterson,_New_Jersey_-_Textiles._Weaver_tying_ends_of_broken_warp_thread_on_backside_of_loom._-_NARA_-_518565.jpg" },
  { stage: "tapestry-07", device: "Tapestry loom (basse-lisse)", file: "tapestry-07.jpg", author: "David Monniaux", license: "CC BY-SA 3.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/", url: "https://commons.wikimedia.org/wiki/File:Loom_basse_lisse_DSC08828.jpg" },
  { stage: "tapestry-08", device: "Barberini tapestry — sea battle", file: "tapestry-08.jpg", author: "Pietro da Cortona / Barberini manufactory", license: "Public domain", licenseUrl: "https://commons.wikimedia.org/wiki/Commons:Public_domain", url: "https://commons.wikimedia.org/wiki/File:Tapestry_showing_the_Sea_Battle_between_the_Fleets_of_Constantine_and_Licinius.jpg" },
  { stage: "tapestry-09", device: "Barberini tapestry — Constantine", file: "tapestry-09.jpg", author: "Barberini manufactory, Rome", license: "Public domain", licenseUrl: "https://commons.wikimedia.org/wiki/Commons:Public_domain", url: "https://commons.wikimedia.org/wiki/File:Constantine_Directing_the_Building_of_Constantinople_(tapestry)_-_1623-1625.jpg" },
  { stage: "tapestry-10", device: "Millefleur tapestry fragment (c. 1500)", file: "tapestry-10.jpg", author: "Franco-Flemish (anonymous)", license: "Public domain", licenseUrl: "https://commons.wikimedia.org/wiki/Commons:Public_domain", url: "https://commons.wikimedia.org/wiki/File:Franco-flemish_Millefleur_Tapestry_Fragment,_circa_1500.jpg" },
  { stage: "tapestry-11", device: "Queen Esther tapestry (V&A)", file: "tapestry-11.jpg", author: "Andrew Turvey (Wikipedia Loves Art)", license: "CC BY-SA 2.5", licenseUrl: "https://creativecommons.org/licenses/by-sa/2.5/", url: "https://commons.wikimedia.org/wiki/File:WLA_vanda_Queen_Esther_Tapestry.jpg" },
  { stage: "tapestry-12", device: "Hand-weaving a tapestry", file: "tapestry-12.jpg", author: "Wuzyprod", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/", url: "https://commons.wikimedia.org/wiki/File:A_Senegalese_upholsterer_weaving_an_entirely_handmade_luxury_carpet_02.jpg" },
];

// Per-file credits for the Flag Football imagery (Wikimedia Commons, free licenses).
const FLAG_IMAGE_CREDITS = [
  { stage: "01", device: "Flag football action", file: "Flag Football Juke.jpg", author: "JJ hohorst", license: "CC BY-SA 3.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/", url: "https://commons.wikimedia.org/wiki/File:Flag_Football_Juke.jpg" },
  { stage: "02", device: "Gridiron football players", file: "Football players in Marine training (NARA).jpg", author: "U.S. National Archives", license: "Public domain", licenseUrl: "https://commons.wikimedia.org/wiki/Commons:Public_domain", url: "https://commons.wikimedia.org/wiki/File:Eleven_football_players_who_have_gained_national_recognition_on_the_gridiron_are_now_undergoing_Marine_Corps_training..._-_NARA_-_195315.tif" },
  { stage: "03", device: "Defensive huddle", file: "Bears-def-huddle-2008.jpg", author: "this-is-us (Flickr)", license: "CC BY 1.0", licenseUrl: "https://creativecommons.org/licenses/by/1.0/", url: "https://commons.wikimedia.org/wiki/File:Bears-def-huddle-2008.jpg" },
  { stage: "04", device: "Youth flag football", file: "MCAS Yuma Youth Flag Football.jpg", author: "Cpl. Travis Gershaneck, USMC", license: "Public domain", licenseUrl: "https://commons.wikimedia.org/wiki/Commons:Public_domain", url: "https://commons.wikimedia.org/wiki/File:Flagging_Down_the_Fun,_MCAS_Yuma_Youth_Flag_Football_140927-M-SJ585-002.jpg" },
  { stage: "05", device: "Quarterback throwing", file: "Quarterback throw.jpg", author: "Mickey0987", license: "CC BY-SA 3.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/", url: "https://commons.wikimedia.org/wiki/File:Quarterback_throw_from_Mike..jpg" },
  { stage: "06", device: "Catching a pass", file: "All-American Bowl practice.jpg", author: "Cpl. Dwight Henderson, USMC", license: "Public domain", licenseUrl: "https://commons.wikimedia.org/wiki/Commons:Public_domain", url: "https://commons.wikimedia.org/wiki/File:Semper_Fidelis_All-American_Bowl_East_team_practice,_Day_1_130104-M-EK802-362.jpg" },
  { stage: "07", device: "Wide receiver (David Nelson)", file: "David Nelson (American football).JPG", author: "Denverjeffrey", license: "CC BY-SA 3.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/", url: "https://commons.wikimedia.org/wiki/File:David_Nelson_(American_football).JPG" },
  { stage: "08", device: "Play from scrimmage", file: "Play from scrimmage.jpg", author: "RickyBennison", license: "Public domain", licenseUrl: "https://commons.wikimedia.org/wiki/Commons:Public_domain", url: "https://commons.wikimedia.org/wiki/File:American_Football,_play_from_scrimmage,_isometric_press_and_muscular_preload.jpg" },
  { stage: "09", device: "Football positions diagram", file: "American Football Positions2.png", author: "Regis Frey", license: "CC BY 3.0", licenseUrl: "https://creativecommons.org/licenses/by/3.0/", url: "https://commons.wikimedia.org/wiki/File:American_Football_Positions2.png" },
  { stage: "10", device: "Sprinters at the start", file: "Runners to your mark.jpg", author: "Captain Cobra16", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/", url: "https://commons.wikimedia.org/wiki/File:Runners_to_your_mark.jpg" },
  { stage: "11", device: "Football scrimmage (formation)", file: "2006 UT football fall scrimmage.JPG", author: "Wikimedia Commons (UT scrimmage)", license: "CC BY 2.5", licenseUrl: "https://creativecommons.org/licenses/by/2.5/", url: "https://commons.wikimedia.org/wiki/File:2006_UT_football_fall_scrimmage.JPG" },
  { stage: "12", device: "Quarterback (Bob Berry)", file: "Bob Berry (American football).jpg", author: "Cushing Memorial Library & Archives", license: "CC BY 2.0", licenseUrl: "https://creativecommons.org/licenses/by/2.0/", url: "https://commons.wikimedia.org/wiki/File:Bob_Berry_(American_football).jpg" },
  { stage: "13", device: "Wide receiver (James Jones)", file: "James Jones (wide receiver).JPG", author: "Jeffrey Beall", license: "CC BY-SA 3.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/", url: "https://commons.wikimedia.org/wiki/File:James_Jones_(wide_receiver).JPG" },
  { stage: "14", device: "7-on-7 quarterback", file: "Boeing Brown 7 v 7 Quarterback 13.jpg", author: "Boeing1990", license: "CC BY-SA 3.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/", url: "https://commons.wikimedia.org/wiki/File:Boeing_Brown_7_v_7_Quarterback_13.jpg" },
  { stage: "15", device: "Defensive back (1954 card)", file: "Warren Lahr 1954 football card.png", author: "Bowman (public domain)", license: "Public domain", licenseUrl: "https://commons.wikimedia.org/wiki/Commons:Public_domain", url: "https://commons.wikimedia.org/wiki/File:Warren_Lahr,_American_football_defensive_back,_on_a_1954_football_card.png" },
  { stage: "16", device: "Cornerback sacks the QB", file: "Navy cornerback sack (Houston Bowl).jpg", author: "U.S. Navy", license: "Public domain", licenseUrl: "https://commons.wikimedia.org/wiki/Commons:Public_domain", url: "https://commons.wikimedia.org/wiki/File:US_Navy_031230-N-9693M-009_Navy_cornerback_Shalimar_Brazier_sacks_Texas_Tech_quarterback_B.J._Symons_in_the_2nd_quarter_of_the_EV1.Net_Houston_Bowl_at_Reliant_Stadium_in_Houston,_Texas.jpg" },
  { stage: "17", device: "Running back (Michael Bennett)", file: "Michael Bennett (running back).JPG", author: "Jeffrey Beall", license: "CC BY-SA 3.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/", url: "https://commons.wikimedia.org/wiki/File:Michael_Bennett_(running_back).JPG" },
  { stage: "18", device: "Coach (Jimmy Johnson)", file: "Jimmy Johnson (coach) 2009.jpg", author: "SrA Felicia Juenke, USAF", license: "Public domain", licenseUrl: "https://commons.wikimedia.org/wiki/Commons:Public_domain", url: "https://commons.wikimedia.org/wiki/File:Jimmy_Johnson_(American_football_coach)_2009.jpg" },
  { stage: "19", device: "Strength training (snatch)", file: "Lu Xiaojun snatch training.png", author: "Ccar1278458", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/", url: "https://commons.wikimedia.org/wiki/File:Lu-Xiaojun-Training-160-kg-snatch-696x502.png" },
  { stage: "20", device: "American football game", file: "American Football EM 2014 AUT-DEU.JPG", author: "AleXXw", license: "CC BY-SA 3.0 AT", licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/at/", url: "https://commons.wikimedia.org/wiki/File:American_Football_EM_2014_-_AUT-DEU_-_002.JPG" },
  { stage: "21", device: "Quarterback with the ball (playbook)", file: "Drew Brees (quarterback).jpg", author: "Keith Allison", license: "CC BY-SA 2.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0/", url: "https://commons.wikimedia.org/wiki/File:Drew_Brees_(New_Orleans_Saints_quarterback)_with_the_football_during_November_15,_2015_game_against_the_Washington_Redskins_at_FedExField_in_Maryland.jpg" },
  { stage: "22", device: "Coach (play-calling)", file: "Cornell football coach David Archer.jpg", author: "Kenneth C. Zirkel", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/", url: "https://commons.wikimedia.org/wiki/File:Cornell_University_football_coach_David_Archer.jpg" },
  { stage: "23", device: "Football game (scoring)", file: "Navy–Air Force football game.jpg", author: "EJ Hersom (DoD)", license: "Public domain", licenseUrl: "https://commons.wikimedia.org/wiki/Commons:Public_domain", url: "https://commons.wikimedia.org/wiki/File:Warrior_Games_athletes_honored_at_Navy-Air_Force_football_game_141004-D-DB155-022.jpg" },
  { stage: "24", device: "Football game (pressure)", file: "Navy Football Game.jpg", author: "U.S. Navy", license: "Public domain", licenseUrl: "https://commons.wikimedia.org/wiki/Commons:Public_domain", url: "https://commons.wikimedia.org/wiki/File:001202-N-2383B-520_Navy_Football_Game.jpg" },
  { stage: "25", device: "Quarterback pitch (trick play)", file: "Navy QB pitches the ball out.jpg", author: "U.S. Navy", license: "Public domain", licenseUrl: "https://commons.wikimedia.org/wiki/Commons:Public_domain", url: "https://commons.wikimedia.org/wiki/File:US_Navy_031108-N-9593R-011_Navy_quarterback_Craig_Candeto_pitches_the_ball_out.jpg" },
  { stage: "26", device: "Linebacker (pressure)", file: "Chris Carter (linebacker).JPG", author: "Jeffrey Beall", license: "CC BY-SA 3.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/", url: "https://commons.wikimedia.org/wiki/File:Chris_Carter_(linebacker).JPG" },
  { stage: "27", device: "Head coach on the sideline (scouting)", file: "FAMU coach Rudy Hubbard.jpg", author: "Florida Memory", license: "Public domain", licenseUrl: "https://commons.wikimedia.org/wiki/Commons:Public_domain", url: "https://commons.wikimedia.org/wiki/File:FAMU_head_football_coach_Rudy_Hubbard_on_the_sidelines_Tallahassee_Florida.jpg" },
  { stage: "28", device: "Coach running a practice drill", file: "Hawaii football practice drill.jpg", author: "MCSN Johans Chavarro, U.S. Navy", license: "Public domain", licenseUrl: "https://commons.wikimedia.org/wiki/Commons:Public_domain", url: "https://commons.wikimedia.org/wiki/File:Chris_Wiesehan,_left,_an_assistant_coach_for_the_University_of_Hawaii_football_team,_runs_a_drill_during_a_practice_at_Joint_Base_Pearl_Harbor-Hickam_Aug._15,_2013,_in_Hawaii_130815-N-IU636-213.jpg" },
  { stage: "29", device: "Strength & conditioning facility", file: "LSU Strength and Conditioning facility.jpg", author: "Spatms", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/", url: "https://commons.wikimedia.org/wiki/File:LSU_Strength_and_Conditioning_facility.jpg" },
  { stage: "30", device: "Touchdown celebration (championship)", file: "Nebraska touchdown celebration.jpg", author: "Kiley", license: "CC BY 2.0", licenseUrl: "https://creativecommons.org/licenses/by/2.0/", url: "https://commons.wikimedia.org/wiki/File:Nebraska_Cornhuskers_touchdown_celebration.jpg" },
];

// Per-file credits for the Operational Technology (ICS/SCADA) imagery (Wikimedia Commons, free licenses + public domain).
const OT_IMAGE_CREDITS = [
  { stage: "01", device: "Power-station control room", file: "Drax Power Station Control Room, Unit Control Panel.jpg", author: "Gordon Kneale Brooke", license: "CC BY-SA 2.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0/", url: "https://commons.wikimedia.org/wiki/File:Drax_Power_Station_Control_Room,_Unit_Control_Panel_-_geograph.org.uk_-_115511.jpg" },
  { stage: "02", device: "Allen-Bradley PLC rack", file: "BMA Automation Allen Bradley PLC 3.JPG", author: "Elmschrat Coaching-Blog", license: "CC BY-SA 3.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/", url: "https://commons.wikimedia.org/wiki/File:BMA_Automation_Allen_Bradley_PLC_3.JPG" },
  { stage: "04", device: "Plant control-room console", file: "Control room, Virginia-Pocahontas coal plant (NARA).jpg", author: "Jack Corn / U.S. NARA", license: "Public domain", licenseUrl: "https://commons.wikimedia.org/wiki/Commons:Public_domain", url: "https://commons.wikimedia.org/wiki/File:THE_CONTROL_ROOM_OF_THE_COAL_CLEANING_PLANT_AT_THE_VIRGINIA-POCAHONTAS_COAL_COMPANY_MINE_%5E4_NEAR_RICHLANDS,_VIRGINIA..._-_NARA_-_556384.jpg" },
  { stage: "05", device: "Electrical substation", file: "Taipei electrical substation.jpg", author: "CEphoto, Uwe Aranas", license: "CC BY-SA 3.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/", url: "https://commons.wikimedia.org/wiki/File:Taipei_Taiwan_Electrical-Substation-at-Taipei-Zoo-South-Station-01.jpg" },
  { stage: "07", device: "Oil refinery", file: "Anacortes Refinery 31911.JPG", author: "Walter Siegmund", license: "CC BY 2.5", licenseUrl: "https://creativecommons.org/licenses/by/2.5/", url: "https://commons.wikimedia.org/wiki/File:Anacortes_Refinery_31911.JPG" },
  { stage: "08", device: "High-voltage transmission pylon", file: "Pylon of a high-voltage transmission line.jpg", author: "Vlad2000Plus", license: "CC BY-SA 3.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/", url: "https://commons.wikimedia.org/wiki/File:Pylon_of_a_high-voltage_transmission_line.jpg" },
  { stage: "09", device: "Network operations center", file: "NOC-IUPUI.jpg", author: "Alan Levine", license: "CC BY 2.0", licenseUrl: "https://creativecommons.org/licenses/by/2.0/", url: "https://commons.wikimedia.org/wiki/File:NOC-IUPUI.jpg" },
  { stage: "10", device: "Factory automation (palletizing)", file: "Factory Automation Robotics Palettizing Bread.jpg", author: "KUKA Roboter GmbH / Bachmann", license: "Public domain", licenseUrl: "https://commons.wikimedia.org/wiki/Commons:Public_domain", url: "https://commons.wikimedia.org/wiki/File:Factory_Automation_Robotics_Palettizing_Bread.jpg" },
];

// Per-file credits for the Wired & Autonomous II imagery (Wikimedia Commons, free licenses).
const VEHICLE2_IMAGE_CREDITS = [
  { stage: "01", device: "Engine control unit (VW Golf)", file: "Motorsteuerung VW Golf TDI innen.jpg", author: "Cschirp", license: "CC BY-SA 3.0 DE", licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/de/", url: "https://commons.wikimedia.org/wiki/File:Motorsteuerung_VW_Golf_TDI_innen.jpg" },
  { stage: "03", device: "Motorway traffic (connected vehicles)", file: "Southern Motorway Auckland traffic.jpg", author: "Kiwiev", license: "CC0", licenseUrl: "https://creativecommons.org/publicdomain/zero/1.0/", url: "https://commons.wikimedia.org/wiki/File:Southern_Motorway_Auckland_traffic_-_copyright-free_photo_released_to_public_domain.jpg" },
  { stage: "04", device: "TPMS tire-pressure sensor", file: "DamagedSensorTPMS.jpg", author: "Infestor", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/", url: "https://commons.wikimedia.org/wiki/File:DamagedSensorTPMS.jpg" },
  { stage: "05", device: "Keyless entry remote", file: "Remote central locking.jpg", author: "James086", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/", url: "https://commons.wikimedia.org/wiki/File:Remote_central_locking.jpg" },
  { stage: "06", device: "EV charging station", file: "Car2Go Charging Station Stuttgart 2013 01.jpg", author: "Julian Herzog", license: "CC BY 4.0", licenseUrl: "https://creativecommons.org/licenses/by/4.0/", url: "https://commons.wikimedia.org/wiki/File:Car2Go_Charging_Station_Stuttgart_2013_01.jpg" },
  { stage: "07", device: "Autonomous car (Oxford RobotCar)", file: "ORI Mobile Robotics Group Nissan Leaf.jpg", author: "Ooja99", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/", url: "https://commons.wikimedia.org/wiki/File:Oxford_Robotics_Institute_(ORI)_Mobile_Robotics_Group_Nissan_Leaf.jpg" },
];

// Per-file credits for the Robotics II imagery (Wikimedia Commons, free licenses + public domain).
const ROBOT2_IMAGE_CREDITS = [
  { stage: "01", device: "Mobile social robot (Octavia)", file: "MDS robot Octavia (U.S. Navy).jpg", author: "U.S. Navy / John F. Williams", license: "Public domain", licenseUrl: "https://commons.wikimedia.org/wiki/Commons:Public_domain", url: "https://commons.wikimedia.org/wiki/File:US_Navy_100531-N-7676W-075_Visitors_interact_with_the_mobile,_dexterous,_social_(MDS)_robot_Octavia_at_the_Office_of_Naval_Research_(ONR)_exhibit_during_Fleet_Week_New_York_2010.jpg" },
  { stage: "03", device: "Automated warehouse (AS/RS)", file: "Automatisches Kleinteilelager.jpg", author: "Andreas Praefcke", license: "CC BY 3.0", licenseUrl: "https://creativecommons.org/licenses/by/3.0/", url: "https://commons.wikimedia.org/wiki/File:Automatisches_Kleinteilelager.jpg" },
  { stage: "04", device: "Tractor working a field", file: "Tractor at work on a field in Idaho.jpg", author: "Sam Beebe", license: "CC BY 2.0", licenseUrl: "https://creativecommons.org/licenses/by/2.0/", url: "https://commons.wikimedia.org/wiki/File:Tractor_at_work_on_a_field_in_Idaho.jpg" },
  { stage: "05", device: "Robot swarm (recharging test arena)", file: "RechargingSwarm.jpg", author: "Serge Kernbach", license: "CC BY-SA 3.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/", url: "https://commons.wikimedia.org/wiki/File:RechargingSwarm.jpg" },
  { stage: "07", device: "Humanoid robot (Cronos)", file: "Cronos humanoid robot.jpg", author: "Science Swiss @ Singapore", license: "CC BY-SA 3.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/", url: "https://commons.wikimedia.org/wiki/File:Cronos_humanoid_robot.jpg" },
  { stage: "08", device: "Delivery robot (illustration)", file: "Local Delivery Robot.png", author: "Rlistmedia", license: "CC BY 4.0", licenseUrl: "https://creativecommons.org/licenses/by/4.0/", url: "https://commons.wikimedia.org/wiki/File:Local_Delivery_Robot.png" },
];

// Per-file credits for the Race Through Space II imagery (Wikimedia Commons; NASA public domain + Creative Commons).
const SPACE2_IMAGE_CREDITS = [
  { stage: "01", device: "Communications-satellite launch (Atlas V)", file: "NASA Launches Next-Generation Communications Satellite.jpg", author: "NASA Goddard Space Flight Center", license: "Public domain", licenseUrl: "https://commons.wikimedia.org/wiki/Commons:Public_domain", url: "https://commons.wikimedia.org/wiki/File:NASA_Launches_Next-Generation_Communications_Satellite_(8431841705).jpg" },
  { stage: "02", device: "Deep Space Network dish (Canberra)", file: "Canberra Deep Dish Communications Complex.jpg", author: "NASA", license: "Public domain", licenseUrl: "https://commons.wikimedia.org/wiki/Commons:Public_domain", url: "https://commons.wikimedia.org/wiki/File:Canberra_Deep_Dish_Communications_Complex_-_GPN-2000-000502.jpg" },
  { stage: "03", device: "Earth station dish (Raisting)", file: "Erdfunkstelle Raisting 2.jpg", author: "Richard Bartz", license: "CC BY-SA 2.5", licenseUrl: "https://creativecommons.org/licenses/by-sa/2.5/", url: "https://commons.wikimedia.org/wiki/File:Erdfunkstelle_Raisting_2.jpg" },
  { stage: "04", device: "GPS satellite (Block IIR)", file: "GPS-IIR.jpg", author: "U.S. Government", license: "Public domain", licenseUrl: "https://commons.wikimedia.org/wiki/Commons:Public_domain", url: "https://commons.wikimedia.org/wiki/File:GPS-IIR.jpg" },
  { stage: "05", device: "Goldstone DSN antennas", file: "Goldstone Deep Space Communications Complex.jpg", author: "NASA/JPL-Caltech", license: "Public domain", licenseUrl: "https://commons.wikimedia.org/wiki/Commons:Public_domain", url: "https://commons.wikimedia.org/wiki/File:Dawn_in_the_Apollo_Valley,_Goldstone_Deep_Space_Communications_Complex.jpg" },
  { stage: "06", device: "ISS flight control room", file: "ISS Flight Control Room 2006.jpg", author: "Robert Markowitz / NASA", license: "Public domain", licenseUrl: "https://commons.wikimedia.org/wiki/Commons:Public_domain", url: "https://commons.wikimedia.org/wiki/File:ISS_Flight_Control_Room_2006.jpg" },
  { stage: "07", device: "CubeSats deployed from the ISS", file: "ISS-45 Cubesats deployed from the ISS.jpg", author: "NASA", license: "Public domain", licenseUrl: "https://commons.wikimedia.org/wiki/Commons:Public_domain", url: "https://commons.wikimedia.org/wiki/File:ISS-45_Cubesats_deployed_from_the_ISS.jpg" },
  { stage: "08", device: "Satellite constellation over LOFAR", file: "Large satellite constellation above the LOFAR telescope.jpg", author: "Daniëlle Futselaar", license: "CC BY 4.0", licenseUrl: "https://creativecommons.org/licenses/by/4.0/", url: "https://commons.wikimedia.org/wiki/File:Large_satellite_constellation_above_the_LOFAR_telescope_(ann23025a).jpg" },
  { stage: "09", device: "Orbital debris (Low Earth Orbit)", file: "Space Debris Low Earth Orbit.png", author: "NASA Orbital Debris Program Office", license: "Public domain", licenseUrl: "https://commons.wikimedia.org/wiki/Commons:Public_domain", url: "https://commons.wikimedia.org/wiki/File:Space_Debris_Low_Earth_Orbit.png" },
  { stage: "10", device: "Earth from space (Blue Marble)", file: "Earth Eastern Hemisphere.jpg", author: "NASA", license: "Public domain", licenseUrl: "https://commons.wikimedia.org/wiki/Commons:Public_domain", url: "https://commons.wikimedia.org/wiki/File:Earth_Eastern_Hemisphere.jpg" },
];

export default function AttributionPage() {
  return (
    <div className="min-h-screen px-4 py-16" style={{ background: "linear-gradient(160deg,#040c1e 0%,#071428 60%,#040c1e 100%)" }}>
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="text-gray-600 hover:text-gray-400 text-sm mb-8 inline-block transition-colors">
          ← Home
        </Link>

        <h1 className="text-3xl font-black text-white mb-2">Attributions & Licenses</h1>
        <p className="text-gray-500 text-sm mb-10 leading-relaxed">
          Kryptós CronOS incorporates references to publicly licensed third-party frameworks and standards.
          All original platform code, curriculum design, stage scenarios, and content not listed below are
          proprietary to Kryptós CronOS and protected by copyright.
        </p>

        <div className="space-y-6">
          {ATTRIBUTIONS.map((attr) => (
            <div
              key={attr.name}
              className="rounded-2xl border border-white/8 overflow-hidden"
              style={{ background: "rgba(255,255,255,0.02)" }}
            >
              <div className="px-6 py-4 border-b border-white/5">
                <div className="flex items-start justify-between gap-4 flex-wrap">
                  <div>
                    <h2 className="text-white font-bold text-base">{attr.name}</h2>
                    <p className="text-xs text-gray-600 mt-0.5">{attr.owner}</p>
                  </div>
                  <a
                    href={attr.licenseUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs px-2.5 py-1 rounded-full border border-amber-500/30 bg-amber-500/8 text-amber-400 hover:bg-amber-500/15 transition-colors flex-shrink-0"
                  >
                    {attr.license} ↗
                  </a>
                </div>
              </div>
              <div className="px-6 py-4 space-y-3">
                <p className="text-sm text-gray-400 leading-relaxed">{attr.description}</p>
                <div className="flex items-start gap-3 flex-wrap">
                  <div>
                    <div className="text-xs text-gray-700 uppercase tracking-wider mb-1">Used in</div>
                    <div className="flex flex-wrap gap-1.5">
                      {attr.modules.map((m) => (
                        <span key={m} className="text-xs px-2 py-0.5 rounded bg-white/4 border border-white/8 text-gray-500">
                          {m}
                        </span>
                      ))}
                    </div>
                  </div>
                  <a
                    href={attr.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-auto text-xs text-cyan-500 hover:text-cyan-400 transition-colors self-end"
                  >
                    Source ↗
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>


        <div className="mt-12">
          <h2 className="text-white font-bold text-lg mb-1">Race Through Space — imagery</h2>
          <p className="text-gray-500 text-xs mb-4 leading-relaxed">
            Photos on the Race Through Space stages are from Wikimedia Commons. NASA/NOAA images are
            in the public domain; others are under Creative Commons. Each is credited to its source below.
          </p>
          <ul className="space-y-2 rounded-2xl border border-white/8 p-5" style={{ background: "rgba(255,255,255,0.02)" }}>
            {SPACE_IMAGE_CREDITS.map((c) => (
              <li key={c.stage} className="text-xs text-gray-400 flex flex-wrap items-center gap-x-2 gap-y-0.5">
                <span className="text-gray-600 font-mono w-10 flex-shrink-0">S{c.stage}</span>
                <span className="text-gray-300">{c.device}</span>
                <span className="text-gray-700">·</span>
                <a href={c.url} target="_blank" rel="noopener noreferrer" className="text-cyan-500 hover:text-cyan-400 transition-colors">{c.file}</a>
                <span className="text-gray-700">·</span>
                <span>© {c.author}</span>
                <a href={c.licenseUrl} target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:text-amber-300 transition-colors">{c.license} ↗</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-12">
          <h2 className="text-white font-bold text-lg mb-1">Wired & Autonomous — imagery</h2>
          <p className="text-gray-500 text-xs mb-4 leading-relaxed">
            Photos on the EV &amp; vehicle-security stages are from Wikimedia Commons under free licenses
            and self-hosted, credited to each author below.
          </p>
          <ul className="space-y-2 rounded-2xl border border-white/8 p-5" style={{ background: "rgba(255,255,255,0.02)" }}>
            {VEHICLE_IMAGE_CREDITS.map((c) => (
              <li key={c.stage} className="text-xs text-gray-400 flex flex-wrap items-center gap-x-2 gap-y-0.5">
                <span className="text-gray-600 font-mono w-10 flex-shrink-0">V{c.stage}</span>
                <span className="text-gray-300">{c.device}</span>
                <span className="text-gray-700">·</span>
                <a href={c.url} target="_blank" rel="noopener noreferrer" className="text-cyan-500 hover:text-cyan-400 transition-colors">{c.file}</a>
                <span className="text-gray-700">·</span>
                <span>© {c.author}</span>
                <a href={c.licenseUrl} target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:text-amber-300 transition-colors">{c.license} ↗</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-12">
          <h2 className="text-white font-bold text-lg mb-1">Machines That Move — imagery</h2>
          <p className="text-gray-500 text-xs mb-4 leading-relaxed">
            Photos on the robotics stages are from Wikimedia Commons (NASA/U.S. Navy public domain +
            Creative Commons), self-hosted and credited to each author below.
          </p>
          <ul className="space-y-2 rounded-2xl border border-white/8 p-5" style={{ background: "rgba(255,255,255,0.02)" }}>
            {ROBOT_IMAGE_CREDITS.map((c) => (
              <li key={c.stage} className="text-xs text-gray-400 flex flex-wrap items-center gap-x-2 gap-y-0.5">
                <span className="text-gray-600 font-mono w-10 flex-shrink-0">R{c.stage}</span>
                <span className="text-gray-300">{c.device}</span>
                <span className="text-gray-700">·</span>
                <a href={c.url} target="_blank" rel="noopener noreferrer" className="text-cyan-500 hover:text-cyan-400 transition-colors">{c.file}</a>
                <span className="text-gray-700">·</span>
                <span>© {c.author}</span>
                <a href={c.licenseUrl} target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:text-amber-300 transition-colors">{c.license} ↗</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-12">
          <h2 className="text-white font-bold text-lg mb-1">Flag Football — imagery</h2>
          <p className="text-gray-500 text-xs mb-4 leading-relaxed">
            Photos on the Flag Football stages are from Wikimedia Commons (public domain + Creative
            Commons), self-hosted and credited to each author below.
          </p>
          <ul className="space-y-2 rounded-2xl border border-white/8 p-5" style={{ background: "rgba(255,255,255,0.02)" }}>
            {FLAG_IMAGE_CREDITS.map((c) => (
              <li key={c.stage} className="text-xs text-gray-400 flex flex-wrap items-center gap-x-2 gap-y-0.5">
                <span className="text-gray-600 font-mono w-10 flex-shrink-0">F{c.stage}</span>
                <span className="text-gray-300">{c.device}</span>
                <span className="text-gray-700">·</span>
                <a href={c.url} target="_blank" rel="noopener noreferrer" className="text-cyan-500 hover:text-cyan-400 transition-colors">{c.file}</a>
                <span className="text-gray-700">·</span>
                <span>© {c.author}</span>
                <a href={c.licenseUrl} target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:text-amber-300 transition-colors">{c.license} ↗</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-12">
          <h2 className="text-white font-bold text-lg mb-1">Operational Technology — imagery</h2>
          <p className="text-gray-500 text-xs mb-4 leading-relaxed">
            Photos on the OT / ICS-SCADA stages are from Wikimedia Commons (public domain + Creative
            Commons), self-hosted and credited to each author below.
          </p>
          <ul className="space-y-2 rounded-2xl border border-white/8 p-5" style={{ background: "rgba(255,255,255,0.02)" }}>
            {OT_IMAGE_CREDITS.map((c) => (
              <li key={c.stage} className="text-xs text-gray-400 flex flex-wrap items-center gap-x-2 gap-y-0.5">
                <span className="text-gray-600 font-mono w-10 flex-shrink-0">OT{c.stage}</span>
                <span className="text-gray-300">{c.device}</span>
                <span className="text-gray-700">·</span>
                <a href={c.url} target="_blank" rel="noopener noreferrer" className="text-cyan-500 hover:text-cyan-400 transition-colors">{c.file}</a>
                <span className="text-gray-700">·</span>
                <span>© {c.author}</span>
                <a href={c.licenseUrl} target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:text-amber-300 transition-colors">{c.license} ↗</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-12">
          <h2 className="text-white font-bold text-lg mb-1">Italian Basics — imagery</h2>
          <p className="text-gray-500 text-xs mb-4 leading-relaxed">
            Real Milan and Italy scenes matched to each lesson — the Galleria, the Duomo, a historic tram,
            gelato, risotto, Chianti, San Siro, the Navigli — from Wikimedia Commons and the public domain,
            self-hosted and credited below.
          </p>
          <ul className="space-y-2 rounded-2xl border border-white/8 p-5" style={{ background: "rgba(255,255,255,0.02)" }}>
            {ITALIAN_IMAGE_CREDITS.map((c) => (
              <li key={c.stage} className="text-xs text-gray-400 flex flex-wrap items-center gap-x-2 gap-y-0.5">
                <span className="text-gray-600 font-mono w-16 flex-shrink-0">{c.stage}</span>
                <span className="text-gray-300">{c.device}</span>
                <span className="text-gray-700">·</span>
                <a href={c.url} target="_blank" rel="noopener noreferrer" className="text-cyan-500 hover:text-cyan-400 transition-colors">{c.file}</a>
                <span className="text-gray-700">·</span>
                <span>© {c.author}</span>
                <a href={c.licenseUrl} target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:text-amber-300 transition-colors">{c.license} ↗</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-12">
          <h2 className="text-white font-bold text-lg mb-1">French Basics — imagery</h2>
          <p className="text-gray-500 text-xs mb-4 leading-relaxed">
            Real Paris and France scenes matched to each lesson — café terraces, street markets, the
            Métro, the Louvre, a boulangerie, the Champagne vineyards, a Minitel — from Wikimedia Commons
            and the public domain, self-hosted and credited below.
          </p>
          <ul className="space-y-2 rounded-2xl border border-white/8 p-5" style={{ background: "rgba(255,255,255,0.02)" }}>
            {FRENCH_IMAGE_CREDITS.map((c) => (
              <li key={c.stage} className="text-xs text-gray-400 flex flex-wrap items-center gap-x-2 gap-y-0.5">
                <span className="text-gray-600 font-mono w-16 flex-shrink-0">{c.stage}</span>
                <span className="text-gray-300">{c.device}</span>
                <span className="text-gray-700">·</span>
                <a href={c.url} target="_blank" rel="noopener noreferrer" className="text-cyan-500 hover:text-cyan-400 transition-colors">{c.file}</a>
                <span className="text-gray-700">·</span>
                <span>© {c.author}</span>
                <a href={c.licenseUrl} target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:text-amber-300 transition-colors">{c.license} ↗</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-12">
          <h2 className="text-white font-bold text-lg mb-1">Tapestry — imagery</h2>
          <p className="text-gray-500 text-xs mb-4 leading-relaxed">
            The great historical tapestries (Bayeux, the Lady and the Unicorn, Chinese kesi, the Paracas
            Textile, the Barberini and millefleur works) plus looms, yarn, and weaving — from Wikimedia
            Commons and public-domain museum collections, self-hosted and credited below.
          </p>
          <ul className="space-y-2 rounded-2xl border border-white/8 p-5" style={{ background: "rgba(255,255,255,0.02)" }}>
            {TAPESTRY_IMAGE_CREDITS.map((c) => (
              <li key={c.stage} className="text-xs text-gray-400 flex flex-wrap items-center gap-x-2 gap-y-0.5">
                <span className="text-gray-600 font-mono w-20 flex-shrink-0">{c.stage}</span>
                <span className="text-gray-300">{c.device}</span>
                <span className="text-gray-700">·</span>
                <a href={c.url} target="_blank" rel="noopener noreferrer" className="text-cyan-500 hover:text-cyan-400 transition-colors">{c.file}</a>
                <span className="text-gray-700">·</span>
                <span>© {c.author}</span>
                <a href={c.licenseUrl} target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:text-amber-300 transition-colors">{c.license} ↗</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-12">
          <h2 className="text-white font-bold text-lg mb-1">How Computers Work &amp; Physics of Hacking — imagery</h2>
          <p className="text-gray-500 text-xs mb-4 leading-relaxed">
            Real photos of the physical hardware behind each concept (filaments, transistors, core memory,
            chip dies, oscilloscopes, DRAM, data centers), from Wikimedia Commons under free licenses and the
            public domain. Self-hosted and credited below; the most abstract stages keep the generated cover.
          </p>
          <ul className="space-y-2 rounded-2xl border border-white/8 p-5" style={{ background: "rgba(255,255,255,0.02)" }}>
            {COMPUTING_PHYSICS_CREDITS.map((c) => (
              <li key={c.stage} className="text-xs text-gray-400 flex flex-wrap items-center gap-x-2 gap-y-0.5">
                <span className="text-gray-600 font-mono w-12 flex-shrink-0">{c.stage}</span>
                <span className="text-gray-300">{c.device}</span>
                <span className="text-gray-700">·</span>
                <a href={c.url} target="_blank" rel="noopener noreferrer" className="text-cyan-500 hover:text-cyan-400 transition-colors">{c.file}</a>
                <span className="text-gray-700">·</span>
                <span>© {c.author}</span>
                <a href={c.licenseUrl} target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:text-amber-300 transition-colors">{c.license} ↗</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-12">
          <h2 className="text-white font-bold text-lg mb-1">Wired &amp; Autonomous II — imagery</h2>
          <p className="text-gray-500 text-xs mb-4 leading-relaxed">
            Photos on the second vehicle-security epoch are from Wikimedia Commons under free licenses,
            self-hosted and credited to each author below.
          </p>
          <ul className="space-y-2 rounded-2xl border border-white/8 p-5" style={{ background: "rgba(255,255,255,0.02)" }}>
            {VEHICLE2_IMAGE_CREDITS.map((c) => (
              <li key={c.stage} className="text-xs text-gray-400 flex flex-wrap items-center gap-x-2 gap-y-0.5">
                <span className="text-gray-600 font-mono w-10 flex-shrink-0">V{c.stage}</span>
                <span className="text-gray-300">{c.device}</span>
                <span className="text-gray-700">·</span>
                <a href={c.url} target="_blank" rel="noopener noreferrer" className="text-cyan-500 hover:text-cyan-400 transition-colors">{c.file}</a>
                <span className="text-gray-700">·</span>
                <span>© {c.author}</span>
                <a href={c.licenseUrl} target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:text-amber-300 transition-colors">{c.license} ↗</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-12">
          <h2 className="text-white font-bold text-lg mb-1">Our First Journey — imagery</h2>
          <p className="text-gray-500 text-xs mb-4 leading-relaxed">
            Photos on the onboarding track are real places from the story (Piraeus, airports, Highway 1,
            and the Santa Cruz &amp; Monterey coast), from Wikimedia Commons — self-hosted and credited below.
          </p>
          <ul className="space-y-2 rounded-2xl border border-white/8 p-5" style={{ background: "rgba(255,255,255,0.02)" }}>
            {FIRST_JOURNEY_IMAGE_CREDITS.map((c) => (
              <li key={c.stage} className="text-xs text-gray-400 flex flex-wrap items-center gap-x-2 gap-y-0.5">
                <span className="text-gray-600 font-mono w-12 flex-shrink-0">{c.stage}</span>
                <span className="text-gray-300">{c.device}</span>
                <span className="text-gray-700">·</span>
                <a href={c.url} target="_blank" rel="noopener noreferrer" className="text-cyan-500 hover:text-cyan-400 transition-colors">{c.file}</a>
                <span className="text-gray-700">·</span>
                <span>© {c.author}</span>
                <a href={c.licenseUrl} target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:text-amber-300 transition-colors">{c.license} ↗</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-12">
          <h2 className="text-white font-bold text-lg mb-1">Foundations (ancient) — imagery</h2>
          <p className="text-gray-500 text-xs mb-4 leading-relaxed">
            The wonders of the ancient world — Wikimedia Commons photographs, plus public-domain
            engravings for the wonders that no longer stand. Self-hosted and credited below.
          </p>
          <ul className="space-y-2 rounded-2xl border border-white/8 p-5" style={{ background: "rgba(255,255,255,0.02)" }}>
            {ANCIENT_IMAGE_CREDITS.map((c) => (
              <li key={c.stage} className="text-xs text-gray-400 flex flex-wrap items-center gap-x-2 gap-y-0.5">
                <span className="text-gray-600 font-mono w-20 flex-shrink-0">{c.stage}</span>
                <span className="text-gray-300">{c.device}</span>
                <span className="text-gray-700">·</span>
                <a href={c.url} target="_blank" rel="noopener noreferrer" className="text-cyan-500 hover:text-cyan-400 transition-colors">{c.file}</a>
                <span className="text-gray-700">·</span>
                <span>© {c.author}</span>
                <a href={c.licenseUrl} target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:text-amber-300 transition-colors">{c.license} ↗</a>
              </li>
            ))}
          </ul>
        </div>


        <div className="mt-12">
          <h2 className="text-white font-bold text-lg mb-1">Robotics II — imagery</h2>
          <p className="text-gray-500 text-xs mb-4 leading-relaxed">
            Photos on the second robotics epoch are from Wikimedia Commons (U.S. Navy public domain +
            Creative Commons), self-hosted and credited to each author below.
          </p>
          <ul className="space-y-2 rounded-2xl border border-white/8 p-5" style={{ background: "rgba(255,255,255,0.02)" }}>
            {ROBOT2_IMAGE_CREDITS.map((c) => (
              <li key={c.stage} className="text-xs text-gray-400 flex flex-wrap items-center gap-x-2 gap-y-0.5">
                <span className="text-gray-600 font-mono w-10 flex-shrink-0">R{c.stage}</span>
                <span className="text-gray-300">{c.device}</span>
                <span className="text-gray-700">·</span>
                <a href={c.url} target="_blank" rel="noopener noreferrer" className="text-cyan-500 hover:text-cyan-400 transition-colors">{c.file}</a>
                <span className="text-gray-700">·</span>
                <span>© {c.author}</span>
                <a href={c.licenseUrl} target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:text-amber-300 transition-colors">{c.license} ↗</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-12">
          <h2 className="text-white font-bold text-lg mb-1">Race Through Space II — imagery</h2>
          <p className="text-gray-500 text-xs mb-4 leading-relaxed">
            Photos on the second space epoch are from Wikimedia Commons. NASA images are public domain;
            Creative Commons images are credited to each author below.
          </p>
          <ul className="space-y-2 rounded-2xl border border-white/8 p-5" style={{ background: "rgba(255,255,255,0.02)" }}>
            {SPACE2_IMAGE_CREDITS.map((c) => (
              <li key={c.stage} className="text-xs text-gray-400 flex flex-wrap items-center gap-x-2 gap-y-0.5">
                <span className="text-gray-600 font-mono w-10 flex-shrink-0">S{c.stage}</span>
                <span className="text-gray-300">{c.device}</span>
                <span className="text-gray-700">·</span>
                <a href={c.url} target="_blank" rel="noopener noreferrer" className="text-cyan-500 hover:text-cyan-400 transition-colors">{c.file}</a>
                <span className="text-gray-700">·</span>
                <span>© {c.author}</span>
                <a href={c.licenseUrl} target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:text-amber-300 transition-colors">{c.license} ↗</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-12">
          <h2 className="text-white font-bold text-lg mb-1">Silicon: Sand to Superchips — imagery</h2>
          <p className="text-gray-500 text-xs mb-4 leading-relaxed">
            Photos on the semiconductor-manufacturing stages are from Wikimedia Commons (public domain +
            Creative Commons), self-hosted and credited to each author below. Abstract steps (the silicon
            ingot, lithography stepper, and EUV source) keep the generated cover.
          </p>
          <ul className="space-y-2 rounded-2xl border border-white/8 p-5" style={{ background: "rgba(255,255,255,0.02)" }}>
            {SILICON_IMAGE_CREDITS.map((c) => (
              <li key={c.stage} className="text-xs text-gray-400 flex flex-wrap items-center gap-x-2 gap-y-0.5">
                <span className="text-gray-600 font-mono w-10 flex-shrink-0">Si{c.stage}</span>
                <span className="text-gray-300">{c.device}</span>
                <span className="text-gray-700">·</span>
                <a href={c.url} target="_blank" rel="noopener noreferrer" className="text-cyan-500 hover:text-cyan-400 transition-colors">{c.file}</a>
                <span className="text-gray-700">·</span>
                <span>© {c.author}</span>
                <a href={c.licenseUrl} target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:text-amber-300 transition-colors">{c.license} ↗</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 pt-6 border-t border-white/8 text-xs text-gray-700 leading-relaxed space-y-2">
          <p>
            All original content — including application source code, stage scenarios, CTF challenges, quiz questions,
            UI design, and educational narratives — is © 2026 Kryptós CronOS. All rights reserved.
          </p>
          <p>
            Third-party trademarks and registered marks are the property of their respective owners.
            Reference to any third-party framework or standard does not imply endorsement.
          </p>
        </div>
      </div>
    </div>
  );
}
