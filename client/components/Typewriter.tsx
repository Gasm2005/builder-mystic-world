import { useEffect, useMemo, useRef, useState } from "react";

/**
 * Simple typewriter that cycles through phrases
 */
export function Typewriter({
  items,
  typingSpeed = 80,
  pause = 1200,
}: {
  items: string[];
  typingSpeed?: number;
  pause?: number;
}) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);
  const current = useMemo(() => items[index % items.length], [items, index]);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    function tick() {
      if (!deleting) {
        const next = current.slice(0, text.length + 1);
        setText(next);
        if (next === current) {
          timeoutRef.current = window.setTimeout(() => setDeleting(true), pause);
          return;
        }
      } else {
        const next = current.slice(0, Math.max(0, text.length - 1));
        setText(next);
        if (next.length === 0) {
          setDeleting(false);
          setIndex((i) => (i + 1) % items.length);
        }
      }
      const delay = deleting ? typingSpeed / 1.6 : typingSpeed;
      timeoutRef.current = window.setTimeout(tick, delay);
    }
    timeoutRef.current = window.setTimeout(tick, typingSpeed);
    return () => {
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    };
  }, [current, deleting, pause, text.length, typingSpeed, items.length]);

  return (
    <span aria-live="polite" className="whitespace-nowrap">
      {text}
      <span className="inline-block w-[2px] h-[1em] -mb-[2px] bg-white/80 animate-pulse ml-1" />
    </span>
  );
}
