import { useState } from "react";
import CustomPopover from "../../components/customs/custom-popover";

export const ExampleCustomPopover = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button onClick={handleOpen}>Open Popover</button>
      <CustomPopover isOpen={isOpen} onClose={handleClose}>
        <h2 id="modal-title">Hello, World!</h2>
        <p>This is a custom Popover!</p>
      </CustomPopover>
    </div>
  );
};
