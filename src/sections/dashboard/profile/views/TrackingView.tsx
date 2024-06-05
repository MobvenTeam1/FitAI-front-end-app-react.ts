import React from "react";
import DinamicSectionRender from "./dinamicSectionRender";
import { TrackCardValue } from "../context/types";

const TrackingView: React.FC = () => {
  const trackCardValues: TrackCardValue[] = [
    {
      title: "Kilo Güncellemesi",
      icon: "calory-tracking.svg",
      type: "route",
      infoText: "Açık",
    },
    {
      title: "Su Tüketim",
      icon: "water-tracking.svg",
      type: "route",
      infoText: "Kapalı",
    },
    {
      title: "Adım",
      icon: "footsteps.svg",
      type: "route",
      infoText: "Kapalı",
    },
  ];

  return <DinamicSectionRender headerTitle="Takip" values={trackCardValues} />;
};
export default TrackingView;
