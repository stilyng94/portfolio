import { useEffect, useState } from "react";
import Container from "./components/Container";
import Footer from "./components/Footer";
import Nav from "./components/Nav";

function App() {
  // Set title of page
  useEffect(() => {
    document.title = `${document.title}|Home`;
  }, []);

  const [showAside, setShowAside] = useState(false);
  const burgerHandler = (ev: any) => {
    ev.preventDefault();
    setShowAside(!showAside);
  };

  const handler = (ev: any) => {
    ev.stopPropagation();
    if (showAside) {
      setShowAside(false);
    }
  };

  return (
    <div className="App">
      <Nav burgerHandler={burgerHandler} showAside={showAside} />
      <div
        onClick={handler}
        className={`${showAside && "blur-sm brightness-75 transition-all "}`}
      >
        <Container />
        <Footer />
      </div>
    </div>
  );
}

export default App;
