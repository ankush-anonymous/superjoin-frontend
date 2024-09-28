import React, { useState } from "react";

const ResultsList = ({ results, onUpdate, onDelete, isDarkMode, onAdd }) => {
  const [editIndex, setEditIndex] = useState(null); // To track editing rows
  const [editableData, setEditableData] = useState(null); // Editable data for the row
  const [isAdding, setIsAdding] = useState(false); // Track whether we are adding a new entry
  const [newData, setNewData] = useState({
    ItemName: "",
    Stock: "",
    Price: "",
  }); // New entry form data, removed ItemID

  const handleEdit = (index) => {
    setEditIndex(index);
    setEditableData(results[index]); // Set the data to be edited
  };

  const handleFieldChange = (e, field) => {
    setEditableData({
      ...editableData,
      [field]: e.target.value,
    });
  };

  const handleSave = () => {
    onUpdate(editIndex, editableData); // Call parent function to update state
    setEditIndex(null);
    setEditableData(null); // Clear edit state
  };

  const handleNewFieldChange = (e, field) => {
    setNewData({
      ...newData,
      [field]: e.target.value,
    });
  };

  const handleAddSave = () => {
    onAdd(newData); // Call parent function to add new entry
    setNewData({
      ItemName: "",
      Stock: "",
      Price: "",
    });
    setIsAdding(false); // Close add form
  };

  return (
    <div className="overflow-x-hidden">
      <button
        className="mb-4 bg-blue-500 text-white px-4 py-2 rounded"
        onClick={() => setIsAdding(true)}
      >
        Add New Entry
      </button>

      {isAdding && (
        <div
          className={`p-4 border rounded mb-4 ${
            isDarkMode ? "bg-gray-800 text-white" : "bg-white"
          }`}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              placeholder="ItemName"
              value={newData.ItemName}
              onChange={(e) => handleNewFieldChange(e, "ItemName")}
              className="px-2 py-1 rounded bg-gray-200"
            />
            <input
              placeholder="Stock"
              value={newData.Stock}
              onChange={(e) => handleNewFieldChange(e, "Stock")}
              className="px-2 py-1 rounded bg-gray-200"
            />
            <input
              placeholder="Price"
              value={newData.Price}
              onChange={(e) => handleNewFieldChange(e, "Price")}
              className="px-2 py-1 rounded bg-gray-200"
            />
          </div>
          <div className="mt-4">
            <button
              className="bg-green-500 text-white px-4 py-2 rounded m-2"
              onClick={handleAddSave}
            >
              Save
            </button>
            <button
              className="bg-red-500 text-white px-4 py-2 rounded"
              onClick={() => setIsAdding(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      <table
        className={`min-w-full table-auto rounded-lg ${
          isDarkMode ? "bg-gray-800 text-white" : "bg-white text-black"
        }`}
      >
        <thead>
          <tr>
            <th className="px-4 py-2 border">ItemID</th>
            <th className="px-4 py-2 border">ItemName</th>
            <th className="px-4 py-2 border">Stock</th>
            <th className="px-4 py-2 border">Price</th>
            <th className="px-4 py-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {results.map((result, index) => (
            <tr
              key={index}
              className={`${index % 2 === 0 ? "bg-gray-100" : "bg-white"} ${
                isDarkMode ? "bg-gray-700" : ""
              }`}
            >
              {editIndex === index ? (
                <>
                  <td className="px-4 py-2 border">
                    <input
                      value={editableData.ItemID}
                      onChange={(e) => handleFieldChange(e, "ItemID")}
                      className="w-full px-2 py-1 rounded bg-gray-200"
                      disabled // Keep the ItemID disabled since it’s auto-generated
                    />
                  </td>
                  <td className="px-4 py-2 border">
                    <input
                      value={editableData.ItemName}
                      onChange={(e) => handleFieldChange(e, "ItemName")}
                      className="w-full px-2 py-1 rounded bg-gray-200"
                    />
                  </td>
                  <td className="px-4 py-2 border">
                    <input
                      value={editableData.Stock}
                      onChange={(e) => handleFieldChange(e, "Stock")}
                      className="w-full px-2 py-1 rounded bg-gray-200"
                    />
                  </td>
                  <td className="px-4 py-2 border">
                    <input
                      value={editableData.Price}
                      onChange={(e) => handleFieldChange(e, "Price")}
                      className="w-full px-2 py-1 rounded bg-gray-200"
                    />
                  </td>

                  <td className="px-6 py-4 border flex justify-between">
                    <button
                      className="bg-green-500 text-white px-2 py-1 md:px-4 md:py-2 rounded mb-2 md:mb-0 m-1"
                      onClick={handleSave}
                    >
                      Save
                    </button>
                    <button
                      className="bg-red-500 text-white px-2 py-1 md:px-4 md:py-2 rounded mb-2 md:mb-0 m-1"
                      onClick={() => setEditIndex(null)}
                    >
                      Cancel
                    </button>
                  </td>
                </>
              ) : (
                <>
                  <td className="px-4 py-2 border">{result.ItemID}</td>
                  <td className="px-4 py-2 border">{result.ItemName}</td>
                  <td className="px-4 py-2 border">{result.Stock}</td>
                  <td className="px-4 py-2 border">{result.Price}</td>

                  <td className="px-6 py-4 border flex justify-between">
                    <button
                      className="bg-blue-500 text-white px-2 py-1 md:px-4 md:py-2 rounded mb-2 md:mb-0 m-1"
                      onClick={() => handleEdit(index)}
                    >
                      Edit
                    </button>
                    <button
                      className="bg-red-500 text-white px-2 py-1 md:px-4 md:py-2 rounded mb-2 md:mb-0 m-1"
                      onClick={() => onDelete(result.ItemID)} // Pass only ItemID here
                    >
                      Delete
                    </button>
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ResultsList;
