import { useEffect, useRef, useState } from "react";
import {
  Brain,
  Code2,
  Megaphone,
  ShoppingCart,
  BarChart3,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const SERVICES = [
  {
    key: "ai",
    icon: Brain,
    // PHOTO 1 (AI & Strategy)
    image: "/ai.jpg",
    pos: "center",
    panel: "left",
    title: "AI & Strategy",
    text: "We find where AI and automation can save time and sharpen decisions, then put them to work in your daily operations.",
    items: [
      "AI opportunity review",
      "Workflow automation",
      "Internal assistants and tools",
    ],
  },
  {
    key: "web",
    icon: Code2,
    // PHOTO 2 (Web Development)
    image: "/web.jpg",
    pos: "center",
    panel: "left",
    title: "Web Development",
    text: "Websites and web platforms built around your users, your goals and the way your team works.",
    items: [
      "Responsive websites",
      "Landing pages and web apps",
      "Portals and dashboards",
    ],
  },
  {
    key: "marketing",
    icon: Megaphone,
    // PHOTO 3 (Digital Marketing)
    image: "/marketing.jpg",
    pos: "center",
    panel: "left",
    title: "Digital Marketing",
    text: "Strategy, content and campaigns that reach the right people and give them a reason to act.",
    items: [
      "Marketing strategy",
      "Content and social calendar",
      "SEO and campaign reporting",
    ],
  },
  {
    key: "ecommerce",
    icon: ShoppingCart,
    // PHOTO 4 (E-Commerce)
    image: "/ecommerce.jpg",
    pos: "center",
    panel: "left",
    title: "E-Commerce",
    text: "Online stores where products, payments and orders work smoothly.",
    items: [
      "Store setup and catalog",
      "Checkout and payments",
      "Order and inventory management",
    ],
  },
  {
    key: "data",
    icon: BarChart3,
    // PHOTO 5 (Data Analytics & BI)
    image: "/data.jpg",
    pos: "center",
    panel: "left",
    title: "Data Analytics & BI",
    text: "Your data turned into dashboards and insight that people can actually use to decide.",
    items: [
      "Data cleaning and organization",
      "Interactive dashboards",
      "Regular reports with clear findings",
    ],
  },
];

// Glass look (bg-[#0B1F3F]/45 = glass strength, backdrop-blur-xl = blur)
const glass =
  "border border-white/25 bg-[#0B1F3F]/45 text-white shadow-[0_24px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl";

function Slide({ s, i, active, setRef }) {
  const [hasImg, setHasImg] = useState(true);
  const Icon = s.icon;
  const on = active === i;
  const justify = s.panel === "right" ? "lg:justify-end" : "lg:justify-start";

  return (
    <div
      ref={setRef}
      className="relative w-full shrink-0 overflow-hidden bg-[#0B1F3F] lg:snap-center"
      aria-roledescription="slide"
      aria-label={`${i + 1} of ${SERVICES.length}`}
    >
      {/* BACKGROUND PHOTO: comes from s.image above */}
      {hasImg && (
        <img
          src={s.image}
          alt=""
          loading={i === 0 ? "eager" : "lazy"}
          draggable="false"
          onError={() => setHasImg(false)}
          style={{ objectPosition: s.pos }}
          className={`absolute inset-0 h-full w-full object-cover transition-transform duration-[1600ms] ease-out motion-reduce:transition-none ${
            on ? "scale-100" : "scale-105"
          }`}
        />
      )}

      {/* LIGHT OVERLAY on the photo (change /20 to /10 for a brighter photo, /35 for darker) */}
      <div className="pointer-events-none absolute inset-0 bg-[#0B1F3F]/20" />
      {/* TOP SHADE: makes the intro sentence readable on busy photos */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-[#0B1F3F]/75 via-[#0B1F3F]/35 to-transparent" />

      {/*
        The slide starts at the very top of the screen (behind the glass navbar)
        and is taller than the screen, so the photo has more room above and below.
        Rows: top (title + sentence) / glass card (exact middle) / empty (keeps the card centered)
      */}
      <div className="relative z-10 mx-auto grid min-h-[max(680px,calc(100svh+40px))] w-full max-w-[1240px] grid-rows-[1fr_auto_1fr] gap-5 px-5 pb-10 pt-[104px] sm:px-10 lg:px-24 lg:pt-[104px]">
        {/* TOP: title chip, then the intro sentence under it */}
        <div className="flex flex-col items-start gap-3">
          <p
            aria-hidden="true"
            className={`inline-flex h-11 shrink-0 items-center gap-3 rounded-full px-5 text-base font-extrabold ${glass}`}
          >
            <span className="h-2.5 w-2.5 rounded-full bg-[#F1842D]" />
            Our Expertise
          </p>
          {/* Mobile: only on the first slide. Desktop: on every slide. */}
          <p
            className={`max-w-[520px] ps-1 text-base font-semibold leading-snug text-white [text-shadow:0_2px_12px_rgba(0,0,0,0.7)] ${
              i === 0 ? "" : "hidden lg:block"
            }`}
          >
            You don't need all five. We bring in only the expertise your project
            requires.
          </p>
        </div>

        {/* MIDDLE: glass card */}
        <div className={`flex items-center ${justify}`}>
          <div
            className={`w-full max-w-[560px] rounded-[28px] p-6 transition-all duration-700 ease-out motion-reduce:translate-y-0 motion-reduce:opacity-100 sm:p-8 ${glass} ${
              on ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
          >
            <div className="flex items-center gap-4">
              <span className="grid h-11 w-11 place-items-center rounded-full bg-[#F1842D] text-white">
                <Icon size={21} strokeWidth={1.8} />
              </span>
              <span className="text-sm font-bold tracking-[0.18em] text-[#F1842D]">
                0{i + 1} / 0{SERVICES.length}
              </span>
            </div>

            <h3 className="mt-4 text-[32px] font-extrabold leading-[1.05] tracking-[-0.03em] sm:text-[44px]">
              {s.title}
            </h3>
            <p className="mt-3 text-base leading-7 text-white/90">{s.text}</p>

            <ul className="mt-4 grid gap-2.5 border-t border-white/20 pt-4">
              {s.items.map((x) => (
                <li
                  key={x}
                  className="flex items-center gap-3 text-[15px] font-semibold"
                >
                  <span className="h-2 w-2 shrink-0 rounded-full bg-[#F1842D]" />
                  {x}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* BOTTOM: empty, keeps the card exactly in the middle */}
        <div aria-hidden="true" />
      </div>
    </div>
  );
}

export default function Capabilities() {
  const track = useRef(null);
  const slides = useRef([]);
  const [active, setActive] = useState(0);
  const [desk, setDesk] = useState(false);

  // Desktop = horizontal slider. Mobile = normal page scroll (no scroll trap).
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const on = () => setDesk(mq.matches);
    on();
    mq.addEventListener("change", on);
    return () => mq.removeEventListener("change", on);
  }, []);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(slides.current.indexOf(e.target));
        });
      },
      { root: desk ? track.current : null, threshold: 0.45 },
    );
    slides.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, [desk]);
  const goTo = (i) => {
    const el = track.current;
    if (!el) return;
    const n = Math.max(0, Math.min(SERVICES.length - 1, i));
    const behavior = window.matchMedia("(prefers-reduced-motion: reduce)")
      .matches
      ? "auto"
      : "smooth";
    el.scrollTo({ left: n * el.clientWidth, behavior });
  };

  const onKey = (e) => {
    if (!desk) return;
    if (e.key === "ArrowRight") {
      e.preventDefault();
      goTo(active + 1);
    }
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      goTo(active - 1);
    }
  };

  return (
    <section
      id="capabilities"
      aria-labelledby="capabilities-title"
      className="relative"
      role="region"
      aria-roledescription="carousel"
      tabIndex={0}
      onKeyDown={onKey}
    >
      <h2 id="capabilities-title" className="sr-only">
        Our Expertise
      </h2>

      <div
        ref={track}
        className="flex flex-col lg:snap-x lg:snap-mandatory lg:flex-row lg:overflow-x-auto lg:scroll-smooth lg:[-ms-overflow-style:none] lg:[scrollbar-width:none] lg:[&::-webkit-scrollbar]:hidden"
      >
        {SERVICES.map((s, i) => (
          <Slide
            key={s.key}
            s={s}
            i={i}
            active={active}
            setRef={(el) => (slides.current[i] = el)}
          />
        ))}
      </div>

      {/* Arrows (desktop) */}
      <button
        type="button"
        aria-label="Previous"
        onClick={() => goTo(active - 1)}
        disabled={active === 0}
        className="absolute left-4 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-white/30 bg-[#0B1F3F]/50 text-white backdrop-blur-md transition hover:bg-[#F1842D] disabled:opacity-30 disabled:hover:bg-[#0B1F3F]/50 lg:grid"
      >
        <ChevronLeft />
      </button>
      <button
        type="button"
        aria-label="Next"
        onClick={() => goTo(active + 1)}
        disabled={active === SERVICES.length - 1}
        className="absolute right-4 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-white/30 bg-[#0B1F3F]/50 text-white backdrop-blur-md transition hover:bg-[#F1842D] disabled:opacity-30 disabled:hover:bg-[#0B1F3F]/50 lg:grid"
      >
        <ChevronRight />
      </button>
    </section>
  );
}
