// index.js
export const personalInfo = {
  name: "Anurag Gupta",
  roleTitle: "Software Engineer • LFX Mentee • AI & Cloud Infrastructure",
  headline: "LFX Mentee @ GitMesh • Open Source • Distributed Systems & AI",
  email: "job4anurag11@gmail.com",
  phone: "+91-9151491382",
  location: "Ghaziabad, Uttar Pradesh, India",
  college: "Ajay Kumar Garg Engineering College (AKGEC)",
  degree: "B.Tech in Electronics and Computing Engineering",
  cgpa: "7.2",
  github: "https://github.com/AnuragGupta181",
  linkedin: "https://www.linkedin.com/in/anuragg1817",
  stats: [
    { label: "Hands-on Experience", value: "1+ Yrs" },
    { label: "Merged Open Source PRs", value: "12+" },
    { label: "Concurrent Users Served", value: "500+" },
    { label: "Specialized Resumes", value: "4 Roles" },
  ],
};

export const resumes = [
  {
    id: "se",
    title: "Software Engineer",
    role: "Full-Stack, Backend & Distributed Systems",
    fileName: "Anurag_Resume_SE.pdf",
    filePath: "/resume/Anurag_Resume_SE.pdf",
    tagline: "TypeScript, Node.js, FastAPI, Microservices, Redis, PostgreSQL",
    badge: "Core Role",
  },
  {
    id: "ai",
    title: "AI & MLOps Engineer",
    role: "Vision-Language Models, Agentic AI, MCP & RAG",
    fileName: "Anurag_Resume_AI.pdf",
    filePath: "/resume/Anurag_Resume_AI.pdf",
    tagline: "Qwen2.5-VL, LoRA Fine-Tuning, LangChain, LangGraph, Model Context Protocol",
    badge: "Specialized",
  },
  {
    id: "devops",
    title: "DevOps & Cloud Engineer",
    role: "Cloud Systems, AWS ECS, ALB & CI/CD",
    fileName: "Anurag_Resume-DevOps.pdf",
    filePath: "/resume/Anurag_Resume-DevOps.pdf",
    tagline: "AWS (ECS, ALB, WAF), Docker, GitHub Actions, MongoDB Replica Sets, Nginx",
    badge: "Infrastructure",
  },
  {
    id: "ece",
    title: "Electronics & Robotics",
    role: "Embedded Systems, ROS 2, UAV Swarms & IoT",
    fileName: "Anurag_Resume-ECE-10sep.pdf",
    filePath: "/resume/Anurag_Resume-ECE-10sep.pdf",
    tagline: "ROS 2 Humble, PX4 Autopilot, NI LabVIEW Core I & II, ESP32, YOLOv12 Edge",
    badge: "Hardware & Edge",
  },
];

export const servicesData = [
  {
    title: "Backend & Distributed Systems",
    description:
      "Building high-concurrency microservices, resilient REST APIs, and event-driven architectures designed to scale effortlessly without downtime or bottleneck regressions.",
    items: [
      {
        title: "Microservices & API Architecture",
        description: "(REST APIs, FastAPI, Node.js, Express, CQRS Patterns, JWT & OAuth)",
      },
      {
        title: "Database Engineering & Caching",
        description: "(PostgreSQL, MongoDB Replica Sets, Redis Caching, Drizzle ORM, Schema Tuning)",
      },
      {
        title: "Asynchronous Job Queues",
        description: "(BullMQ, Redis message queues, background compute decoupling, high throughput)",
      },
    ],
  },
  {
    title: "Cloud Infrastructure & DevOps",
    description:
      "Automating deployment pipelines, containerizing workloads, and orchestrating highly available cloud infrastructure on AWS that slashes operational costs while guaranteeing 99.9% uptime.",
    items: [
      {
        title: "AWS Cloud Orchestration",
        description: "(ECS, EC2, Application Load Balancers (ALB), S3 Object Storage, WAF)",
      },
      {
        title: "Automated CI/CD Workflows",
        description: "(GitHub Actions, Docker containerization, regression testing, automated releases)",
      },
      {
        title: "High Availability & Traffic Routing",
        description: "(Nginx reverse proxy, Cloudflare CDN/DDoS mitigation, zero-downtime rolling deploys)",
      },
    ],
  },
  {
    title: "Agentic AI & MLOps Engineering",
    description:
      "Bridging machine learning research into production-grade systems—from fine-tuning multi-modal vision-language models to architecting autonomous agentic RAG workflows.",
    items: [
      {
        title: "Vision-Language Models & Fine-Tuning",
        description: "(Qwen2.5-VL-7B-Instruct, Unsloth, LoRA on Lightning AI, 45% VRAM reduction)",
      },
      {
        title: "Multi-Agent Systems & MCP",
        description: "(Model Context Protocol servers, LangChain, LangGraph, LangSmith observability)",
      },
      {
        title: "Document AI & Computer Vision",
        description: "(Multi-modal OCR with Playwright & Python, YOLOv12, OpenCV, high-throughput inference)",
      },
    ],
  },
  {
    title: "Robotics & Embedded Systems",
    description:
      "Engineering hardware-software synergies—from autonomous multi-UAV swarm synchronization to edge IoT intelligence and certified NI LabVIEW instrumentation.",
    items: [
      {
        title: "Autonomous Multi-UAV Swarms",
        description: "(ROS 2 Humble, PX4 Autopilot, Micro-XRCE-DDS, Gazebo SITL, SLAM, sub-50ms sync)",
      },
      {
        title: "Edge AI & Autonomous Robotics",
        description: "(ESP32, ESP32-CAM, real-time YOLO crop pest detection, L298N motor drivers)",
      },
      {
        title: "Instrumentation & Signal Processing",
        description: "(NI LabVIEW Core I & II Associate Developer, NI MyRIO, NI Multisim digital logic)",
      },
    ],
  },
];

