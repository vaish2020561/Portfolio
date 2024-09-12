
import '@fortawesome/fontawesome-free/css/all.min.css';
import { motion } from "framer-motion";

const Footer = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
  };

  return (
    <motion.footer
      className="bg-black text-white py-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeIn}
    >
      <div className="flex justify-center space-x-6">
        <motion.a
          href="https://www.instagram.com/vaishuu_ridhima/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple-400 hover:text-purple-500 transform transition duration-300 hover:scale-125"
          whileHover={{ scale: 1.2, rotate: 5 }}
        >
          <i className="fab fa-instagram text-2xl"></i>
        </motion.a>
        <motion.a
          href="https://github.com/vaish2020561"
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple-400 hover:text-purple-500 transform transition duration-300 hover:scale-125"
          whileHover={{ scale: 1.2, rotate: 5 }}
        >
          <i className="fab fa-github text-2xl"></i>
        </motion.a>
        <motion.a
          href="https://www.linkedin.com/in/vaishnavi-bharti-0196831bb/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple-400 hover:text-purple-500 transform transition duration-300 hover:scale-125"
          whileHover={{ scale: 1.2, rotate: 5 }}
        >
          <i className="fab fa-linkedin text-2xl"></i>
        </motion.a>
        <motion.a
          href="https://mail.google.com/mail/u/0/#inbox?compose=new"
          className="text-purple-400 hover:text-purple-500 transform transition duration-300 hover:scale-125"
          whileHover={{ scale: 1.2, rotate: 5 }}
        >
          <i className="fas fa-envelope text-2xl"></i>
        </motion.a>
      </div>
      <motion.p
        className="mt-4 text-center text-gray-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1.2 }}
      >
        &copy; {new Date().getFullYear()} Vaishnavi Bharti
      </motion.p>
    </motion.footer>
  );
};

export default Footer;
