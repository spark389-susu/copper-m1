const PRODUCT_ALT: Record<string, string> = {
  "copper-home":
    "Copper Home smart speaker, a woven copper-orange dome with a clock display",
  "copper-notes":
    "Copper Notes recorder, a square brushed-copper device with a glowing button",
};

export function productAlt(id: string, name: string): string {
  return PRODUCT_ALT[id] ?? `${name} product photo`;
}
