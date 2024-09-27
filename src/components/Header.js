import React from "react";

const Header = ({ toggleDarkMode, isDarkMode }) => (
  <nav
    className={`fixed top-0 left-0 right-0 z-50 p-4 flex items-center justify-between ${
      isDarkMode ? "bg-gray-800" : "bg-white"
    } shadow-sm`}
    style={{ margin: 0 }}
  >
    {/* Branding Section */}
    <div className="flex items-center">
      <div
        className={`text-blue-600 text-xl font-bold ${
          isDarkMode ? "text-white" : "text-gray-700"
        }`}
      >
        Sheet Sync
      </div>
    </div>

    {/* Dark Mode Toggle */}
    <button
      onClick={toggleDarkMode}
      className={`p-2 rounded-full ${
        isDarkMode ? "bg-gray-600 text-white" : "bg-gray-200 text-gray-800"
      }`}
    >
      {isDarkMode ? "Light Mode" : "Dark Mode"}
    </button>
  </nav>
);

export default Header;
