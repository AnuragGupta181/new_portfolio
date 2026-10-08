import { Icon } from "@iconify/react/dist/iconify.js";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import { projects } from "../constants";
import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Works = () => {
  const overlayRefs = useRef([]);
  const previewRef = useRef(null);

  const [currentIndex, setCurrentIndex] = useState(null);
  const text = `Flagship engineering systems spanning
autonomous AI pipelines, distributed robotics swarms,
and cloud-native microservices.`;

  const mouse = useRef({ x: 0, y: 0 });
  const moveX = useRef(null);
  const moveY = useRef(null);

  useGSAP(() => {
    moveX.current = gsap.quickTo(previewRef.current, "x", {
      duration: 1.5,
      ease: "power3.out",
    });
    moveY.current = gsap.quickTo(previewRef.current, "y", {
      duration: 2,
      ease: "power3.out",
    });

    gsap.from("#project", {
      y: 100,
      opacity: 0,
      delay: 0.5,
      duration: 1,
      stagger: 0.2,
      ease: "back.out",
      scrollTrigger: {
        trigger: "#work",
        start: "top 70%",
      },
    });
  }, []);

  const handleMouseEnter = (index) => {
    if (window.innerWidth < 768) return;
    setCurrentIndex(index);

    const el = overlayRefs.current[index];
    if (!el) return;

    gsap.killTweensOf(el);
    gsap.fromTo(
      el,
      {
        clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
      },
      {
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
        duration: 0.15,
        ease: "power2.out",
      }
    );

    gsap.to(previewRef.current, {
      opacity: 1,
      scale: 1,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = (index) => {
    if (window.innerWidth < 768) return;
    setCurrentIndex(null);

    const el = overlayRefs.current[index];
    if (!el) return;

    gsap.killTweensOf(el);
    gsap.to(el, {
      clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
      duration: 0.2,
      ease: "power2.in",
    });

    gsap.to(previewRef.current, {
      opacity: 0,
      scale: 0.95,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleMouseMove = (e) => {
    if (window.innerWidth < 768) return;
    mouse.current.x = e.clientX + 24;
    mouse.current.y = e.clientY + 24;
    moveX.current(mouse.current.x);
    moveY.current(mouse.current.y);
  };

  const handleProjectClick = (href) => {
    if (href) {
      window.open(href, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <section id="work" className="flex flex-col min-h-screen bg-[#e5e5e0]">
      <AnimatedHeaderSection
        subTitle={"Engineering Meets Innovation, Seamlessly"}
        title={"Works"}
        text={text}
        textColor={"text-black"}
        withScrollTrigger={true}
      />
      <div
        className="relative flex flex-col font-light"
        onMouseMove={handleMouseMove}
      >
        {projects.map((project, index) => (
          <div
            key={project.id}
            id="project"
            onClick={() => handleProjectClick(project.href)}
            className="relative flex flex-col gap-2 py-6 cursor-pointer group md:gap-0"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
          >
            {/* overlay */}
            <div
              ref={(el) => {
                overlayRefs.current[index] = el;
              }}
              className="absolute inset-0 hidden md:block duration-200 bg-black -z-10 clip-path"
            />

            {/* title & tagline */}
            <div className="flex flex-col md:flex-row md:items-center justify-between px-10 text-black transition-all duration-500 md:group-hover:px-12 md:group-hover:text-white">
              <div>
                <h2 className="lg:text-[34px] text-[26px] leading-snug font-normal">
                  {project.name}
                </h2>
                {project.tagline && (
                  <p className="text-xs uppercase tracking-widest text-black/60 md:group-hover:text-gold transition-colors duration-500 mt-1">
                    {project.tagline}
                  </p>
                )}
              </div>
              <div className="flex items-center gap-2 mt-2 md:mt-0">
                <span className="text-xs tracking-wider uppercase opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 hidden md:inline">
                  View Code
                </span>
                <Icon
                  icon="lucide:arrow-up-right"
                  className="md:size-6 size-5 transition-transform duration-300 md:group-hover:translate-x-1 md:group-hover:-translate-y-1"
                />
              </div>
            </div>

            {/* description snippet */}
            <div className="px-10 md:group-hover:px-12 text-black/70 md:group-hover:text-white/80 text-sm font-light max-w-4xl transition-all duration-500 my-2">
              <p>{project.description}</p>
            </div>

            {/* divider */}
            <div className="w-full h-px bg-black/20 my-2" />

            {/* frameworks */}
            <div className="flex flex-wrap px-10 text-xs leading-loose uppercase transition-all duration-500 md:text-xs gap-x-4 gap-y-1 md:group-hover:px-12">
              {project.frameworks.map((framework) => (
                <span
                  key={framework.id}
                  className="px-2.5 py-0.5 rounded-full bg-black/5 md:group-hover:bg-white/10 text-black transition-colors duration-500 md:group-hover:text-white border border-black/10 md:group-hover:border-white/20"
                >
                  {framework.name}
                </span>
              ))}
            </div>

            {/* mobile preview image */}
            <div className="relative flex items-center justify-center px-10 mt-4 md:hidden h-[300px]">
              <img
                src={project.bgImage}
                alt={`${project.name}-bg-image`}
                className="object-cover w-full h-full rounded-2xl brightness-50"
              />
              <img
                src={project.image}
                alt={`${project.name}-image`}
                className="absolute bg-center px-6 rounded-xl max-h-[220px] object-cover"
              />
            </div>
          </div>
        ))}

        {/* desktop Floating preview image */}
        <div
          ref={previewRef}
          className="fixed -top-2/6 left-0 z-50 overflow-hidden border-4 border-black rounded-2xl shadow-2xl pointer-events-none w-[560px] h-[360px] md:block hidden opacity-0 bg-black"
        >
          {currentIndex !== null && (
            <div className="relative w-full h-full">
              <img
                src={projects[currentIndex].bgImage}
                alt="bg preview"
                className="absolute inset-0 object-cover w-full h-full brightness-40"
              />
              <img
                src={projects[currentIndex].image}
                alt="preview"
                className="relative z-10 object-contain w-full h-full p-4"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Works;
