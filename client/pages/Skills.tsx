import { useRevealOnScroll } from "@/hooks/useRevealOnScroll";

const SKILLS: { title: string; desc: string }[] = [
  {
    title: "Meta Ads Management",
    desc: "Running and optimizing Meta (Facebook & Instagram) ad campaigns.",
  },
  {
    title: "Online & Offline Sales",
    desc: "Experience in credit card sales, telesales, and client-facing roles.",
  },
  {
    title: "Lead Generation & Nurturing",
    desc: "Finding potential clients and guiding them through the sales process.",
  },
  {
    title: "Client Communication",
    desc: "Handling clients professionally, building trust, and maintaining relationships.",
  },
  {
    title: "Content Creation (Canva)",
    desc: "Designing posts, creatives, and marketing materials for social media.",
  },
  {
    title: "Resilience & Adaptability",
    desc: "Thriving under pressure and in fast-paced environments.",
  },
  {
    title: "Extreme Loyalty & Patience",
    desc: "Dedication to work and long-term goals.",
  },
  {
    title: "A Will to Deliver Results",
    desc: "Strong focus on achieving outcomes and exceeding expectations.",
  },
];

export default function Skills() {
  useRevealOnScroll();
  return (
    <section className="container mx-auto py-16 lg:py-24">
      <header className="text-center max-w-2xl mx-auto mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold">
          <span className="neon-text">Skills</span>
        </h1>
        <p className="mt-3 text-white/70">
          A blend of sales rigor and performance marketing craft.
        </p>
      </header>

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
        {SKILLS.map((s) => (
          <li key={s.title} className="reveal">
            <div className="group relative rounded-2xl p-[2px] neon-bg">
              <div className="rounded-2xl bg-[hsl(var(--background))] px-5 py-4 text-left transition-all duration-300 group-hover:shadow-[0_20px_60px_-20px_rgba(0,114,255,0.35)] tile-slide">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-white font-medium">{s.title}</span>
                  <span className="size-2 rounded-full neon-bg" aria-hidden />
                </div>
                <p className="mt-1.5 text-sm text-white/70">{s.desc}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
