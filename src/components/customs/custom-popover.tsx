import React, { useEffect, useRef } from "react";

interface PopoverProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const CustomPopover: React.FC<PopoverProps> = ({
  children,
  isOpen,
  onClose,
}) => {
  const node = useRef<HTMLDivElement>(null);

  const handleClickOutside = (e: MouseEvent) => {
    if (node.current && !node.current.contains(e.target as Node)) {
      onClose();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  return (
    <div className="relative" ref={node}>
      {isOpen && (
        <div className="absolute z-10 w-64 p-2 mt-2 bg-white border border-gray-200 rounded shadow-lg">
          {children}
          <span
            className="absolute text-white text-xs bottom-0 right-0 bg-red-500 px-2 py-1 rounded-tl cursor-pointer"
            onClick={onClose}
          >
            Close
          </span>
        </div>
      )}
    </div>
  );
};

export default CustomPopover;
