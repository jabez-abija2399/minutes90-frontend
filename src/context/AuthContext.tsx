// src/context/AuthContext.tsx
import React, { createContext, useContext, useState, ReactNode } from "react";

// Define roles available
export type Role = "Player" | "Club" | "Agent" | "Scout" | "Admin";

// User shape
export interface User {
  id: number;
  password: string;
  name: string;
  email: string;
  role: Role;
  avatar?: string; // Optional avatar for user profile
}

// Context shape
interface AuthContextType {
  user: User | null;
  login: (userData: User) => void;
  logout: () => void;
}

// Create React Context
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Provider component
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  // Dummy login: set user state
  const login = (userData: User) => setUser(userData);

  // Logout: clear user state
  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use context safely
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
};
