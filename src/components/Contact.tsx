import { HiOutlineMail } from "react-icons/hi";
import { Element } from "react-scroll";
import { socialLinks } from "../data/portfolio";

function Contact(): JSX.Element {
  return (
    <Element name="contact">
      <section>
        <div className="app-container section-space">
          <p className="eyebrow">Contact</p>
          <h3 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Let&apos;s build your next product
          </h3>
          <p className="mt-3 max-w-2xl text-slate-300">
            Send a message through the form or email me directly at{" "}
            <a
              href="mailto:youraveragecoder@gmail.com"
              className="font-medium text-cyan-300 underline decoration-cyan-500/60 underline-offset-4"
            >
              youraveragecoder@gmail.com
            </a>
            .
          </p>

          <div className="mt-8 grid gap-6 lg:grid-cols-5">
            <form
              method="POST"
              action="https://getform.io/f/1804ecee-1e6e-4933-8258-217633b0b357"
              className="card lg:col-span-3"
            >
              <div className="space-y-4 p-5">
                <label className="block text-sm text-slate-300">
                  Name
                  <input
                    type="text"
                    name="name"
                    required
                    className="mt-1 w-full rounded-xl border border-white/15 bg-slate-900 px-3 py-2.5 text-slate-100 outline-none transition placeholder:text-slate-500 focus:border-cyan-300 focus:ring-2 focus:ring-cyan-300/30"
                    placeholder="Your name"
                  />
                </label>
                <label className="block text-sm text-slate-300">
                  Email
                  <input
                    type="email"
                    name="email"
                    required
                    className="mt-1 w-full rounded-xl border border-white/15 bg-slate-900 px-3 py-2.5 text-slate-100 outline-none transition placeholder:text-slate-500 focus:border-cyan-300 focus:ring-2 focus:ring-cyan-300/30"
                    placeholder="you@example.com"
                  />
                </label>
                <label className="block text-sm text-slate-300">
                  Message
                  <textarea
                    name="message"
                    rows={6}
                    required
                    className="mt-1 w-full rounded-xl border border-white/15 bg-slate-900 px-3 py-2.5 text-slate-100 outline-none transition placeholder:text-slate-500 focus:border-cyan-300 focus:ring-2 focus:ring-cyan-300/30"
                    placeholder="Tell me about your project"
                  />
                </label>
                <button
                  type="submit"
                  className="inline-flex min-h-[44px] items-center justify-center rounded-full bg-cyan-400 px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
                >
                  Let&apos;s Collaborate
                </button>
              </div>
            </form>

            <div className="card p-5 lg:col-span-2">
              <h4 className="text-lg font-semibold text-white">Direct links</h4>
              <a
                href="mailto:youraveragecoder@gmail.com"
                className="mt-4 inline-flex items-center gap-2 text-slate-200 transition hover:text-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
              >
                <HiOutlineMail size={18} />
                youraveragecoder@gmail.com
              </a>
              <div className="mt-4 flex flex-wrap gap-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-[40px] items-center rounded-full border border-white/20 px-4 py-2 text-sm font-medium text-white transition hover:border-cyan-300 hover:text-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
                  >
                    {social.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Element>
  );
}

export default Contact;
