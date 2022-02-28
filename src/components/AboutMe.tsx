import React from "react";
import MugShot from "../assets/images/MicrosoftTeams-image (2).jpg";

function AboutMe() {
  return (
    <section id="about" className="visible opacity-100 transition-opacity">
      <h2 className="numbered_heading before:content-['01.']">about me</h2>

      <div className="grid grid-cols-[3fr,2fr] gap-12">
        {/* text */}
        <div>
          <div>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto
              perferendis id pariatur repudiandae tempore reprehenderit maiores,
              dolor qui enim atque adipisci tenetur cumque? Iusto eligendi
              accusantium, quia molestias odio blanditiis!.
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi
              officiis necessitatibus, similique, tenetur blanditiis, ex eum
              quasi nesciunt exercitationem nihil eveniet! Architecto officia
              non consectetur repudiandae sapiente, veritatis enim doloremque.
            </p>
            <p>Technologies i have been working on recently:</p>
          </div>

          <ul className="grid grid-cols-[repeat(2,minmax(140px,200px))] gap-y-0 gap-x-3 p-0 overflow-hidden list-none mt-5">
            <li className="relative mb-[10px] pl-5 before:absolute before:left-0 before:text-green-500 before:content-['▹']">
              JavaScript (ES6+)
            </li>
            <li className="relative mb-[10px] pl-5 before:absolute before:left-0 before:text-green-500 before:content-['▹']">
              JavaScript (ES6+)
            </li>
            <li className="relative mb-[10px] pl-5 before:absolute before:left-0 before:text-green-500 before:content-['▹']">
              JavaScript (ES6+)
            </li>
            <li className="relative mb-[10px] pl-5 before:absolute before:left-0 before:text-green-500 before:content-['▹']">
              JavaScript (ES6+)
            </li>
            <li className="relative mb-[10px] pl-5 before:absolute before:left-0 before:text-green-500 before:content-['▹']">
              JavaScript (ES6+)
            </li>
            <li className="relative mb-[10px] pl-5 before:absolute before:left-0 before:text-green-500 before:content-['▹']">
              JavaScript (ES6+)
            </li>
          </ul>
        </div>

        {/* Image */}
        <div className="max-w-[300px] relative">
          <div
            className="shadow-xl block relative w-[100%] bg-[#64ffda] transit
          transition-all hover:bg-transparent hover:outline-0 hover:shadow-xl"
          >
            <div className="relative mix-blend-multiply grayscale-[100%] contrast-[1] transition-all w-full max-w-full align-middle overflow-hidden inline-block hover:filter-none hover:mix-blend-normal">
              <div className="block max-w-lg">
                <img
                  className="static block w-full object-cover top-0 right-0 m-0 p-0 left-0 h-full"
                  src={MugShot}
                  alt="Mugshot"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
