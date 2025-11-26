import React from "react";
import useLogout from "../../Hooks/uselogout";
import { LogOut } from "lucide-react";

const LogoutButton = () => {
  const { loading, logout } = useLogout();

  return (
    <div className="mt-auto pt-4 border-t border-gray-200">
      <button
        onClick={logout}
        disabled={loading}
        className="flex items-center justify-center w-full py-2.5 px-4 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
        aria-label="Logout"
      >
        {!loading ? (
          <>
            <LogOut className="w-5 h-5 mr-2" />
            <span className="text-sm font-medium">Logout</span>
          </>
        ) : (
          <span className="w-5 h-5 border-2 border-t-transparent border-gray-400 rounded-full animate-spin"></span>
        )}
      </button>
    </div>
  );
};
export default LogoutButton;
