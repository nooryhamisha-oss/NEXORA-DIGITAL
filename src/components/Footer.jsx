import { ArrowUpRight, Mail, MapPin, ArrowUp } from "lucide-react";
import { EMAIL, SOCIAL } from "../config";

const NAVIGATION = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Our Work", href: "#work" },
  { label: "Our Team", href: "#team" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const SERVICES = [
  { label: "AI & Strategy", href: "#ai-strategy" },
  { label: "Web Development", href: "#web-development" },
  { label: "Digital Marketing", href: "#digital-marketing" },
  { label: "E-Commerce", href: "#e-commerce" },
  { label: "Data Analytics & BI", href: "#data-analytics" },
];

const SOCIAL_ICONS = {
  Instagram: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      className="h-[17px] w-[17px]"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  ),

  Facebook: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-[17px] w-[17px]">
      <path d="M14.2 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.5 1.6-1.5h1.7V4c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.5-4 4.1V10H8.4v3h2.7v8h3.1Z" />
    </svg>
  ),

  LinkedIn: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-[17px] w-[17px]">
      <path d="M6.5 8.2A1.7 1.7 0 1 0 6.5 4.8a1.7 1.7 0 0 0 0 3.4ZM5 9.6h3v9.6H5V9.6Zm4.8 0h2.9v1.3h.1c.4-.8 1.4-1.7 2.9-1.7 3.1 0 3.7 2 3.7 4.7v5.3h-3v-4.7c0-1.1 0-2.5-1.5-2.5s-1.7 1.2-1.7 2.4v4.8H9.8V9.6Z" />
    </svg>
  ),
};

function SocialIcon({ label }) {
  return SOCIAL_ICONS[label] || <ArrowUpRight size={17} />;
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative overflow-hidden bg-[#0B1F3F] text-white">
      {/* TOP DIVIDER */}
      <div className="h-px w-full bg-white/15" />

      {/* MAIN FOOTER */}
      <div className="relative mx-auto max-w-[1280px] px-5 pb-8 pt-10 sm:px-8 lg:px-12">
        {/* TOP CTA */}
        <div className="mb-12 flex flex-col gap-6 border-b border-white/10 pb-10 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.28em] text-[#F1842D]">
              NEXORA DIGITAL
            </p>

            <h2 className="max-w-[620px] text-3xl font-semibold leading-tight tracking-[-0.03em] sm:text-4xl lg:text-5xl">
              Turning ideas into
              <span className="text-[#F1842D]"> digital progress.</span>
            </h2>
          </div>

          <a
            href="#contact"
            className="group inline-flex w-fit items-center gap-3 rounded-full border border-white/15 bg-white/[0.04] px-5 py-3 text-sm font-medium text-white transition-all duration-300 hover:border-[#F1842D]/60 hover:bg-[#F1842D] hover:text-[#0B1F3F]"
          >
            Start a conversation
            <ArrowUpRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </div>

        {/* CONTENT GRID */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.35fr_0.8fr_0.95fr_1.15fr] lg:gap-10">
          {/* BRAND */}
          <div>
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/[0.05]">
                <span className="text-lg font-black tracking-[-0.08em] text-[#F1842D]">
                  N
                </span>
              </div>

              <div>
                <div className="text-[17px] font-bold tracking-[0.08em]">
                  NEXORA
                </div>

                <div className="text-[9px] font-medium uppercase tracking-[0.3em] text-white/40">
                  DIGITAL
                </div>
              </div>
            </div>

            <p className="max-w-[310px] text-sm leading-7 text-white/55">
              A collaborative digital team turning real ideas, challenges, and
              opportunities into practical digital solutions.
            </p>

            {/* SOCIAL LINKS */}
            <div className="mt-7 flex items-center gap-2.5">
              {SOCIAL.filter((item) => item.url).map((item) => (
                <a
                  key={item.label}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  className="group flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.035] text-white/55 transition-all duration-300 hover:-translate-y-1 hover:border-[#F1842D]/50 hover:bg-[#F1842D] hover:text-[#0B1F3F]"
                >
                  <SocialIcon label={item.label} />
                </a>
              ))}
            </div>
          </div>

          {/* EXPLORE */}
          <div>
            <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.25em] text-white/35">
              Explore
            </p>

            <nav className="flex flex-col items-start gap-3">
              {NAVIGATION.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="group flex items-center gap-1.5 text-sm text-white/60 transition-colors duration-200 hover:text-white"
                >
                  <span>{item.label}</span>

                  <ArrowUpRight
                    size={12}
                    className="opacity-0 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                  />
                </a>
              ))}
            </nav>
          </div>

          {/* SERVICES */}
          <div>
            <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.25em] text-white/35">
              What We Do
            </p>

            <nav className="flex flex-col items-start gap-3">
              {SERVICES.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="group flex items-center gap-1.5 text-sm text-white/60 transition-colors duration-200 hover:text-white"
                >
                  <span>{item.label}</span>

                  <ArrowUpRight
                    size={12}
                    className="opacity-0 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                  />
                </a>
              ))}
            </nav>
          </div>

          {/* CONTACT */}
          <div>
            <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.25em] text-white/35">
              Get In Touch
            </p>

            <div className="space-y-4">
              {/* EMAIL */}
              <a
                href={`mailto:${EMAIL}`}
                className="group flex items-start gap-3 text-sm text-white/60 transition-colors duration-200 hover:text-white"
              >
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.035] text-[#F1842D]">
                  <Mail size={14} />
                </span>

                <span className="break-all leading-8">{EMAIL}</span>
              </a>

              {/* LOCATION / DESCRIPTION */}
              <div className="flex items-start gap-3 text-sm text-white/60">
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.035] text-[#F1842D]">
                  <MapPin size={14} />
                </span>

                <span className="leading-7">
                  Digital-first team
                  <br />
                  Serving ideas beyond borders
                </span>
              </div>

              {/* CONTACT CTA */}
              <a
                href="#contact"
                className="group mt-2 inline-flex items-center gap-2 text-sm font-semibold text-[#F1842D] transition-colors hover:text-white"
              >
                Let's talk about your idea
                <ArrowUpRight
                  size={15}
                  className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="mt-12 flex flex-col gap-5 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-white/35">
            © {currentYear} NEXORA Digital. All rights reserved.
          </p>

          <div className="flex items-center gap-5 text-xs text-white/35">
            <a href="#" className="transition-colors hover:text-white">
              Privacy
            </a>

            <span className="h-1 w-1 rounded-full bg-white/20" />

            <a href="#" className="transition-colors hover:text-white">
              Terms
            </a>

            {/* BACK TO TOP */}
            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Back to top"
              className="ml-2 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/60 transition-all duration-300 hover:-translate-y-1 hover:border-[#F1842D]/50 hover:bg-[#F1842D] hover:text-[#0B1F3F]"
            >
              <ArrowUp size={15} />
            </button>
          </div>
        </div>
      </div>

      {/* AMBIENT BACKGROUND */}
      <div className="pointer-events-none absolute -bottom-32 -right-32 h-80 w-80 rounded-full bg-[#173B66]/40 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-[#F1842D]/[0.06] blur-3xl" />
    </footer>
  );
}
