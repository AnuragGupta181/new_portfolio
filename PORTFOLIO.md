# Anurag Gupta

**Software Engineer · LFX Mentee at GitMesh (The Linux Foundation) · AI & Cloud Infrastructure**

This file is my whole portfolio in plain text: who I am, where I worked, what I built, and what I know.
The live site has the same information. If something changes there, change it here too.

---

## 1. About me

I am a software engineer from Ghaziabad, India. I build backend systems, cloud infrastructure,
AI pipelines, and robotics projects. I am an LFX mentee at The Linux Foundation, where I work on an
open-source project called GitMesh.

**Quick numbers**

| What | Number |
| --- | --- |
| Hands-on experience | 1+ year |
| Merged open-source pull requests | 12+ |
| Users my AWS platform served at the same time | 250+ |
| Role-specific resumes | 5 |

---

## 2. Contact and links

- **Email:** job4anurag11@gmail.com
- **Phone:** +91-9151491382
- **Location:** Ghaziabad, Uttar Pradesh, India
- **GitHub:** https://github.com/AnuragGupta181
- **LinkedIn:** https://www.linkedin.com/in/anuragg1817
- **Linktree (all my links):** https://linktr.ee/anuraggupta11
- **Website:** https://anurag11.tech
- **Book a meeting:** https://cal.com/anurag-gupta-11
  - 15 minute intro call: https://cal.com/anurag-gupta-11/15min
  - 30 minute meeting: https://cal.com/anurag-gupta-11/30min
- **All merged PRs on GitHub:** https://github.com/search?q=is%3Apr+is%3Amerged+author%3AAnuraggupta181&type=pullrequests

---

## 3. Experience

### 3.1 Open Source Software Engineer (LFX Mentee), GitMesh, The Linux Foundation
*Jun 2026 – Present · Remote*

GitMesh is an open-source developer-tooling and software infrastructure platform. I have made 15+
pull requests and done 30+ code reviews across backend services, testing, and CI/CD.

- Built infrastructure for multi-agent AI work and Model Context Protocol (MCP) servers across several repositories.
- Wrote TypeScript/Node.js microservices and REST API integrations that automate GitHub workflows. This cut manual developer tasks by 40%.
- Built GitHub Actions CI/CD pipelines with automated unit and integration tests. This cut build-and-test time by 35%.
- Tuned PostgreSQL schemas with Drizzle ORM and added Redis caching. Queries got 30% faster. I fixed 20+ issues by debugging with the team.
- Made triage and PR review 40% faster by adding policy-based governance and maintainer tooling.
- Cut Docker setup time by 25%.

**Tech:** TypeScript, Node.js, Docker, PostgreSQL, Redis, Drizzle ORM, GitHub Actions, MCP

### 3.2 MLOps / Software Engineering Intern, Carbon Crunch
*Jun 2026 – Aug 2026 · Noida, Uttar Pradesh (hybrid)*

I built data-extraction pipelines and fine-tuned vision-language models for document processing.

- Built Python OCR and document pipelines that pulled structured data (JSON) from 5,000+ PDFs and images at 86% accuracy.
- Fine-tuned the Qwen2.5-VL-7B-Instruct model with Unsloth and LoRA on Lightning AI. GPU memory use dropped by 45% and training got 30% faster.
- Automated web data collection with Playwright and vision-language models. This kept 99.9% uptime and cut manual data entry by 60%.
- Tuned batching and GPU use, which raised inference throughput by 25%.
- Compared Florence, Meta Llama, and Azure AI. This cut cloud running cost by 35%. I also shipped Dockerized FastAPI endpoints.

**Tech:** Python, FastAPI, Playwright, Docker, Qwen2.5-VL, Unsloth, LoRA, Lightning AI, OpenCV

### 3.3 Machine Learning & DevOps Lead / Cloud Infrastructure Engineer, Cloud Computing Cell (AKGEC)
*Oct 2025 – Present · Ghaziabad, Uttar Pradesh*

I led a team of 5 engineers building cloud backend systems that served 250+ users at the same time
for about $50 of infrastructure cost.

