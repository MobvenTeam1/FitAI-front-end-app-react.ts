type LoginOption = {
  id: number;
  name: string;
  icon: string;
};

const loginOptions: LoginOption[] = [
  {
    id: 1,
    name: "Facebook",
    icon: "/icons/ic_facebook.svg",
  },
  {
    id: 2,
    name: "Google",
    icon: "/icons/ic_google.svg",
  },
  {
    id: 3,
    name: "Apple",
    icon: "/icons/ic_apple.svg",
  },
];

export const AuthSocial: React.FC = () => {
  return (
    <>
      <div className="flex items-center justify-between">
        <div className="w-full h-0.125 bg-gray-50" />
        <p className="text-base text-gray-300 font-semibold text-nowrap mx-4">
          Veya Şununla Giriş Yapın
        </p>
        <div className="w-full h-0.125 bg-gray-50" />
        <div />
      </div>
      <div className="flex items-center gap-4 w-full">
        {loginOptions.map((option) => (
          <div
            key={`${option.id}${option.name}`}
            className="flex items-center justify-center py-4 w-full cursor-pointer border border-gray-50 rounded-lg "
          >
            <img
              className="w-6 h-6 select-none"
              src={option.icon}
              alt={option.name}
            />
          </div>
        ))}
      </div>
    </>
  );
};
