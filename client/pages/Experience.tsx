import { useRevealOnScroll } from "@/hooks/useRevealOnScroll";

const ROLES = [
  {
    title: "Senior Project Coordinator",
    company: "Zoopup Technologies",
    location: "On-site",
    duration: "Sep 2025 – Present",
    description:
      "Coordinating projects and connecting business professionals to the best freelancers for their needs.",
    achievements: [
      "Built and managed a vetted freelancer network across key functions",
      "Matched professionals to projects, improving time-to-hire and outcomes",
    ],
    cover:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Credit Card Sales",
    company: "Innovsource Ltd. (SBI)",
    location: "Gonda, UP",
    duration: "2018 – 2019",
    description:
      "Built ground-level sales discipline through door-to-door outreach and kiosk activations.",
    achievements: [
      "Consistently achieved weekly card issuance targets",
      "Developed persuasive scripts that improved conversions",
    ],
    cover:
      "https://images.unsplash.com/photo-1553729459-efe14ef6055d?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Data Entry",
    company: "Baba Engineering (L&T Project)",
    location: "Gonda, UP",
    duration: "2019 – 2021",
    description:
      "Learned precision and process ownership while maintaining project data.",
    achievements: [
      "Delivered 0% error weekly audits for 3 months",
      "Automated repetitive sheets with templates",
    ],
    cover:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Corporate Sales",
    company: "Tech Mahindra",
    location: "Noida",
    duration: "2020 – 2021",
    description:
      "Handled corporate clients, cold calls, and opportunity qualification to build healthy pipelines.",
    achievements: [
      "Improved call-to-meeting ratio by 22%",
      "Standardized follow-up cadences for team adoption",
    ],
    cover:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Digital Marketing & Sales",
    company: "Pawpl & Royal Enfield",
    location: "Gonda & Remote",
    duration: "2021 – 2023",
    description:
      "Executed Meta Ads, content creation in Canva, and performance reporting for stakeholders.",
    achievements: [
      "Launched high-intent campaigns with 2x improvement in CPL",
      "Managed Instagram/Facebook pages with consistent content cadence",
    ],
    cover:
      "https://images.unsplash.com/photo-1545235617-9465d2a55698?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Digital Sales",
    company: "Fuse Market",
    location: "Remote",
    duration: "2023 – Present",
    description:
      "End-to-end client handling from discovery to conversion with performance-focused media plans.",
    achievements: [
      "Delivered ROAS-positive test cycles within 30 days",
      "Built reporting dashboards for transparency",
    ],
    cover:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1600&auto=format&fit=crop",
  },
] as const;

export default function Experience() {
  useRevealOnScroll();
  return (
    <section className="container mx-auto py-16 lg:py-24">
      <header className="text-center max-w-2xl mx-auto mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold"><span className="neon-text">Experience</span></h1>
        <p className="mt-3 text-white/70">Selected roles and outcomes.</p>
      </header>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {ROLES.map((r) => (
          <article key={r.title} className="reveal group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_-15px_rgba(0,114,255,0.35)]">
            <figure className="h-40 w-full overflow-hidden">
              <img src={r.cover} alt={`${r.title} at ${r.company}`} className="w-full h-full object-cover" loading="lazy" />
            </figure>
            <div className="p-5">
              <h3 className="text-lg font-semibold text-white">{r.title} • <span className="text-white/80">{r.company}</span></h3>
              <div className="mt-1 text-xs text-white/60">{r.location} · {r.duration}</div>
              <p className="mt-3 text-sm text-white/80">{r.description}</p>
              <ul className="mt-3 space-y-1.5 text-sm text-white/80">
                {r.achievements.map((a) => (<li key={a}>• {a}</li>))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
