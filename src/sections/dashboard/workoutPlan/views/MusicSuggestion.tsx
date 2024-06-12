const MusicSuggestion: React.FC = () => {
  return (
    <div className="shadow border border-gray-50 rounded-xl p-6 flex flex-col gap-6">
      <p className="font-bold text-lg">Müzik Önerisi</p>
      <div className="flex flex-col gap-3">
        <p className="text-abse font-medium">
          Önceki koşularında seni en motive eden playlistle koşmaya başla
        </p>
        <div className="shadow rounded-lg border border-gray-50 py-4 px-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img
              className="w-10 h-10 rounded-lg"
              src="/src/assets/frames/music-frame.svg"
              alt=""
            />
            <div className="flex flex-col">
              <p className="font-semibold text-base text-gray-900">
                Run To Love
              </p>
              <p className="text-sm text-gray-300">Spotify</p>
            </div>
          </div>
          <div className="rounded-lg p-1.5 bg-green-500 cursor-pointer">
            <img className="w-6 h-6" src="/src/assets/icons/ic_music.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicSuggestion;
