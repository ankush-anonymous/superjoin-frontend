// src/components/Dashboard.js
import React from "react";
import { motion } from "framer-motion";

const Dashboard = () => {
  return (
    <motion.section
      id="dashboard"
      className="h-screen flex items-center justify-center bg-gray-100"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="text-center relative">
        {/* Moving Title */}
        <motion.h1
          className="text-5xl font-bold"
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{
            type: "spring",
            stiffness: 70,
            damping: 20,
            delay: 0.2,
          }}
        >
          Sync Sheet{" "}
        </motion.h1>

        {/* Moving Description */}
        <motion.p
          className="mt-4 text-lg text-gray-600"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Sync google sheets seamlessly with your database{" "}
        </motion.p>

        {/* Floating Shape Animation */}
        <motion.div
          className="absolute top-0 left-0 bg-blue-300 rounded-full w-40 h-40 opacity-50"
          animate={{
            y: [0, 20, 0], // Moves up and down
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
        ></motion.div>

        {/* Floating Shape on Right */}
        <motion.div
          className="absolute bottom-0 right-0 bg-red-300 rounded-full w-32 h-32 opacity-50"
          animate={{
            y: [0, 30, 0], // Moves up and down
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
        ></motion.div>
      </div>
    </motion.section>
  );
};

export default Dashboard;
