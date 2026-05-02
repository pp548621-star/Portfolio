// ─── PERSONAL INFO ─────────────────────────────────────────────
export const personalInfo = {
  name: "Pavan Patel",
  title: "Full Stack Developer",
  subtitle: "Software Engineer",
  tagline: "Building scalable products that make an impact.",
  bio: `I'm a passionate Full Stack Developer with a love for creating elegant, 
  performant, and user-centric applications. I thrive at the intersection of 
  technology and creativity, turning complex problems into clean, intuitive solutions.`,
  bioExtended: `My journey in software development started during college when I built my 
  first web app using plain HTML and a dream. Since then, I've grown into a developer 
  who enjoys working across the entire stack — from designing pixel-perfect UIs to 
  architecting robust backend systems. I'm currently focused on building modern web 
  applications and exploring AI-powered products.`,
  goals: "I aim to contribute to open-source, land a role at a product-driven company, and eventually build something that millions of people use.",
  email: "pp548621@gmail.com",
  github: "https://github.com/pp548621-star",
  linkedin: "https://www.linkedin.com/in/pavan-patel-0864ba354/",
  leetcode: "https://leetcode.com/u/Pavan_1412/",
  // twitter: "https://twitter.com/alexdev",
  location: "Gujarat, India",
  available: true,
  resume: "https://drive.google.com/file/d/19ekj28tnphMMT8CE8T8-TUbi6awzLIGv/view?usp=sharing",
};

// ─── SKILLS ────────────────────────────────────────────────────
export const skills = {
  "Programming Languages": [
    { name: "Java", icon: "☕" },
    { name: "C++", icon: "⚙️" },
    { name: "JavaScript", icon: "🟨" },
    { name: "Python", icon: "🐍" },
  ],
  "Frontend": [
    { name: "React", icon: "⚛️" },
    { name: "HTML5", icon: "🌐" },
    { name: "CSS3", icon: "🎨" },
    { name: "Tailwind CSS", icon: "💨" },
  ],
  "Backend": [
    { name: "Node.js", icon: "🟢" },
    { name: "Express.js", icon: "🚂" },
    { name: "Java Servlets", icon: "☕" },
    { name: "REST APIs", icon: "🔌" },
  ],
  "Databases": [
    { name: "MySQL", icon: "🐬" },
    { name: "MongoDB", icon: "🍃" },
  ],
  "Tools": [
    { name: "Git", icon: "📋" },
    { name: "Maven", icon: "📦" },
    { name: "VS Code", icon: "💻" },
    { name: "Postman", icon: "📮" },
  ],
};

// ─── PROJECTS ──────────────────────────────────────────────────
export const projects = [
  {
    id: 1,
    title: "ShopSphere – E-Commerce Platform",
    description: "A simple social media-style web application that allows users to share posts, interact with content, and manage connections in a clean web interface.",
    image: "/proj1.png",
    tech: ["HTML", "CSS", "JavaScript"],
    features: ["Responsive design"],
    github: "https://github.com/pp548621-star/first-project",
    live: "https://first-project-three-umber.vercel.app/",
    youtube: "https://youtube.com/watch?v=demo1",
    category: ["HTML", "CSS", "JavaScript"],
    // featured: true,
  },
  {
    id: 2,
    title: "ExpenseBook – Expense Management",
    description: "A simple web-based expense tracker application that allows users to add, view, and manage income and expenses with real-time balance updates.",
    image: "/proj2.png",
    tech: ["JavaScript ", "HTML", "CSS", "React.js"],
    features: ["Add income and expenses", "Real-time balance calculation", "Transaction history tracking", "Monthly summary reports"],
    github: "https://github.com/pp548621-star/MedBook",
    live: "https://expense-one-gray.vercel.app/",
    youtube: "https://youtube.com/watch?v=demo2",
    category: ["JavaScript ", "HTML", "CSS", "React.js"]
  },
  {
    id: 3,
    title: "BillMate – Bill Management",
    description: "A web-based billing and invoice management application that allows users to create bills, manage customer data, and track payments efficiently.",
    image: "/proj3.png",
    tech: ["HTML", "CSS", "JavaScript", "React.js"],
    features: ["Create and generate invoices", "Manage customer details", "Track payment status"],
    github: "https://github.com/pp548621-star/BillMate",
    live: "https://bill-mate-self.vercel.app/",
    youtube: "https://youtube.com/watch?v=demo3",
    category: ["HTML", "CSS", "JavaScript", "React.js"]
  },
  {
    id: 4,
    title: "GeoTag Photo Logger",
    description: "A React Native mobile app that lets users capture geotagged photos with location metadata, stored in the cloud.",
    image: "/proj1.png",
    tech: ["React Native", "Expo", "Node.js", "MongoDB", "JWT"],
    features: ["GPS photo tagging", "JWT authentication", "Cloud storage", "Pull-to-refresh feed"],
    github: "https://github.com/pp548621-star/geotag",
    live: null,
    youtube: "https://youtube.com/watch?v=demo4",
    category: ["React Native", "Node.js", "MongoDB"],
    featured: false,
  }
];

