type LifestyleInfo = {
  alt: string;
  caption: string;
  width: number;
  height: number;
};

const LIFESTYLE_INFO: Record<string, LifestyleInfo> = {
  "/assets/lifestyle/copper-home-desert-light.png": {
    alt: "Copper Home speaker on a stone counter beside a window with a desert sunset",
    caption:
      "Copper Home keeps the household running, even when the sun goes down.",
    width: 1672,
    height: 941,
  },
  "/assets/lifestyle/copper-notes-stone-desk.png": {
    alt: "Copper Notes recorder on a stone desk next to a copper charging disc",
    caption: "Copper Notes sits ready on your desk between meetings.",
    width: 1672,
    height: 941,
  },
  "/assets/lifestyle/copper-notes-golden-hour.png": {
    alt: "Person writing in a notebook with Copper Notes clipped to their shirt pocket",
    caption: "Copper Notes clips on and captures the details while you write.",
    width: 1536,
    height: 1024,
  },
};

export function lifestyleInfo(path: string, productName: string): LifestyleInfo {
  return (
    LIFESTYLE_INFO[path] ?? {
      alt: `${productName} in everyday use`,
      caption: productName,
      width: 1600,
      height: 900,
    }
  );
}
