import SvgColor from "../../../../components/svg-color";

type ControlPanelProps = {
  handleStartWorkout: () => void;
};

const ControlPanelView: React.FC<ControlPanelProps> = ({ handleStartWorkout }) => (
  <div className="border border-gray-50 shadow rounded-xl flex items-center justify-center p-6 pt-10 -mt-4 gap-12">
    <ControlIcon src="ic_ai-asistan.svg" />
    <ControlIcon src="ic_music.svg" />
    <ControlIcon
      src="ic_play.svg"
      active
      handleStartWorkout={handleStartWorkout}
    />
    <ControlIcon src="ic_cloud-download.svg" />
    <ControlIcon src="ic_settings.svg" />
  </div>
);

type ControlIconProps = {
  src: string;
  active?: boolean;
  handleStartWorkout?: () => void;
};

const ControlIcon: React.FC<ControlIconProps> = ({
  src,
  active = false,
  handleStartWorkout,
}) => (
  <div
    onClick={handleStartWorkout}
    className={`p-2.5 cursor-pointer ${
      active ? "rounded-xl bg-green-500 p-6" : ""
    }`}
  >
    <SvgColor src={`/icons/${src}`} width={32} height={32} />
  </div>
);

export default ControlPanelView;
