import React from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import './AdminLayout.css'; 

const AdminLayout = () => {
  const navigate = useNavigate(); 

  const handleLogout = () => {
    // Remove the admin token from localStorage
    localStorage.removeItem("adminToken");

    // Redirect to the login page
    navigate("/admin");
  };

  return (
    <div className="admin-container">
      <aside className="admin-sidebar">
        <h2>Admin Panel</h2>
        <nav>
          <ul>
            <li><Link to="/admin-dashboard/users">Users</Link></li>
            <li><Link to="/admin-dashboard/contacts">Contact</Link></li>
            <li><Link to="/admin-dashboard">Home</Link></li>
          </ul>
        </nav>
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </aside>

      <main className="admin-content">
        <Outlet /> {/* This renders the matched child routes */}
      </main>
    </div>
  );
};

export default AdminLayout;
