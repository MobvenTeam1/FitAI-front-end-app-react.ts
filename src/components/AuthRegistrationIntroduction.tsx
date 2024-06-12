interface ChildrenProps {
  children: React.ReactNode;
}

export const AuthRegistrationIntroduction: React.FC<ChildrenProps> = ({
  children,
}) => {
  return (
    <div className="p-0 md:ps-[50%] min-h-screen flex flex-col justify-center ">
      <div className="md:block w-[50%] h-screen fixed start-0 top-0 bg-[url(/src/assets/frames/auth-frame.png)] bg-cover bg-bottom hidden ">
        <div className="select-none flex items-center justify-center gap-5 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <img className="w-20 h-20" src="/logo/logo.svg" alt="" />
          <h1 className="text-8xl font-medium text-white">Fit<span className="font-black">AI</span></h1>
        </div>
      </div>

      {children}
    </div>
  );
};
