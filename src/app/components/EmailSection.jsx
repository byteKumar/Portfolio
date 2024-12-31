"use client";
import React from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import ResumeIcon from "../../../public/resume-icon.svg"; // Import Resume icon
import EmailIcon from "../../../public/email-icon.svg"; // Import Email icon
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center my-16 py-16 px-4 relative text-center bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 rounded-xl shadow-lg max-w-full mx-auto"
    >
      {/* Background blur circle */}
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-72 w-72 sm:h-96 sm:w-96 z-0 blur-lg absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-20"></div>
      
      <div className="z-10 max-w-xl mx-auto">
        {/* Header */}
        <h5 className="text-2xl sm:text-3xl font-extrabold text-white mb-4 animate-pulse">
          Let&apos;s Connect 🚀
        </h5>
        <p className="text-[#ADB7BE] mb-8 text-base sm:text-lg leading-relaxed max-w-lg mx-auto">
          I&apos;m always open to exciting new opportunities, and I love connecting with brilliant minds. 
          If you have a project in mind or just want to say hi, feel free to reach out. 
          I promise to get back to you faster than you expect!
        </p>

        {/* Social and contact links */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-6">
          <Link href="https://github.com" passHref>
            <Image
              src={GithubIcon}
              alt="Github Icon"
              width={40}
              height={40}
              className="hover:scale-110 transform transition-transform duration-300"
            />
          </Link>
          <Link href="https://linkedin.com" passHref>
            <Image
              src={LinkedinIcon}
              alt="LinkedIn Icon"
              width={40}
              height={40}
              className="hover:scale-110 transform transition-transform duration-300"
            />
          </Link>
          <Link href="https://drive.google.com/file/d/1OEkdsiOOrQ9KL13VoBTOjeZuu7HKxly-/view?usp=sharing" target="_blank" passHref>
            <Image
              src={ResumeIcon}
              alt="Resume Icon"
              width={40}
              height={40}
              className="hover:scale-110 transform transition-transform duration-300"
            />
          </Link>
          <Link href="mailto:kumar.cham@northeastern.edu" passHref>
            <Image
              src={EmailIcon}
              alt="Email Icon"
              width={40}
              height={40}
              className="hover:scale-110 transform transition-transform duration-300"
            />
          </Link>
        </div>

        {/* Contact email and message */}
        <p className="text-[#ADB7BE] text-base sm:text-lg font-semibold mb-2">
          Let&apos;s collaborate on something amazing!
        </p>
        <p className="text-primary-500 font-bold text-lg sm:text-2xl animate-bounce">
          kumar.cham@northeastern.edu
        </p>
        <p className="text-[#ADB7BE] text-xs sm:text-sm mt-4 italic">
          Drop me a line – let&apos;s build the future together ✨
        </p>
      </div>
    </section>
  );
};

export default EmailSection;
