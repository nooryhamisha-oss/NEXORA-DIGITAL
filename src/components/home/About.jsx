const HELP_ITEMS = [
  "Not selling online yet, or not getting results from your store?",
  "Have data but no clear insights?",
  "Unsure how AI can support your work?",
  "Need a stronger digital presence on a limited budget?",
];

const PROCESS = [
  {
    step: "01",
    title: "Understand",
    text: "We start by learning your business, your audience, and the problem you need to solve.",
  },
  {
    step: "02",
    title: "Strategize",
    text: "We identify the right opportunities and priorities, and build a plan that fits your resources.",
  },
  {
    step: "03",
    title: "Implement",
    text: "Where needed, we help put the plan into action, from websites and online stores to AI-powered workflows and marketing.",
  },
  {
    step: "04",
    title: "Measure",
    text: "We track results and refine, so progress is based on data.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="scroll-mt-[74px] bg-[#0B1F3F] py-24 text-white lg:py-32"
    >
      <div className="mx-auto max-w-[1240px] px-6 sm:px-10 lg:px-14">
        {/* ── Row 1: perspective + where we can help, side by side ── */}
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          <header>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#F1842D]">
              About Nexora Digital
            </p>

            <h2
              id="about-title"
              className="mt-5 text-[40px] font-extrabold leading-[1.05] tracking-[-0.03em] sm:text-[52px] lg:text-[56px]"
            >
              Our Perspective
            </h2>

            <p className="mt-6 max-w-[520px] text-lg leading-8 text-white/75">
              Good digital solutions begin with a clear understanding of the
              problem, the people involved, and the goals they support. That
              principle shapes every project we take on.
            </p>
          </header>

          <div>
            <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Where We Can Help
            </h3>

            <ul className="mt-6 divide-y divide-white/10 border-y border-white/10">
              {HELP_ITEMS.map((item) => (
                <li key={item} className="flex items-start gap-4 py-5">
                  <span
                    aria-hidden="true"
                    className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#F1842D]"
                  />
                  <span className="text-base leading-7 text-white/85">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── Row 2: the four steps, small equal boxes in one row ── */}
        <ol
          aria-label="Process"
          className="mt-16 grid gap-4 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4"
        >
          {PROCESS.map(({ step, title, text }) => (
            <li
              key={step}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#F1842D]/50 hover:bg-white/[0.07] motion-reduce:transition-none motion-reduce:hover:translate-y-0"
            >
              <span
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-[#F1842D] transition-transform duration-300 group-hover:scale-x-100 motion-reduce:transition-none"
              />
              <span className="text-sm font-bold tracking-[0.2em] text-[#F1842D]">
                {step}
              </span>
              <h3 className="mt-4 text-lg font-bold">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-white/65">{text}</p>
            </li>
          ))}
        </ol>

        {/* ── Closing line ── */}
        <p className="mt-16 text-center text-xs font-bold uppercase tracking-[0.2em] text-white/60 sm:text-sm">
          One Team. Integrated Expertise.{" "}
          <span className="text-[#F1842D]">Digital Progress.</span>
        </p>
      </div>
    </section>
  );
}
