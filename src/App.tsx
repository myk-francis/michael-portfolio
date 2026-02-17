import About from "./components/About";
import Contact from "./components/Contact";
import FeaturedProjects from "./components/FeaturedProjects";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import ResumePdf from "./assets/Resume.pdf";
import Skills from "./components/Skills";
import Work from "./components/Work";

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
          <a
            href={ResumePdf}
            download="Michael-Francis-Mugendi-Resume.pdf"
            className="inline-flex min-h-[44px] items-center rounded-full border border-white/20 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-cyan-300 hover:text-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
          >
            Download Resume
          </a>
          <p className="text-sm text-slate-400">
            Copyright {new Date().getFullYear()} Michael Francis Mugendi
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
