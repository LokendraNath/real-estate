import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div
      className="mt-10 px-4 md:px-20 lg:px-32 bg-gray-950 w-full overflow-hidden"
      id="Footer"
    >
      <div className="container py-10 mx-auto flex flex-col md:flex-row justify-between items-start">
        <div className="w-full md:w-1/3 mb-8 md:mb-0">
          <img className="h-13" src={assets.logo} />
          <p className="text-gray-500 mt-4 max-w-80">
            A sleek and user-friendly real estate platform connecting buyers and
            sellers seamlessly.
          </p>
        </div>
        <div className="w-full md:w-1/5 mb-5 md:mb-0 md:mt-3">
          <h3 className="text-lg text-white font-bold mb-4">Company</h3>
          <ul className="flex flex-col font-bold mb-4 text-gray-500">
            <a href="#Header" className="hover:text-white">
              Home
            </a>
            <a href="#About" className="hover:text-white">
              About
            </a>
            <a href="#Contact" className="hover:text-white">
              Contact Us
            </a>
            <a href="#Header" className="hover:text-white">
              Privacy Policy
            </a>
          </ul>
        </div>
        <div className="w-full md:w-1/3 md:mt-3">
          <h3 className="text-white text-lg font-bold mb-4">
            Subscribe To Our Membership
          </h3>
          <p className="text-gray-500 mb-4 max-w-80">
            In the Membership you get Article , resources , sent to your inbox
            weekly.
          </p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="h-10 pl-2 bg-gray-800 rounded text-gray-500 w-full md:w-auto text-sm focus:outline-none"
            />
            <button className="bg-blue-700 text-white font-semibold py-[6px] px-3 rounded-lg">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 py-4 mt-10 text-center text-gray-500">Copyright 2025 &copy; Lokendra Nath. All Right Reserved</div>
    </div>
  );
};

export default Footer;
