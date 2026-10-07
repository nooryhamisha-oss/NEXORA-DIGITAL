import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUp } from "lucide-react";

/*
  ============================================================
  FAQ DATA: edit the questions and answers here.
  "short" = the short label used on mobile (the scrolling chips).
  ============================================================
*/
const FAQS = [
  {
    short: "What we do",
    q: "What does Nexora Digital do?",
    a: "We bring AI & strategy, web development, e-commerce, digital marketing and data analytics together in one team, so you work with one point of contact instead of coordinating five vendors.",
  },
  {
    short: "Who we work with",
    q: "Who do you work with?",
    a: "NGOs, startups and growing businesses. If you want to improve your digital presence, your services or the way you make decisions, we can help.",
  },
  {
    short: "All five services?",
    q: "Do we need all five services?",
    a: "No. We involve only the expertise your project needs, and nothing more.",
  },
  {
    short: "Just an idea?",
    q: "Can I come to you with just an idea?",
    a: "Yes. You can start with a problem, a goal or an early idea. We help you clarify what you need, shape a practical digital direction and turn it into a plan.",
  },
  {
    short: "Existing projects",
    q: "Can you work with what we already have?",
    a: "Yes. We begin by reviewing your current website, tools and data, then improve, redesign or extend them based on your needs.",
  },
  {
    short: "After you contact us",
    q: "What happens after I contact you?",
    a: "We start by understanding your goals and challenges. Then we recommend an approach, bring in the right specialists, and agree scope, timeline and deliverables before any work begins.",
  },
  {
    short: "Only websites?",
    q: "Do you only build websites?",
    a: "No. Websites are one part of what we do. We also build web apps and portals, online stores, AI-powered tools, marketing campaigns and data dashboards.",
  },
];

