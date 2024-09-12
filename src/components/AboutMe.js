import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const AboutMe = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  // Typing effect for "Know more about my journey"
  const [text, setText] = useState("");
  const fullText = "Know more about my journey, education, and skills";
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < fullText.length) {
        const timeout = setTimeout(() => {
          setText((prev) => prev + fullText[currentIndex]);
          setCurrentIndex(currentIndex + 1);
        }, 100); // Speed for each character typing
        return () => clearTimeout(timeout);
      } else {
        // Reset the typing every 4 seconds after the full text is typed
        const resetTimeout = setTimeout(() => {
          setText("");
          setCurrentIndex(0);
        }, 1000); // 2 seconds before resetting
        return () => clearTimeout(resetTimeout);
      }
  }, [currentIndex]);

  return (
    <section id="about-section" className="bg-gray-900 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-white">About Me</h2>
          <p className="text-white mt-2">
            {text} {/* Typing effect here */}
          </p>
        </div>

        {/* Main Section */}
        <motion.div
          className="flex flex-col lg:flex-row items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          {/* Image Section */}
          <div className="lg:w-1/2">
  <div className="mb-6 lg:mb-0 flex flex-col space-y-6 items-center">
    <motion.img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR5954dwPYTRABdv1mdL6jtssIge0A84akb8xQOoGGsaAblnlgqXs69buptFUpPzMr3kU&usqp=CAU"
      alt="School"
      className="w-72 h-48 object-cover rounded-lg shadow-md border border-gray-300"
      whileHover={{
        scale: 1.1,
        rotate: 3, // Adds a slight rotation
        filter: "brightness(1.2) contrast(1.1)", // Enhances brightness and contrast
        boxShadow: "0px 20px 30px rgba(0, 0, 0, 0.3)", // Adds a classy shadow effect
      }}
      transition={{ type: "spring", stiffness: 200 }} // Smooth transition with a spring effect
    />
    <motion.img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeMT28ObPvR0whP1MV5pN1BRgNeqwy5Xmybg&s"
      alt="College"
      className="w-72 h-48 object-cover rounded-lg shadow-md border border-gray-300"
      whileHover={{
        scale: 1.1,
        rotate: -3, // Slight rotation in the opposite direction for variety
        filter: "brightness(1.2) contrast(1.1)", // Same brightness and contrast enhancement
        boxShadow: "0px 20px 30px rgba(0, 0, 0, 0.3)", // Classy shadow effect
      }}
      transition={{ type: "spring", stiffness: 200 }} // Same smooth spring transition
    />
  </div>
</div>


          {/* Content Section */}
          <div className="lg:w-1/2 lg:pl-12 text-white">
            <p className="text-lg">
              Hello! I'm <span className="font-bold">Vaishnavi Bharti</span>, a
              passionate Frontend Developer with 1.3 years of experience working
              with modern web technologies. I specialize in creating responsive,
              user-friendly interfaces using React and Tailwind CSS.
            </p>
            <p className="mt-4 text-lg">
              I've worked on various exciting projects like e-commerce websites,
              Chrome extensions, and more. My key expertise includes React,
              Tailwind, Node.js, and Firebase, focusing on delivering clean and
              efficient code.
            </p>
            <p className="mt-4 text-lg">
              Education-wise, I graduated from <strong>Feroze Gandhi Institute of Engineering and Technology</strong> with a degree in Computer Science, and completed my schooling at <strong>Kendriye Vidyalaya</strong>.
            </p>
            <p className="mt-4 text-lg">
              In addition to my development skills, I have a keen interest in
              animations, particularly using Framer Motion, to create
              interactive and smooth UI experiences.
            </p>

            <div className="mt-6">
              <motion.a
                href="/path-to-your-cv.pdf"
                download
                className="inline-block bg-purple-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-purple-600 transition transform hover:scale-105"
                whileHover={{ scale: 1.1 }}
              >
                Download My CV
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* Education Timeline Section */}
        <div className="mt-12">
          <h3 className="text-2xl text-white font-bold mb-8 text-center">
            My Education and Career Journey
          </h3>

          <div className="relative">
            {/* Horizontal Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-purple-500 h-full"></div>

            {/* Timeline Items */}
            <div className="space-y-10">
              {/* School */}
              <motion.div
                className="flex flex-col items-center relative"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
              >
                <div className="w-10 h-10 font-bold bg-purple-500 rounded-full flex justify-center items-center text-white">
                  Schooling
                </div>
                <p className="text-white mt-4">
                  Completed my Schooling from Kendriye Vidyalaya
                </p>
                <p className="text-white mt-4 font-bold">
                 10th Percentage - 81 %
                </p>
                <p className="text-white mt-4 font-bold">
                 12th Percentage - 70 %
                </p>
                <div className="w-1 h-10 bg-purple-500"></div>
              </motion.div>

              {/* College */}
              <motion.div
                className="flex flex-col items-center relative"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
              >
                <div className="w-10 h-10  font-bold bg-purple-500 rounded-full flex justify-center items-center text-white">
                  Graduation
                </div>
                <p className="text-white mt-4">
                  Completed B.Tech from Feroze Gandhi Institute of Engineering And Technology
                </p>
                <div className="w-10 h-10 font-bold bg-purple-500 rounded-full flex justify-center items-center text-white">
                  Specialization
                </div>
                <p className="text-white mt-4">
                  Computer Science and Engineerinf
                </p>
                <p className="text-white mt-4 font-bold">
                  Graduation - 2018 to 2022
                </p>
                <p className="text-white mt-4 font-bold">
                  Percentage - 80 %
                </p>
                <div className="w-1 h-10 bg-purple-500"></div>
              </motion.div>
              <motion.div
                className="flex flex-col items-center relative"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
              >
                <div className="w-10 h-10 font-bold bg-purple-500 rounded-full flex justify-center items-center text-white">
                  Career
                </div>
                <h2 className="text-white mt-4">GlobalLogic</h2>
                <p className="text-white mt-4">
                 From - June 2022 to September 2023
                </p>
                <div className="w-1 h-10 bg-purple-500"></div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
