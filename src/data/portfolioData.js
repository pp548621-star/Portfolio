// ─── PERSONAL INFO ─────────────────────────────────────────────
export const personalInfo = {
  name: "Alex Dev",
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
  email: "alex.dev@email.com",
  github: "https://github.com/alexdev",
  linkedin: "https://linkedin.com/in/alexdev",
  twitter: "https://twitter.com/alexdev",
  location: "Bangalore, India",
  available: true,
  resume: "/resume.pdf",
};

// ─── SKILLS ────────────────────────────────────────────────────
export const skills = {
  "Programming Languages": [
    { name: "Java", level: 88, icon: "☕" },
    { name: "C++", level: 75, icon: "⚙️" },
    { name: "JavaScript", level: 92, icon: "🟨" },
    { name: "TypeScript", level: 80, icon: "🔷" },
    { name: "Python", level: 70, icon: "🐍" },
  ],
  "Frontend": [
    { name: "React", level: 90, icon: "⚛️" },
    { name: "HTML5", level: 95, icon: "🌐" },
    { name: "CSS3", level: 90, icon: "🎨" },
    { name: "Tailwind CSS", level: 88, icon: "💨" },
    { name: "Redux", level: 78, icon: "🔄" },
  ],
  "Backend": [
    { name: "Node.js", level: 85, icon: "🟢" },
    { name: "Express.js", level: 83, icon: "🚂" },
    { name: "Java Servlets", level: 75, icon: "☕" },
    { name: "REST APIs", level: 90, icon: "🔌" },
    { name: "GraphQL", level: 65, icon: "📊" },
  ],
  "Databases": [
    { name: "MySQL", level: 82, icon: "🐬" },
    { name: "MongoDB", level: 88, icon: "🍃" },
    { name: "PostgreSQL", level: 70, icon: "🐘" },
    { name: "Redis", level: 60, icon: "🔴" },
  ],
  "Tools": [
    { name: "Git", level: 90, icon: "📋" },
    { name: "Docker", level: 72, icon: "🐳" },
    { name: "Maven", level: 75, icon: "📦" },
    { name: "VS Code", level: 95, icon: "💻" },
    { name: "Postman", level: 85, icon: "📮" },
  ],
};

// ─── PROJECTS ──────────────────────────────────────────────────
export const projects = [
  {
    id: 1,
    title: "ShopSphere – E-Commerce Platform",
    description: "A full-featured e-commerce platform with real-time inventory, secure payments, and an admin dashboard for store analytics.",
    image: "/proj1.png",
    tech: ["React", "Node.js", "MongoDB", "Tailwind CSS", "Stripe"],
    features: ["Secure Stripe payments", "Real-time cart sync", "Admin analytics", "Responsive design"],
    github: "https://github.com/alexdev/shopsphere",
    live: "https://shopsphere.demo",
    category: ["React", "Node.js", "MongoDB"],
    featured: true,
  },
  {
    id: 2,
    title: "TaskFlow – Project Manager",
    description: "A Kanban-style project management tool with drag-and-drop tasks, team collaboration, and deadline tracking.",
    image: "/proj2.png",
    tech: ["React", "TypeScript", "Redux", "Express", "PostgreSQL"],
    features: ["Drag & drop Kanban", "Team workspaces", "Deadline alerts", "Activity feed"],
    github: "https://github.com/alexdev/taskflow",
    live: "https://taskflow.demo",
    category: ["React", "TypeScript", "PostgreSQL"],
    featured: true,
  },
  {
    id: 3,
    title: "ChatSphere – Real-Time Chat",
    description: "A real-time messaging application with WebSocket support, group chats, file sharing, and end-to-end encryption.",
    image: "/proj3.png",
    tech: ["React", "Socket.io", "Node.js", "MongoDB", "JWT"],
    features: ["Real-time messaging", "Group chats", "File sharing", "E2E encryption"],
    github: "https://github.com/alexdev/chatsphere",
    live: "https://chatsphere.demo",
    category: ["React", "Node.js", "WebSocket"],
    featured: true,
  },
  {
    id: 4,
    title: "GeoTag Photo Logger",
    description: "A React Native mobile app that lets users capture geotagged photos with location metadata, stored in the cloud.",
    image: "/proj1.png",
    tech: ["React Native", "Expo", "Node.js", "MongoDB", "JWT"],
    features: ["GPS photo tagging", "JWT authentication", "Cloud storage", "Pull-to-refresh feed"],
    github: "https://github.com/alexdev/geotag",
    live: null,
    category: ["React Native", "Node.js", "MongoDB"],
    featured: false,
  },
  {
    id: 5,
    title: "DevBlog – Technical Articles",
    description: "A developer-focused blogging platform with Markdown support, syntax highlighting, and an SEO-optimized architecture.",
    image: "/proj2.png",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL"],
    features: ["Markdown editor", "Syntax highlighting", "SEO optimized", "Comment system"],
    github: "https://github.com/alexdev/devblog",
    live: "https://devblog.demo",
    category: ["Next.js", "TypeScript", "PostgreSQL"],
    featured: false,
  },
  {
    id: 6,
    title: "StockVision – Algo Trader",
    description: "A stock market simulator using historical data, technical indicators, and backtesting for algorithmic trading strategies.",
    image: "/proj3.png",
    tech: ["Python", "React", "D3.js", "Flask", "PostgreSQL"],
    features: ["Backtesting engine", "Technical indicators", "Interactive charts", "Portfolio simulation"],
    github: "https://github.com/alexdev/stockvision",
    live: null,
    category: ["Python", "React", "D3.js"],
    featured: false,
  },
];