export const experienceData = [
  {
    id: 1,
    role: "Open Source Software Engineer (LFX Mentee)",
    company: "GitMesh – The Linux Foundation",
    period: "Jun 2026 – Present",
    type: "Remote",
    badge: "Linux Foundation Mentorship",
    description:
      "Contributing to GitMesh, an open-source decentralized developer-tooling and software infrastructure platform with 15+ pull requests and 30+ code reviews across backend services, testing, and CI/CD.",
    highlights: [
      "Engineered infrastructure for multi-agent AI orchestration and Model Context Protocol (MCP) servers across multi-repo environments.",
      "Developed TypeScript/Node.js microservices and REST API integrations, automating GitHub-based workflows and reducing manual dev tasks by 40%.",
      "Built GitHub Actions CI/CD pipelines with automated unit/integration testing, cutting build-and-test cycle time by 35%.",
      "Optimized PostgreSQL schemas via Drizzle ORM and integrated Redis caching, boosting query response times by 30%.",
    ],
    technologies: [
      "TypeScript",
      "Node.js",
      "Docker",
      "PostgreSQL",
      "Redis",
      "Drizzle ORM",
      "GitHub Actions",
      "MCP",
    ],
  },
  {
    id: 2,
    role: "MLOps / Software Engineering Intern",
    company: "Carbon Crunch",
    period: "Jun 2026 – Aug 2026",
    type: "Noida, Uttar Pradesh (Hybrid)",
    badge: "Industry Internship",
    description:
      "Engineered high-volume multi-modal data extraction pipelines and fine-tuned open-weight vision-language models for enterprise document processing.",
    highlights: [
      "Engineered Python document-processing and OCR pipelines that extracted structured data from 5,000+ PDFs and images into standardized JSON schemas with 90%+ accuracy.",
      "Fine-tuned Qwen2.5-VL-7B-Instruct using Unsloth and LoRA on Lightning AI, reducing GPU VRAM consumption by 45% and accelerating training cycles by 30%.",
      "Automated high-volume web ingestion via Playwright, maintaining 99.9% pipeline reliability and reducing manual data-entry effort by 60%.",
      "Benchmarked Florence, Meta Llama, and Azure AI inference, cutting cloud runtime costs by 35%, and deployed Dockerized FastAPI REST endpoints.",
    ],
    technologies: [
      "Python",
      "FastAPI",
      "Playwright",
      "Docker",
      "Qwen2.5-VL",
      "Unsloth",
      "LoRA",
      "Lightning AI",
      "OpenCV",
    ],
  },
  {
    id: 3,
    role: "Machine Learning & DevOps Lead / Cloud Infrastructure Engineer",
    company: "Cloud Computing Cell – AKGEC",
    period: "Oct 2025 – Present",
    type: "Ghaziabad, Uttar Pradesh",
    badge: "Technical Leadership",
    description:
      "Led an engineering team of 5 to architect, containerize, and deploy scalable cloud backend systems and microservices serving 500+ concurrent users with 99.9% uptime.",
    highlights: [
      "Deployed high-availability platform on AWS (ECS, EC2, ALB) supporting 500+ concurrent users at just $50 infrastructure cost via Free Tier optimizations.",
      "Decomposed monolithic apps into 4+ microservices on AWS ECS with Application Load Balancer routing (CQRS pattern) enabling zero-downtime releases.",
      "Configured multi-node MongoDB Replica Set with automated failover, Nginx reverse proxy, and Cloudflare WAF/CDN.",
      "Architected asynchronous job processing with BullMQ + Redis, offloading compute-intensive tasks and cutting average API response time by 50%.",
      "Automated build-test-deploy with GitHub Actions CI/CD + Docker, cutting deployment time from 45 minutes to under 5 minutes.",
    ],
    technologies: [
      "AWS (ECS, ALB, EC2, S3, WAF)",
      "Docker",
      "MongoDB",
      "Redis",
      "BullMQ",
      "GitHub Actions",
      "Nginx",
      "Cloudflare",
    ],
  },
  {
    id: 4,
    role: "LabVIEW Trainee",
    company: "Tifac Lab",
    period: "Feb 2025 – Present",
    type: "Ghaziabad, Uttar Pradesh",
    badge: "Embedded Instrumentation",
    description:
      "Engineered hardware-in-the-loop signal processing systems and digital instrumentation interfaces.",
    highlights: [
      "Engineered an 8x8 Matrix Keypad interface integrated with NI MyRIO, enabling real-time digital input signal processing and visualization.",
      "Developed custom LabVIEW Virtual Instruments (VIs) decoding matrix inputs with 99% accuracy, reducing data latency by 40%.",
    ],
    technologies: ["NI LabVIEW", "NI MyRIO", "Digital Signal Processing", "Virtual Instruments"],
  },
];

