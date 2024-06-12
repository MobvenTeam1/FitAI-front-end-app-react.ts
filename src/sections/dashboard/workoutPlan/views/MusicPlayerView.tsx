import SvgColor from "../../../../components/svg-color";
import { useEffect, useState } from "react";

const MusicPlayer: React.FC = () => {
  const [audio] = useState(new Audio("/src/assets/music/Lose-Yourself.mp3"));
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
        <SvgColor
          src={`/src/assets/icons/ic_play-back.svg`}
          width={20}
          height={20}
        />
        <div
          className="cursor-pointer flex items-center justify-center"
          onClick={toggleMusic}
        >
          <SvgColor
            src={`/src/assets/icons/ic_${isPlaying ? "pause" : "play"}.svg`}
            width={28}
            height={28}
          />
        </div>
        <SvgColor
          src={`/src/assets/icons/ic_play-forward.svg`}
          width={20}
          height={20}
        />
      </div>
    </div>
  );
};

export default MusicPlayer;
