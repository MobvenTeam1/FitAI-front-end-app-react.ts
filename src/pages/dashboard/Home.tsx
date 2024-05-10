import { useState } from "react";
import { CustomModal } from "../../components/customs/custom-modal";

export const Home: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <div>
      <h1 className="text-3xl font-bold underline text-red-500">
        Hello world!
      </h1>
      <div>
        <button onClick={handleOpen}>Open Modal</button>
        <CustomModal isOpen={isOpen} onClose={handleClose}>
          <h2 id="modal-title">Hello, World!</h2>
          <p>This is a custom modal!</p>
        </CustomModal>
      </div>
    </div>
  );
};
