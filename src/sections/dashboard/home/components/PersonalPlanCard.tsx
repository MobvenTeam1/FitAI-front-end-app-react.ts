import React, { useState } from "react";
import { PersonalPropram } from "../context/HomeContext";
import SvgColor from "../../../../components/svg-color";
import { PersonalPlanOptions } from "./PersonalPlanOptions";

type Props = {
  value: PersonalPropram;

};

export const PersonalPlanCard: React.FC<Props> = ({ value }) => {
  const [isShow, setIsShow] = useState(false);
  return (
    <>
      <div
        onClick={() => setIsShow(!isShow)}
        className="h-28 px-6 object-cover cursor-pointer bg-center bg-no-repeat bg-cover relative rounded-xl"
        style={{
          backgroundImage: `url(/frames/frame_${value.img}.jpg)`,
        }}
      >
        <div className="flex items-center justify-between text-white h-full">
          <div className="flex flex-col justify-center gap-1 h-full ">
            <p className="font-bold text-2xl">{value.programTitle}</p>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                <SvgColor src="/icons/ic_clock.svg" />
                <p className="font-base">{value.duration}</p>
              </div>
              <div className="flex items-center gap-1">
                <SvgColor src="/icons/ic_kcal.svg" />
                <p className="font-base">{value.caloriesBurned}</p>
              </div>
            </div>
          </div>
          <SvgColor src="/icons/ic_arrow-up.svg" width={24} height={24} />
        </div>
      </div>
      {isShow && <PersonalPlanOptions value={value.options} />}
    </>
  );
};
