import React, { useContext } from "react";
import { HomeContext } from "../context/HomeContext";
import { CreatePlan } from "../../../../components/CreatePlan";

export const CreatePlanView: React.FC = () => {
  const { createPlanValues } = useContext(HomeContext);

  return (
    <>
      {createPlanValues.map((plan, index) => (
        <div key={index} className="col-span-6">
          <CreatePlan {...plan} />
        </div>
      ))}
    </>
  );
};
