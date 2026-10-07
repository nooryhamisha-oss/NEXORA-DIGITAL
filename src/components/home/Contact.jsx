import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Brain,
  Building2,
  Check,
  Code2,
  HeartHandshake,
  Mail,
  Megaphone,
  Rocket,
  ShoppingCart,
  Sparkles,
} from "lucide-react";
import { EMAIL, SOCIAL } from "../../config";

/* ============================================================
   NEXORA CONTACT
   Concept: "Assemble the right team for your project."
   Colors: section = mid navy (#14305E), left panel = dark navy,
   form panel = soft light blue (#E6EEF8), inputs/buttons = white.
   ============================================================ */

const NEEDS = [
  {
    label: "AI & Strategy",
    short: "AI",
    icon: Brain,
    description: "Strategy, AI solutions & smarter direction",
  },
  {
    label: "Web Development",
    short: "WEB",
    icon: Code2,
    description: "Websites, apps, portals & digital systems",
  },
  {
    label: "Digital Marketing",
    short: "MKT",
    icon: Megaphone,
    description: "Campaigns, content & digital growth",
  },
  {
    label: "E-Commerce",
    short: "SHOP",
    icon: ShoppingCart,
    description: "Online stores & digital commerce",
  },
  {
    label: "Data Analytics & BI",
    short: "DATA",
    icon: BarChart3,
    description: "Dashboards, insights & better decisions",
  },
];

const WHO = [
  { label: "NGO / Nonprofit", icon: HeartHandshake },
  { label: "Startup", icon: Rocket },
  { label: "Small Business", icon: Building2 },
];

const STEPS = ["Your needs", "About you", "Project details"];

const TRUST = [
  [
    "01",
    "Tell us the challenge",
    "Start with an idea, problem or goal, no polished brief required.",
  ],
  [
    "02",
    "We bring the right expertise",
    "Only the specialists your project actually needs.",
  ],
  [
    "03",
    "We agree before we build",
    "Scope, timeline and deliverables are clear before work begins.",
  ],
];

/* ============================================================
   BRAND ICONS
   ============================================================ */

const InstagramIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
  </svg>
);

const FacebookIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const LinkedinIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" />
  </svg>
);

const BRAND = {
  Instagram: {
    Icon: InstagramIcon,
    bg: "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)",
  },
  Facebook: { Icon: FacebookIcon, bg: "#1877F2" },
  LinkedIn: { Icon: LinkedinIcon, bg: "#0A66C2" },
};

/* ============================================================
   SHARED STYLES
   ============================================================ */

const chip = (active) =>
  `group inline-flex items-center gap-2.5 rounded-2xl border px-4 py-3.5 text-sm font-bold transition-all duration-300 ${
    active
      ? "border-[#F1842D] bg-[#F1842D] text-white shadow-[0_10px_30px_rgba(241,132,45,0.22)]"
      : "border-[#0B1F3F]/10 bg-white text-[#0B1F3F] hover:-translate-y-0.5 hover:border-[#F1842D]/40 hover:shadow-[0_8px_25px_rgba(11,31,63,0.08)]"
  }`;

const field =
  "mt-2 w-full rounded-2xl border border-transparent bg-white px-4 py-3.5 text-base font-medium text-[#0B1F3F] outline-none transition placeholder:text-[#0B1F3F]/35 focus:border-[#F1842D]/50 focus:ring-4 focus:ring-[#F1842D]/15";

/* ============================================================
   COMPONENT
   ============================================================ */

