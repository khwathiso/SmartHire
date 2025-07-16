import React, { useState } from 'react';
import './Auth.css';
import axios from '../../api/axios';
import { toast } from 'react-toastify';



export default function Register() {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

   const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      alert("Passwords don't match!");
      return;
    }

    try {
      await axios.post('users/register/', {
        full_name: form.fullName,
        email: form.email,
        password: form.password,
      });
      toast.success('Registration successful! You can now log in.');
    } catch (error) {
      toast.error(error.response?.data?.email || 'Registration failed');
    }
  };

  return (
    <div className="auth-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="fullName"
          type="text"
          placeholder="Full Name"
          onChange={handleChange}
          required
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          onChange={handleChange}
          required
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
          required
        />
        <input
          name="confirmPassword"
          type="password"
          placeholder="Confirm Password"
          onChange={handleChange}
          required
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}
