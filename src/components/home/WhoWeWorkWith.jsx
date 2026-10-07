import { HeartHandshake, Rocket, Building2 } from "lucide-react";

/*
  ============================================================
  PHOTOS: put your image files in  public/images/
  Change the file name in the "image" line of each card.
  Recommended: landscape, about 1200x750 (16:10), under 300 KB (JPG or WebP).
  "pos" controls which part of the photo stays visible:
    "center", "center top", "center bottom", "30% 40%", "left top" ...
  If a file is missing, the photo area shows a plain navy background.
  ============================================================
*/
const AUDIENCES = [
  {
    key: "ngo",
    icon: HeartHandshake,
    // PHOTO 1 (NGOs)
    image: "/ngo.jpg.jpg",
    pos: "30% 40%",
    title: "NGOs",
    text: "A clear online presence and data that shows your impact.",
    items: [
      "Donor-facing website",
      "Program tracking tools",
      "Impact dashboards",
    ],
  },
  {
    key: "startup",
    icon: Rocket,
    // PHOTO 2 (Startups)
    image: "/startup.jpg.jpg",
    pos: "center",
    title: "Startups",
    text: "A website, first customers and analytics from day one.",
    items: [
      "Launch website",
      "Marketing foundation",
      "Early metrics dashboard",
    ],
  },
  {
    key: "business",
    icon: Building2,
    // PHOTO 3 (Businesses)
    image: "/business.jpg.jpg",
    pos: "center",
    title: "Businesses",
    text: "Stronger online sales and decisions backed by data.",
    items: ["Online store", "Growth campaigns", "Performance dashboards"],
  },
];

/*
  ROW = style of each of the 3 rows (no background, only a thin line between rows).
  To give the rows a soft color box instead, use:
  "flex items-center gap-3 rounded-xl bg-[#EEF3FA] px-4 py-3 text-[15px] font-semibold text-[#0B1F3F]"
*/
const ROW =
  "flex items-center gap-3 py-1.5 text-[15px] font-semibold text-[#0B1F3F]";

function Card({ a }) {
  const Icon = a.icon;
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[28px] bg-white shadow-[0_10px_30px_rgba(11,31,63,0.10)] transition-all duration-500 ease-out hover:-translate-y-1.5 hover:shadow-[0_22px_50px_rgba(11,31,63,0.18)] motion-reduce:transition-none motion-reduce:hover:translate-y-0">
      {/* PHOTO (top): comes from a.image above (hides itself if the file is missing) */}
      <div className="relative aspect-[16/10] w-full shrink-0 overflow-hidden bg-[#0B1F3F]">
        <img
          src={a.image}
          alt=""
          loading="lazy"
          draggable="false"
          onError={(e) => (e.currentTarget.style.display = "none")}
          style={{ objectPosition: a.pos }}
          className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.04] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
        />
      </div>

      {/* TEXT (below the photo) */}
      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <div className="flex items-center gap-3">
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[#F1842D] text-white">
            <Icon size={20} strokeWidth={1.8} />
          </span>
          <h3 className="text-2xl font-extrabold tracking-[-0.02em] text-[#0B1F3F] sm:text-[28px]">
            {a.title}
          </h3>
        </div>

        <p className="mt-4 min-h-[56px] text-base leading-7 text-[#0B1F3F]/80">
          {a.text}
        </p>

        {/* 3 rows, stacked, same layout in every card */}
        <ul className="mt-auto  pt-1">
          {a.items.map((x) => (
            <li key={x} className={ROW}>
              <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-[#F1842D]" />
              {x}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default function WhoWeWorkWith() {
  return (
    <section
      id="serve"
      aria-labelledby="serve-title"
      className="bg-[#EEF3FA] px-5 py-20 sm:px-8 lg:px-10 lg:py-24"
    >
      <div className="mx-auto max-w-[1360px]">
        <header className="max-w-[640px]">
          <h2
            id="serve-title"
            className="text-[36px] font-extrabold leading-[1.05] tracking-[-0.03em] text-[#0B1F3F] sm:text-[48px] lg:text-[54px]"
          >
            Who We Work With
          </h2>
          <div className="mt-5 h-1 w-14 rounded bg-[#F1842D]" />
          <p className="mt-5 text-lg leading-8 text-[#0B1F3F]/75">
            Whatever your size or stage, we start from your goals.
          </p>
        </header>

        <div className="mt-10 grid gap-5 lg:mt-12 lg:grid-cols-3 lg:gap-6">
          {AUDIENCES.map((a) => (
            <Card key={a.key} a={a} />
          ))}
        </div>
      </div>
    </section>
  );
}
