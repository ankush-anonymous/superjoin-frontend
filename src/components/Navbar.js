import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  return (
    <nav
      className="bg-gray-400 fixed top-0 left-0 right-0 z-50 p-4 flex items-center justify-between shadow-sm"
      style={{ margin: 0 }}
    >
      {/* Branding Section */}
      <div className="flex items-center">
        <div
          className="text-black-600 text-3xl font-bold cursor-pointer"
          onClick={() => navigate("/")} // Navigate to home on click
        >
          Sheet Sync
        </div>
      </div>

      {/* Button Section */}
      <div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => navigate("/table")} // Navigate to /table on click
        >
          Sync Now
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
