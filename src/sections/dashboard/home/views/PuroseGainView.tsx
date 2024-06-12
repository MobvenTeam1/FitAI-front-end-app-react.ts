import React from "react";

export const PuroseGainView: React.FC = () => {
  return (
    <div className="relative flex flex-col gap-8 bg-green-500 rounded-xl px-6 py-8 mt-16">
      <div className="absolute top-0 left-0 right-0 transform -translate-y-1/3 flex flex-col items-center justify-center gap-3">
        <img
          className="border border-gray-50 rounded-full w-24 h-24"
          src="/src/assets/frames/user.png"
          alt="purpose-gain"
        />
        <div className="text-center">
          <p className="text-gray-900 font-semibold text-2xlx">Jane Doe</p>
          <p className="text-gray-300 text-xs">5 Mayıs 2024’ten beri üye</p>
        </div>
      </div>
      <div className="flex flex-col gap-4 mt-24">
        <div className="w-full flex justify-between items-center text-gray-900 font-semibold text-base">
          <p>Hedef</p>
          <p>Kilo Verme, Kas Yapma</p>
        </div>

        <div className="w-full h-px bg-green-300" />
        <div className="w-full flex justify-between items-center text-gray-900 font-semibold text-base">
          <p>Hedef</p>
          <div className="flex gap-1 items-center">
            {[1, 2, 3, 4, 5].map((item, index) => (
              <div
                key={index}
                className="bg-green-100 w-8 h-8 rounded-full flex items-center justify-center"
              >
                <p>+{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
