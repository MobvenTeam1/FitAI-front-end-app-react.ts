import SvgColor from "./svg-color";

interface ChildrenProps {
  children: React.ReactNode;
}

export const AuthRegistrationIntroduction: React.FC<ChildrenProps> = ({
  children,
}) => {
  return (
    <div className="p-0 md:ps-[50%] min-h-screen flex flex-col justify-center ">
      <div className="md:block w-[50%] h-screen fixed start-0 top-0 bg-[url(/src/assets/frames/auth-frame.png)] bg-cover bg-bottom hidden ">
        <div className="select-none flex items-center justify-center text-white gap-5 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <SvgColor src="/src/assets/logo/logo.svg" width={80} height={80} />

          <h1 className="text-8xl font-medium ">
            Fit<span className="font-black">AI</span>
          </h1>
        </div>
      </div>

      {children}
    </div>
  );
};
