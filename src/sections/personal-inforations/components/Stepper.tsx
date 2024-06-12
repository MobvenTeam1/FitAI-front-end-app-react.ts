import { useContext } from "react";
import { PersonalInformationsContext } from "../context/PersonalInformationsContext";
import { useRouter } from "../../../hooks/useRouter";
import { paths } from "../../../routes/paths";
import { PersonalValue } from "../values/types";


type TypeName = {
  values: PersonalValue[];
};

export const Stepper: React.FC<TypeName> = ({ values }) => {
  const router = useRouter();
  const { step, backwardStep } = useContext(PersonalInformationsContext);

  const widthPercentage = ((step + 1) / values.length) * 100;

  return (
    <div className="flex flex-col gap-2">
      <div className="w-full h-1 bg-black-50 overflow-hidden rounded-lg">
        <div
          style={{ width: `${widthPercentage}%` }}
          className={`h-full bg-green-500 text-gray-800 rounded-lg`}
        ></div>
      </div>
      <div className="flex items-center justify-between">
        {step > 0 && (
          <button
            type="button"
            onClick={() =>
              step === 0
                ? router.push(`/${paths.auth.root}/${paths.auth.register}`)
                : backwardStep()
            }
          >
            <img src="/src/assets/icons/ic_arrow-left.svg" className="w-6 h-6" alt="" />
          </button>
        )}
        <div className={`text-sm font-bold text-end ${step === 0 && "w-full"}`}>
          {step + 1}/{values.length}
        </div>
      </div>
    </div>
  );
};
