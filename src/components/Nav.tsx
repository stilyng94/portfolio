import Logo from "../assets/images/paullogo.png";

const NAVS = [
  { url: "#about", title: "about" },
  { url: "#experience", title: "experience" },
  { url: "#projects", title: "projects" },
  { url: "#contact", title: "contact" },
];

function Nav(props: { showAside: boolean; burgerHandler: Function }) {
  return (
    <header className="flex translate-y-[0px] fixed justify-between top-0 left-0 z-30 w-[100%] items-center h-[70px] py-0 px-6 lg:px-10 xl:p-12 bg-[#0a192fd9] shadow-lg transition-all pointer-events-auto select-auto filter-none backdrop-blur">
      <nav className="flex items-center justify-between relative z-40 w-full text-[#ccd6f6]">
        <div className="flex items-center justify-center">
          <a href="/" className="w-11 h-11">
            <img
              className="object-contain h-[100%] w-[100%]"
              src={Logo}
              alt="logo"
            />
          </a>
        </div>
        <div className="hidden lg:flex items-end justify-center">
          <div>
            <ol className="flex justify-between items-center list-none p-0 m-0">
              {NAVS.map((path, index) => (
                <li className="my-0 mx-1 relative" key={index}>
                  <a
                    className={`p-2 before:mr-1 before:text-[#64ffda] before:text-right before:content-["0${index}."]`}
                    href={path.url}
                  >
                    {path.title}
                  </a>
                </li>
              ))}
            </ol>
          </div>
          <div className="delay-300">
            <a
              href="/resume"
              className="bg-transparent border-[1px] border-solid border-[#64ffda] py-2 px-4 transition-all ml-3"
            >
              resume
            </a>
          </div>
        </div>
        <div className="block lg:hidden">
          <div>
            <button
              aria-label="Menu"
              role={"menu"}
              className="flex relative items-center justify-center z-10 -mr-4 p-4 bg-transparent transition-opacity"
              onClick={(ev) => props.burgerHandler(ev)}
            >
              <div className="inline-block relative h-6 w-7">
                <div
                  className="absolute top-[50%] right-0 w-7 h-[2px] bg-[#64ffda] transition-transform rotate-0 
                  
                  before:w-[120%] before:top-[-10px] before:opacity-100 before:transition-all before:block before:absolute before:left-auto before:right-0 before:h-[2px] before:bg-[#64ffda]
                
                after:w-[80%] after:bottom-[-10px] after:rotate-0 after:transition-all after:block after:absolute after:left-auto after:right-0 after:h-[2px] after:bg-[#64ffda]
                "
                ></div>
              </div>
            </button>
            <aside
              aria-hidden={props.showAside}
              tabIndex={1}
              className={`flex items-center justify-center fixed top-0 bottom-0 right-0 py-12 px-2 w-[min(75vw,400px)] h-screen outline-0 bg-[#112240] z-[9] ${
                props.showAside ? "translate-x-[0vw]" : "translate-x-[100vw]"
              }  transition-all`}
            >
              <nav className="flex flex-col justify-between items-center w-full text-[#ccd6f6] text-center">
                <ol className="p-0 m-0 list-none w-full">
                  <li className="relative mt-0 mx-auto mb-6 text-[clamp(14px,4vw,18px)]">
                    <a className="w-full pt-1 px-5 pb-5" href="#about"></a>
                  </li>
                </ol>
              </nav>
            </aside>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Nav;
