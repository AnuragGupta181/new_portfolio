import React, { useState, useEffect, useRef } from "react";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import { experienceData, openSourceData } from "../constants";
import { Icon } from "@iconify/react/dist/iconify.js";

const Experience = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const text = `Hands-on engineering across open-source foundations,
industry AI internships, cloud leadership,
and research laboratories.`;

  const totalSlides = experienceData.length;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (idx) => {
    setCurrentSlide(idx);
  };

  // Optional subtle auto-rotation that pauses when user hovers
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 7000);
    return () => clearInterval(interval);
  }, [isPaused, totalSlides]);

  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      nextSlide();
    }
    if (touchStartX.current - touchEndX.current < -50) {
      prevSlide();
    }
  };

  const exp = experienceData[currentSlide];

  return (
    <section id="experience" className="min-h-screen py-16 bg-[#e5e5e0] text-black">
      <AnimatedHeaderSection
        subTitle={"Proven Track Record • 4 Roles"}
        title={"Experience"}
        text={text}
        textColor={"text-black"}
        withScrollTrigger={true}
      />

      <div className="px-6 md:px-10 mt-12 max-w-7xl mx-auto flex flex-col gap-10">
        {/* Carousel Navigation Tabs / Pills */}
        <div className="flex flex-col gap-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="text-xs uppercase tracking-widest font-semibold text-black/50">
                Experience Carousel
              </span>
              <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-black text-white">
                0{currentSlide + 1} / 0{totalSlides}
              </span>
            </div>

            {/* Prev / Next Controls */}
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={prevSlide}
                aria-label="Previous Experience"
                className="p-3 rounded-full bg-black text-white hover:bg-gold hover:text-black transition-all duration-300 shadow-md cursor-pointer flex items-center justify-center"
              >
                <Icon icon="lucide:chevron-left" className="size-5" />
              </button>
              <button
                type="button"
                onClick={nextSlide}
                aria-label="Next Experience"
                className="p-3 rounded-full bg-black text-white hover:bg-gold hover:text-black transition-all duration-300 shadow-md cursor-pointer flex items-center justify-center"
              >
                <Icon icon="lucide:chevron-right" className="size-5" />
              </button>
            </div>
          </div>

          {/* Direct Slide Selector Buttons */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {experienceData.map((item, idx) => (
              <button
                key={item.id}
                type="button"
                onClick={() => goToSlide(idx)}
                className={`text-left p-3.5 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col gap-1 relative overflow-hidden ${
                  currentSlide === idx
                    ? "bg-black text-white border-black shadow-lg scale-[1.02]"
                    : "bg-white/80 hover:bg-white text-black/80 border-black/10 hover:border-black/30"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span
                    className={`text-[10px] font-mono uppercase tracking-wider font-semibold ${
                      currentSlide === idx ? "text-gold" : "text-black/50"
                    }`}
                  >
                    0{idx + 1} • {item.badge}
                  </span>
                </div>
                <h4 className="font-semibold text-sm truncate">{item.company}</h4>
                <p className={`text-xs truncate ${currentSlide === idx ? "text-white/70" : "text-black/60"}`}>
                  {item.role}
                </p>

                {/* Active Indicator Bar */}
                {currentSlide === idx && (
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gold animate-pulse" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Carousel Active Slide Card */}
        <div
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="relative overflow-hidden rounded-3xl bg-black text-white p-8 md:p-12 shadow-2xl border border-black/20 min-h-[500px] flex flex-col justify-between transition-all duration-500"
        >
          {/* Background Ambient Glow */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-gold/10 rounded-full blur-3xl pointer-events-none" />

          <div>
            {/* Header / Meta */}
            <div className="flex flex-wrap items-start justify-between gap-4 border-b border-white/20 pb-6 mb-8">
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="text-xs uppercase tracking-widest px-3 py-1 rounded-full bg-gold text-black font-semibold">
                    {exp.badge}
                  </span>
                  <span className="text-xs text-white/50 tracking-wider">
                    {exp.type}
                  </span>
                  <span className="text-xs text-gold/80 font-mono">
                    Slide 0{currentSlide + 1} of 0{totalSlides}
                  </span>
                </div>
                <h3 className="text-2xl md:text-4xl font-normal text-white">
                  {exp.role}
                </h3>
                <h4 className="text-gold text-xl md:text-2xl font-light mt-1">
                  {exp.company}
                </h4>
              </div>

              <div className="flex flex-col items-start sm:items-end gap-2">
                <span className="inline-block px-4 py-1.5 rounded-lg bg-white/10 text-white/90 font-mono text-sm tracking-wider">
                  {exp.period}
                </span>
                <span className="text-xs text-white/40">
                  {isPaused ? "Paused on hover" : "Auto-playing (7s)"}
                </span>
              </div>
            </div>

            {/* Role Summary */}
            <p className="text-white/85 font-light text-base md:text-xl leading-relaxed mb-8">
              {exp.description}
            </p>

            {/* Highlights */}
            <div className="space-y-3 mb-8 bg-white/5 p-6 md:p-8 rounded-2xl border border-white/10">
              <p className="text-xs font-semibold tracking-widest uppercase text-white/50 mb-2">
                Key Accomplishments & Impact
              </p>
              {exp.highlights.map((highlight, hIdx) => (
                <div
                  key={hIdx}
                  className="flex items-start gap-3 text-white/80 text-sm md:text-base font-light"
                >
                  <span className="text-gold mt-1.5 text-xs shrink-0">◆</span>
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Footer: Tech Stack + Navigation Buttons inside card */}
          <div className="border-t border-white/15 pt-6 flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-white/50 mb-3">
                Technologies & Tools
              </p>
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-xs tracking-wider uppercase px-3 py-1.5 rounded-lg bg-white/10 text-white/90 border border-white/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Slide Indicator Dots inside card */}
            <div className="flex items-center gap-2">
              {experienceData.map((_, dotIdx) => (
                <button
                  key={dotIdx}
                  type="button"
                  onClick={() => goToSlide(dotIdx)}
                  aria-label={`Go to slide ${dotIdx + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    currentSlide === dotIdx
                      ? "w-8 bg-gold"
                      : "w-2 bg-white/30 hover:bg-white/60"
                  }`}
                />
              ))}
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
              href={openSourceData.prsUrl}
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
