import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const logout = async () => {
            // Simulate loading for half a second
            await new Promise((resolve) => setTimeout(resolve, 500));

            // Clear local storage
            localStorage.removeItem('token');

            // Redirect to the homepage
            navigate('/');
        };

        logout();
    }, [navigate]);

    return (
        <div>
            <h1>Logging out...</h1>
            {/* You can add a loading spinner or any other UI elements here */}
        </div>
    );
};

export default Logout;