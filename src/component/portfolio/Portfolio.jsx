import "./portfolio.scss";
import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
const items = [
  {
    id: 1,
    title: "React Commerce",
    img: "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=600",
    description:
      "The React Commerce project is an e-commerce web application built using React.js. It allows users to browse products, add items to a shopping cart, and proceed to checkout. The project features a responsive design, ensuring a seamless shopping experience across different devices. Key components include product listings, product detail pages, a shopping cart, and a checkout process. The use of React.js ensures a fast, dynamic, and interactive user interface.",
  },
  {
    id: 2,
    title: "UI/UX Design",
    img: "https://www.applify.com.sg/blog/wp-content/uploads/2023/09/UI-UX-Developer-Skills-768x432.jpg",
    description:
      "I have freelanced in UI/UX design for various industries, creating compelling website themes and main designs. My work focuses on enhancing user experience and visual appeal, ensuring intuitive navigation and engaging interfaces. I deliver modern, user-centric designs that align with clients' branding and business goals.",
  },
  {
    id: 3,
    title: "ECommerce web Application",
    img: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600",
    description:
      "The ECommerce web application is a front-end project built with React.js, utilizing third-party APIs for data handling. It features a user-friendly interface where customers can browse and search for products, view detailed product information, and manage their shopping carts. The application integrates APIs to fetch product listings, handle user authentication, and process payments, ensuring seamless transactions. Its responsive design guarantees optimal performance across various devices, providing a smooth and interactive shopping experience",
  },
  {
    id: 4,
    title: "Music App",
    img: "https://images.pexels.com/photos/5081398/pexels-photo-5081398.jpeg?auto=compress&cs=tinysrgb&w=600",
    description:
      "The Music App web application is a front-end project developed using React.js, leveraging third-party APIs for data and functionality. Users can browse and search for songs, artists, and albums, create and manage playlists, and listen to streaming music directly within the app. The application fetches music data, album art, and artist information from external APIs, providing a rich and dynamic user experience. Its responsive design ensures seamless usability across different devices, delivering an engaging and interactive platform for music enthusiasts without requiring backend integration.",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);
  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imgContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <button>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 180,
    damping: 50,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Work</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>

      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