export default function FAQ() {
  const [active, setActive] = useState(0);
  const [typing, setTyping] = useState(false);
  const timer = useRef(null);
  const f = FAQS[active];

  useEffect(() => () => clearTimeout(timer.current), []);

  const pick = (i) => {
    if (i === active) return;
    clearTimeout(timer.current);
    setActive(i);
    // Skip the "typing" moment for people who prefer reduced motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setTyping(false);
      return;
    }
    setTyping(true);
    timer.current = setTimeout(() => setTyping(false), 800);
  };

  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative scroll-mt-[74px] overflow-hidden bg-[#0B1F3F] px-5 py-20 text-white sm:px-8 lg:px-10 lg:py-28"
    >
      <style>{`
        @keyframes faq-pop{from{opacity:0;transform:translateY(10px) scale(.98)}to{opacity:1;transform:none}}
        @keyframes faq-dot{0%,80%,100%{transform:translateY(0);opacity:.35}40%{transform:translateY(-5px);opacity:1}}
        @media (prefers-reduced-motion: reduce){.faq-anim{animation:none!important}}
      `}</style>

      {/* Soft orange glow in the corner (delete this line if you don't want it) */}
      <div className="pointer-events-none absolute -right-40 top-10 h-[460px] w-[460px] rounded-full bg-[#F1842D]/15 blur-[130px]" />

      <div className="relative mx-auto max-w-[1240px]">
        {/* HEADER */}
        <header className="max-w-[720px]">
          <h2
            id="faq-title"
            className="text-[38px] font-bold leading-[1.04] tracking-[-0.03em] sm:text-[52px] lg:text-[62px]"
          >
            You bring the <span className="text-[#F1842D]">question.</span>
          </h2>
          <div className="mt-5 h-1 w-14 rounded bg-[#F1842D]" />
          <p className="mt-5 text-lg leading-8 text-white/80">
            Pick a question and see how we would answer. Don't see yours? Ask it
            below.
          </p>
        </header>

        <div className="mt-10 grid gap-8 lg:mt-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          {/* QUESTIONS: list on desktop */}
          <ul className="hidden self-start border-b border-white/15 lg:block">
            {FAQS.map((x, i) => {
              const on = i === active;
              return (
                <li key={x.q} className="border-t border-white/15">
                  <button
                    type="button"
                    aria-pressed={on}
                    onClick={() => pick(i)}
                    className={`group relative flex w-full items-center justify-between gap-4 py-5 ps-5 pe-2 text-left transition ${
                      on ? "text-white" : "text-white/70 hover:text-white"
                    }`}
                  >
                    <span
                      aria-hidden="true"
                      className={`absolute inset-y-3 start-0 w-1 rounded transition ${on ? "bg-[#F1842D]" : "bg-transparent"}`}
                    />
                    <span
                      className={`text-lg leading-snug ${on ? "font-bold" : "font-medium"}`}
                    >
                      {x.q}
                    </span>
                    <ArrowRight
                      size={18}
                      className={`shrink-0 transition ${
                        on
                          ? "translate-x-0 text-[#F1842D] opacity-100"
                          : "-translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-70"
                      }`}
                    />
                  </button>
                </li>
              );
            })}
          </ul>

          {/* CHAT WINDOW (with the quick-reply chips on mobile) */}
          <div>
            <div className="-mx-5 mb-4 flex gap-2 overflow-x-auto px-5 pb-1 lg:hidden [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {FAQS.map((x, i) => (
                <button
                  key={x.q}
                  type="button"
                  aria-pressed={i === active}
                  onClick={() => pick(i)}
                  className={`shrink-0 rounded-full px-4 py-2.5 text-sm font-bold transition ${
                    i === active
                      ? "bg-[#F1842D] text-white"
                      : "bg-white/10 text-white"
                  }`}
                >
                  {x.short}
                </button>
              ))}
            </div>

            <div className="flex min-h-[460px] flex-col overflow-hidden rounded-[28px] bg-white shadow-[0_30px_80px_rgba(0,0,0,0.35)]">
              {/* window header */}
              <div className="flex items-center gap-3 border-b border-[#0B1F3F]/10 px-6 py-4">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-[#F1842D] text-sm font-bold text-white">
                  N
                </span>
                <div>
                  <p className="text-[15px] font-bold text-[#0B1F3F]">
                    Nexora Digital
                  </p>
                  <p className="text-xs text-[#0B1F3F]/60">
                    Frequently asked questions
                  </p>
                </div>
              </div>

              {/* conversation */}
              <div
                className="flex-1 space-y-5 px-5 py-7 sm:px-8"
                aria-live="polite"
              >
                {/* the visitor's question */}
                <div
                  key={`q-${active}`}
                  className="faq-anim flex justify-end"
                  style={{ animation: "faq-pop .4s ease both" }}
                >
                  <p className="max-w-[88%] rounded-[20px] rounded-br-md bg-[#F1842D] px-5 py-3 text-[15px] font-semibold leading-6 text-white sm:text-base">
                    {f.q}
                  </p>
                </div>

                {/* our answer (with the typing moment) */}
                <div className="flex items-end gap-3">
                  <span
                    aria-hidden="true"
                    className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[#0B1F3F] text-xs font-bold text-white"
                  >
                    N
                  </span>
                  {typing ? (
                    <div
                      aria-label="Typing"
                      className="flex gap-1.5 rounded-[20px] rounded-bl-md bg-[#EEF3FA] px-5 py-4"
                    >
                      {[0, 1, 2].map((d) => (
                        <span
                          key={d}
                          className="faq-anim h-2 w-2 rounded-full bg-[#0B1F3F]"
                          style={{
                            animation: `faq-dot 1s ease-in-out ${d * 0.15}s infinite`,
                          }}
                        />
                      ))}
                    </div>
                  ) : (
                    <p
                      key={`a-${active}`}
                      className="faq-anim max-w-[90%] rounded-[20px] rounded-bl-md bg-[#EEF3FA] px-5 py-4 text-[15px] leading-7 text-[#0B1F3F] sm:text-base sm:leading-8"
                      style={{ animation: "faq-pop .45s ease both" }}
                    >
                      {f.a}
                    </p>
                  )}
                </div>
              </div>

              {/* message bar = the call to action */}
              <div className="border-t border-[#0B1F3F]/10 p-4 sm:p-5">
                <Link
                  to="/#contact"
                  className="group flex items-center justify-between gap-4 rounded-full bg-[#EEF3FA] py-2 ps-6 pe-2 text-[15px] font-medium text-[#0B1F3F]/70 transition hover:bg-[#E3EAF4]"
                >
                  <span>Ask your own question…</span>
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-[#F1842D] text-white transition group-hover:scale-105">
                    <ArrowUp size={18} />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
