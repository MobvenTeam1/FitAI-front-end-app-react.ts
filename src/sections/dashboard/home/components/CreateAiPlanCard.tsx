import React, { useState } from "react";
import { CustomModal } from "../../../../components/customs/custom-modal";
import { CustomButton } from "../../../../components/customs/custom-button";
import { CreateAiSupportPlanValue } from "../context/HomeContext";

type Props = {
  img: string;
  title: string;
  subtitle: string;
  isLast?: boolean;
  form: JSX.Element;
  isSelected: boolean;
  onSelect: () => void;
  selectedCard: CreateAiSupportPlanValue,
};

export const CreateAiPlanCard: React.FC<Props> = ({
  img,
  title,
  subtitle,
  isLast,
  selectedCard,
  isSelected,
  onSelect,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <>
      <div
        onClick={onSelect}
        className={`w-full flex items-center gap-2 p-4 cursor-pointer border ${
          isSelected ? "border-green-500" : "border-gray-50"
        } shadow-sm rounded-xl`}
      >
        <img src={`/frames/frame_${img}.png`} alt="" />
        <div className="flex flex-col gap-2">
          <p className="text-base font-bold">{title}</p>
          <p className="text-gray-300 text-sm">{subtitle}</p>
        </div>
      </div>

      {isLast && (
        <div className="mt-6">
          <CustomButton type="button" label="Sonraki" onClick={handleOpen} />
        </div>
      )}

      <CustomModal isOpen={isOpen} onClose={handleClose}>
        {selectedCard.form}
      </CustomModal>
    </>
  );
};