export default function Contact() {
  const [step, setStep] = useState(0);
  const [needs, setNeeds] = useState([]);
  const [notSure, setNotSure] = useState(false);
  const [who, setWho] = useState("");
  const [org, setOrg] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [sent, setSent] = useState(false);

  const toggleNeed = (label) => {
    setNotSure(false);
    setNeeds((current) =>
      current.includes(label)
        ? current.filter((item) => item !== label)
        : [...current, label],
    );
  };

  const toggleNotSure = () => {
    setNotSure((current) => !current);
    setNeeds([]);
  };

  const canContinue = () => {
    if (step === 0) return needs.length > 0 || notSure;
    if (step === 1) return who !== "";
    return name.trim() !== "" && email.trim() !== "" && msg.trim() !== "";
  };

  const nextStep = () => {
    if (!canContinue()) return;
    setStep((current) => Math.min(current + 1, 2));
  };

  const previousStep = () => setStep((current) => Math.max(current - 1, 0));

  const submit = (e) => {
    e.preventDefault();

    const body =
      `Name: ${name}\n` +
      `Email: ${email}\n` +
      `Organization: ${org || "-"}\n` +
      `Organization type: ${who || "-"}\n` +
      `Needs: ${notSure ? "Not sure yet" : needs.length ? needs.join(", ") : "-"}\n\n` +
      `${msg}`;

    window.location.href =
      `mailto:${EMAIL}` +
      `?subject=${encodeURIComponent("Nexora Digital inquiry")}` +
      `&body=${encodeURIComponent(body)}`;

    setSent(true);
  };

  const reset = () => {
    setStep(0);
    setNeeds([]);
    setNotSure(false);
    setWho("");
    setOrg("");
    setName("");
    setEmail("");
    setMsg("");
    setSent(false);
  };

  const selectedCount = NEEDS.filter((item) =>
    needs.includes(item.label),
  ).length;

  const summary = notSure
    ? "We'll help you figure out what your project needs."
    : selectedCount > 0
      ? `${selectedCount} ${selectedCount === 1 ? "specialist" : "specialists"} ready to collaborate.`
      : "Choose the expertise your project needs.";

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="scroll-mt-[74px] bg-[#14305E] px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-28"
    >
      <style>{`
        @keyframes contact-in {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media (prefers-reduced-motion: reduce) {
          .contact-anim { animation: none !important; }
        }
      `}</style>

      <div className="mx-auto max-w-[1240px]">
        {/* TOP INTRO */}
        <div className="mb-10 max-w-[760px] lg:mb-14">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-10 bg-[#F1842D]" />
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#F1842D]">
              Let's work together
            </span>
          </div>

          <h2
            id="contact-title"
            className="text-[38px] font-bold leading-[1.02] tracking-[-0.04em] text-white sm:text-[52px] lg:text-[64px]"
          >
            Build the right team
            <br />
            <span className="text-[#F1842D]">for your idea.</span>
          </h2>

          <p className="mt-5 max-w-[650px] text-base leading-7 text-white/75 sm:text-lg">
            Tell us what you're working on. Choose the expertise you need, and
            we'll bring the right NEXORA specialists together around your
            project.
          </p>
        </div>

        {/* MAIN WORKSPACE (light blue instead of white) */}
        <div className="overflow-hidden rounded-[32px] bg-[#E6EEF8] shadow-[0_30px_90px_rgba(0,0,0,0.35)] lg:grid lg:grid-cols-[0.9fr_1.1fr]">
          {/* LEFT: TEAM ASSEMBLY */}
          <div className="relative overflow-hidden bg-[#0B1F3F] p-7 text-white sm:p-10 lg:p-12">
            <div className="pointer-events-none absolute -left-28 -top-28 h-[360px] w-[360px] rounded-full bg-[#F1842D]/15 blur-[100px]" />
            <div className="pointer-events-none absolute -bottom-40 -right-40 h-[420px] w-[420px] rounded-full border border-white/5" />

            <div className="relative flex min-h-[600px] flex-col">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-white/55">
                  <Sparkles size={14} className="text-[#F1842D]" />
                  NEXORA collaboration
                </div>

                <h3 className="mt-4 max-w-[440px] text-[30px] font-bold leading-[1.08] tracking-[-0.03em] sm:text-[40px]">
                  Your project.
                  <br />
                  <span className="text-[#F1842D]">The right people.</span>
                </h3>

                <p className="mt-4 max-w-[430px] text-[15px] leading-7 text-white/70">
                  Select what your project needs. The team assembles as you
                  choose.
                </p>
              </div>

              {/* TEAM VISUAL */}
              <div className="relative mt-12 flex min-h-[250px] items-center justify-center">
                <div className="absolute h-[210px] w-[210px] rounded-full border border-white/10" />
                <div className="absolute h-[145px] w-[145px] rounded-full border border-white/10" />

                <div className="relative z-10 grid h-[88px] w-[88px] place-items-center rounded-full border border-white/20 bg-white/10 shadow-[0_0_50px_rgba(241,132,45,0.14)] backdrop-blur-sm">
                  <div className="text-center">
                    <div className="text-[24px] font-black tracking-tight text-[#F1842D]">
                      N
                    </div>
                    <div className="text-[9px] font-bold uppercase tracking-[0.16em] text-white/65">
                      NEXORA
                    </div>
                  </div>
                </div>

                {NEEDS.map(({ label, short, icon: Icon }, index) => {
                  const active = needs.includes(label);
                  const positions = [
                    "left-1/2 top-0 -translate-x-1/2",
                    "right-1 top-1/2 -translate-y-1/2",
                    "right-10 bottom-0",
                    "left-10 bottom-0",
                    "left-1 top-1/2 -translate-y-1/2",
                  ];

                  return (
                    <div
                      key={label}
                      className={`absolute ${positions[index]} transition-all duration-500`}
                    >
                      <div
                        title={label}
                        className={`relative grid h-[58px] w-[58px] place-items-center rounded-full border transition-all duration-500 sm:h-[64px] sm:w-[64px] ${
                          active
                            ? "scale-110 border-[#F1842D] bg-[#F1842D] text-white shadow-[0_0_32px_rgba(241,132,45,0.55)]"
                            : "border-white/15 bg-white/5 text-white/35"
                        }`}
                      >
                        <Icon size={21} strokeWidth={1.8} />

                        {active && (
                          <span className="absolute -right-1 -top-1 grid h-5 w-5 place-items-center rounded-full bg-white text-[#F1842D] shadow">
                            <Check size={12} strokeWidth={3} />
                          </span>
                        )}
                      </div>

                      <span
                        className={`absolute left-1/2 mt-2 -translate-x-1/2 whitespace-nowrap text-[9px] font-bold uppercase tracking-[0.08em] transition ${
                          active ? "text-white/80" : "text-white/35"
                        }`}
                      >
                        {short}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* STATUS */}
              <div className="mt-5 border-t border-white/10 pt-5">
                <div className="flex items-end justify-between gap-5">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.14em] text-white/50">
                      Team status
                    </p>
                    <p
                      key={summary}
                      className="contact-anim mt-2 text-base font-bold leading-6 text-white"
                      style={{ animation: "contact-in .35s ease both" }}
                    >
                      {summary}
                    </p>
                  </div>

                  <div className="shrink-0 text-right">
                    <div className="text-3xl font-black tracking-tight text-[#F1842D]">
                      {notSure ? "?" : selectedCount}
                    </div>
                    <div className="text-[9px] font-bold uppercase tracking-[0.12em] text-white/45">
                      {notSure
                        ? "to decide"
                        : selectedCount === 1
                          ? "specialist"
                          : "specialists"}
                    </div>
                  </div>
                </div>
              </div>

              {/* FOOTER: email + social icons */}
              <div className="mt-auto flex flex-wrap items-center justify-between gap-5 border-t border-white/10 pt-6">
                <div>
                  <p className="text-xs font-bold text-white/75">
                    Coordinated by Project Management
                  </p>
                  <p className="mt-1 text-xs text-white/50">
                    One project. One coordinated team.
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href={`mailto:${EMAIL}`}
                    aria-label={`Email ${EMAIL}`}
                    title={EMAIL}
                    className="grid h-10 w-10 place-items-center rounded-full bg-[#F1842D] text-white transition hover:scale-110"
                  >
                    <Mail size={18} />
                  </a>

                  {SOCIAL.filter((s) => s.url && BRAND[s.label]).map((s) => {
                    const { Icon, bg } = BRAND[s.label];
                    return (
                      <a
                        key={s.label}
                        href={s.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={s.label}
                        title={s.label}
                        style={{ background: bg }}
                        className="grid h-10 w-10 place-items-center rounded-full text-white transition hover:scale-110"
                      >
                        <Icon className="h-[17px] w-[17px]" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: FORM */}
          <div className="p-7 sm:p-10 lg:p-12">
            {sent ? (
              <div
                className="contact-anim flex min-h-[600px] flex-col justify-center"
                style={{ animation: "contact-in .5s ease both" }}
              >
                <span className="grid h-16 w-16 place-items-center rounded-full bg-[#F1842D] text-white shadow-[0_15px_35px_rgba(241,132,45,0.25)]">
                  <Check size={29} strokeWidth={2.5} />
                </span>

                <p className="mt-8 text-xs font-bold uppercase tracking-[0.16em] text-[#F1842D]">
                  Message prepared
                </p>

                <h3 className="mt-3 max-w-[520px] text-[32px] font-bold leading-[1.05] tracking-[-0.03em] text-[#0B1F3F] sm:text-[44px]">
                  Your email app
                  <br />
                  <span className="text-[#F1842D]">should be opening.</span>
                </h3>

                <p className="mt-5 max-w-[500px] text-base leading-7 text-[#0B1F3F]/75">
                  Press send there and your project details will come to us. If
                  nothing opened, you can email us directly at{" "}
                  <a
                    href={`mailto:${EMAIL}`}
                    className="break-all font-bold text-[#F1842D] hover:underline"
                  >
                    {EMAIL}
                  </a>
                  .
                </p>

                <button
                  type="button"
                  onClick={reset}
                  className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-[#0B1F3F] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#14305E]"
                >
                  Start another inquiry
                  <ArrowRight size={16} />
                </button>
              </div>
            ) : (
              <form onSubmit={submit} className="flex min-h-[600px] flex-col">
                {/* PROGRESS */}
                <ol
                  className="flex items-center"
                  aria-label="Contact form progress"
                >
                  {STEPS.map((label, index) => {
                    const done = index < step;
                    const active = index === step;

                    return (
                      <li key={label} className="flex flex-1 items-center">
                        <button
                          type="button"
                          disabled={index > step}
                          onClick={() => setStep(index)}
                          aria-current={active ? "step" : undefined}
                          className="group flex items-center gap-2 disabled:cursor-default"
                        >
                          <span
                            className={`grid h-9 w-9 shrink-0 place-items-center rounded-full text-xs font-bold transition ${
                              active
                                ? "bg-[#F1842D] text-white shadow-[0_8px_20px_rgba(241,132,45,0.22)]"
                                : done
                                  ? "bg-[#0B1F3F] text-white"
                                  : "bg-white text-[#0B1F3F]/45"
                            }`}
                          >
                            {done ? <Check size={15} /> : index + 1}
                          </span>

                          <span
                            className={`hidden text-xs font-bold sm:inline ${
                              active ? "text-[#0B1F3F]" : "text-[#0B1F3F]/55"
                            }`}
                          >
                            {label}
                          </span>
                        </button>

                        {index < STEPS.length - 1 && (
                          <span
                            className={`mx-2 h-px flex-1 ${index < step ? "bg-[#0B1F3F]" : "bg-[#0B1F3F]/15"}`}
                          />
                        )}
                      </li>
                    );
                  })}
                </ol>

                {/* STEP CONTENT */}
                <div
                  key={step}
                  className="contact-anim mt-12 flex-1"
                  style={{ animation: "contact-in .4s ease both" }}
                >
                  {step === 0 && (
                    <fieldset>
                      <legend className="max-w-[560px] text-[29px] font-bold leading-[1.08] tracking-[-0.03em] text-[#0B1F3F] sm:text-[36px]">
                        What should we bring
                        <br />
                        <span className="text-[#F1842D]">to the table?</span>
                      </legend>

                      <p className="mt-3 max-w-[540px] text-[15px] leading-6 text-[#0B1F3F]/70">
                        Choose one or more areas. Not sure yet? That's
                        completely fine.
                      </p>

                      <div className="mt-7 grid gap-3 sm:grid-cols-2">
                        {NEEDS.map(({ label, icon: Icon, description }) => {
                          const active = needs.includes(label);

                          return (
                            <button
                              key={label}
                              type="button"
                              aria-pressed={active}
                              onClick={() => toggleNeed(label)}
                              className={`${chip(active)} min-h-[82px] justify-start text-left`}
                            >
                              <span
                                className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl transition ${
                                  active
                                    ? "bg-white/15"
                                    : "bg-[#EEF3FA] text-[#0B1F3F]"
                                }`}
                              >
                                <Icon size={19} strokeWidth={1.8} />
                              </span>

                              <span className="min-w-0">
                                <span className="block">{label}</span>
                                <span
                                  className={`mt-0.5 block text-[11px] font-medium leading-4 ${
                                    active
                                      ? "text-white/75"
                                      : "text-[#0B1F3F]/55"
                                  }`}
                                >
                                  {description}
                                </span>
                              </span>
                            </button>
                          );
                        })}
                      </div>

                      <button
                        type="button"
                        aria-pressed={notSure}
                        onClick={toggleNotSure}
                        className={`mt-3 flex w-full items-center gap-3 rounded-2xl border px-4 py-3.5 text-left text-sm font-bold transition ${
                          notSure
                            ? "border-[#F1842D] bg-[#FFF5EC] text-[#0B1F3F]"
                            : "border-dashed border-[#0B1F3F]/25 text-[#0B1F3F]/70 hover:border-[#F1842D]/60 hover:bg-white"
                        }`}
                      >
                        <span
                          className={`grid h-8 w-8 place-items-center rounded-full ${
                            notSure ? "bg-[#F1842D] text-white" : "bg-white"
                          }`}
                        >
                          ?
                        </span>
                        I'm not sure yet, help me figure it out
                      </button>
                    </fieldset>
                  )}

                  {step === 1 && (
                    <fieldset>
                      <legend className="max-w-[560px] text-[29px] font-bold leading-[1.08] tracking-[-0.03em] text-[#0B1F3F] sm:text-[36px]">
                        Tell us a little
                        <br />
                        <span className="text-[#F1842D]">about yourself.</span>
                      </legend>

                      <p className="mt-3 max-w-[520px] text-[15px] leading-6 text-[#0B1F3F]/70">
                        This helps us understand the context behind your
                        project.
                      </p>

                      <div className="mt-8">
                        <p className="text-sm font-bold text-[#0B1F3F]">
                          I represent a…
                        </p>

                        <div className="mt-3 flex flex-wrap gap-3">
                          {WHO.map(({ label, icon: Icon }) => {
                            const active = who === label;

                            return (
                              <button
                                key={label}
                                type="button"
                                aria-pressed={active}
                                onClick={() =>
                                  setWho(who === label ? "" : label)
                                }
                                className={chip(active)}
                              >
                                <Icon size={17} strokeWidth={1.9} />
                                {label}
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      <label className="mt-7 block text-sm font-bold text-[#0B1F3F]">
                        Organization name
                        <span className="ml-1 font-medium text-[#0B1F3F]/50">
                          optional
                        </span>
                        <input
                          value={org}
                          onChange={(e) => setOrg(e.target.value)}
                          autoComplete="organization"
                          placeholder="Your organization or project name"
                          className={field}
                        />
                      </label>

                      <div className="mt-7 rounded-2xl bg-white px-5 py-4">
                        <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#0B1F3F]/50">
                          Selected expertise
                        </p>
                        <p className="mt-2 text-sm font-bold leading-6 text-[#0B1F3F]">
                          {notSure
                            ? "We'll help you decide."
                            : needs.length
                              ? needs.join(" · ")
                              : "No preference selected."}
                        </p>
                      </div>
                    </fieldset>
                  )}

                  {step === 2 && (
                    <fieldset>
                      <legend className="max-w-[560px] text-[29px] font-bold leading-[1.08] tracking-[-0.03em] text-[#0B1F3F] sm:text-[36px]">
                        Now tell us about
                        <br />
                        <span className="text-[#F1842D]">the project.</span>
                      </legend>

                      <p className="mt-3 max-w-[520px] text-[15px] leading-6 text-[#0B1F3F]/70">
                        A few details are enough. You don't need a finished
                        brief.
                      </p>

                      <div className="mt-8 grid gap-5 sm:grid-cols-2">
                        <label className="text-sm font-bold text-[#0B1F3F]">
                          Your name
                          <input
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            autoComplete="name"
                            placeholder="Your full name"
                            className={field}
                          />
                        </label>

                        <label className="text-sm font-bold text-[#0B1F3F]">
                          Email
                          <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            type="email"
                            autoComplete="email"
                            placeholder="you@example.com"
                            className={field}
                          />
                        </label>

                        <label className="text-sm font-bold text-[#0B1F3F] sm:col-span-2">
                          What are you building or trying to solve?
                          <textarea
                            value={msg}
                            onChange={(e) => setMsg(e.target.value)}
                            required
                            rows={6}
                            placeholder="Tell us about the idea, challenge, goal, or project..."
                            className={`${field} resize-none`}
                          />
                        </label>
                      </div>
                    </fieldset>
                  )}
                </div>

                {/* NAVIGATION */}
                <div className="mt-10 flex items-center justify-between gap-4 border-t border-[#0B1F3F]/15 pt-6">
                  {step > 0 ? (
                    <button
                      type="button"
                      onClick={previousStep}
                      className="inline-flex items-center gap-2 rounded-full px-2 py-3 text-sm font-bold text-[#0B1F3F] transition hover:text-[#F1842D]"
                    >
                      <ArrowLeft size={16} />
                      Back
                    </button>
                  ) : (
                    <div />
                  )}

                  {step < 2 ? (
                    <button
                      type="button"
                      onClick={nextStep}
                      disabled={!canContinue()}
                      className={`inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold transition ${
                        canContinue()
                          ? "bg-[#0B1F3F] text-white shadow-[0_10px_25px_rgba(11,31,63,0.18)] hover:-translate-y-0.5 hover:bg-[#14305E]"
                          : "cursor-not-allowed bg-[#0B1F3F]/10 text-[#0B1F3F]/35"
                      }`}
                    >
                      Continue
                      <ArrowRight size={16} />
                    </button>
                  ) : (
                    <button
                      type="submit"
                      disabled={!canContinue()}
                      className={`inline-flex items-center gap-2 rounded-full px-8 py-4 text-sm font-bold transition ${
                        canContinue()
                          ? "bg-[#F1842D] text-white shadow-[0_12px_30px_rgba(241,132,45,0.28)] hover:-translate-y-0.5 hover:bg-[#E57520]"
                          : "cursor-not-allowed bg-[#0B1F3F]/10 text-[#0B1F3F]/35"
                      }`}
                    >
                      Send inquiry
                      <ArrowUpRight size={17} />
                    </button>
                  )}
                </div>
              </form>
            )}
          </div>
        </div>

        {/* BOTTOM TRUST STRIP: no white boxes, just a line and text on the section color */}
        <ol className="mt-12 grid gap-8 border-t border-white/15 pt-8 sm:grid-cols-3 sm:gap-10">
          {TRUST.map(([number, title, description]) => (
            <li key={number}>
              <span className="text-xs font-black tracking-[0.12em] text-[#F1842D]">
                {number}
              </span>
              <h4 className="mt-3 text-base font-bold text-white">{title}</h4>
              <p className="mt-1.5 text-[14px] leading-6 text-white/70">
                {description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
