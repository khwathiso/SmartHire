import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import JobDetails from './pages/JobDetails/JobDetails';
import ApplicationForm from './pages/ApplicationForm/ApplicationForm';


function App(){
    return (

        <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/job/:id" element={<JobDetails />} />
        <Route path="/apply/:jobId" element={<ApplicationForm />} />
      </Routes>
    </Router>
    );
}

export default App;