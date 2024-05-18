type AuthHeaderProps = {
  title?: string;
  subtitle?: string;
};

export const AuthHeader: React.FC<AuthHeaderProps> = ({ title, subtitle }) => {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-4xl font-semibold">{title}</h2>
      <h4 className="text-base text-gray-500">{subtitle}</h4>
    </div>
  );
};
