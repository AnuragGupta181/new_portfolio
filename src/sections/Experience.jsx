import React, { useRef, useState } from "react";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import { experienceData, openSourceData, personalInfo } from "../constants";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  const [activeExp, setActiveExp] = useState(0);
  const containerRef = useRef(null);

  const text = `Hands-on engineering across open-source foundations,
industry AI internships, cloud leadership,
and research laboratories.`;

  useGSAP(() => {
    gsap.from(".exp-card-btn", {
      y: 30,
      opacity: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
      },
    });
  }, []);

  return (
    <section id="experience" ref={containerRef} className="min-h-screen py-16 bg-[#e5e5e0] text-black">
      <AnimatedHeaderSection
        subTitle={"Proven Track Record • 4 Roles"}
        title={"Experience"}
        text={text}
        textColor={"text-black"}
        withScrollTrigger={true}
      />

      <div className="px-6 md:px-10 mt-12 max-w-7xl mx-auto flex flex-col gap-16">
        {/* Experience Roles Timeline / Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Role Selector / Tabs */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            <div className="flex items-center justify-between mb-1 px-1">
              <span className="text-xs font-semibold tracking-widest uppercase text-black/50">
                Positions ({experienceData.length})
              </span>
              <span className="text-[11px] text-black/40 uppercase tracking-wider">
                Click to view details
              </span>
            </div>
            
            {experienceData.map((exp, idx) => (
              <button
                key={exp.id}
                type="button"
                onClick={() => setActiveExp(idx)}
                className={`exp-card-btn text-left p-5 rounded-2xl border transition-all duration-300 flex flex-col gap-1.5 cursor-pointer relative ${
                  activeExp === idx
                    ? "bg-black text-white border-black shadow-xl scale-[1.01]"
                    : "bg-white/80 hover:bg-white border-black/15 text-black hover:border-black/30 shadow-xs"
                }`}
              >
                <div className="flex items-center justify-between gap-2">
                  <span
                    className={`text-[11px] uppercase tracking-wider px-2.5 py-0.5 rounded-full font-medium ${
                      activeExp === idx
                        ? "bg-gold text-black font-semibold"
                        : "bg-black/10 text-black/80 font-medium"
                    }`}
                  >
                    {exp.badge}
                  </span>
                  <span
                    className={`text-xs font-mono ${
                      activeExp === idx ? "text-white/60" : "text-black/50"
                    }`}
                  >
                    {exp.period.split("–")[0]}
                  </span>
                </div>
                <h3 className={`font-semibold text-base md:text-lg leading-snug mt-1 ${activeExp === idx ? "text-white" : "text-black"}`}>
                  {exp.company}
                </h3>
                <p
                  className={`text-xs md:text-sm ${
                    activeExp === idx ? "text-white/80 font-light" : "text-black/70"
                  }`}
                >
                  {exp.role}
                </p>
              </button>
            ))}
          </div>

          {/* Right Column: Detailed Experience Card */}
          <div className="lg:col-span-8 bg-black text-white rounded-3xl p-8 md:p-10 flex flex-col justify-between shadow-2xl border border-black/20 min-h-[480px]">
            <div>
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/20 pb-6 mb-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs uppercase tracking-widest px-3 py-1 rounded-full bg-gold text-black font-semibold">
                      {experienceData[activeExp].badge}
                    </span>
                    <span className="text-xs text-white/50 tracking-wider">
                      {experienceData[activeExp].type}
                    </span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-normal">
                    {experienceData[activeExp].role}
                  </h2>
                  <p className="text-gold text-lg font-light mt-1">
                    {experienceData[activeExp].company}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm uppercase tracking-wider text-white/60 font-mono">
                    {experienceData[activeExp].period}
                  </p>
                </div>
              </div>

              <p className="text-white/85 font-light text-base md:text-lg leading-relaxed mb-6">
                {experienceData[activeExp].description}
              </p>

              {/* Highlights */}
              <div className="space-y-3 mb-8">
                <p className="text-xs font-semibold tracking-widest uppercase text-white/40">
                  Key Accomplishments & Impact
                </p>
                {experienceData[activeExp].highlights.map((highlight, hIdx) => (
                  <div key={hIdx} className="flex items-start gap-3 text-white/75 text-sm md:text-base font-light">
                    <span className="text-gold mt-1 text-xs shrink-0">◆</span>
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies */}
            <div className="border-t border-white/20 pt-6">
              <p className="text-xs font-semibold tracking-widest uppercase text-white/40 mb-3">
                Technologies & Tools
              </p>
              <div className="flex flex-wrap gap-2">
                {experienceData[activeExp].technologies.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-xs tracking-wider uppercase px-3 py-1.5 rounded-lg bg-white/10 text-white/90 border border-white/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Open Source Contributions Section */}
        <div className="bg-white rounded-3xl p-8 md:p-10 border border-black/10 shadow-lg">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-black/10 pb-6 mb-8">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-black text-white rounded-2xl">
                <Icon icon="lucide:git-pull-request" className="size-6" />
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-normal">
                  Open Source Contributions
                </h3>
                <p className="text-sm tracking-wider uppercase text-black/50">
                  Autonomous Agentic AI, Tooling & Cloud Infrastructure
                </p>
              </div>
            </div>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-black text-white text-sm uppercase tracking-wider hover:bg-gold hover:text-black transition-colors duration-300"
            >
              <span>{openSourceData.totalPRs} on GitHub</span>
              <Icon icon="lucide:arrow-up-right" className="size-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {openSourceData.contributions.map((contrib, cIdx) => (
              <div
                key={cIdx}
                className="p-6 rounded-2xl bg-black/5 hover:bg-black/10 transition-colors border border-black/5 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs uppercase tracking-wider px-2.5 py-1 rounded-full bg-black text-white font-medium">
                      {contrib.prs}
                    </span>
                    <Icon icon="lucide:github" className="size-5 text-black/60" />
                  </div>
                  <h4 className="text-lg font-medium mb-2">{contrib.repo}</h4>
                  <p className="text-black/70 text-sm font-light leading-relaxed">
                    {contrib.summary}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
