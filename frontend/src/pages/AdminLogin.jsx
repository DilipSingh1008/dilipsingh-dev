import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AdminLogin.css"; // Import styles

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent form submission

    try {
      const res = await fetch("https://dilipsingh-dev.onrender.com/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
         
      const data = await res.json();
      console.log(data);
      if (res.ok && data.token) {
        console.log(data);
        if (data.isAdmin) {
          localStorage.setItem("adminToken", data.token);
          navigate("/admin-dashboard");
        } else {
          alert("Access denied: You are not an admin.");
        }
      } else {
        alert(data.message || "Login failed");
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="admin-login-container">
      <form className="admin-login-form" onSubmit={handleLogin}>
        <h2>Admin Login</h2>
        <input
          type="email"
          placeholder="Admin Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          autoComplete="email"  // Add this line
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          autoComplete="current-password"  // Add this line

        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default AdminLogin;
