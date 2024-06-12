import React, { useContext } from "react";
import { WorkoutPlanContext } from "../context/WorkoutPlanContext";
import SvgColor from "../../../../components/svg-color";

const FavoriteIconView: React.FC = () => {
  const { toggleFavorite, isFavorite } = useContext(WorkoutPlanContext);

  return (
    <div
      className="rounded-xl p-1 backdrop-blur-3xl shadow border text-white border-gray-50 absolute top-8 left-8 cursor-pointer flex items-center justify-center"
      onClick={toggleFavorite}
    >
      <SvgColor
        src={`/src/assets/icons/ic_${isFavorite ? "heart-full" : "heart"}.svg`}
        width={24}
        height={24}
      />
    </div>
  );
};

export default FavoriteIconView;
