// src/components/TechStack.js
import React from "react";
import { motion } from "framer-motion";
import reactLogo from "../assets/react.svg";
import rabbit from "../assets/rabbitmq.svg";
import postgresqlLogo from "../assets/postgresql.svg";
import nodedotjsLogo from "../assets/nodedotjs.svg";
import sheets from "../assets/googlesheets.svg";

const techStackData = [
  { name: "React", logo: reactLogo },
  { name: "Rabbit MQ", logo: rabbit },
  { name: "PostgreSQL", logo: postgresqlLogo },
  { name: "Node.js", logo: nodedotjsLogo },
  { name: "Google Sheets", logo: sheets },
];

const TechStack = () => {
  return (
    <motion.section
      id="tech-stack"
      className="py-16 bg-white-100"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.3 }}
    >
      <div className="max-w-6xl mx-auto px-4 flex flex-col items-center">
        <h2 className="text-3xl font-bold text-center mb-12">Tech Stack</h2>

        {/* Tech Stack Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {techStackData.map((tech, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center justify-center"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              <img
                src={tech.logo}
                alt={`${tech.name} logo`}
                className="w-20 h-20 mb-4"
              />
              <h4 className="text-xl font-semibold">{tech.name}</h4>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default TechStack;
