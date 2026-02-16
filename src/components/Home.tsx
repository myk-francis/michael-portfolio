import { HiArrowNarrowRight } from "react-icons/hi";
import { Element, Link } from "react-scroll";

function Home(): JSX.Element {
  return (
    <Element name="home" className="pt-28 sm:pt-32">
      <section>
        <div className="app-container section-space">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
              Hi, my name is
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Michael Francis Mugendi
            </h1>
            <h2 className="mt-4 text-2xl font-medium text-slate-300 sm:text-3xl">
              Full-Stack Web and Mobile Developer
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
              I build modern digital products with React, Node.js, and React Native. I focus on clean
              architecture, responsive UI, and fast user experiences that stay maintainable over time.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="featured"
                smooth
                duration={450}
                offset={-88}
                className="inline-flex min-h-[44px] cursor-pointer items-center gap-2 rounded-full bg-cyan-400 px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
              >
                Projects
                <HiArrowNarrowRight size={18} />
              </Link>
              <Link
                to="contact"
                smooth
                duration={450}
                offset={-88}
                className="inline-flex min-h-[44px] cursor-pointer items-center rounded-full border border-white/20 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-cyan-300 hover:text-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Element>
  );
}

export default Home;
