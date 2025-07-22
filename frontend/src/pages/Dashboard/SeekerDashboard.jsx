import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from '../../api/axios';
import './Dashboard.css';

export default function SeekerDashboard() {
  const [jobs, setJobs] = useState([]);
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await axios.get('jobs/');
        setJobs(res.data);
      } catch (err) {
        console.error('Failed to load jobs', err);
      }
    };

    const fetchApplications = async () => {
      try {
        const res = await axios.get('applications/my/'); 
        setApplications(res.data);
      } catch (err) {
        console.error('Failed to load applications', err);
      }
    };

    fetchJobs();
    fetchApplications();
  }, []);

  return (
    <div className="dashboard">
      <h2>Welcome, Job Seeker!</h2>

      <section className="dashboard-section">
        <h3>Available Jobs</h3>
        {jobs.length === 0 ? (
          <p>No jobs found.</p>
        ) : (
          <ul className="dashboard-list">
            {jobs.map((job) => (
              <li key={job.id}>
                <Link to={`/job/${job.id}`}>{job.title}</Link>
              </li>
            ))}
          </ul>
        )}
      </section>

      <section className="dashboard-section">
        <h3>Your Applications</h3>
        {applications.length === 0 ? (
          <p>You haven’t applied to any jobs yet.</p>
        ) : (
          <ul className="dashboard-list">
            {applications.map((app) => (
              <li key={app.id}>
                {app.job_title} – <strong>{app.status}</strong>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}
