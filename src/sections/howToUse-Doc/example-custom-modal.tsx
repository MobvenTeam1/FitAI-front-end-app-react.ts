import { useState } from "react";
import { CustomModal } from "../../components/customs/custom-modal";

export const ExampleCustomModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button onClick={handleOpen}>Open Modal</button>
      <CustomModal isOpen={isOpen} onClose={handleClose}>
        <h2 id="modal-title">Hello, World!</h2>
        <p>This is a custom modal!</p>
      </CustomModal>
    </div>
  );
};
