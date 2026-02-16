import { Element } from "react-scroll";

function About(): JSX.Element {
  return (
    <Element name="about">
      <section>
        <div className="app-container section-space">
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-4">
              <p className="eyebrow">About</p>
              <h3 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Building for web and mobile with real business focus
              </h3>
            </div>
            <div className="space-y-4 text-slate-300 lg:col-span-8">
              <p>
                I am Michael Francis, a software developer with 10+ years of freelance experience
                helping founders, teams, and businesses ship reliable products.
              </p>
              <p>
                On mobile, I have delivered 3 Expo apps that are published on both iOS and Android app
                stores. On web, I build scalable Next.js and React applications deployed on modern
                platforms including Vercel.
              </p>
              <p>
                I enjoy combining strong engineering fundamentals with thoughtful UX, so products feel
                fast, clear, and easy to use across all devices.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Element>
  );
}

export default About;
