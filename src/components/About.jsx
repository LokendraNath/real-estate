import { assets } from "../assets/assets";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 200 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}

      className="flex flex-col items-center justify-center container mx-auto p-10 md:mx-20 lg:px-32 w-full overflow-hidden"
      id="About"
    >
      <h1 className="text-3xl sm:text-4xl font-bold mb-3">About Us</h1>
      <p className="text-gray-500 max-w-80 text-center mb-8 text-xl">
        We Provide your Dream Properties
      </p>
      <div className="flex flex-col md:flex-row items-center md:items-start md:gap-20">
        <img src={assets.brand_img} className="w-full sm:w-1/2 max-w-[400px]" />
        <div className="flex flex-col items-center md:items-start mt-10 text-gray-600">
          <div className="grid grid-cols-2 gap-5 md:gap-10 w-full 2xl:pr-28">
            <div>
              <p className="text-4xl font-medium text-gray-800">15+</p>
              <p className="">Years In This Industry</p>
            </div>
            <div>
              <p className="text-4xl font-medium text-gray-800">25+</p>
              <p className="">Top Rated Projects Completed</p>
            </div>
            <div>
              <p className="text-4xl font-medium text-gray-800">20+</p>
              <p className="">City Location Available</p>
            </div>
            <div>
              <p className="text-4xl font-medium text-gray-800">10+</p>
              <p className="">Ongoing Projects</p>
            </div>
          </div>
          <p className="my-8 text-lg">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem
            exercitationem quas quasi dicta unde velit praesentium? Iure magni
            illum iusto magnam omnis, provident quos maxime?
          </p>
          <button className="bg-blue-700 text-white py-2 px-4 rounded-xl">
            Learn More
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
