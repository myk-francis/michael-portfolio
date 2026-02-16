import { useMemo, useState } from "react";
import { FaBars, FaGithub, FaLinkedin, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import { navItems } from "../data/portfolio";

function Navbar(): JSX.Element {
  const [mobileOpen, setMobileOpen] = useState(false);

  const sharedLinkProps = useMemo(
    () => ({
      smooth: true,
      duration: 450,
      offset: -88
    }),
    []
  );

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-slate-950/90 backdrop-blur">
      <div className="app-container flex h-[72px] items-center justify-between gap-4">
        <Link
          to="home"
          {...sharedLinkProps}
          className="cursor-pointer text-lg font-semibold tracking-tight text-slate-100"
        >
          Michael Portfolio
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.id}
              to={item.id}
              {...sharedLinkProps}
              className="rounded-full px-4 py-2 text-sm text-slate-300 transition hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="https://github.com/myk-francis"
            target="_blank"
            rel="noreferrer"
            className="rounded-full p-2 text-slate-300 transition hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
            aria-label="GitHub profile"
          >
            <FaGithub size={18} />
          </a>
          <a
            href="https://linkedin.com/in/michael-francis-733135149"
            target="_blank"
            rel="noreferrer"
            className="rounded-full p-2 text-slate-300 transition hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
            aria-label="LinkedIn profile"
          >
            <FaLinkedin size={18} />
          </a>
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          className="rounded-md p-2 text-slate-100 transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 md:hidden"
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>
      </div>

      {mobileOpen ? (
        <nav id="mobile-menu" className="border-t border-white/10 bg-slate-950 md:hidden">
          <div className="app-container flex flex-col py-4">
            {navItems.map((item) => (
              <Link
                key={item.id}
                to={item.id}
                {...sharedLinkProps}
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-3 py-3 text-base text-slate-200 transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      ) : null}
    </header>
  );
}

export default Navbar;
