"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
import heroImage from "../../../public/hero-image.jpeg";

const HeroSection = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if the user has scrolled to the bottom of the page
      if (
        window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.scrollHeight - 10
      ) {
        setShowBackToTop(true); // Show the "Back to Top" button
      } else {
        setShowBackToTop(false); // Hide the button when not at the bottom
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    // Smooth scroll to the top
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-7xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Hello, I&apos;m{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "CHAMAN",
                1000,
                "Full Stack Developer",
                1000,
                "Backend Developer",
                1000,
                "Frontend Developer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-5 lg:text-xl">
            I&apos;m a passionate developer who is always looking for new challenges. I love learning new things and building things. I have experience in MERN stack, Java Frameworks, Frontend/Backend/Cloud Technologies, and DevOps.
          </p>
          <div>
            <Link
              href="https://chamankumar.vercel.app/#contact"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white"
            >
              Hire Me
            </Link>
            <Link
              href="https://drive.google.com/file/d/1OEkdsiOOrQ9KL13VoBTOjeZuu7HKxly-/view?usp=sharing"
              target="_blank"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Resume
              </span>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full border border-solid bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src={heroImage}
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 object-none rounded-full h-inherit lg:h-revert-layer"
              width={300}
              height={300}
            />
          </div>
        </motion.div>
      </div>

      {/* "Open to work" Button */}
      <div
        className="fixed bottom-10 left-1/2 transform -translate-x-1/2 flex items-center justify-center space-x-3 cursor-pointer border-2 border-green-500 rounded-full py-3 px-6 bg-[#181818] text-white text-base transition-all duration-300 z-50"
        onClick={() => window.location.href = "mailto:kumar.cham@northeastern.edu"}
      >
        <span className="text-l font-semibold">Open to Work</span>
        <div className="w-3 h-3 rounded-full bg-green-500 animate-ping" />
      </div>

      {/* "Back to Top" Button */}
      {showBackToTop && (
        <div
          className="fixed bottom-10 right-10 cursor-pointer text-white text-2xl p-4 rounded-full border-2 border-green-500 bg-[#181818] hover:bg-green-500 hover:text-black transition-all duration-300 z-50"
          onClick={scrollToTop}
        >
          ☝️
        </div>
      )}
    </section>
  );
};

export default HeroSection;
