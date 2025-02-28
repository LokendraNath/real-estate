import { assets, testimonialsData } from "../assets/assets";
import { motion } from "framer-motion";

const Testimonials = () => {
  return (
    <motion.div
    initial={{ opacity: 0, x: 200 }}
    transition={{ duration: 1 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}

      className="container mx-auto py-10 mb-10 lg:px-32 w-full overflow-hidden"
      id="Testimonials"
    >
      <h1 className="text-3xl sm:text-4xl font-bold mb-3 text-center">
        Testimonials
      </h1>
      <p className="text-gray-500 max-w-96 mb-8 text-lg text-center mx-auto">
        Hear what our satisfied clients say about us!
      </p>

      <div className="flex flex-wrap justify-center gap-7 mt-15">
        {testimonialsData.map((testi, index) => (
          <div
            key={index}
            className="max-w-[320px] shadow-[0px_5px_13px_-3px_#111827] px-5 py-10 text-center rounded-2xl transition-transform duration-300 hover:scale-103"
          >
            <img
              className="h-20 w-20 rounded-full mx-auto mb-5 shadow-[0px_5px_10px_-2px_#111827]"
              src={testi.image}
              alt={testi.alt}
            />
            <h2 className="text-2xl">{testi.name}</h2>
            <p className="text-sm text-gray-700 mb-4">{testi.title}</p>
            <div className="flex justify-center gap-2 text-red-500 mb-4">
              {Array.from({ length: testi.rating }, (item, index) => (
                <img key={index} src={assets.star_icon} />
              ))}
            </div>
            <p className="text-gray-600">{testi.text}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Testimonials;
