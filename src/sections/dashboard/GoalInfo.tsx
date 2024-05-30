import SvgColor from "../../components/svg-color";

type GoalInfoProps = {
  icon: string;
  title: string;
  value: string;
};

export const GoalInfo: React.FC<GoalInfoProps> = ({ icon, title, value }) => {
  return (
    <div className="flex flex-col gap-2 p-2 rounded-xl border border-gray-50">
      <div className="bg-green-100 text-green-500 w-8 h-8 rounded-full flex items-center justify-center">
        <SvgColor src={`/icons/ic_${icon}.svg`} />
      </div>
      <div className="flex flex-col">
        <p className="text-gray-300 text-xs font-medium">{title}</p>
        <p className="text-gray-500 font-bold text-sm">{value} kcal</p>
      </div>
    </div>
  );
};
