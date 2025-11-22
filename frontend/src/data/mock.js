// Mock data for Vincent's 8-bit Portfolio

export const profileData = {
  name: "Vincent Capistrano",
  title: "Full-Stack .NET Developer",
  tagline: "Building efficient, user-friendly solutions",
  bio: "Full-Stack .NET Developer skilled in ASP.NET, web and desktop applications, SQL Server, and WordPress customization. Experienced in microcontroller programming, integrating hardware with software for real-time monitoring. Passionate about building efficient, user-friendly solutions that enhance business processes.",
  location: "Cavite, Philippines",
  email: "capistrano.vincent.eccbscs@gmail.com",
  phone: "09772311718",
  social: {
    linkedin: "https://www.linkedin.com/in/vincent-capistrano",
    github: "https://github.com/vincent-capistrano",
  },
  stats: {
    experience: "3+ Years",
    projects: "15+ Completed",
    clients: "Multiple",
    level: "85"
  }
};

export const skills = [
  { name: "C#", level: 95, category: "language", icon: "Code2" },
  { name: "ASP.NET", level: 90, category: "framework", icon: "Globe" },
  { name: "React.js", level: 85, category: "framework", icon: "Layers" },
  { name: "SQL Server", level: 90, category: "database", icon: "Database" },
  { name: "JavaScript", level: 85, category: "language", icon: "FileCode" },
  { name: "WordPress", level: 88, category: "cms", icon: "Layout" },
  { name: "C++", level: 80, category: "language", icon: "Cpu" },
  { name: "jQuery", level: 85, category: "library", icon: "Sparkles" },
  { name: "Entity Framework", level: 88, category: "framework", icon: "Package" },
  { name: "IIS", level: 85, category: "server", icon: "Server" },
  { name: "GitHub", level: 90, category: "tool", icon: "GitBranch" },
  { name: "WinForms", level: 88, category: "framework", icon: "Monitor" }
];

export const experience = [
  {
    id: 1,
    company: "Practice AI",
    role: "Full Stack Developer",
    period: "April 2025 - Present",
    location: "Remote - Full-Time",
    description: "Focused on developing and maintaining internal applications to drive operational efficiency, creating tools to streamline workflows and support company growth.",
    level: "Level 3"
  },
  {
    id: 2,
    company: "ROHM Electronics Philippines Inc",
    role: "Full Stack Software Engineer",
    period: "September 2022 - April 2025",
    location: "On-Site - Full-Time",
    description: "Developed and maintained web applications using ASP.NET (C# and VB) for high performance and responsive design. Built microcontroller-based systems for real-time monitoring.",
    level: "Level 2"
  },
  {
    id: 3,
    company: "Freelance",
    role: "WordPress Front-End Web Developer",
    period: "December 2023 - Present",
    location: "Remote - Charlotte, NC",
    description: "Developed responsive WordPress websites from design mockups. Customized themes using Elementor and optimized website performance.",
    level: "Level 2"
  }
];

export const projects = [
  {
    id: 1,
    title: "AQI System Website",
    description: "Developed a system for storing and managing quality issues reported by production operators with role-based approval process.",
    tech: ["VB.NET", "ASP.NET", "jQuery", "SQL Server", "GemBox"],
    achievement: "Quality Master",
    coins: 150
  },
  {
    id: 2,
    title: "Production Maintenance Andon System",
    description: "Engineered a real-time request system for production maintenance teams to raise Andon requests for critical machine issues.",
    tech: ["ASP.NET Core", "VB", "SQL Server", "JavaScript"],
    achievement: "Real-Time Hero",
    coins: 180
  },
  {
    id: 3,
    title: "Production Environment Monitoring",
    description: "Modified M5Core2 device for real-time temperature and humidity monitoring with TCP/IP data transmission to SQL Server.",
    tech: ["ESP32", "C++", "WinForms", "SQL Server"],
    achievement: "IoT Champion",
    coins: 200
  },
  {
    id: 4,
    title: "Breakdown Machine Troubleshooting Guide",
    description: "Created a web-based troubleshooting guide for machine keepers with structured solutions and custom guide uploads.",
    tech: ["ASP.NET", "C#", "SQL Server", "jQuery"],
    achievement: "Problem Solver",
    coins: 120
  },
  {
    id: 5,
    title: "Mr. Supply Chain Website",
    description: "WordPress website for supply chain education and training platform.",
    tech: ["WordPress", "Elementor", "JavaScript"],
    link: "https://mrsupplychain.com",
    achievement: "Web Designer",
    coins: 100,
    unlockCost: 50
  },
  {
    id: 6,
    title: "Six Sigma Learning Platform",
    description: "Educational platform for Lean Six Sigma principles and training.",
    tech: ["WordPress", "Elementor", "SEO"],
    link: "https://sixsigmalearning.com",
    achievement: "Learning Guru",
    coins: 100,
    unlockCost: 50
  },
  {
    id: 7,
    title: "Supply Chain Videos Website",
    description: "Comprehensive collection of supply chain management and engineering videos for education.",
    tech: ["WordPress", "Elementor", "Video Integration"],
    link: "https://supplychainvideos.com",
    achievement: "Video Master",
    coins: 100,
    unlockCost: 50
  },
  {
    id: 8,
    title: "Project Management Videos",
    description: "Educational video platform for project management principles and best practices.",
    tech: ["WordPress", "Elementor", "Content Management"],
    link: "https://projectmanagementvideos.com",
    achievement: "PM Expert",
    coins: 100,
    unlockCost: 50
  }
];

export const achievements = [
  { id: 1, name: "Code Warrior", description: "Master of C# and .NET", unlocked: true },
  { id: 2, name: "Full-Stack Legend", description: "Frontend + Backend Expert", unlocked: true },
  { id: 3, name: "Database Guardian", description: "SQL Server Specialist", unlocked: true },
  { id: 4, name: "IoT Pioneer", description: "Hardware Integration Pro", unlocked: true },
  { id: 5, name: "Web Wizard", description: "WordPress Master", unlocked: true },
  { id: 6, name: "Team Player", description: "Collaborative Developer", unlocked: true }
];

export const education = {
  degree: "Bachelor's Degree in Computer Science",
  institution: "EARIST Cavite Campus",
  period: "2017 - 2022",
  achievement: "Best Thesis Award 2022"
};

export const certification = {
  name: "Developing ASP.NET MVC 5 Web Applications",
  issuer: "MIS.NET Education Certificate",
  date: "August 2024",
  partner: "Microsoft Partner - Gold Learning"
};