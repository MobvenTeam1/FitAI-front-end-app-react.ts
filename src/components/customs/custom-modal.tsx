import React from "react";

interface CustomModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const CustomModal: React.FC<CustomModalProps> = ({
  isOpen,
  onClose,
  children,
}) => {
  if (!isOpen) {
    return null;
  }

  const stopPropagation = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <div
      className="fixed z-10 inset-0 overflow-y-auto"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div
          className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          aria-hidden="true"
        ></div>
        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>
        <div
          className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
          onClick={stopPropagation}
        >
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            {children}
          </div>
          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              type="button"
              className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * `CustomModal` is a modal component built with Tailwind CSS.
 * It takes three props:
 * - `isOpen`: a boolean that controls whether the modal is open or not.
 * - `onClose`: a function that is called when the modal needs to be closed.
 * - `children`: the content of the modal.
 *
 * Here is an example of how to use it:
 *
 * ```tsx
 * import React, { useState } from 'react';
 * import { CustomModal } from './CustomModal';
 *
 * function App() {
 *   const [isOpen, setIsOpen] = useState(false);
 *
 *   const handleOpen = () => {
 *     setIsOpen(true);
 *   };
 *
 *   const handleClose = () => {
 *     setIsOpen(false);
 *   };
 *
 *   return (
 *     <div>
 *       <button onClick={handleOpen}>Open Modal</button>
 *       <CustomModal isOpen={isOpen} onClose={handleClose}>
 *         <h2 id="modal-title">Hello, World!</h2>
 *         <p>This is a custom modal!</p>
 *       </CustomModal>
 *     </div>
 *   );
 * }
 *
 * export default App;
 * ```
 */
