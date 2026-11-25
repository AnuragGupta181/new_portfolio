import React, { useRef, useState } from "react";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import {
  achievementsData,
  educationData,
  resumes,
  skillsData,
} from "../constants";
import { Icon } from "@iconify/react/dist/iconify.js";
import SkillMatrix from "../components/SkillMatrix";

const Qualifications = () => {
  const [activeTab, setActiveTab] = useState("skills"); // skills | education | achievements | resumes
  const carouselRef = useRef(null);

  const scrollCarousel = (dir) => {
    const el = carouselRef.current;
    if (!el) return;
    const card = el.querySelector("[data-card]");
    const step = card ? card.getBoundingClientRect().width + 24 : el.clientWidth;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  const text = `Academic rigor in Electronics & Computing,
recognized engineering accolades,
and 5 domain-tailored technical resumes.`;

  return (
    <section
      id="qualifications"
      className="min-h-screen py-12 md:py-20 bg-black text-white rounded-t-4xl"
    >
      <AnimatedHeaderSection
        subTitle={"Skills • Education • 5 Resumes • Honors"}
        title={"Qualifications"}
        text={text}
        textColor={"text-white"}
        withScrollTrigger={true}
      />

      <div className="px-2 md:px-10 max-w-7xl mx-auto mt-8 md:mt-12 flex flex-col gap-8 md:gap-12">
        {/* Navigation Tabs */}
        <div className="grid grid-cols-2 sm:flex sm:flex-wrap items-center justify-center gap-1.5 p-1.5 rounded-3xl sm:rounded-full bg-white/5 border border-white/10 w-full sm:w-fit mx-auto">
          {[
            { id: "skills", icon: "/icons/lightning.png", label: "Skills Matrix", count: "8 Categories" },
            { id: "education", icon: "/icons/graduation.png", label: "Education", count: "AKGEC" },
            { id: "achievements", icon: "/icons/trophy.png", label: "Honors & Awards", count: "5" },
            { id: "resumes", icon: "/icons/resume.png", label: "5 Resumes Hub", count: "5" },
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`px-3 sm:px-5 py-2.5 rounded-full text-[11px] sm:text-xs md:text-sm uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                activeTab === tab.id
                  ? "bg-white text-black font-normal shadow-lg sm:scale-105"
                  : "text-white/60 hover:text-white hover:bg-white/10"
              }`}
            >
              <span className="flex items-center justify-center gap-2">
                <img
                  src={tab.icon}
                  alt=""
                  aria-hidden="true"
                  width={20}
                  height={20}
                  className="size-5"
                />
                {tab.label}
              </span>
            </button>
          ))}
        </div>

        {/* TAB 1: 5 Resumes Showcase Hub */}
        {activeTab === "resumes" && (
          <div className="flex flex-col gap-8 opacity-100 transition-opacity duration-300">
            <div className="text-center max-w-2xl mx-auto">
              <span className="text-xs uppercase tracking-widest text-gold px-3 py-1 rounded-full bg-gold/10 border border-gold/30">
                Curated PDF Resumes
              </span>
              <h3 className="text-2xl md:text-4xl font-normal mt-3">
                Download Targeted Resumes
              </h3>
              <p className="text-white/60 text-sm md:text-base font-light mt-2">
                Tailored for specialized engineering domains: Software Engineering, AI & MLOps, Cloud Infrastructure, and Embedded Robotics.
              </p>
            </div>

            <div className="relative">
              <div
                ref={carouselRef}
                className="flex gap-6 pb-4 overflow-x-auto snap-x snap-mandatory scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                role="region"
                aria-label="Resume carousel"
                tabIndex={0}
              >
              {resumes.map((resume) => (
                <div
                  key={resume.id}
                  data-card
                  className="snap-start shrink-0 basis-[88%] sm:basis-[calc(50%-12px)] lg:basis-[calc(33.333%-16px)] p-5 md:p-8 rounded-3xl bg-white/5 border border-white/15 hover:border-gold/50 transition-all duration-300 flex flex-col justify-between group hover:bg-white/[0.08] shadow-lg opacity-100"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs uppercase tracking-wider px-3 py-1 rounded-full bg-gold text-black font-semibold">
                        {resume.badge}
                      </span>
                      <span className="text-xs text-white/50 font-mono">
                        {resume.fileName}
                      </span>
                    </div>

                    <h4 className="text-2xl font-normal text-white group-hover:text-gold transition-colors">
                      {resume.title}
                    </h4>
                    <p className="text-white/90 font-light text-base mt-1">
                      {resume.role}
                    </p>
                    <p className="text-white/60 text-xs uppercase tracking-wider mt-3 font-mono leading-relaxed">
                      {resume.tagline}
                    </p>
                  </div>

                  <div className="flex items-center gap-3 mt-8 pt-6 border-t border-white/10">
                    <a
                      href={resume.filePath}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center py-2.5 px-4 rounded-xl bg-white text-black text-xs uppercase tracking-wider font-medium hover:bg-gold transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                    >
                      <Icon icon="lucide:eye" className="size-4" />
                      <span>View PDF</span>
                    </a>
                    <a
                      href={resume.filePath}
                      download={resume.fileName}
                      className="flex-1 text-center py-2.5 px-4 rounded-xl bg-white/10 text-white text-xs uppercase tracking-wider font-light hover:bg-white/20 transition-colors border border-white/10 flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Icon icon="lucide:download" className="size-4" />
                      <span>Download</span>
                    </a>
                  </div>
                </div>
              ))}
              </div>
              <div className="flex items-center justify-center gap-4 mt-4">
                <button
                  type="button"
                  aria-label="Previous resume"
                  onClick={() => scrollCarousel(-1)}
                  className="flex items-center justify-center rounded-full size-11 bg-white/10 border border-white/15 hover:bg-gold hover:text-black transition-colors cursor-pointer"
                >
                  <Icon icon="lucide:chevron-left" className="size-5" />
                </button>
                <span className="text-xs tracking-widest uppercase text-white/50">
                  Swipe or use arrows
                </span>
                <button
                  type="button"
                  aria-label="Next resume"
                  onClick={() => scrollCarousel(1)}
                  className="flex items-center justify-center rounded-full size-11 bg-white/10 border border-white/15 hover:bg-gold hover:text-black transition-colors cursor-pointer"
                >
                  <Icon icon="lucide:chevron-right" className="size-5" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: Skills Matrix */}
        {activeTab === "skills" && (
          <SkillMatrix categories={skillsData.categories} />
        )}

        {/* TAB 3: Education */}
        {activeTab === "education" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 opacity-100 transition-opacity duration-300">
            {educationData.map((edu, idx) => (
              <div
                key={idx}
                className="p-5 md:p-8 rounded-3xl bg-white/5 border border-white/10 flex flex-col justify-between shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs uppercase tracking-wider px-3 py-1 rounded-full bg-white/10 text-gold border border-gold/30">
                      {edu.score}
                    </span>
                    <span className="text-xs text-white/50">{edu.period}</span>
                  </div>
                  <h4 className="text-2xl font-normal mb-2">{edu.degree}</h4>
                  <p className="text-gold font-light text-lg mb-1">
                    {edu.institution}
                  </p>
                  <p className="text-white/50 text-sm mb-4">{edu.location}</p>
                  <p className="text-white/70 font-light text-sm leading-relaxed">
                    {edu.details}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* TAB 4: Achievements & Honors */}
        {activeTab === "achievements" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 opacity-100 transition-opacity duration-300">
            {achievementsData.map((item) => (
              <div
                key={item.id}
                className="p-4 md:p-6 rounded-3xl bg-white/5 border border-white/10 hover:border-gold/40 transition-all flex flex-col justify-between shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs uppercase tracking-wider px-3 py-1 rounded-full bg-gold text-black font-medium">
                      {item.badge}
                    </span>
                    <Icon icon="lucide:award" className="size-5 text-gold" />
                  </div>
                  <h4 className="text-xl font-normal mb-2 text-white">
                    {item.title}
                  </h4>
                  <p className="text-white/70 font-light text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Qualifications;
