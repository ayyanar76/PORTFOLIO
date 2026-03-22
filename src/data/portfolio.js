export const profile = {
  firstName: 'Ayyanar',
  fullName: 'Ayyanar Murugan',
  role: 'Aspiring Full-Stack Web Developer',
  tagline:
    'Building responsive web experiences with a growing backend toolkit and a strong problem-solving mindset.',
  email: 'ayyanarmurugan896@gmail.com',
  phone: '+91 6382678350',
  location: 'Virudhunagar, Tamil Nadu, India',
  education: {
    degree: 'Bachelor of Information & Technology',
    school: 'AAA College of Engineering',
    period: '2024 - Present',
  },
  about: [
    'I am an aspiring full-stack web developer with hands-on experience in frontend technologies and growing expertise in backend development.',
    'I enjoy learning new tools, frameworks, and best practices to build scalable web applications that feel fast, polished, and useful.',
    'My current focus is building both web and app experiences, shipping responsive interfaces, and strengthening the systems behind them.',
  ],
  languages: ['English', 'Tamil'],
  socialLinks: {
    github: "https://github.com/ayyanar76",
    linkedin: "https://www.linkedin.com/in/ayyanar-p/",
    email: 'mailto:ayyanarmurugan896@gmail.com',
  },
}

export const skillGroups = [
  {
    title: 'Frontend',
    description: 'Crafting responsive, modern interfaces with strong UI fundamentals.',
    skills: ['React', 'JavaScript', 'Responsive Design'],
  },
  {
    title: 'Backend',
    description: 'Expanding server-side skills and API thinking for scalable apps.',
    skills: ['Node.js', 'REST API', 'Authentication & Authorization'],
  },
  {
    title: 'Tools',
    description: 'Practical tooling for development, debugging, and project delivery.',
    skills: ['Git Workflow', 'Problem Solving', 'Deployment'],
  },
  {
    title: 'Database',
    description: 'Growing familiarity with data-driven application architecture.',
    skills: ['Database Concepts', 'Admin Panel Data Flows', 'CRUD Patterns'],
  },
]

export const projects = [
  {
    title: "Tomato Food Delivery",
    status: "Full Stack Production App",
    description:
      "A complete food delivery platform with authentication, real-time order handling, rider services, payment integration, and location tracking.",
    stack: ["React", "Node.js", "Express", "MongoDB", "Socket.IO", "Razorpay"],
    preview: "Food Delivery app",
    image:"tomato.jpeg",
    highlights: [
      "Secure Authentication & Authorization",
      "Integrated Online Payment System",
      "Real-time Order Tracking with Riders",
      "Location-based Delivery System",
      "Admin Dashboard for Order Management"
    ],
    focus: "Full Stack MERN Application",
    live: "https://tomato-front-zvpu.onrender.com/login",
    github: "" // add later if needed
  },
  {
  title: "Three60 Shops (Ecommerce Platform)",
  status: "Full Stack E-Commerce",
  description:
    "A complete e-commerce web application with product browsing, cart management, authentication, and secure checkout experience. Built with a scalable architecture for real-world usage.",
  stack: ["React", "Node.js", "Express", "MongoDB", "JWT Auth"],
  preview: "ecommerce",
  image:"three360.png",
  highlights: [
    "User Authentication & Authorization",
    "Add to Cart & Checkout Flow",
    "Product Listing & Search",
    "Responsive UI for All Devices",
    "Secure Backend APIs"
  ],
  focus: "Full Stack MERN Ecommerce",
  live: "https://three60-shops-vijh.onrender.com/",
  github: ""
},
{
  title: "AI Website Builder UI",
  status: "Frontend UI Project",
  description:
    "A modern AI-powered website builder interface focused on clean UI/UX, drag-and-drop inspired layouts, and responsive design using Tailwind CSS.",
  stack: ["React", "Tailwind CSS", "Framer Motion"],
  preview: "ai-builder",
  image: "ai-website.png",
  highlights: [
    "Clean SaaS-style UI Design",
    "Responsive Layout (Mobile + Desktop)",
    "Drag-and-Drop Inspired Sections",
    "Smooth Animations with Framer Motion",
    "Reusable UI Components"
  ],
  focus: "Frontend UI / UX Development",
  live: "https://ai-web-ypvu.onrender.com/", // add later if hosted
  github: "" // add later if needed
}
];

export const services = [
  {
    title: 'Web Apps',
    description:
      'Responsive product sites and full web applications designed for clarity, speed, and usability.',
  },
  {
    title: 'APIs',
    description:
      'Backend-ready integrations, authentication flows, and scalable data-driven features.',
  },
  {
    title: 'UI / UX',
    description:
      'Clean interface systems with modern layout, thoughtful spacing, and polished interactions.',
  },
]

export const stats = [
  { label: 'Focused Track', value: 'Full-Stack' },
  { label: 'Flagship Project', value: 'Ecommerce' },
  { label: 'Languages', value: '2 Spoken' },
]
