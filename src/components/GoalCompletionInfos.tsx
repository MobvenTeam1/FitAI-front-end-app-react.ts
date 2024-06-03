import React from "react";

type Props = {
  title: string;
  value: string;
  isEnd?: boolean;
};

export const GoalCompletionInfos: React.FC<Props> = ({
  title,
  value,
  isEnd,
}) => {
  return (
    <div className={`py-4 px-12 text-center ${!isEnd && "border-e border-gray-50"}`}>
      <p className="font-bold text-lg text-gray-900">{value}</p>
      <p className="text-sm text-gray-400 font-medium">{title}</p>
    </div>
  );
};
