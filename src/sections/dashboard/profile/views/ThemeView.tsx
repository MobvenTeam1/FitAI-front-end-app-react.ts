import React, { useState } from "react";
import { CustomButton } from "../../../../components/customs/custom-button";

const ThemeView: React.FC = () => {
  const themeValues = [
    {
      id: 1,
      img: "system",
      title: "Sistem",
    },
    {
      id: 2,
      img: "light",
      title: "Light",
    },
    {
      id: 3,
      img: "dark",
      title: "Dark",
    },
  ];

  const [selectedTheme, setSelectedTheme] = useState(themeValues[0].id); // default to the first theme

  return (
    <div className="border border-gray-50 shadow rounded-xl flex flex-col gap-3 p-6">
      <p className="font-semibold text-lg text-gray-900 p-3">Tema</p>
      <div className="grid grid-cols-12 gap-14">
        {themeValues.map((item, index) => (
          <div
            key={index}
            className={`col-span-4`}
            onClick={() => setSelectedTheme(item.id)}
          >
            <img
              className={`w-full border border-gray-50 rounded-xl cursor-pointer h-28x ${
                selectedTheme === item.id ? "outline outline-green-500" : ""
              }`}
              src={`/src/assets/frames/frame_${item.img}-theme.png`}
              alt={item.title}
            />
            <p className="text-gray-900 text-base text-center mt-5">
              {item.title}
            </p>
          </div>
        ))}
      </div>
      <div className="mt-3">
        <CustomButton label="Değişiklikleri Kaydet" />
      </div>
    </div>
  );
};
export default ThemeView;
