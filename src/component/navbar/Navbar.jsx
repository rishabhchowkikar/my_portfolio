import { motion } from "framer-motion";
import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar />
      <div className="wrapper">
        {/* for logo and social icon */}
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          My-Profolio
        </motion.span>
        <motion.div className="social">
          <motion.a
            href="#"
            whileHover={{ scale: 1.5 }}
            whileTap={{ scale: 0.9 }}
          >
            <img src="/facebook.png" alt="" />
          </motion.a>
          <motion.a
            href="#"
            whileHover={{ scale: 1.5 }}
            whileTap={{ scale: 0.9 }}
          >
            <img src="/instagram.png" alt="" />
          </motion.a>
          <motion.a
            href="#"
            whileHover={{ scale: 1.5 }}
            whileTap={{ scale: 0.9 }}
          >
            <img src="/linkdin.png" alt="" />
          </motion.a>
          <motion.a
            href="#"
            whileHover={{ scale: 1.5 }}
            whileTap={{ scale: 0.9 }}
          >
            <img src="/download.png" alt="" />
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default Navbar;
