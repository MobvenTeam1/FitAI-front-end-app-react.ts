import React from "react";
import SvgColor from "../../../../components/svg-color";

type TargerGoalViewProps = {
  img: string;
  title: string;
  value: number;
  subtitle: string;
};

const TargerGoalView: React.FC<TargerGoalViewProps> = ({
  img,
  title,
  value,
  subtitle,
}) => {
  return (
    <div className="flex flex-col gap-3 w-full border border-gray-50 shadow px-5 py-4 rounded-xl">
      <div className="w-full flex items-center justify-between">
        <h5 className="text-base font-bold">{title}</h5>
        <div className="bg-green-50 rounded-full p-2 flex items-center justify-center text-green-600">
          <SvgColor src={`/icons/ic_${img}.svg`} width={20} height={20} />
        </div>
      </div>

      <div className="flex gap-1 items-end ">
        <p className="text-4xl font-black text-gray-500">{value}</p>
        <p className="text-xs text-gray-300 mb-1">{subtitle}</p>
      </div>
    </div>
  );
};
export default TargerGoalView;
