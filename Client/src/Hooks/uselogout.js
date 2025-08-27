import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContetx";
import toast from "react-hot-toast";

const useLogout = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();
  const navigate = useNavigate();

  const logout = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/auth/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include", // ✅ important if you're using cookies
      });

      const data = await res.json();

      if (data.error) {
        throw new Error(data.error);
      }

      // ✅ Clear storage & context
      localStorage.removeItem("user");
      setAuthUser(null);

      toast.success("Logged out successfully 👋");
      navigate("/login");
    } catch (error) {
      toast.error(error.message || "Logout failed");
    } finally {
      setLoading(false);
    }
  };

  return { loading, logout };
};

export default useLogout;
