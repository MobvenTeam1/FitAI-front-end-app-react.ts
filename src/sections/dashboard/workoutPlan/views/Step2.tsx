import React, { useEffect, useState } from "react";
import SvgColor from "../../../../components/svg-color";

const MusicPlayer: React.FC = () => {
  const [audio] = useState(new Audio("/music/Lose-Yourself.mp3"));
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    isPlaying ? audio.play() : audio.pause();
  }, [isPlaying, audio]);

  const toggleMusic = () => setIsPlaying(!isPlaying);

  return (
    <div className="absolute bottom-8 bg-white rounded-xl flex items-center justify-between w-11/12 py-4 px-6 gap-2 transition ease-in-out delay-150 duration-300">
      <div className="flex items-center gap-2">
        <img
          className="w-14 h-14 rounded-xl"
          src="/frames/frame_eminem.svg"
          alt=""
        />
        <div>
          <p className="text-base font-bold">Lose Yourself</p>
          <p className="text-xs text-gray-300">45 Dakika</p>
        </div>
      </div>
      <div className="flex items-center gap-5">
        <SvgColor src={`/icons/ic_play-back.svg`} width={20} height={20} />
        <div
          className="cursor-pointer flex items-center justify-center"
          onClick={toggleMusic}
        >
          <SvgColor
            src={`/icons/ic_${isPlaying ? "pause" : "play"}.svg`}
            width={28}
            height={28}
          />
        </div>
        <SvgColor src={`/icons/ic_play-forward.svg`} width={20} height={20} />
      </div>
    </div>
  );
};

type ConfirmationBannerProps = {
  message: string;
};

const ConfirmationBanner: React.FC<ConfirmationBannerProps> = ({ message }) => (
  <div className="absolute bottom-8 bg-green-500 rounded-xl flex items-center justify-center w-11/12 p-3 gap-2 text-black-900 transition ease-in-out delay-150 duration-300">
    <SvgColor src={`/icons/ic_check-double.svg`} width={24} height={24} />
    <p className="text-base">{message}</p>
  </div>
);

type DetailItemProps = {
  icon: string;
  text: string;
};

const DetailItem: React.FC<DetailItemProps> = ({ icon, text }) => (
  <div className="w-full rounded-xl px-4 py-2 gap-2 flex items-center backdrop-blur-2xl">
    <SvgColor src={`/icons/${icon}`} width={16} height={16} />
    <p className="text-base">{text}</p>
  </div>
);

const WorkoutDetails: React.FC = () => (
  <div className="flex flex-col gap-4 text-white">
    <p className="font-bold text-4xl">Koşu Antrenmanı</p>
    <div className="flex items-center gap-3 px-1">
      <DetailItem icon="ic_clock.svg" text="45 Dakika" />
      <DetailItem icon="ic_fire-union.svg" text="155 Kalori" />
    </div>
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
    className={`p-2.5 cursor-pointer ${active ? "rounded-xl bg-green-500 p-6" : ""}`}
  >
    <SvgColor src={`/icons/${src}`} width={32} height={32} />
  </div>
);

type ControlPanelProps = {
  handleStartWorkout: () => void;
};

const ControlPanel: React.FC<ControlPanelProps> = ({ handleStartWorkout }) => (
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

const Step2: React.FC = () => {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
    setShowConfirmation(true);
    setTimeout(() => setShowConfirmation(false), 3000);
  };

  const [showWorkoutDetails, setShowWorkoutDetails] = useState(true);
  const [countdown, setCountdown] = useState(3);
  const [isWorkoutStarted, setIsWorkoutStarted] = useState(false);

  useEffect(() => {
    let intervalId: number | undefined;
    if (countdown > 0 && !showWorkoutDetails) {
      intervalId = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000);
    } else if (countdown === 0) {
      setIsWorkoutStarted(true);
      clearInterval(intervalId);
    }
    return () => clearInterval(intervalId);
  }, [countdown, showWorkoutDetails]);

  const handleStartWorkout = () => {
    setShowWorkoutDetails(false);
    setCountdown(3);
    setIsWorkoutStarted(false);
  };

  return (
    <div>
      <div className="relative w-full h-[525px] rounded-xl bg-[url('/frames/frame_hiit.svg')] bg-cover bg-center flex items-center justify-center">
        <div
          className="rounded-xl p-1 backdrop-blur-3xl shadow border text-white border-gray-50 absolute top-8 left-8 cursor-pointer flex items-center justify-center"
          onClick={toggleFavorite}
        >
          <SvgColor
            src={`/icons/ic_${isFavorite ? "heart-full" : "heart"}.svg`}
            width={24}
            height={24}
          />
        </div>

        <MusicPlayer />

        {showConfirmation && (
          <ConfirmationBanner message="Favori Antrenmanlarına Eklendi" />
        )}

        {showWorkoutDetails && <WorkoutDetails />}

        {!showWorkoutDetails && countdown > 0 && (
          <div className="font-bold text-green-500 italic text-9xl">
            {countdown}
          </div>
        )}
        {isWorkoutStarted && <div>Another Div</div>}
      </div>

      <ControlPanel handleStartWorkout={handleStartWorkout} />
    </div>
  );
};

export default Step2;
