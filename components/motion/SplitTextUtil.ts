/**
 * SplitTextUtil
 * A lightweight, zero-dependency helper that splits text into HTML spans
 * for line, word, or character animations with overflow-hidden wrappers.
 */

export interface SplitResult {
  elements: HTMLElement[];
  cleanup: () => void;
}

export function splitTextToSpans(
  element: HTMLElement,
  splitType: "lines" | "words" | "chars"
): HTMLElement[] {
  const originalText = element.textContent || "";
  element.setAttribute("data-original-text", originalText);

  if (splitType === "chars") {
    element.innerHTML = "";
    const chars = originalText.split("");
    const spans: HTMLElement[] = [];

    chars.forEach((char) => {
      const wrapper = document.createElement("span");
      wrapper.className = "inline-block overflow-hidden align-bottom";

      const inner = document.createElement("span");
      inner.className = "inline-block char-unit";
      inner.textContent = char === " " ? "\u00A0" : char;

      wrapper.appendChild(inner);
      element.appendChild(wrapper);
      spans.push(inner);
    });

    return spans;
  }

  if (splitType === "words") {
    element.innerHTML = "";
    const words = originalText.split(/\s+/);
    const spans: HTMLElement[] = [];

    words.forEach((word, idx) => {
      const wrapper = document.createElement("span");
      wrapper.className = "inline-block overflow-hidden align-bottom mr-[0.25em]";

      const inner = document.createElement("span");
      inner.className = "inline-block word-unit";
      inner.textContent = word;

      wrapper.appendChild(inner);
      element.appendChild(wrapper);
      spans.push(inner);
    });

    return spans;
  }

  // Lines split — wrap whole text or lines
  element.innerHTML = "";
  const lines = originalText.split("\n").filter(Boolean);
  const spans: HTMLElement[] = [];

  lines.forEach((line) => {
    const wrapper = document.createElement("div");
    wrapper.className = "block overflow-hidden";

    const inner = document.createElement("div");
    inner.className = "block line-unit";
    inner.textContent = line;

    wrapper.appendChild(inner);
    element.appendChild(wrapper);
    spans.push(inner);
  });

  return spans;
}
