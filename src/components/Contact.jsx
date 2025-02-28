import React from "react";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "ca66f410-5601-4ac4-acfd-2482996dc816");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      toast.success("Form Submit Successfully");
    } else {
      console.log("Error", data);
      toast.error(data.message);
      setResult("");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -200 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="text-center p-6 py-10 lg:px-32 w-full overflow-hidden relative"
      id="Contact"
    >
      <h1 className="text-3xl sm:text-4xl font-bold mb-3 text-center">
        Contact Us
      </h1>
      <p className="text-gray-500 max-w-96 mb-8 text-lg text-center mx-auto">
        Let's Connect – Reach Out to Us Today!
      </p>

      <form
        onSubmit={onSubmit}
        className="max-w-2xl mx-auto text-gray-600 pt-8"
      >
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 text-left">
            Your Name
            <input
              type="text"
              placeholder="Enter Your Name"
              required
              name="Name"
              className="w-full border border-gray-400 rounded-lg py-3 px-4 mt-2"
            />
          </div>
          <div className="w-full md:w-1/2 text-left md:pl-10 mt-3 md:mt-0">
            Your Email
            <input
              type="email"
              placeholder="Enter Your Name"
              required
              name="Email"
              className="w-full border border-gray-400 rounded-lg py-3 px-4 mt-2"
            />
          </div>
        </div>
        <div className="mt-4 text-left">
          Message
          <textarea
            className="w-full border border-gray-400 rounded py-3 px-4 mt-2 h-38 resize-none"
            name="Message"
            placeholder="Enter Your Message"
            required
          ></textarea>
        </div>
        <button className="bg-blue-700 text-white pb-2 px-6 mt-5 rounded-xl pt-[10px]">
          {result ? result : "Submit Message"}
        </button>
      </form>
    </motion.div>
  );
};

export default Contact;
