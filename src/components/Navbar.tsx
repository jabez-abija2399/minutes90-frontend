// src/components/Navbar.tsx
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  // Logout handler: clears user and redirects to login
  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
      {/* Logo / Brand */}
      <div className="text-xl font-bold">
        <Link to="/">minutes90</Link>
      </div>

      {/* Navigation Links */}
      <div className="space-x-6 flex items-center">
        {/* Always show feed if logged in */}
        {user && (
          <>
            <Link to="/feed" className="hover:underline">
              Social Feed
            </Link>
            <Link to="/profile" className="hover:underline">
              Profile
            </Link>
            <Link to="/subscription" className="hover:underline">
              Subscription
            </Link>
            <Link to="/messages" className="hover:underline">
              Messages
            </Link>
          </>
        )}

        {/* Authentication Links */}
        {user ? (
          <>
            <span className="italic">({user.role})</span>
            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 px-3 py-1 rounded"
            >
              Logout
            </button>
          </>
        ) : (
          <Link to="/login" className="hover:underline">
            Login
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
