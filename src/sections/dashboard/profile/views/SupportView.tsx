import React from "react";
import DinamicSectionRender from "./dinamicSectionRender";
import { TrackCardValue } from "../context/types";

const SupportView: React.FC = () => {
  const trackCardValues: TrackCardValue[] = [
    { title: "Yardım Merkezi", icon: "question.svg", type: "route" },
    {
      title: "Güvenlik",
      icon: "security.svg",
      type: "route",
    },
    { title: "FitAI Nasıl Çalışır?", icon: "brain-think.svg", type: "route" },
    { title: "Geri Bildirimde Bulunun", icon: "note-pan.svg", type: "route" },
  ];

  return (
    <DinamicSectionRender headerTitle="Destek" values={trackCardValues} />
  );
};
export default SupportView;
