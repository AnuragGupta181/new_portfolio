import { useRef } from "react";
import Marquee from "../components/Marquee";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const ContactSummary = () => {
  const containerRef = useRef(null);
  const items = [
    "Distributed Systems",
    "Cloud Architecture",
    "Agentic AI",
    "Precision",
    "High Availability",
    "Excellence",
  ];
  const items2 = [
    "get in touch",
    "hire anurag",
    "get in touch",
    "open to work",
    "get in touch",
    "hire anurag",
  ];

  useGSAP(() => {
    gsap.to(containerRef.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
        markers: false,
      },
    });
  }, []);

  return (
    <section
      ref={containerRef}
      className="flex flex-col items-center justify-between min-h-screen gap-12 mt-16 bg-[#e5e5e0]"
    >
      <Marquee items={items} />
      <div className="overflow-hidden font-light text-center contact-text-responsive px-4">
        <p>
          “ Let’s build a <br />
          <span className="font-normal">resilient</span> &{" "}
          <span className="italic">intelligent</span> <br />
          scalable system <span className="text-gold">together</span> “
        </p>
      </div>
      <Marquee
        items={items2}
        reverse={true}
        className="text-black bg-transparent border-y-2"
        iconClassName="stroke-gold stroke-2 text-primary"
        icon="material-symbols-light:square"
      />
    </section>
  );
};

export default ContactSummary;
