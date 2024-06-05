import React from "react";
import SvgColor from "./svg-color";
import CustomSwitch from "./customs/custom-switch";

type TrackCardProps = {
  title: string;
  icon: string;
  type: string;
  infoText?: string;
};

const TrackCard: React.FC<TrackCardProps> = ({
  title,
  icon,
  type,
  infoText,
}) => {
  return (
    <div className="w-full py-3 px-4 flex items-center justify-between border border-gray-50 shadow rounded-xl">
      <div className="flex items-center gap-2 ">
        <img className="w-6 h-6" src={`/icons/ic_${icon}`} alt="" />
        <p className="text-base text-gray-900 font-semibold">{title}</p>
      </div>
      <div className="text-gray-300 text-sm flex items-center gap-1">
        {infoText && <p>{infoText}</p>}
        {type === "route" ? (
          <SvgColor src={`/icons/ic_arrow-right.svg`} width={12} height={12} />
        ) : type === "action" ? (
          <CustomSwitch />
        ) : null}
      </div>
    </div>
  );
};
export default TrackCard;
