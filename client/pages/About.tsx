import { useEffect } from "react";
import { useRevealOnScroll } from "@/hooks/useRevealOnScroll";

const TIMELINE = [
  {
    title: "Childhood & small-town beginnings",
    meta: "Gonda, Uttar Pradesh",
    desc: "Grit, values, and resilience shaped by a humble start.",
    icon: "🌱",
    links: [],
  },
  {
    title: "Credit Card Sales | Innovsource Ltd. (SBI)",
    meta: "Offline Sales",
    desc: "Door-to-door sales taught persuasion, patience, and accountability.",
    icon: "💳",
    links: [],
  },
  {
    title: "Data Entry | Baba Engineering (L&T Project)",
    meta: "Focus & Discipline",
    desc: "Strengthened attention to detail, ownership of deliverables.",
    icon: "⌨️",
    links: [],
  },
  {
    title: "Corporate Sales | Tech Mahindra, Noida",
    meta: "Customer trust & cold calls",
    desc: "Improved communication, objection handling, and pipeline hygiene.",
    icon: "🏢",
    links: [],
  },
  {
    title: "Digital Marketing & Sales | Pawpl & Royal Enfield",
    meta: "Meta Ads & content creation",
    desc: "Hands-on ads execution, creatives in Canva, results-driven approach.",
    icon: "📈",
    links: [
      { label: "Instagram", href: "https://www.instagram.com", alt: "Instagram page" },
      { label: "Facebook", href: "https://www.facebook.com", alt: "Facebook page" },
    ],
  },
  {
    title: "Digital Sales | Fuse Market",
    meta: "Client handling & results",
    desc: "Led acquisition campaigns and nurtured leads to conversions.",
    icon: "⚡",
    links: [],
  },
] as const;

export default function About() {
  useRevealOnScroll();
  useEffect(() => {
    // Ensure initial in-view elements animate
    const evt = new Event("scroll");
    window.dispatchEvent(evt);
  }, []);

  return (
    <section className="container mx-auto py-16 lg:py-24">
      <header className="max-w-2xl mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold">
          <span className="neon-text">About • Timeline</span>
        </h1>
        <p className="mt-3 text-white/70">
          From small-town beginnings to performance marketing—here is the journey in milestones.
        </p>
      </header>

      {/* Timeline */}
      <ol className="relative border-s border-white/10 ml-4 sm:ml-6">
        {TIMELINE.map((item, idx) => (
          <li key={idx} className="mb-10 ms-6 reveal">
            <span className="absolute -left-3 flex size-6 items-center justify-center rounded-full border border-white/20 bg-white/5 text-base">
              <span aria-hidden>{item.icon}</span>
            </span>
            <div className={"grid gap-2 p-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur " + (idx % 2 ? "md:ml-24" : "md:mr-24") }>
              <h3 className="text-lg font-semibold text-white">
                {item.title}
              </h3>
              <div className="text-xs uppercase tracking-wide text-white/60">{item.meta}</div>
              <p className="text-white/75 text-sm">{item.desc}</p>
              {item.links.length > 0 && (
                <div className="mt-2 flex flex-wrap gap-2">
                  {item.links.map((l) => (
                    <a
                      key={l.label}
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-white/15 px-3 py-1.5 text-xs text-white/80 hover:text-white hover:border-white/30 transition"
                      aria-label={l.alt}
                    >
                      <span className="size-1.5 rounded-full neon-bg" aria-hidden /> {l.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
