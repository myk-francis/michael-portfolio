import { FaArrowDown, FaArrowLeft, FaArrowRight, FaFilePdf, FaGithub, FaLinkedin } from "react-icons/fa";
import resumePdf from "../assets/Resume.pdf";
import profilePic from "../assets/Profile-pic.jpeg";
import { achievements, experience, resumeSkills } from "../data/resume";

function Resume(): JSX.Element {
  return (
    <div className="app-container pb-16 pt-8 sm:pb-24 sm:pt-12">
      <nav aria-label="Resume navigation" className="mb-12 flex items-center justify-between gap-4">
        <a href="#home" className="resume-link inline-flex min-h-[44px] items-center gap-3 text-sm text-slate-300">
          <FaArrowLeft aria-hidden="true" /> Back to portfolio
        </a>
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Curriculum vitae</span>
      </nav>

      <header className="border-b border-white/15 pb-10 sm:pb-12">
        <p className="eyebrow">Experience & qualifications</p>
        <div className="mt-5 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="flex min-w-0 flex-col gap-6 sm:flex-row sm:items-center">
            <img
              src={profilePic}
              alt="Mike Mugendi"
              width={128}
              height={128}
              className="h-28 w-28 shrink-0 rounded-full border border-cyan-300/30 object-cover sm:h-32 sm:w-32"
              decoding="async"
            />
            <div className="min-w-0">
            <h1 tabIndex={-1} id="resume-heading" className="text-4xl font-semibold tracking-tight text-white outline-none sm:text-5xl lg:text-6xl">Mike Mugendi<span className="text-cyan-300">.</span></h1>
            <p className="mt-4 text-lg text-slate-300 sm:text-2xl">Software Developer / Engineer</p>
            </div>
          </div>
          <a href="#resume-download" className="resume-link inline-flex min-h-[44px] w-fit items-center gap-3 text-sm font-semibold text-cyan-300">
            Get the PDF <FaArrowDown aria-hidden="true" />
          </a>
        </div>
        <p className="mt-7 max-w-2xl text-base leading-8 text-slate-400">An aspiring software engineer eager to learn new technologies. Hard-working, self-motivated, and a passionate ball player.</p>
      </header>

      <div className="grid gap-12 py-10 sm:py-12 lg:grid-cols-[minmax(0,1fr)_18rem] lg:gap-16">
        <div className="min-w-0 space-y-12">
          <section aria-labelledby="experience-heading">
            <h2 id="experience-heading" className="resume-section-title">Work experience</h2>
            <div className="mt-7 space-y-10">
              {experience.map((job) => (
                <article key={job.company} className="relative border-l border-slate-700 pl-6">
                  <span aria-hidden="true" className="absolute -left-1 top-2 h-2 w-2 rounded-full bg-cyan-300" />
                  <p className="text-xs font-medium uppercase tracking-wider text-cyan-300">{job.dates}</p>
                  <h3 className="mt-3 text-xl font-semibold text-white">{job.role}</h3>
                  <p className="mt-1 text-sm text-slate-300">{job.company} <span className="text-slate-500">/ {job.location}</span></p>
                  <p className="mt-4 text-sm leading-7 text-slate-400">{job.description}</p>
                  <ul className="mt-3 list-disc space-y-3 pl-4 text-sm leading-7 text-slate-300 marker:text-slate-600">
                    {job.tasks.map((task) => <li key={task}>{task}</li>)}
                  </ul>
                  {job.contact && <p className="mt-4 text-xs text-slate-400">Contact: {job.contact}</p>}
                </article>
              ))}
            </div>
          </section>

          <section aria-labelledby="projects-heading">
            <h2 id="projects-heading" className="resume-section-title">Personal projects</h2>
            <div className="mt-6 divide-y divide-white/10">
              <article className="pb-6">
                <p className="text-xs text-slate-400">May 2017 – Present</p>
                <h3 className="mt-2 text-lg font-semibold"><a href="#home" className="resume-link inline-flex items-center gap-3">Personal portfolio <FaArrowRight aria-hidden="true" className="text-xs text-cyan-300" /></a></h3>
                <p className="mt-2 text-sm leading-7 text-slate-300">A single-page React application built with Tailwind CSS.</p>
              </article>
              <article className="pt-6">
                <p className="text-xs text-slate-400">Jan 2023 – Present</p>
                <h3 className="mt-2 text-lg font-semibold">Mobile apps</h3>
                <p className="mt-2 text-sm leading-7 text-slate-300">A collection of mobile applications built with React Native.</p>
                <a href="https://docs.google.com/document/d/e/2PACX-1vTmCtbRmxNCPcABDDezAK0RiwTi6d1svzzv60r_5E0nPIrF4qlQOIfNB209qW7eI4c8W10KBMMcdKu1/pub" target="_blank" rel="noreferrer" className="resume-link mt-3 inline-flex min-h-[44px] items-center gap-3 text-sm text-cyan-300">View project details <span className="sr-only">(opens in a new tab)</span><FaArrowRight aria-hidden="true" /></a>
              </article>
            </div>
          </section>

          <section aria-labelledby="achievements-heading">
            <h2 id="achievements-heading" className="resume-section-title">Achievements</h2>
            <div className="mt-6 space-y-6">
              {achievements.map((item) => (
                <article key={item.title}>
                  <p className="text-xs text-slate-400">{item.dates}</p>
                  <h3 className="mt-2 font-semibold text-slate-100">{item.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-300">{item.description}</p>
                </article>
              ))}
            </div>
          </section>
        </div>

        <aside aria-label="Contact, skills, and education" className="min-w-0 space-y-9 lg:border-l lg:border-white/10 lg:pl-8">
          <section aria-labelledby="details-heading">
            <h2 id="details-heading" className="resume-section-title">Contact</h2>
            <address className="mt-5 space-y-3 text-sm not-italic leading-7 text-slate-300">
              <p>Makumbusho, Dar, Tanzania</p>
              <p><a className="resume-link break-words" href="mailto:michaelmugendi1707@gmail.com">michaelmugendi1707@gmail.com</a></p>
              <p><a className="resume-link" href="tel:+255710503304">+255 710 503 304</a></p>
            </address>
            <div className="mt-4 flex flex-wrap gap-5 text-sm text-cyan-300">
              <a className="resume-link inline-flex min-h-[44px] items-center gap-2" href="https://github.com/myk-francis" target="_blank" rel="noreferrer"><FaGithub aria-hidden="true" /> GitHub<span className="sr-only"> (opens in a new tab)</span></a>
              <a className="resume-link inline-flex min-h-[44px] items-center gap-2" href="https://linkedin.com/in/michael-francis-733135149" target="_blank" rel="noreferrer"><FaLinkedin aria-hidden="true" /> LinkedIn<span className="sr-only"> (opens in a new tab)</span></a>
            </div>
          </section>
          <section aria-labelledby="education-heading">
            <h2 id="education-heading" className="resume-section-title">Education</h2>
            <p className="mt-5 text-xs text-cyan-300">Aug 2013 – Aug 2017</p>
            <h3 className="mt-3 font-semibold leading-7">Bachelor of Computer Science and Engineering</h3>
            <p className="mt-3 text-sm leading-7 text-slate-300">Acharya Institute of Technology</p>
            <p className="text-sm leading-7 text-slate-400">Bangalore, India</p>
          </section>
          <section aria-labelledby="skills-heading">
            <h2 id="skills-heading" className="resume-section-title">Technical skills</h2>
            <ul className="mt-5 flex flex-wrap gap-2">
              {resumeSkills.map((skill) => <li key={skill} className="rounded-md border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs leading-5 text-slate-300">{skill}</li>)}
            </ul>
          </section>
          <section aria-labelledby="languages-heading">
            <h2 id="languages-heading" className="resume-section-title">Languages</h2>
            <dl className="mt-5 space-y-4 text-sm">
              <div><dt className="font-medium text-slate-100">Swahili</dt><dd className="mt-1 text-slate-400">Native or bilingual proficiency</dd></div>
              <div><dt className="font-medium text-slate-100">English</dt><dd className="mt-1 text-slate-400">Full professional proficiency</dd></div>
            </dl>
          </section>
          <section aria-labelledby="interests-heading">
            <h2 id="interests-heading" className="resume-section-title">Beyond the screen</h2>
            <p className="mt-5 text-sm leading-8 text-slate-300">Basketball, football, swimming, novels, chess, poker, Monopoly, and Scrabble.</p>
          </section>
        </aside>
      </div>

      <section id="resume-download" aria-labelledby="download-heading" className="scroll-mt-8 flex flex-col justify-between gap-7 rounded-2xl border border-cyan-300/20 bg-cyan-300/5 p-6 sm:p-9 md:flex-row md:items-center">
        <div className="flex items-start gap-4">
          <FaFilePdf aria-hidden="true" className="mt-1 shrink-0 text-3xl text-cyan-300" />
          <div><h2 id="download-heading" className="text-xl font-semibold">Take a copy with you.</h2><p className="mt-2 text-sm leading-6 text-slate-400">Download my resume as a PDF to save or share.</p></div>
        </div>
        <a href={resumePdf} download="Mike-Mugendi-Resume.pdf" className="inline-flex min-h-[48px] shrink-0 items-center justify-center gap-3 rounded-full bg-cyan-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200 focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-4 focus-visible:ring-offset-slate-950"><FaArrowDown aria-hidden="true" /> Download resume <span className="text-xs font-medium">PDF</span></a>
      </section>
    </div>
  );
}

export default Resume;
