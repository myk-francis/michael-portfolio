import About from "./components/About";
import Contact from "./components/Contact";
import FeaturedProjects from "./components/FeaturedProjects";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";
import { FaWhatsapp } from "react-icons/fa";

function App(): JSX.Element {
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
        className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-3 rounded-full bg-[#25D366] px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-950/40 transition hover:scale-105 hover:bg-[#1ebe5b] focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
      >
        <FaWhatsapp className="text-2xl" aria-hidden="true" />
        <span className="hidden sm:inline">WhatsApp Me</span>
      </a>
    </div>
  );
}

export default App;
