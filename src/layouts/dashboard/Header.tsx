import React from "react";
import { fDate } from "../../utils/format-time";
import { Racoon } from "./Racoon";

export const Header: React.FC = () => {
  const today = new Date();
  return (
    <div className="flex justify-between">
      <div>
        <p className="text-gray-900 text-3xl font-bold">Merhaba Simge</p>
        <p className="text-gray-400 text-base">{fDate(today)}</p>
      </div>
      <div className="flex items-center gap-5">
        <Racoon />
        {/* <div className="w-10 h-10 rounded-full bg-gray-100"></div> */}
        <img src="/frames/user.png" className="w-10 h-10" alt="" />
      </div>
    </div>
  );
};
