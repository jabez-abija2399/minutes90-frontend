// src/pages/Profile.tsx
import React from 'react';
import { useAuth } from '../context/AuthContext';

export const Profile = () => {
  const { user, logout } = useAuth();

  if (!user) return <p>Loading...</p>;

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded shadow">
      <h2 className="text-2xl mb-4">Profile</h2>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Role:</strong> {user.role}</p>

      <button
        onClick={logout}
        className="mt-6 w-full bg-red-600 text-white py-2 rounded hover:bg-red-700"
      >
        Logout
      </button>
    </div>
  );
};
