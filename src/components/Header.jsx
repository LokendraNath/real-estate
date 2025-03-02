import Navbar from "./Navbar";
import { motion } from "motion/react";

const Header = () => {
  return (
    <div
      className="relative min-h-screen mb-4 bg-cover flex items-center w-full overflow-hidden"
      style={{ backgroundImage: "url('/src/assets/hero-img.jpg')" }}
      id="Header"
    >
      <Navbar />
      
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 1.5 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{once:true}}

        className="container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white"
      >
        <h2 className="text-5xl font-bold sm:text-6xl md:text-[82px] inline-block max-w-4xl pt-20">
          Explore Your Dream Home !!
        </h2>
        <div className="space-x-6 mt-15">
          <a href="#Projects" className="border text-xl py-2 px-6 rounded-md">
            Projects
          </a>
          <a
            href="#Contact"
            className="bg-blue-600 py-[10px] px-6 rounded-md text-xl"
          >
            Contact Us
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Header;
