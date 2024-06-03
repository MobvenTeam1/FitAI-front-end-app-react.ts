import React, { useContext, useState } from "react";
import { HomeContext } from "../sections/dashboard/home/context/HomeContext";
import { CustomModal } from "./customs/custom-modal";
import { AddPlanValues } from "./AddPlanValues";
import { OptionPersonalProgramDetail } from "../sections/dashboard/home/context/types";

type Props = {
  option: OptionPersonalProgramDetail;
};

export const PersonalPlanOptionItem: React.FC<Props> = ({ option }) => {
  const { suggestionRender } = useContext(HomeContext);

  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="bg-black-100 rounded-xl p-3">
            <img
              className="w-6 h-6"
              src={`/icons/ic_${option.optionImage}.svg`}
              alt=""
            />
          </div>
          <div>
            <p className="font-bold text-base">{option.optionTitle}</p>
            <p className="text-gray-300 text-sm">{option.optionSubtitle}</p>
          </div>
        </div>
        <div
          className="rounded-xl py-2 px-2.5 bg-green-500 cursor-pointer"
          onClick={handleOpen}
        >
          <img className="w-5 h-5" src="/icons/ic_stars.svg" alt="" />
        </div>
      </div>

      <CustomModal isOpen={isOpen} onClose={handleClose}>
        <AddPlanValues
          values={suggestionRender(option.type)}
          texts={{
            title: `AI ${
              option.type === "nutrition" ? "Besin" : "Egzersiz"
            } Önerileri`,
            subtitle: `${option.optionTitle} yerine ${
              option.type === "nutrition"
                ? "yiyebileceğiniz besinler"
                : "uygulayabileceğiniz egzersizler"
            }`,
            buttonLabel: `${
              option.type === "nutrition" ? "Besini" : "Egzersizi"
            } Güncelle`,
          }}
        />
      </CustomModal>
    </>
  );
};
