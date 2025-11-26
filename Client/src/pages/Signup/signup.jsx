import { Link } from "react-router-dom";
import GenderCheckbox from "./Gender-checkbox";
import { useState } from "react";
import useSignUp from "../../Hooks/useSignup";

const SignUp = () => {
  const [inputs, setinputs] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const { loading, signup } = useSignUp();

  const handlecheckboxChange = (gender) => {
    setinputs({ ...inputs, gender });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    signup(inputs);
  };

  return (
    <div className="flex min-h-screen w-100 flex-col items-center justify-center px-4">
      <div className="w-full max-w-lg p-8 rounded-xl shadow-lg bg-white border border-gray-200">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-2">
          Create Account
        </h1>
        <p className="text-center text-gray-500 text-sm mb-6">
          Sign up to get started with ChatApp
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Full Name */}
          <div>
            <label className="block mb-1.5 text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full rounded-lg border border-gray-300 bg-white text-gray-900 h-11 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              required
              aria-label="Full Name"
              value={inputs.fullName}
              onChange={(e) =>
                setinputs({ ...inputs, fullName: e.target.value })
              }
            />
          </div>

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
              value={inputs.username}
              onChange={(e) =>
                setinputs({ ...inputs, username: e.target.value })
              }
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
              value={inputs.password}
              onChange={(e) =>
                setinputs({ ...inputs, password: e.target.value })
              }
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block mb-1.5 text-sm font-medium text-gray-700">
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="Confirm your password"
              className="w-full rounded-lg border border-gray-300 bg-white text-gray-900 h-11 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              required
              aria-label="Confirm Password"
              value={inputs.confirmPassword}
              onChange={(e) =>
                setinputs({ ...inputs, confirmPassword: e.target.value })
              }
            />
          </div>

          {/* Gender Selection */}
          <GenderCheckbox
            onChangebox={handlecheckboxChange}
            selectedGender={inputs.gender}
          />

          {/* Submit button */}
          <button
            type="submit"
            className="w-full h-11 rounded-lg bg-blue-600 text-white font-medium shadow-sm hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed mt-2"
            disabled={loading}
          >
            {loading ? (
              <span className="inline-block w-5 h-5 border-2 border-t-transparent border-white rounded-full animate-spin"></span>
            ) : (
              "Sign Up"
            )}  
          </button>

          {/* Already have an account */}
          <p className="text-sm text-gray-600 text-center pt-2">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-blue-600 font-medium hover:text-blue-700 transition-colors"
            >
              Log in
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;