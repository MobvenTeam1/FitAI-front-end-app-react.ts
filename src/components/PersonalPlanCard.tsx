import React, { useState } from "react";

import SvgColor from "./svg-color";
import { PersonalPlanOptions } from "./PersonalPlanOptions";
import { PersonalPropram } from "../sections/dashboard/home/context/types";

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
                <SvgColor src="/src/assets/icons/ic_clock.svg" />
                <p className="font-base">{value.duration}</p>
              </div>
              <div className="flex items-center gap-1">
                <SvgColor src="/src/assets/icons/ic_kcal.svg" />
                <p className="font-base">{value.caloriesBurned}</p>
              </div>
            </div>
          </div>
          <div
            className={`transition duration-500 ${
              isShow ? "transform rotate-180" : ""
            }`}
          >
            <SvgColor src="/src/assets/icons/ic_arrow-up.svg" width={24} height={24} />
          </div>
        </div>
      </div>
      <div
        className={`transition-all duration-500 overflow-hidden -mt-5 ${
          isShow ? "max-h-full" : "max-h-0"
        }`}
      >
        {isShow && <PersonalPlanOptions value={value.options} />}
      </div>
    </>
  );
};
