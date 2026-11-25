import { Canvas } from "@react-three/fiber";
import { Planet } from "../components/Planet";
import { Environment, Float, Lightformer } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import { personalInfo, openSourceData } from "../constants";

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 853 });
  const text = `Engineering high-concurrency microservices,
scalable cloud infrastructure & autonomous AI pipelines
from prototype to production.`;

  return (
    <section id="home" className="relative flex flex-col justify-end min-h-screen">
      <AnimatedHeaderSection
        subTitle={"Software Engineer • LFX Mentee • AI & Cloud"}
        title={personalInfo.name}
        text={text}
        textColor={"text-black"}
        as="h1"
      />

      {/* Floating 3D Planet */}
      <figure
        className="absolute inset-0 -z-50"
        style={{ width: "100vw", height: "100vh" }}
      >
        <Canvas
          shadows
          dpr={[1, 1.5]}
          camera={{ position: [0, 0, -10], fov: 17.5, near: 1, far: 20 }}
        >
          <ambientLight intensity={0.5} />
          <Float speed={0.5}>
            <Planet scale={isMobile ? 0.7 : 1} />
          </Float>
          <Environment resolution={256}>
            <group rotation={[-Math.PI / 3, 4, 1]}>
              <Lightformer
                form={"circle"}
                intensity={2}
                position={[0, 5, -9]}
                scale={10}
              />
              <Lightformer
                form={"circle"}
                intensity={2}
                position={[0, 3, 1]}
                scale={10}
              />
              <Lightformer
                form={"circle"}
                intensity={2}
                position={[-5, -1, -1]}
                scale={10}
              />
              <Lightformer
                form={"circle"}
                intensity={2}
                position={[10, 1, 0]}
                scale={16}
              />
            </group>
          </Environment>
        </Canvas>
      </figure>

      {/* Bottom Status Ribbon */}
      <div className="flex flex-wrap items-center justify-between gap-4 px-5 md:px-10 py-6 border-t border-black/10 text-xs uppercase tracking-widest text-black/70">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-gold animate-ping"></span>
          <span className="w-2 h-2 -ml-3 rounded-full bg-gold"></span>
          <span>Open to Software Engineering & AI/Cloud Roles</span>
        </div>
        <div className="flex flex-wrap items-center gap-6">
          <span>LFX Mentee @ GitMesh</span>
          <span className="hidden sm:inline">•</span>
          <a
            href={openSourceData.prsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline hover:text-black underline-offset-4 hover:underline"
          >
            12+ Merged PRs
          </a>
          <span className="hidden sm:inline">•</span>
          <span className="hidden sm:inline">5 Target Resumes</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
