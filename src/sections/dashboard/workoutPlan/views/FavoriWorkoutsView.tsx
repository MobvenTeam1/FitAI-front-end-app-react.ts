import React from "react";
import { AddOptionCard } from "../../../../components/AddOptionCard";

const FavoriWorkoutsView: React.FC = () => {
  return (
    <div className="flex flex-col gap-3">
      <p className="font-bold text-lg">Favori Antrenmanlar</p>
      <div className="flex flex-col gap-2">
        {tempValues.map((option, index) => (
          <AddOptionCard key={index + option.title} option={option} />
        ))}
      </div>
    </div>
  );
};

const tempValues = [
  {
    id: 1,
    title: "Yürüyüş",
    img: "walking",
    subtitle: "Düşük Tempo - 1 saatte 65 kcal",
    type: "favorite",
  },
  {
    id: 2,
    title: "Koşu",
    img: "running",
    subtitle: "1 saatte 178 kcal",
    type: "old",
  },
  {
    id: 3,
    title: "Bisiklet",
    img: "dumbell",
    subtitle: "1 saatte 200 kcal",
    type: "old",
  },
  {
    id: 4,
    title: "Yüzme",
    img: "plates",
    subtitle: "1 saatte 300 kcal",
    type: "favorite",
  },
];
export default FavoriWorkoutsView;
