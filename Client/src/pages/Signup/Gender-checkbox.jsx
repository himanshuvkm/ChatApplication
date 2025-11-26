const GenderCheckbox = ({ onChangebox, selectedGender }) => {
  return (
    <div>
      <label className="block mb-2 text-sm font-medium text-gray-700">
        Gender
      </label>
      <div className="flex gap-4">
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="gender"
            value="male"
            className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-2 focus:ring-blue-500"
            required
            aria-label="Male"
            checked={selectedGender === "male"}
            onChange={() => onChangebox("male")}
          />
          <span className="text-sm text-gray-700">Male</span>
        </label>
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="gender"
            value="female"
            className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-2 focus:ring-blue-500"
            required
            aria-label="Female"
            checked={selectedGender === "female"}
            onChange={() => onChangebox("female")}
          />
          <span className="text-sm text-gray-700">Female</span>
        </label>
      </div>
    </div>
  );
};

export default GenderCheckbox;