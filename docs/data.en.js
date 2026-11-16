// tools/build_site.py が data/ から自動生成しています。直接編集しないでください。
window.CYBER_DATA = {
 "updated": "2026-11-16",
 "lessons": {
  "beginner": {
   "level": "beginner",
   "level_name": "Beginner",
   "description": "Security basics you need in everyday life and when using a PC or smartphone",
   "lessons": [
    {
     "id": "B01",
     "category": "Core concepts",
     "title": "The three elements of information security (CIA)",
     "summary": "Information security is built on protecting three things: confidentiality, integrity and availability.",
     "content": [
      "Confidentiality: keeping information visible only to people who are allowed to see it. Example: protecting a file with a password.",
      "Integrity: keeping information correct and free from unauthorized changes. Example: a mechanism that detects tampering with data.",
      "Availability: keeping information and systems usable whenever they are needed. Example: running two servers so that the service does not stop.",
      "The initials of these three give the name \"CIA\". Security measures are easier to understand when you think about which element each one protects."
     ],
     "key_points": [
      "Confidentiality = do not let it be seen",
      "Integrity = do not let it be changed",
      "Availability = do not let it stop"
     ],
     "keywords": [
      "CIA",
      "confidentiality",
      "integrity",
      "availability"
     ]
    },
    {
     "id": "B02",
     "category": "Authentication",
     "title": "Passwords and multi-factor authentication",
     "summary": "Strong passwords and multi-factor authentication prevent impersonation.",
     "content": [
      "A strong password is long, hard to guess, and never reused. A long phrase made of several words also works well.",
      "If you reuse one password on several services, a leak from one of them lets attackers log in to the others too (a credential stuffing attack).",
      "A password manager lets you keep a different strong password for every service safely.",
      "Multi-factor authentication (MFA) combines two or more of: something you know (a password), something you have (a smartphone or security key), and something you are (a fingerprint or face).",
      "Even if your password leaks, an attacker is much less likely to log in without the other factor."
     ],
     "key_points": [
      "Make passwords long and never reuse them",
      "The three factors: knowledge, possession, biometrics",
      "MFA greatly reduces unauthorized logins"
     ],
     "keywords": [
      "password",
      "multi-factor authentication",
      "MFA",
      "credential stuffing",
      "password manager"
     ]
    },
    {
     "id": "B03",
     "category": "Threats",
     "title": "Types of malware",
     "summary": "Malicious software is collectively called \"malware\".",
     "content": [
      "Virus: a program that attaches itself to other files and spreads by infecting them.",
      "Worm: a program that runs on its own and spreads copies of itself over a network.",
      "Trojan horse: a program that pretends to be useful software and performs malicious actions behind the scenes.",
      "Ransomware: a program that encrypts files so they cannot be used and demands a ransom to restore them.",
      "Spyware: a program that steals information without the user noticing.",
      "The basic defenses are keeping the OS and software updated, using security software, and not opening suspicious files."
     ],
     "key_points": [
      "A worm spreads by itself",
      "Ransomware encrypts files and demands a ransom",
      "Update, use security software, do not open suspicious files"
     ],
     "keywords": [
      "malware",
      "virus",
      "worm",
      "Trojan horse",
      "ransomware",
      "spyware"
     ]
    },
    {
     "id": "B04",
     "category": "Threats",
     "title": "Phishing",
     "summary": "A scam that uses emails and websites that look real to steal IDs, passwords and card details.",
     "content": [
      "Emails and SMS messages pretending to be from banks, shopping sites or delivery companies lead you to a fake website.",
      "Urgent wording such as \"Your account will be suspended\" or \"Please confirm immediately\" is typical.",
      "Phishing by SMS is called \"smishing\".",
      "Defense: do not log in directly from a link in an email or SMS. Use the official app or a bookmark instead, and check the sender and the URL carefully.",
      "If you have already entered your details, change your password and contact the organizations concerned right away."
     ],
     "key_points": [
      "Be wary of messages that rush you",
      "Use the official app or a bookmark, not the link",
      "The SMS version is called smishing"
     ],
     "keywords": [
      "phishing",
      "smishing",
      "fake website",
      "spoofed email"
     ]
    },
    {
     "id": "B05",
     "category": "Defenses",
     "title": "Software updates and vulnerabilities",
     "summary": "Vulnerabilities (security weaknesses) are fixed by updates.",
     "content": [
      "A vulnerability is a security weakness caused by a design mistake or a bug in software.",
      "Attackers exploit vulnerabilities to infect devices with malware or gain unauthorized access.",
      "Vendors distribute update programs (patches) that fix vulnerabilities.",
      "An attack that targets a vulnerability before a fix is released is called a \"zero-day attack\".",
      "Turn on automatic updates for your OS, browser and apps, and do not use software whose support has ended."
     ],
     "key_points": [
      "Vulnerability = a security weakness",
      "Patches fix them",
      "A zero-day attack strikes before the fix",
      "Do not use unsupported software"
     ],
     "keywords": [
      "vulnerability",
      "patch",
      "update",
      "zero-day attack",
      "end of support"
     ]
    },
    {
     "id": "B06",
     "category": "Defenses",
     "title": "Backups",
     "summary": "Make copies regularly so that you can recover even if you lose your data.",
     "content": [
      "Take backups in case data is lost through hardware failure, mistakes or ransomware.",
      "The \"3-2-1 rule\": keep 3 copies of your data, store them on 2 different kinds of media, and keep 1 copy in another place (offline or in the cloud).",
      "A backup that is always connected to your PC can be encrypted by ransomware together with the original.",
      "Do not just take backups. Check that you can actually restore from them."
     ],
     "key_points": [
      "The 3-2-1 rule",
      "Offline backups are effective against ransomware",
      "Test restoring as well"
     ],
     "keywords": [
      "backup",
      "3-2-1 rule",
      "restore",
      "offline"
     ]
    },
    {
     "id": "B07",
     "category": "Communication",
     "title": "Public Wi-Fi and encrypted connections (HTTPS)",
     "summary": "Check that your connection is encrypted, and avoid important operations on public Wi-Fi.",
     "content": [
      "HTTPS encrypts the communication between your browser and a website. The URL begins with \"https://\".",
      "HTTPS protects the content of the communication, but it does not guarantee that the site itself is safe or genuine. Fake sites can use HTTPS too.",
      "On public Wi-Fi that has no password, or a password everyone knows, others may be able to eavesdrop on your traffic.",
      "Attackers sometimes set up fake access points with names that look just like the real one.",
      "On public Wi-Fi, avoid important operations such as online banking, use a VPN, or use your phone's tethering instead."
     ],
     "key_points": [
      "HTTPS = encrypted communication",
      "A fake site can still use HTTPS",
      "On public Wi-Fi, avoid important operations or use a VPN"
     ],
     "keywords": [
      "HTTPS",
      "encryption",
      "public Wi-Fi",
      "VPN",
      "rogue access point"
     ]
    },
    {
     "id": "B08",
     "category": "Ethics and personal information",
     "title": "Social media and personal information",
     "summary": "Information you post on social media can be misused, and may become impossible to delete.",
     "content": [
      "The background of a photo or its location data can reveal where you live and your daily patterns.",
      "Your birthday or your pet's name can be a hint for guessing passwords and answers to security questions.",
      "Once information is on the internet, it can be copied and may never be fully deleted (a \"digital tattoo\").",
      "Check who can see your posts, and be careful with messages and links from people you do not know."
     ],
     "key_points": [
      "Photos and location data can identify you",
      "Posts can be hints for guessing passwords",
      "Check your privacy settings"
     ],
     "keywords": [
      "social media",
      "personal information",
      "location data",
      "digital tattoo",
      "privacy settings"
     ]
    },
    {
     "id": "B09",
     "category": "Defenses",
     "title": "Using smartphones and apps safely",
     "summary": "A smartphone is a \"small computer\" full of important information. Protect it with the basic settings.",
     "content": [
      "Get apps from the official stores (App Store, Google Play). Apps installed from an SMS link or a site of unknown origin may be malicious.",
      "Check the permissions an app asks for when you install or first open it. Do not grant permissions the app does not need, such as a flashlight app asking for access to your contacts or SMS.",
      "Set a screen lock (a PIN that is hard to guess, or fingerprint or face recognition), and keep the OS and apps up to date.",
      "Turn on the \"find my device\" feature (remote lock and remote wipe) in case the phone is lost or stolen.",
      "Delete apps you no longer use. Before you sell or give away a phone, sign out of your accounts and reset it to erase the data."
     ],
     "key_points": [
      "Get apps from the official stores",
      "Do not grant unnecessary permissions",
      "Set a screen lock and \"find my device\"",
      "Reset the phone before parting with it"
     ],
     "keywords": [
      "official store",
      "permissions",
      "screen lock",
      "remote wipe",
      "factory reset",
      "malicious app"
     ]
    },
    {
     "id": "B10",
     "category": "Threats",
     "title": "Fake warnings (tech support scams) and online fraud",
     "summary": "Scams that use fake \"Your device is infected\" warnings or fake shopping sites to take your money or information.",
     "content": [
      "Tech support scam: while you browse a website, a fake screen appears with an alarm sound, saying something like \"Your device is infected with a virus. Call this number now.\" If you call, you are made to install remote-control software or to buy electronic money (gift cards) as a support fee.",
      "The fake warning is just a web page, and in almost every case your device is not actually infected. Do not call the number shown. Close the browser. If it is full screen and will not close, hold down the Esc key to leave full screen, end the browser from Task Manager, or restart the PC.",
      "Genuine support never asks for a gift card number as payment. If you are told to give the number, it is a scam.",
      "Fake shopping sites tend to have extreme discounts, unnatural wording, bank transfer as the only payment method, and a bank account in an individual's name.",
      "If you are in trouble, in Japan you can consult the Consumer Hotline (188) or IPA's Information Security Safety Consultation Service. Be careful with businesses that claim they can \"get your money back\": they are often a second scam."
     ],
     "key_points": [
      "Do not call the number on a fake warning",
      "Closing the browser usually solves it",
      "Asking for gift cards as payment is a scam",
      "In Japan, consult 188 or IPA if in trouble"
     ],
     "keywords": [
      "tech support scam",
      "fake warning",
      "remote control",
      "fake shopping site",
      "gift card scam",
      "Consumer Hotline"
     ],
     "reference_url": "https://www.ipa.go.jp/security/anshin/about.html"
    },
    {
     "id": "B11",
     "category": "Basic knowledge",
     "title": "How the internet works and how to read a URL",
     "summary": "Knowing how to read a URL helps you spot fake websites.",
     "content": [
      "Every device connected to the internet is assigned an \"IP address\" (for example 203.0.113.10), which works like a postal address.",
      "To make them easier to remember, IP addresses are given names called \"domain names\" (for example example.co.jp). The system that looks up the IP address for a domain name is called \"DNS\".",
      "The URL \"https://www.example.co.jp/login\" is made of \"https\" (the scheme, or how to communicate), \"www.example.co.jp\" (the host name or domain name) and \"/login\" (the path, or where the page is).",
      "You tell which organization owns a site from the end of the domain name. The real domain of \"www.example.co.jp.login-check.com\" is \"login-check.com\", which has nothing to do with example.",
      "Watch out for fake domains that use look-alike characters, such as \"rn\" for \"m\", \"0\" (zero) for \"o\", or \"1\" for \"l\". It is safer to use a bookmark or the official app than a link in an email."
     ],
     "key_points": [
      "IP address = the address, domain name = the name",
      "DNS converts names into IP addresses",
      "Read the domain from the end",
      "Watch out for look-alike fake domains"
     ],
     "keywords": [
      "IP address",
      "domain name",
      "DNS",
      "URL",
      "fake domain"
     ]
    },
    {
     "id": "B12",
     "category": "Defenses",
     "title": "Email and attachments",
     "summary": "Email is a common entry point for malware and data leaks, so take care both when receiving and when sending.",
     "content": [
      "The sender's display name can be set to anything, so do not judge an email to be genuine from the display name alone.",
      "Do not open attachments you were not expecting. Files with a disguised extension such as \"invoice.pdf.exe\" and Office documents with macros (automated actions) are especially dangerous. Do not casually click \"Enable Content\" or \"Enable Macros\".",
      "In Windows, turning on the setting that shows file name extensions makes disguises easier to notice.",
      "When sending one email to several people outside your organization, use BCC so that they cannot see each other's addresses. Putting them in To or CC leaks everyone's email address.",
      "Check the recipients and the attachments before you send, to avoid sending to the wrong person."
     ],
     "key_points": [
      "Display names can be faked",
      "Watch for double extensions and macros",
      "Show file name extensions",
      "Use BCC for mass mailings"
     ],
     "keywords": [
      "attachment",
      "file extension",
      "double extension",
      "macro",
      "BCC",
      "misdirected email"
     ]
    }
   ]
  },
  "intermediate": {
   "level": "intermediate",
   "level_name": "Intermediate",
   "description": "How networks, cryptography and the web work, and the typical defenses used in organizations (roughly the level of Japan's Information Security Management and Fundamental Information Technology Engineer examinations)",
   "lessons": [
    {
     "id": "I01",
     "category": "Networking",
     "title": "TCP/IP and port numbers",
     "summary": "Knowing how communication works and what port numbers are makes attacks and defenses easier to understand.",
     "content": [
      "Communication on the internet uses a combination of agreed rules (protocols) called TCP/IP.",
      "An IP address identifies which computer, and a port number identifies which service on that computer.",
      "Common port numbers: HTTP = 80, HTTPS = 443, SSH = 22, DNS = 53, SMTP = 25, RDP (Remote Desktop) = 3389.",
      "TCP delivers data reliably (it sets up a connection with a three-way handshake). UDP skips the checks and sends quickly.",
      "A port left open unnecessarily becomes an entry point for attacks, so the basic rule is to stop and close services you do not use."
     ],
     "key_points": [
      "IP = which device, port = which service",
      "443 = HTTPS, 22 = SSH, 53 = DNS, 3389 = RDP",
      "Close ports you do not need"
     ],
     "keywords": [
      "TCP/IP",
      "port number",
      "TCP",
      "UDP",
      "three-way handshake"
     ]
    },
    {
     "id": "I02",
     "category": "Networking",
     "title": "Firewalls, IDS, IPS and WAF",
     "summary": "Understand the different roles of the main devices and mechanisms that protect a network.",
     "content": [
      "Firewall: allows or denies traffic based on rules such as IP addresses and port numbers.",
      "IDS (intrusion detection system): detects malicious traffic and alerts the administrator. It does not block.",
      "IPS (intrusion prevention system): detects malicious traffic and blocks it automatically.",
      "WAF (web application firewall): inspects the content of traffic to a web application and blocks attacks such as SQL injection and XSS.",
      "DMZ (demilitarized zone): an intermediate area between the internal network and the internet where public-facing servers are placed. It limits damage to the internal network even if a public server is compromised."
     ],
     "key_points": [
      "IDS only detects, IPS detects and blocks",
      "A WAF specializes in web application attacks",
      "Put public servers in the DMZ"
     ],
     "keywords": [
      "firewall",
      "IDS",
      "IPS",
      "WAF",
      "DMZ"
     ]
    },
    {
     "id": "I03",
     "category": "Cryptography",
     "title": "Symmetric-key and public-key cryptography",
     "summary": "Encryption schemes either use the same key on both sides or use a pair of keys.",
     "content": [
      "Symmetric-key cryptography: the same key is used to encrypt and decrypt. It is fast, but there is the \"key distribution problem\" of getting the key to the other party safely. Example: AES.",
      "Public-key cryptography: uses a pair of keys, a public key and a private key. Data encrypted with a public key can only be decrypted with the matching private key. Examples: RSA, elliptic-curve cryptography.",
      "Because public-key cryptography is slow, real communication (such as TLS) uses \"hybrid encryption\": the symmetric key is shared safely using public-key techniques, and the data itself is encrypted with symmetric-key cryptography.",
      "Number of keys needed: when n people communicate with each other, symmetric-key cryptography needs n(n-1)/2 keys, and public-key cryptography needs 2n keys (one pair each)."
     ],
     "key_points": [
      "Symmetric = fast, but key distribution is the issue (AES)",
      "Public-key = easy key distribution, but slow (RSA)",
      "TLS uses hybrid encryption",
      "Number of keys: symmetric n(n-1)/2, public-key 2n"
     ],
     "keywords": [
      "symmetric-key cryptography",
      "public-key cryptography",
      "AES",
      "RSA",
      "key distribution problem",
      "hybrid encryption"
     ]
    },
    {
     "id": "I04",
     "category": "Cryptography",
     "title": "Hash functions",
     "summary": "A hash function produces a fixed-length value, like a fingerprint, from data.",
     "content": [
      "A hash function produces a fixed-length value (a hash value) from data of any length. Example: SHA-256.",
      "Properties: changing even one character of the original data changes the hash value greatly. The original data cannot be recovered from the hash value (it is one-way).",
      "Uses: detecting tampering with files (checking integrity), storing passwords, and digital signatures.",
      "Passwords are not stored as they are. A salt (a random value) is added and the result is hashed. It is also recommended to use deliberately slow schemes such as bcrypt or Argon2.",
      "MD5 and SHA-1 have known security problems, so they are not used for security purposes."
     ],
     "key_points": [
      "One-way: cannot be reversed",
      "Can be used to detect tampering",
      "Hash passwords with a salt",
      "MD5 and SHA-1 are deprecated"
     ],
     "keywords": [
      "hash function",
      "SHA-256",
      "salt",
      "bcrypt",
      "one-way",
      "tamper detection"
     ]
    },
    {
     "id": "I05",
     "category": "Cryptography",
     "title": "Digital signatures and digital certificates (PKI)",
     "summary": "A digital signature lets you check who created something and whether it has been tampered with.",
     "content": [
      "Digital signature: the sender signs with their own private key, and the recipient verifies with the sender's public key (the keys are used the opposite way round from encryption).",
      "This confirms who the sender is (authenticity), that the data has not been altered (integrity), and that the sender cannot deny having sent it (non-repudiation).",
      "Digital certificate: a certificate authority (CA) vouches that \"this public key really belongs to this person (or site)\".",
      "PKI (public key infrastructure): the whole system of certificate authorities, certificates, revocation information and so on that supports trust in public keys.",
      "A browser verifies a website's certificate and shows a warning if there is a problem."
     ],
     "key_points": [
      "Sign with the private key, verify with the public key",
      "Authenticity, integrity, non-repudiation",
      "A certificate authority (CA) vouches for the owner of a public key"
     ],
     "keywords": [
      "digital signature",
      "digital certificate",
      "certificate authority",
      "CA",
      "PKI",
      "non-repudiation"
     ]
    },
    {
     "id": "I06",
     "category": "Web security",
     "title": "Common web application vulnerabilities",
     "summary": "How the vulnerabilities often found in web applications work, and what developers should do about them.",
     "content": [
      "SQL injection: entering specially crafted text into an input field to manipulate the commands (SQL) sent to the database. Defense: use placeholders (parameterized queries).",
      "Cross-site scripting (XSS): embedding a malicious script in a web page so that it runs in the visitor's browser. Defense: escape output.",
      "Cross-site request forgery (CSRF): making a logged-in user perform an action they did not intend (such as a money transfer or a settings change). Defense: one-time tokens and cookies with the SameSite attribute.",
      "Directory traversal: including \"../\" and similar in a file name to read files that are not meant to be public. Defense: do not accept file names directly, and validate paths.",
      "The common principle is \"never trust user input\"."
     ],
     "key_points": [
      "SQL injection → placeholders",
      "XSS → escape on output",
      "CSRF → tokens and SameSite",
      "Never trust input"
     ],
     "keywords": [
      "SQL injection",
      "XSS",
      "CSRF",
      "directory traversal",
      "placeholder",
      "escaping"
     ]
    },
    {
     "id": "I07",
     "category": "Threats",
     "title": "Social engineering and targeted attacks",
     "summary": "Attack methods that exploit gaps in human psychology instead of technology.",
     "content": [
      "Social engineering: getting information out of people by exploiting carelessness or trust. Examples: a phone call from someone posing as an insider, looking over someone's shoulder (shoulder surfing), and searching through trash for documents (dumpster diving).",
      "Targeted attack: aiming at a specific organization and sending malware in emails that look related to its work.",
      "Business email compromise (BEC): impersonating a business partner or an executive to have money sent to a fake account.",
      "Watering hole attack: tampering with a website the targets visit often, so that visitors become infected.",
      "Defenses: education and training, confirming identity by a means other than the phone call or email itself (for example when a payee account changes), and a system for reporting suspicious emails."
     ],
     "key_points": [
      "Attacks that exploit human psychology",
      "With BEC, watch for changes of payee account",
      "Confirming through another channel is effective"
     ],
     "keywords": [
      "social engineering",
      "targeted attack",
      "business email compromise",
      "BEC",
      "watering hole attack",
      "shoulder surfing"
     ]
    },
    {
     "id": "I08",
     "category": "Threats",
     "title": "DoS and DDoS attacks",
     "summary": "Attacks that stop a service with huge amounts of traffic and damage availability.",
     "content": [
      "DoS attack: making a service unusable, for example by sending a server a huge number of requests.",
      "DDoS attack: a distributed DoS attack launched all at once from many devices (a botnet of hijacked PCs and IoT devices).",
      "Of the three CIA elements, these attacks damage availability.",
      "Defenses: using a CDN or a DDoS protection service, limiting the volume of traffic (rate limiting), and changing the default passwords of IoT devices so that your own devices are not turned into bots."
     ],
     "key_points": [
      "Attacks on availability",
      "DDoS uses botnets",
      "Changing default passwords on IoT devices is also a defense"
     ],
     "keywords": [
      "DoS attack",
      "DDoS attack",
      "botnet",
      "availability",
      "rate limiting"
     ]
    },
    {
     "id": "I09",
     "category": "Management and operations",
     "title": "Access control and the principle of least privilege",
     "summary": "The basic rule is to give only the necessary privileges to the people who need them.",
     "content": [
      "Authentication: confirming that a user is who they claim to be.",
      "Authorization: deciding what an authenticated user is allowed to do.",
      "Principle of least privilege: give only the minimum privileges needed for the job. This includes not doing everyday work with administrator privileges.",
      "Separation of duties: do not concentrate authority in one person. For example, have different people make a request and approve it, to prevent fraud and mistakes.",
      "Delete or disable the accounts of people who have moved or left promptly, and review privileges regularly."
     ],
     "key_points": [
      "Authentication = who you are, authorization = what you may do",
      "The principle of least privilege",
      "Remove leavers' accounts and review privileges"
     ],
     "keywords": [
      "access control",
      "authentication",
      "authorization",
      "principle of least privilege",
      "separation of duties"
     ]
    },
    {
     "id": "I10",
     "category": "Management and operations",
     "title": "Risk management and the ISMS",
     "summary": "An organization assesses its risks, chooses how to treat them, and manages them.",
     "content": [
      "Risk arises from the combination of \"assets\", \"threats\" and \"vulnerabilities\".",
      "The four ways to treat a risk: risk reduction (apply controls to reduce it), risk avoidance (stop the activity that causes it), risk transfer (move it to another party through insurance or outsourcing), and risk retention (accept it).",
      "ISMS (information security management system): the system by which an organization manages information security continuously. The international standard is ISO/IEC 27001.",
      "The PDCA cycle (Plan, Do, Check, Act) is repeated to keep improving.",
      "An information security policy is usually made up of three layers: the basic policy, the standards, and the procedures."
     ],
     "key_points": [
      "Risk = assets × threats × vulnerabilities",
      "Reduce, avoid, transfer, retain",
      "ISMS (ISO/IEC 27001) and PDCA"
     ],
     "keywords": [
      "risk management",
      "risk reduction",
      "risk avoidance",
      "risk transfer",
      "risk retention",
      "ISMS",
      "ISO/IEC 27001",
      "PDCA"
     ]
    },
    {
     "id": "I11",
     "category": "Management and operations",
     "title": "Log management and monitoring",
     "summary": "Logs are essential for finding problems early and for investigating the cause after an incident.",
     "content": [
      "A log is a record of what a system did and what was done to it (login history, access records, errors and so on).",
      "Collecting and monitoring logs lets you find unauthorized login attempts and abnormal traffic quickly.",
      "If the clocks on different devices disagree, their logs cannot be compared in an investigation, so the time is synchronized with NTP.",
      "To stop the logs themselves being altered or deleted, forward them to a separate server for storage and restrict access.",
      "A large number of failed logins in a short time may indicate a brute-force attack or a credential stuffing attack."
     ],
     "key_points": [
      "Logs enable early detection and investigation",
      "Synchronize time with NTP",
      "Store logs on a separate server",
      "Many failed logins are a sign of attack"
     ],
     "keywords": [
      "log",
      "monitoring",
      "NTP",
      "brute-force attack",
      "time synchronization"
     ]
    },
    {
     "id": "I12",
     "category": "Laws and guidelines",
     "title": "Security-related laws (Japan)",
     "summary": "The main laws in Japan that relate to security.",
     "content": [
      "Act on Prohibition of Unauthorized Computer Access: prohibits logging in with someone else's ID and password without permission, and acts that assist this (such as obtaining or providing IDs improperly).",
      "Act on the Protection of Personal Information: requires businesses that handle personal information to take security control measures and to report leaks, among other things.",
      "\"Crimes related to electromagnetic records of unauthorized commands\" in the Penal Code (the so-called virus creation offense): prohibits creating, providing or storing malware without a legitimate reason.",
      "Basic Act on Cybersecurity: sets out the foundations of the national cybersecurity policy.",
      "When you try out attack techniques for learning, do so only in your own environment or in an authorized practice environment (such as a CTF)."
     ],
     "key_points": [
      "Logging in with someone else's ID without permission breaks the unauthorized access law",
      "Creating or storing malware is also a crime",
      "Practice attacks only in authorized environments"
     ],
     "keywords": [
      "Act on Prohibition of Unauthorized Computer Access",
      "Act on the Protection of Personal Information",
      "virus creation offense",
      "Basic Act on Cybersecurity",
      "CTF"
     ]
    }
   ]
  },
  "advanced": {
   "level": "advanced",
   "level_name": "Advanced",
   "description": "Practical and professional-level topics such as defensive design for organizations, incident response and secure development (roughly the level of Japan's Registered Information Security Specialist examination)",
   "lessons": [
    {
     "id": "A01",
     "category": "Web security",
     "title": "OWASP Top 10",
     "summary": "A list of the most serious security risks for web applications, referred to around the world.",
     "content": [
      "It is a ranking of the typical risks for web applications, published by OWASP (the Open Worldwide Application Security Project).",
      "Main items in the 2021 edition: broken access control, cryptographic failures, injection, insecure design, security misconfiguration, vulnerable and outdated components, identification and authentication failures, software and data integrity failures, security logging and monitoring failures, and server-side request forgery (SSRF).",
      "In the 2021 edition, \"broken access control\" came first. A typical example is being able to see someone else's data just by changing an ID in the URL.",
      "\"Insecure design\" refers to a lack of consideration at the design stage, not a mistake in implementation. It is addressed with techniques such as threat modeling.",
      "The 2025 edition has also been published. \"Broken access control\" is still first, \"security misconfiguration\" is second, \"software supply chain failures\" is third, and SSRF has been merged into \"broken access control\". The list is revised regularly, so check the latest edition on the official site."
     ],
     "key_points": [
      "The standard list of web application risks",
      "Broken access control was first in the 2021 edition",
      "Addressing security from the design stage matters",
      "Check the latest edition"
     ],
     "keywords": [
      "OWASP Top 10",
      "broken access control",
      "injection",
      "SSRF",
      "insecure design"
     ],
     "reference_url": "https://owasp.org/www-project-top-ten/"
    },
    {
     "id": "A02",
     "category": "Design",
     "title": "Threat modeling (STRIDE)",
     "summary": "A method for identifying the threats a system may face while it is still being designed.",
     "content": [
      "Threat modeling is the work of sorting out \"What are we building?\", \"What can go wrong?\", \"What are we going to do about it?\" and \"Did we do a good enough job?\".",
      "You draw the system's structure, the flow of data and the trust boundaries in a data flow diagram (DFD), and then apply threats to it.",
      "STRIDE is a way of classifying threats into six types.",
      "S (Spoofing) → countered by authentication, T (Tampering) → integrity, R (Repudiation) → non-repudiation and logs, I (Information disclosure) → confidentiality, D (Denial of service) → availability, E (Elevation of privilege) → authorization.",
      "Addressing problems at the design stage costs far less than fixing them after release (\"shift left\")."
     ],
     "key_points": [
      "Organize with a DFD and trust boundaries",
      "STRIDE = six categories of threat",
      "Addressing security at design time = shift left"
     ],
     "keywords": [
      "threat modeling",
      "STRIDE",
      "data flow diagram",
      "trust boundary",
      "shift left",
      "elevation of privilege"
     ]
    },
    {
     "id": "A03",
     "category": "Incident response",
     "title": "Incident response and the CSIRT",
     "summary": "The procedure for keeping damage to a minimum when a security incident happens.",
     "content": [
      "The typical flow set out in NIST SP 800-61 Rev. 2: preparation → detection and analysis → containment, eradication and recovery → post-incident activity (applying lessons learned). Rev. 3, published in April 2025, was restructured around the functions of NIST CSF 2.0 (such as Detect, Respond and Recover), but the thinking behind this flow is still a useful reference.",
      "Containment: to stop the damage spreading, you isolate infected devices from the network, for example. To preserve evidence, however, it is sometimes necessary to keep the device powered on so that the information in memory is not lost.",
      "Eradication: removing the malware and the route of intrusion. Recovery: confirming that things are safe and bringing systems back.",
      "CSIRT: the team within an organization that handles incident response. It acts as the point of contact inside and outside the organization and shares information.",
      "Forensics: preserving evidence and investigating technically what happened. A record of how the evidence was handled (the chain of custody) is kept."
     ],
     "key_points": [
      "Preparation → detection and analysis → containment, eradication and recovery → post-incident activity",
      "Contain with evidence preservation in mind",
      "The CSIRT is at the center of the response"
     ],
     "keywords": [
      "incident response",
      "CSIRT",
      "NIST SP 800-61",
      "containment",
      "forensics",
      "evidence preservation"
     ]
    },
    {
     "id": "A04",
     "category": "Design",
     "title": "Zero trust and defense in depth",
     "summary": "An approach that drops the assumption that \"the internal network is safe\" and verifies every access.",
     "content": [
      "Traditional perimeter defense: trust the internal network and protect the boundary with the outside (the firewall).",
      "As cloud services and remote work spread, the boundary became blurred, and there was the problem that once an attacker got in, the damage spread easily inside.",
      "Zero trust: \"never trust, always verify\". The user, the device, the location and so on are checked every time, and only the minimum necessary access is allowed (NIST SP 800-207).",
      "Examples of building blocks: strong authentication (MFA), device health checks, micro-segmentation, EDR (detection and response on endpoints), and continuous monitoring.",
      "Defense in depth: layering several controls so that if one is breached, the next one can stop the attack. It is used together with zero trust."
     ],
     "key_points": [
      "Never trust, always verify",
      "The limits of perimeter defense",
      "Defense in depth removes single points of failure"
     ],
     "keywords": [
      "zero trust",
      "perimeter defense",
      "defense in depth",
      "micro-segmentation",
      "EDR",
      "NIST SP 800-207"
     ]
    },
    {
     "id": "A05",
     "category": "Monitoring",
     "title": "SOC, SIEM and attack analysis (MITRE ATT&CK)",
     "summary": "Collecting and analyzing logs from across an organization to detect and analyze attacks.",
     "content": [
      "SOC (security operations center): a team or facility dedicated to security monitoring.",
      "SIEM: a system that collects logs from many kinds of devices, correlates them, and detects signs of attack.",
      "Cyber kill chain: a model that divides an attack into the stages \"reconnaissance → weaponization → delivery → exploitation → installation → command and control → actions on objectives\". The earlier the chain is broken, the smaller the damage.",
      "MITRE ATT&CK: a knowledge base that organizes the tactics (goals) and techniques (means) of real attackers. It is used, for example, to check how well your detection rules cover them.",
      "IoC (indicator of compromise): a clue that points to a compromise, such as a malicious IP address or a file hash. IoCs are shared as threat intelligence."
     ],
     "key_points": [
      "A SIEM correlates logs",
      "Break the kill chain at an early stage",
      "ATT&CK gives a systematic view of attack techniques",
      "IoCs reveal compromises"
     ],
     "keywords": [
      "SOC",
      "SIEM",
      "cyber kill chain",
      "MITRE ATT&CK",
      "IoC",
      "threat intelligence"
     ],
     "reference_url": "https://attack.mitre.org/"
    },
    {
     "id": "A06",
     "category": "Cryptography",
     "title": "How TLS works and forward secrecy",
     "summary": "Understand what TLS, the protocol behind HTTPS, protects and how.",
     "content": [
      "TLS is a protocol that combines server authentication (certificates), key exchange, encrypted communication and tamper detection.",
      "TLS 1.3 removed old and dangerous cipher suites and made the handshake faster. TLS 1.0 and 1.1 are deprecated.",
      "(EC)DHE (ephemeral Diffie-Hellman key exchange) is used for key exchange.",
      "Forward secrecy (PFS): because a throwaway key is created for each session, past communications cannot be decrypted even if the server's private key leaks later.",
      "HSTS: makes the browser remember that \"this site must always be reached over HTTPS\", which prevents downgrade attacks to HTTP."
     ],
     "key_points": [
      "TLS 1.3 is recommended, 1.0 and 1.1 are deprecated",
      "(EC)DHE provides forward secrecy",
      "HSTS prevents downgrade attacks"
     ],
     "keywords": [
      "TLS",
      "TLS 1.3",
      "forward secrecy",
      "PFS",
      "ECDHE",
      "HSTS"
     ]
    },
    {
     "id": "A07",
     "category": "Cloud",
     "title": "Cloud security and the shared responsibility model",
     "summary": "In the cloud, the provider and the customer each protect a different part.",
     "content": [
      "Shared responsibility model: the cloud provider protects \"the cloud itself\" (data centers, physical equipment and so on), and the customer protects \"what they put in the cloud\" (data, configuration and accounts).",
      "Going from IaaS to PaaS to SaaS, the provider covers more and the customer covers less. In every model, however, managing data and accounts is the customer's responsibility.",
      "Most cloud incidents come from \"misconfiguration\", such as storage that was set to public by mistake. CSPM (automated configuration checking) is used to check continuously.",
      "In IAM (identity and access management), apply least privilege strictly. Do not use the root (administrator) account for everyday work, and protect it with MFA.",
      "Also watch out for the accident of writing API keys or access keys in source code and pushing it to a public repository."
     ],
     "key_points": [
      "The provider protects the cloud itself, the customer protects what is in it",
      "Most incidents are misconfigurations",
      "Least privilege in IAM, MFA on root",
      "Do not write keys in code"
     ],
     "keywords": [
      "shared responsibility model",
      "IaaS",
      "PaaS",
      "SaaS",
      "IAM",
      "CSPM",
      "misconfiguration"
     ]
    },
    {
     "id": "A08",
     "category": "Secure development",
     "title": "Secure coding (Python)",
     "summary": "The main points to watch when developing in Python.",
     "content": [
      "Use placeholders for SQL: pass values separately, as in cursor.execute(\"SELECT * FROM users WHERE id = ?\", (user_id,)), and do not build the statement by joining strings.",
      "Running OS commands: pass the arguments as a list, as in subprocess.run([\"ls\", path]), and do not pass user input to shell=True.",
      "Do not pass external input to eval() or exec(). Do not load untrusted data with pickle (it can run arbitrary code).",
      "Do not write secrets (such as API keys) directly in code. Manage them with environment variables or a .env file (added to .gitignore).",
      "Random numbers: use the secrets module, not random, to generate passwords and tokens.",
      "Check dependencies for vulnerabilities regularly with tools such as pip-audit, and inspect your code with a static analysis tool (such as Bandit)."
     ],
     "key_points": [
      "Use placeholders for SQL",
      "Do not pass external input to shell=True, eval or pickle",
      "Keep secrets in environment variables",
      "Generate tokens with secrets",
      "Check with pip-audit and Bandit"
     ],
     "keywords": [
      "secure coding",
      "Python",
      "placeholder",
      "subprocess",
      "secrets",
      "pickle",
      "pip-audit",
      "Bandit"
     ]
    },
    {
     "id": "A09",
     "category": "Management and operations",
     "title": "Vulnerability management (CVE and CVSS)",
     "summary": "Vulnerabilities that are found are identified, assessed and prioritized before they are dealt with.",
     "content": [
      "CVE: a worldwide common identifier given to publicly disclosed vulnerabilities (for example CVE-2021-44228).",
      "CVSS: a common standard that rates the severity of a vulnerability from 0.0 to 10.0. It is calculated from how easy the attack is and how large the impact is.",
      "JVN: a portal site that publishes vulnerability information for software used in Japan (run by JPCERT/CC and IPA).",
      "Priority is decided not only by the CVSS score but also by whether the vulnerability is actually being exploited (for example CISA's KEV catalog), whether you use the product, and whether it is exposed to the internet.",
      "With an SBOM (software bill of materials) you know which libraries and versions you use, so you can check the impact quickly when a new vulnerability appears."
     ],
     "key_points": [
      "CVE = identifier, CVSS = severity",
      "JVN for information relevant to Japan",
      "Consider real-world exploitation when prioritizing",
      "Track components with an SBOM"
     ],
     "keywords": [
      "CVE",
      "CVSS",
      "JVN",
      "KEV",
      "SBOM",
      "vulnerability management"
     ],
     "reference_url": "https://jvn.jp/"
    },
    {
     "id": "A10",
     "category": "Threats",
     "title": "Supply chain attacks and current ransomware trends",
     "summary": "Attacks that go through business partners or software supply routes, and organized ransomware attacks.",
     "content": [
      "Supply chain attack: reaching the real target through a business partner or subsidiary with weaker security, or through the mechanism for updating and distributing software.",
      "Other techniques include inserting malicious code into open-source packages and publishing packages with similar names (typosquatting).",
      "Today's ransomware attacks mostly use \"double extortion\": besides encrypting data, the attackers threaten to publish data they stole beforehand.",
      "Many reported cases start from vulnerabilities or weak authentication in VPN devices and Remote Desktop.",
      "Defenses: checking security requirements including those of business partners, checking where packages come from and their names, patching internet-facing devices quickly, offline backups, and incident response exercises.",
      "IPA's \"10 Major Security Threats\", published every year in Japan, shows the main threats of that year."
     ],
     "key_points": [
      "Attacks that go through weaker partners or distribution routes",
      "Double-extortion ransomware",
      "VPN and RDP are common entry points",
      "Check current trends in IPA's 10 Major Security Threats"
     ],
     "keywords": [
      "supply chain attack",
      "typosquatting",
      "double extortion",
      "ransomware",
      "10 Major Security Threats"
     ],
     "reference_url": "https://www.ipa.go.jp/security/10threats/"
    }
   ]
  }
 },
 "questions": {
  "beginner": [
   {
    "id": "BQ001",
    "lesson_id": "B01",
    "type": "multiple_choice",
    "question": "Which element of security means \"keeping information visible only to people who are allowed to see it\"?",
    "choices": [
     "Confidentiality",
     "Integrity",
     "Availability",
     "Reliability"
    ],
    "answer": 0,
    "explanation": "Confidentiality means that only authorized people can access the information. Integrity means it has not been tampered with, and availability means it can be used when needed."
   },
   {
    "id": "BQ002",
    "lesson_id": "B01",
    "type": "multiple_choice",
    "question": "A server failed and a web service became unusable. Which element of CIA was lost?",
    "choices": [
     "Confidentiality",
     "Integrity",
     "Availability",
     "None of them"
    ],
    "answer": 2,
    "explanation": "When something cannot be used when it is needed, \"availability\" has been lost."
   },
   {
    "id": "BQ003",
    "lesson_id": "B02",
    "type": "multiple_choice",
    "question": "Which is the most appropriate way to manage passwords?",
    "choices": [
     "Use the same password on every service so it is easy to remember",
     "Use your birthday",
     "Use a different long password for each service and manage them with a password manager",
     "Save them in plain text in a notes app and keep it on screen"
    ],
    "answer": 2,
    "explanation": "If you reuse a password, a leak from one service lets attackers log in to the others. Using a different long password for each service, managed with a password manager, is effective."
   },
   {
    "id": "BQ004",
    "lesson_id": "B02",
    "type": "multiple_choice",
    "question": "Which combination counts as multi-factor authentication?",
    "choices": [
     "A password and a security question",
     "A password and a verification code sent to your smartphone",
     "Entering the password twice",
     "An ID and a password"
    ],
    "answer": 1,
    "explanation": "It combines different kinds of factors: a password (knowledge) and a smartphone (possession). A password and a security question are both \"knowledge\", so they are not multi-factor."
   },
   {
    "id": "BQ005",
    "lesson_id": "B03",
    "type": "multiple_choice",
    "question": "Which malware encrypts files so they cannot be used and demands money to restore them?",
    "choices": [
     "Worm",
     "Spyware",
     "Ransomware",
     "Adware"
    ],
    "answer": 2,
    "explanation": "Ransomware is malware that encrypts files and demands a ransom."
   },
   {
    "id": "BQ006",
    "lesson_id": "B03",
    "type": "multiple_choice",
    "question": "Which malware does not attach itself to other files, and spreads copies of itself over a network on its own?",
    "choices": [
     "Virus",
     "Worm",
     "Trojan horse",
     "Spyware"
    ],
    "answer": 1,
    "explanation": "A worm runs on its own and multiplies over the network. A virus differs in that it attaches itself to other files."
   },
   {
    "id": "BQ007",
    "lesson_id": "B04",
    "type": "multiple_choice",
    "question": "You receive an SMS saying \"Your account will be suspended. Please confirm at the following URL within 24 hours.\" What is the appropriate response?",
    "choices": [
     "Open the URL right away and log in",
     "Reply to the SMS to check whether it is genuine",
     "Do not open the URL. Go to the service yourself from the official app or a bookmark and check",
     "Forward it to family and friends as a warning (with the URL as it is)"
    ],
    "answer": 2,
    "explanation": "Wording that rushes you is typical of phishing (smishing). Do not use the link in the message. Check from the official app or a bookmark."
   },
   {
    "id": "BQ008",
    "lesson_id": "B04",
    "type": "multiple_choice",
    "question": "What is phishing by SMS (text message) called?",
    "choices": [
     "Smishing",
     "Vishing",
     "Pharming",
     "Skimming"
    ],
    "answer": 0,
    "explanation": "SMS + phishing gives the name smishing. Vishing uses voice calls."
   },
   {
    "id": "BQ009",
    "lesson_id": "B05",
    "type": "multiple_choice",
    "question": "What do you call an attack that targets a software vulnerability after it has been discovered but before a fix has been released?",
    "choices": [
     "Brute-force attack",
     "Zero-day attack",
     "DoS attack",
     "Dictionary attack"
    ],
    "answer": 1,
    "explanation": "If the day the fix is provided is counted as day one, the attack takes place before that (on day zero), so it is called a zero-day attack."
   },
   {
    "id": "BQ010",
    "lesson_id": "B05",
    "type": "multiple_choice",
    "question": "What is the main danger of continuing to use an OS whose support has ended?",
    "choices": [
     "The screen becomes dark",
     "Newly found vulnerabilities are not fixed",
     "It can no longer connect to the internet",
     "Files are deleted automatically"
    ],
    "answer": 1,
    "explanation": "Once support ends, updates are no longer provided, so new vulnerabilities are left open and the system becomes easier to attack."
   },
   {
    "id": "BQ011",
    "lesson_id": "B06",
    "type": "multiple_choice",
    "question": "Which is the correct description of the \"3-2-1 rule\" for backups?",
    "choices": [
     "Save 2 files on 1 PC once every 3 days",
     "Keep 3 copies of the data, store them on 2 kinds of media, and keep 1 in another place",
     "Have 3 people check, save twice, and keep for 1 year",
     "Save 3 generations to 1 cloud every 2 hours"
    ],
    "answer": 1,
    "explanation": "The 3-2-1 rule is 3 copies, 2 kinds of media, and 1 in another place (offline or in the cloud)."
   },
   {
    "id": "BQ012",
    "lesson_id": "B06",
    "type": "multiple_choice",
    "question": "Which way of backing up is especially effective against ransomware?",
    "choices": [
     "Save only to an external HDD that is always connected to the PC",
     "Copy to another folder on the same PC",
     "After backing up, keep the backup disconnected from the network and the PC",
     "Take no backups and rely on security software alone"
    ],
    "answer": 2,
    "explanation": "An always-connected backup may be encrypted by ransomware along with the original. A disconnected (offline) backup is effective."
   },
   {
    "id": "BQ013",
    "lesson_id": "B07",
    "type": "multiple_choice",
    "question": "Which statement is correct about a site whose URL begins with \"https://\"?",
    "choices": [
     "It is always a genuine, safe site",
     "The communication is encrypted",
     "It never contains viruses",
     "It is always safe to enter personal information"
    ],
    "answer": 1,
    "explanation": "HTTPS indicates that the communication is encrypted, but it does not guarantee that the site is genuine. Fake sites can use HTTPS too."
   },
   {
    "id": "BQ014",
    "lesson_id": "B07",
    "type": "multiple_choice",
    "question": "Which is an appropriate way to use a cafe's public Wi-Fi that has no password?",
    "choices": [
     "Make a bank transfer by online banking",
     "Use a VPN, or avoid important operations",
     "Share a folder with everyone",
     "Turn off security software temporarily"
    ],
    "answer": 1,
    "explanation": "On unencrypted public Wi-Fi, others may be able to eavesdrop on your traffic. Use a VPN or avoid important operations."
   },
   {
    "id": "BQ015",
    "lesson_id": "B08",
    "type": "multiple_choice",
    "question": "When you post a photo on social media, which of these is likely to reveal where you live?",
    "choices": [
     "The size of the photo",
     "The photo's location data and the scenery in the background",
     "The file name of the photo",
     "The day of the week you posted"
    ],
    "answer": 1,
    "explanation": "A place can be identified from the location data embedded in a photo (Exif) or from buildings and scenery in the background."
   },
   {
    "id": "BQ016",
    "lesson_id": "B08",
    "type": "multiple_choice",
    "question": "What do you call the situation where information published on the internet can never be fully deleted because it is copied and spread?",
    "choices": [
     "Digital tattoo",
     "Digital detox",
     "Digital signage",
     "Digital twin"
    ],
    "answer": 0,
    "explanation": "It is called a \"digital tattoo\" because, like a tattoo, it cannot be removed."
   },
   {
    "id": "BQ017",
    "lesson_id": "B01",
    "type": "multiple_choice",
    "question": "Product prices on a website were changed by someone without permission. Which element of CIA was lost?",
    "choices": [
     "Availability",
     "Integrity",
     "Confidentiality",
     "Anonymity"
    ],
    "answer": 1,
    "explanation": "The information is no longer correct (it was tampered with), so integrity has been lost."
   },
   {
    "id": "BQ018",
    "lesson_id": "B01",
    "type": "multiple_choice",
    "question": "Someone dropped a USB memory stick containing customer information, and a third party who picked it up saw the contents. Which element of CIA was lost?",
    "choices": [
     "Confidentiality",
     "Reliability",
     "Availability",
     "Integrity"
    ],
    "answer": 0,
    "explanation": "The information was seen by someone who was not authorized, so confidentiality has been lost."
   },
   {
    "id": "BQ019",
    "lesson_id": "B01",
    "type": "multiple_choice",
    "question": "Which measure is the most appropriate for improving availability?",
    "choices": [
     "Putting a password on a file",
     "Adding a digital signature to data",
     "Running two servers so that if one stops, the other keeps working",
     "Encrypting communication"
    ],
    "answer": 2,
    "explanation": "Availability means \"being usable when needed\". Passwords and encryption mainly protect confidentiality, and digital signatures mainly protect integrity."
   },
   {
    "id": "BQ020",
    "lesson_id": "B02",
    "type": "multiple_choice",
    "question": "What do you call an attack that uses a list of IDs and passwords leaked from one company to try logging in to other services one after another?",
    "choices": [
     "Credential stuffing attack",
     "DoS attack",
     "Watering hole attack",
     "Zero-day attack"
    ],
    "answer": 0,
    "explanation": "This attack takes advantage of reused passwords. Using a different password for each service is the defense."
   },
   {
    "id": "BQ021",
    "lesson_id": "B02",
    "type": "multiple_choice",
    "question": "Which of the following passwords is the hardest to guess?",
    "choices": [
     "password123",
     "19950812 (your own birthday)",
     "Tanaka2025 (family name + year)",
     "ringo-sora-tokei-kame-27 (a long phrase of unrelated words)"
    ],
    "answer": 3,
    "explanation": "Length matters most for a password. Common words and personal information such as birthdays and names are easy to guess."
   },
   {
    "id": "BQ022",
    "lesson_id": "B02",
    "type": "multiple_choice",
    "question": "Which of these is a \"possession\" factor in multi-factor authentication?",
    "choices": [
     "A fingerprint",
     "The answer to a security question",
     "A password",
     "An authenticator app on a smartphone"
    ],
    "answer": 3,
    "explanation": "Passwords and security questions are \"knowledge\", a fingerprint is \"biometrics\", and a smartphone or security key is \"possession\"."
   },
   {
    "id": "BQ023",
    "lesson_id": "B03",
    "type": "multiple_choice",
    "question": "Which malware gets itself installed by pretending to be useful software and then acts maliciously behind the scenes?",
    "choices": [
     "Trojan horse",
     "Freeware",
     "Worm",
     "Ransomware"
    ],
    "answer": 0,
    "explanation": "It is named after the wooden horse in Greek mythology. It gets in by pretending to be useful software. Freeware simply means free software and is not malware."
   },
   {
    "id": "BQ024",
    "lesson_id": "B03",
    "type": "multiple_choice",
    "question": "Which malware collects information such as what you type and your browsing history and sends it out without you noticing?",
    "choices": [
     "Freeware",
     "Worm",
     "Ransomware",
     "Spyware"
    ],
    "answer": 3,
    "explanation": "Spyware secretly watches and sends out information. A keylogger, which records keystrokes, is one kind."
   },
   {
    "id": "BQ025",
    "lesson_id": "B03",
    "type": "multiple_choice",
    "question": "Which of these is NOT an appropriate way to prevent malware infection?",
    "choices": [
     "Keeping antivirus software enabled",
     "Keeping the OS and software up to date",
     "Not opening attachments in suspicious emails",
     "Eagerly trying free software of unknown origin"
    ],
    "answer": 3,
    "explanation": "Software of unknown origin may have malware planted in it. Get software from official sites and official stores."
   },
   {
    "id": "BQ026",
    "lesson_id": "B04",
    "type": "multiple_choice",
    "question": "Which is a common feature of phishing emails?",
    "choices": [
     "They contain no links at all",
     "They use wording that stirs up anxiety and haste, such as \"urgent\" or \"account suspended\"",
     "Your full name is written correctly",
     "They tell you to check from the official app"
    ],
    "answer": 1,
    "explanation": "Phishing rushes you so that you cannot judge calmly. Note that even an email with your correct name may be a fake that uses leaked information."
   },
   {
    "id": "BQ027",
    "lesson_id": "B04",
    "type": "multiple_choice",
    "question": "You entered your ID and password on a phishing site. What is the most appropriate thing to do first?",
    "choices": [
     "Change the password right away from the official site, and also change it on other services where you use the same password",
     "Wait and see for a while",
     "Reply to the email and ask them to delete the information",
     "Visit the fake site again and cancel what you entered"
    ],
    "answer": 0,
    "explanation": "Change the password immediately to prevent damage. If you entered card details, contact the card company too."
   },
   {
    "id": "BQ028",
    "lesson_id": "B04",
    "type": "multiple_choice",
    "question": "You receive an email claiming to be from your bank. What is the most reliable way to make sure you reach the real site?",
    "choices": [
     "Check that the sender's display name is the bank's name",
     "Do not use the link in the email. Go there yourself from a bookmark or the official app",
     "Check that the linked page shows a padlock (HTTPS)",
     "Check that the email's design looks just like the real one"
    ],
    "answer": 1,
    "explanation": "Fake sites can use HTTPS, and designs and display names can be copied. Going in yourself through an entrance you trust is the reliable way."
   },
   {
    "id": "BQ029",
    "lesson_id": "B05",
    "type": "multiple_choice",
    "question": "What do you call a program distributed to fix a vulnerability in software?",
    "choices": [
     "Malware",
     "Patch (fix)",
     "Firewall",
     "Plugin"
    ],
    "answer": 1,
    "explanation": "Applying a patch (security update) closes the vulnerability that was found."
   },
   {
    "id": "BQ030",
    "lesson_id": "B05",
    "type": "multiple_choice",
    "question": "Which is the right way to think about OS and app updates?",
    "choices": [
     "Never update, because changes in behavior are a nuisance",
     "Updating everything once a year is enough",
     "Apply updates as soon as possible after they are released (turn on automatic updates)",
     "Updates are unnecessary if you have antivirus software"
    ],
    "answer": 2,
    "explanation": "Attackers go after disclosed vulnerabilities right away. Turn on automatic updates and apply them early."
   },
   {
    "id": "BQ031",
    "lesson_id": "B05",
    "type": "multiple_choice",
    "question": "Which is the correct description of a \"vulnerability\"?",
    "choices": [
     "A security weakness or flaw in software or a system",
     "Software that manages passwords",
     "A kind of computer virus",
     "A mechanism that encrypts communication"
    ],
    "answer": 0,
    "explanation": "A vulnerability is also called a security hole. If attackers exploit it, it leads to unauthorized access or malware infection."
   },
   {
    "id": "BQ032",
    "lesson_id": "B06",
    "type": "multiple_choice",
    "question": "Which statement about backups is correct?",
    "choices": [
     "Once you have taken one, you never need to update it",
     "Take them regularly, and check that you can actually restore from them",
     "There is no need to check whether a backup can be restored",
     "Saving to the same drive as the original data is enough"
    ],
    "answer": 1,
    "explanation": "A backup is useless if you cannot restore from it when it counts. Taking backups regularly and testing restores are both important."
   },
   {
    "id": "BQ033",
    "lesson_id": "B06",
    "type": "multiple_choice",
    "question": "What is the problem with using only a cloud sync feature (which automatically keeps a folder on your PC and the cloud identical) in place of a backup?",
    "choices": [
     "Sync always has to be done by hand",
     "Syncing stops your communication being encrypted",
     "Photos cannot be stored in the cloud",
     "If a file is deleted or encrypted, that state may be reflected in the synced copy too"
    ],
    "answer": 3,
    "explanation": "Sync is a feature that \"makes things the same\", so accidental deletion and encryption by ransomware are reflected too. Use a feature that can go back to earlier versions, or keep a separate backup."
   },
   {
    "id": "BQ034",
    "lesson_id": "B06",
    "type": "multiple_choice",
    "question": "What should you do in advance in case your smartphone breaks or is lost?",
    "choices": [
     "Back up your photos and contacts regularly",
     "Turn off the screen lock",
     "Stop OS updates",
     "Write your password on paper and stick it on the device"
    ],
    "answer": 0,
    "explanation": "The photos and contacts on a phone can all be lost at once if it breaks or is lost. Back them up regularly to the cloud or a PC."
   },
   {
    "id": "BQ035",
    "lesson_id": "B07",
    "type": "multiple_choice",
    "question": "On public Wi-Fi, what is the danger of connecting to a fake access point that has the same name (SSID) as the genuine one?",
    "choices": [
     "The Wi-Fi becomes faster",
     "Your traffic may be eavesdropped on, or you may be led to fake sites",
     "Installed apps are deleted automatically",
     "The phone's battery just runs down faster"
    ],
    "answer": 1,
    "explanation": "A fake access point (an \"evil twin\") relays your traffic while eavesdropping on it or altering it."
   },
   {
    "id": "BQ036",
    "lesson_id": "B07",
    "type": "multiple_choice",
    "question": "Which is the best description of a VPN?",
    "choices": [
     "A mechanism that creates an encrypted, virtual private channel over the internet",
     "A mechanism that makes websites load faster",
     "A feature that generates passwords automatically",
     "Software that removes viruses"
    ],
    "answer": 0,
    "explanation": "With a VPN, third parties are less able to see your traffic, even on public Wi-Fi."
   },
   {
    "id": "BQ037",
    "lesson_id": "B07",
    "type": "multiple_choice",
    "question": "Which statement is correct about a website that shows a padlock (HTTPS)?",
    "choices": [
     "A padlock means you can be certain the site is safe",
     "Sites with a padlock do not store personal information",
     "The communication is encrypted, but the site itself is not necessarily genuine or safe",
     "You cannot be infected with a virus by viewing a site with a padlock"
    ],
    "answer": 2,
    "explanation": "These days many phishing sites use HTTPS too. The padlock only shows that \"the communication is encrypted\"."
   },
   {
    "id": "BQ038",
    "lesson_id": "B08",
    "type": "multiple_choice",
    "question": "Which information, if written on social media, is likely to be a hint for guessing your password or the answer to a \"security question\"?",
    "choices": [
     "Your favorite movie genre",
     "Your pet's name, your birthday, or the school you went to",
     "A comment on today's weather",
     "A general comment on the news"
    ],
    "answer": 1,
    "explanation": "Security questions often ask for things like \"your pet's name\" or \"the school you attended\". Be careful about making such information public."
   },
   {
    "id": "BQ039",
    "lesson_id": "B08",
    "type": "multiple_choice",
    "question": "What is the considerate thing to do when posting a photo taken with a friend on social media?",
    "choices": [
     "Add your friend's name and school",
     "Set the audience to \"public\"",
     "Post it without letting your friend know",
     "Ask the friend in the photo whether it is all right to post it"
    ],
    "answer": 3,
    "explanation": "Publishing a photo of someone else without permission can invade their privacy and cause trouble."
   },
   {
    "id": "BQ040",
    "lesson_id": "B08",
    "type": "multiple_choice",
    "question": "Someone you met on social media says \"I want to meet you\" or \"send me a photo\". What is the appropriate response?",
    "choices": [
     "Believe their profile and go to meet them alone",
     "Send a photo of your face as asked",
     "Trust them and tell them your home address",
     "Do not send personal information or photos, and if you are worried, talk to your family or someone you trust"
    ],
    "answer": 3,
    "explanation": "A social media profile is easy to fake. Photos you send can be misused or used to threaten you."
   },
   {
    "id": "BQ041",
    "lesson_id": "B09",
    "type": "multiple_choice",
    "question": "Which is the safest way to get a smartphone app?",
    "choices": [
     "Get it from the official app store",
     "Install a file sent by someone you do not know",
     "Download it from a link in an SMS",
     "Install a file that was recommended on a message board"
    ],
    "answer": 0,
    "explanation": "Official stores review apps, so malicious apps find it relatively hard to get in. Even so, check the ratings and the publisher."
   },
   {
    "id": "BQ042",
    "lesson_id": "B09",
    "type": "multiple_choice",
    "question": "A flashlight app asks for permission to access your contacts and SMS. What is the appropriate response?",
    "choices": [
     "Restart the phone and then allow it",
     "Do not allow it because the feature does not need it, and reconsider using the app at all",
     "Turn up the screen brightness and then allow it",
     "Allow everything because it seems convenient"
    ],
    "answer": 1,
    "explanation": "An app that asks for permissions unrelated to what it does may be a malicious app that steals information."
   },
   {
    "id": "BQ043",
    "lesson_id": "B09",
    "type": "multiple_choice",
    "question": "Which feature should you turn on in case your smartphone is lost or stolen?",
    "choices": [
     "A louder ringtone",
     "Find my device (remote lock and remote wipe)",
     "Automatic screen brightness",
     "Automatic game saves"
    ],
    "answer": 1,
    "explanation": "With find-my-device turned on, you can check the location, lock the phone remotely and erase its data if it is lost."
   },
   {
    "id": "BQ044",
    "lesson_id": "B09",
    "type": "multiple_choice",
    "question": "What must you do before selling or giving away a smartphone you no longer need?",
    "choices": [
     "Delete only the photos",
     "Replace the screen protector",
     "Sign out of your accounts and reset the device to erase the data",
     "Charge it to 100%"
    ],
    "answer": 2,
    "explanation": "If you do not reset it, the next owner may be able to see your photos, contacts and login information."
   },
   {
    "id": "BQ045",
    "lesson_id": "B09",
    "type": "multiple_choice",
    "question": "Which is an appropriate screen lock setting for a smartphone?",
    "choices": [
     "Set no screen lock because it is a nuisance",
     "Write the PIN on a sticky note and keep it in the phone case",
     "Set a PIN that is hard to guess, or biometrics such as fingerprint or face",
     "Use an easy PIN such as \"1111\" or \"1234\""
    ],
    "answer": 2,
    "explanation": "A simple PIN is guessed quickly. The screen lock is the first barrier protecting your information if the phone is lost."
   },
   {
    "id": "BQ046",
    "lesson_id": "B10",
    "type": "multiple_choice",
    "question": "While browsing a website, an alarm sounds and the screen says \"Your device is infected with a virus. Call this number now.\" What is the appropriate response?",
    "choices": [
     "Call the number shown right away",
     "Do not call. Close the browser (if it will not close, end it from Task Manager or restart)",
     "Pay the fee in the way shown on the screen",
     "Install remote-control software as instructed"
    ],
    "answer": 1,
    "explanation": "This is a fake warning from a tech support scam. The screen is just a web page, and in most cases closing the browser solves it."
   },
   {
    "id": "BQ047",
    "lesson_id": "B10",
    "type": "multiple_choice",
    "question": "Someone claiming to be from a support desk says \"Buy electronic money (a gift card) at a convenience store for the repair fee and tell me the number.\" Which is correct?",
    "choices": [
     "It is safe if you tell them only half of the number",
     "It is a typical scam, so you must not tell them the number",
     "It is a payment method often used by genuine support",
     "It is fine if the amount is small"
    ],
    "answer": 1,
    "explanation": "Electronic money can be spent as soon as the number is passed on, and it is hard to get back. A genuine company never asks for payment this way."
   },
   {
    "id": "BQ048",
    "lesson_id": "B10",
    "type": "multiple_choice",
    "question": "Which is a common feature of fake shopping sites?",
    "choices": [
     "You can choose from several payment methods",
     "Extremely discounted prices, with bank transfer to an account in an individual's name as the only payment method",
     "The operator's address and phone number are stated and can be confirmed as real",
     "Products are sold at around the usual market price"
    ],
    "answer": 1,
    "explanation": "Products that are far too cheap, unnatural wording, and a payee account in an individual's name are danger signs."
   },
   {
    "id": "BQ049",
    "lesson_id": "B10",
    "type": "multiple_choice",
    "question": "A fake tech support warning is shown in full screen and you cannot find the close button. Which operation is usually suggested for leaving full screen?",
    "choices": [
     "Hold down the Esc key",
     "Move the mouse quickly",
     "Call the number shown on the screen",
     "Press the Enter key repeatedly"
    ],
    "answer": 0,
    "explanation": "Holding down the Esc key often exits full screen. If that does not work, end the browser from Task Manager or restart the PC."
   },
   {
    "id": "BQ050",
    "lesson_id": "B10",
    "type": "multiple_choice",
    "question": "Where is it appropriate to turn for advice when you are in trouble with online fraud (in Japan)?",
    "choices": [
     "The phone number shown on the fake warning screen",
     "A business found on social media that says it can \"get your money back\"",
     "The Consumer Hotline (188) or IPA's Information Security Safety Consultation Service",
     "The reply address of the scam email"
    ],
    "answer": 2,
    "explanation": "Use public consultation services. Businesses that say they can \"get your money back\" are often scams aiming for a second round of damage."
   },
   {
    "id": "BQ051",
    "lesson_id": "B11",
    "type": "multiple_choice",
    "question": "What is the system that looks up an IP address from a domain name called?",
    "choices": [
     "HTTPS",
     "SNS",
     "VPN",
     "DNS"
    ],
    "answer": 3,
    "explanation": "DNS (Domain Name System) works like the internet's phone book."
   },
   {
    "id": "BQ052",
    "lesson_id": "B11",
    "type": "multiple_choice",
    "question": "In the URL \"https://www.example.co.jp.login-check.com/account\", which domain actually runs the site?",
    "choices": [
     "www.example.co.jp",
     "account",
     "example.co.jp",
     "login-check.com"
    ],
    "answer": 3,
    "explanation": "You judge a domain from its end. Even with \"www.example.co.jp\" at the front, the real domain is \"login-check.com\"."
   },
   {
    "id": "BQ053",
    "lesson_id": "B11",
    "type": "multiple_choice",
    "question": "In the URL \"https://www.example.co.jp/news/\", what does the \"https\" part represent?",
    "choices": [
     "The location of the page (path)",
     "The user name",
     "How to communicate (scheme)",
     "The domain name"
    ],
    "answer": 2,
    "explanation": "https indicates the communication method: \"communicate using encrypted HTTP\"."
   },
   {
    "id": "BQ054",
    "lesson_id": "B11",
    "type": "multiple_choice",
    "question": "If the genuine domain is \"example.com\", which of these is most likely a fake domain?",
    "choices": [
     "www.example.com",
     "examp1e.com",
     "shop.example.com",
     "support.example.com"
    ],
    "answer": 1,
    "explanation": "\"examp1e.com\" is a fake domain in which \"l\" (the letter L) has been replaced with \"1\" (the number one). Names with a subdomain in front of example.com are managed by the same organization."
   },
   {
    "id": "BQ055",
    "lesson_id": "B11",
    "type": "multiple_choice",
    "question": "Which is the correct description of an IP address?",
    "choices": [
     "A number that identifies a device on the internet (like an address)",
     "The password of a website",
     "Another name for an email address",
     "The name of a virus"
    ],
    "answer": 0,
    "explanation": "In IPv4 it is written as four numbers, such as \"203.0.113.10\"."
   },
   {
    "id": "BQ056",
    "lesson_id": "B12",
    "type": "multiple_choice",
    "question": "Which is correct about an attachment named \"invoice.pdf.exe\"?",
    "choices": [
     "It is an image file",
     "It is a PDF file, so it is safe to open",
     "It is actually an executable file (.exe) and may be malware",
     "It has two extensions, so it cannot be opened"
    ],
    "answer": 2,
    "explanation": "The last extension shows the real type. A double extension made to look like \".pdf\" is a typical malware trick."
   },
   {
    "id": "BQ057",
    "lesson_id": "B12",
    "type": "multiple_choice",
    "question": "You are sending one announcement email to 10 business partners. Where do you put the addresses so that they cannot see each other's email addresses?",
    "choices": [
     "To",
     "CC",
     "Subject",
     "BCC"
    ],
    "answer": 3,
    "explanation": "Addresses in To and CC are visible to every recipient. Addresses in BCC are not shown to the other recipients."
   },
   {
    "id": "BQ058",
    "lesson_id": "B12",
    "type": "multiple_choice",
    "question": "You open an attached Word document and an \"Enable Content\" button appears. What is the appropriate response?",
    "choices": [
     "Click it, check the content, and delete it if there is a problem",
     "Click it right away to see the content",
     "Forward it to someone else and have them open it",
     "If you do not recognize the sender or the content, close it without clicking, and if necessary confirm with the sender by another means"
    ],
    "answer": 3,
    "explanation": "Enabling it runs macros, which can infect you with malware (a technique used heavily by Emotet, among others)."
   },
   {
    "id": "BQ059",
    "lesson_id": "B12",
    "type": "multiple_choice",
    "question": "The sender's display name on an email is \"XX Bank\". Which is correct?",
    "choices": [
     "Only a bank can set that display name",
     "If the display name is a bank's name, it is always genuine",
     "If the display name is correct, the attachments are safe too",
     "The display name can be set freely, so it alone does not prove the email is genuine"
    ],
    "answer": 3,
    "explanation": "Anyone can set any display name. Do not casually open links or attachments in the message."
   },
   {
    "id": "BQ060",
    "lesson_id": "B12",
    "type": "multiple_choice",
    "question": "Which Windows setting helps you notice disguised file extensions?",
    "choices": [
     "Changing the desktop wallpaper",
     "Raising the screen resolution",
     "Emptying the Recycle Bin",
     "Turning on the setting that shows file name extensions"
    ],
    "answer": 3,
    "explanation": "If you show \"File name extensions\" from the View menu in File Explorer, you can see the real type, such as \".exe\"."
   }
  ],
  "intermediate": [
   {
    "id": "IQ001",
    "lesson_id": "I01",
    "type": "multiple_choice",
    "question": "Which port number is normally used for HTTPS?",
    "choices": [
     "22",
     "53",
     "80",
     "443"
    ],
    "answer": 3,
    "explanation": "HTTPS uses port 443, HTTP uses 80, SSH uses 22 and DNS uses 53."
   },
   {
    "id": "IQ002",
    "lesson_id": "I01",
    "type": "multiple_choice",
    "question": "Which is the correct difference between TCP and UDP?",
    "choices": [
     "TCP sets up a connection and delivers reliably, while UDP skips the checks and sends quickly",
     "UDP sets up a connection and delivers reliably, while TCP skips the checks and sends quickly",
     "TCP is encrypted and UDP is not",
     "TCP is for internal use and UDP is for the internet"
    ],
    "answer": 0,
    "explanation": "TCP sets up a connection with a three-way handshake and delivers reliably using retransmission and so on. UDP skips the checks, so it is fast and is used for video streaming, DNS and the like."
   },
   {
    "id": "IQ003",
    "lesson_id": "I02",
    "type": "multiple_choice",
    "question": "Which mechanism detects malicious traffic and notifies the administrator, but does not block it automatically?",
    "choices": [
     "IPS",
     "IDS",
     "WAF",
     "VPN"
    ],
    "answer": 1,
    "explanation": "An IDS (intrusion detection system) only detects and notifies. An IPS detects and also blocks."
   },
   {
    "id": "IQ004",
    "lesson_id": "I02",
    "type": "multiple_choice",
    "question": "Where is the most appropriate place to put a web server that is open to the outside?",
    "choices": [
     "Inside the internal LAN",
     "The DMZ",
     "The accounting department's network",
     "The administrator's personal PC"
    ],
    "answer": 1,
    "explanation": "Public servers are placed in the DMZ, which limits the effect on the internal LAN even if they are compromised."
   },
   {
    "id": "IQ005",
    "lesson_id": "I02",
    "type": "multiple_choice",
    "question": "Which mechanism inspects the content of traffic and blocks attacks on web applications such as SQL injection and XSS?",
    "choices": [
     "WAF",
     "NTP",
     "DHCP",
     "Proxy cache"
    ],
    "answer": 0,
    "explanation": "A WAF (web application firewall) inspects the content of HTTP traffic and blocks attacks on web applications."
   },
   {
    "id": "IQ006",
    "lesson_id": "I03",
    "type": "multiple_choice",
    "question": "Which is a typical symmetric-key algorithm?",
    "choices": [
     "RSA",
     "AES",
     "SHA-256",
     "Elliptic-curve cryptography"
    ],
    "answer": 1,
    "explanation": "AES is a symmetric-key cipher. RSA and elliptic-curve cryptography are public-key cryptography, and SHA-256 is a hash function."
   },
   {
    "id": "IQ007",
    "lesson_id": "I03",
    "type": "multiple_choice",
    "question": "When 10 people each communicate with one another individually using symmetric-key cryptography, how many keys are needed?",
    "choices": [
     "10",
     "20",
     "45",
     "100"
    ],
    "answer": 2,
    "explanation": "Symmetric-key cryptography needs n(n-1)/2 keys: 10 × 9 ÷ 2 = 45. Public-key cryptography would need 2n = 20."
   },
   {
    "id": "IQ008",
    "lesson_id": "I03",
    "type": "multiple_choice",
    "question": "A wants to send data with public-key cryptography so that only B can read it. What does A encrypt it with?",
    "choices": [
     "A's private key",
     "A's public key",
     "B's private key",
     "B's public key"
    ],
    "answer": 3,
    "explanation": "If the data is encrypted with the recipient B's public key, only B, who holds the matching private key, can decrypt it."
   },
   {
    "id": "IQ009",
    "lesson_id": "I04",
    "type": "multiple_choice",
    "question": "Which is a correct property of a hash function?",
    "choices": [
     "The original data can easily be recovered from the hash value",
     "The length of the hash value changes with the length of the input",
     "A small change in the original data changes the hash value greatly",
     "It cannot be calculated without a key"
    ],
    "answer": 2,
    "explanation": "A hash function is one-way (it cannot be reversed), its output has a fixed length, and a slight difference in the input changes the value greatly."
   },
   {
    "id": "IQ010",
    "lesson_id": "I04",
    "type": "multiple_choice",
    "question": "What is the main purpose of adding a salt before hashing a password for storage?",
    "choices": [
     "To allow the password to be decrypted later",
     "To give the same password different hash values, making analysis with precomputed tables (rainbow tables) difficult",
     "To make the hash value shorter",
     "To make the storing process faster"
    ],
    "answer": 1,
    "explanation": "With a salt, the same password gives a different hash value, so analysis using a table of hashes prepared in advance becomes difficult."
   },
   {
    "id": "IQ011",
    "lesson_id": "I05",
    "type": "multiple_choice",
    "question": "In a digital signature, which key does the sender use to create the signature?",
    "choices": [
     "The sender's private key",
     "The sender's public key",
     "The recipient's private key",
     "The recipient's public key"
    ],
    "answer": 0,
    "explanation": "The signature is created with the sender's private key, and the recipient verifies it with the sender's public key."
   },
   {
    "id": "IQ012",
    "lesson_id": "I05",
    "type": "multiple_choice",
    "question": "Which body issues digital certificates and vouches for the link between a public key and its owner?",
    "choices": [
     "ISP",
     "Certificate authority (CA)",
     "DNS server",
     "CSIRT"
    ],
    "answer": 1,
    "explanation": "A certificate authority (CA) issues digital certificates and vouches that a public key really belongs to its owner."
   },
   {
    "id": "IQ013",
    "lesson_id": "I06",
    "type": "multiple_choice",
    "question": "Which is the most appropriate fundamental defense against SQL injection?",
    "choices": [
     "Allowing more characters in input fields",
     "Building SQL with placeholders (parameterized queries)",
     "Showing detailed error messages",
     "Making the database password longer"
    ],
    "answer": 1,
    "explanation": "With placeholders, the input is no longer interpreted as SQL commands, so SQL injection is prevented at the root."
   },
   {
    "id": "IQ014",
    "lesson_id": "I06",
    "type": "multiple_choice",
    "question": "What is the basic defense against cross-site scripting (XSS)?",
    "choices": [
     "Escaping special characters on output",
     "Restarting the server",
     "Closing port 80",
     "Changing passwords regularly"
    ],
    "answer": 0,
    "explanation": "If special characters such as \"<\" and \">\" are escaped on output, text that was entered is no longer run as a script."
   },
   {
    "id": "IQ015",
    "lesson_id": "I06",
    "type": "multiple_choice",
    "question": "Which attack makes a logged-in user send a request for a money transfer or settings change they did not intend?",
    "choices": [
     "XSS",
     "CSRF",
     "Directory traversal",
     "DNS cache poisoning"
    ],
    "answer": 1,
    "explanation": "This is CSRF (cross-site request forgery). It is countered with one-time tokens and cookies with the SameSite attribute."
   },
   {
    "id": "IQ016",
    "lesson_id": "I07",
    "type": "multiple_choice",
    "question": "An email claiming to be from a business partner says \"Our bank account for payments has changed.\" What is the most appropriate response?",
    "choices": [
     "Transfer the money right away as the email says",
     "Reply to the email to confirm",
     "Confirm with the partner by another means, such as a phone number you already knew",
     "Forward it to your manager and transfer the money as it is"
    ],
    "answer": 2,
    "explanation": "This is a typical business email compromise (BEC) technique. A reply to the email may reach the attacker, so confirm through a different channel."
   },
   {
    "id": "IQ017",
    "lesson_id": "I07",
    "type": "multiple_choice",
    "question": "What do you call an attack that tampers with a website the targets visit often, so that visitors are infected with malware?",
    "choices": [
     "Watering hole attack",
     "Brute-force attack",
     "Man-in-the-middle attack",
     "Dictionary attack"
    ],
    "answer": 0,
    "explanation": "It is called a watering hole attack by analogy with lying in wait at a watering hole where prey gathers."
   },
   {
    "id": "IQ018",
    "lesson_id": "I08",
    "type": "multiple_choice",
    "question": "Which element of security does a DDoS attack mainly damage?",
    "choices": [
     "Confidentiality",
     "Integrity",
     "Availability",
     "Non-repudiation"
    ],
    "answer": 2,
    "explanation": "A DDoS attack stops a service and makes it unusable, so it damages availability."
   },
   {
    "id": "IQ019",
    "lesson_id": "I09",
    "type": "multiple_choice",
    "question": "Which is the correct description of the \"principle of least privilege\"?",
    "choices": [
     "Keep the number of people with privileges as small as possible",
     "Give only the minimum privileges needed for the job",
     "Have only one administrator",
     "Set up privileges in as few steps as possible"
    ],
    "answer": 1,
    "explanation": "The principle of least privilege is the idea of giving each user and program only the minimum privileges needed for its work."
   },
   {
    "id": "IQ020",
    "lesson_id": "I10",
    "type": "multiple_choice",
    "question": "Taking out cyber insurance to cover losses when damage occurs is which kind of risk treatment?",
    "choices": [
     "Risk reduction",
     "Risk avoidance",
     "Risk transfer",
     "Risk retention"
    ],
    "answer": 2,
    "explanation": "Moving the loss from a risk to another party, through insurance or outsourcing for example, is called risk transfer."
   },
   {
    "id": "IQ021",
    "lesson_id": "I11",
    "type": "multiple_choice",
    "question": "What should be done in advance so that logs from several servers can be compared in an investigation?",
    "choices": [
     "Synchronize the time on every server with NTP",
     "Set the log retention period to one day",
     "Store the logs only on the server itself",
     "Stop log output"
    ],
    "answer": 0,
    "explanation": "If the clocks differ between devices, the order of events cannot be traced correctly. Synchronize the time with NTP."
   },
   {
    "id": "IQ022",
    "lesson_id": "I12",
    "type": "multiple_choice",
    "question": "Which Japanese law prohibits logging in to a service with someone else's ID and password without their permission?",
    "choices": [
     "Copyright Act",
     "Act on Prohibition of Unauthorized Computer Access",
     "Radio Act",
     "Act on Specified Commercial Transactions"
    ],
    "answer": 1,
    "explanation": "It is prohibited by the Act on Prohibition of Unauthorized Computer Access. When you try out attack techniques for learning, limit it to your own environment or an authorized practice environment."
   },
   {
    "id": "IQ023",
    "lesson_id": "I01",
    "type": "multiple_choice",
    "question": "Which port number is normally used for SSH?",
    "choices": [
     "80",
     "25",
     "22",
     "443"
    ],
    "answer": 2,
    "explanation": "22 is SSH, 25 is SMTP (sending email), 80 is HTTP and 443 is HTTPS."
   },
   {
    "id": "IQ024",
    "lesson_id": "I01",
    "type": "multiple_choice",
    "question": "Which is the correct order of the packets exchanged in the TCP three-way handshake?",
    "choices": [
     "SYN → ACK → FIN",
     "FIN → ACK → SYN",
     "ACK → SYN → FIN",
     "SYN → SYN/ACK → ACK"
    ],
    "answer": 3,
    "explanation": "The connection is set up with three exchanges: a connection request (SYN), a reply plus a connection request (SYN/ACK), and a reply (ACK)."
   },
   {
    "id": "IQ025",
    "lesson_id": "I01",
    "type": "multiple_choice",
    "question": "Which port number is mainly used for DNS name resolution?",
    "choices": [
     "110",
     "53",
     "21",
     "3389"
    ],
    "answer": 1,
    "explanation": "DNS uses port 53 (mainly UDP, and TCP when the response is large, for example). 21 is FTP, 110 is POP3 and 3389 is Remote Desktop."
   },
   {
    "id": "IQ026",
    "lesson_id": "I01",
    "type": "multiple_choice",
    "question": "Which protocol suits communication that puts speed (real-time delivery) ahead of losing a little data, such as voice calls and live video?",
    "choices": [
     "TCP",
     "SMTP",
     "UDP",
     "FTP"
    ],
    "answer": 2,
    "explanation": "UDP skips checks such as retransmission, so it has little delay and suits highly real-time communication."
   },
   {
    "id": "IQ027",
    "lesson_id": "I02",
    "type": "multiple_choice",
    "question": "Which mechanism goes as far as blocking automatically when it detects malicious traffic?",
    "choices": [
     "IDS",
     "DNS",
     "IPS",
     "NTP"
    ],
    "answer": 2,
    "explanation": "An IDS detects and notifies. An IPS detects and also blocks."
   },
   {
    "id": "IQ028",
    "lesson_id": "I02",
    "type": "multiple_choice",
    "question": "Which is the correct basic function of a firewall?",
    "choices": [
     "Removing viruses from stored files",
     "Encrypting passwords for storage",
     "Allowing or denying traffic based on rules such as IP addresses and port numbers",
     "Making web pages load faster"
    ],
    "answer": 2,
    "explanation": "A firewall sorts out which traffic to let through according to the rules that have been set."
   },
   {
    "id": "IQ029",
    "lesson_id": "I02",
    "type": "multiple_choice",
    "question": "What do you call it when an IDS wrongly judges normal traffic to be an attack?",
    "choices": [
     "Fail-safe",
     "False negative (missed detection)",
     "Zero-day",
     "False positive (false alarm)"
    ],
    "answer": 3,
    "explanation": "With many false positives, alerts tend to be ignored. With many false negatives, attacks are missed. Balancing the two (tuning) is important."
   },
   {
    "id": "IQ030",
    "lesson_id": "I03",
    "type": "multiple_choice",
    "question": "Which is a typical public-key algorithm?",
    "choices": [
     "SHA-256",
     "AES",
     "DES",
     "RSA"
    ],
    "answer": 3,
    "explanation": "RSA is a public-key cryptosystem. AES and DES are symmetric-key ciphers, and SHA-256 is a hash function."
   },
   {
    "id": "IQ031",
    "lesson_id": "I03",
    "type": "multiple_choice",
    "question": "Which is the correct description of the hybrid encryption used in HTTPS (TLS) and elsewhere?",
    "choices": [
     "An authentication method that combines a password and a fingerprint",
     "The symmetric key is shared safely using public-key cryptography or key exchange, and the data itself is encrypted with fast symmetric-key cryptography",
     "Data is encrypted twice to double the strength",
     "A method that alternates encryption and hashing"
    ],
    "answer": 1,
    "explanation": "It combines the strength of public-key cryptography (\"keys can be shared safely\") with the strength of symmetric-key cryptography (\"processing is fast\")."
   },
   {
    "id": "IQ032",
    "lesson_id": "I03",
    "type": "multiple_choice",
    "question": "Which is the correct description of the \"key distribution problem\" in symmetric-key cryptography?",
    "choices": [
     "Encrypting always corrupts the data",
     "It is hard to hand the shared key to the other party safely",
     "The key is too long to calculate with",
     "The public key must not be shown to anyone"
    ],
    "answer": 1,
    "explanation": "If the shared key is stolen on the way, the ciphertext can be decrypted. This problem is solved with public-key cryptography and key exchange methods."
   },
   {
    "id": "IQ033",
    "lesson_id": "I04",
    "type": "multiple_choice",
    "question": "Which is the correct description of the \"one-way\" property of a hash function?",
    "choices": [
     "It is practically impossible to work out the original data from the hash value",
     "With the key, the original data can be recovered",
     "The hash value grows in proportion to the length of the input",
     "The same data gives a different hash value every time"
    ],
    "answer": 0,
    "explanation": "Unlike encryption, hashing is not meant to be reversed. The same input always gives the same value."
   },
   {
    "id": "IQ034",
    "lesson_id": "I04",
    "type": "multiple_choice",
    "question": "Which is an appropriate way to check that a downloaded file has not been tampered with?",
    "choices": [
     "Check that the file name is correct",
     "Compare the SHA-256 hash value published by the distributor with the hash value calculated from the file",
     "Open the file once",
     "Check that the file is at least 1 MB"
    ],
    "answer": 1,
    "explanation": "Even a one-bit change alters the hash value greatly, so it can be used to detect tampering."
   },
   {
    "id": "IQ035",
    "lesson_id": "I04",
    "type": "multiple_choice",
    "question": "Which is the most appropriate way for a web service to store passwords?",
    "choices": [
     "Hash them once with MD5",
     "Encrypt them with a symmetric key and store the key in the same database",
     "Add a salt and hash them with a deliberately slow password-hashing function such as bcrypt",
     "Store them in the database as plain text"
    ],
    "answer": 2,
    "explanation": "Password-hashing functions (bcrypt, scrypt, Argon2 and so on) are designed so that brute-force analysis takes a long time."
   },
   {
    "id": "IQ036",
    "lesson_id": "I04",
    "type": "multiple_choice",
    "question": "What do you call it when two different pieces of data give the same hash value?",
    "choices": [
     "Salt",
     "Collision",
     "Stretching",
     "One-wayness"
    ],
    "answer": 1,
    "explanation": "Ways of deliberately creating collisions have been found for MD5 and SHA-1, so they are not recommended for uses such as signatures."
   },
   {
    "id": "IQ037",
    "lesson_id": "I05",
    "type": "multiple_choice",
    "question": "Which key does the person who receives a digital signature use to verify it?",
    "choices": [
     "The sender's private key",
     "The sender's public key",
     "A shared key",
     "The recipient's private key"
    ],
    "answer": 1,
    "explanation": "The sender signs with their own private key, and the recipient verifies with the sender's public key."
   },
   {
    "id": "IQ038",
    "lesson_id": "I05",
    "type": "multiple_choice",
    "question": "Which of these can NOT be achieved by a digital signature alone?",
    "choices": [
     "Confirming the sender (preventing impersonation)",
     "Hiding the content of the data from third parties (confidentiality)",
     "Non-repudiation",
     "Detecting tampering"
    ],
    "answer": 1,
    "explanation": "A digital signature does not encrypt the content. Hiding the content needs encryption as well."
   },
   {
    "id": "IQ039",
    "lesson_id": "I05",
    "type": "multiple_choice",
    "question": "Which mechanism is used to check whether a digital certificate has been revoked?",
    "choices": [
     "DNS",
     "NAT",
     "CRL (certificate revocation list) and OCSP",
     "DHCP"
    ],
    "answer": 2,
    "explanation": "Certificates revoked because of a leaked private key, for example, can be checked with a CRL or OCSP."
   },
   {
    "id": "IQ040",
    "lesson_id": "I05",
    "type": "multiple_choice",
    "question": "How does a browser decide whether it can trust a website's server certificate?",
    "choices": [
     "By whether the server's IP address is in the same country",
     "By following the signatures on the certificate back to a root certificate authority registered in the OS or browser",
     "By comparing the site's design with the official one",
     "By the file size of the certificate"
    ],
    "answer": 1,
    "explanation": "It verifies by following the \"certificate chain\": root CA → intermediate CA → server certificate."
   },
   {
    "id": "IQ041",
    "lesson_id": "I06",
    "type": "multiple_choice",
    "question": "Which attack reads files that are not public by putting a string such as \"../../etc/passwd\" into a parameter that specifies a file name?",
    "choices": [
     "DDoS attack",
     "Directory traversal",
     "CSRF",
     "XSS"
    ],
    "answer": 1,
    "explanation": "The attack uses \"../\" to climb to parent directories. Defenses include not letting file names be specified directly, and normalizing and validating paths."
   },
   {
    "id": "IQ042",
    "lesson_id": "I06",
    "type": "multiple_choice",
    "question": "Which is an effective defense against CSRF?",
    "choices": [
     "Compressing images before showing them",
     "Including a token that third parties cannot guess in requests for important actions, and verifying it",
     "Converting all input to full-width characters",
     "Lowering the minimum password length"
    ],
    "answer": 1,
    "explanation": "The token confirms that the request came from the genuine screen. The SameSite attribute on cookies is also an effective defense."
   },
   {
    "id": "IQ043",
    "lesson_id": "I06",
    "type": "multiple_choice",
    "question": "Which is a typical kind of damage from XSS?",
    "choices": [
     "The network line is cut",
     "The server's CPU temperature rises",
     "The server's hard disk is physically destroyed",
     "A malicious script runs in the user's browser and cookies (session information) are stolen"
    ],
    "answer": 3,
    "explanation": "XSS is an attack that makes a script run in the user's browser. It is misused for impersonation, showing fake screens and so on."
   },
   {
    "id": "IQ044",
    "lesson_id": "I06",
    "type": "multiple_choice",
    "question": "Which string is often entered in an SQL injection attack to get around login authentication?",
    "choices": [
     "<script>alert(1)</script>",
     "../../etc/passwd",
     "https://example.com",
     "' OR '1'='1"
    ],
    "answer": 3,
    "explanation": "This string makes the condition in the SQL statement always true. With placeholders, the input is treated as a plain value. \"<script>alert(1)</script>\" is an example of XSS, and \"../../etc/passwd\" is an example of directory traversal."
   },
   {
    "id": "IQ045",
    "lesson_id": "I07",
    "type": "multiple_choice",
    "question": "What do you call the trick of watching from behind while someone types their password?",
    "choices": [
     "Phishing",
     "Shoulder surfing",
     "Smishing",
     "Brute-force attack"
    ],
    "answer": 1,
    "explanation": "It is named for looking over someone's shoulder. Privacy screen filters and paying attention to your surroundings are the defenses."
   },
   {
    "id": "IQ046",
    "lesson_id": "I07",
    "type": "multiple_choice",
    "question": "Someone claiming to be the system administrator phones and says \"Tell me your password so I can deal with a fault.\" What is the appropriate response?",
    "choices": [
     "Tell them half of it",
     "Send it by email later",
     "Tell no one your password, and call back on the genuine contact number to confirm",
     "Tell them right away because they seem to be in a hurry"
    ],
    "answer": 2,
    "explanation": "A genuine administrator does not normally ask users for their passwords. Pretending to have authority or urgency is typical of social engineering."
   },
   {
    "id": "IQ047",
    "lesson_id": "I07",
    "type": "multiple_choice",
    "question": "What do you call an attack that aims at a specific organization and sends malware in emails whose subject and content look related to its work?",
    "choices": [
     "DoS attack",
     "Credential stuffing attack",
     "Targeted attack (targeted email attack)",
     "Mass spam"
    ],
    "answer": 2,
    "explanation": "The emails are carefully made so that the recipient wants to open them, for example by posing as a business partner or a public body."
   },
   {
    "id": "IQ048",
    "lesson_id": "I07",
    "type": "multiple_choice",
    "question": "Which trick searches documents and notes thrown away as trash for passwords and internal information?",
    "choices": [
     "Zero-day attack",
     "Watering hole attack",
     "Dumpster diving (scavenging)",
     "Shoulder surfing"
    ],
    "answer": 2,
    "explanation": "Dispose of important documents with a shredder, and erase data completely from storage media before discarding them."
   },
   {
    "id": "IQ049",
    "lesson_id": "I08",
    "type": "multiple_choice",
    "question": "Which is the correct difference between a DoS attack and a DDoS attack?",
    "choices": [
     "A DDoS attack aims to steal information",
     "A DDoS attack is launched from many devices (such as a botnet) at the same time",
     "There is no difference between them",
     "A DoS attack always physically destroys the server"
    ],
    "answer": 1,
    "explanation": "The first D in DDoS stands for Distributed. Because there are many sources, simple blocking does not stop it easily."
   },
   {
    "id": "IQ050",
    "lesson_id": "I08",
    "type": "multiple_choice",
    "question": "What do you call a network of many devices that are infected with malware and made to join attacks all at once on an attacker's command?",
    "choices": [
     "Botnet",
     "DMZ",
     "Intranet",
     "VPN"
    ],
    "answer": 0,
    "explanation": "Infected devices (bots) are used for DDoS attacks and sending spam without their owners noticing."
   },
   {
    "id": "IQ051",
    "lesson_id": "I08",
    "type": "multiple_choice",
    "question": "What do you call the measure that restricts access when a large number of requests arrive from the same source in a short time?",
    "choices": [
     "Rate limiting",
     "Stretching",
     "Sandbox",
     "Digital signature"
    ],
    "answer": 0,
    "explanation": "It sets an upper limit on the number of requests in a given time and prevents the service stopping because of excessive access."
   },
   {
    "id": "IQ052",
    "lesson_id": "I08",
    "type": "multiple_choice",
    "question": "Which is an effective defense against a large-scale DDoS attack?",
    "choices": [
     "Making the server's password longer",
     "Using a CDN or a DDoS protection service to spread and absorb the attack traffic",
     "Encrypting stored data",
     "Replacing the hard disk with a larger one"
    ],
    "answer": 1,
    "explanation": "A large attack cannot be absorbed by your own line alone, so it is absorbed by the service of a provider with a high-capacity network."
   },
   {
    "id": "IQ053",
    "lesson_id": "I08",
    "type": "multiple_choice",
    "question": "Which is an appropriate measure to stop IoT devices such as security cameras and routers being misused for DDoS attacks?",
    "choices": [
     "Change the default password and keep the firmware up to date",
     "Move them to a different place",
     "Leave the power on all the time",
     "Use them with the default password"
    ],
    "answer": 0,
    "explanation": "Malware that spreads by targeting IoT devices still using their default passwords (such as Mirai) has been used in large-scale DDoS attacks."
   },
   {
    "id": "IQ054",
    "lesson_id": "I09",
    "type": "multiple_choice",
    "question": "Which is the correct pair of descriptions for \"authentication\" and \"authorization\"?",
    "choices": [
     "Authentication = giving privileges, authorization = confirming identity",
     "Both mean recording logs",
     "Authentication = confirming who someone is, authorization = deciding what that person is allowed to do",
     "Both mean encrypting communication"
    ],
    "answer": 2,
    "explanation": "Confirming who you are at login is authentication. Deciding after login that \"this person may view this file\" is authorization."
   },
   {
    "id": "IQ055",
    "lesson_id": "I09",
    "type": "multiple_choice",
    "question": "Which is an appropriate example of separation of duties?",
    "choices": [
     "Sharing a password within a department",
     "One person handling everything from request to approval and payment",
     "Giving everyone administrator privileges",
     "Having different people request and approve a payment"
    ],
    "answer": 3,
    "explanation": "Dividing work among several people who check each other prevents fraud and mistakes."
   },
   {
    "id": "IQ056",
    "lesson_id": "I09",
    "type": "multiple_choice",
    "question": "Which is the appropriate way to handle the account of someone who has left the organization?",
    "choices": [
     "Disable (delete) it promptly after they leave",
     "Leave it as it is for a year",
     "Raise its privileges to administrator",
     "Share the password so that their successor can use it"
    ],
    "answer": 0,
    "explanation": "Unneeded accounts that are left in place become an entry point for unauthorized access."
   },
   {
    "id": "IQ057",
    "lesson_id": "I09",
    "type": "multiple_choice",
    "question": "What is the main reason it is better not to use an administrator account for everyday work?",
    "choices": [
     "Because the damage is greater if you are infected with malware or make a mistake",
     "Because administrator accounts cannot connect to the internet",
     "Because administrator accounts have no password",
     "Because administrator accounts run slowly"
    ],
    "answer": 0,
    "explanation": "Using a standard account day to day and administrator privileges only when needed is how the principle of least privilege is applied."
   },
   {
    "id": "IQ058",
    "lesson_id": "I09",
    "type": "multiple_choice",
    "question": "What is the purpose of reviewing accounts and privileges regularly?",
    "choices": [
     "To measure the speed of the network",
     "To free up disk space",
     "To make PCs run faster",
     "To check that no unneeded accounts or excessive privileges remain"
    ],
    "answer": 3,
    "explanation": "Privileges that are no longer needed can remain after transfers and departures. They need reviewing regularly."
   },
   {
    "id": "IQ059",
    "lesson_id": "I10",
    "type": "multiple_choice",
    "question": "Which treatment removes a risk by stopping the very activity that causes it?",
    "choices": [
     "Risk retention",
     "Risk reduction",
     "Risk avoidance",
     "Risk transfer"
    ],
    "answer": 2,
    "explanation": "For example, shutting down a service that handles personal information altogether is risk avoidance."
   },
   {
    "id": "IQ060",
    "lesson_id": "I10",
    "type": "multiple_choice",
    "question": "Which treatment makes the likelihood or impact of a risk smaller by applying controls, such as installing antivirus software?",
    "choices": [
     "Risk avoidance",
     "Risk reduction",
     "Risk transfer",
     "Risk retention"
    ],
    "answer": 1,
    "explanation": "This is the most common risk treatment. It includes technical controls, education and so on."
   },
   {
    "id": "IQ061",
    "lesson_id": "I10",
    "type": "multiple_choice",
    "question": "Which treatment accepts a risk without any particular controls, because the impact is small and the controls would cost more?",
    "choices": [
     "Risk reduction",
     "Risk retention (risk acceptance)",
     "Risk avoidance",
     "Risk transfer"
    ],
    "answer": 1,
    "explanation": "Even when the decision is to accept a risk, it is important to recognize and record that the risk exists."
   },
   {
    "id": "IQ062",
    "lesson_id": "I10",
    "type": "multiple_choice",
    "question": "Which is the international standard for the ISMS (information security management system)?",
    "choices": [
     "ISO/IEC 27001",
     "ISO 9001",
     "IEEE 802.11",
     "ISO 14001"
    ],
    "answer": 0,
    "explanation": "ISO 9001 is the management system standard for quality and ISO 14001 for the environment. IEEE 802.11 is the wireless LAN standard."
   },
   {
    "id": "IQ063",
    "lesson_id": "I10",
    "type": "multiple_choice",
    "question": "Which cycle is used in an ISMS to keep improving management continuously?",
    "choices": [
     "Cyber kill chain",
     "3-2-1 rule",
     "Three-way handshake",
     "PDCA cycle (Plan, Do, Check, Act)"
    ],
    "answer": 3,
    "explanation": "Plan → Do → Check → Act is repeated."
   },
   {
    "id": "IQ064",
    "lesson_id": "I10",
    "type": "multiple_choice",
    "question": "Which two factors are usually combined when assessing the size of a risk?",
    "choices": [
     "Number of employees and sales",
     "The likelihood (frequency) of it happening and the size of the impact if it does",
     "Password length and character types",
     "Number of servers and line speed"
    ],
    "answer": 1,
    "explanation": "The size of a risk is assessed by, for example, multiplying likelihood by impact, and this decides the priority of treatment."
   },
   {
    "id": "IQ065",
    "lesson_id": "I11",
    "type": "multiple_choice",
    "question": "Several hundred failed logins to the same account were recorded in a short time. Which attack is suspected?",
    "choices": [
     "Watering hole attack",
     "Brute-force attack",
     "Supply chain attack",
     "CSRF"
    ],
    "answer": 1,
    "explanation": "These are traces of an attack that tries one password after another. If the logs are monitored, it can be noticed early."
   },
   {
    "id": "IQ066",
    "lesson_id": "I11",
    "type": "multiple_choice",
    "question": "Which is an appropriate way to manage logs?",
    "choices": [
     "Collect them in a separate place where they are hard to tamper with, and keep them for a set period",
     "Store them in a shared folder that anyone can edit",
     "Delete all of them every day to save space",
     "Start recording only when a failure occurs"
    ],
    "answer": 0,
    "explanation": "An attacker who has got in will try to delete logs to erase their traces. Forwarding logs to another server and restricting access rights are effective."
   },
   {
    "id": "IQ067",
    "lesson_id": "I11",
    "type": "multiple_choice",
    "question": "Which is an effective defense against brute-force attacks?",
    "choices": [
     "Making passwords shorter",
     "Not recording logs",
     "Showing in the error message exactly which part of the password is wrong",
     "Locking the account temporarily after a set number of failed logins"
    ],
    "answer": 3,
    "explanation": "Limiting the number of attempts makes brute force impractical. Introducing multi-factor authentication is also effective."
   },
   {
    "id": "IQ068",
    "lesson_id": "I11",
    "type": "multiple_choice",
    "question": "What do you call an attack that tries one commonly used password (for example Password1) against many accounts, a little at a time?",
    "choices": [
     "Brute-force attack",
     "Password spraying attack",
     "DoS attack",
     "Zero-day attack"
    ],
    "answer": 1,
    "explanation": "Because there are few failures per account, this attack does not easily trigger account lockout. Logs need to be monitored across the whole organization."
   },
   {
    "id": "IQ069",
    "lesson_id": "I11",
    "type": "multiple_choice",
    "question": "What is the main purpose of checking and monitoring logs regularly?",
    "choices": [
     "To increase the number of software licenses",
     "To find anomalies early and to be able to investigate the cause when an incident happens",
     "To save on the PC's electricity bill",
     "To speed up the network"
    ],
    "answer": 1,
    "explanation": "Logs are a record of \"who did what and when\". They help with both detection and investigation afterwards."
   },
   {
    "id": "IQ070",
    "lesson_id": "I12",
    "type": "multiple_choice",
    "question": "Which is correct about telling a third party someone else's ID and password without that person's permission (in Japan)?",
    "choices": [
     "It violates the Copyright Act",
     "There is no legal problem",
     "It is regulated only by the Act on the Protection of Personal Information",
     "It is prohibited by the Act on Prohibition of Unauthorized Computer Access"
    ],
    "answer": 3,
    "explanation": "The Act on Prohibition of Unauthorized Computer Access prohibits not only unauthorized logins but also improperly obtaining, providing and storing other people's IDs and passwords."
   },
   {
    "id": "IQ071",
    "lesson_id": "I12",
    "type": "multiple_choice",
    "question": "Which Japanese law contains the provision that punishes creating or providing a computer virus without a legitimate reason (the so-called virus creation offense)?",
    "choices": [
     "Telecommunications Business Act",
     "Act on Prohibition of Unauthorized Computer Access",
     "Act on the Protection of Personal Information",
     "Penal Code"
    ],
    "answer": 3,
    "explanation": "It is set out in the Penal Code as \"crimes related to electromagnetic records of unauthorized commands\"."
   },
   {
    "id": "IQ072",
    "lesson_id": "I12",
    "type": "multiple_choice",
    "question": "Which of these is \"personal information\" under Japan's Act on the Protection of Personal Information?",
    "choices": [
     "Information that can identify a specific living individual (such as a name and date of birth)",
     "Weather forecast information",
     "Publicly available share prices",
     "A company's sales data"
    ],
    "answer": 0,
    "explanation": "Information that can identify a specific individual, such as a name or a photo of a face, is personal information."
   },
   {
    "id": "IQ073",
    "lesson_id": "I12",
    "type": "multiple_choice",
    "question": "Which Japanese law sets out the basic principles of national cybersecurity and the responsibilities of the national and local governments and others?",
    "choices": [
     "Copyright Act",
     "Act on Prohibition of Unauthorized Computer Access",
     "Act on Electronic Signatures and Certification Business",
     "Basic Act on Cybersecurity"
    ],
    "answer": 3,
    "explanation": "This law is the foundation of the national cybersecurity strategy."
   },
   {
    "id": "IQ074",
    "lesson_id": "I12",
    "type": "multiple_choice",
    "question": "Which way of practicing security techniques is legally unproblematic?",
    "choices": [
     "Sending attack code to a public website without permission to see what happens",
     "Trying attacks on an acquaintance's website without permission",
     "Practicing in a CTF or in a practice environment you set up yourself",
     "Trying to log in to your school's server without permission"
    ],
    "answer": 2,
    "explanation": "Attacking a system without permission can be a crime even if the purpose is practice. Always practice in an authorized environment."
   },
   {
    "id": "IQ075",
    "lesson_id": "I12",
    "type": "multiple_choice",
    "question": "In Japan, when a leak of personal data occurs that is highly likely to harm individuals' rights and interests (such as a leak of sensitive personal information, or a leak affecting more than 1,000 people), what is a business required to do?",
    "choices": [
     "Place an advertisement in a newspaper",
     "Only report it to the police",
     "Report to the Personal Information Protection Commission and notify the individuals concerned",
     "Nothing in particular"
    ],
    "answer": 2,
    "explanation": "The amended Act on the Protection of Personal Information, in force since April 2022, made reporting and notification of individuals mandatory for certain leaks."
   }
  ],
  "advanced": [
   {
    "id": "AQ001",
    "lesson_id": "A01",
    "type": "multiple_choice",
    "question": "Which risk came first in the OWASP Top 10 (2021 edition)?",
    "choices": [
     "Injection",
     "Broken access control",
     "Cross-site scripting",
     "Security misconfiguration"
    ],
    "answer": 1,
    "explanation": "In the 2021 edition, \"broken access control\" came first. Injection was third, and XSS was merged into injection."
   },
   {
    "id": "AQ002",
    "lesson_id": "A01",
    "type": "multiple_choice",
    "question": "Just by rewriting \"/orders/1001\" in the URL to \"/orders/1002\", someone else's order information can be seen. Which category is this problem closest to?",
    "choices": [
     "Cryptographic failures",
     "Broken access control",
     "SSRF",
     "Security logging and monitoring failures"
    ],
    "answer": 1,
    "explanation": "The server does not check whether the logged-in user is allowed to access that data, so this is broken access control (IDOR)."
   },
   {
    "id": "AQ003",
    "lesson_id": "A02",
    "type": "multiple_choice",
    "question": "Which pair gives the threat that the \"E\" in STRIDE stands for and the control that mainly addresses it?",
    "choices": [
     "Encryption ― key management",
     "Elevation of privilege ― authorization",
     "Eavesdropping ― encryption",
     "Exploit ― patching"
    ],
    "answer": 1,
    "explanation": "The E in STRIDE is elevation of privilege, which is countered by authorization (proper access control)."
   },
   {
    "id": "AQ004",
    "lesson_id": "A02",
    "type": "multiple_choice",
    "question": "Which is the most appropriate control against the \"R (Repudiation)\" in STRIDE?",
    "choices": [
     "Encrypting communication",
     "Load balancing",
     "Recording operation logs in a form that cannot be altered, and digital signatures",
     "Escaping input values"
    ],
    "answer": 2,
    "explanation": "Against someone denying \"I did not do it\", a trail of evidence from trustworthy logs and digital signatures is effective."
   },
   {
    "id": "AQ005",
    "lesson_id": "A03",
    "type": "multiple_choice",
    "question": "Which is the correct order of the incident response flow set out in NIST SP 800-61 Rev. 2?",
    "choices": [
     "Detection and analysis → preparation → post-incident activity → containment, eradication and recovery",
     "Preparation → detection and analysis → containment, eradication and recovery → post-incident activity",
     "Containment → preparation → detection → post-incident activity",
     "Post-incident activity → preparation → detection and analysis → recovery"
    ],
    "answer": 1,
    "explanation": "The order is preparation, detection and analysis, containment, eradication and recovery, and post-incident activity (applying lessons learned). The lessons from post-incident activity feed into the next round of preparation. Note that Rev. 3, published in April 2025, was restructured around the functions of NIST CSF 2.0 (such as Detect, Respond and Recover)."
   },
   {
    "id": "AQ006",
    "lesson_id": "A03",
    "type": "multiple_choice",
    "question": "From a forensics point of view, which is the most appropriate first response to a device suspected of malware infection?",
    "choices": [
     "Turn off the power at once and reinstall the OS",
     "Disconnect it from the network and, if possible, preserve volatile information such as memory before investigating",
     "Keep using it as it is and see what happens",
     "Delete all infected files and then report"
    ],
    "answer": 1,
    "explanation": "The device is disconnected from the network to stop the spread, but turning off the power erases the evidence in memory, so the most volatile information is preserved first."
   },
   {
    "id": "AQ007",
    "lesson_id": "A04",
    "type": "multiple_choice",
    "question": "Which is the correct idea behind zero trust?",
    "choices": [
     "Access from the internal network is trusted unconditionally",
     "Installing one firewall is enough",
     "Every access is verified every time, wherever it comes from, and allowed with the minimum privileges",
     "Once connected to the VPN, a user can access every internal system"
    ],
    "answer": 2,
    "explanation": "Zero trust is the idea of \"never trust, always verify\". Each access is verified whether it comes from inside or outside."
   },
   {
    "id": "AQ008",
    "lesson_id": "A05",
    "type": "multiple_choice",
    "question": "Which system collects logs from many kinds of devices, correlates them, and detects signs of attack?",
    "choices": [
     "SIEM",
     "SBOM",
     "CVSS",
     "DMZ"
    ],
    "answer": 0,
    "explanation": "A SIEM (security information and event management) system collects and correlates logs to detect threats."
   },
   {
    "id": "AQ009",
    "lesson_id": "A05",
    "type": "multiple_choice",
    "question": "Which knowledge base organizes attackers' tactics and techniques on the basis of real attack cases?",
    "choices": [
     "OWASP Top 10",
     "MITRE ATT&CK",
     "ISO/IEC 27001",
     "CVSS"
    ],
    "answer": 1,
    "explanation": "MITRE ATT&CK organizes attackers' tactics and techniques, and is used to evaluate detection and defenses."
   },
   {
    "id": "AQ010",
    "lesson_id": "A06",
    "type": "multiple_choice",
    "question": "What can be said when forward secrecy (PFS) is in place?",
    "choices": [
     "Even if the server's private key leaks later, communications recorded in the past cannot be decrypted",
     "The communication speed doubles",
     "Certificates are no longer needed",
     "Hash functions are no longer needed"
    ],
    "answer": 0,
    "explanation": "A throwaway key is created for each session with (EC)DHE or similar, so past communications stay protected even if the long-term private key leaks."
   },
   {
    "id": "AQ011",
    "lesson_id": "A06",
    "type": "multiple_choice",
    "question": "Which mechanism makes the browser remember \"always connect to this site over HTTPS\" and prevents downgrades to HTTP?",
    "choices": [
     "CSP",
     "HSTS",
     "CORS",
     "SPF"
    ],
    "answer": 1,
    "explanation": "HSTS (HTTP Strict Transport Security) forces connections to use HTTPS and prevents downgrade attacks."
   },
   {
    "id": "AQ012",
    "lesson_id": "A07",
    "type": "multiple_choice",
    "question": "In the cloud shared responsibility model, which of these is the customer's responsibility in every model (IaaS, PaaS and SaaS)?",
    "choices": [
     "Physical guarding of the data center",
     "Updating the hypervisor",
     "Managing the stored data and the accounts (access rights)",
     "Dealing with network equipment failures"
    ],
    "answer": 2,
    "explanation": "The physical infrastructure is the provider's responsibility, but managing data, accounts and access rights is the customer's responsibility in every model."
   },
   {
    "id": "AQ013",
    "lesson_id": "A08",
    "type": "multiple_choice",
    "question": "Which is the most appropriate way to generate a password reset token in Python?",
    "choices": [
     "Use random.randint()",
     "Use the value of time.time() as it is",
     "Use secrets.token_urlsafe()",
     "Reverse the user name"
    ],
    "answer": 2,
    "explanation": "The random module produces predictable pseudo-random numbers and is not suitable for security purposes. Use the secrets module."
   },
   {
    "id": "AQ014",
    "lesson_id": "A08",
    "type": "multiple_choice",
    "question": "When running an OS command in Python with a file name received from outside, which way of writing it is the safer?",
    "choices": [
     "subprocess.run(\"ls \" + filename, shell=True)",
     "os.system(\"ls \" + filename)",
     "subprocess.run([\"ls\", filename])",
     "eval(\"ls \" + filename)"
    ],
    "answer": 2,
    "explanation": "If the arguments are passed as a list and shell=True is not used, the input is not interpreted by the shell, which helps prevent OS command injection."
   },
   {
    "id": "AQ015",
    "lesson_id": "A09",
    "type": "multiple_choice",
    "question": "Which is the correct pair of descriptions for CVE and CVSS?",
    "choices": [
     "CVE = severity rating standard, CVSS = vulnerability identifier",
     "CVE = vulnerability identifier, CVSS = severity rating standard",
     "CVE = cipher, CVSS = log format",
     "CVE = a vulnerability site in Japan, CVSS = an international standard"
    ],
    "answer": 1,
    "explanation": "CVE is a common identifier for each vulnerability, and CVSS is a standard that rates severity from 0.0 to 10.0."
   },
   {
    "id": "AQ016",
    "lesson_id": "A09",
    "type": "multiple_choice",
    "question": "When a new serious vulnerability is announced, which of these helps you find out quickly whether your own product is affected?",
    "choices": [
     "SBOM (software bill of materials)",
     "The staff list",
     "The network bandwidth graph",
     "The servers' power schedule"
    ],
    "answer": 0,
    "explanation": "If an SBOM tells you which libraries and versions you use, you can check at once whether you are using the vulnerable component."
   },
   {
    "id": "AQ017",
    "lesson_id": "A10",
    "type": "multiple_choice",
    "question": "What is the ransomware technique called in which the attackers not only encrypt data but also threaten to publish data they stole beforehand, to force payment?",
    "choices": [
     "Double extortion",
     "Watering hole attack",
     "Cryptojacking",
     "Drive-by download"
    ],
    "answer": 0,
    "explanation": "It is called \"double extortion\" because the threat has two parts: encryption and publication of information."
   },
   {
    "id": "AQ018",
    "lesson_id": "A10",
    "type": "multiple_choice",
    "question": "Which technique publishes a malicious package with a name similar to a popular one, so that it is installed through a typing mistake?",
    "choices": [
     "Typosquatting",
     "Phishing",
     "Sniffing",
     "Port scanning"
    ],
    "answer": 0,
    "explanation": "It is called typosquatting because it targets typos (typing mistakes). Check the package name and the publisher carefully."
   },
   {
    "id": "AQ019",
    "lesson_id": "A01",
    "type": "multiple_choice",
    "question": "Which attack abuses a feature that sends requests from the server to a URL specified by the user, to reach the internal network or a cloud metadata service?",
    "choices": [
     "SSRF",
     "XSS",
     "CSRF",
     "Clickjacking"
    ],
    "answer": 0,
    "explanation": "SSRF (server-side request forgery) uses the server as a stepping stone to reach internal resources. It is countered by, for example, an allowlist of destinations."
   },
   {
    "id": "AQ020",
    "lesson_id": "A01",
    "type": "multiple_choice",
    "question": "Which is the most appropriate way to address \"insecure design\" in the OWASP Top 10?",
    "choices": [
     "Only installing a WAF after release",
     "Increasing the number of characters in passwords",
     "Showing detailed error messages",
     "Carrying out threat modeling at the design stage and building in security requirements"
    ],
    "answer": 3,
    "explanation": "A flaw in the design cannot be prevented even by a perfect implementation. It has to be addressed at the design stage (shift left)."
   },
   {
    "id": "AQ021",
    "lesson_id": "A01",
    "type": "multiple_choice",
    "question": "Which is the most appropriate implementation for preventing broken access control?",
    "choices": [
     "Relying only on making IDs long numbers that are hard to guess",
     "Verifying on the server, for each request, that the user has rights to the data in question",
     "Checking rights with JavaScript in the browser",
     "Preventing the action by not showing the button on screen"
    ],
    "answer": 1,
    "explanation": "The user can alter what is shown on screen and what runs in the browser. Rights must always be checked on the server."
   },
   {
    "id": "AQ022",
    "lesson_id": "A01",
    "type": "multiple_choice",
    "question": "In production, a stack trace and the database structure are shown on screen when an error occurs. Which category is closest?",
    "choices": [
     "Security misconfiguration",
     "Cryptographic failures",
     "Software supply chain problems",
     "SSRF"
    ],
    "answer": 0,
    "explanation": "Detailed debugging output gives attackers clues. In production, show only a general error message and record the details in the logs."
   },
   {
    "id": "AQ023",
    "lesson_id": "A02",
    "type": "multiple_choice",
    "question": "Which pair gives the threat that the \"S\" in STRIDE stands for and the control that mainly addresses it?",
    "choices": [
     "Spoofing ― encryption",
     "Sniffing ― availability",
     "SQL injection ― input validation",
     "Spoofing ― authentication"
    ],
    "answer": 3,
    "explanation": "The S in STRIDE is spoofing: the threat of pretending to be another person or system. It is countered by authentication."
   },
   {
    "id": "AQ024",
    "lesson_id": "A02",
    "type": "multiple_choice",
    "question": "Which security property does the \"T (Tampering)\" in STRIDE mainly violate?",
    "choices": [
     "Non-repudiation",
     "Availability",
     "Confidentiality",
     "Integrity"
    ],
    "answer": 3,
    "explanation": "Tampering with data or code damages integrity. It is countered with hashes, signatures and access control."
   },
   {
    "id": "AQ025",
    "lesson_id": "A02",
    "type": "multiple_choice",
    "question": "Which security property corresponds to the \"D (Denial of service)\" in STRIDE?",
    "choices": [
     "Availability",
     "Authentication",
     "Authorization",
     "Integrity"
    ],
    "answer": 0,
    "explanation": "Denial of service is a threat to availability. It is countered with redundancy, rate limiting and so on."
   },
   {
    "id": "AQ026",
    "lesson_id": "A02",
    "type": "multiple_choice",
    "question": "What is the purpose of making \"trust boundaries\" clear in threat modeling?",
    "choices": [
     "To identify where data passes between areas with different levels of trust, and to judge whether validation or authentication is needed",
     "To count the lines of source code",
     "To measure the speed of the network",
     "To record developers' working hours"
    ],
    "answer": 0,
    "explanation": "Places where data crosses a trust boundary, such as between the internet and a server, are easy to attack, so input validation and authentication matter there."
   },
   {
    "id": "AQ027",
    "lesson_id": "A03",
    "type": "multiple_choice",
    "question": "Which is the best description of the role of a CSIRT?",
    "choices": [
     "The department that audits the company's accounts",
     "The department in charge of selling products",
     "The team that receives, handles and coordinates security incidents within the organization",
     "The team in charge of designing the website"
    ],
    "answer": 2,
    "explanation": "The CSIRT is the point of contact for incident response and also handles cooperation inside and outside the organization (with JPCERT/CC, for example)."
   },
   {
    "id": "AQ028",
    "lesson_id": "A03",
    "type": "multiple_choice",
    "question": "Which is an appropriate example of \"containment\" in incident response?",
    "choices": [
     "Applying for a budget for a new security product",
     "Holding annual training for employees",
     "Writing a report afterwards",
     "Isolating infected devices from the network and disabling compromised accounts"
    ],
    "answer": 3,
    "explanation": "Containment is the response that stops the damage spreading."
   },
   {
    "id": "AQ029",
    "lesson_id": "A03",
    "type": "multiple_choice",
    "question": "In a forensic investigation, what is often used to show that an acquired disk image has not changed since it was acquired?",
    "choices": [
     "The name of the file's author",
     "The capacity of the disk",
     "Only a screenshot of the screen",
     "Recording and comparing hash values"
    ],
    "answer": 3,
    "explanation": "If you record the hash value at acquisition and it matches when recalculated later, you can show the image has not been altered."
   },
   {
    "id": "AQ030",
    "lesson_id": "A03",
    "type": "multiple_choice",
    "question": "What is the purpose of recording the \"chain of custody\" when preserving evidence?",
    "choices": [
     "To delete the evidence quickly",
     "To record who handled the evidence, when and how, and so show that the evidence is reliable",
     "To contact the attacker",
     "To calculate the cost of the investigation"
    ],
    "answer": 1,
    "explanation": "If the record of handling is broken, it can no longer be shown that the evidence was not altered, and its value as legal evidence may be lost."
   },
   {
    "id": "AQ031",
    "lesson_id": "A03",
    "type": "multiple_choice",
    "question": "Which is the most appropriate thing to do in the \"post-incident activity (using lessons learned)\" stage of incident response?",
    "choices": [
     "Go back to normal work without doing anything",
     "Make punishing the people who responded the only aim",
     "Erase all the related logs",
     "Look back on the cause and the response, and turn them into measures to prevent recurrence and improvements to the response procedure"
    ],
    "answer": 3,
    "explanation": "A review that focuses on improving the system, not on assigning blame, is what matters."
   },
   {
    "id": "AQ032",
    "lesson_id": "A04",
    "type": "multiple_choice",
    "question": "Which is the correct idea behind defense in depth?",
    "choices": [
     "Introduce only the single strongest control",
     "Line up many units of the same product",
     "Layer several different controls so that if one is breached, the others can still stop the attack",
     "Strengthen only the perimeter firewall"
    ],
    "answer": 2,
    "explanation": "Controls are layered at different levels, such as the entrance, the inside, the exit, the endpoints and the data."
   },
   {
    "id": "AQ033",
    "lesson_id": "A04",
    "type": "multiple_choice",
    "question": "Which technique divides the network into small sections and limits traffic between them to the minimum necessary, to prevent lateral movement after an intrusion?",
    "choices": [
     "Caching",
     "Load balancing",
     "NAT",
     "Micro-segmentation"
    ],
    "answer": 3,
    "explanation": "Even if an attacker gets in, the damage can be confined to one part, so it is one of the typical ways of implementing zero trust."
   },
   {
    "id": "AQ034",
    "lesson_id": "A04",
    "type": "multiple_choice",
    "question": "Which product monitors behavior on endpoints, detects signs of compromise, and supports investigation and response?",
    "choices": [
     "DNS",
     "WAF",
     "EDR",
     "CDN"
    ],
    "answer": 2,
    "explanation": "EDR (endpoint detection and response) assumes that intrusion will happen and supports detection and response."
   },
   {
    "id": "AQ035",
    "lesson_id": "A04",
    "type": "multiple_choice",
    "question": "Which is a correct weakness of the traditional perimeter defense model?",
    "choices": [
     "Encrypted communication is not possible",
     "Once an attacker is inside, internal traffic is trusted, so the damage spreads easily",
     "It cannot stop any attacks from outside at all",
     "It can only be used with cloud services"
    ],
    "answer": 1,
    "explanation": "The blurring of the line between \"inside\" and \"outside\", as cloud use and remote work spread, is another reason zero trust has become widespread."
   },
   {
    "id": "AQ036",
    "lesson_id": "A04",
    "type": "multiple_choice",
    "question": "In zero trust, which is the appropriate way to decide whether to allow an access?",
    "choices": [
     "Allow everything if the IP address is in the same country",
     "Decide only by whether the connection comes from the internal network",
     "Allow forever once the user has logged in",
     "Decide each time by combining the result of user authentication, the state of the device (such as its patch level) and the circumstances of the access"
    ],
    "answer": 3,
    "explanation": "Zero trust is the idea of \"never trust, always verify\"."
   },
   {
    "id": "AQ037",
    "lesson_id": "A05",
    "type": "multiple_choice",
    "question": "Which is an appropriate example of an IoC (indicator of compromise)?",
    "choices": [
     "Employees' working hours",
     "The purchase price of a server",
     "IP addresses, domains and malware hash values used in an attack",
     "The design of a website"
    ],
    "answer": 2,
    "explanation": "Sharing and matching IoCs lets other organizations detect the same attack too."
   },
   {
    "id": "AQ038",
    "lesson_id": "A05",
    "type": "multiple_choice",
    "question": "What is the main role of a SOC (security operations center)?",
    "choices": [
     "Planning new products",
     "Managing software sales",
     "Monitoring systems and networks, and detecting, analyzing and reporting attacks",
     "Calculating employees' pay"
    ],
    "answer": 2,
    "explanation": "The SOC handles monitoring and analysis, and works with the CSIRT when an incident occurs."
   },
   {
    "id": "AQ039",
    "lesson_id": "A05",
    "type": "multiple_choice",
    "question": "What is the value of applying the cyber kill chain to defense?",
    "choices": [
     "You can identify the attacker and strike back",
     "One product can stop every attack",
     "Logs no longer need to be kept",
     "You can divide an attack into stages and plan controls that break the chain at an early stage"
    ],
    "answer": 3,
    "explanation": "Placing controls at each stage from reconnaissance to actions on objectives raises the chance of stopping the attack somewhere."
   },
   {
    "id": "AQ040",
    "lesson_id": "A05",
    "type": "multiple_choice",
    "question": "In MITRE ATT&CK, which category corresponds to the attacker's \"goal (why they take that action)\"?",
    "choices": [
     "IoC",
     "Procedures",
     "Tactics",
     "Techniques"
    ],
    "answer": 2,
    "explanation": "Tactics are goals such as \"initial access\" and \"privilege escalation\". Techniques are the ways of achieving those goals."
   },
   {
    "id": "AQ041",
    "lesson_id": "A06",
    "type": "multiple_choice",
    "question": "Which is a correct feature of TLS 1.3?",
    "choices": [
     "Many weak ciphers were kept for compatibility with old cipher suites",
     "It does not use symmetric-key cryptography",
     "It does not encrypt, and only authenticates",
     "Static RSA key exchange, which has no forward secrecy, was removed and the handshake was simplified"
    ],
    "answer": 3,
    "explanation": "TLS 1.3 removed static RSA key exchange, which has no forward secrecy. In normal connections that use certificates, (EC)DHE provides forward secrecy."
   },
   {
    "id": "AQ042",
    "lesson_id": "A06",
    "type": "multiple_choice",
    "question": "Which is the correct role of ECDHE?",
    "choices": [
     "Sharing a symmetric key safely using a temporary key for each session (key exchange)",
     "Calculating the hash value of a file",
     "Storing passwords",
     "Issuing digital certificates"
    ],
    "answer": 0,
    "explanation": "Because a throwaway key is used for each session, forward secrecy is obtained."
   },
   {
    "id": "AQ043",
    "lesson_id": "A06",
    "type": "multiple_choice",
    "question": "What is the main reason TLS can prevent man-in-the-middle (MITM) attacks?",
    "choices": [
     "Verifying the server certificate confirms that the other party is the legitimate server, and the content of the communication is encrypted",
     "Because the IP address is fixed",
     "Because the port number is 443",
     "Because the browser cache is used"
    ],
    "answer": 0,
    "explanation": "Certificate verification lets you tell a fake server apart. That is why it is dangerous to ignore a certificate warning and connect anyway."
   },
   {
    "id": "AQ044",
    "lesson_id": "A06",
    "type": "multiple_choice",
    "question": "Which of these is NOT recommended as a web server setting today?",
    "choices": [
     "Using TLS 1.2 or later",
     "Leaving TLS 1.0 and TLS 1.1 enabled",
     "Preferring key exchange methods with forward secrecy",
     "Setting HSTS"
    ],
    "answer": 1,
    "explanation": "TLS 1.0 and 1.1 have known weaknesses, so they are deprecated and are disabled in the major browsers."
   },
   {
    "id": "AQ045",
    "lesson_id": "A06",
    "type": "multiple_choice",
    "question": "What is the list of domains built into browsers in advance, so that HSTS takes effect from the very first visit, called?",
    "choices": [
     "Root certificate store",
     "HSTS preload list",
     "DNS blacklist",
     "CRL"
    ],
    "answer": 1,
    "explanation": "Normal HSTS takes effect only after one visit. A domain registered on the preload list has HTTPS enforced from the first visit."
   },
   {
    "id": "AQ046",
    "lesson_id": "A07",
    "type": "multiple_choice",
    "question": "When using IaaS, which of these falls within the customer's responsibility?",
    "choices": [
     "The data center's power equipment",
     "Physical entry control at the data center",
     "Hardware maintenance of the physical servers",
     "Applying patches to the OS on virtual machines"
    ],
    "answer": 3,
    "explanation": "In IaaS, everything from the OS upward (OS, middleware, applications and data) is the customer's responsibility."
   },
   {
    "id": "AQ047",
    "lesson_id": "A07",
    "type": "multiple_choice",
    "question": "Which main responsibility stays with the customer even when using SaaS?",
    "choices": [
     "Managing accounts and access rights, and handling the data that is stored",
     "Fixing the application's source code",
     "Applying patches to the server OS",
     "Managing middleware versions"
    ],
    "answer": 0,
    "explanation": "Even with SaaS, the customer manages who things are shared with and which data is put there."
   },
   {
    "id": "AQ048",
    "lesson_id": "A07",
    "type": "multiple_choice",
    "question": "Which mechanism continuously detects cloud misconfigurations (such as storage set to public) and supports fixing them?",
    "choices": [
     "CDN",
     "VPN",
     "DNS",
     "CSPM"
    ],
    "answer": 3,
    "explanation": "CSPM (cloud security posture management) compares cloud settings against rules and detects problems."
   },
   {
    "id": "AQ049",
    "lesson_id": "A07",
    "type": "multiple_choice",
    "question": "Customer data placed in cloud storage could be viewed by anyone. What is the most common cause?",
    "choices": [
     "A power cut at the cloud provider's data center",
     "A slow network line",
     "The screen settings on the user's PC",
     "A mistake in the access permission settings (a wrong public setting)"
    ],
    "answer": 3,
    "explanation": "Most cloud data leaks come from misconfiguration on the customer's side, not from a problem on the provider's side."
   },
   {
    "id": "AQ050",
    "lesson_id": "A07",
    "type": "multiple_choice",
    "question": "Which is the appropriate way to handle a cloud root (top-level) account?",
    "choices": [
     "Set up multi-factor authentication, do not use it for everyday work, and use individual users or roles with the minimum necessary privileges",
     "Issue an access key and embed it in source code",
     "Share the root account among everyone",
     "Set no password"
    ],
    "answer": 0,
    "explanation": "The root account can perform every operation, so the damage is enormous if it is taken over."
   },
   {
    "id": "AQ051",
    "lesson_id": "A08",
    "type": "multiple_choice",
    "question": "Which is a dangerous way to load data received from an untrusted external source in Python?",
    "choices": [
     "Checking it against an allowlist before using it",
     "Loading it with json.loads()",
     "Validating the value and then converting it with int()",
     "Loading it with pickle.loads()"
    ],
    "answer": 3,
    "explanation": "pickle can run arbitrary code when loading, so it is not used for untrusted data."
   },
   {
    "id": "AQ052",
    "lesson_id": "A08",
    "type": "multiple_choice",
    "question": "Which is the correct way to write code that prevents SQL injection with Python's sqlite3?",
    "choices": [
     "cur.execute(\"SELECT * FROM users WHERE name = ?\", (name,))",
     "cur.execute(\"SELECT * FROM users WHERE name = '%s'\" % name)",
     "cur.execute(f\"SELECT * FROM users WHERE name = '{name}'\")",
     "cur.execute(\"SELECT * FROM users WHERE name = '\" + name + \"'\")"
    ],
    "answer": 0,
    "explanation": "Use the \"?\" placeholder and pass the value separately. Building SQL by joining strings or with f-strings is dangerous."
   },
   {
    "id": "AQ053",
    "lesson_id": "A08",
    "type": "multiple_choice",
    "question": "Which tool checks whether the dependency packages used in a Python project have known vulnerabilities?",
    "choices": [
     "pickle",
     "black",
     "pip-audit",
     "venv"
    ],
    "answer": 2,
    "explanation": "pip-audit checks installed packages against a vulnerability database. venv is for virtual environments and black is a code formatter."
   },
   {
    "id": "AQ054",
    "lesson_id": "A08",
    "type": "multiple_choice",
    "question": "Which tool statically analyzes Python source code and detects dangerous code such as the use of eval or shell=True in subprocess?",
    "choices": [
     "tkinter",
     "pip-audit",
     "pytest",
     "Bandit"
    ],
    "answer": 3,
    "explanation": "Bandit points out code that is likely to have security problems. pytest is for testing and tkinter is a GUI library."
   },
   {
    "id": "AQ055",
    "lesson_id": "A08",
    "type": "multiple_choice",
    "question": "Which is the most appropriate way to handle secrets such as API keys and passwords?",
    "choices": [
     "Do not write them in source code. Load them from environment variables or a secrets management service",
     "Write them directly in source code and publish it with Git",
     "Write them in comments",
     "Include them in file names"
    ],
    "answer": 0,
    "explanation": "Once a secret has been published in Git, it is hard to remove it completely from the history. If one leaks, revoke it and issue a new one at once."
   },
   {
    "id": "AQ056",
    "lesson_id": "A09",
    "type": "multiple_choice",
    "question": "Which is the correct description of the \"KEV (Known Exploited Vulnerabilities) catalog\" published by CISA?",
    "choices": [
     "A format for a software bill of materials",
     "A standard that rates the severity of vulnerabilities from 0 to 10",
     "A scheme that gives an identifier to every vulnerability",
     "A list of vulnerabilities confirmed to have been exploited, useful for prioritizing responses"
    ],
    "answer": 3,
    "explanation": "The identifier is CVE, the severity rating standard is CVSS, and the bill of materials is the SBOM. KEV helps you judge \"whether it is actually being used in attacks\"."
   },
   {
    "id": "AQ057",
    "lesson_id": "A09",
    "type": "multiple_choice",
    "question": "Which is the correct range of values for the CVSS base score?",
    "choices": [
     "A to E",
     "0 to 100",
     "1 to 5",
     "0.0 to 10.0"
    ],
    "answer": 3,
    "explanation": "The larger the value, the more severe. For example, 9.0 or above is classed as \"Critical\"."
   },
   {
    "id": "AQ058",
    "lesson_id": "A09",
    "type": "multiple_choice",
    "question": "Which is the most appropriate way to think about prioritizing vulnerability responses?",
    "choices": [
     "Consider not only the CVSS value but also real-world exploitation and the impact on your own systems (such as whether they are exposed to the internet)",
     "Deal with them all together in the once-a-year scheduled maintenance",
     "Deal with them in order from the oldest announcement date",
     "Dealing with them mechanically from the highest CVSS value down is enough"
    ],
    "answer": 0,
    "explanation": "The CVSS base value is a general severity. Decide priority by also considering exploitation (KEV and so on) and your own environment."
   },
   {
    "id": "AQ059",
    "lesson_id": "A09",
    "type": "multiple_choice",
    "question": "Which is the correct description of JVN?",
    "choices": [
     "The name of an antivirus product",
     "A portal site that provides vulnerability-related information and countermeasures for software and other products used in Japan",
     "An international standard for rating the severity of vulnerabilities",
     "The name of a cryptographic algorithm"
    ],
    "answer": 1,
    "explanation": "JVN (Japan Vulnerability Notes) is run jointly by JPCERT/CC and IPA."
   },
   {
    "id": "AQ060",
    "lesson_id": "A09",
    "type": "multiple_choice",
    "question": "A vulnerability has been announced, but the patch cannot be applied right away. What is the appropriate response?",
    "choices": [
     "Stop collecting logs from the system concerned",
     "Do not share the vulnerability information within the company",
     "Do nothing until a patch is available",
     "Apply the workarounds the vendor gives (such as disabling a feature, restricting access, or protecting with a WAF) and plan the patching"
    ],
    "answer": 3,
    "explanation": "Use workarounds to make an attack harder, while monitoring the impact and planning the patching."
   },
   {
    "id": "AQ061",
    "lesson_id": "A10",
    "type": "multiple_choice",
    "question": "Which is a correct example of a supply chain attack?",
    "choices": [
     "Trying passwords by brute force",
     "Peeking at a passer-by's smartphone screen",
     "Sending the target's server a huge number of requests to stop it",
     "Getting into the real target company through a business partner or subsidiary with weak security"
    ],
    "answer": 3,
    "explanation": "Controls are needed that cover not only your own company but also business partners and software suppliers."
   },
   {
    "id": "AQ062",
    "lesson_id": "A10",
    "type": "multiple_choice",
    "question": "Which is an appropriate defense against software supply chain attacks?",
    "choices": [
     "Treat a package as the same one if the name is similar, and install it",
     "Pin the versions of dependency packages, verify hash values and signatures, and keep track of the makeup with an SBOM",
     "Give every developer administrator privileges on production",
     "Always update dependency packages automatically to the latest version without checking them"
    ],
    "answer": 1,
    "explanation": "Knowing and verifying what you take in, and from where, is the basis of supply chain security."
   },
   {
    "id": "AQ063",
    "lesson_id": "A10",
    "type": "multiple_choice",
    "question": "Which route of intrusion has been reported especially often in recent ransomware damage in Japan?",
    "choices": [
     "Exploiting vulnerabilities or credentials of VPN devices and Remote Desktop",
     "A fax sent to the wrong number",
     "Paper documents sent by post",
     "A monitor failure"
    ],
    "answer": 0,
    "explanation": "In the National Police Agency's reports, intrusions through VPN devices and Remote Desktop account for most cases. Fixing vulnerabilities in internet-facing devices and using multi-factor authentication are important."
   },
   {
    "id": "AQ064",
    "lesson_id": "A10",
    "type": "multiple_choice",
    "question": "Which is the most appropriate preparation against ransomware damage?",
    "choices": [
     "Just take out insurance, because paying the ransom always restores everything",
     "Delete all the logs if infected",
     "Keep backups only in a shared folder on the same network",
     "Prepare offline or immutable (unchangeable) backups and practice the recovery procedure"
    ],
    "answer": 3,
    "explanation": "Attackers go after backups too, encrypting or deleting them. Paying does not guarantee recovery or deletion of the stolen data."
   },
   {
    "id": "AQ065",
    "lesson_id": "A10",
    "type": "multiple_choice",
    "question": "Which is correct about IPA's \"10 Major Security Threats\"?",
    "choices": [
     "It covers only threats to individuals",
     "It is a ranking of antivirus software",
     "IPA selects and publishes it every year, based on incidents and other events of the previous year",
     "The International Organization for Standardization publishes it every 10 years"
    ],
    "answer": 2,
    "explanation": "Threats are selected from two viewpoints, \"individuals\" and \"organizations\". Check the latest edition to see which threats are getting attention now."
   }
  ]
 },
 "websites": {
  "updated": "2026-11-16",
  "groups": [
   {
    "title": "Check the latest threats and alerts",
    "description": "Sites that publish information on new attack methods and vulnerabilities that need action right away. Make a habit of looking about once a week. Most of these sites are in Japanese.",
    "sites": [
     {
      "name": "IPA: Important Security Information",
      "url": "https://www.ipa.go.jp/security/security-alert/index.html",
      "level": "Beginner and up",
      "description": "Summarizes countermeasures for users on highly urgent vulnerabilities and attacks. (Japanese)"
     },
     {
      "name": "JPCERT/CC: Alerts",
      "url": "https://www.jpcert.or.jp/at/",
      "level": "Intermediate and up",
      "description": "Alerts on vulnerabilities and attacks that may cause widespread damage in Japan. Aimed at staff in organizations. (Japanese)"
     },
     {
      "name": "JVN (vulnerability countermeasure information portal)",
      "url": "https://jvn.jp/",
      "level": "Intermediate and up",
      "description": "Vulnerabilities and countermeasures for products used in Japan. Run jointly by JPCERT/CC and IPA. (Japanese)"
     },
     {
      "name": "Council of Anti-Phishing Japan: Urgent Information",
      "url": "https://www.antiphishing.jp/news/alert/",
      "level": "Beginner and up",
      "description": "Shows real phishing emails and fake sites currently in circulation, with screenshots. (Japanese)"
     },
     {
      "name": "National Police Agency: Cyber Affairs Bureau",
      "url": "https://www.npa.go.jp/bureau/cyber/",
      "level": "Beginner and up",
      "description": "Publishes the state of cybercrime (such as statistics on ransomware damage) and alerts. (Japanese)"
     },
     {
      "name": "CISA KEV Catalog",
      "url": "https://www.cisa.gov/known-exploited-vulnerabilities-catalog",
      "level": "Advanced",
      "description": "A list of vulnerabilities confirmed to have been exploited. Used for prioritizing responses. (English)"
     }
    ]
   },
   {
    "title": "Learn from the basics (for beginners)",
    "description": "Easy-to-follow materials made by public bodies for the general public.",
    "sites": [
     {
      "name": "IPA: Koko kara Security! (Security starts here)",
      "url": "https://www.ipa.go.jp/security/kokokara/",
      "level": "Beginner",
      "description": "A portal that gathers learning materials and consultation services on information security. (Japanese)"
     },
     {
      "name": "Ministry of Internal Affairs and Communications: Cybersecurity Site for the Public",
      "url": "https://www.soumu.go.jp/main_sosiki/cybersecurity/kokumin/",
      "level": "Beginner",
      "description": "Explains things systematically, from basic knowledge to measures at home and at work. (Japanese)"
     },
     {
      "name": "Handbook for Safe and Secure Internet Use",
      "url": "https://security-portal.cyber.go.jp/guidance/handbook.html",
      "level": "Beginner",
      "description": "A handbook on using the internet safely, produced by the national body in charge of cybersecurity. (Japanese)"
     },
     {
      "name": "IPA: 10 Major Security Threats",
      "url": "https://www.ipa.go.jp/security/10threats/",
      "level": "Beginner and up",
      "description": "The threats getting attention now, announced every year. There is an edition for individuals and one for organizations. (Japanese)"
     },
     {
      "name": "IPA: Information Security Safety Consultation Service",
      "url": "https://www.ipa.go.jp/security/anshin/about.html",
      "level": "Beginner",
      "description": "Where to turn in Japan when you think you may have been hit by a virus or a scam. (Japanese)"
     }
    ]
   },
   {
    "title": "Learn in more depth (intermediate to advanced)",
    "description": "Information on certification exams, and materials that professionals refer to in their work.",
    "sites": [
     {
      "name": "IPA: Information Security Management Examination",
      "url": "https://www.ipa.go.jp/shiken/kubun/sg.html",
      "level": "Intermediate",
      "description": "A Japanese national examination on managing information security in organizations. A good goal for the intermediate level. (Japanese)"
     },
     {
      "name": "IPA: Registered Information Security Specialist Examination",
      "url": "https://www.ipa.go.jp/shiken/kubun/sc.html",
      "level": "Advanced",
      "description": "A Japanese national qualification for security professionals. A good goal for the advanced level. (Japanese)"
     },
     {
      "name": "IPA: How to Secure Your Website",
      "url": "https://www.ipa.go.jp/security/vuln/websecurity/about.html",
      "level": "Intermediate and up",
      "description": "A standard resource for developers that explains the typical vulnerabilities of web applications and how to counter them. (Japanese)"
     },
     {
      "name": "OWASP Top 10",
      "url": "https://owasp.org/www-project-top-ten/",
      "level": "Advanced",
      "description": "A ranking of the most serious security risks for web applications. It is revised every few years. (English)"
     },
     {
      "name": "MITRE ATT&CK",
      "url": "https://attack.mitre.org/",
      "level": "Advanced",
      "description": "A knowledge base that organizes attackers' tactics and techniques from real attack cases. (English)"
     },
     {
      "name": "NIST SP 800-61 (incident response)",
      "url": "https://csrc.nist.gov/pubs/sp/800/61/r3/final",
      "level": "Advanced",
      "description": "Incident response guidance from the US NIST (Rev. 3, revised in 2025). It is referred to around the world. (English)"
     }
    ]
   },
   {
    "title": "Practice hands-on (legal practice environments)",
    "description": "Always practice attacks in an environment where you have permission.",
    "sites": [
     {
      "name": "picoCTF",
      "url": "https://picoctf.org/",
      "level": "Beginner and up",
      "description": "A CTF (a game of competing in security skills) for beginners. You learn by solving challenges. (English)"
     },
     {
      "name": "OWASP Juice Shop",
      "url": "https://owasp.org/www-project-juice-shop/",
      "level": "Intermediate and up",
      "description": "A practice web application made vulnerable on purpose. You run it on your own PC to practice. (English)"
     }
    ]
   }
  ]
 },
 "certifications": {
  "description": "An overview of the main security-related certifications, with how to take them, basic exam facts, and how to apply. Difficulty is shown by the number of ☆: the more stars, the harder (a rough guide). The content was checked against the official sites in November 2026. Exam times, numbers of questions, passing lines and fees can change with the period or year, so always check the latest information on the official site before you apply.",
  "cbt_note": "CBT (computer-based testing) is a way of taking an exam in which you answer questions shown on a computer screen using the mouse and keyboard. No paper answer sheets are used. For many exams you choose and book the test center and the date and time yourself, and can take the exam at any time of year.",
  "categories": [
   {
    "name": "Japan (national examinations run by IPA)",
    "items": [
     {
      "name": "Information Technology Passport Examination (IP)",
      "summary": "A Japanese national examination on basic IT knowledge. The basics of information security are also covered.",
      "target": "People who are about to start learning IT or security.",
      "format": "Multiple choice (CBT, available year-round)",
      "difficulty": 1,
      "spec": [
       "Exam time: 120 minutes",
       "Number of questions: 100",
       "Passing line: an overall score of 600 or more (out of 1,000), and 300 or more in each of the three field scores",
       "Exam fee: 7,500 yen (tax included)"
      ],
      "exam_method": [
       "It is a CBT exam taken on a computer.",
       "It can be taken year-round, and you choose the date, time and test center yourself.",
       "Because of a system replacement, the exam is scheduled to be suspended from December 28, 2026 and to resume in late January 2027. A new examination system is planned from fiscal 2027, so check the latest information from IPA before planning to take it."
      ],
      "how_to_apply": [
       "Check the application period and the exam format on IPA's list of examination categories",
       "Follow the guidance to the application site, choose the date, time and test center, and apply"
      ],
      "official_url": "https://www.ipa.go.jp/shiken/kubun/list.html"
     },
     {
      "name": "Information Security Management Examination (SG)",
      "summary": "A Japanese national examination on managing information security. It covers risk treatment, the ISMS, related laws and so on.",
      "target": "People involved in managing and operating information security in an organization.",
      "format": "Subject A and Subject B are both multiple choice (CBT, available year-round)",
      "difficulty": 2,
      "spec": [
       "Exam time: 120 minutes (Subjects A and B together)",
       "Number of questions: 60",
       "Passing line: 600 or more (out of 1,000)",
       "Exam fee: 7,500 yen (tax included)"
      ],
      "exam_method": [
       "It is a CBT exam that can be taken year-round.",
       "You choose the date, time and test center yourself when you apply.",
       "Because of a system replacement, the exam is scheduled to be suspended from December 28, 2026 and to resume in late January 2027. Check the latest status with IPA before planning to take it."
      ],
      "how_to_apply": [
       "Go from IPA's overview page to the application site run by its contractor",
       "Choose the test center and the date and time, and apply",
       "Dates are limited around the suspension period, so check the status before applying"
      ],
      "official_url": "https://www.ipa.go.jp/shiken/kubun/sg.html"
     },
     {
      "name": "Fundamental Information Technology Engineer Examination (FE)",
      "summary": "A Japanese national examination on the fundamentals for IT engineers. It covers algorithms, networks, databases, information security and so on.",
      "target": "People aiming to become IT engineers, and people who want to learn IT fundamentals systematically.",
      "format": "Subject A and Subject B are both multiple choice (CBT, available year-round)",
      "difficulty": 3,
      "spec": [
       "Exam time: Subject A 90 minutes, Subject B 100 minutes (190 minutes in total)",
       "Number of questions: Subject A 60, Subject B 20",
       "Passing line: 600 or more (out of 1,000) in each of Subject A and Subject B",
       "Exam fee: 7,500 yen (tax included)"
      ],
      "exam_method": [
       "It is a CBT exam that can be taken year-round.",
       "You choose the date, time and test center yourself when you apply. There are test centers all over Japan.",
       "Because you decide the exam date yourself, it is easy to fit the exam to your study plan.",
       "Because of a system replacement, the exam is scheduled to be suspended from December 28, 2026 and to resume in late January 2027. Check the latest status with IPA before planning to take it."
      ],
      "how_to_apply": [
       "Check the application period and the exam format on IPA's list of examination categories",
       "Follow the guidance to the application site, choose the date, time and test center, and apply"
      ],
      "official_url": "https://www.ipa.go.jp/shiken/kubun/list.html"
     },
     {
      "name": "Registered Information Security Specialist Examination (SC)",
      "summary": "A Japanese national qualification for cybersecurity professionals. It has Subject A (multiple choice), which tests knowledge, and Subject B (written answers), which tests applied ability.",
      "target": "People responsible for planning, designing and operating security measures.",
      "format": "Subjects A-1 and A-2: multiple choice. Subject B: written answers (CBT in fiscal 2026)",
      "difficulty": 4,
      "spec": [
       "Exam time: Subject A-1 50 minutes, Subject A-2 40 minutes, Subject B 150 minutes",
       "Number of questions: Subject A-1 30, Subject A-2 25, Subject B answer 2 out of 4",
       "Passing line: 60 or more out of 100 in each subject (the standard must be met in every subject)",
       "Exam fee: 7,500 yen (tax exempt)"
      ],
      "exam_method": [
       "In fiscal 2026 it is a CBT exam held twice a year, in a first and a second session. Subject A and Subject B are taken in separate periods.",
       "For the second session of fiscal 2026, applications are scheduled for January 27 to February 27, 2027, Subject A for February 20 to March 2, and Subject B for March 16 to March 28.",
       "A new examination system is planned from fiscal 2027, so always check the latest information on IPA's official page.",
       "Passing the exam alone does not let you use the title. After passing, you need to apply to IPA for registration."
      ],
      "how_to_apply": [
       "Check that year's application period and exam schedule on IPA's official page",
       "Apply online and pay the exam fee",
       "After passing, apply to IPA for registration to be able to use the title (registration takes place twice a year)"
      ],
      "official_url": "https://www.ipa.go.jp/shiken/kubun/sc.html"
     }
    ]
   },
   {
    "name": "International (certifications from private organizations)",
    "items": [
     {
      "name": "CompTIA Security+",
      "summary": "A vendor-neutral international certification on the fundamentals and practical knowledge of security.",
      "target": "People entering the security field, and IT practitioners.",
      "format": "Multiple-choice and performance-based questions",
      "difficulty": 3,
      "spec": [
       "Exam time: 90 minutes",
       "Number of questions: up to 90 (including multiple-choice and performance-based questions)",
       "Passing line: 750 or more (on a scale of 100 to 900)",
       "Exam fee: check the official site (the published price as of January 2025 was 404 US dollars; it varies by region and time)"
      ],
      "exam_method": [
       "Besides taking it at a test center, you can choose to take it online from home or the office (OnVUE).",
       "You book the exam date and time with Pearson VUE using a voucher.",
       "Taking it online requires checking the conditions for your testing environment (camera, microphone and so on). Check the conditions on the official site.",
       "The figures above are for the current version (SY0-701). A move to a new version has been announced, so check on the official site which version you will take."
      ],
      "how_to_apply": [
       "Check the exam content and how to prepare on CompTIA's official site",
       "Buy an exam voucher",
       "On the Pearson VUE booking site, choose the date, time and test center (or delivery method) and book"
      ],
      "official_url": "https://www.comptia.org/en-us/certifications/security/"
     },
     {
      "name": "CISSP (Certified Information Systems Security Professional)",
      "summary": "An advanced international certification for information security managers. Questions come from eight domains.",
      "target": "People with work experience who are involved in managing or designing security.",
      "format": "Multiple-choice and similar questions (computerized adaptive testing, CAT). Available in several languages, including Japanese",
      "difficulty": 5,
      "spec": [
       "Exam time: 3 hours",
       "Number of questions: 100 to 150 (it is adaptive, so the number differs by candidate)",
       "Passing line: 700 or more (out of 1,000)",
       "Exam fee: 749 US dollars (it changes with tax and exchange rates, so check the official site)"
      ],
      "exam_method": [
       "It is taken at a test center (Pearson VUE).",
       "With Pearson VUE you can choose and book the date, time and test center yourself.",
       "To be certified, you need a certain amount of work experience as well as passing the exam. Check the conditions in ISC2's official information."
      ],
      "how_to_apply": [
       "Check the requirements (such as work experience) on ISC2's official site",
       "Register on ISC2's application page and agree to the terms",
       "After registering, book the date, time and test center with Pearson VUE"
      ],
      "official_url": "https://www.isc2.org/Certifications/CISSP",
      "apply_url": "https://www.isc2.org/register-for-exam?exam=CISSP"
     }
    ]
   }
  ]
 }
};
