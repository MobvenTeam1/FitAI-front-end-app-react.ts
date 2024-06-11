import React, { useState } from "react";
import SvgColor from "../../../../components/svg-color";

const Step2: React.FC = () => {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const handleHeartClick = () => {
    setIsFavorite(!isFavorite);
    setShowConfirmation(true);
    setTimeout(() => {
      setShowConfirmation(false);
    }, 3000);
  };

  return (
    <div className="relative w-full h-[525px] rounded-xl bg-[url('/frames/frame_hiit.svg')] bg-cover bg-center flex items-center justify-center ">
      <div
        className="rounded-xl p-1 backdrop-blur-3xl shadow border text-white border-gray-50 absolute top-8 left-8 cursor-pointer flex items-center justify-center"
        onClick={handleHeartClick}
      >
        <SvgColor
          src={`/icons/ic_${isFavorite ? "heart-full" : "heart"}.svg`}
          width={24}
          height={24}
        />
      </div>
      {showConfirmation && (
        <div className="absolute bottom-8 bg-green-500 rounded-xl flex items-center justify-center w-11/12 p-3 gap-2 text-black-900 transition ease-in-out delay-150 duration-300">
          <SvgColor src={`/icons/ic_check-double.svg`} width={24} height={24} />
          <p className="text-base">Favori Antrenmanlarına Eklendi</p>
        </div>
      )}
      <div className="flex flex-col gap-4 text-white">
        <p className="font-bold text-4xl">Koşu Antrenmanı</p>
        <div className="flex items-center gap-3 px-1">
          <div className="w-full rounded-xl px-4 py-2 gap-2 flex items-center backdrop-blur-2xl">
            <SvgColor src={`/icons/ic_clock.svg`} width={16} height={16} />
            <p className="text-base">45 Dakika</p>
          </div>
          <div className="w-full rounded-xl px-4 py-2 gap-2 flex items-center backdrop-blur-2xl">
            <SvgColor src={`/icons/ic_fire-union.svg`} width={16} height={16} />
            <p className="text-base">155 Kalori</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Step2;
