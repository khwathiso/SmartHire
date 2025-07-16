import React, { useState } from 'react';
import './Auth.css';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import { loginUser } from '../../redux/slices/authSlice';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Login() {
  const [form, setForm] = useState({ email: '', password: '' });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate login
   dispatch(loginUser({ email: form.email, password: form.password }))
    .unwrap()
    .then(() => navigate(from, { replace: true }))
    .catch((err) => {
         toast.error(err?.error || 'Login failed. Check credentials and try again.');
      });
  };


  return (
    <div className="auth-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input name="email" type="email" placeholder="Email" onChange={handleChange} required />
        <input name="password" type="password" placeholder="Password" onChange={handleChange} required />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
