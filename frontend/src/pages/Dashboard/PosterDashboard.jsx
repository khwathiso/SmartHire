import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from '../../api/axios';
import './Dashboard.css';

export default function PosterDashboard() {
  const [postedJobs, setPostedJobs] = useState([]);

  useEffect(() => {
    const fetchMyJobs = async () => {
      try {
        const res = await axios.get('jobs/my/'); 
        setPostedJobs(res.data);
      } catch (err) {
        console.error('Failed to load posted jobs', err);
      }
    };

    fetchMyJobs();
  }, []);

  return (
    <div className="dashboard">
      <h2>Welcome, Job Poster!</h2>

      <section className="dashboard-section">
        <div className="dashboard-header">
          <h3>Your Posted Jobs</h3>
          <Link to="/post-job" className="post-button">+ Post New Job</Link>
        </div>

        {postedJobs.length === 0 ? (
          <p>You haven’t posted any jobs yet.</p>
        ) : (
          <ul className="dashboard-list">
            {postedJobs.map((job) => (
              <li key={job.id}>
                {job.title} – <Link to={`/job/${job.id}`}>View</Link> | <Link to={`/job/${job.id}/applicants`}>Applicants</Link>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}
