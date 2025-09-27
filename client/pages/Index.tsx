import { Link } from "react-router-dom";
import Particles from "@/components/Particles";
import { Typewriter } from "@/components/Typewriter";
import { useRevealOnScroll } from "@/hooks/useRevealOnScroll";

export default function Index() {
  useRevealOnScroll();
  return (
    <section aria-label="Hero" className="relative min-h-[calc(100dvh-64px)] flex items-center">
      {/* Background mesh gradient */}
      <div className="absolute inset-0 -z-10 mesh-bg" aria-hidden />

      {/* Particles overlay */}
      <Particles density={45} />

      <div className="container relative mx-auto py-20 grid md:grid-cols-12 gap-8 items-center">
        <div className="md:col-span-7">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight">
            <span className="neon-text">Ajay Pratap Pandey</span>
          </h1>

          <p className="mt-5 text-white/80 text-lg max-w-xl">
            From the streets of Gonda to Meta Ads – this is how I built myself.
          </p>

          <p className="mt-6 text-white/70 text-base">
            <Typewriter
              items={["Digital Marketer", "Sales Expert", "Meta Ads Specialist"]}
            />
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link to="/about" className="btn-neon" aria-label="Explore my journey">
              <span className="inner">Explore My Journey</span>
            </Link>
            <Link
              to="/contact"
              className="rounded-full border border-white/15 px-6 py-3 text-sm text-white/80 hover:text-white hover:border-white/30 transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>

        {/* Highlight card */}
        <div className="md:col-span-5">
          <div className="relative rounded-2xl p-6 border border-white/10 bg-white/5 backdrop-blur reveal">
            <div className="absolute -inset-px rounded-2xl neon-ring" aria-hidden />
            <h2 className="text-xl font-semibold">
              <span className="neon-text">Meta Ads. Sales. Growth.</span>
            </h2>
            <p className="mt-3 text-sm text-white/70">
              Performance-focused marketer with hands-on experience across offline & online sales,
              lead generation, and paid social campaigns.
            </p>
            <ul className="mt-4 space-y-2 text-white/80 text-sm">
              <li>• Campaign strategy & audience targeting</li>
              <li>• Creative testing and analytics</li>
              <li>• Client communication and reporting</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
