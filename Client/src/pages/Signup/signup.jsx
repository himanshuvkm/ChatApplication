import { Link } from "react-router-dom"; // Assuming React Router for navigation
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
    <div className="flex min-h-screen flex-col items-center justify-center px-4">
      <div className="w-full max-w-xl p-10 rounded-2xl shadow-lg bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10">
        <h1 className="text-4xl font-bold text-center text-gray-100">
          Sign Up for <span className="text-sky-400">ChatApp</span>
        </h1>

        <form onSubmit={handleSubmit} className="mt-6 space-y-6">
          {/* Full Name */}
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-200">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full rounded-lg border border-gray-600 bg-gray-700 text-white h-12 px-4 focus:outline-none focus:ring-2 focus:ring-sky-500"
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
            <label className="block mb-1 text-sm font-medium text-gray-200">
              Username
            </label>
            <input
              type="text"
              placeholder="Enter your username"
              className="w-full rounded-lg border border-gray-600 bg-gray-700 text-white h-12 px-4 focus:outline-none focus:ring-2 focus:ring-sky-500"
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
            <label className="block mb-1 text-sm font-medium text-gray-200">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full rounded-lg border border-gray-600 bg-gray-700 text-white h-12 px-4 focus:outline-none focus:ring-2 focus:ring-sky-500"
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
            <label className="block mb-1 text-sm font-medium text-gray-200">
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="Confirm your password"
              className="w-full rounded-lg border border-gray-600 bg-gray-700 text-white h-12 px-4 focus:outline-none focus:ring-2 focus:ring-sky-500"
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

          {/* Already have an account */}
          <p className="text-md text-gray-300 text-center">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-sky-800 hover:underline hover:text-sky-700 transition-colors"
            >
              Log in
            </Link>
          </p>

          {/* Submit button */}
          <button
            type="submit"
            className="w-full h-12 rounded-lg bg-gradient-to-r from-sky-500/80 to-cyan-400/80 text-white font-medium shadow-md hover:from-sky-400/90 hover:to-cyan-300/90 transition-all duration-300"
            disabled={loading}
          >
            {loading ? (
              <span className="loading loading-spinner"></span>
            ) : (
              "Sign Up"
            )}  
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
