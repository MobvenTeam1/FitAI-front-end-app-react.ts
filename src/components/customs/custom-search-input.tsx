import React, { useState } from "react";
import SvgColor from "../svg-color";

interface CustomSearchInputProps {
  onSearch: (query: string) => void;
}

export const CustomSearchInput: React.FC<CustomSearchInputProps> = ({
  onSearch,
}) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);
    onSearch(value);
  };

  return (
    <div className="relative flex items-center">
      <div className="absolute left-8 top-4">
        <SvgColor src="/src/assets/icons/ic_search.svg" width={24} height={24} />
      </div>
      <input
        type="text"
        placeholder="Ara..."
        className="w-full pl-16 pr-8 py-4 rounded-xl border border-gray-50 shadow placeholder:text-gray-300 focus:outline-none focus:border-gray-600"
        value={inputValue}
        onChange={handleInputChange}
      />
    </div>
  );
};
