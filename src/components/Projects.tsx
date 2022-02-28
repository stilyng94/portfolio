function Projects() {
  return (
    <section id="projects" className="flex flex-col items-center">
      <h2 className="text-[clamp(24px,5vw,var(32px)]">Projects</h2>

      <ul className="list-none p-0 mt-12 mx-0 grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-4 relative">
        <li className="relative cursor-pointer hover:-translate-y-1 transition-all">
          <div className="flex shadow-lg justify-between items-start flex-col relative h-full py-8 px-7 bg-[#112240] transition-all">
            <header>
              <div className="flex justify-between items-center mb-9">
                <div className="text-[#64ffda]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="project_svg"
                  >
                    <title>Folder</title>
                    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                  </svg>
                </div>
                <div className="flex items-center mr-3 text-[#a8b2d1]">
                  <a
                    aria-label="Github Link"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="/github"
                    className="z-[1] hover:text-[#64ffda]"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="project_svg"
                    >
                      <title>GitHub</title>
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                  </a>
                  <a
                    aria-label="External Link"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="/external"
                    className="z-[1] hover:text-[#64ffda]"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="project_svg"
                    >
                      <title>External Link</title>
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                  </a>
                </div>
              </div>
              <h3 className="text-base text-[#ccd6f6] mb-3">
                <a
                  className="static before:block before:absolute before:z-0 before:w-full before:h-full before:top-0 before:left-0 hover:text-[#64ffda]"
                  href="/advent"
                >
                  Advent calendar
                </a>
              </h3>
              <div className="text-[#a8b2d1] text-xs">
                <p className="last:last-of-type:m-0">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Magnam, ut ducimus est veritatis tempora quaerat in distinctio
                  doloremque dolore, necessitatibus impedit obcaecati corporis
                  cum assumenda facilis ipsa deserunt sunt alias.
                </p>
              </div>
            </header>
            <footer>
              <ul className="flex items-end flex-grow flex-wrap p-0 mt-5 list-none">
                <li className="">NextJs</li>
              </ul>
            </footer>
          </div>
        </li>
        <li className="relative cursor-pointer hover:-translate-y-1 transition-all">
          <div className="flex shadow-lg justify-between items-start flex-col relative h-full py-8 px-7 bg-[#112240] transition-all">
            <header>
              <div className="flex justify-between items-center mb-9">
                <div className="text-[#64ffda]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="project_svg"
                  >
                    <title>Folder</title>
                    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                  </svg>
                </div>
                <div className="flex items-center mr-3 text-[#a8b2d1]">
                  <a
                    aria-label="Github Link"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="/github"
                    className="z-[1] hover:text-[#64ffda]"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="project_svg"
                    >
                      <title>GitHub</title>
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                  </a>
                  <a
                    aria-label="External Link"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="/external"
                    className="z-[1] hover:text-[#64ffda]"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="project_svg"
                    >
                      <title>External Link</title>
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                  </a>
                </div>
              </div>
              <h3 className="text-base text-[#ccd6f6] mb-3">
                <a
                  className="static before:block before:absolute before:z-0 before:w-full before:h-full before:top-0 before:left-0 hover:text-[#64ffda]"
                  href="/advent"
                >
                  Advent calendar
                </a>
              </h3>
              <div className="text-[#a8b2d1] text-xs">
                <p className="last:last-of-type:m-0">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Magnam, ut ducimus est veritatis tempora quaerat in distinctio
                  doloremque dolore, necessitatibus impedit obcaecati corporis
                  cum assumenda facilis ipsa deserunt sunt alias.
                </p>
              </div>
            </header>
            <footer>
              <ul className="flex items-end flex-grow flex-wrap p-0 mt-5 list-none">
                <li className="">NextJs</li>
              </ul>
            </footer>
          </div>
        </li>
      </ul>
      <button
        className="text-[#64ffda] bg-transparent text-xs cursor-pointer transition-all py-5 px-7 mt-20 mx-auto
      border border-solid border-[#64ffda] border-radius-[4px]
      "
      >
        Show Less
      </button>
    </section>
  );
}

export default Projects;
