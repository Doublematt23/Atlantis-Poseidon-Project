
import React, { createContext, useContext, useState, useEffect } from "react";

/**
 * AuthContext provides authentication-related data and functions to its descendants.
 * @version 1.0
 * @author Simon Shamoon 100%
 * 2024 March 21st
 * @property {boolean} isLoggedIn - Indicates whether the user is logged in or not.
 * @property {function} setIsLoggedIn - Function to update the isLoggedIn state.
 */

/**
 * AuthContext is a React context that provides authentication-related data and functions.
 * @type {React.Context<AuthContextValue>}
 */
const AuthContext = createContext();

/**
 * Custom hook to access the AuthContext.
 * @returns {AuthContextValue} - The value of the AuthContext.
 */
export const useAuth = () => useContext(AuthContext);

/**
 * AuthProvider is a component that wraps its children with the AuthContext.Provider.
 * It manages the isLoggedIn state based on the presence of a token in the localStorage.
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The children components to be wrapped.
 * @returns {React.ReactNode} - The wrapped children components.
 */
export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};
