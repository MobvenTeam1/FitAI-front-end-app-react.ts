import React from "react";

type TabValue = {
  id: number;
  title: string;
  value?: string;
};


type Props = {
  values: TabValue[];
  selectedTab: TabValue;
  onClick: (value: TabValue) => void;
};

export const CustomTabs: React.FC<Props> = ({
  values,
  selectedTab,
  onClick,
}) => {
  return (
    <div className="w-full rounded-xl border text-base font-semibold border-gray-50 shadow flex items-center justify-between">
      {values.map((value) => (
        <button
          key={value.id}
          className={`w-full py-4 px-8 rounded-xl ${
            selectedTab.id === value.id
              ? "bg-green-500 text-gray-900"
              : "text-gray-300"
          }`}
          onClick={() => onClick(value)}
        >
          {value.title}
        </button>
      ))}
    </div>
  );
};
