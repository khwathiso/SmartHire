import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Jobs from "./pages/Jobs/Jobs";
import JobDetails from "./pages/JobDetails/JobDetails";
import ApplicationForm from "./pages/ApplicationForm/ApplicationForm";
import ProtectedRoute from "./utils/ProtectedRoute";
import Navbar from "./components/Navbar/Navbar";
import Landing from "./pages/Landing/Landing";
import Footer from "./components/Footer/Footer";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="app-wrapper">
      <Navbar />

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/job/:id" element={<JobDetails />} />
          <Route
            path="/apply/:jobId"
            element={
              <ProtectedRoute>
                <ApplicationForm />
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </main>

      <Footer />

      <ToastContainer position="top-center" autoClose={3000} />
    </div>
  );
}

export default App;