export const openSourceData = {
  totalPRs: "12+ Merged PRs",
  contributions: [
    {
      repo: "GitMesh (The Linux Foundation)",
      prs: "5 Merged PRs",
      summary:
        "Engineered GitHub Copilot and Cursor adapter detection routines, automated CI workflows via GitHub Actions, boosted UI route test coverage by 30%, and slashed Docker setup times by 25%.",
      link: "https://github.com/AnuragGupta181",
    },
    {
      repo: "Image Processing Tool",
      prs: "3 Merged PRs",
      summary:
        "Integrated high-throughput ML model inference APIs, cutting response latency by 35% across processing pipelines.",
      link: "https://github.com/AnuragGupta181",
    },
    {
      repo: "Kryptonite & Community Tools",
      prs: "4 Merged PRs",
      summary:
        "Integrated AI chatbot endpoints serving 500+ daily requests, implemented OAuth authentication, and stabilized user login pipelines.",
      link: "https://github.com/AnuragGupta181",
    },
  ],
};

export const projects = [
  {
    id: 1,
    name: "AI Image Processing Platform",
    tagline: "Full-Stack Vision Suite with Background Removal, YOLO & OCR",
    description:
      "A production full-stack platform featuring a React frontend and FastAPI backend delivering background removal, YOLO object detection, and OCR. Architected 10+ REST API endpoints as modular services with Redis caching and AWS S3 storage, cutting latency by 60% across 1,000+ uploads.",
    href: "https://github.com/AnuragGupta181",
    image: "/assets/projects/plant-shop.jpg",
    bgImage: "/assets/backgrounds/curtains.jpg",
    frameworks: [
      { id: 1, name: "React" },
      { id: 2, name: "FastAPI" },
      { id: 3, name: "YOLO" },
      { id: 4, name: "OpenCV" },
      { id: 5, name: "Redis" },
      { id: 6, name: "AWS S3" },
      { id: 7, name: "Docker" },
    ],
  },
  {
    id: 2,
    name: "Generative AI & RAG Platform",
    tagline: "Enterprise RAG & Agentic Workflows with Observability",
    description:
      "Production-ready Retrieval-Augmented Generation system using structured JSON knowledge packs, boosting website engagement by 30%. Architected autonomous agentic workflows with LangChain & LangGraph, full LLM observability via LangSmith, and scaled FastAPI microservices on AWS to absorb 80% traffic spikes.",
    href: "https://github.com/AnuragGupta181",
    image: "/assets/projects/apple-tech-store.jpg",
    bgImage: "/assets/backgrounds/map.jpg",
    frameworks: [
      { id: 1, name: "FastAPI" },
      { id: 2, name: "LangChain" },
      { id: 3, name: "LangGraph" },
      { id: 4, name: "LangSmith" },
      { id: 5, name: "AWS" },
      { id: 6, name: "Python" },
      { id: 7, name: "MLOps" },
    ],
  },
  {
    id: 3,
    name: "Autonomous Multi-UAV Swarm System",
    tagline: "ROS 2 & PX4 Distributed Leader-Follower Swarm Framework",
    description:
      "Architected a distributed 4-UAV swarm framework using ROS 2 Humble, PX4 Autopilot, and Micro-XRCE-DDS with sub-50ms sync latency. Engineered GPS-denied navigation combining 3D depth perception, SLAM, and A* obstacle-free path generation, validated in Gazebo SITL with 95% trajectory tracking accuracy.",
    href: "https://github.com/AnuragGupta181",
    image: "/assets/projects/game-store.jpg",
    bgImage: "/assets/backgrounds/curtains.jpg",
    frameworks: [
      { id: 1, name: "ROS 2 Humble" },
      { id: 2, name: "PX4 Autopilot" },
      { id: 3, name: "Gazebo SITL" },
      { id: 4, name: "SLAM" },
      { id: 5, name: "C++" },
      { id: 6, name: "Python" },
    ],
  },
  {
    id: 4,
    name: "Carbon Crunch Multi-Modal OCR Pipeline",
    tagline: "Fine-Tuned Qwen-VL & High-Volume Data Ingestion",
    description:
      "End-to-end multi-modal document extraction pipeline processing 5,000+ PDFs/images into structured JSON schemas with 90%+ extraction accuracy. Fine-tuned Qwen2.5-VL-7B-Instruct with Unsloth & LoRA on Lightning AI cutting GPU VRAM by 45%. Automated ingestion with Playwright.",
    href: "https://github.com/AnuragGupta181",
    image: "/assets/projects/mobile-accessories-store.jpg",
    bgImage: "/assets/backgrounds/blanket.jpg",
    frameworks: [
      { id: 1, name: "Python" },
      { id: 2, name: "Qwen2.5-VL" },
      { id: 3, name: "Playwright" },
      { id: 4, name: "Unsloth" },
      { id: 5, name: "LoRA" },
      { id: 6, name: "FastAPI" },
      { id: 7, name: "Docker" },
    ],
  },
  {
    id: 5,
    name: "High-Availability Cloud Assessment Platform",
    tagline: "AWS ECS Microservices, MongoDB Replica Set & BullMQ",
    description:
      "Enterprise assessment platform engineered for 500+ concurrent users with 99.9% uptime on AWS Free Tier ($50 total cost). Path-based ALB routing for CQRS microservices on ECS, MongoDB multi-node replica set with automated failover, BullMQ/Redis asynchronous task queues, and automated CI/CD.",
    href: "https://github.com/AnuragGupta181",
    image: "/assets/projects/electronics-store.jpg",
    bgImage: "/assets/backgrounds/poster.jpg",
    frameworks: [
      { id: 1, name: "AWS ECS" },
      { id: 2, name: "Docker" },
      { id: 3, name: "MongoDB" },
      { id: 4, name: "Redis" },
      { id: 5, name: "BullMQ" },
      { id: 6, name: "GitHub Actions" },
      { id: 7, name: "Nginx" },
    ],
  },
  {
    id: 6,
    name: "Pesticide Detection Agricultural Robot",
    tagline: "ESP32, ESP32-CAM & Real-Time YOLOv12 Edge Detection",
    description:
      "Autonomous agricultural robot prototype built with ESP32 and ESP32-CAM executing real-time crop pest identification via YOLOv12 at 35% lower cost than commercial solutions. Integrated L298N motor drivers for automated field navigation, potentially reducing manual labor by 80%.",
    href: "https://github.com/AnuragGupta181",
    image: "/assets/projects/home-decor-store.jpg",
    bgImage: "/assets/backgrounds/table.jpg",
    frameworks: [
      { id: 1, name: "ESP32" },
      { id: 2, name: "YOLOv12" },
      { id: 3, name: "OpenCV" },
      { id: 4, name: "L298N" },
      { id: 5, name: "MicroPython" },
      { id: 6, name: "IoT 4.0" },
    ],
  },
];

