import "./portfolio.scss";
import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
const items = [
  {
    id: 1,
    title: "React Commerce",
    img: "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=600",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi beatae odit praesentium adipisci, quisquam minima non enim libero? Deserunt eaque dolorem odit quod quam harum molestias perferendis voluptatibus numquam ipsam. Aliquid exercitationem quae dolores voluptas sapiente dolorem obcaecati, cum iusto aperiam eligendi nihil, labore officiis voluptatum numquam temporibus, unde error facere earum. Obcaecati, tempora. Veniam repellendus ab quis a nisi",
  },
  {
    id: 2,
    title: "UI/UX Design",
    img: "https://www.applify.com.sg/blog/wp-content/uploads/2023/09/UI-UX-Developer-Skills-768x432.jpg",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi beatae odit praesentium adipisci, quisquam minima non enim libero? Deserunt eaque dolorem odit quod quam harum molestias perferendis voluptatibus numquam ipsam. Aliquid exercitationem quae dolores voluptas sapiente dolorem obcaecati, cum iusto aperiam eligendi nihil, labore officiis voluptatum numquam temporibus, unde error facere earum. Obcaecati, tempora. Veniam repellendus ab quis a nisi",
  },
  {
    id: 3,
    title: "ECommerce web Application",
    img: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi beatae odit praesentium adipisci, quisquam minima non enim libero? Deserunt eaque dolorem odit quod quam harum molestias perferendis voluptatibus numquam ipsam. Aliquid exercitationem quae dolores voluptas sapiente dolorem obcaecati, cum iusto aperiam eligendi nihil, labore officiis voluptatum numquam temporibus, unde error facere earum. Obcaecati, tempora. Veniam repellendus ab quis a nisi",
  },
  {
    id: 4,
    title: "Music App",
    img: "https://images.pexels.com/photos/5081398/pexels-photo-5081398.jpeg?auto=compress&cs=tinysrgb&w=600",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi beatae odit praesentium adipisci, quisquam minima non enim libero? Deserunt eaque dolorem odit quod quam harum molestias perferendis voluptatibus numquam ipsam. Aliquid exercitationem quae dolores voluptas sapiente dolorem obcaecati, cum iusto aperiam eligendi nihil, labore officiis voluptatum numquam temporibus, unde error facere earum. Obcaecati, tempora. Veniam repellendus ab quis a nisi",
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
