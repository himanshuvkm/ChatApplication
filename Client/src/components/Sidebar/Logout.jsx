import React from "react";
import useLogout from "../../Hooks/uselogout";
import { LogOut } from "lucide-react";

const LogoutButton = () => {
  const { loading, logout } = useLogout();

  return (
    <div className="mt-auto">
      <button
        onClick={logout}
        disabled={loading}
        className="flex items-center justify-center"
        aria-label="Logout"
      >
        {!loading ? (
          <LogOut className="w-6 h-6 text-white cursor-pointer" />
        ) : (
          <span className="w-5 h-5 border-2 border-t-transparent border-white rounded-full animate-spin"></span>
        )}
      </button>
    </div>
  );
};

export default LogoutButton;
