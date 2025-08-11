// src/pages/Login.tsx
import React from 'react';
import { useForm } from 'react-hook-form';
import { useAuth, Role, User } from '../context/AuthContext';

// Hardcoded dummy users for validation
const dummyUsers: User[] = [
  { name: "Lionel Messi", email: "messi@example.com", role: "Player", password: "test123" },
  { name: "FC Barcelona", email: "contact@fcbarcelona.com", role: "Club", password: "test123" },
  { name: "John Agent", email: "john.agent@example.com", role: "Agent", password: "test123" },
  { name: "Scout Smith", email: "smith.scout@example.com", role: "Scout", password: "test123" },
  { name: "Admin User", email: "admin@example.com", role: "Admin", password: "test123" },
];

type FormData = {
  email: string;
  password: string;
  role: Role;
};

export const Login = () => {
  const { login } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>({ defaultValues: { role: 'Player' } });

  const onSubmit = (data: FormData) => {
    // Validate user by matching email + role in dummyUsers
    const matchedUser = dummyUsers.find(
      user => user.email === data.email && user.role === data.role && user.password === data.password
    );

    if (matchedUser) {
      // Simulate login by setting user in context
      login(matchedUser);
      alert(`Logged in as ${matchedUser.name} (${matchedUser.role})`);

      // TODO: redirect to profile page (using react-router's useNavigate)
    } else {
      alert('Invalid email or role or password.');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border bg-cyan-600 rounded shadow">
      <h2 className="text-2xl mb-4">Login</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block mb-1">Email</label>
          <input
            {...register('email', { required: 'Email required' })}
            type="email"
            className="w-full border p-2 rounded"
          />
          {errors.email && <p className="text-red-500">{errors.email.message}</p>}
        </div>

        <div>
          <label className="block mb-1 mt-3 ">Password</label>
          <input
            {...register('password', { required: 'Password required' })}
            type="password"
            className="w-full border p-2 rounded"
          />
          {errors.password && <p className="text-red-500">{errors.password.message}</p>}
        </div>

        <div>
          <label className="block mb-1">Role</label>
          <select {...register('role')} className="w-full border p-2 rounded">
            <option value="Player">Player</option>
            <option value="Club">Club</option>
            <option value="Agent">Agent</option>
            <option value="Scout">Scout</option>
            <option value="Admin">Admin</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Login
        </button>
      </form>
    </div>
  );
};
