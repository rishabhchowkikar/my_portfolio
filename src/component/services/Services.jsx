import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 50,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

const Services = () => {
  // const ref = useRef();
  // const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      // variants={variants}
      initial="initial"
      whileInView="animate"
      // ref={ref}
      // animate={isInView && "animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on helping your brand grow
          <br /> and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            What we <motion.b whileHover={{ color: "orange" }}>Serves</motion.b>
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>For Your</motion.b>{" "}
            Business.
          </h1>
          <button>What We Do?</button>
        </div>
      </motion.div>

      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Website Development</h2>
          <p>
            Creating responsive and visually appealing websites using HTML, CSS,
            and JavaScript and its framework i.e, React JS (Frontend). Ensuring
            cross-browser compatibility and performance optimization.
          </p>
          <button>Go</button>
        </motion.div>

        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>UI/UX Design</h2>
          <p>
            Designing intuitive and engaging user interfaces with a focus on
            user experience. Conducting user research and testing to improve
            usability and accessibility.
          </p>
          <button>Go</button>
        </motion.div>

        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Prototyping & Wireframing</h2>
          <p>
            Developing prototypes and wireframes to visualize the layout and
            functionality of websites and applications. Utilizing tools like
            Figma for design accuracy.
          </p>
          <button>Go</button>
        </motion.div>

        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Responsive Design Implementation</h2>
          <p>
            Ensuring websites and applications are mobile-friendly and adaptable
            to different screen sizes. Using flexible grid layouts and media
            queries to maintain design integrity across devices.
          </p>
          <button>Go</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
