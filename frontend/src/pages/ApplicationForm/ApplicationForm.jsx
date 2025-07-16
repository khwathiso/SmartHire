import React, { useState } from 'react';
import './ApplicationForm.css';
import { useParams } from 'react-router-dom';
import axios from '../../api/axios';
import { toast } from 'react-toastify';


export default function ApplicationForm() {
  const { jobId } = useParams();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    idNumber: '',
    phone: '',
    resume: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append('job', jobId);
    data.append('full_name', formData.fullName);
    data.append('email', formData.email);
    data.append('id_number', formData.idNumber);
    data.append('phone', formData.phone);
    data.append('resume', formData.resume);

    try {
      await axios.post('jobs/apply/', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      toast.success('Application submitted successfully!');
    } catch (err) {
      toast.success('Error submitting application');
    }
  };

  return (
    <div className="application-form">
      <h2>Apply for Job #{jobId}</h2>
      <form onSubmit={handleSubmit}>
        <input name="fullName" type="text" placeholder="Full Name" onChange={handleChange} required />
        <input name="email" type="email" placeholder="Email" onChange={handleChange} required />
        <input name="idNumber" type="text" placeholder="ID Number" onChange={handleChange} required />
        <input name="phone" type="text" placeholder="Phone" onChange={handleChange} required />
        <input name="resume" type="file" accept=".pdf,.doc,.docx" onChange={handleChange} required />
        <button type="submit">Submit Application</button>
      </form>
    </div>
  );
}
