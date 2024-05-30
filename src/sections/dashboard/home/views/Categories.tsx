import React from "react";

type Value = {
  img: string;
  title: string;
};

type Props = {
  header: string;
  values: Value[];
  col: string;
};

export const Categories: React.FC<Props> = ({ header, values, col }) => {
  return (
    <div className="flex flex-col gap-3">
      <p className="font-bold text-lg">{header} Kategorileri</p>
      <div className="grid grid-cols-12 gap-5">
        {values.map((value, index) => (
          <div key={index + value.title} className={`${col} relative`}>
            <img
              className="w-full rounded-xl h-56 object-cover"
              src={`/frames/frame_${value.img}.png`}
              alt={value.title}
            />
            <p className="absolute left-0 top-40 text-center font-bold text-base bg-green-500 py-1 px-4 rounded-e-full">
              {value.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
