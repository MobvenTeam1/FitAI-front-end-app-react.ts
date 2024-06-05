import React from "react";
import { TrackCardValue } from "../context/types";
import DinamicSectionRender from "./dinamicSectionRender";

const LegalView: React.FC = () => {
  const trackCardValues: TrackCardValue[] = [
    { title: "Kullanım Şartları", icon: "usage-conditions.svg", type: "route" },
    {
      title: "Gizlilik Politikası",
      icon: "privace-policy.svg",
      type: "route",
    },
  ];

  return <DinamicSectionRender headerTitle="Yasal" values={trackCardValues} />;
};
export default LegalView;
