
import { useState, useEffect } from "react";
export default function About() {
  const [text, setText] = useState("");
  const fullText = "Hi, I'm Vaishnavi.";
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
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        
        {/* Text Section */}
        <div
          className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center animate-fadeInUp"
        >
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            {text}
            <br className="hidden lg:inline-block" /> I love to build amazing
            apps
          </h1>
          <p className="mb-8 leading-relaxed">
            Hello! I'm a passionate Frontend developer dedicated to crafting
            seamless digital experiences. With expertise in frontend
            technologies like React, I specialize in building dynamic web
            applications that marry intuitive user interfaces with powerful.
            I thrive on turning ideas into functional, polished solutions. 
            Let's collaborate and bring your next project to life!
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg transition-transform transform hover:scale-105 duration-300 ease-in-out"
            >
              Work With Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg transition-transform transform hover:scale-105 duration-300 ease-in-out"
            >
              See My Past Work
            </a>
          </div>
        </div>
        
        {/* Image Section */}
        <div
          className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 animate-fadeInDown delay-300"
        >
          <div className="relative w-48 h-48 rounded-full overflow-hidden backdrop-filter backdrop-blur-lg bg-white/10 border border-white/20 transition-transform transform hover:scale-110 duration-500 ease-in-out">
            <img
              className="w-full h-full object-cover rounded-full mix-blend-lighten"
              alt="hero"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6rQzNeGUvuHQg1e1o8PVTD16HBp_qDl75hw&s"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-400 via-transparent to-black opacity-70"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