// ─── EXPERIMENTS ───────────────────────────────────────────────
export const experiments = [
  {
    id: 1,
    title: "🎮 Snake Game",
    description: "Classic Snake game built with HTML Canvas, featuring smooth animations, high scores, and neon aesthetics.",
    tags: ["Game", "Canvas", "JavaScript"],
    type: "game",
    color: "from-green-400 to-emerald-600",
    github: "https://github.com/alexdev/snake-game",
    live: true,
  },
  {
    id: 2,
    title: "🔍 Pathfinder Visualizer",
    description: "Interactive visualizer for BFS, DFS, Dijkstra and A* pathfinding algorithms with animated grid exploration.",
    tags: ["Algorithm", "Visualization", "React"],
    type: "visualization",
    color: "from-blue-400 to-indigo-600",
    github: "https://github.com/alexdev/pathfinder",
    live: true,
  },
  {
    id: 3,
    title: "🌊 Particle Wave",
    description: "A mesmerizing WebGL particle simulation with physics-based wave motion and interactive mouse repulsion.",
    tags: ["WebGL", "Animation", "Canvas"],
    type: "animation",
    color: "from-cyan-400 to-blue-600",
    github: "https://github.com/alexdev/particle-wave",
    live: true,
  },
  {
    id: 4,
    title: "🧠 Sorting Visualizer",
    description: "Visualize Bubble, Merge, Quick, and Heap sort algorithms with real-time bar animations and comparison counts.",
    tags: ["Algorithm", "Visualization", "D3.js"],
    type: "visualization",
    color: "from-violet-400 to-purple-600",
    github: "https://github.com/alexdev/sorting-viz",
    live: true,
  },
  {
    id: 5,
    title: "🤖 Neural Network Visualizer",
    description: "Interactive visual demo of a neural network forward pass with adjustable layers and activation functions.",
    tags: ["AI/ML", "Visualization", "Prototype"],
    type: "ai",
    color: "from-rose-400 to-pink-600",
    github: "https://github.com/alexdev/nn-viz",
    live: false,
  },
  {
    id: 6,
    title: "🎵 Audio Visualizer",
    description: "Real-time audio spectrum visualizer using Web Audio API with multiple visualization modes and color themes.",
    tags: ["Web Audio", "Canvas", "Experiment"],
    type: "animation",
    color: "from-amber-400 to-orange-600",
    github: "https://github.com/alexdev/audio-viz",
    live: true,
  },
];

