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
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6"
      noValidate
    >
      <FormInput
        label="Email"
        type="email"
        name="email"
        register={register}
        error={errors.email?.message}
        inputClassName="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        labelClassName="block mb-1 font-semibold text-gray-700"
        errorClassName="mt-1 text-sm text-red-600"
      />
      <FormInput
        label="Password"
        type="password"
        name="password"
        register={register}
        error={errors.password?.message}
        inputClassName="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        labelClassName="block mb-1 font-semibold text-gray-700"
        errorClassName="mt-1 text-sm text-red-600"
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
        labelClassName="block mb-1 font-semibold text-gray-700"
        selectClassName="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      />

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-3 rounded-md font-semibold text-lg hover:bg-blue-700 transition"
      >
        Login
      </button>
    </form>
  );
};
