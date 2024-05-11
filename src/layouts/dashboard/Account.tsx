import React, { useEffect, useState } from "react";

export const Account: React.FC = () => {
  const [audio] = useState(new Audio("/pedro.mp3"));
  const [playing, setPlaying] = useState(false);
  const [active, setActive] = useState(false); // Add this line

  const toggle = () => {
    setPlaying(!playing);
    setActive(!active);
  };

  useEffect(() => {
    if (playing) {
      audio.currentTime = 0;
      audio.play();
    } else {
      audio.pause();
    }
  }, [audio, playing]);

  return (
    <div
      onClick={toggle}
      className={`overflow-hidden rounded-full cursor-pointer ${
        active ? "animate-spin" : ""
      } bg-[#efdeda]`}
    >
      <img
        src="/pedro.jpg"
        className={`transform scale-105 w-10 h-10 object-cover ${
          active ? "animate-bounce" : ""
        } bg-[#efdeda]`}
        alt=""
      />
    </div>
  );
};
