import React from "react";

function Intro() {
  return (
    <section
      id="intro"
      className="flex justify-center items-start flex-col min-h-screen"
    >
      <div className="delay-100">
        <h1 className="text-[#64ffda] mb-7 ml-1 font-normal text-[clamp(14px,5vw,16px)]">
          Hi, my name is
        </h1>
      </div>
      <div className="delay-200">
        <h2 className="capitalize mt-0 font-semibold text-[clamp(40px,8vw,80px)] text-[#ccd6f6]">
          paul osei kofi
        </h2>
      </div>
      <div className="delay-300 mt-3">
        <h3 className="font-semibold mt-2 text-[clamp(40px,8vw,80px)] text-[#8892b0]">
          Programming is a passion
        </h3>
      </div>
      <div className="delay-400">
        <p className="mt-5 mx-0 mb-0 max-w-prose">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis
          rerum voluptatem beatae velit a deleniti vel ut sunt soluta.
          Aspernatur dolorem, animi rem nihil laudantium laboriosam a facere
          officia? Asperiores!
        </p>
      </div>
    </section>
  );
}

export default Intro;
