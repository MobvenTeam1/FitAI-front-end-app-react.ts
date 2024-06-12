import React from "react";
import SvgColor from "../../../../components/svg-color";

const AiSuggestionView: React.FC = () => {
  return (
    <div className="shadow border border-gray-50 rounded-xl bg-green-500 p-6 flex flex-col gap-3">
      <p className="font-semibold text-2xl">AI Önerisi</p>
      <p className="font-medium text-sm">
        Hedeflenen kalori için bugün bu antrenmana ek sana önerdiğimiz egzersiz:
      </p>
      <div className="rounded-xl p-3 flex items-center justify-between bg-white">
        <div className="flex items-center gap-3.5">
          <div className="shadow border border-black-50 bg-white rounded-3xl p-3">
            <SvgColor src="/src/assets/icons/ic_walk.svg" width={40} height={40} />
          </div>
          <div>
            <p className="font-bold text-base">Yürüyüş</p>
            <p className="text-sm text-gray-300">Yüksek Tempo</p>
          </div>
        </div>

        <div className="flex flex-col gap-1 items-end">
            <KcalItem desc="Dakika" value={45} icon="clock" />
            <KcalItem desc="Kcal" value={200} icon="kcal-fire" />
        </div>
      </div>
    </div>
  );
};

type KcalItemProps = {
  desc: string;
  value: number;
  icon: string;
};

const KcalItem: React.FC<KcalItemProps> = ({ desc, value, icon }) => (
  <div className="bg-gray-50 rounded-xl py-1.5 px-2 flex items-center gap-1">
    <SvgColor src={`/src/assets/icons/ic_${icon}.svg`} width={12} height={12} />
    <p className="text-sm">{`${value} ${desc}`}</p>
  </div>
);
export default AiSuggestionView;
