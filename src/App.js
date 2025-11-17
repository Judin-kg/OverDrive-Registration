// import logo from './logo.svg';
// import './App.css';
// import LuckDrowForm from './components/LuckyDrowForm';
// import AdminDashboard from './components/Admindashboard';

// function App() {
//   return (
//     <div className="App">
//      <LuckDrowForm />
//      <AdminDashboard />
//     </div>
//   );
// }

// export default App;


import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";


import AdminLogin from "./components/AdminLogin";
import AdminDashboard from "./components/Admindashboard";
import LuckDrowForm from "./components/LuckyDrowForm";
import Navbar from "./components/Navbar";

// 🔐 Protected Route Component
const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("adminToken");
  return token ? children : <Navigate to="/adminlogin" />;
};

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* User Registration Page */}
        <Route path="/" element={<LuckDrowForm />} />

        {/* Admin Login */}
        <Route path="/adminlogin" element={<AdminLogin />} />

        {/* Admin Dashboard (Protected) */}
        <Route
          path="/admindashboard"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />

        {/* Default Redirect */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
