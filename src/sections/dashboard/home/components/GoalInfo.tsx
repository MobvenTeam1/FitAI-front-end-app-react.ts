import SvgColor from "../../../../components/svg-color";

type GoalInfoProps = {
  icon: string;
  title: string;
  value: string;
};

export const GoalInfo: React.FC<GoalInfoProps> = ({ icon, title, value }) => {
  return (
    <div className="flex flex-col gap-2.5 p-3 rounded-xl border border-gray-50 shadow">
      <div className="flex justify-end">
        <div className="bg-green-100 text-green-700 w-10 h-10 rounded-full flex items-center justify-center">
          <SvgColor src={`/icons/ic_${icon}.svg`} width={20} height={20} />
        </div>
      </div>
      <div className="flex flex-col gap-2 px-2">
        <p className="text-gray-300 text-base font-semibold">{title}</p>
        <p className="text-gray-500 font-bold text-xl">{value} <span className="text-base">kcal</span></p>
      </div>
    </div>

    
  );
};
