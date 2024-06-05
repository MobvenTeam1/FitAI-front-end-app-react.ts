import React from "react";
import { TrackCardValue } from "../context/types";
import TrackCard from "../../../../components/TrackCard";

type dinamicSectionRenderProps = {
  headerTitle: string;
  values: TrackCardValue[];
};

const DinamicSectionRender: React.FC<dinamicSectionRenderProps> = ({
  headerTitle,
  values,
}) => {
  return (
    <div className="flex flex-col gap-3 border border-gray-50 shadow rounded-xl p-6">
      <h2 className="text-lg font-semibold text-gray-900 p-3">{headerTitle}</h2>
      <div className="flex flex-col gap-3">
        {values.map((item, index) => (
          <TrackCard key={index + item.title} {...item} />
        ))}
      </div>
    </div>
  );
};
export default DinamicSectionRender;
