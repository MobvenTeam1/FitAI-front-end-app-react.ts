import React, { useState } from "react";
import SvgColor from "./svg-color";
import { CustomModal } from "./customs/custom-modal";

type Props = {
  option: Option;
  updateTypeById?: (id: number) => void;
  modalForm?: React.ReactNode;
};

interface Option {
  id: number;
  title: string;
  img: string;
  subtitle: string;
  type?: string | undefined;
}

export const AddOptionCard: React.FC<Props> = ({
  option,
  updateTypeById,
  modalForm,
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
      <div className="flex items-center justify-between px-8 py-4 shadow rounded-xl border border-gray-50">
        <div className="flex items-center gap-2">
          <div className="bg-black-100 rounded-xl h-full p-2 flex items-center justify-center">
            {/* <SvgColor
              src={`/icons/ic_${option.img}.svg`}
              width={40}
              height={40}
            /> */}
            <img
              className="w-10 h-10"
              src={`/icons/ic_${option.img}.svg`}
              alt=""
            />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-base">{option.title}</span>
            <span className="text-gray-300 text-sm">{option.subtitle}</span>
          </div>
        </div>
        {modalForm && (
          <div className="flex items-center gap-3">
            <div
              onClick={() => updateTypeById && updateTypeById(option.id)}
              className="bg-black-100 rounded-full p-2 flex items-center justify-center cursor-pointer text-gray-900"
            >
              <SvgColor
                src={`/icons/ic_heart-${
                  option.type === "favorite" ? "full" : "empty"
                }.svg`}
                width={14}
                height={14}
              />
            </div>
            <div
              onClick={handleOpen}
              className="bg-black-100 rounded-full p-2 flex items-center justify-center cursor-pointer text-gray-900"
            >
              <SvgColor src="/icons/ic_added.svg" width={14} height={14} />
            </div>
          </div>
        )}
      </div>
      <CustomModal isOpen={isOpen} onClose={handleClose}>
        {modalForm}
      </CustomModal>
    </>
  );
};
