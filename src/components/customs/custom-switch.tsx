import React, { useState } from "react";

const CustomSwitch: React.FC = () => {
  const [isOn, setIsOn] = useState<boolean>(false);

  const toggleSwitch = () => {
    setIsOn(!isOn);
  };

  return (
    <div className="flex items-center justify-center">
      <div
        onClick={toggleSwitch}
        className={`w-16 h-8 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 ${
          isOn ? "bg-green-500" : "bg-gray-50"
        }`}
      >
        <div
          className={`bg-white w-6 h-6 rounded-full shadow-md transform transition-transform duration-300 ${
            isOn ? "translate-x-8" : "translate-x-0"
          }`}
        />
      </div>
    </div>
  );
};

export default CustomSwitch;