// ─── EXPERIENCE ────────────────────────────────────────────────
export const experiences = [
  {
    id: 1,
    company: "TechCorp Solutions",
    role: "Full Stack Developer Intern",
    duration: "Jun 2024 – Aug 2024",
    location: "Bangalore, India",
    type: "Internship",
    contributions: [
      "Built and shipped 3 internal tools using React + Node.js that reduced manual data entry by 40%",
      "Developed REST APIs for a customer portal serving 10,000+ users",
      "Optimized MySQL queries, improving dashboard load times by 60%",
      "Collaborated in Agile sprints, participating in daily standups and code reviews",
    ],
    tech: ["React", "Node.js", "MySQL", "Git", "Jira"],
    color: "from-primary-500 to-accent-500",
  },
  {
    id: 2,
    company: "Open Source Contributor",
    role: "Contributing Developer",
    duration: "Jan 2024 – Present",
    location: "Remote",
    type: "Open Source",
    contributions: [
      "Contributed 15+ PR merges to popular JavaScript/React open-source projects",
      "Fixed critical accessibility bugs in a React UI library with 8k GitHub stars",
      "Wrote comprehensive documentation and unit tests for a Node.js ORM",
      "Mentored 3 new contributors in the community",
    ],
    tech: ["React", "TypeScript", "Node.js", "GitHub Actions"],
    color: "from-emerald-500 to-teal-500",
  },
  {
    id: 3,
    company: "CodeLabs Hackathon",
    role: "Team Lead",
    duration: "Oct 2023",
    location: "Mumbai, India",
    type: "Hackathon",
    contributions: [
      "Led a 4-person team to build a full-stack app in 24 hours",
      "Won 2nd place out of 120 participating teams",
      "Architected the entire backend and deployed on AWS EC2",
      "Delivered a working product demo to a panel of 10 industry judges",
    ],
    tech: ["React", "Express", "MongoDB", "AWS", "Socket.io"],
    color: "from-amber-500 to-orange-500",
  },
];

// ─── EDUCATION ─────────────────────────────────────────────────
export const education = [
  {
    id: 1,
    degree: "B.Tech in Computer Science & Engineering",
    institution: "National Institute of Technology",
    year: "2021 – 2025",
    gpa: "8.7 / 10",
    location: "Surathkal, Karnataka",
    coursework: ["Data Structures & Algorithms", "Operating Systems", "Database Management", "Computer Networks", "Software Engineering", "Machine Learning"],
    color: "from-primary-500 to-accent-500",
  },
  {
    id: 2,
    degree: "Higher Secondary (PCM + CS)",
    institution: "Delhi Public School",
    year: "2019 – 2021",
    gpa: "94.6% (CBSE)",
    location: "Bangalore, Karnataka",
    coursework: ["Mathematics", "Physics", "Chemistry", "Computer Science"],
    color: "from-emerald-500 to-teal-500",
  },
];

// ─── GITHUB STATS ──────────────────────────────────────────────
export const githubStats = {
  username: "alexdev",
  repos: 42,
  stars: 180,
  followers: 95,
  commits: 1240,
  prs: 87,
  issues: 134,
};

// ─── BLOG POSTS ────────────────────────────────────────────────
export const blogPosts = [
  {
    id: 1,
    title: "Building a Real-Time Chat App with Socket.io and React",
    excerpt: "A step-by-step guide to implementing WebSocket-based real-time communication in a full-stack JavaScript app.",
    date: "March 10, 2026",
    readTime: "8 min read",
    category: "Tutorial",
    tags: ["React", "Node.js", "WebSocket"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 2,
    title: "Mastering the A* Algorithm with an Interactive Visualizer",
    excerpt: "Deep dive into one of the most elegant pathfinding algorithms, with animated demos and JavaScript implementation.",
    date: "February 22, 2026",
    readTime: "12 min read",
    category: "Algorithm",
    tags: ["Algorithms", "JavaScript", "Visualization"],
    color: "from-violet-500 to-purple-600",
  },
  {
    id: 3,
    title: "Clean Architecture with Node.js — A Practical Guide",
    excerpt: "How to structure large Node.js applications using repository patterns, dependency injection, and layered architecture.",
    date: "January 30, 2026",
    readTime: "10 min read",
    category: "Architecture",
    tags: ["Node.js", "Backend", "Design Patterns"],
    color: "from-emerald-500 to-teal-600",
  },
];
