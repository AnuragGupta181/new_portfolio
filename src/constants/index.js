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
  website: "https://anurag11.tech",
  linktree: "https://linktr.ee/anuraggupta11",
  cal: "https://cal.com/anurag-gupta-11",
  stats: [
    { label: "Hands-on Experience", value: "1+ Yrs" },
    { label: "Merged Open Source PRs", value: "25+" },
    { label: "Concurrent Users Served", value: "250+" },
    { label: "Specialized Resumes", value: "5 Roles" },
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
    fileName: "Anurag_Resume-ECE.pdf",
    filePath: "/resume/Anurag_Resume-ECE.pdf",
    tagline: "ROS 2 Humble, PX4 Autopilot, NI LabVIEW Core I & II, ESP32, YOLOv12 Edge",
    badge: "Hardware & Edge",
  },
  {
    id: "ros",
    title: "Robotics (ROS 2) Engineer",
    role: "ROS 2, Nav2, Autonomous Navigation & UAV Swarms",
    fileName: "Anurag_ROS_Resume.pdf",
    filePath: "/resume/Anura_ROS_Resume.pdf",
    tagline: "ROS 2 Humble, Nav2, AMCL, DWB, Gazebo Classic 11, TurtleBot3, PX4, SLAM",
    badge: "Open Robotics",
  },
];

