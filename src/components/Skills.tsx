import { skills } from "../data/portfolio";
import { Element } from "react-scroll";

function Skills(): JSX.Element {
  return (
    <Element name="skills">
      <section>
        <div className="app-container section-space">
          <p className="eyebrow">Skills</p>
          <h3 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Current tools and technologies
          </h3>
          <p className="mt-3 max-w-2xl text-slate-300">
            I use this stack to ship responsive front-end interfaces, stable APIs, and production-ready
            mobile applications.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="card flex min-h-[116px] flex-col items-center justify-center gap-3 p-4 text-center"
              >
                {"icon" in skill ? (
                  <img src={skill.icon} alt={`${skill.name} icon`} className="h-10 w-10 object-contain" />
                ) : (
                  <skill.iconComponent
                    className={`h-10 w-10 ${skill.iconColorClass ?? "text-slate-100"}`}
                    aria-hidden="true"
                  />
                )}
                <p className="text-sm font-medium text-slate-100">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Element>
  );
}

export default Skills;
