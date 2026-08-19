// ─────────────────────────────────────────────────────────────
// Portfolio content — edit everything here to make it yours.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: "Sanduni Gamage",
  initials: "SG",
  role: "Software Engineer · AI & Cloud",
  email: "sandunijgamage@gmail.com",
  resumeUrl: "https://drive.google.com/file/d/1BsVgGgqEzXTYrPfY6lrOPGg0FUB3PNUL/view?usp=sharing",
  socials: [
    { label: "GitHub", href: "https://github.com/Sanduni-Gamage" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/sanduni-gamage-6746a6197/" },
  ],
};

export const hero = {
  // The word wrapped in *asterisks* is rendered in italic accent.
  headline: "Hi, I'm *Sanduni* a software engineer passionate about AI and cloud technologies.",
  intro:
    "I'm a Master's student in Applied Technologies (Computing) at Unitec, working across full-stack development, cloud, and applied AI/ML. I care about turning emerging technology and data into software that actually improves how people work.",
};

export const about = {
  heading: "I turn data, cloud, and AI into practical software solutions.",
  paragraphs: [
    "I'm a software engineer with a foundation in cloud-based application development using C#, ASP.NET Core, and Azure, alongside a growing focus on machine learning and data-driven problem solving. I've shipped enterprise web applications, reporting dashboards, and ML models, always aiming for the intersection of solid engineering and real business impact.",
    "Alongside my Master's research on reinforcement learning for quadruped robotics, I work as a PASS Leader at Unitec, facilitating study sessions and translating complex AI and programming concepts into explanations that click for a wide range of learners.",
  ],
  toolkit: [
    { category: "Languages", items: ["C#", "Python", "JavaScript", "TypeScript", "SQL"] },
    { category: "AI & Data", items: ["Machine Learning", "scikit-learn", "Pandas", "NumPy", "Reinforcement Learning"] },
    { category: "Cloud & Backend", items: ["Azure", "AWS", "ASP.NET Core", "React", "REST APIs", "CI/CD"] },
  ],
};

export type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  location: string;
  points: string[];
};

// Rendered newest-first, top rung to bottom.
export const experience: ExperienceItem[] = [
  {
    role: "PASS Leader (Peer-Assisted Study Sessions)",
    company: "Unitec Institute of Technology",
    period: "Sep 2025 - Jul 2026",
    location: "Auckland, NZ",
    points: [
      "Facilitate collaborative learning sessions for undergraduate students studying AI, programming, and machine learning.",
      "Translate complex technical concepts into practical, easy-to-understand explanations for diverse audiences.",
      "Develop leadership, coaching, and communication skills while supporting student success.",
    ],
  },
  {
    role: "Associate Software Engineer",
    company: "Visiro Global",
    period: "Aug 2023 - Jan 2025",
    location: "Colombo, Sri Lanka",
    points: [
      "Developed and enhanced enterprise web applications using ASP.NET Core, C#, and Entity Framework, collaborating with cross-functional teams in Agile.",
      "Designed reporting dashboards that transformed operational data into actionable business insights.",
      "Integrated REST APIs and optimised backend performance, using Azure DevOps, Git, and CI/CD for reliable delivery.",
    ],
  },
];

export type Project = {
  number: string;
  title: string;
  description: string;
  tags: string[];
  href: string;
  gradient: [string, string];
};

export const projects: Project[] = [
  {
    number: "01",
    title: "RentalWise",
    description:
      "A cloud-ready property management platform that streamlines the rental experience for landlords and tenants through digital workflows, role-based access, interactive mapping, and intelligent search.",
    tags: ["ASP.NET Core", "React", "TypeScript", "SQL Server"],
    href: "https://github.com/Sanduni-Gamage/PropertyManagementSystem",
    gradient: ["#C87E5C", "#A85436"],
  },
  {
    number: "02",
    title: "Go2 Research",
    description:
      "Reinforcement learning for quadruped locomotion and manipulation on rugged terrain - Master's research supervised under Dr. Jaime Bell.",
    tags: ["Reinforcement Learning", "Python", "Robotics"],
    href: "https://github.com/Sanduni-Gamage/Go2-Research",
    gradient: ["#B79A6A", "#8C7038"],
  },
  {
    number: "03",
    title: "My ML Course",
    description:
      "A structured machine-learning project spanning supervised learning (regression & classification), unsupervised learning (K-Means), and reinforcement learning (Q-Learning).",
    tags: ["Python", "scikit-learn", "Machine Learning"],
    href: "https://github.com/Sanduni-Gamage/ML-Journey",
    gradient: ["#B98A72", "#90604A"],
  },
  {
    number: "04",
    title: "Traffic Light Detector",
    description:
      "A custom-trained YOLOv8 model that detects traffic lights and classifies their signal colour — red, yellow, green, or off — in real time.",
    tags: ["YOLOv8", "Computer Vision", "Python"],
    href: "https://github.com/Sanduni-Gamage/Traffic-Light-Detection-Using-YOLO---V8",
    gradient: ["#8C7B5C", "#5F5238"],
  },
];
