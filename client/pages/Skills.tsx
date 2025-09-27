import { useRevealOnScroll } from "@/hooks/useRevealOnScroll";

const SKILLS = [
  "Meta Ads Management",
  "Online & Offline Sales",
  "Lead Generation & Nurturing",
  "Client Communication",
  "Content Creation (Canva)",
  "Resilience & Adaptability",
  "Extreme Loyalty & Patience",
  "Goal-Oriented Mindset",
] as const;

export default function Skills() {
  useRevealOnScroll();
  return (
    <section className="container mx-auto py-16 lg:py-24">
      <header className="text-center max-w-2xl mx-auto mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold"><span className="neon-text">Skills</span></h1>
        <p className="mt-3 text-white/70">A blend of sales rigor and performance marketing craft.</p>
      </header>

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
        {SKILLS.map((s) => (
          <li key={s} className="reveal">
            <div className="group relative rounded-full p-[2px] neon-bg">
              <div className="rounded-full bg-[hsl(var(--background))] px-5 py-3 text-center text-white/80 transition-all duration-300 group-hover:text-white group-hover:shadow-[0_0_0_4px_rgba(0,0,0,0.2)] group-hover:-translate-y-0.5">
                <span className="inline-block bg-clip-text text-transparent group-hover:text-white group-hover:[background-image:linear-gradient(135deg,var(--neon-start),var(--neon-end))]">
                  {s}
                </span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
