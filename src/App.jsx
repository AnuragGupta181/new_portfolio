import React, { useEffect, useState } from "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import ServiceSummary from "./sections/ServiceSummary";
import Services from "./sections/Services";
import ReactLenis from "lenis/react";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Works from "./sections/Works";
import DevOpsLoop from "./sections/DevOpsLoop";
import CustomCursor from "./components/CustomCursor";
import Qualifications from "./sections/Qualifications";
import ContactSummary from "./sections/ContactSummary";
import Contact from "./sections/Contact";
import { useProgress } from "@react-three/drei";
import { preloadAssets } from "./utils/preloadAssets";

const App = () => {
  const { progress: modelProgress } = useProgress();
  const [assetProgress, setAssetProgress] = useState(0);
  const [assetsDone, setAssetsDone] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [showLoader, setShowLoader] = useState(true);

  // Preload fonts + every image up front.
  useEffect(() => {
    let cancelled = false;
    preloadAssets((p) => !cancelled && setAssetProgress(p)).then(() => {
      if (!cancelled) setAssetsDone(true);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  // The 3D model is by far the heaviest asset, so it carries most of the bar.
  const progress = Math.min(100, modelProgress * 0.75 + assetProgress * 25);

  // Reveal only once model + images + fonts are all ready, then wait for two
  // frames so the first paint of the whole page is already settled.
  useEffect(() => {
    if (!assetsDone || modelProgress < 100) return;
    let raf1;
    let raf2;
    raf1 = requestAnimationFrame(() => {
      raf2 = requestAnimationFrame(() => setIsReady(true));
    });
    return () => {
      cancelAnimationFrame(raf1);
      cancelAnimationFrame(raf2);
    };
  }, [assetsDone, modelProgress]);

  // Safety net: never trap a visitor behind the loader if an asset stalls.
  useEffect(() => {
    const t = setTimeout(() => setIsReady(true), 25000);
    return () => clearTimeout(t);
  }, []);

  // Unmount the loader after its fade-out finishes.
  useEffect(() => {
    if (!isReady) return;
    const t = setTimeout(() => setShowLoader(false), 800);
    return () => clearTimeout(t);
  }, [isReady]);

  return (
    <ReactLenis root className="relative w-full min-h-screen overflow-x-hidden">
      <CustomCursor />
      {showLoader && (
        <div
          className={`fixed inset-0 z-[999] flex flex-col items-center justify-center bg-black text-white font-light transition-opacity duration-700 ${
            isReady ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        >
          <p className="mb-4 text-xl tracking-widest animate-pulse">
            Loading {Math.floor(isReady ? 100 : progress)}%
          </p>
          <div className="relative h-1 overflow-hidden rounded w-60 bg-white/20">
            <div
              className="absolute top-0 left-0 h-full transition-all duration-300 bg-white"
              style={{ width: `${isReady ? 100 : progress}%` }}
            ></div>
          </div>
        </div>
      )}
      {/* The page mounts only after everything is cached, so every intro
          animation plays visibly and nothing pops in while scrolling. */}
      {isReady && (
        <div className="animate-fade-in">
          <Navbar />
          <Hero />
          <ServiceSummary />
          <Services />
          <About />
          <Experience />
          <DevOpsLoop />
          <Works />
          <Qualifications />
          <ContactSummary />
          <Contact />
        </div>
      )}
    </ReactLenis>
  );
};

export default App;
