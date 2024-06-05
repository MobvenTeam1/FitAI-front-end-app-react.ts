import React from "react";
import { TrackCardValue } from "../context/types";
import DinamicSectionRender from "./dinamicSectionRender";

const PersonifyView: React.FC = () => {
  const trackCardValues: TrackCardValue[] = [
    { title: "Kişisel Bilgiler", icon: "personal-info.svg", type: "route" },
    { title: "Beslenme Planı", icon: "nutrition-plan.svg", type: "route" },
    { title: "Antrenman Planı", icon: "training-plan.svg", type: "route" },
    { title: "Kalori Takibi", icon: "calory-tracking.svg", type: "route" },
    { title: "Su Takibi", icon: "water-tracking.svg", type: "route" },
  ];

  return (
    <DinamicSectionRender
      headerTitle="Kişiselleştir"
      values={trackCardValues}
    />
  );
};
export default PersonifyView;
