import "./about.scss";
import Animated from "./Animated";

import { motion } from "framer-motion";
import React, { useRef, useState } from "react";
const data = `I am pursuing graduation with a Bachelor’s degree in  Computer Science from Central University of Haryana. Growing up in Rewari,Haryana , I developed a keen interest in Website related technology and its applications, which led me to pursue a career in Web Development development. I am a dedicated and motivated individual with a passion for technology and innovation. I was always intrigued by how technology could transform ideas into reality, which sparked my interest in pursuing a career in software development.`;

const items = data.split(" ");

// simple function

const TypeReactHookDemo = () => {
  const el = React.useRef(null);
  const typed = React.useRef(null);

  React.useState(() => {
    const option = {
      strings: ["Frontend Developer", "UI/UX Designer"],
      typeSpeed: 50,
      backSpeed: 50,
      backDelay: 50,
      loop: true,
    };

    typed.current = new Typed(el.current, option);

    return () => {
      typed.current.destroy();
    };
  }, []);
};

// download file

// const downloadCV = () => {
//   const filePath = "../../../public/rishabh_resume.pdf";
//   const fileName = "rishabh_resume.pdf";
//   const fileType = "application/pdf";

//   fetch(filePath)
//     .then((response) => response.blob())
//     .then((blob) => {
//       const a = document.createElement("a");
//       a.download = fileName;
//       a.href = window.URL.createObjectURL(blob);
//       const clickEvt = new MouseEvent("click", {
//         view: window,
//         bubbles: true,
//         cancelable: true,
//       });
//       a.dispatchEvent(clickEvt);
//       a.remove();
//     });
// };

const About = () => {
  // pop up
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  const popupVariants = {
    hidden: { opacity: 0, y: "-100vh" },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, y: "-100vh", transition: { duration: 0.3 } },
  };
  // Pop up
  return (
    <div className="about">
      <div className="titleContainer">
        <h1>About Me!</h1>
      </div>
      <div className="wrapper">
        <div className="imgContainer">
          <motion.div
            className="aboutSvg"
            initial={{ opacity: 1 }}
            whileInView={{ opacity: 0, zIndex: -1 }}
            transition={{ delay: 2, duration: 10 }}
          >
            <svg
              width="270px"
              height="270px"
              viewBox="-1 -1 22 22"
              version="1.1"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <title>profile_round [#1342]</title>
              <desc>Created with Sketch.</desc>
              <defs></defs>
              <g
                id="Page-1"
                stroke="none"
                strokeWidth="0.7"
                fill="none"
                fillRule="evenodd"
              >
                <g
                  id="Dribbble-Light-Preview"
                  transform="translate(-140.000000, -2159.000000)"
                >
                  <g id="icons" transform="translate(56.000000, 160.000000)">
                    <motion.path
                      d="M100.562548,2016.99998 L87.4381713,2016.99998 C86.7317804,2016.99998 86.2101535,2016.30298 86.4765813,2015.66198 C87.7127655,2012.69798 90.6169306,2010.99998 93.9998492,2010.99998 C97.3837885,2010.99998 100.287954,2012.69798 101.524138,2015.66198 C101.790566,2016.30298 101.268939,2016.99998 100.562548,2016.99998 M89.9166645,2004.99998 C89.9166645,2002.79398 91.7489936,2000.99998 93.9998492,2000.99998 C96.2517256,2000.99998 98.0830339,2002.79398 98.0830339,2004.99998 C98.0830339,2007.20598 96.2517256,2008.99998 93.9998492,2008.99998 C91.7489936,2008.99998 89.9166645,2007.20598 89.9166645,2004.99998 M103.955674,2016.63598 C103.213556,2013.27698 100.892265,2010.79798 97.837022,2009.67298 C99.4560048,2008.39598 100.400241,2006.33098 100.053171,2004.06998 C99.6509769,2001.44698 97.4235996,1999.34798 94.7348224,1999.04198 C91.0232075,1998.61898 87.8750721,2001.44898 87.8750721,2004.99998 C87.8750721,2006.88998 88.7692896,2008.57398 90.1636971,2009.67298 C87.1074334,2010.79798 84.7871636,2013.27698 84.044024,2016.63598 C83.7745338,2017.85698 84.7789973,2018.99998 86.0539717,2018.99998 L101.945727,2018.99998 C103.221722,2018.99998 104.226185,2017.85698 103.955674,2016.63598"
                      id="profile_round-[#1342]"
                      stroke="orange"
                      fill="none"
                      initial={{ pathLength: 0 }}
                      //   animate={isInView && { pathLength: 1 }}
                      whileInView={{ pathLength: 1 }}
                      transition={{ duration: 4 }}
                    ></motion.path>
                  </g>
                </g>
              </g>
            </svg>
          </motion.div>
          <motion.img
            src="./rishabh1.png"
            alt=""
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 4, duration: 1 }}
          />
        </div>
        <motion.div className="textContainer">
          <h3>Hello, It's me</h3>
          <h2>Rishabh Chowkikar</h2>
          <h3>
            And I'm a <Animated />
          </h3>
          <motion.p>
            {items.map((item) => (
              <motion.span whileHover={{ color: "orange", scale: 1.1 }}>
                {item}{" "}
              </motion.span>
            ))}
          </motion.p>
          <motion.div className="buttonContainer">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              // onClick={downloadCV}
            >
              Download CV
            </motion.button>

            {/* pop-up */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(true)}
            >
              Read More About Me!
            </motion.button>

            <motion.div
              initial="hidden"
              animate={isOpen ? "visible" : "hidden"}
              exit="exit"
              variants={popupVariants}
              className="popup"
            >
              {/* Close button */}
              <button className="close-button" onClick={handleClose}>
                &times;
              </button>

              {/* Pop-up content */}
              <div className="popup-content">
                <h3>More About Me</h3>
                <p>
                  I have completed my education with distinction from Sunglow
                  International School in Rewari. In my Higher Secondary
                  Certificate <b>(Class XII)</b>, I achieved an impressive
                  aggregate of <b>91.6%</b>, demonstrating a strong grasp of
                  academic subjects and a commitment to excellence.
                  <br />
                  <br />
                  Prior to this, in my Secondary School Certificate{" "}
                  <b>(Class X)</b>, I obtained an aggregate of <b>86.6%</b>,
                  reflecting consistent academic achievement and a solid
                  foundation in core subjects.
                  <br />
                  <br /> These achievements underscore my dedication to academic
                  success and my ability to perform effectively in a rigorous
                  educational environment.
                  <br />
                  <br />I successfully completed a training program at
                  Scholiverse Educare Private Limited focusing on Node.js, where
                  I acquired new skills. During this program, I developed a
                  project using JavaScript, HTML, Node.js, Express.js, and
                  MongoDB. The project involved creating real-time communication
                  between client and server sides using AJAX requests and
                  managing data storage in a database.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      <div className="iconTop">
        <a href="#HomePage">⬆</a>
      </div>
    </div>
  );
};

export default About;
