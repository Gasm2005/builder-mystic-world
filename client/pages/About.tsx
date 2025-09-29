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
      {
        label: "Instagram",
        href: "https://www.instagram.com",
        alt: "Instagram page",
      },
      {
        label: "Facebook",
        href: "https://www.facebook.com",
        alt: "Facebook page",
      },
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
    const evt = new Event("scroll");
    window.dispatchEvent(evt);
  }, []);

  return (
    <section className="relative">
      {/* Decorative background */}
      <div className="absolute inset-0 -z-10 opacity-30 [mask-image:radial-gradient(600px_400px_at_10%_10%,#000_20%,transparent_60%)]">
        <div
          className="absolute -inset-24 blur-3xl"
          style={{
            background:
              "radial-gradient(800px 500px at 15% 20%, var(--neon-start), transparent), radial-gradient(800px 500px at 85% 10%, var(--neon-end), transparent)",
          }}
        />
      </div>

      <div className="container mx-auto py-16 lg:py-24">
        {/* Split header with image + text */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-14 lg:mb-20">
          <div className="reveal">
            <h1 className="text-3xl sm:text-4xl font-bold mb-3">
              <span className="neon-text">About • Timeline</span>
            </h1>
            <p className="text-white/70 max-w-xl">
              From small-town beginnings to performance marketing—here is the
              journey in milestones.
            </p>
          </div>
          <div className="reveal">
            <figure className="relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur">
              <div
                className="absolute -inset-px rounded-2xl neon-ring"
                aria-hidden
              />
              <img
                src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=1600&auto=format&fit=crop"
                alt="Ajay's journey from Gonda to digital marketing"
                className="w-full h-64 md:h-[300px] object-cover"
                loading="lazy"
              />
            </figure>
          </div>
        </div>

        {/* Timeline */}
        <ol className="relative border-s border-white/10 ml-4 sm:ml-6">
          {TIMELINE.map((item, idx) => (
            <li key={idx} className="mb-10 ms-6 reveal">
              <span className="absolute -left-3 flex size-6 items-center justify-center rounded-full border border-white/20 bg-white/5 text-base">
                <span aria-hidden>{item.icon}</span>
              </span>
              <div
                className={
                  "grid gap-2 p-5 rounded-xl border border-white/10 bg-white/5 backdrop-blur w-full md:ml-8"
                }
              >
                <h3 className="text-lg font-semibold text-white">
                  {item.title}
                </h3>
                <div className="text-xs uppercase tracking-wide text-white/60">
                  {item.meta}
                </div>
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
                        <span
                          className="size-1.5 rounded-full neon-bg"
                          aria-hidden
                        />{" "}
                        {l.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
