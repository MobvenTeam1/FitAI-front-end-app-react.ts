import React from "react";
import SvgColor from "../svg-color";

export const CustomSearchInput: React.FC = () => {
  return (
    <div className="relative flex items-center">
      <div className="absolute left-8 top-4">
        <SvgColor src="/icons/ic_search.svg" width={24} height={24} />
      </div>
      <input
        type="text"
        placeholder="Ara..."
        className="w-full pl-16 pr-8 py-4 rounded-xl border border-gray-50 shadow placeholder:text-gray-300"
      />
    </div>
  );
};
