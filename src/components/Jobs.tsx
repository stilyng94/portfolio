import { useState } from "react";

const JOB_DATA = [
  {
    role: "engineer",
    company: "sayeTech",
    startDate: "January 2020",
    url: "www.sayetech,io",
    endDate: "June 2021",
    worksDone: [
      "Write modern, performant, maintainable code for a diverse array of client and internal projects",
      "Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, Gatsby, React, Craft, WordPress, Prismic, and Netlify",
      "Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis",
    ],
  },
  {
    role: "engineer",
    company: "amalitech",
    startDate: "June 2021",
    worksDone: [
      "Write modern, performant, maintainable code for a diverse array of client and internal projects",
      "Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, Gatsby, React, Craft, WordPress, Prismic, and Netlify",
      "Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis",
    ],
    url: "www.amalitech.com",
  },
];

function Jobs() {
  const [selectedTab, setSelectedTab] = useState(0);

  const onTabClicked = (
    ev: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    ev.preventDefault();
    ev.stopPropagation();

    if (ev.currentTarget.tabIndex !== selectedTab) {
      return setSelectedTab(ev.currentTarget.tabIndex);
    }
  };
  return (
    <section
      id="experience"
      className="visible opacity-100 transition-opacity max-w-3xl"
    >
      <h2 className="numbered_heading before:content-['02.']">
        where i've worked
      </h2>
      <div className="md:min-h-[340px] flex">
        <div
          aria-label="job-tabs"
          role={"tablist"}
          className="relative z-[3] w-max p-0 m-0 list-none"
        >
          {JOB_DATA.map((job, index) => (
            <button
              key={index}
              aria-controls={`panel-${index}`}
              id={`tab-${index}`}
              aria-selected={selectedTab === index}
              tabIndex={index}
              type="button"
              role={"tab"}
              onClick={onTabClicked}
              className={`relative transition-all items-center w-full flex h-10 pt-0 pr-5 pb-1 pl-5 border-l-2 border-solid border-l-[#233554] bg-transparent ${
                selectedTab === index ? "text-[#64ffda]" : "text-[#8892b0]"
              }  text-left whitespace-nowrap hover:bg-[#112240] hover:text-[#64ffda] hover:outline-0`}
            >
              <span>{job.company}</span>
            </button>
          ))}
          <div
            className={`absolute top-0 left-0 z-10 w-[2px] h-10 bg-[#64ffda] translate-y-[calc(${selectedTab}*42px)] transition-transform`}
          ></div>
        </div>
        <div className="relative w-full ml-5">
          {JOB_DATA.map((job, index) => (
            <div
              key={index}
              id={`panel-${index}`}
              role="tabpanel"
              tabIndex={index}
              aria-labelledby={`tab-${index}`}
              aria-hidden={selectedTab !== index}
              className="w-full h-auto py-3 px-1"
              hidden={selectedTab !== index}
            >
              <h3 className="mb-1 text-sm font-medium">
                <span>{job.role}</span>
                <span className="text-[#64ffda]">
                  &nbsp;@&nbsp;
                  <a
                    href={job.url}
                    className="inline-block decoration-transparent relative transition-all text-[#64ffda]"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {job.company}
                  </a>
                </span>
              </h3>
              <p className="mb-6 text-[#a8b2d1] text-[13px]">
                {job.startDate} - {job.endDate || "Present"}
              </p>
              <div>
                <ul className="list-none p-0 m-0 text-xs">
                  {job.worksDone.map((work) => (
                    <li
                      key={index}
                      className="relative pl-7 mb-2 before:absolute before:left-0 before:content-['▹'] before:text-[#64ffda]"
                    >
                      {work}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Jobs;
