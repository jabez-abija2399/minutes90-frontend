import React from "react";

interface FormInputProps {
  label: string;
  type: string;
  error?: string;
  register: any; // from react-hook-form
  name: string;
  inputClassName?: string;  // Tailwind classes for the input element
  labelClassName?: string;  // Tailwind classes for the label element
  errorClassName?: string;  // Tailwind classes for the error message
}

export const FormInput: React.FC<FormInputProps> = ({
  label,
  type,
  error,
  register,
  name,
  inputClassName = "",
  labelClassName = "",
  errorClassName = "",
}) => (
  <div>
    <label htmlFor={name} className={`block mb-1 font-semibold text-gray-700 ${labelClassName}`}>
      {label}
    </label>
    <input
      id={name}
      {...register(name)}
      type={type}
      className={`
        w-full px-4 py-3 rounded-md border
        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
        ${error ? "border-red-500" : "border-gray-300"}
        ${inputClassName}
      `}
      aria-invalid={error ? "true" : "false"}
      aria-describedby={error ? `${name}-error` : undefined}
    />
    {error && (
      <p id={`${name}-error`} className={`mt-1 text-sm text-red-600 ${errorClassName}`}>
        {error}
      </p>
    )}
  </div>
);
