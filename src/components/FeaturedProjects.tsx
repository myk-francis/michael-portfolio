import { Element } from "react-scroll";

interface MaintainedProject {
  title: string;
  description: string;
  imagePath: string;
  liveUrl: string;
  credentialLabel: string;
  credentials: string;
}

const maintainedProjects: MaintainedProject[] = [
  {
    title: "Easy Referrals",
    description:
      "A healthcare referral workflow app that helps teams coordinate patient referrals with a cleaner, faster handoff process.",
    imagePath: `${process.env.PUBLIC_URL}/easy-referrals-next.png`,
    liveUrl: "https://easy-referrals-next.vercel.app/",
    credentialLabel: "Demo login",
    credentials: "email: demo-doctor@demokp.tz | password: demo"
  },
  {
    title: "Drinking Games Hub",
    description:
      "A social game hub where users can quickly discover and play different drinking games through a simple and responsive interface.",
    imagePath: `${process.env.PUBLIC_URL}/drinking-games-hub.png`,
    liveUrl: "https://drinking-games-hub.vercel.app/",
    credentialLabel: "Guest login",
    credentials: "username: guest | password: guest"
  }
];

function FeaturedProjects(): JSX.Element {
  return (
    <Element name="featured">
      <section>
        <div className="app-container section-space">
          <p className="eyebrow">Maintained Projects</p>
          <h3 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Current projects I actively maintain
          </h3>
          <p className="mt-3 max-w-2xl text-slate-300">
            These are the two primary products I am currently supporting and improving.
          </p>

          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            {maintainedProjects.map((project) => (
              <article key={project.title} className="card overflow-hidden">
                <img src={project.imagePath} alt={`${project.title} preview`} className="h-56 w-full object-cover" />
                <div className="space-y-4 p-5">
                  <h4 className="text-2xl font-semibold text-white">{project.title}</h4>
                  <p className="text-sm leading-6 text-slate-300">{project.description}</p>
                  <p className="rounded-xl border border-cyan-300/30 bg-cyan-500/10 px-3 py-2 text-sm text-cyan-100">
                    <span className="font-semibold">{project.credentialLabel}:</span> {project.credentials}
                  </p>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-[42px] items-center rounded-full bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
                  >
                    Visit Project
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </Element>
  );
}

export default FeaturedProjects;
