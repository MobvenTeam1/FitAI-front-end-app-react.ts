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
    <div>
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

        <div className="absolute bottom-8 bg-white rounded-xl flex items-center justify-between w-11/12 py-4 px-6 gap-2 transition ease-in-out delay-150 duration-300">
          <div className="flex items-center gap-2">
            <img
              className="w-14 h-14 rounded-xl"
              src="/frames/frame_eminem.svg"
              alt=""
            />
            <div>
              <p className="text-base font-bold">Lose Yourself</p>
              <p className="text-xs text-gray-300">45 Dakika</p>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <SvgColor src={`/icons/ic_play-back.svg`} width={20} height={20} />
            <SvgColor src={`/icons/ic_play.svg`} width={28} height={28} />
            <SvgColor
              src={`/icons/ic_play-forward.svg`}
              width={20}
              height={20}
            />
          </div>
        </div>

        {showConfirmation && (
          <div className="absolute bottom-8 bg-green-500 rounded-xl flex items-center justify-center w-11/12 p-3 gap-2 text-black-900 transition ease-in-out delay-150 duration-300">
            <SvgColor
              src={`/icons/ic_check-double.svg`}
              width={24}
              height={24}
            />
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
              <SvgColor
                src={`/icons/ic_fire-union.svg`}
                width={16}
                height={16}
              />
              <p className="text-base">155 Kalori</p>
            </div>
          </div>
        </div>
      </div>
      <div className="border border-gray-50 shadow rounded-xl flex items-center justify-center p-6 pt-10 -mt-4 gap-12">
        <div className="rounded-xl bg-green-500 p-2.5">
          <SvgColor src={`/icons/ic_ai-asistan.svg`} width={32} height={32} />
        </div>
        <div className="p-2.5">
          <SvgColor src={`/icons/ic_music.svg`} width={32} height={32} />
        </div>
        <div className="rounded-xl bg-green-500 p-6">
          <SvgColor src={`/icons/ic_play.svg`} width={32} height={32} />
        </div>
        <div className="p-2.5">
          <SvgColor
            src={`/icons/ic_cloud-download.svg`}
            width={32}
            height={32}
          />
        </div>
        <div className="p-2.5">
          <SvgColor src={`/icons/ic_settings.svg`} width={32} height={32} />
        </div>
      </div>
    </div>
  );
};
export default Step2;
