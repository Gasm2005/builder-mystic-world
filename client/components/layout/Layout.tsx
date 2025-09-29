import { Link, NavLink, Outlet } from "react-router-dom";
import { cn } from "@/lib/utils";

/**************************************
 * Shared site layout: header + footer
 **************************************/
export default function Layout() {
  return (
    <div className="min-h-dvh flex flex-col bg-background text-foreground hero-gradient">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

function Header() {
  const linkBase =
    "text-sm md:text-[15px] text-white/70 hover:text-white transition-colors px-3 py-2 rounded-md";
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:glass border-b border-border/60">
      <div className="container mx-auto flex items-center justify-between py-3">
        <Link to="/" className="font-semibold tracking-tight">
          <span className="neon-text text-lg">Ajay Pratap Pandey</span>
        </Link>
        <nav className="hidden md:flex items-center gap-1">
          <NavLink
            to="/"
            className={({ isActive }) => cn(linkBase, isActive && "text-white")}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => cn(linkBase, isActive && "text-white")}
          >
            About
          </NavLink>
          <NavLink
            to="/skills"
            className={({ isActive }) => cn(linkBase, isActive && "text-white")}
          >
            Skills
          </NavLink>
          <NavLink
            to="/experience"
            className={({ isActive }) => cn(linkBase, isActive && "text-white")}
          >
            Experience
          </NavLink>
          <NavLink
            to="/portfolio"
            className={({ isActive }) => cn(linkBase, isActive && "text-white")}
          >
            Portfolio
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => cn(linkBase, isActive && "text-white")}
          >
            Contact
          </NavLink>
        </nav>
        <Link
          to="/contact#contact"
          className="btn-neon hidden md:inline-flex"
          aria-label="Skip to contact section"
        >
          <span className="inner">Hire Me</span>
        </Link>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/60">
      <div className="container mx-auto py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/60">
        <p>
          © {new Date().getFullYear()}{" "}
          <span className="text-white">Ajay Pratap Pandey</span>. All rights
          reserved.
        </p>
        <div className="flex items-center gap-5">
          <a
            href="mailto:ajay@example.com"
            className="hover:text-white transition-colors"
            aria-label="Email"
          >
            Email
          </a>
          <a
            href="https://www.linkedin.com/in/ajay-pratap-pandey-ba0a02204"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
            aria-label="LinkedIn"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/Gasm2005"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
            aria-label="GitHub"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
