import About from "./components/About";
import Contact from "./components/Contact";
import FeaturedProjects from "./components/FeaturedProjects";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
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
        <div className="app-container text-center text-sm text-slate-400">
          Copyright {new Date().getFullYear()} Michael Francis Mugendi
        </div>
      </footer>
    </div>
  );
}

export default App;
