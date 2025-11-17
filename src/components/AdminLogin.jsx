// import React, {useState } from 'react';
// import axios from 'axios';
// import './AdminLogin.css';

// const AdminLogin = () => {
//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//   });

//   const [message, setMessage] = useState('');
//  const [loading, setLoading] = useState(false);
//   const handleChange = (e) => {
//     setFormData(prev => ({
//       ...prev,
//       [e.target.name]: e.target.value
//     }));
//   };

  
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setMessage('');
//      setLoading(true);
//     try {
//       const res = await axios.post('http://localhost:5000/auth/admin-login', formData);
//       console.log(res,"ressss");
      
//       const { token, user } = res.data;

//       if (user.role !== 'admin') {
//         setMessage('Access denied. You are not an admin.');
//          setLoading(false);
//         return;
//       }

//       if (user.status === 'blocked') {
//         setMessage('Your account is blocked.');
//         setLoading(false);
//         return;
//       }

//       // Save token and user info
//       localStorage.setItem('token', token);
//       localStorage.setItem('user', JSON.stringify(user));

//       // Redirect to admin panel
//       window.location.href = '/admin';

//     } catch (err) {
//       setMessage(err.response?.data?.message || 'Login failed');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     // <div className="container mt-5" style={{ maxWidth: '400px' }}>
//     //   <h2>Admin Login</h2>
//     //   {message && <div className="alert alert-danger">{message}</div>}
//     //   <form onSubmit={handleSubmit}>
//     //     <div className="mb-3">
//     //       <label>Email</label>
//     //       <input
//     //         name="email"
//     //         type="email"
//     //         className="form-control"
//     //         value={formData.email}
//     //         onChange={handleChange}
//     //         required
//     //       />
//     //     </div>
//     //     <div className="mb-3">
//     //       <label>Password</label>
//     //       <input
//     //         name="password"
//     //         type="password"
//     //         className="form-control"
//     //         value={formData.password}
//     //         onChange={handleChange}
//     //         required
//     //       />
//     //     </div>
//     //     <button className="btn btn-dark w-100" type="submit">
//     //       Login as Admin
//     //     </button>
//     //   </form>
//     // </div>

//      <div className="admin-login-container" style={{
//         backgroundImage: `url(${taskimage3})`,
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         width: '100%'
//       }}>
//       <div style={{backdropFilter: 'blur(10px)', padding: '2rem', borderRadius: '1rem', boxShadow: '0px 6px 14px rgba(0, 0, 0, 0.2)', width: '100%', maxWidth: '400px', animation: 'fadeIn 0.5s ease-in-out'}}>
//         <h2 className="admin-login-title" style={{color:"silver"}}>Admin Login</h2>

//         {message && <div className="admin-login-error">{message}</div>}

//         <form onSubmit={handleSubmit} className="admin-login-form">
//           <input
//             type="email"
//             name="email"
//             placeholder="Enter email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />

//           <input
//             type="password"
//             name="password"
//             placeholder="Enter password"
//             value={formData.password}
//             onChange={handleChange}
//             required
//           />

//           <button type="submit" className="admin-login-btn" disabled={loading}>
//             {loading ? "Logging in..." : "Login as Admin"}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AdminLogin;


import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import adminImage from '../utils/car.png';        
const AdminLogin = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setLoading(true);

    try {
      const res = await axios.post("https://overdrive-server.onrender.com/api/admin/login", formData);

      localStorage.setItem("adminToken", res.data.token);

      alert("Registration Successfully completed");
      navigate("/admindashboard");

    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    }

    setLoading(false);
  };

  return (
    
    <div className="bg-dark" style={styles.page}>
      <form className="bg-secondary" style={styles.form} onSubmit={handleSubmit}>
        <h2 style={styles.title}>Admin Login</h2>

        {error && <p style={styles.error}>{error}</p>}

        <input
          type="email"
          name="email"
          placeholder="Admin Email"
          value={formData.email}
          onChange={handleChange}
          style={styles.input}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Admin Password"
          value={formData.password}
          onChange={handleChange}
          style={styles.input}
          required
        />

        <button style={styles.button} disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
   
  );
};

export default AdminLogin;

const styles = {
  page: {
    display: "flex",
    height: "100vh",
    alignItems: "center",
    justifyContent: "center",
    background: "#757373ff",
  },
  form: {
    width: "350px",
    padding: "30px",
    background: "white",
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(233, 232, 232, 0.1)",
  },
  title: {
    marginBottom: "20px",
    textAlign: "center",
    fontSize: "22px",
    fontWeight: "600",
  },
  input: {
    width: "100%",
    padding: "12px",
    marginBottom: "15px",
    borderRadius: "6px",
    border: "1px solid #484646ff",
    fontSize: "15px",
  },
  button: {
    width: "100%",
    padding: "12px",
    background: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "16px",
  },
  error: {
    background: "#ffdddd",
    padding: "10px",
    color: "#d60000",
    marginBottom: "10px",
    borderRadius: "5px",
    fontSize: "14px",
    textAlign: "center",
  },
};
