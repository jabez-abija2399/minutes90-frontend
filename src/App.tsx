// src/App.tsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { Login } from "./pages/Login";
import { Profile } from "./pages/Profile";
import { ProtectedRoute } from "./components/ProtectedRoute";
import SocialFeed from "./pages/SocialFeed";
import Messaging from "./pages/Messaging";
import Subscription from "./pages/Subscription";
import Navbar from "./components/Navbar";

export const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
      <Navbar />
        <Routes>
          {/* Public route */}
          <Route path="/login" element={<Login />} />

          {/* Protected route */}
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />

          <Route path="/subscription" element={<ProtectedRoute><Subscription /></ProtectedRoute>} />

          <Route path="/feed" element={<ProtectedRoute><SocialFeed /></ProtectedRoute>} />

          {/* Default redirect */}
          <Route path="*" element={<Login />} />

          <Route path="/messages" element={<Messaging />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};