// ─── EDUCATION ─────────────────────────────────────────────────
export const education = [
  {
    id: 1,
    degree: "B.Tech in Computer Science & Engineering",
    institution: "Rai University",
    year: "2025 – 2029",
    // gpa: "8.7 / 10",
    location: "Ahemadabad , Gujarat",
    coursework: ["Data Structures & Algorithms", "Operating Systems", "Database Management", "Computer Networks", "Software Engineering", "Machine Learning"],
    color: "from-primary-500 to-accent-500",
  },
  {
    id: 2,
    degree: "Diploma in Computer Engineering",
    institution: "Ganpat University",
    year: "2022 – 2025",
    gpa: "7.6 / 10",
    location: "Mahesana, Gujarat",
    coursework: ["C Programming", "Database Management", "Web Development", "Computer Networks"],
    color: "from-amber-500 to-orange-500",
  },
  {
    id: 3,
    degree: "Higher Secondary (PCM + CS)",
    institution: "Navyug Vidhyalay",
    year: "2020 – 2022",
    gpa: "73% (CBSE)",
    location: "Morbi, Gujarat",
    coursework: ["Mathematics", "Physics", "Chemistry", "Computer Science"],
    color: "from-emerald-500 to-teal-500",
  },
];

// ─── CERTIFICATES ──────────────────────────────────────────────
export const certificates = [
  {
    id: 1,
    title: "Bitathon",
    issuer: "Goa Institute of Management (GIM),",
    date: "August 2025",
    skills: ["Cloud Architecture", "AWS Models", "Security", "Networking"],
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80&w=600",
    url: "https://drive.google.com/file/d/14dFNJiRMB34Wx-p8xRTJdzq0tVvf5HqW/view?usp=sharing",
    color: "from-orange-400 to-amber-600",
  },
  {
    id: 2,
    title: "Dev Heat Hackathon of Spring Fiesta",
    issuer: "Indian Institute of Information Technology (IIIT),",
    date: "May 2025",
    skills: ["React", "JavaScript", "UI/UX", "Version Control"],
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=600",
    url: "https://drive.google.com/file/d/17Abh_Hg5s7FDEj6sjlvZMhT2DboBtTcz/view?usp=sharing",
    color: "from-blue-400 to-cyan-600",
  },
  {
    id: 3,
    title: "Ideation Phase of HACKSAGON 2026",
    issuer: "ABV-IIITM IEEE STUDENT BRANCH",
    date: "January 2025",
    skills: ["Python", "Data Structures", "OOP", "Scripting"],
    image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&q=80&w=600",
    url: "https://drive.google.com/file/d/1A5oDc0uzWCbX5sOwvOGIBEAiZa253ceh/view?usp=sharing",
    color: "from-green-400 to-emerald-600",
  },
  {
    id: 4,
    title: "Odoo x Adani University Hackathon",
    issuer: "Adani University",
    date: "January 2025",
    skills: ["Python", "Data Structures", "OOP", "Scripting"],
    image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&q=80&w=600",
    url: "https://drive.google.com/file/d/1eCIU6nQqzaRFfHF2TgYe8gjpVL17FSIR/view?usp=sharing",
    color: "from-green-400 to-emerald-600",
  }
];