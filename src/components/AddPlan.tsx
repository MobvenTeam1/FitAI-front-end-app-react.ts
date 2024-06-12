import React from "react";
import SvgColor from "./svg-color";
import { useRouter } from "../hooks/useRouter";

type Props = {
  icon: string;
  title: string;
  path: string;
};

export const AddPlan: React.FC<Props> = ({ icon, title, path }) => {
  const router = useRouter();

  return (
    <>
      <button
        onClick={() => router.push(path)}
        className="py-3 border border-gray-50 shadow rounded-xl w-full flex items-center justify-center gap-2"
      >
        <SvgColor src={`/src/assets/icons/ic_${icon}.svg`} width={20} height={20} />
        <p className="text-gray-500 text-base font-bold">{title}</p>
      </button>
    </>
  );
};
