import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser]  = useState(() => {
    try {
      const storedUser = localStorage.getItem("user");
      return storedUser ? JSON.parse(storedUser) : null;
    } catch (error) {
      console.error("Failed to parse user from localStorage", error);
      return null;
    }
  });
  useEffect(() => {
    try {
      if (user) {
        localStorage.setItem("user", JSON.stringify(user));
      } else {
        localStorage.removeItem("user");
      }
    } catch (error) {
      console.error("Failed to parse user from localStorage:", error);
    }
  }, [user]);

  const logIn = (userData) => {
    setUser(userData);
  };

  const logOut = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, logIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};
