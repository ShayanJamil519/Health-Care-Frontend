"use client";

import { useAddress } from "../../../AppContext";

const Input = ({
  label,
  type,
  name,
  value,
  placeholder,
  onChange,
  require,
}) => {
  return (
    <div className="">
      <p className="font-semibold text-sm text-[#202725] mb-1">{label}</p>
      <input
        type={type}
        value={value}
        name={name}
        onChange={onChange}
        required={require}
        placeholder={placeholder}
        className="outline-none text-sm  p-4 w-full rounded-md border-2 border-[#d9e4df] "
      />
    </div>
  );
};

export default Input;
