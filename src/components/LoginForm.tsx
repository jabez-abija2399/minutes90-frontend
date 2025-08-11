// src/components/LoginForm.tsx
import React from "react";
import { useForm } from "react-hook-form";
import { FormInput } from "./FormInput";
import { FormSelect } from "./FormSelect";

type FormData = {
  email: string;
  password: string;
  role: string;
};

interface LoginFormProps {
  onSubmit: (data: FormData) => void;
}

export const LoginForm: React.FC<LoginFormProps> = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ defaultValues: { role: "Player" } });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <FormInput
        label="Email"
        type="email"
        name="email"
        register={register}
        error={errors.email?.message}
      />
      <FormInput
        label="Password"
        type="password"
        name="password"
        register={register}
        error={errors.password?.message}
      />
      <FormSelect
        label="Role"
        name="role"
        register={register}
        options={[
          { value: "Player", label: "Player" },
          { value: "Club", label: "Club" },
          { value: "Agent", label: "Agent" },
          { value: "Scout", label: "Scout" },
          { value: "Admin", label: "Admin" },
        ]}
      />
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
      >
        Login
      </button>
    </form>
  );
};