- Ran a Judge0-based assessment platform on AWS (ECS, EC2, ALB) on the Free Tier, with no latency spikes.
- Split a monolith into 4+ microservices on AWS ECS behind an Application Load Balancer (CQRS pattern), so releases had no downtime.
- Set up a multi-node MongoDB Replica Set with automatic failover (database throughput up 40%), plus Nginx, AWS WAF, and Cloudflare.
- Moved heavy code execution to EC2 Auto Scaling, Judge0, and BullMQ + Redis queues. Average API response time dropped by 50%.
- Automated build, test, and deploy with GitHub Actions and Docker. Deploy time went from 45 minutes to under 5.

**Tech:** AWS (ECS, ALB, EC2, S3, WAF), Docker, MongoDB, Redis, BullMQ, GitHub Actions, Nginx, Cloudflare

### 3.4 LabVIEW Trainee, Tifac Lab
*Feb 2025 – Present · Ghaziabad, Uttar Pradesh*

- Built an 8x8 matrix keypad interface on NI myRIO that reads and shows inputs in real time.
- Wrote custom LabVIEW programs (VIs) that decode the keypad with 99% accuracy and 40% less delay.

**Tech:** NI LabVIEW, NI myRIO, digital signal processing

---

## 4. Open source

I have **12+ merged pull requests** in 3 places:

