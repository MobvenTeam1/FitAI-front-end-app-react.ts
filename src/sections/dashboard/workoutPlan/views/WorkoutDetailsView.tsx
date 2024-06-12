import SvgColor from "../../../../components/svg-color";

type DetailItemProps = {
  icon: string;
  text: string;
};

const DetailItem: React.FC<DetailItemProps> = ({ icon, text }) => (
  <div className="w-full rounded-xl px-4 py-2 gap-2 flex items-center backdrop-blur-2xl">
    <SvgColor src={`/src/assets/icons/${icon}`} width={16} height={16} />
    <p className="text-base">{text}</p>
  </div>
);

const WorkoutDetailsView: React.FC = () => (
  <div className="flex flex-col gap-4 text-white">
    <p className="font-bold text-4xl">Koşu Antrenmanı</p>
    <div className="flex items-center gap-3 px-1">
      <DetailItem icon="ic_clock.svg" text="45 Dakika" />
      <DetailItem icon="ic_fire-union.svg" text="155 Kalori" />
    </div>
  </div>
);

export default WorkoutDetailsView;
