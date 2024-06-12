import { useContext } from "react";
import SvgColor from "./svg-color";
import { CustomModal } from "./customs/custom-modal";
import { HomeContext } from "../sections/dashboard/home/context/HomeContext";
import { CreatePlanValue } from "../sections/dashboard/home/context/types";

export const CreatePlan: React.FC<CreatePlanValue> = ({
  icon,
  title,
  form,
  modalId,
}) => {
  const { modalStates, handleCloseModal, handleOpenModal } =
    useContext(HomeContext);

  return (
    <div
      className="flex items-center rounded-xl overflow-hidden w-full h-28"
      onClick={() => handleOpenModal(modalId)}
    >
      <div className="bg-green-500 pl-8 h-full text-gray-900 flex items-center justify-center">
        <SvgColor src={`/src/assets/icons/ic_${icon}.svg`} width={44} height={44} />
      </div>

      <div className="relative w-full h-full rounded-e-xl overflow-hidden">
        <div className="absolute left-0 top-0 bg-green-500 w-12 h-full rounded-e-full" />

        <p className="cursor-pointer bg-green-700 w-full h-full p-4 ps-20 flex justify-center gap-1 items-center text-base font-bold text-white">
          {title} Planı Oluştur <SvgColor src={`/src/assets/icons/ic_arrow-right.svg`} />
        </p>
      </div>

      <CustomModal
        isOpen={modalStates[modalId]}
        onClose={() => handleCloseModal(modalId)}
      >
        {/* {form} */}
        {form}
      </CustomModal>
    </div>
  );
};
