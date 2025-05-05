// src/components/ProtectedAdminRoute.jsx
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedAdminRoute = () => {
  const token = localStorage.getItem("adminToken");
  const isAdmin = token && JSON.parse(atob(token.split('.')[1])).isAdmin;

  if (!token || !isAdmin) {
    return <Navigate to="/admin" />;
  }

  return <Outlet />;
};

export default ProtectedAdminRoute;
