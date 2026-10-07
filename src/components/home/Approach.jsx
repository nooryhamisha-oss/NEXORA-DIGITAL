const ORANGE = "#F1842D";
const WHITE = "#FFFFFF";
const MUTED = "#A6ADB7";
const BG = "#05080D";

const STEPS = [
  {
    number: "01",
    label: "UNDERSTAND",
    text: "Start with the real problem. We begin by understanding where you are, where you want to go, who you serve, and what is standing in the way.",
  },
  {
    number: "02",
    label: "STRATEGIZE",
    text: "Design the right path. We turn what we learn into a practical plan and identify the capabilities your project actually needs.",
  },
  {
    number: "03",
    label: "BUILD & EXECUTE",
    text: "Bring the solution to life. The right teams work together to design, build, launch, and implement the solution where each capability creates the most value.",
  },
  {
    number: "04",
    label: "MEASURE & IMPROVE",
    text: "Learn, refine, and move forward. We measure what happens, identify what is working and where gaps remain, then use those insights to guide the next improvement.",
  },
];

function Approach() {
  return (
    <section
      id="approach"
      className="relative overflow-hidden bg-[#05080D] px-6 py-24 md:px-12 md:py-28 lg:px-20"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Figtree:wght@400;500;600;700&display=swap');

        .approach-font {
          font-family: "Figtree", "Helvetica Neue", Arial, sans-serif;
        }
      `}</style>

      <div className="approach-font mx-auto max-w-7xl">
        {/* Heading */}
        <header className="max-w-3xl">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-8" style={{ backgroundColor: ORANGE }} />

            <span
              className="text-[10px] font-semibold tracking-[0.34em]"
              style={{ color: ORANGE }}
            >
              HOW WE WORK
            </span>
          </div>

          <h2
            className="
              max-w-[760px]
              text-[30px]
              font-semibold
              leading-[1.18]
              tracking-[-0.025em]
              sm:text-[35px]
              md:text-[40px]
              lg:text-[43px]
            "
            style={{ color: WHITE }}
          >
            From a clear understanding of the problem to measurable progress.
          </h2>

          <div
            className="mt-6 h-[2px] w-12"
            style={{ backgroundColor: ORANGE }}
          />
        </header>

        {/* Four Steps — unchanged structure */}
        <div className="mt-16 lg:mt-20">
          {STEPS.map((step) => (
            <article
              key={step.number}
              className="
                grid
                grid-cols-1
                gap-5
                py-7
                sm:grid-cols-[170px_1fr]
                sm:gap-8
                lg:grid-cols-[210px_minmax(0,1fr)]
                lg:gap-12
              "
            >
              <div className="flex items-center gap-3">
                <span
                  className="text-[12px] font-bold tracking-[0.08em]"
                  style={{ color: WHITE }}
                >
                  {step.number}
                </span>

                <span
                  className="text-[10px] font-bold tracking-[0.2em]"
                  style={{ color: ORANGE }}
                >
                  {step.label}
                </span>
              </div>

              <p
                className="
                  max-w-[780px]
                  text-[15px]
                  leading-[1.75]
                  md:text-[16px]
                  lg:text-[17px]
                "
                style={{ color: MUTED }}
              >
                {step.text}
              </p>
            </article>
          ))}
        </div>

        {/* OUR PRINCIPLE — only this part adjusted */}
        <section
          className="
            mt-16
            border-t
            pt-10
            md:mt-20
            md:pt-12
          "
          style={{
            borderColor: "rgba(255,255,255,0.10)",
          }}
        >
          <div
            className="
              grid
              grid-cols-1
              gap-6
              lg:grid-cols-[210px_minmax(0,1fr)]
              lg:gap-12
              lg:items-start
            "
          >
            {/* Label */}
            <div>
              <span
                className="
                  text-[10px]
                  font-bold
                  tracking-[0.3em]
                "
                style={{ color: ORANGE }}
              >
                OUR PRINCIPLE
              </span>
            </div>

            {/* Principle content */}
            <div>
              <h3
                className="
                  max-w-[850px]
                  text-[22px]
                  font-semibold
                  leading-[1.35]
                  tracking-[-0.018em]
                  md:text-[25px]
                  lg:text-[27px]
                "
                style={{ color: WHITE }}
              >
                The project determines the team — not the other way around.
              </h3>

              <p
                className="
                  mt-5
                  max-w-[780px]
                  text-[14px]
                  leading-[1.75]
                  md:text-[15px]
                "
                style={{ color: MUTED }}
              >
                We do not force every project through the same structure. The
                right capabilities come together according to the problem,
                goals, and stage of the project.
              </p>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}

export default Approach;
