import { useGSAP } from "@gsap/react";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import Marquee from "../components/Marquee";
import { personalInfo, resumes, socials, bookingOptions } from "../constants";
import { Icon } from "@iconify/react/dist/iconify.js";
import gsap from "gsap";

const Contact = () => {
  const text = `Have an opportunity, collaboration, or engineering challenge?
I’d love to connect and discuss how I can add immediate value!`;

  const items = [
    "clean code, scalable systems",
    "autonomous AI, production ready",
    "zero-downtime architecture",
    "clean code, scalable systems",
    "autonomous AI, production ready",
  ];

  useGSAP(() => {
    gsap.from(".social-link", {
      y: 100,
      opacity: 0,
      delay: 0.5,
      duration: 1,
      stagger: 0.2,
      ease: "back.out",
      scrollTrigger: {
        trigger: ".social-link",
      },
    });
  }, []);

  return (
    <section
      id="contact"
      className="flex flex-col justify-between min-h-screen bg-black text-white"
    >
      <div>
        <AnimatedHeaderSection
          subTitle={"Open to Opportunities • Let's Connect"}
          title={"Contact"}
          text={text}
          textColor={"text-white"}
          withScrollTrigger={true}
        />
        <div className="flex px-10 font-light text-white uppercase lg:text-[32px] text-[26px] leading-none mb-12">
          <div className="flex flex-col w-full gap-8">
            {/* Book a meeting */}
            <div className="social-link">
              <h2 className="flex items-center gap-3"><img src="/icons/calendar.png" alt="" aria-hidden="true" width={32} height={32} className="size-7 md:size-8" />Book a Meeting</h2>
              <div className="w-full h-px my-2 bg-white/30" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 normal-case">
                {bookingOptions.map((option) => (
                  <a
                    key={option.id}
                    href={option.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-xl bg-gold text-black hover:bg-white transition-colors flex flex-col gap-1 group"
                  >
                    <span className="flex items-center justify-between text-base md:text-lg font-medium">
                      {option.title}
                      <Icon icon="lucide:calendar-check" className="size-5" />
                    </span>
                    <span className="text-xs md:text-sm tracking-wide opacity-70">
                      {option.description}
                    </span>
                  </a>
                ))}
              </div>
              <p className="mt-3 text-xs tracking-wider normal-case text-white/50">
                Or see all my links on{" "}
                <a
                  href={personalInfo.linktree}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-gold"
                >
                  Linktree
                </a>
                .
              </p>
            </div>

            {/* Email */}
            <div className="social-link">
              <h2 className="flex items-center gap-3"><img src="/icons/mail.png" alt="" aria-hidden="true" width={32} height={32} className="size-7 md:size-8" />E-mail</h2>
              <div className="w-full h-px my-2 bg-white/30" />
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-xl tracking-wider lowercase md:text-2xl lg:text-3xl text-gold hover:text-white transition-colors flex items-center gap-2"
              >
                <span>{personalInfo.email}</span>
                <Icon icon="lucide:arrow-up-right" className="size-6 inline" />
              </a>
            </div>

            {/* Phone */}
            <div className="social-link">
              <h2 className="flex items-center gap-3"><img src="/icons/phone.png" alt="" aria-hidden="true" width={32} height={32} className="size-7 md:size-8" />Phone</h2>
              <div className="w-full h-px my-2 bg-white/30" />
              <a
                href={`tel:${personalInfo.phone.replace(/[^0-9+]/g, "")}`}
                className="text-xl lowercase md:text-2xl lg:text-3xl hover:text-gold transition-colors flex items-center gap-2"
              >
                <span>{personalInfo.phone}</span>
                <Icon icon="lucide:arrow-up-right" className="size-6 inline" />
              </a>
            </div>

            {/* Location */}
            <div className="social-link">
              <h2 className="flex items-center gap-3"><img src="/icons/marker.png" alt="" aria-hidden="true" width={32} height={32} className="size-7 md:size-8" />Location</h2>
              <div className="w-full h-px my-2 bg-white/30" />
              <p className="text-xl capitalize md:text-2xl lg:text-3xl text-white/80">
                {personalInfo.location}
              </p>
            </div>

            {/* Social Media Links */}
            <div className="social-link">
              <h2 className="flex items-center gap-3"><img src="/icons/github.png" alt="" aria-hidden="true" width={32} height={32} className="size-7 md:size-8" />Profiles & Network</h2>
              <div className="w-full h-px my-2 bg-white/30" />
              <div className="flex flex-wrap gap-3">
                {socials.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs leading-loose tracking-widest uppercase md:text-sm px-4 py-2 rounded-xl bg-white/10 hover:bg-gold hover:text-black transition-all duration-300 border border-white/10"
                  >
                    {"{ "}
                    {social.name}
                    {" }"}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Resume Direct Download Bar */}
            <div className="social-link">
              <h2 className="flex items-center gap-3"><img src="/icons/resume.png" alt="" aria-hidden="true" width={32} height={32} className="size-7 md:size-8" />Targeted Resumes (PDF)</h2>
              <div className="w-full h-px my-2 bg-white/30" />
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
                {resumes.map((resume) => (
                  <a
                    key={resume.id}
                    href={resume.filePath}
                    download={resume.fileName}
                    className="p-3 rounded-xl bg-white/5 hover:bg-gold/20 border border-white/10 hover:border-gold transition-all text-left flex flex-col justify-between group"
                  >
                    <span className="text-[10px] tracking-wider uppercase text-gold font-mono">
                      {resume.badge}
                    </span>
                    <span className="text-sm font-medium text-white group-hover:text-gold transition-colors mt-1">
                      {resume.title}
                    </span>
                    <span className="text-[11px] text-white/50 flex items-center gap-1 mt-2">
                      <Icon icon="lucide:download" className="size-3" />
                      <span>Download PDF</span>
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Marquee items={items} className="text-white bg-transparent" />
    </section>
  );
};

export default Contact;