export const servicesData = [
  {
    title: "Backend & Distributed Systems",
    icon: "/icons/database.png",
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
    icon: "/icons/cloud.png",
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
      {
        title: "Kubernetes, GitOps & Observability",
        description: "(Kubernetes, Helm, Jenkins, Argo CD & Rollouts, Trivy, SonarQube, Prometheus, Grafana)",
      },
    ],
  },
  {
    title: "Agentic AI & MLOps Engineering",
    icon: "/icons/brain.png",
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
        description: "(Multi-modal OCR with Playwright & Python, YOLOv12, OpenCV, 86% extraction accuracy)",
      },
    ],
  },
  {
    title: "Robotics & Embedded Systems",
    icon: "/icons/circuit.png",
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
        title: "Autonomous Navigation (Nav2)",
        description: "(ROS 2 Humble, Nav2, AMCL, DWB, Gazebo Classic 11, TurtleBot3, 100% waypoint success)",
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
      "Optimized PostgreSQL schemas via Drizzle ORM and integrated Redis caching, boosting query response times by 30%; resolved 20+ issues through collaborative debugging.",
      "Improved automated triage and PR-review efficiency by 40% by implementing policy-based governance and maintainer tooling on PostgreSQL, Redis, and Drizzle ORM.",
      "Cut Docker setup time by 25% and CI build times by 35% by optimizing GitHub Actions and Docker for the multi-agent AI platform.",
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
      "Engineered Python document-processing and OCR pipelines that extracted structured data from 5,000+ PDFs and images into standardized JSON schemas at 86% extraction accuracy.",
      "Fine-tuned Qwen2.5-VL-7B-Instruct using Unsloth and LoRA on Lightning AI, reducing GPU VRAM consumption by 45% and accelerating training cycles by 30%.",
      "Automated high-volume web ingestion via Playwright and vision-language models, maintaining 99.9% uptime and reducing manual data-entry effort by 60%.",
      "Benchmarked Qwen2.5-VL inference and tuned batching and GPU utilization, improving throughput by 25% and lowering latency.",
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
      "Led an engineering team of 5 to architect, containerize, and deploy scalable cloud backend systems and microservices supporting 250+ concurrent users at about $50 infrastructure cost.",
    highlights: [
      "Deployed high-availability platform on AWS (ECS, EC2, ALB) supporting 250+ concurrent users with 0 latency spikes at about $50 infrastructure cost on the AWS Free Tier, running a Judge0-based assessment platform.",
      "Decomposed monolithic apps into 4+ microservices on AWS ECS with Application Load Balancer routing (CQRS pattern) enabling zero-downtime releases.",
      "Configured a multi-node MongoDB Replica Set with automated failover (40% higher database throughput), plus Nginx reverse proxy, AWS WAF and Cloudflare CDN.",
      "Decoupled compute-heavy code execution with EC2 Auto Scaling Groups, Judge0, and BullMQ + Redis queues to keep the platform responsive and secure.",
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
  totalPRs: "25+ Merged PRs",
  prsUrl:
    "https://github.com/search?q=is%3Apr+is%3Amerged+author%3AAnuraggupta181&type=pullrequests&p=2",
  contributions: [
    {
      repo: "GitMesh",
      org: "The Linux Foundation · LFX mentee",
      tag: "Policy-as-code for AI agents",
      about: "Policy-as-code engine for open-source AI agent orchestration.",
      link: "https://github.com/LF-Decentralized-Trust-labs/gitmesh",
      points: [
        "Cursor and GitHub Copilot adapter detection for workspace adapters (#458, #459).",
        "GitHub Actions CI workflow and better UI route test coverage with a stable typecheck flow (#403, #399).",
        "Improved Docker quickstart docs and troubleshooting (#385).",
        "Fixing inbound webhook routing in forge-sync (#433, open).",
        "Scoped roadmap issues: OPA policy engine, tamper-evident audit log, maintainer dashboard, doctor risk rules (#435, #436, #437, #463).",
      ],
    },
    {
      repo: "LabVIEW MCP",
      org: "Zuehlke",
      tag: "Fix merged upstream",
      about: "MCP server that connects AI agents to LabVIEW.",
      link: "https://github.com/Zuehlke/labview-mcp",
      points: [
        "Found and fixed Error 1125 on LabVIEW 2019: the pylabview composer only restamped VI versions for 2020 and later (issue #149).",
        "Verified on LabVIEW 2019 itself: plain VIs, subVI calls, case structures, loops and Formula Nodes load, run and save.",
        "Fix merged upstream with my commit cherry-picked (PR #150), because the repo only takes PRs from collaborators.",
      ],
    },
    {
      repo: "Harbor Satellite",
      org: "CNCF",
      tag: "In progress",
      about: "Container registry for edge and disconnected sites.",
      link: "https://github.com/container-registry/harbor-satellite",
      points: [
        "Fixing broken Markdown links (404s) with a Hugo link render hook, and adding a right-sidebar table of contents to the docs site (#607, open).",
        "Reported missing unit tests for robot-secret refresh and scheduler shutdown races (#626).",
      ],
    },
    {
      repo: "Community projects",
      org: "Open source",
      tag: "Merged PRs",
      about: "Product work on community-run apps.",
      link: "https://github.com/AnuragGupta181",
      points: [
        "CityVoice: client dashboard and responsive UI (6 merged PRs).",
        "Kryptonite: AI chatbot API.",
        "FotoFix: ML model inference APIs (3 merged PRs).",
        "NextGen: CI/CD workflow to EC2 (7 merged PRs).",
      ],
    },
  ],
};

export const projects = [
  {
    id: 1,
    name: "FotoFix – AI Image Processing Platform",
    tagline: "Full-Stack Vision Suite with Background Removal, YOLO & OCR",
    description:
      "A production full-stack platform featuring a React frontend and FastAPI backend delivering background removal, YOLO object detection, and OCR. Architected 10+ REST API endpoints as modular services with Redis caching and AWS S3 storage, cutting repeat-request latency by 60% across 1,000+ uploads.",
    href: "https://github.com/AnuragGupta181/phot-fix-ml-fast",
    liveUrl: "https://image-processing-tool-c7k8.vercel.app",
    image: "/assets/projects/fotofix-ai.png",
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
    href: "https://github.com/AnuragGupta181/ccc-ragbot",
    image: "/assets/projects/chart.png",
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
    href: "https://github.com/AnuragGupta181/drone-mine-detection",
    image: "/assets/projects/uav-swarm-simulation.png",
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
      "End-to-end multi-modal document extraction pipeline processing 5,000+ PDFs/images into structured JSON schemas at 86% extraction accuracy. Fine-tuned Qwen2.5-VL-7B-Instruct with Unsloth & LoRA on Lightning AI, cutting GPU VRAM by 45% and training time by 30%. Benchmarked Florence, Llama and Azure AI to cut cloud runtime costs by 35%.",
    href: "https://github.com/AnuragGupta181/ocr",
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
    name: "NextGen – Cloud Assessment & Contest Platform",
    tagline: "AWS ECS Microservices, MongoDB Replica Set & BullMQ",
    description:
      "Enterprise assessment platform engineered for 250+ concurrent users with 0 latency spikes on AWS at about $50 infrastructure cost. Path-based ALB routing for CQRS microservices on ECS, a MongoDB multi-node replica set with automated failover (+40% throughput), Judge0 code execution decoupled via EC2 Auto Scaling and BullMQ/Redis queues, secured by AWS WAF and Cloudflare.",
    href: "https://github.com/AnuragGupta181/Coding-Plateform",
    liveUrl: "https://coding-plateform-egyb.vercel.app/",
    image: "/assets/projects/nextgen-coding-platform.png",
    bgImage: "/assets/backgrounds/poster.jpg",
    frameworks: [
      { id: 1, name: "AWS ECS" },
      { id: 2, name: "Docker" },
      { id: 3, name: "MongoDB" },
      { id: 4, name: "Redis" },
      { id: 5, name: "BullMQ" },
      { id: 6, name: "GitHub Actions" },
      { id: 7, name: "Nginx" },
      { id: 8, name: "Judge0" },
    ],
  },
  {
    id: 6,
    name: "Pesticide Detection Agricultural Robot",
    tagline: "ESP32, ESP32-CAM & Real-Time YOLOv12 Edge Detection",
    description:
      "Autonomous agricultural robot prototype built with ESP32 and ESP32-CAM executing real-time crop pest identification via YOLOv12 at 35% lower cost than commercial solutions. Integrated L298N motor drivers for automated field navigation, potentially reducing manual labor by 80%.",
    href: "https://github.com/AnuragGupta181/Pestiside-detection",
    frameworks: [
      { id: 1, name: "ESP32" },
      { id: 2, name: "YOLOv12" },
      { id: 3, name: "OpenCV" },
      { id: 4, name: "L298N" },
      { id: 5, name: "MicroPython" },
      { id: 6, name: "IoT 4.0" },
    ],
  },
  {
    id: 7,
    name: "GitOps CI/CD Pipeline (Assessment Platform)",
    tagline: "Jenkins, Argo CD, Argo Rollouts & Blue-Green Deployments",
    description:
      "Reusable Jenkins Shared Library on AWS EC2 running build, test, SonarQube gate and Trivy scan in 6 min 1 s. Argo CD with HMAC-verified GitHub webhooks kept 11 Kubernetes resources 100% healthy and synced, while Blue-Green rollouts via Argo Rollouts and NGINX Ingress served 231 requests with 0 HTTP 5xx errors at 2 ms average latency. Namespace-scoped Bitnami Sealed Secrets isolate CI/CD across 2 EC2 instances.",
    href: "https://github.com/AnuragGupta181/nextgen_cd",
    image: "/assets/projects/gitops-argocd.jpeg",
    bgImage: "/assets/backgrounds/poster.jpg",
    frameworks: [
      { id: 1, name: "Jenkins" },
      { id: 2, name: "Argo CD" },
      { id: 3, name: "Argo Rollouts" },
      { id: 4, name: "Trivy" },
      { id: 5, name: "SonarQube" },
      { id: 6, name: "Sealed Secrets" },
    ],
  },
  {
    id: 8,
    name: "Kubernetes Deployment & Observability Stack",
    tagline: "Helm, Prometheus, Grafana & Zero-Downtime NGINX Ingress",
    description:
      "Zero-downtime routing across 3 healthy backend replicas (5.9 hrs continuous uptime) using Deployments, Services, liveness/readiness probes and NGINX Ingress. Live CPU, memory, disk and network dashboards via Prometheus and Grafana Node Exporter on Helm, with cAdvisor container tracking; fixed ImagePullBackOff and reclaimed 1+ GB RAM on a 4 GiB host.",
    href: "https://github.com/AnuragGupta181/nextgen_cd",
    image: "/assets/projects/k8s-grafana.jpeg",
    bgImage: "/assets/backgrounds/map.jpg",
    frameworks: [
      { id: 1, name: "Kubernetes" },
      { id: 2, name: "Helm" },
      { id: 3, name: "Prometheus" },
      { id: 4, name: "Grafana" },
      { id: 5, name: "NGINX Ingress" },
    ],
  },
  {
    id: 9,
    name: "Autonomous Robot Navigation (TurtleBot3)",
    tagline: "ROS 2 Humble, Nav2, AMCL & DWB in Gazebo Classic 11",
    description:
      "Fully autonomous obstacle avoidance across 5 waypoints at a 100% success rate in a 2-minute patrol, composed from upstream Nav2, AMCL, DWB and Gazebo packages with only 240 lines of original code. Fixed AMCL resetting on every launch by tracing the nav2 simple commander source (1-line fix) and validated dynamic replanning around 3 unmapped obstacles.",
    href: "https://github.com/AnuragGupta181/turtlebot",
    liveUrl: "https://drive.google.com/file/d/1pZclG9STVNvwEOh_FhREtxIMToPUn9KJ/view?usp=drive_link",
    image: "/assets/projects/turtlebot-rviz.png",
    bgImage: "/assets/backgrounds/curtains.jpg",
    frameworks: [
      { id: 1, name: "ROS 2 Humble" },
      { id: 2, name: "Nav2" },
      { id: 3, name: "AMCL" },
      { id: 4, name: "DWB" },
      { id: 5, name: "Gazebo Classic 11" },
      { id: 6, name: "Python" },
    ],
  },
  {
    id: 10,
    name: "Credit Card Fraud Detection",
    tagline: "SMOTE, PCA & Tuned Random Forest",
    description:
      "Handled heavily imbalanced data with SMOTE and PCA, uncovering 65% more fraudulent patterns than baseline models. Tuned Random Forest and Logistic Regression via GridSearchCV to reach an F1-score of 85.6%.",
    href: "https://github.com/AnuragGupta181/Fraud-Detection",
    frameworks: [
      { id: 1, name: "Python" },
      { id: 2, name: "Scikit-Learn" },
      { id: 3, name: "SMOTE" },
      { id: 4, name: "PCA" },
    ],
  },
  {
    id: 11,
    name: "Room Automation System",
    tagline: "NI Multisim Digital Logic & JK Flip-Flops",
    description:
      "Logic-based security system with password validation and motion-based lighting, achieving a theoretical 90% detection rate in simulation. Built from AND/OR/XOR gates and JK flip-flops in NI Multisim, replicating real-world automation logic without microcontrollers.",
    href: null,
    frameworks: [
      { id: 1, name: "NI Multisim" },
      { id: 2, name: "Digital Logic" },
      { id: 3, name: "JK Flip-Flops" },
    ],
  },
];

// Each skill is { name, icon? }. `icon` is a file in /public/icons/skills; when
// there is no suitable Icons8 logo the name is shown instead.
const sk = (name, icon) => (icon ? { name, icon: `/icons/skills/${icon}.png` } : { name });

export const skillsData = {
  categories: [
    {
      name: "Programming Languages",
      skills: [
        sk("Python", "python"),
        sk("TypeScript", "typescript"),
        sk("JavaScript", "javascript"),
        sk("C++", "cpp"),
        sk("SQL", "sql"),
        sk("Bash", "bash"),
        sk("HTML5", "html5"),
        sk("CSS3", "css3"),
      ],
    },
    {
      name: "AI & Machine Learning",
      skills: [
        sk("Agentic AI"),
        sk("MCP"),
        sk("LoRA / Unsloth"),
        sk("Qwen2.5-VL"),
        sk("RAG"),
        sk("LangChain"),
        sk("LangGraph"),
        sk("LangSmith"),
        sk("YOLO"),
        sk("OpenCV", "opencv"),
        sk("Document OCR"),
        sk("Scikit-Learn"),
      ],
    },
    {
      name: "Cloud & DevOps",
      skills: [
        sk("AWS", "aws"),
        sk("Docker", "docker"),
        sk("Kubernetes", "kubernetes"),
        sk("Helm"),
        sk("Jenkins", "jenkins"),
        sk("GitHub Actions"),
        sk("Argo CD"),
        sk("Argo Rollouts"),
        sk("Prometheus", "prometheus"),
        sk("Grafana", "grafana"),
        sk("Nginx", "nginx"),
        sk("Cloudflare", "cloudflare"),
        sk("Linux", "linux"),
        sk("SonarQube"),
        sk("Trivy"),
        sk("Sealed Secrets"),
      ],
    },
    {
      name: "Backend & Databases",
      skills: [
        sk("Node.js", "nodejs"),
        sk("Express.js", "express"),
        sk("FastAPI"),
        sk("PostgreSQL", "postgresql"),
        sk("MongoDB", "mongodb"),
        sk("Redis", "redis"),
        sk("Drizzle ORM"),
        sk("BullMQ"),
        sk("REST APIs"),
        sk("JWT", "jwt"),
        sk("OAuth"),
        sk("CQRS"),
      ],
    },
    {
      name: "Frontend & Web",
      skills: [
        sk("React.js"),
        sk("Next.js"),
        sk("Tailwind CSS", "tailwind"),
        sk("Vite", "vite"),
        sk("GSAP"),
        sk("Three.js"),
      ],
    },
    {
      name: "Robotics & Hardware (ECE)",
      skills: [
        sk("ROS 2 Humble"),
        sk("PX4 Autopilot"),
        sk("Micro-XRCE-DDS"),
        sk("Gazebo"),
        sk("Nav2"),
        sk("AMCL & DWB"),
        sk("TurtleBot3"),
        sk("SLAM & A*"),
        sk("NI LabVIEW"),
        sk("NI myRIO & cRIO"),
        sk("NI Multisim"),
        sk("ESP32 & IoT"),
      ],
    },
    {
      name: "Developer Tools & Testing",
      skills: [
        sk("Playwright"),
        sk("Git", "git"),
        sk("GitHub", "github"),
        sk("Postman"),
        sk("Claude Code"),
        sk("VS Code", "vscode"),
        sk("PyCharm"),
        sk("Unit & Integration Testing"),
        sk("Agile / Scrum"),
      ],
    },
    {
      name: "Core Computer Science",
      skills: [
        sk("Data Structures & Algorithms"),
        sk("OOP"),
        sk("System Design"),
        sk("Operating Systems"),
        sk("DBMS"),
        sk("Computer Networks"),
      ],
    },
  ],
};

export const educationData = [
  {
    degree: "B.Tech in Electronics and Computing Engineering",
    institution: "Ajay Kumar Garg Engineering College (AKGEC)",
    location: "Ghaziabad, Uttar Pradesh",
    period: "2024 – Present",
    score: "CGPA: 7.2",
    details:
      "Focusing on Distributed Systems, Cloud Architecture, Artificial Intelligence, and Embedded Robotics. Active technical lead in the Cloud Computing Cell.",
  },
  {
    degree: "Senior Secondary Education (Class XII)",
    institution: "PM SHRI Kendriya Vidyalaya",
    location: "Babina, Uttar Pradesh",
    period: "Completed 2024",
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

export const bookingOptions = [
  {
    id: "15min",
    title: "15 min intro call",
    description: "Quick chat about a role, collaboration or project.",
    href: "https://cal.com/anurag-gupta-11/15min",
  },
  {
    id: "30min",
    title: "30 min meeting",
    description: "Deeper technical discussion, interview or mentoring.",
    href: "https://cal.com/anurag-gupta-11/30min",
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
    name: "X",
    href: "https://x.com/AnuragGupt1817",
    label: "x.com/AnuragGupt1817",
  },
  {
    name: "Linktree",
    href: "https://linktr.ee/anuraggupta11",
    label: "linktr.ee/anuraggupta11",
  },
  {
    name: "Book a Meet",
    href: "https://cal.com/anurag-gupta-11",
    label: "cal.com/anurag-gupta-11",
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

// Delivery lifecycle shown as an infinity loop (left lobe = Dev, right = Ops).
// Every "did" line is taken from the resumes.
export const devopsStages = [
  {
    id: "plan",
    name: "Plan",
    lobe: "Dev",
    summary: "Scoping features and architecture with maintainers and teammates.",
    tools: ["GitHub Issues", "Agile / Scrum", "System design", "Policy-as-code"],
    did: "Led a team of 5 engineers planning an AWS assessment platform; 30+ code reviews as an LFX mentee.",
  },
  {
    id: "code",
    name: "Code",
    lobe: "Dev",
    summary: "Typed, reviewed services and AI pipelines.",
    tools: ["TypeScript", "Python", "FastAPI", "Node.js", "React"],
    did: "25+ merged PRs across GitMesh, LabVIEW MCP and community projects.",
  },
  {
    id: "build",
    name: "Build",
    lobe: "Dev",
    summary: "Reproducible builds in containers.",
    tools: ["Docker", "GitHub Actions", "Jenkins Shared Library"],
    did: "Cut CI build-and-test time by 35% and Docker setup time by 25%.",
  },
  {
    id: "test",
    name: "Test",
    lobe: "Dev",
    summary: "Quality and security gates before anything ships.",
    tools: ["SonarQube", "Trivy", "Playwright", "Unit & integration tests"],
    did: "Raised UI route test coverage by 30%; SonarQube and Trivy gates block bad builds.",
  },
  {
    id: "release",
    name: "Release",
    lobe: "Ops",
    summary: "Blue-green rollouts with an instant rollback window.",
    tools: ["Argo Rollouts", "Blue-Green", "Sealed Secrets", "Helm"],
    did: "Blue-green rollouts served 231 requests with 0 HTTP 5xx errors at 2 ms average latency.",
  },
  {
    id: "deploy",
    name: "Deploy",
    lobe: "Ops",
    summary: "GitOps delivery to Kubernetes and AWS ECS.",
    tools: ["Argo CD", "Kubernetes", "AWS ECS", "ALB"],
    did: "Argo CD kept 11 Kubernetes resources 100% healthy and synced; ECS microservices behind path-based ALB routing.",
  },
  {
    id: "operate",
    name: "Operate",
    lobe: "Ops",
    summary: "Running it reliably and cheaply.",
    tools: ["AWS", "Nginx", "Cloudflare", "WAF", "MongoDB replica set", "Redis + BullMQ"],
    did: "Supported 250+ concurrent users with 0 latency spikes at about $50 infrastructure cost.",
  },
  {
    id: "monitor",
    name: "Monitor",
    lobe: "Ops",
    summary: "Seeing problems before users do.",
    tools: ["Prometheus", "Grafana", "cAdvisor", "LangSmith"],
    did: "Live CPU, memory, disk and network dashboards on a 4 GiB host; reclaimed 1+ GB RAM.",
  },
];
