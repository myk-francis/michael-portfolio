import { projects } from "../data/portfolio";
import { Element } from "react-scroll";

function Work(): JSX.Element {
  return (
    <Element name="work">
      <section>
        <div className="app-container section-space">
          <p className="eyebrow">Projects</p>
          <h3 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Recent product work
          </h3>
          <p className="mt-3 max-w-2xl text-slate-300">
            A sample of web and mobile projects focused on performance, usability, and business goals.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <article key={project.title} className="card overflow-hidden">
                <img src={project.image} alt={`${project.title} preview`} className="h-44 w-full object-cover" />
                <div className="flex flex-col gap-4 p-5">
                  <div>
                    <h4 className="text-xl font-semibold text-white">{project.title}</h4>
                    <p className="mt-2 text-sm text-slate-300">{project.description}</p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={`${project.title}-${tech}`}
                        className="rounded-full border border-white/15 px-2.5 py-1 text-xs font-medium text-slate-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex min-h-[40px] items-center rounded-full bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
                    >
                      Demo
                    </a>
                    <a
                      href={project.codeUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex min-h-[40px] items-center rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-white transition hover:border-cyan-300 hover:text-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
                    >
                      Code
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </Element>
  );
}

export default Work;
