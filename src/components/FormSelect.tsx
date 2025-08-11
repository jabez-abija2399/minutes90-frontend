// src/components/FormSelect.tsx
import React from "react";

interface FormSelectProps {
  label: string;
  register: any;
  name: string;
  options: { value: string; label: string }[];
}

export const FormSelect: React.FC<FormSelectProps> = ({
  label,
  register,
  name,
  options,
}) => (
  <div>
    <label className="block mb-1">{label}</label>
    <select {...register(name)} className="w-full border p-2 rounded">
      {options.map(({ value, label }) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </select>
  </div>
);
