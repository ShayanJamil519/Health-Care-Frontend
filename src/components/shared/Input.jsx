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
  isFile,
  isDate,
}) => {
  const { setDate } = useAddress();

  const handleChange = (e) => {
    if (isFile && e.target.files) {
      // Handle file input separately
      const selectedFile = e.target.files[0];
      onChange(selectedFile);
    } else if (isDate) {
      // For other input types, proceed with the default behavior
      let formattedDate = new Date(e.target.value).getTime();
      onChange(e.target.value);
      setDate(formattedDate);
    } else {
      onChange(e.target.value);
    }
  };
  return (
    <div className="">
      <p className="font-semibold text-sm text-[#202725] mb-1">{label}</p>
      <input
        type={type}
        value={value}
        onChange={handleChange}
        required={require}
        placeholder={placeholder}
        className="outline-none text-sm  p-4 w-full rounded-md border-2 border-[#d9e4df] "
      />
    </div>
  );
};

export default Input;
