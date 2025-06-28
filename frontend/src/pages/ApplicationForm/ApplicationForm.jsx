import React, { useState } from 'react';
import './ApplicationForm.css';
import { useParams } from 'react-router-dom';

export default function ApplicationForm() {
  const { jobId } = useParams();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    idNumber: '',
    phone: '',
    resume: null,
  });

  const handleChange = e => {
    const { name, value, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log("Form Submitted", formData);
    alert("Application submitted successfully!");
  };

  return (
    <div className="application-form">
      <h2>Apply for Job #{jobId}</h2>
      <form onSubmit={handleSubmit}>
        <input name="fullName" type="text" placeholder="Full Name" onChange={handleChange} required />
        <input name="email" type="email" placeholder="Email" onChange={handleChange} required />
        <input name="idNumber" type="text" placeholder="South African ID Number" onChange={handleChange} required />
        <input name="phone" type="text" placeholder="Phone Number" onChange={handleChange} required />
        <input name="resume" type="file" accept=".pdf,.doc,.docx" onChange={handleChange} required />
        
        <button type="submit">Submit Application</button>
      </form>
    </div>
  );
}
