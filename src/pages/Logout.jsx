/**
 * Logout component.
 * @version 1.0
 * @author Simon Shamoon 100%
 * 2024 March 21st
 */
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Logout = () => {
  const navigate = useNavigate();

  const { setIsLoggedIn } = useAuth();

  useEffect(() => {
    /**
     * Logs the user out.
     *
     * @async
     * @function logout
     */
    const logout = async () => {
      // Simulate loading for half a second
      await new Promise((resolve) => setTimeout(resolve, 500));

      // Clear local storage
      localStorage.removeItem("token");
      setIsLoggedIn(false); // Update the login status
      // Redirect to the homepage
      navigate("/");
    };

    logout();
  }, [navigate]);

  return (
    <div>
      <h1>Logging out...</h1>
    </div>
  );
};

export default Logout;
