// src/components/AddItem.js
import React from "react";
import { motion } from "framer-motion";
import architectureDiagram from "../assets/architecture.svg";
import arch from "../assets/architectureimg.jpg";

const AddItem = () => {
  return (
    <motion.section
      id="add-item"
      className="py-16 bg-gray-100 relative"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.3 }}
    >
      <div className="max-w-6xl mx-auto px-4 flex flex-col items-center">
        <h2 className="text-3xl font-bold text-center mb-12">
          System Architecture
        </h2>

        {/* Architecture Diagram Section */}
        <div className="architecture-section mt-16">
          {/* Container for Architecture Diagram */}
          <motion.div
            className="flex flex-col items-center justify-center w-full"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            {/* Placeholder for your architecture diagram */}
            <img
              src={arch}
              alt="Architecture Diagram"
              className="w-full max-w-4xl object-cover shadow-lg rounded-lg glow-effect "
            />
          </motion.div>
        </div>
      </div>

      {/* Some animations for the image */}
      <style jsx>{`
        .architecture-section {
          background: linear-gradient(to bottom, #f9f9f9, #fff);
          padding: 2rem;
          border-radius: 1rem;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        }
      `}</style>
    </motion.section>
  );
};

export default AddItem;
