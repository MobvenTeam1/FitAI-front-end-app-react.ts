import { useState } from "react";
import SvgColor from "../../../../components/svg-color";
import { CustomModal } from "../../../../components/customs/custom-modal";


type GoalInfoProps = {
  icon: string;
  title: string;
  form?: JSX.Element;
};

export const CreatePlan: React.FC<GoalInfoProps> = ({ icon, title, form }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <div
      className="flex items-center rounded-xl overflow-hidden w-full h-16"
      onClick={handleOpen}
    >
      <div className="bg-green-500 p-4 h-full text-gray-900 flex items-center justify-center">
        <SvgColor src={`/icons/ic_${icon}.svg`} />
      </div>

      <div className="relative w-full h-full rounded-e-xl overflow-hidden">
        <div className="absolute left-0 top-0 bg-green-500 w-8 h-full rounded-e-full" />

        <p className="bg-green-700 w-full h-full p-4 ps-12 flex justify-center gap-1 items-center text-base font-semibold text-white">
          {title} Planı Oluştur <SvgColor src={`/icons/ic_arrow-right.svg`} />
        </p>
      </div>

      <CustomModal isOpen={isOpen} onClose={handleClose}>
        {form}
      </CustomModal>
    </div>
  );
};
