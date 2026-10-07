import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";

const links = [
  ["About", "/#about"],
  ["Expertise", "/#capabilities"],
  ["Team", "/#team"],
  ["FAQ", "/#faq"],
  ["Contact", "/#contact"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname, hash, key } = useLocation();

  // Handle hash navigation and smooth scrolling
  useEffect(() => {
    if (!hash) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      return;
    }

    const id = decodeURIComponent(hash.slice(1));

    const t = setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);

    return () => clearTimeout(t);
  }, [pathname, hash, key]);

  // Detect scroll position
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
    };

    onScroll();

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 border-b border-[#0B1F3F]/10 bg-[#F5F0E8] transition-all duration-300 ${
        scrolled ? "shadow-[0_6px_24px_rgba(11,31,63,0.12)]" : "shadow-none"
      }`}
    >
      {/* NAVBAR */}
      <div className="container-x flex h-[74px] items-center justify-between">
        {/* LOGO */}
        <Link
          to="/"
          onClick={() => setOpen(false)}
          className="font-extrabold tracking-[-.04em] text-[#0B1F3F] transition-colors duration-200 hover:text-[#F1842D]"
        >
          NEXORA <span className="text-[#F1842D]">DIGITAL</span>
        </Link>

        {/* DESKTOP NAVIGATION */}
        <nav aria-label="Main" className="hidden items-center gap-8 lg:flex">
          {links.map(([label, to]) => (
            <Link
              key={label}
              to={to}
              className="relative text-[13px] font-bold text-[#0B1F3F]/80 transition-colors duration-200 hover:text-[#F1842D]"
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* DESKTOP CTA */}
        <Link
          to="/#contact"
          className="hidden items-center gap-2 rounded-full bg-[#F1842D] px-5 py-2.5 text-xs font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#E57520] hover:shadow-[0_8px_20px_rgba(241,132,45,0.25)] sm:flex"
        >
          Start a Conversation
          <ArrowUpRight
            size={14}
            className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </Link>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          className="rounded-lg p-2 text-[#0B1F3F] transition-colors duration-200 hover:bg-[#0B1F3F]/5 lg:hidden"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="border-t border-[#0B1F3F]/10 bg-[#F5F0E8] px-5 py-5 lg:hidden">
          <div className="container-x grid gap-1">
            {links.map(([label, to]) => (
              <Link
                key={label}
                to={to}
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-3 font-semibold text-[#0B1F3F] transition-colors duration-200 hover:bg-white/60 hover:text-[#F1842D]"
              >
                {label}
              </Link>
            ))}

            <Link
              to="/#contact"
              onClick={() => setOpen(false)}
              className="mt-3 flex items-center justify-center gap-2 rounded-full bg-[#F1842D] px-5 py-3 text-sm font-bold text-white transition-all duration-300 hover:bg-[#E57520]"
            >
              Start a Conversation
              <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
