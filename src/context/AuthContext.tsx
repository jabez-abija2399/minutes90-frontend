// src/context/AuthContext.tsx
import React, { createContext, useContext, useState, ReactNode } from "react";

export type Role = "Player" | "Club" | "Agent" | "Scout" | "Admin";

export interface User {
  id: string;
  name: string;
  email: string;
  role: Role;
  subscriptionPlanId?: string; // Track subscribed plan ID
}

interface AuthContextType {
  user: User | null;
  login: (userData: User) => void;
  logout: () => void;
  subscribe: (planId: string) => void; // New method to subscribe user
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = (userData: User) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };

  // Update user subscription plan ID
  const subscribe = (planId: string) => {
    if (user) {
      setUser({ ...user, subscriptionPlanId: planId });
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, subscribe }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
};
