// src/pages/Login.tsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth, Role, User } from "../context/AuthContext";
import { LoginForm } from "../components/LoginForm";

// Dummy users list
const dummyUsers: User[] = [
  {id: 1, name: "Lionel Messi", email: "test1@gmail.com", role: "Player", password: "test123" , avatar: "https://media.gettyimages.com/id/2179660084/photo/new-england-revolution-v-inter-miami-cf.jpg?s=1024x1024&w=gi&k=20&c=W1ukk4rhUQJRGBg91gvg7BrhH0KggexE8Uako5r6dIs="},
  {id: 2, name: "FC Barcelona", email: "test2@gmail.com", role: "Club", password: "test123", avatar: "https://www.fcbarcelona.com/photo-resources/2025/08/10/0e44cdde-b97b-4b79-b9b4-2c7530ccc500/_MGA1712.jpg?width=640&height=400"},
  {id: 3, name: "John Agent", email: "test3@gmail.com", role: "Agent", password: "test123",avatar: "https://www.fcbarcelona.com/photo-resources/2025/08/10/0e44cdde-b97b-4b79-b9b4-2c7530ccc500/_MGA1712.jpg?width=640&height=400" },
  {id: 4, name: "Scout Smith", email: "test4@gmail.com", role: "Scout", password: "test123",avatar: "https://www.fcbarcelona.com/photo-resources/2025/08/10/0e44cdde-b97b-4b79-b9b4-2c7530ccc500/_MGA1712.jpg?width=640&height=400" },
  {id: 5, name: "Admin User", email: "admin@gmail.com", role: "Admin", password: "test123" ,avatar: "https://media.gettyimages.com/id/2179660084/photo/new-england-revolution-v-inter-miami-cf.jpg?s=1024x1024&w=gi&k=20&c=W1ukk4rhUQJRGBg91gvg7BrhH0KggexE8Uako5r6dIs="},
];

export const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const onSubmit = (data: { email: string; password: string; role: Role }) => {
    const matchedUser = dummyUsers.find(
      (user) =>
        user.email === data.email &&
        user.role === data.role &&
        user.password === data.password
    );

    if (matchedUser) {
      login(matchedUser);
      navigate("/profile");
    } else {
      alert("Invalid email or role or password.");
    }
  };

  return (
    <div className="flex max-w-4xl mx-auto shadow-lg rounded-lg overflow-hidden">
      <div className="w-1/2 bg-cover bg-center" style={{ backgroundImage: "url('https://source.unsplash.com/600x800/?nature')" }}>
        <img src='/public/loginBg3.png' alt="Login Background" className="object-cover w-full h-full" />
      </div>
      <div className="w-1/2 bg-white p-8">
        <h2 className="text-2xl font-bold mb-6">Login</h2>
        <LoginForm onSubmit={onSubmit} />
      </div>
    </div>
  );
};