export const skillsData = {
  categories: [
    {
      name: "Programming Languages",
      skills: ["Python", "TypeScript", "JavaScript", "C++", "SQL", "HTML5", "CSS3"],
    },
    {
      name: "AI & Machine Learning",
      skills: [
        "Agentic AI",
        "Model Context Protocol (MCP)",
        "Fine-Tuning (Unsloth, LoRA)",
        "Qwen2.5-VL-7B-Instruct",
        "RAG Systems",
        "LangChain & LangGraph",
        "LangSmith Tracing",
        "YOLO / YOLOv12",
        "OpenCV",
        "Document OCR",
      ],
    },
    {
      name: "Cloud & DevOps",
      skills: [
        "AWS (ECS, ALB, EC2, S3, WAF)",
        "Docker Containerization",
        "CI/CD (GitHub Actions)",
        "CQRS Microservices",
        "Linux Administration",
        "Nginx Reverse Proxy",
        "Cloudflare CDN / Security",
        "Zero-Downtime Deployments",
      ],
    },
    {
      name: "Backend & Databases",
      skills: [
        "Node.js",
        "Express.js",
        "FastAPI",
        "PostgreSQL",
        "MongoDB (Replica Sets)",
        "Redis Caching",
        "Drizzle ORM",
        "BullMQ Task Queues",
        "REST APIs & JWT/OAuth",
      ],
    },
    {
      name: "Frontend & Web",
      skills: ["React.js", "Next.js", "Tailwind CSS", "Vite", "GSAP Animations", "Three.js"],
    },
    {
      name: "Robotics & Hardware (ECE)",
      skills: [
        "ROS 2 Humble",
        "PX4 Autopilot",
        "Micro-XRCE-DDS",
        "Gazebo SITL",
        "SLAM & A* Pathfinding",
        "NI LabVIEW Core I & II",
        "NI MyRIO",
        "NI Multisim",
        "ESP32 & IoT 4.0",
      ],
    },
    {
      name: "Developer Tools & Testing",
      skills: [
        "Playwright",
        "Git & GitHub",
        "Postman",
        "Claude Code",
        "VS Code",
        "PyCharm",
        "Unit & Integration Testing",
        "Agile / Scrum",
      ],
    },
  ],
};

