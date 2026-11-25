import { useGLTF } from "@react-three/drei";
import { projects, skillsData } from "../constants";

export const MODEL_URL = "/models/Planet.glb";

// Start fetching the 3D model immediately (module import time) so it is
// already in flight while the loader is on screen.
useGLTF.preload(MODEL_URL);

const imageUrls = () => {
  const urls = new Set(["/images/man.jpg"]);
  [
    "rocket", "brain", "cloud", "robot", "toolbox", "resume", "lightning",
    "graduation", "trophy", "database", "circuit", "calendar", "mail",
    "phone", "marker", "github", "code",
  ].forEach((n) => urls.add(`/icons/${n}.png`));
  skillsData.categories.forEach((c) =>
    c.skills.forEach((s) => s.icon && urls.add(s.icon))
  );
  projects.forEach((p) => {
    if (p.image) urls.add(p.image);
    if (p.bgImage) urls.add(p.bgImage);
  });
  return [...urls];
};

const loadImage = (src) =>
  new Promise((resolve) => {
    const img = new Image();
    img.decoding = "async";
    img.src = src;
    const done = () => resolve();
    // decode() pre-rasterises the image so it paints without a hitch later;
    // a failed asset must never block the whole site.
    if (img.decode) img.decode().then(done, done);
    else {
      img.onload = done;
      img.onerror = done;
    }
  });

const loadFonts = async () => {
  if (!document.fonts) return;
  try {
    await Promise.all([...document.fonts].map((face) => face.load().catch(() => {})));
    await document.fonts.ready;
  } catch {
    /* ignore */
  }
};

/**
 * Preloads every image and font used by the page.
 * onProgress receives a 0-1 value; the promise resolves when all are done.
 */
export const preloadAssets = (onProgress) => {
  const tasks = [...imageUrls().map((u) => () => loadImage(u)), loadFonts];
  let done = 0;
  return Promise.all(
    tasks.map((t) =>
      t().then(() => {
        done += 1;
        onProgress(done / tasks.length);
      })
    )
  );
};
