import "./app.scss";
import About from "./component/about/About";
import Contact from "./component/contact/Contact";
import Cursor from "./component/cursor/Cursor";
// import { useScroll, motion } from "framer-motion";
import Hero from "./component/hero/Hero";
import Navbar from "./component/navbar/Navbar";
import Parallax from "./component/parallax/Parallax";
import Portfolio from "./component/portfolio/Portfolio";
import Services from "./component/services/Services";
import Skills from "./component/skills/Skills";
const App = () => {
  // const { scrollYProgress } = useScroll();
  return (
    <div>
      {/* <motion.span style={{ scaleX: scrollYProgress }} /> */}
      <Cursor />
      <section id="HomePage">
        <Navbar />
        <Hero />
      </section>
      <section id="Services">
        <Parallax type="services" />
      </section>
      <section>
        <Services />
      </section>
      <section id="Portfolio">
        <Parallax type="portfolio" />
      </section>
      <Portfolio />
      <section id="Skills">
        <Skills />
      </section>
      <section id="Contact">
        <Contact />
      </section>
      <section id="About">
        <About />
      </section>
      {/* <Test /> */}
    </div>
  );
};

export default App;