export const educationData = [
  {
    degree: "B.Tech in Electronics and Computing Engineering",
    institution: "Ajay Kumar Garg Engineering College (AKGEC)",
    location: "Ghaziabad, Uttar Pradesh",
    period: "2023 – Present",
    score: "CGPA: 7.2",
    details:
      "Focusing on Distributed Systems, Cloud Architecture, Artificial Intelligence, and Embedded Robotics. Active technical lead in the Cloud Computing Cell.",
  },
  {
    degree: "Senior Secondary Education (Class XII)",
    institution: "PM SHRI Kendriya Vidyalaya",
    location: "Babina, Uttar Pradesh",
    period: "Completed 2023",
    score: "77%",
    details: "Mathematics, Physics, Chemistry, and Computer Science foundation.",
  },
];

export const achievementsData = [
  {
    id: 1,
    title: "LFX Mentee – The Linux Foundation",
    description:
      "Selected for prestigious Linux Foundation mentorship program contributing to GitMesh decentralized software infrastructure and developer tooling.",
    badge: "International Mentorship",
  },
  {
    id: 2,
    title: "2nd Position in Student Research Symposium",
    description:
      "Awarded 2nd position by IEEE Xplore for innovative research and paper presentation.",
    badge: "IEEE Xplore Award",
  },
  {
    id: 3,
    title: "Top 10 Finalist – SyncUP Hackathon",
    description:
      "Recognized among the top 10 finalists out of hundreds of engineering teams for high-impact software innovation.",
    badge: "Hackathon Finalist",
  },
  {
    id: 4,
    title: "Top 20 of 300+ Teams (Top 7%)",
    description:
      "Ranked in top 20 of 300+ teams in the internal Smart India Hackathon competitive selection round.",
    badge: "SIH Top 7%",
  },
  {
    id: 5,
    title: "Certified Core I & Core II LabVIEW Associate Developer",
    description:
      "Official National Instruments certification in LabVIEW Virtual Instruments development and hardware integration.",
    badge: "NI Certification",
  },
];

export const socials = [
  {
    name: "GitHub",
    href: "https://github.com/AnuragGupta181",
    label: "github.com/AnuragGupta181",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/anuragg1817",
    label: "linkedin.com/in/anuragg1817",
  },
  {
    name: "Email",
    href: "mailto:job4anurag11@gmail.com",
    label: "job4anurag11@gmail.com",
  },
  {
    name: "Phone",
    href: "tel:+919151491382",
    label: "+91-9151491382",
  },
];
