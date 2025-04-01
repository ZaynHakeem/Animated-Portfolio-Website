import React from "react";
import avatar from "../assets/Oldavatar.jpg";
import { motion } from "motion/react";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <div className="text-white py-10 flex flex-col md:flex-row items-center justify-center px-10">
      {/* Image */}
      <motion.img
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        src={avatar}
        className="w-2/3 md:w-1/3 lg:w-1/4 rounded-full lg:rounded-3xl shadow-lg mb-6 md:mb-0"
        alt="avatar"
      />

      {/* Text */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center md:text-left md:ml-10 max-w-lg"
      >
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold"
        >
          Welcome to my world of code and creativity
          <motion.span
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.5 }}
            className="block text-purple-500 mt-4"
          >
            Bringing both technical skill and a gamer’s perspective to every project
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="text-gray-400 text-lg mt-4"
        >
          Let’s create something that not only works, but also excites.
        </motion.p>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 mt-6">
          <motion.button
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.5, duration: 0.5 }}
            className="bg-purple-500 text-white px-7 py-3 rounded-full hover:bg-purple-400 transition"
          >
            <Link to="contact" smooth={true} duration={500} offset={-70}>
              Hire me
            </Link>
          </motion.button>

          <motion.button
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.5, duration: 0.5 }}
            className="text-purple-500 border border-purple-500 px-6 py-3 rounded-full hover:bg-purple-400 hover:text-white transition"
          >
            <Link to="about" smooth={true} duration={500} offset={-70}>
              My Story
            </Link>
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
