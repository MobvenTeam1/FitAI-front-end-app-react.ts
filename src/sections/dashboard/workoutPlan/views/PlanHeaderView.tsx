import React from "react";
import SvgColor from "../../../../components/svg-color";

const PlanHeaderView: React.FC = () => {
  return (
    <div className="p-8 flex flex-col gap-3 text-white rounded-xl bg-[url('/src/assets/frames/frame_hiit.svg')] bg-cover bg-center backdrop-grayscale">
      <p className="font-bold text-4xl">Koşu</p>
      <div className="flex items-center gap-3">
        <InfoCardItem title="Kilo Verme" icon="goal-up_weight" />
        <InfoCardItem title="Başlangıç Seviyesi" icon="climbing" />
      </div>
    </div>
  );
};

const InfoCardItem: React.FC<{ title: string; icon: string }> = ({
  title,
  icon,
}) => {
  return (
    <div className="flex items-center gap-2 p-3 rounded-xl backdrop-blur-2xl">
      <SvgColor src={`/src/assets/icons/ic_${icon}.svg`} width={12} height={12} />
      <p className="text-base font-semibold">{title}</p>
    </div>
  );
};
export default PlanHeaderView;
