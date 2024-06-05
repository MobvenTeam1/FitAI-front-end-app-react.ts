import React from "react";
import DinamicSectionRender from "./dinamicSectionRender";
import { TrackCardValue } from "../context/types";

const LinkedAccountsView: React.FC = () => {
  const trackCardValues: TrackCardValue[] = [
    { title: "Apple Health", icon: "apple-heart.png", type: "route" },
    { title: "Google Calender", icon: "google-calendar.png", type: "route" },
    { title: "Watch", icon: "watch.svg", type: "route" },
  ];
  return (
    <DinamicSectionRender
      headerTitle="Bağlantılı Hesaplar"
      values={trackCardValues}
    />
  );
};
export default LinkedAccountsView;
