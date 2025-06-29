import React from 'react';
import './JobCard.css';
import { Link } from 'react-router-dom';

export default function JobCard({ job }) {
  return (
    <div className="job-card">
      <div className="job-card-header">
        <h2>{job.title}</h2>
        <span className="job-type">{job.type}</span>
      </div>
      <p className="company-name">{job.company}</p>
      <p className="job-location">📍 {job.location}</p>
      <p className="job-salary">💸 {job.salary}</p>
      <p className="job-posted">🕒 Posted on {job.posted}</p>
      <Link to={`/job/${job.id}`} className="job-link">
        View Details
      </Link>
    </div>
  );
}
