import React from "react";

interface CustomModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const ForcedCustomModalClose = () => {
  const customModal = document.getElementById("customModal");
  if (customModal) {
    customModal.style.display = "none";
  }
};

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
      id="customModal"
      // onClick={onClose}
    >
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div
          className="fixed inset-0 bg-gray-500 backdrop-blur-lg bg-opacity-60 transition-opacity"
          aria-hidden="true"
        ></div>
        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>
        <div
          className="relative inline-block w-full align-bottom max-w-4xl px-14 pt-8 pb-14 bg-white rounded-xl text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle"
          onClick={stopPropagation}
        >
          <div className="flex justify-end mb-4">
            <button
              onClick={onClose}
              className="border border-gray-50 p-4 shadow rounded-xl"
            >
              <img src="/icons/ic_close.svg" alt="" />
            </button>
          </div>
          <div className="bg-white">{children}</div>
          {/* <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              type="button"
              className="mt-3 w-full inline-flex justify-center rounded-xl border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
              onClick={onClose}
            >
              Close
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
};
