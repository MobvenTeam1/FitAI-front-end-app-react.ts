import React, { useState } from "react";
import { CustomButton } from "./customs/custom-button";

type Props = {
  values: StateValue[];
  texts: StateTexts;
};

type StateValue = {
  img: string;
  title: string;
  subtitle: string;
};

type StateTexts = {
  title: string;
  subtitle: string;
  buttonLabel: string;
};

export const AddPlanValues: React.FC<Props> = ({ values, texts }) => {
  const [isSelected, setIsSelected] = useState<number | null>(null);

  return (
    <div className="flex flex-col gap-3 p-1">
      <div className="flex flex-col gap-1 absolute top-8 left-14">
        <p className="text-gray-900 text-2xl font-bold">{texts.title}</p>
        <p className="text-gray-500 text-sm font-medium">{texts.subtitle}</p>
      </div>
      <div className="grid grid-cols-12 gap-3 mt-9">
        {values.map((value, index) => (
          <div key={index + value.title} className="col-span-6">
            <div
              onClick={() => setIsSelected(index)}
              className={`flex flex-col px-6 py-4 gap-2 border cursor-pointer ${
                isSelected === index ? "border-green-500" : "border-gray-50"
              } shadow rounded-xl`}
            >
              <div className="w-full flex items-center justify-center rounded-xl bg-black-100 py-4">
                <img
                  className="w-20 h-20"
                  src={`/src/assets/icons/ic_${value.img}.svg`}
                  alt=""
                />
              </div>
              <div className="flex flex-col">
                <p className="text-gray-500 text-base font-bold">
                  {value.title}
                </p>
                <p className="text-gray-300 text-sm font-light">
                  {value.subtitle}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <CustomButton label={texts.buttonLabel} />
    </div>
  );
};
