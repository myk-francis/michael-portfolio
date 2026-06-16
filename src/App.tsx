import { useEffect, useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import FeaturedProjects from "./components/FeaturedProjects";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";
import { FaWhatsapp } from "react-icons/fa";

function App(): JSX.Element {
  const [showWhatsappButton, setShowWhatsappButton] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = (): void => {
      const currentScrollY = window.scrollY;
      const nearTop = currentScrollY < 120;
      const scrollingUp = currentScrollY < lastScrollY;

      setShowWhatsappButton(nearTop || scrollingUp);
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <main className="overflow-x-clip">
        <Home />
        <About />
        <FeaturedProjects />
        <Skills />
        <Work />
        <Contact />
      </main>
      <footer className="border-t border-white/10 py-8">
        <div className="app-container flex flex-col items-center gap-4 text-center">
          <p className="text-sm text-slate-400">
            Copyright {new Date().getFullYear()} Michael Francis Mugendi
          </p>
        </div>
      </footer>
      <a
        href="https://wa.me/255710503304"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className={`whatsapp-float fixed bottom-5 right-5 z-50 inline-flex items-center gap-3 rounded-full border border-cyan-300/30 bg-slate-900/95 px-4 py-3 text-sm font-semibold text-white shadow-[0_18px_45px_rgba(8,145,178,0.22)] backdrop-blur-md transition duration-300 hover:scale-105 hover:border-cyan-300/60 hover:bg-slate-900 focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 ${
          showWhatsappButton
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-24 opacity-0"
        }`}
      >
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#25D366] text-slate-950 shadow-[0_0_24px_rgba(37,211,102,0.35)]">
          <FaWhatsapp className="text-2xl" aria-hidden="true" />
        </span>
        <span className="hidden sm:inline">WhatsApp Me</span>
      </a>
    </div>
  );
}

export default App;
