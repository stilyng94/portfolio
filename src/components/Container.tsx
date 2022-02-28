import AboutMe from "./AboutMe";
import Intro from "./Intro";
import Jobs from "./Jobs";
import Projects from "./Projects";

function Container() {
  return (
    <main className="py-0 px-6 md:px-12 lg:px-24 xl:px-36">
      <Intro />
      <AboutMe />
      <Jobs />
      <Projects />
    </main>
  );
}

export default Container;

// my-0 mx-auto min-h-screen container py-0 px-24
