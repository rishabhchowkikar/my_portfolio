import "./about.scss";
import Animated from "./Animated";
import { motion } from "framer-motion";
import React, { useRef, useState } from "react";
const data = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex vitae
 distinctio debitis accusamus? Odio sed, cum totam nemo nulla nisi, 
porro aut, sit doloribus nostrum minima quisquam earum pariatur 
impedit! Laborum nisi veritatis ex sint minima rerum obcaecati 
reprehenderit exercitationem repellat numquam architecto molestiae 
blanditiis, quod cumque enim culpa dolor repellendus earum a 
adipisci. Voluptate aut ipsum dolorem reprehenderit accusamus.`;

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

const About = () => {
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
          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            Download CV
          </motion.button>
        </motion.div>
      </div>

      <div className="iconTop">
        <a href="#HomePage">⬆</a>
      </div>
    </div>
  );
};

export default About;
