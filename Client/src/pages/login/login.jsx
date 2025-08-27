import React, { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../Hooks/useLogin";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const {loading, login} = useLogin();

    const handleSubmit = async(e) => {
        e.preventDefault();
        await login(username, password);
    };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4">
      <div className="w-full max-w-xl p-10 rounded-2xl shadow-lg bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10">
        <h1 className="text-4xl font-bold text-center text-gray-100">
          Login to <span className="text-sky-400">ChatApp</span>
        </h1>

        <form onSubmit={handleSubmit} className="mt-6 space-y-6">
          {/* Username */}
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-200">
              Username
            </label>
            <input
              type="text"
              placeholder="Enter your username"
              className="w-full rounded-lg border border-gray-600 bg-gray-700 text-white h-12 px-4 focus:outline-none focus:ring-2 focus:ring-sky-500"
              required
              aria-label="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          {/* Password */}
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-200">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full rounded-lg border border-gray-600 bg-gray-700 text-white h-12 px-4 focus:outline-none focus:ring-2 focus:ring-sky-500"
              required
              aria-label="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Link to Signup */}
          <p className="text-md text-gray-300 text-center">
            Don’t have an account?{" "}
            <Link
              to="/signup"
              className="text-sky-800 hover:underline hover:text-sky-700 transition-colors"
            >
              Sign up
            </Link>
          </p>

          {/* Submit button */}
          <button
            type="submit"
            className="w-full h-12 rounded-lg bg-gradient-to-r from-sky-500/80 to-cyan-400/80 text-white font-medium shadow-md hover:from-sky-400/90 hover:to-cyan-300/90 transition-all duration-300"
            disabled={loading}
          >
            {loading?<span className="loading loading-spinner"></span>:"Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
