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
    <div className="flex min-h-screen w-100 flex-col items-center justify-center px-4">
      <div className="w-full max-w-md p-8 rounded-xl shadow-lg bg-white border border-gray-200">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-2">
          Welcome Back
        </h1>
        <p className="text-center text-gray-500 text-sm mb-6">
          Sign in to continue to ChatApp
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Username */}
          <div>
            <label className="block mb-1.5 text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              type="text"
              placeholder="Enter your username"
              className="w-full rounded-lg border border-gray-300 bg-white text-gray-900 h-11 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              required
              aria-label="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          {/* Password */}
          <div>
            <label className="block mb-1.5 text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full rounded-lg border border-gray-300 bg-white text-gray-900 h-11 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              required
              aria-label="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Submit button */}
          <button
            type="submit"
            className="w-full h-11 rounded-lg bg-blue-600 text-white font-medium shadow-sm hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={loading}
          >
            {loading ? (
              <span className="inline-block w-5 h-5 border-2 border-t-transparent border-white rounded-full animate-spin"></span>
            ) : (
              "Sign In"
            )}
          </button>

          {/* Link to Signup */}
          <p className="text-sm text-gray-600 text-center pt-2">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="text-blue-600 font-medium hover:text-blue-700 transition-colors"
            >
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;