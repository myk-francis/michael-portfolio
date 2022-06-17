import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import TypeMe, { LineBreak, Delete } from "react-typeme";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* container */}
      <div className="h-full max-w-[1000px] mx-auto px-8 flex flex-col justify-center  ">
        <p className="text-pink-600">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Michael Francis Mugendi
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I'm a{" "}
          <TypeMe
            typingSpeed={300}
            deleteSpeed={400}
            strings={[
              "Weeb Developer.",
              <Delete characters={15} />,
              "Mobile Developer.",
              <Delete characters={17} />,
              "Full Stack Developer.",
            ]}
          />
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          I’m a full-stack developer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I’m focused on
          building responsive full-stack web applications with Node and Express
          as the backend and React as the front end. I also have a experience
          building hybrid mobile applications using React Native.
        </p>
        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
            View Work
            <Link
              to="work"
              smooth={true}
              duration={500}
              className="group-hover:rotate-90 duration-300"
            >
              <HiArrowNarrowRight className="ml-3 " />
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
