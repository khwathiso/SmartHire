import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import Home from './pages/Home/Home';
import JobDetails from './pages/JobDetails/JobDetails';
import ApplicationForm from './pages/ApplicationForm/ApplicationForm';
import ProtectedRoute from './utils/ProtectedRoute';
import Navbar from './components/Navbar/Navbar';
import Landing from './pages/Landing/Landing';


function App() {
  return (
    <>
      <Router>
            <Navbar />

        <Routes>
          <Route path="/" element={<Landing />} />

          <Route path="/" element={<Home />} />
          <Route path="/job/:id" element={<JobDetails />} />
          <Route path="/apply/:jobId" element={
            <ProtectedRoute>
              <ApplicationForm />
            </ProtectedRoute>
          } />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </>
  );
}


export default App;
