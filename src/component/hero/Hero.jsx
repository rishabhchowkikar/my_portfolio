import { motion } from "framer-motion";
import "./hero.scss";

// do it later
const sliderVarinats = {
  initial: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
  animate: {
    opacity: 1,
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      staggerChildren: 0.05,
    },
  },
};

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const x = [-10, -5, 10, 15, -19];
const y = [-10, -5, 10, 15, -19];

const imgVariants = {
  initial: {
    x: -30,
    scale: 0.7,
    y: -30,
    transition: {
      staggerChildren: 0.5,
    },
  },
  animate: {
    x: 30,
    y: 30,
    scale: 0.9,
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: "mirror",
      staggerChildren: 0.5,
    },
  },
};

const items = ["Forntend Developer", "UI/UX Designer"];

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>RISHABH CHOWKIKAR</motion.h2>
          <motion.h1 variants={textVariants}>
            Web Developer and UI/UX Designer
          </motion.h1>
          <motion.div variants={textVariants} className="buttons">
            <motion.button
              variants={textVariants}
              whileHover={{
                backgroundColor: "white",
                color: "black",
                scale: 1.1,
              }}
              whileTap={{
                scale: 0.9,
              }}
            >
              <a href="#Portfolio">See the latest Works</a>
            </motion.button>
            <motion.button
              variants={textVariants}
              whileHover={{
                backgroundColor: "white",
                color: "black",
                scale: 1.1,
              }}
              whileTap={{
                scale: 0.9,
              }}
            >
              <a href="#Contact">Contact Me</a>
            </motion.button>
          </motion.div>
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="/scroll.png"
            alt=""
          />
        </motion.div>
      </div>

      {/* <div className="slidingTextContainer">
        {items.map((item) => ({ item }))}
      </div> */}

      <motion.div
        className="imageContainer"
        variants={imgVariants}
        initial="initial"
        whileInView={"animate"}
      >
        <img src="/space.png" alt="" />
      </motion.div>
    </div>
  );
};

export default Hero;
