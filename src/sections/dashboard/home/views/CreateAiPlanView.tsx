import React, { useContext, useState } from "react";
import SvgColor from "../../../../components/svg-color";
import { CustomModal } from "../../../../components/customs/custom-modal";
import { CreateAiSupportPlanValue, HomeContext } from "../context/HomeContext";
import { CreateAiPlanCard } from "../components/CreateAiPlanCard";

export const CreateAiPlanView: React.FC = () => {
  const { aiSupportPlanValues } = useContext(HomeContext);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState<CreateAiSupportPlanValue>(aiSupportPlanValues[0]);

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
        className="flex justify-center items-center gap-2.5 p-5 bg-green-500 rounded-xl text-gray-900 font-bold text-lg"
      >
        <span>AI Destekli Plan Oluştur</span>
        <SvgColor src="/icons/ic_stars.svg" width={20} height={20} />
      </button>
      <CustomModal isOpen={isOpen} onClose={handleClose}>
        <div className="h-full flex flex-col justify-center gap-6">
          <p className="text-3xl font-bold">AI Destekli Plan Ekle</p>
          <div className="w-full flex flex-col gap-2">
            {aiSupportPlanValues.map((plan, index) => (
              <CreateAiPlanCard
                key={index + plan.title}
                onSelect={() => setSelectedCard(plan)}
                selectedCard={selectedCard}
                isSelected={selectedCard?.id - 1 === index}
                isLast={aiSupportPlanValues.length - 1 === index}
                {...plan}
              />
            ))}
          </div>
        </div>
      </CustomModal>
    </>
  );
};
