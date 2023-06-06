import React from "react";
import { CSSTransition } from "react-transition-group";

const DialogBox = ({ isOpen, onClose }) => {
  return (
    <CSSTransition
      in={isOpen}
      timeout={300}
      classNames="dialog-box"
      unmountOnExit
    >
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="bg-white text-black rounded-lg p-8 shadow-xl">
          <h2 className="text-2xl font-bold mb-4">Dialog Box Content</h2>
          <button
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 px-4 rounded"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </CSSTransition>
  );
};

export default DialogBox;
