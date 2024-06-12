import { useContext } from "react";
import { AuthContext } from "../../auth/AuthContext";
import SvgColor from "../../components/svg-color";

export const Logout: React.FC = () => {
  const { logout } = useContext(AuthContext);

  return (
    <button
      onClick={logout}
      className="flex items-center gap-4 p-4 mx-6 rounded-md text-sm font-semibold text-gray-900"
    >
      <SvgColor src={`/src/assets/icons/ic_logout.svg`} width={20} height={20} />
      Çıkış Yap
    </button>
  );
};
