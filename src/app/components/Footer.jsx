import React from "react";

const Footer = () => {
  return (
    <footer className="footer text-white py-8 px-4 border-t border-gray-600">
      <div className="container mx-auto flex flex-col items-center sm:flex-row sm:justify-between gap-4">
        {/* Left side: Developer info */}
        <div className="footer__copyright text-center sm:text-left">
          <span className="text-lg font-semibold block">Developed by</span>
          <span className="text-xl font-bold text-primary-500">Chaman Kumar 🤟 2024</span>
        </div>

        {/* Right side: Social links */}
        <div className="footer__links flex gap-4">
          <a
            href="mailto:kumar.cham@northeastern.edu"
            target="_blank"
            rel="noreferrer"
            className="text-primary-500 hover:text-primary-400"
            title="Email"
          >
            Email
          </a>
          <a
            href="https://github.com/byteKumar"
            target="_blank"
            rel="noreferrer"
            className="text-primary-500 hover:text-primary-400"
            title="GitHub"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/chamankumar5/"
            target="_blank"
            rel="noreferrer"
            className="text-primary-500 hover:text-primary-400"
            title="LinkedIn"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
