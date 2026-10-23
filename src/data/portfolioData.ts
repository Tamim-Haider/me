export interface Project {
  id: string;
  title: string;
  category: 'Security & Systems' | 'Software & AI' | 'Games' | 'Web & Tools';
  description: string;
  githubUrl: string;
  icon: string;
  tags: string[];
}

export interface SkillGroup {
  category: string;
  iconName: string;
  skills: Array<{
    name: string;
    description: string;
  }>;
}

export interface EducationItem {
  period: string;
  degree: string;
  institution: string;
  details?: string;
}

export interface CertificationItem {
  title: string;
  issuer: string;
  image?: string;         // <--- ADDED
  credentialId?: string; 
}

export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  details: string[];
  certificate?: string;
  certificateTitle?: string;
}

export const SITE_DATA = {
  personal: {
    name: "TAMIM HAIDER",
    title: "Cybersecurity Student & Ethical Hacker",
    typewriterRoles: [
      "Ethical Hacker",
      "Cybersecurity Enthusiast",
      "Penetration Tester",
      "Problem Solver",
      "Security Researcher"
    ],
    bio: "I am a Computer Science and Engineering student passionate about cybersecurity, ethical hacking, and emerging technologies. My goal is to combine technical knowledge with practical skills to create secure, innovative, and future-ready solutions.",
    aboutExtended: [
      "I am currently a Computer Science and Engineering student at the University of Global Village, passionate about technology, problem-solving, and continuous learning. My academic journey has nurtured a strong interest in cybersecurity, where I aim to explore ways to secure systems, prevent threats, and protect data in an increasingly digital world.",
      "Alongside this, I enjoy learning new technologies, working on problem-solving tasks, and strengthening my foundation in computer science. My goal is to combine technical knowledge with practical skills to contribute to secure, innovative, and future-ready solutions, with a focus on computer science, cybersecurity and ethical hacking, artificial intelligence, and emerging technologies."
    ],
    location: "Barishal, 8200, Bangladesh",
    email: "tamimhaidercse@proton.me",
    resumeUrl: "https://drive.google.com/file/d/1EusjdSsidBeXPShsna5tm3j3_Hinm7mb/view?usp=sharing",
    certificatesUrl: "https://drive.google.com/drive/folders/1QKPg6zl3H10U2ERsvTolcEqfYRKPf-t6?usp=sharing",
    quote: '"Ethical Hacking: Great knowledge comes with great responsibilities" — Tamim Haider',
    socials: {
      linkedin: "https://www.linkedin.com/in/tamimhaider/",
      github: "https://github.com/Tamim-Haider",
      telegram: "https://t.me/tamimHaider",
      email: "mailto:tamimhaidercse@proton.me"
    }
  },

  interests: [
    {
      title: "Cybersecurity",
      description: "Exploring ways to secure systems, prevent threats, and protect data."
    },
    {
      title: "AI & Emerging Tech",
      description: "Prompt Engineering, Artificial Intelligence, and future technologies."
    },
    {
      title: "Problem Solving",
      description: "Working on challenging tasks and strengthening computer science foundations."
    }
  ],

  hobbies: [
    {
      title: "Movies & Series",
      description: "Watching cybersecurity, sci-fi, and technology-related movies and series."
    },
    {
      title: "Technology Research",
      description: "Exploring new technologies, tools, and security vulnerabilities."
    },
    {
      title: "Continuous Learning",
      description: "Reading about cybersecurity trends, AI advancements, and tech innovations."
    }
  ],

  skillGroups: [
    {
      category: "PENETRATION TESTING TOOLS",
      iconName: "tools",
      skills: [
        { name: "Metasploit", description: "Penetration testing framework" },
        { name: "Burp Suite", description: "Web vulnerability scanner" },
        { name: "Nmap", description: "Network discovery and security auditing" },
        { name: "Wireshark", description: "Network discovery and monitoring tool" }
      ]
    },
    {
      category: "VULNERABILITY ASSESSMENT",
      iconName: "search-minus",
      skills: [
        { name: "Nessus", description: "Vulnerability scanning and assessment" },
        { name: "Nikto", description: "Web server vulnerability scanner" },
        { name: "OpenVAS", description: "Open-source vulnerability assessment system" }
      ]
    },
    {
      category: "SIEM TOOLS",
      iconName: "chart-line",
      skills: [
        { name: "Splunk", description: "Security Information and Event Management platform" },
        { name: "Wazuh", description: "EDR & XDR platform" }
      ]
    },
    {
      category: "PASSWORD AUDITING",
      iconName: "key",
      skills: [
        { name: "John the Ripper", description: "Password cracking tool" },
        { name: "Hydra", description: "Network logon cracker" },
        { name: "Medusa", description: "Parallel login brute-forcer" }
      ]
    },
    {
      category: "OSINT TOOLS",
      iconName: "search",
      skills: [
        { name: "theHarvester", description: "Email, subdomain and name scraping" },
        { name: "Maltego", description: "Open-source intelligence and forensics" },
        { name: "Recon-ng", description: "Web reconnaissance framework" },
        { name: "Shodan", description: "Search engine for Internet-connected devices" }
      ]
    },
    {
      category: "PROGRAMMING & SCRIPTING",
      iconName: "code",
      skills: [
        { name: "Python", description: "Automation in security testing" },
        { name: "Bash", description: "Linux command line scripting" },
        { name: "C / C++", description: "System programming" },
        { name: "Web Technologies", description: "HTML, CSS, SQL" }
      ]
    },
    {
      category: "OPERATING SYSTEMS",
      iconName: "desktop",
      skills: [
        { name: "Windows", description: "Windows 10, 11, Windows Server" },
        { name: "Linux", description: "Ubuntu, Kali, ParrotOS, Arch, Blackarch" }
      ]
    }
  ],

  education: [
    {
      period: "Sep 2023 - Present",
      degree: "Bachelor of Science in Computer Science & Engineering",
      institution: "University Of Global Village (UGV), Barishal"
    },
    {
      period: "Aug 2020 - May 2022",
      degree: "Higher Secondary Certificate",
      institution: "Govt. Suhrawardy College, Pirojpur",
      details: "GPA: 5.00 Out of 5.00"
    }
  ],
certifications: [
  {
    title: "Blue Team Junior Analyst",
    issuer: "Security Blue Team",
    image: "/certificates/blue-team-junior-analyst.png" // <--- ADDED
  },
  {
    title: "Cisco Ethical Hacker",
    issuer: "Cisco Networking Academy",
    image: "/certificates/cisco-ethical-hacker.png"     // <--- ADDED
  },
  {
    title: "Certified Cybersecurity Analyst",           // <--- ADDED
    issuer: "CyberWarfare Labs",                        // <--- ADDED
    image: "/certificates/cyberwarfare-labs-analyst.png"// <--- ADDED
  }
],
  
languages: [
    { name: "Bangla", level: "Native" },
    { name: "English", level: "Fluent" },
    { name: "Hindi", level: "Fluent" },
    { name: "Urdu", level: "Intermediate" }
  ],

  experience: [
    {
      period: "March 2026 - May 2026",
      role: "Penetration Tester Intern (Remote)",
      company: "Deltaware Solution Pvt Ltd.",
      details: [
        "Conducted penetration testing on web applications and network infrastructure to identify security vulnerabilities",
        "Performed vulnerability assessments using tools like Nessus, Nmap, and Burp Suite",
        "Documented findings and provided remediation recommendations in detailed reports",
        "Collaborated with the security team to simulate real-world attack scenarios"
      ],
      certificate: "/certificates/deltaware-internship-certificate.png",
      certificateTitle: "Penetration Tester Intern Certificate"
    },
    {
      period: "September 2026 - November 2026",
      role: "Cybersecurity Research and Development Intern (Remote)",
      company: "Cyberfox Society",
      details: [
        "Conducted research on emerging cybersecurity threats and vulnerabilities",
        "Developed and tested security tools and proof-of-concept exploits in controlled environments",
        "Analyzed malware behavior and documented findings for security awareness",
        "Collaborated with the R&D team to build innovative security solutions"
      ],
      certificate: "/certificates/cyberfox-internship-certificate.png",
      certificateTitle: "Cybersecurity R&D Intern Certificate"
    }
    {
      period: "October 2026 - December 2026",
      role: "Cyber Security Intern (Remote)",
      company: "Networkwalks Academy",
      details: [
        "Monitored and analyzed network traffic to detect anomalies, security threats, and unauthorized access attempts",
        "Configured and evaluated network defense controls, firewall policies, and secure network routing protocols",
        "Performed vulnerability scanning, threat assessments, and security configuration reviews",
        "Collaborated on incident response simulations and defensive cybersecurity operations"
      ],
      certificate: "/certificates/networkwalks.png",
      certificateTitle: "Cyber Security Intern Certificate"
    }
  ],
  projects: [
    {
      id: "ips",
      title: "Intrusion Prevention System (IPS)",
      category: "Security & Systems",
      description: "Developed an Intrusion Prevention System using Suricata for deep packet inspection, iptables for traffic filtering, and NFQUEUE for inline packet processing to detect and block malicious network traffic in real-time.",
      githubUrl: "https://github.com/Tamim-Haider/Intrusion-Prevention-System-IPS",
      icon: "ShieldAlert",
      tags: ["Suricata", "iptables", "NFQUEUE", "Network Defense"]
    },
    {
      id: "ransomware-sim",
      title: "Simulated Ransomware",
      category: "Security & Systems",
      description: "Built an educational ransomware simulation using Fernet (AES-128-CBC + HMAC-SHA256) for authenticated encryption, Scrypt KDF for password-based key derivation, and recursive file discovery with a hard safety boundary for controlled testing.",
      githubUrl: "https://github.com/Tamim-Haider/Simulated-Ransomware",
      icon: "Lock",
      tags: ["Cryptography", "AES-128", "Scrypt KDF", "Python"]
    },
    {
      id: "samba-server",
      title: "SAMBA Server",
      category: "Security & Systems",
      description: "A fully functional SAMBA Server on Kali Linux that provides seamless file sharing across multiple operating systems. The server is accessible from localhost, other Linux machines, and Windows systems on the same network.",
      githubUrl: "https://github.com/Tamim-Haider/SAMBA-SERVER",
      icon: "Server",
      tags: ["Kali Linux", "SAMBA", "Network Sharing", "SysAdmin"]
    },
    {
      id: "ids",
      title: "Intrusion Detection System (IDS)",
      category: "Security & Systems",
      description: "The system continuously monitors live network traffic and generates immediate visual and logged alerts for suspicious or malicious activities. It demonstrates the practical application of open-source security tools in modern network defense environments.",
      githubUrl: "https://github.com/Tamim-Haider/Intrusion-Detection-System-IDS",
      icon: "ShieldCheck",
      tags: ["Network Monitoring", "Alert Logging", "Suricata", "IDS"]
    },
    {
      id: "xss-scanner",
      title: "Cross-Site Scripting (XSS) Vulnerability Scanner",
      category: "Security & Systems",
      description: "Developed an automated XSS scanner to detect and report cross-site scripting vulnerabilities in web applications, with payload injection testing and detailed vulnerability reporting.",
      githubUrl: "https://github.com/Tamim-Haider/XSS-Scanner",
      icon: "Bug",
      tags: ["Web Security", "XSS", "Payload Injection", "Python"]
    },
    {
      id: "keylogger",
      title: "Keylogger Security Tool",
      category: "Security & Systems",
      description: "Developed an educational security tool to demonstrate keyboard logging techniques for cybersecurity awareness, with encryption and stealth functionality for ethical testing purposes.",
      githubUrl: "https://github.com/Tamim-Haider/Keylogger",
      icon: "Keyboard",
      tags: ["Cyber Awareness", "Encryption", "Python", "Ethical Testing"]
    },
    {
      id: "x-language",
      title: "X Language",
      category: "Software & AI",
      description: "Created a custom programming language with its own syntax, lexer, parser, and interpreter, supporting variables, loops, conditionals, and basic I/O operations.",
      githubUrl: "https://github.com/Tamim-Haider/X-Language",
      icon: "Code",
      tags: ["Compiler Design", "Lexer", "Parser", "Interpreter"]
    },
    {
      id: "desktop-assistant",
      title: "Desktop Assistant",
      category: "Software & AI",
      description: "Created a voice-controlled desktop assistant software that can perform various tasks based on voice commands.",
      githubUrl: "https://github.com/Tamim-Haider/Desktop_Assistant",
      icon: "Mic",
      tags: ["Voice Recognition", "Automation", "Python", "TTS"]
    },
    {
      id: "eye-controlled-mouse",
      title: "Eye Controlled Mouse",
      category: "Software & AI",
      description: "Developed an eye-controlled mouse system for physically disabled people to interact with computers using eye movements.",
      githubUrl: "https://github.com/Tamim-Haider/Eye-Controlled-Mouse/",
      icon: "Eye",
      tags: ["Computer Vision", "Accessibility", "OpenCV", "Python"]
    },
    {
      id: "document-reader",
      title: "Document Reader",
      category: "Software & AI",
      description: "Built a document reader for visually impaired users that can read any document file aloud using text-to-speech technology.",
      githubUrl: "https://github.com/Tamim-Haider/Document-Reader",
      icon: "BookOpen",
      tags: ["TTS", "Accessibility", "Document Parsing", "Python"]
    },
    {
      id: "pdf-merger",
      title: "PDF Merging Software",
      category: "Web & Tools",
      description: "Implemented software to merge multiple PDF files into a single document with customizable settings.",
      githubUrl: "https://github.com/Tamim-Haider/PDF-Marging-tool",
      icon: "FileText",
      tags: ["PDF Tool", "GUI", "Automation", "Utility"]
    },
    {
      id: "restaurant-ui",
      title: "Restaurant Webpage UI",
      category: "Web & Tools",
      description: "Designed and implemented a responsive restaurant website with modern login and sign-up pages featuring form validation, user authentication, and secure session management.",
      githubUrl: "https://github.com/Tamim-Haider/Restaurant-UI",
      icon: "Layout",
      tags: ["HTML5", "CSS3", "JavaScript", "Auth UI"]
    },
    {
      id: "snake-game",
      title: "Snake Game",
      category: "Games",
      description: "Developed a classic snake game with score tracking, increasing difficulty levels, and smooth controls using JavaScript and HTML5 Canvas.",
      githubUrl: "https://github.com/Tamim-Haider/Snake-game",
      icon: "Gamepad2",
      tags: ["JavaScript", "HTML5 Canvas", "Game Dev"]
    },
    {
      id: "car-racing",
      title: "Car Racing Game",
      category: "Games",
      description: "Built a 2D car racing game with obstacle avoidance, speed control, and multiple levels using object-oriented programming in JavaScript.",
      githubUrl: "https://github.com/Tamim-Haider/Car-Racing-Game",
      icon: "Car",
      tags: ["2D Physics", "JavaScript", "OOP", "Canvas"]
    },
    {
      id: "brick-breaker",
      title: "Break Breaker Game",
      category: "Games",
      description: "Created a brick breaker game with physics simulation, power-ups, and level progression using HTML5 Canvas and collision detection algorithms.",
      githubUrl: "https://github.com/Tamim-Haider/Break-Breaker-Game",
      icon: "Trophy",
      tags: ["Collision Physics", "Canvas", "JavaScript"]
    }
  ]
};
