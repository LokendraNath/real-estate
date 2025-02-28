import { useEffect, useState } from "react";
import { assets, projectsData } from "../assets/assets";
import { motion } from "framer-motion";

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(1);

  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projectsData.length);
  };
  const prevProject = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projectsData.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const updateCardToShow = () => {
      if (window.innerWidth >= 1024) {
        setCardsToShow(3);
      } else if (window.innerWidth >= 768) {
        setCardsToShow(2);
      } else {
        setCardsToShow(1);
      }
    };
    updateCardToShow();

    window.addEventListener("resize", updateCardToShow);

    return () => window.removeEventListener("resize", updateCardToShow);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, x: -200 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="container mx-auto py-10 px-6 md:px-20 lg:px-32 w-full overflow-hidden"
      id="Projects"
    >
      <h1 className="text-3xl sm:text-4xl font-bold mb-3 text-center">
        Projects
      </h1>
      <p className="text-gray-500 max-w-96 mb-8 text-lg text-center mx-auto">
        Explore Our Premium Real Estate Projects
      </p>

      {/* slider buttons */}

      <div className="flex justify-between items-center mb-8">
        <button
          className="bg-gray-300 h-9 w-9 rounded-full mr-2 p-3"
          aria-label="Previous Project"
          onClick={prevProject}
        >
          <img src={assets.left_arrow} />
        </button>
        <button
          onClick={nextProject}
          className="bg-gray-300 h-9 w-9 rounded-full p-3"
          aria-label="Next Project"
        >
          <img src={assets.right_arrow} />
        </button>
      </div>

      {/* Project Slider Container */}
      <div className="">
        <div
          className="flex gap-7 transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${(currentIndex * 100) / cardsToShow}%)`,
          }}
        >
          {projectsData.map((project, index) => {
            return (
              <div
                key={index}
                className="group relative shrink-0 w-full sm:w-1/4 cursor-pointer overflow-hidden"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105 rounded-lg"
                />

                {/* Black Gradient Effect (Visible Only on Hover) */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black/90 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>

                {/* Text Section */}
                <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 text-center transition-all duration-500 translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                  <h2 className="text-[25px] sm:text-[15px] md:text-[25px] font-bold text-white md:mb-2 whitespace-nowrap">
                    {project.title}
                  </h2>
                  <p className="text-white text-lg">{project.price}</p>
                  <p className="text-white">{project.location}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
