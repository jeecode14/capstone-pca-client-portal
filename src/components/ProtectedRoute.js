import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoutes = ({ redirectPath = '/', children }) => {
    const isLoggedIn = localStorage.getItem('auth');

    if (!isLoggedIn) {
        return <Navigate to={redirectPath} replace />;
    }

    return children ? children : <Outlet />;
};
export default ProtectedRoutes;
