import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import {BroweserRouter as Router, Routes,Route } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route, BrowserRouter,Navigate } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Register from './pages/Register';
import Error from './pages/Error';
import AdminLayout from './components/layout/Admin-layout';
import AdminUsers from './pages/AdminUsers';
import AdminContact from './pages/AdminContact';

import { isAdminAuthenticated } from '../src/utils/auth'; // import utility
import AdminLogin from './pages/AdminLogin'; // import login page
import ProtectedAdminRoute from './components/layout/ProtectedAdminRoute'; 
import AdminDashboard from './pages/AdminDashboard';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects />} />
            {/* <Route path="/register" element={<Register />} /> */}
            <Route path='*' element={<Error />} />
            
           
            <Route path="/admin" element={<AdminLogin />} />

        {/* 👇 Protected admin dashboard routes */}
        <Route path="/admin-dashboard" element={<ProtectedAdminRoute />}>
          <Route element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
            <Route path="users" element={<AdminUsers />} />
            <Route path="contacts" element={<AdminContact />} />
          </Route>
          </Route>


          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App
