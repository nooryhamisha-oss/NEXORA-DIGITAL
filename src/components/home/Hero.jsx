import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-[#0B1F3F]"
    >
      {/* BACKGROUND IMAGE — the five-women team photo */}
      <img
        src="/team-hero2.jpg"
        alt="Nexora Digital team collaborating"
        className="absolute inset-0 h-full w-full object-cover object-[62%_center] lg:object-[center_28%]"
      />

      {/* Navy gradient on the left: text stays readable, faces stay clear */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgba(11,31,63,0.93) 0%, rgba(11,31,63,0.72) 28%, rgba(11,31,63,0.28) 50%, rgba(11,31,63,0) 68%)",
        }}
      />

      {/* Soft darkening at the bottom */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0B1F3F]/60 to-transparent" />

      {/* Mobile: extra darkening so text stays readable */}
      <div className="pointer-events-none absolute inset-0 bg-[#0B1F3F]/45 lg:hidden" />

      {/* CONTENT */}
      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 pb-16 pt-32 sm:px-10 lg:px-14 xl:px-20">
        <div className="max-w-[560px]">
          {/* Eyebrow */}
          <div className="mb-6 flex flex-wrap items-center gap-x-3 gap-y-2 text-xs font-bold uppercase tracking-[0.2em] text-white/90">
            <span>AI</span>
            <span className="text-[#F1842D]">•</span>
            <span>WEB</span>
            <span className="text-[#F1842D]">•</span>
            <span>DIGITAL MARKETING</span>
            <span className="text-[#F1842D]">•</span>
            <span>E-COMMERCE</span>
            <span className="text-[#F1842D]">•</span>
            <span>DATA</span>
          </div>

          {/* Heading */}
          <h1 className="text-[46px] font-extrabold leading-[0.98] tracking-[-0.04em] text-white sm:text-[56px] lg:text-[60px] xl:text-[68px]">
            One Team.
            <br />
            Integrated
            <br />
            Expertise.
            <br />
            <span className="text-[#F1842D]">Digital Progress.</span>
          </h1>

          {/* Description */}
          <p className="mt-7 max-w-[500px] text-base leading-7 text-white/85">
            Nexora Digital brings strategy, AI, technology, digital growth,
            commerce, and data together to help small businesses, startups, and
            nonprofits turn challenges into practical digital solutions.
          </p>

          {/* Buttons */}
          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#approach"
              className="group inline-flex items-center gap-3 rounded-full bg-[#F1842D] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-orange-500/30 transition hover:-translate-y-1 hover:bg-[#E57520]"
            >
              Explore Our Approach
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </a>

            <a
              href="#contact"
              className="group inline-flex items-center gap-3 rounded-full border border-white/40 bg-white/5 px-6 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition hover:-translate-y-1 hover:border-white hover:bg-white/15"
            >
              Start a Conversation
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
