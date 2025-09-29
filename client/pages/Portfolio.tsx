import { useRevealOnScroll } from "@/hooks/useRevealOnScroll";

const ITEMS = [
  {
    title: "Royal Enfield Gonda • Instagram",
    href: "https://www.instagram.com/royalenfieldgonda",
    cover:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1600&auto=format&fit=crop",
    tag: "Instagram",
  },
  {
    title: "Royal Enfield Gonda • Facebook",
    href: "https://m.facebook.com/royalenfieldgonda/",
    cover:
      "https://images.unsplash.com/photo-1465447142348-e9952c393450?q=80&w=1600&auto=format&fit=crop",
    tag: "Facebook",
  },
  {
    title: "Pawpl Travel • Instagram",
    href: "https://www.instagram.com/pawpltravel",
    cover:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop",
    tag: "Instagram",
  },
  {
    title: "Pawpl Travel • Facebook",
    href: "https://www.facebook.com/pawpltravel/",
    cover:
      "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?q=80&w=1600&auto=format&fit=crop",
    tag: "Facebook",
  },
  {
    title: "College Compass • Instagram",
    href: "https://www.instagram.com/college.compass",
    cover:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1600&auto=format&fit=crop",
    tag: "Instagram",
  },
  {
    title: "Meta Ads Campaigns • Case Study",
    href: "#",
    cover:
      "https://images.unsplash.com/photo-1542744094-24638eff58bb?q=80&w=1600&auto=format&fit=crop",
    tag: "Case Study",
  },
] as const;

export default function Portfolio() {
  useRevealOnScroll();
  return (
    <section className="container mx-auto py-16 lg:py-24">
      <header className="text-center max-w-2xl mx-auto mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold">
          <span className="neon-text">Portfolio</span>
        </h1>
        <p className="mt-3 text-white/70">
          Campaigns and pages I’ve managed or contributed to.
        </p>
      </header>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {ITEMS.map((it) => (
          <a
            key={it.title}
            href={it.href}
            target={it.href.startsWith("http") ? "_blank" : undefined}
            rel={it.href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="reveal group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur tile-slide"
            aria-label={it.title}
          >
            <figure className="h-44 w-full overflow-hidden">
              <img
                src={it.cover}
                alt={it.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                loading="lazy"
              />
            </figure>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-3 group-hover:translate-y-0 transition-transform">
              <span className="inline-flex items-center gap-2 rounded-full bg-black/50 px-3 py-1 text-xs text-white/90">
                <span className="size-1.5 rounded-full neon-bg" aria-hidden />{" "}
                {it.tag}
              </span>
              <h3 className="mt-2 text-white font-medium">{it.title}</h3>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
