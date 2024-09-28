import React from "react";
import { motion } from "framer-motion";
import inventoryManager from "../assets/inventoryManager.svg";
import storeImage from "../assets/store.svg";
import postgresql from "../assets/sql.svg";
import inventory from "../assets/inventoryIMG.jpg";
import store from "../assets/storeimg.jpg";
import sql from "../assets/sqlimg.jpg";
import "../index.css";
const InventoryList = () => {
  return (
    <motion.section
      id="inventory"
      className="py-16 bg-white-100 relative"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.3 }}
    >
      <div className="max-w-6xl mx-auto px-4 flex flex-col items-center relative">
        <h2 className="text-3xl font-bold text-center mb-12">
          Inventory Management Flow
        </h2>

        <div className="flex flex-col items-center relative w-full">
          {/* SVG for Curved Lines */}

          {/* Top Section with Inventory Manager and Store */}
          <div className="flex justify-between items-center w-full relative mb-16">
            {/* Inventory Manager with Animated Human */}
            <motion.div
              className="flex flex-col items-center w-1/2"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.img
                src={inventoryManager}
                alt="Inventory Manager"
                className="w-24 h-24 mb-4 bounce-animation"
                initial={{ y: 0 }}
                animate={{ y: [0, -20, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
              />

              <h3 className="text-xl font-semibold">Inventory Manager</h3>
              <img
                src={inventory}
                alt="Inventory Manager"
                className="w-100 m-4 glow-effect "
                style={{ height: 150 }}
              />
            </motion.div>

            {/* Store with Animated Human */}
            <motion.div
              className="flex flex-col items-center w-1/2"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.img
                src={storeImage}
                alt="Store"
                className="w-100 h-20 mb-4 bounce-animation"
                initial={{ x: 0 }}
                animate={{ x: [0, 20, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
              />
              <h3 className="text-xl font-semibold">Store</h3>
              <img
                src={store}
                alt="Inventory Manager"
                className="w-100 m-4 glow-effect "
                style={{ height: 170 }}
              />
            </motion.div>
          </div>
          <svg
            className="absolute w-full h-64"
            viewBox="10 100 1000 180"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Line from Inventory Manager to PostgreSQL */}
            <path
              d="M 300 100 C 400 150, 400 250, 500 300"
              stroke="blue"
              strokeWidth="2"
              fill="transparent"
            />
            {/* Line from Store to PostgreSQL */}
            <path
              d="M 700 100 C 600 150, 600 250, 500 300"
              stroke="blue"
              strokeWidth="2"
              fill="transparent"
            />
          </svg>

          {/* PostgreSQL Database Box */}
          <motion.div
            className="flex flex-col items-center justify-center text-black w-48 h-48 "
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <img
              src={postgresql}
              alt="PostgreSQL Icon"
              className="w-100 h-20 mb-4"
            />
            <h4 className="text-lg font-bold">Database</h4>
            <img
              src={sql}
              alt="Inventory Manager"
              className="w-100 m-4 glow-effect "
            />
          </motion.div>
        </div>
      </div>

      {/* CSS Animation for Bounce */}
      <style jsx>{`
        .bounce-animation {
          animation: bounce 1.5s infinite;
        }

        @keyframes bounce {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }
      `}</style>
    </motion.section>
  );
};

export default InventoryList;
