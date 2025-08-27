const GenderCheckbox = ({ onChangebox, selectedGender }) => {
  return (
    <div className="flex flex-col gap-2 sm:flex-row sm:gap-4">
      <label className="label cursor-pointer flex items-center gap-2">
        <input
          type="radio"
          name="gender"
          value="male"
          className="radio checked:bg-sky-400 border-sky-300 focus:ring-sky-400"
          required
          aria-label="Male"
          checked={selectedGender === "male"}
          onChange={()=> onChangebox("male")}
        />
        <span className="label-text text-sky-100">Male</span>
      </label>
      <label className="label cursor-pointer flex items-center gap-2">
        <input
          type="radio"
          name="gender"
          value="female"
          className="radio checked:bg-sky-400 border-sky-300 focus:ring-sky-400"
          required
          aria-label="Female"
          checked={selectedGender === "female"}
          onChange={()=> onChangebox("female")}
        />
        <span className="label-text text-sky-100">Female</span>
      </label>
    </div>
  );
};

export default GenderCheckbox;
