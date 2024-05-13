import { useContext } from "react";
import { AuthContext } from "../../auth/AuthContext";

export const Account: React.FC = () => {
  const { logout } = useContext(AuthContext);

  return (
    <div>
      <button
        className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-700 hover:to-blue-500 text-white text-xs font-bold py-2 px-4 rounded shadow-lg transition-colors duration-200"
        onClick={logout}
      >
        Logout
      </button>
    </div>
  );
};
