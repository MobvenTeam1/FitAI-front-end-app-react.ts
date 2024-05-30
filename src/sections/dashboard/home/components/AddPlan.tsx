import React, { useState } from "react";
import SvgColor from "../../../../components/svg-color";
import { CustomModal } from "../../../../components/customs/custom-modal";

type Props = {
  icon: string;
  title: string;
  form?: JSX.Element;
};

export const AddPlan: React.FC<Props> = ({ icon, title, form }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button
        onClick={handleOpen}
        className="py-3 border border-gray-50 shadow rounded-xl w-full flex items-center justify-center gap-2"
      >
        <SvgColor src={`/icons/ic_${icon}.svg`} width={20} height={20} />
        <p className="text-gray-500 text-base font-bold">{title}</p>
      </button>
      <CustomModal isOpen={isOpen} onClose={handleClose}>
        {form}
      </CustomModal>
    </>
  );
};
