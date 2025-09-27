export default function Contact() {
  return (
    <section id="contact" className="container mx-auto py-24">
      <header className="text-center max-w-2xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold">
          <span className="neon-text">Contact</span>
        </h1>
        <p className="mt-3 text-white/70">
          A contact form with Name, Email, Message and submit will be built next. For now, reach out via email or LinkedIn.
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <a href="mailto:ajay@example.com" className="btn-neon"><span className="inner">Email</span></a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/15 px-6 py-3 text-sm text-white/80 hover:text-white hover:border-white/30 transition-colors">LinkedIn</a>
        </div>
      </header>
    </section>
  );
}
