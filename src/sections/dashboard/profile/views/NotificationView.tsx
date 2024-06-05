import React from "react";
import { TrackCardValue } from "../context/types";
import DinamicSectionRender from "./dinamicSectionRender";

const NotificationView: React.FC = () => {
  const trackCardValues: TrackCardValue[] = [
    { title: "Görev Anımsatıcısı", icon: "alarm.svg", type: "action" },
    {
      title: "Motivasyon Bildirimi",
      icon: "motivation-rise.svg",
      type: "action",
    },
    { title: "Gün Sonu Özeti", icon: "notes.svg", type: "action" },
  ];

  return (
    <DinamicSectionRender headerTitle="Bildirimler" values={trackCardValues} />
  );
};
export default NotificationView;
