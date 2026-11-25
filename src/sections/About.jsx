import { useRef } from "react";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import { AnimatedTextLines } from "../components/AnimatedTextLines";
import { personalInfo } from "../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const About = () => {
  const text = `Passionate about clean architecture
I build scalable, high-performance solutions
from prototype to production.`;

  const aboutText = `Software Engineer and LFX Mentee contributing to GitMesh (The Linux Foundation), with hands-on experience across backend microservices, MLOps pipelines, and scalable cloud systems.

What drives my work:
🚀 LFX Mentee @ The Linux Foundation — multi-agent AI orchestration, MCP servers & CI/CD automation
⚡️ MLOps Intern @ Carbon Crunch — fine-tuned Qwen2.5-VL-7B (45% VRAM cut) & extracted 5,000+ docs with OCR
☁️ DevOps Lead @ Cloud Computing Cell — scaled AWS ECS microservices & MongoDB replica sets for 250+ users
🤖 Robotics Research @ AKGEC — autonomous multi-UAV swarm synchronization in ROS 2 & IEEE Xplore 2nd Position
🛠️ Open-Source Advocate — 12+ merged PRs across developer infrastructure, LLM endpoints & vision pipelines`;

  const imgRef = useRef(null);

  useGSAP(() => {
    gsap.to("#about", {
      scale: 0.95,
      scrollTrigger: {
        trigger: "#about",
        start: "bottom 80%",
        end: "bottom 20%",
        scrub: true,
        markers: false,
      },
      ease: "power1.inOut",
    });

    gsap.set(imgRef.current, {
      clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",
    });
    gsap.to(imgRef.current, {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      duration: 2,
      ease: "power4.out",
      scrollTrigger: { trigger: imgRef.current },
    });
  });

  return (
    <section id="about" className="min-h-screen bg-black rounded-b-4xl">
      <AnimatedHeaderSection
        subTitle={"Code with Purpose, Built to Scale"}
        title={"About"}
        text={text}
        textColor={"text-white"}
        withScrollTrigger={true}
      />
      <div className="flex flex-col items-center justify-between gap-16 px-10 pb-16 text-xl font-light tracking-wide lg:flex-row md:text-2xl lg:text-3xl text-white/60">
        <div className="relative flex flex-col items-center w-full lg:w-auto shrink-0">
          <img
            ref={imgRef}
            src="images/man.jpg"
            alt={personalInfo.name}
            className="object-cover rounded-3xl w-80 md:w-96 grayscale contrast-125 hover:grayscale-0 transition-all duration-700"
          />
          <div className="mt-4 text-center">
            <p className="text-lg font-normal text-white">{personalInfo.name}</p>
            <p className="text-sm tracking-widest uppercase text-white/50">
              {personalInfo.location}
            </p>
          </div>
        </div>
        <div className="flex flex-col w-full gap-8">
          <AnimatedTextLines text={aboutText} className={"w-full"} />
          
          {/* Key Stat Badges */}
          <div className="grid grid-cols-2 gap-4 pt-4 border-t sm:grid-cols-4 border-white/10 text-white">
            {personalInfo.stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col p-4 rounded-2xl bg-white/5 border border-white/10">
                <span className="text-2xl md:text-3xl font-normal text-gold">{stat.value}</span>
                <span className="text-xs uppercase tracking-wider text-white/60 mt-1">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;