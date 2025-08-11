import React from "react";

interface FormInputProps {
  label: string;
  type: string;
  error?: string;
  register: any;  // from react-hook-form
  name: string;
  className?: string;  // optional className prop
}

export const FormInput: React.FC<FormInputProps> = ({
  label,
  type,
  error,
  register,
  name,
  className = "",  // default to empty string
}) => (
  <div>
    <label className="block mb-1">{label}</label>
    <input
      {...register(name)}
      type={type}
      className={`w-full border p-2 rounded ${
        error ? "border-red-500" : "border-gray-300"
      } ${className}`}  // append passed className here
    />
    {error && <p className="text-red-500">{error}</p>}
  </div>
);
