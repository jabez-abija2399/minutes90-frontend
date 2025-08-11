import React from "react";

interface FormSelectProps {
  label: string;
  register: any;
  name: string;
  options: { value: string; label: string }[];
  error?: string;
  selectClassName?: string;
  labelClassName?: string;
  errorClassName?: string;
}

export const FormSelect: React.FC<FormSelectProps> = ({
  label,
  register,
  name,
  options,
  error,
  selectClassName = "",
  labelClassName = "",
  errorClassName = "",
}) => (
  <div>
    <label htmlFor={name} className={`block mb-1 font-semibold text-gray-700 ${labelClassName}`}>
      {label}
    </label>
    <select
      id={name}
      {...register(name)}
      className={`
        w-full px-4 py-3 rounded-md border
        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
        ${error ? "border-red-500" : "border-gray-300"}
        ${selectClassName}
      `}
      aria-invalid={error ? "true" : "false"}
      aria-describedby={error ? `${name}-error` : undefined}
    >
      {options.map(({ value, label }) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </select>
    {error && (
      <p id={`${name}-error`} className={`mt-1 text-sm text-red-600 ${errorClassName}`}>
        {error}
      </p>
    )}
  </div>
);
