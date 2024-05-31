import React from "react";
import { TodayDate, fDate } from "../../utils/format-time";
import { Racoon } from "./Racoon";
import SvgColor from "../../components/svg-color";

export const Header: React.FC = () => {
  const today = new Date();
  return (
    <div className="flex justify-between items-center">
      <div>
        <p className="text-gray-900 text-3xl font-bold">
          Merhaba! Göktuğ Murat Demir
        </p>
        <p className="text-gray-400 text-base">{fDate(today)}</p>
      </div>
      <div className="flex items-center gap-5">
        <div className="flex items-center justify-center gap-2.5 p-3 border border-gray-50 shadow rounded-xl">
          <img src="/icons/ic_calendar.svg" className="w-4 h-4" alt="" />
          <p className="font-semibold text-sm">{fDate(TodayDate)}</p>
        </div>
        <div className="border border-gray-50 shadow rounded-xl p-2">
          <img className="w-6 h-6" src="/icons/ic_notification.svg" alt="" />
        </div>
        <Racoon />
        {/* <div className="w-10 h-10 rounded-full bg-gray-100"></div> */}
        <img src="/frames/user.png" className="w-10 h-10 rounded-xl" alt="" />
        <div className="flex items-center justify-center gap-1 px-5 py-3 bg-black rounded-xl font-semibold text-green-500">
          <SvgColor src="/icons/ic_logo.svg" width={16} height={19} />
          <p>FitBot</p>
        </div>
      </div>
    </div>
  );
};
