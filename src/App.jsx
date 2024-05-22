import "./App.css";
import { useEffect } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Home from "./components/Home";
import Cursor from "./components/AnimatedCursor";
import Aos from "aos";
import "aos/dist/aos.css";
import "aos/dist/aos";

function App() {
  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, [Aos]);
  return (
    <>
      <Cursor />
      <Header />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