| Project | PRs | What I did |
| --- | --- | --- |
| [GitMesh (The Linux Foundation)](https://github.com/AnuragGupta181/gitmesh) | 5 | Detection for GitHub Copilot and Cursor adapters, automated CI with GitHub Actions, 30% more UI route test coverage, 25% faster Docker setup. |
| [Image Processing Tool](https://github.com/AnuragGupta181/phot-fix-ml-fast) | 3 | Added ML model inference APIs and cut response time by 35%. |
| [Kryptonite and community tools](https://github.com/AnuragGupta181/kryptonite_anu) | 4 | Added AI chatbot endpoints serving 500+ requests a day, OAuth login, and more stable sign-in. |

---

## 5. Projects

### 5.1 FotoFix: AI Image Processing Platform
Full-stack site with background removal, YOLO object detection, and OCR. React front end, FastAPI back end,
10+ API endpoints, Redis caching and AWS S3 storage. Repeat requests got 60% faster across 1,000+ uploads.
- **Tech:** React, FastAPI, YOLO, OpenCV, Redis, AWS S3, Docker
- **Code:** https://github.com/AnuragGupta181/phot-fix-ml-fast
- **Live:** https://image-processing-tool-c7k8.vercel.app

### 5.2 Generative AI & RAG Platform
A question-answering system that retrieves facts from JSON knowledge packs. It raised website engagement by 30%.
Uses LangChain and LangGraph for agent workflows and LangSmith to watch the model. FastAPI services on AWS
handled an 80% traffic spike.
- **Tech:** FastAPI, LangChain, LangGraph, LangSmith, AWS, Python, MLOps
- **Code:** https://github.com/AnuragGupta181/ccc-ragbot

### 5.3 Autonomous Multi-UAV Swarm System
A swarm of 4 drones that fly in a leader-follower formation using ROS 2 Humble, PX4, and Micro-XRCE-DDS,
with less than 50 ms delay in sharing data. They navigate without GPS using depth sensing, SLAM, and A* path
finding. Tested in Gazebo simulation with 95% path accuracy.
- **Tech:** ROS 2 Humble, PX4 Autopilot, Gazebo SITL, SLAM, C++, Python
- **Code:** https://github.com/AnuragGupta181/drone-mine-detection

### 5.4 Carbon Crunch Multi-Modal OCR Pipeline
Reads 5,000+ PDFs and images and turns them into structured JSON at 86% accuracy. Qwen2.5-VL-7B was
fine-tuned with Unsloth and LoRA (45% less GPU memory, 30% faster training). Cloud running cost fell 35%
after comparing Florence, Llama, and Azure AI.
- **Tech:** Python, Qwen2.5-VL, Playwright, Unsloth, LoRA, FastAPI, Docker
- **Code:** https://github.com/AnuragGupta181/ocr

### 5.5 NextGen: Cloud Assessment & Contest Platform
An online coding-contest platform for 250+ users at once, with no latency spikes, at about $50 on AWS.
ALB sends traffic by path to CQRS microservices on ECS. MongoDB replica set (+40% throughput), Judge0 for
running code, EC2 Auto Scaling, BullMQ and Redis queues, protected by AWS WAF and Cloudflare.
- **Tech:** AWS ECS, Docker, MongoDB, Redis, BullMQ, GitHub Actions, Nginx, Judge0
- **Code:** https://github.com/AnuragGupta181/Coding-Plateform
- **Live:** https://coding-plateform-egyb.vercel.app/

### 5.6 GitOps CI/CD Pipeline (for the assessment platform)
A Jenkins Shared Library on AWS EC2 runs build, test, a SonarQube quality gate, and a Trivy security scan in
6 min 1 s. Argo CD (with signed GitHub webhooks) kept 11 Kubernetes resources healthy and in sync. Blue-green
releases with Argo Rollouts and NGINX Ingress served 231 requests with 0 server errors at 2 ms average delay.
Sealed Secrets keep passwords out of Git.
- **Tech:** Jenkins, Argo CD, Argo Rollouts, Trivy, SonarQube, Sealed Secrets
- **Code:** https://github.com/AnuragGupta181/nextgen_cd

### 5.7 Kubernetes Deployment & Observability Stack
Three backend copies behind NGINX Ingress ran for 5.9 hours with zero downtime. Prometheus and Grafana
(installed with Helm) show live CPU, memory, disk, and network. I fixed an `ImagePullBackOff` error and
freed 1+ GB of RAM on a 4 GiB machine.
- **Tech:** Kubernetes, Helm, Prometheus, Grafana, NGINX Ingress
- **Code:** https://github.com/AnuragGupta181/nextgen_cd

### 5.8 Autonomous Robot Navigation (TurtleBot3)
A TurtleBot3 that drives itself through 5 waypoints with a 100% success rate, avoiding obstacles, using only
240 lines of my own code on top of Nav2, AMCL, DWB, and Gazebo. I fixed a bug where the robot lost its
position on every launch (a one-line fix after reading the Nav2 source), and tested it around 3 obstacles
that were not on the map.
- **Tech:** ROS 2 Humble, Nav2, AMCL, DWB, Gazebo Classic 11, Python
- **Code:** https://github.com/AnuragGupta181/turtlebot
- **Demo video:** https://drive.google.com/file/d/1pZclG9STVNvwEOh_FhREtxIMToPUn9KJ/view?usp=drive_link

### 5.9 Pesticide Detection Agricultural Robot
A small farm robot built on ESP32 and ESP32-CAM. It spots pests with YOLOv12 in real time and costs 35%
less than commercial options. L298N motor drivers move it through the field. It could cut manual work by up to 80%.
- **Tech:** ESP32, YOLOv12, OpenCV, L298N, MicroPython, IoT 4.0
- **Code:** https://github.com/AnuragGupta181/Pestiside-detection

### 5.10 Credit Card Fraud Detection
Handled very uneven data with SMOTE and PCA and found 65% more fraud patterns than the baseline models.
Tuned Random Forest and Logistic Regression with GridSearchCV to reach an F1 score of 85.6%.
- **Tech:** Python, Scikit-Learn, SMOTE, PCA
- **Code:** https://github.com/AnuragGupta181/Fraud-Detection

### 5.11 Room Automation System
A security and lighting system with password check and motion-based lights, made only from logic gates and
JK flip-flops in NI Multisim (no microcontroller). About 90% detection in simulation.
- **Tech:** NI Multisim, digital logic, JK flip-flops
- **Code:** none (simulation only)

---

## 6. What I can do (services)

1. **Backend and distributed systems.** Microservices and REST APIs (FastAPI, Node.js, Express, CQRS, JWT, OAuth); PostgreSQL, MongoDB replica sets, Redis, Drizzle ORM; background job queues with BullMQ.
2. **Cloud and DevOps.** AWS (ECS, EC2, ALB, S3, WAF); CI/CD with GitHub Actions and Docker; Nginx and Cloudflare for traffic and safety; Kubernetes, Helm, Jenkins, Argo CD, Trivy, SonarQube, Prometheus, and Grafana.
3. **Agentic AI and MLOps.** Fine-tuning vision-language models (Qwen2.5-VL, Unsloth, LoRA); MCP servers, LangChain, LangGraph, LangSmith; document AI and computer vision (OCR, YOLO, OpenCV).
4. **Robotics and embedded systems.** UAV swarms and navigation (ROS 2, PX4, Nav2, Gazebo, SLAM); edge AI robots (ESP32); NI LabVIEW and Multisim.

---

## 7. Skills

| Area | Skills |
| --- | --- |
| Programming languages | Python, TypeScript, JavaScript, C++, SQL, Bash, HTML5, CSS3 |
| AI and machine learning | Agentic AI, MCP, LoRA / Unsloth, Qwen2.5-VL, RAG, LangChain, LangGraph, LangSmith, YOLO, OpenCV, Document OCR, Scikit-Learn |
| Cloud and DevOps | AWS, Docker, Kubernetes, Helm, Jenkins, GitHub Actions, Argo CD, Argo Rollouts, Prometheus, Grafana, Nginx, Cloudflare, Linux, SonarQube, Trivy, Sealed Secrets |
| Backend and databases | Node.js, Express.js, FastAPI, PostgreSQL, MongoDB, Redis, Drizzle ORM, BullMQ, REST APIs, JWT, OAuth, CQRS |
| Frontend and web | React.js, Next.js, Tailwind CSS, Vite, GSAP, Three.js |
| Robotics and hardware | ROS 2 Humble, PX4 Autopilot, Micro-XRCE-DDS, Gazebo, Nav2, AMCL & DWB, TurtleBot3, SLAM & A*, NI LabVIEW, NI myRIO & cRIO, NI Multisim, ESP32 & IoT |
| Developer tools and testing | Playwright, Git, GitHub, Postman, Claude Code, VS Code, PyCharm, unit and integration testing, Agile / Scrum |
| Core computer science | Data structures and algorithms, OOP, system design, operating systems, DBMS, computer networks |

---

## 8. Education

- **B.Tech in Electronics and Computing Engineering**, Ajay Kumar Garg Engineering College (AKGEC), Ghaziabad.
  2024 – Present · CGPA 7.2. Focus: distributed systems, cloud, AI, embedded robotics. Technical lead in the Cloud Computing Cell.
- **Class XII**, PM SHRI Kendriya Vidyalaya, Babina, Uttar Pradesh. Completed 2024 · 77%. Maths, Physics, Chemistry, Computer Science.

---

## 9. Awards and certificates

- **LFX Mentee, The Linux Foundation.** Selected for the mentorship program, working on GitMesh.
- **2nd place, Student Research Symposium (IEEE Xplore).** For research and paper presentation.
- **Top 10 finalist, SyncUP Hackathon.**
- **Top 20 of 300+ teams (top 7%)** in the internal Smart India Hackathon round.
- **Certified LabVIEW Associate Developer (Core I and Core II),** National Instruments.

---

## 10. My resumes

Five PDFs in `public/resume/`, one for each kind of role:

| Resume | For roles in | File |
| --- | --- | --- |
| Software Engineer | Full-stack, backend, distributed systems | `Anurag_Resume_SE.pdf` |
| AI & MLOps Engineer | Vision-language models, agentic AI, MCP, RAG | `Anurag_Resume_AI.pdf` |
| DevOps & Cloud Engineer | AWS, CI/CD, Kubernetes | `Anurag_Resume-DevOps.pdf` |
| Electronics & Robotics | Embedded systems, ROS 2, UAV swarms, IoT | `Anurag_Resume-ECE.pdf` |
| Robotics (ROS 2) Engineer | ROS 2, Nav2, autonomous navigation | `Anura_ROS_Resume.pdf` |

---

## 11. About this website

The site you are reading about is built with React 19, Vite, Tailwind CSS v4, GSAP, and React Three Fiber
(the 3D planet). It is deployed on Vercel at https://anurag-gupta-learning.vercel.app.
All the content above lives in `src/constants/index.js`.
