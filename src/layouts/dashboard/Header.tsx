import React, { useContext } from "react";
import { TodayDate, fDate } from "../../utils/format-time";
import { Racoon } from "./Racoon";
import SvgColor from "../../components/svg-color";
import { AuthContext } from "../../auth/AuthContext";

export const Header: React.FC = () => {
  const { user } = useContext(AuthContext);
  console.log(user);

  return (
    <div className="flex justify-between items-center">
      <p className="text-gray-900 text-3xl font-bold">
        Merhaba! {user?.firstName} {user?.lastName}
      </p>
      <div className="flex items-center gap-5">
        <div className="flex items-center justify-center gap-2.5 p-3 border border-gray-50 shadow rounded-xl">
          <img
            src="/src/assets/icons/ic_calendar.svg"
            className="w-4 h-4"
            alt=""
          />
          <p className="font-semibold text-sm">{fDate(TodayDate)}</p>
        </div>
        <div className="border border-gray-50 shadow rounded-xl p-2.5">
          <img
            className="w-6 h-6"
            src="/src/assets/icons/ic_notification.svg"
            alt=""
          />
        </div>
        <Racoon />
        {/* <div className="w-10 h-10 rounded-full bg-gray-100"></div> */}
        <img src="/src/assets/frames/user.png" className="w-10 h-10 rounded-xl" alt="" />
        <div className="flex items-center justify-center gap-1 py-2 px-5 bg-black rounded-xl font-semibold text-green-500">
          <SvgColor
            src="/src/assets/icons/ic_logo.svg"
            width={16}
            height={19}
          />
          <p>FitBot</p>
        </div>
      </div>
    </div>
  );
};
