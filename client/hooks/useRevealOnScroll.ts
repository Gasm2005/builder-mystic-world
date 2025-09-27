import { useEffect } from "react";

/** Adds `.reveal-visible` when elements with `.reveal` enter viewport */
export function useRevealOnScroll() {
  useEffect(() => {
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>(".reveal"),
    );
    if (!elements.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("reveal-visible");
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.1 },
    );

    elements.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}
