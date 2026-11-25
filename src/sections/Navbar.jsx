import React, { useEffect, useRef, useState } from "react";
import { personalInfo, resumes, socials } from "../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Link } from "react-scroll";
import { Icon } from "@iconify/react/dist/iconify.js";

const Navbar = () => {
  const navRef = useRef(null);
  const linksRef = useRef([]);
  const contactRef = useRef(null);
  const topLineRef = useRef(null);
  const bottomLineRef = useRef(null);
  const tl = useRef(null);
  const iconTl = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [showBurger, setShowBurger] = useState(true);

  useGSAP(() => {
    gsap.set(navRef.current, { xPercent: 100 });
    gsap.set([linksRef.current, contactRef.current], {
      autoAlpha: 0,
      x: -20,
    });

    tl.current = gsap
      .timeline({ paused: true })
      .to(navRef.current, {
        xPercent: 0,
        duration: 1,
        ease: "power3.out",
      })
      .to(
        linksRef.current,
        {
          autoAlpha: 1,
          x: 0,
          stagger: 0.08,
          duration: 0.5,
          ease: "power2.out",
        },
        "<"
      )
      .to(
        contactRef.current,
        {
          autoAlpha: 1,
          x: 0,
          duration: 0.5,
          ease: "power2.out",
        },
        "<+0.2"
      );

    iconTl.current = gsap
      .timeline({ paused: true })
      .to(topLineRef.current, {
        rotate: 45,
        y: 3.3,
        duration: 0.3,
        ease: "power2.inOut",
      })
      .to(
        bottomLineRef.current,
        {
          rotate: -45,
          y: -3.3,
          duration: 0.3,
          ease: "power2.inOut",
        },
        "<"
      );
  }, []);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShowBurger(currentScrollY <= lastScrollY || currentScrollY < 10);
      lastScrollY = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    if (isOpen) {
      tl.current.reverse();
      iconTl.current.reverse();
    } else {
      tl.current.play();
      iconTl.current.play();
    }
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    if (isOpen) {
      toggleMenu();
    }
  };

  const navSections = [
    "home",
    "services",
    "about",
    "experience",
    "work",
    "qualifications",
    "contact",
  ];

  return (
    <>
      <nav
        ref={navRef}
        className="fixed z-50 flex flex-col justify-between w-full h-full px-8 md:px-12 uppercase bg-black text-white/80 py-16 gap-y-6 md:w-1/2 md:left-1/2 overflow-y-auto"
      >
        <div className="flex flex-col text-3xl sm:text-4xl md:text-5xl lg:text-6xl gap-y-2">
          {navSections.map((section, index) => (
            <div key={index} ref={(el) => (linksRef.current[index] = el)}>
              <Link
                className="transition-all duration-300 cursor-pointer hover:text-gold hover:translate-x-2 inline-block"
                to={`${section}`}
                smooth
                offset={0}
                duration={1500}
                onClick={handleLinkClick}
              >
                {section}
              </Link>
            </div>
          ))}
        </div>

        {/* 5 Resumes Quick Access */}
        <div className="flex flex-col gap-2 pt-4 border-t border-white/20">
          <p className="text-xs tracking-widest text-gold font-normal">
            Download 4 Targeted Resumes
          </p>
          <div className="grid grid-cols-2 gap-2 text-[10px] tracking-wider normal-case">
            {resumes.map((resume) => (
              <a
                key={resume.id}
                href={resume.filePath}
                download={resume.fileName}
                className="p-2 rounded-lg bg-white/5 hover:bg-gold/20 text-white/80 hover:text-white transition-colors border border-white/10 flex items-center justify-between"
              >
                <span className="truncate">{resume.title}</span>
                <Icon icon="lucide:download" className="size-3 shrink-0 ml-1 text-gold" />
              </a>
            ))}
          </div>
        </div>

        <div
          ref={contactRef}
          className="flex flex-col flex-wrap justify-between gap-6 md:flex-row pt-4 border-t border-white/20"
        >
          <div className="font-light">
            <p className="tracking-wider text-xs text-white/50">E-mail</p>
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-base tracking-wider lowercase text-gold hover:underline"
            >
              {personalInfo.email}
            </a>
          </div>
          <div className="font-light">
            <p className="tracking-wider text-xs text-white/50">Social Media</p>
            <div className="flex flex-wrap gap-2 mt-1">
              {socials.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs leading-loose tracking-widest uppercase hover:text-gold transition-colors duration-300"
                >
                  {"{ "}
                  {social.name}
                  {" }"}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Floating Burger Toggle */}
      <div
        className="fixed z-50 flex flex-col items-center justify-center gap-1 transition-all duration-300 bg-black rounded-full cursor-pointer w-14 h-14 md:w-20 md:h-20 top-4 right-10 shadow-2xl border border-white/10"
        onClick={toggleMenu}
        style={
          showBurger
            ? { clipPath: "circle(50% at 50% 50%)" }
            : { clipPath: "circle(0% at 50% 50%)" }
        }
      >
        <span
          ref={topLineRef}
          className="block w-8 h-0.5 bg-white rounded-full origin-center"
        ></span>
        <span
          ref={bottomLineRef}
          className="block w-8 h-0.5 bg-white rounded-full origin-center"
        ></span>
      </div>
    </>
  );
};

export default Navbar;
