import React from "react";

const DebugWindow = ({ history, clearHistory }) => {
  return (
    <div className="fixed bottom-0 right-0 m-4 p-4 bg-gray-200 rounded-lg shadow-lg">
      <h2 className="text-lg font-bold mb-2">Debug Window</h2>
      <button
        className="bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded mb-2 mx-auto"
        onClick={clearHistory}
      >
        Clear History
      </button>
      <ul className="list-none ml-6">
        {history.map((link, index) => (
          <li key={index}>{link}</li>
        ))}
      </ul>
    </div>
  );
};

export default DebugWindow;
