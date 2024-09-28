import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import ResultsList from "../components/ResultsList";
import Navbar from "../components/Navbar";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const TablePage = () => {
  const [results, setResults] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(false); // State for dark mode

  // Fetch data from backend when the component mounts
  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://superjoin-backend-1.onrender.com/data/fetch"
      );
      const data = await response.json();
      console.log(data);
      // Map the API data to match the table's column names
      const mappedData = data.map((item) => ({
        ItemID: item.item_id,
        ItemName: item.item_name,
        Stock: item.stock,
        Price: item.price,
      }));
      setResults(mappedData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Handle update when user edits a row in the table
  const handleUpdateResult = (index, updatedResult) => {
    const { ItemID, ItemName, Stock, Price } = updatedResult;

    axios
      .put(`https://superjoin-backend-1.onrender.com/data/update/${ItemID}`, {
        item_name: ItemName,
        stock: Stock,
        price: Price,
      })
      .then((response) => {
        console.log(response.data);
        // Re-fetch data after successful update
        fetchData();
        toast.success("Data updated successfully!");
      })
      .catch((error) => {
        console.error("Error updating data:", error);
        toast.error("Failed to update data.");
      });
  };

  // Handle delete when user deletes a row in the table
  const handleDeleteResult = (itemId) => {
    axios
      .delete(`https://superjoin-backend-1.onrender.com/data/delete/${itemId}`)
      .then((response) => {
        // Re-fetch data after successful deletion
        fetchData();
        toast.success("Data deleted successfully!");
      })
      .catch((error) => {
        console.error("Error deleting data:", error);
      });
  };

  // Handle adding a new result to the table
  const handleAddResult = async (newResult) => {
    try {
      const { ItemName, Stock, Price } = newResult;

      await axios.post(
        "https://superjoin-backend-1.onrender.com/data/add", // API for adding data
        {
          item_name: ItemName,
          stock: Stock,
          price: Price,
        }
      );

      // Re-fetch data after successful addition
      fetchData();
      toast.success("Data added successfully!");
    } catch (error) {
      console.error("Error adding data:", error);
      toast.error("Failed to add data.");
    }
  };

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <div
      className={`min-h-screen p-2 ${
        isDarkMode ? "bg-gray-900" : "bg-gray-200"
      }`}
    >
      <Navbar />
      <main className="mt-24 flex flex-col md:flex-row justify-center">
        <div className={`md:w-3/4 w-full max-w-4xl mx-auto`}>
          <div
            className={`p-4 md:p-4 rounded-lg shadow-sm ${
              isDarkMode ? "bg-gray-800 text-white" : "bg-white"
            }`}
          >
            <ResultsList
              results={results}
              onUpdate={handleUpdateResult}
              onDelete={handleDeleteResult}
              onAdd={handleAddResult}
              isDarkMode={isDarkMode}
            />
          </div>
        </div>
      </main>
      <ToastContainer />
    </div>
  );
};

export default TablePage;
