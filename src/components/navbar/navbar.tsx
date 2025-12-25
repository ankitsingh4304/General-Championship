import "./navbar.scss";
import PopUp from "./popUp/popUp";
import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const navLinkActive = ({ isActive }: { isActive: boolean }) =>
    isActive ? "navlink-active" : "";

  const handleDownloadRulebook = () => {
    const link = document.createElement("a");
    link.href = "/assets/pdfs/GC_Rulebook.pdf";
    link.download = "GC_Rulebook.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  function NavCenter() {
    const links: { to: string; label: string }[] = [
      { to: "/", label: "Home" },
      { to: "/sports", label: "Sports" },
      { to: "/rank", label: "Overall Rank" },
      { to: "/players", label: "Best Players" },
    ];

    return (
      <div className="flex items-center gap-6 rounded-lg">
        {links.map((l) => (
          <NavLink key={l.to} to={l.to} end>
            {({ isActive }) => (
              <div className="relative inline-flex items-center">
                {/* WARM ACTIVE BACKGROUND (NO NEON, NO BLUR) */}
                {isActive && (
                  <span
                    aria-hidden
                    className="
                      absolute inset-0 -z-10 rounded-md
                      bg-gradient-to-b from-amber-400/25 to-amber-600/10
                      ring-1 ring-amber-400/40
                    "
                  />
                )}

                {/* LINK LABEL */}
                <span
                  className={
                    "russo-one-regular cursor-target rounded-md px-3 py-1 font-bold transition-colors " +
                    (isActive
                      ? "text-amber-400"
                      : "text-[#f6efe5] hover:text-amber-300")
                  }
                >
                  {l.label}
                </span>
              </div>
            )}
          </NavLink>
        ))}
      </div>
    );
  }

  return (
    <nav
      className="
        sticky top-0 z-50 flex items-center justify-between px-3 pt-2
        bg-gradient-to-b from-[#5a3a28]/95 to-[#3a2418]/90
        border-b border-white/5
      "
    >
      {/* LEFT LOGO */}
      <NavLink
        to="/"
        className="group relative flex items-center gap-3 transition hover:scale-[1.05]"
      >
        <img
          src="/assets/gclogo.png"
          alt="GC Logo"
          className="w-16 h-16 object-contain"
        />

        <div>
          <h1 className="m-0 text-amber-400 text-3xl font-[Brave81] font-bold tracking-wide">
            SHAURYA
          </h1>
          <span className="text-sm russo-one-regular text-[#d6c3a6]">
            The Sports Committee
          </span>
        </div>
      </NavLink>

      {/* CENTER NAV (DESKTOP) */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 md:block">
        <div className="pointer-events-auto">
          <NavCenter />
        </div>
      </div>

      {/* RIGHT ACTIONS */}
      <div className="flex items-center gap-3">
        <button
          onClick={handleDownloadRulebook}
          className="
            cursor-target hidden russo-one-regular rounded-md
            border border-amber-400/30
            bg-amber-400/10 px-3 py-1.5
            text-sm font-semibold text-amber-300
            hover:bg-amber-400/15
            md:inline-flex
          "
        >
          📘 Rulebook
        </button>
      </div>

      {/* MOBILE HAMBURGER */}
      <Hamburger navLinkActive={navLinkActive} />
    </nav>
  );
}

/* ---------------- MOBILE MENU ---------------- */

interface NavRightProps {
  navLinkActive: ({ isActive }: { isActive: boolean }) => string;
  className?: string;
}
const NavRight = ({
  navLinkActive,
  className: cn = "navbar-right ",
}: NavRightProps) => {
  return (
    <div className={cn}>
      <NavLink to="/" className={`${navLinkActive} russo-one-regular`}>
        Home
      </NavLink>
      <NavLink to="/sports" className={`${navLinkActive} russo-one-regular`}>
        Sports
      </NavLink>
      <NavLink to="/rank" className={`${navLinkActive} russo-one-regular`}>
        Overall Rank
      </NavLink>
      <NavLink to="/players" className={`${navLinkActive} russo-one-regular`}>
        Best Players
      </NavLink>
    </div>
  );
};

interface HamburgerProps {
  navLinkActive: ({ isActive }: { isActive: boolean }) => string;
}
const Hamburger = ({ navLinkActive }: HamburgerProps) => {
  const [hamState, setHamState] = useState(false);

  return (
    <div id="hamburger-menu">
      <button
        onClick={() => setHamState(true)}
        className="text-[#f6efe5] text-xl md:hidden"
      >
        ☰
      </button>

      <PopUp
        open={hamState}
        onClose={() => setHamState(false)}
        className="hamburger-menu-card"
      >
        <button className="close">✕</button>
        <NavRight
          navLinkActive={navLinkActive}
          className="hamburger-menu-content"
        />
      </PopUp>
    </div>
  );
};
