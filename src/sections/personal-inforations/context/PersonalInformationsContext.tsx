import React, { createContext, useState } from "react";

// Define the shape of the context
interface PersonalInformation {
  step: number;
  setStep: (value: number) => void;
  handleSetStep: (value: number) => void;
  forwardStep: () => void;
  backwardStep: () => void;
}

// Create the context with default values
export const PersonalInformationsContext = createContext<PersonalInformation>({
  step: 0,
  setStep: () => {},
  handleSetStep: () => {},
  forwardStep: () => {},
  backwardStep: () => {},
});

// Define the properties for the provider component
interface ChildrenProps {
  children: React.ReactNode;
}

// Create the provider component
export const PersonalInformationsContextProvider: React.FC<ChildrenProps> = ({
  children,
}) => {
  const [step, setStep] = useState(0);

  const handleSetStep = (value: number) => {
    setStep(value);
  };

  const forwardStep = () => {
    setStep(step + 1);
  };

  const backwardStep = () => {
    setStep(step - 1);
  };

  return (
    <PersonalInformationsContext.Provider
      value={{ step, setStep, handleSetStep, forwardStep, backwardStep }}
    >
      {children}
    </PersonalInformationsContext.Provider>
  );
};
