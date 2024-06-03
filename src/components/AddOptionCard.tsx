import React from "react";

type Props = {
  option: Option;
};

interface Option {
  id: number;
  title: string;
  img: string;
  subtitle: string;
  type: string;
}

export const AddOptionCard: React.FC<Props> = ({ option }) => {
  return (
    <div className="flex items-center gap-3">
      <div className="w-12 h-12 bg-gray-100 rounded-lg">
        <img src={`/icons/ic_${option.img}.svg`} alt={option.title} />
      </div>
      <div className="flex flex-col">
        <span className="font-semibold text-base">{option.title}</span>
        <span className="text-gray-300 text-sm">{option.subtitle}</span>
      </div>
    </div>
  );
};
