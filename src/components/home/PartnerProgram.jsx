import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

/*
  ============================================================
  PHOTO: put the image in  public/images/partner.jpg
  Recommended: landscape, 1920x1000, under 400 KB.
  Suggested photo: the one with two people discussing papers in sunlight.
  The glass card sits on the LEFT, so keep the subject on the RIGHT side of the photo.
  "pos" controls which part of the photo stays visible.
  ============================================================
*/
const IMAGE = "/partner.jpg.jpg";
const POS = "center ";

const glass =
  "border border-white/25 bg-[#0B1F3F]/45 text-white shadow-[0_24px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl";

export default function PartnerProgram() {
  return (
    <section
      id="partner"
      aria-labelledby="partner-title"
      className="relative flex min-h-[560px] items-center overflow-hidden bg-[#0B1F3F] px-5 py-16 sm:px-8 lg:px-10"
    >
      {/* BACKGROUND PHOTO (hides itself if the file is missing) */}
      <img
        src={IMAGE}
        alt=""
        loading="lazy"
        draggable="false"
        onError={(e) => (e.currentTarget.style.display = "none")}
        style={{ objectPosition: POS }}
        className="absolute inset-0 h-full w-full object-cover"
      />
      {/* LIGHT OVERLAY (change /20 to /10 for a brighter photo, /35 for darker) */}
      <div className="pointer-events-none absolute inset-0 bg-[#0B1F3F]/20" />

      <div className="relative z-10 mx-auto w-full max-w-[1240px]">
        <div className={`max-w-[600px] rounded-[28px] p-7 sm:p-10 ${glass}`}>
          <h2
            id="partner-title"
            className="text-[34px] font-extrabold leading-[1.05] tracking-[-0.03em] sm:text-[44px]"
          >
            Start with a pilot project
          </h2>
          <div className="mt-5 h-1 w-14 rounded bg-[#F1842D]" />
          <p className="mt-5 text-base leading-7 text-white/90 sm:text-lg sm:leading-8">
            We take on a small number of partner projects with a dedicated team
            and close attention at every step. We agree scope, timeline and
            deliverables up front, so you know exactly what to expect.
          </p>

          <ul className="mt-6 flex flex-wrap gap-2">
            {["Scope", "Timeline", "Deliverables"].map((x) => (
              <li
                key={x}
                className="rounded-full bg-white/15 px-4 py-2 text-[13px] font-bold"
              >
                {x}
              </li>
            ))}
          </ul>

          <Link
            to="/#contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#F1842D] px-7 py-3.5 text-sm font-bold text-white transition hover:bg-[#E57520]"
          >
            Propose a Project <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
