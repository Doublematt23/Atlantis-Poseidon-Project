/*-------------------------------------------------------------------------*
*---									
*---        AuthContext.jsx						
*---	   		
*---	----	----	----	----	----	----	----	----	---*
*---									
*---        Version 1.0     2024 March 21st   Simon Shamoon 	  	
*---		       	
*-------------------------------------------------------------------------*/

import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

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
