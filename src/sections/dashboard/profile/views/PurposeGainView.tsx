import React from "react";

const PurposeGainView: React.FC = () => {
  return (
    <div className="border border-gray-50 shadow flex flex-col justify-center items-center gap-8 rounded-xl px-9 py-11">
      <div className="flex flex-col items-center justify-center gap-3 max-w-40">
        <div className="text-center">
          <p className="text-gray-900 font-semibold text-2xl">Jane Doe</p>
          <p className="text-gray-300 text-xs">5 Mayıs 2024’ten beri üye</p>
        </div>
        <img
          className="border border-gray-50 rounded-full w-24 h-24"
          src="/src/assets/frames/user.png"
          alt="purpose-gain"
        />
        <p className="text-xs text-gray-300 text-center">
          Allowed *.jpeg, *.jpg, *.png, *.gif Max size of 3.1 MB
        </p>
      </div>
      <div className="flex flex-col gap-4 w-full">
        <div className="w-full flex justify-between items-center text-gray-900 font-semibold text-base">
          <p>Hedef</p>
          <p>Kilo Verme, Kas Yapma</p>
        </div>

        <div className="w-full h-px bg-gray-300" />
        <div className="w-full flex justify-between items-center text-gray-900 font-semibold text-base">
          <p>Hedef</p>
          <div className="flex gap-1 items-center">
            {[1, 2, 3, 4, 5].map((item, index) => (
              <div
                key={index}
                className="bg-gray-50 w-8 h-8 rounded-full flex items-center justify-center"
              >
                <p className="text-sm">+{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default PurposeGainView;
