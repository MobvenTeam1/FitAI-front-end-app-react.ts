import { useContext } from "react";
import { AuthContext } from "../../auth/AuthContext";
import { CustomButton } from "../../components/customs/custom-button";

export const Logout: React.FC = () => {
  const { logout } = useContext(AuthContext);

  return (
    <div>
      <CustomButton onClick={logout} label="Logout" color="red" />
    </div>
  );
};
