import React from "react";

const WorkoutDetail: React.FC = () => {
  const tempDetail = [
    {
      id: 1,
      desc: "Öncesinde 3 dakikalık ısınma hareketi, sonrasında 3 dakikalık bir soğuma hareketi kaslarının çalışmasına yardımcı olacaktır. ",
    },
    {
      id: 2,
      desc: "Koşu boyunca 5 dakika yüksek tempo 5 dakika düşük tempo koşu yapmak başlangıç seviyesi için sana yardımcı olacaktır.",
    },
  ];
  return (
    <div className="border border-gray-50 shadow rounded-xl p-6 flex flex-col gap-6">
      <p className="font-bold text-lg">Koşu Detayı</p>
      <div className="flex flex-col gap-3">
        {tempDetail.map((item) => (
          <div key={item.id} className="flex items-center gap-3">
            <div className="w-px h-px bg-gray-300 rounded-full"></div>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default WorkoutDetail;
