// src/components/Footer.js
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 text-center">
      <p>
        &copy; 2024 Ankush |
        <a
          href="https://www.linkedin.com/in/ankush-choudhary-js"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white-400 mx-2"
        >
          LinkedIn
        </a>{" "}
        |
        <a
          href="https://github.com/ankush-anonymous"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white-400 mx-2"
        >
          GitHub
        </a>
      </p>
    </footer>
  );
};

export default Footer;
