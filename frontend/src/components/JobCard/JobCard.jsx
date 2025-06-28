import React from 'react';
import './ JobCard.css';
import { Link } from 'react-router-dom';

export default function JobCard({ job }) {
  return (
    <div className="job-card">
      <h3>{job.title}</h3>
      <p>{job.location}</p>
      <Link to={`/job/${job.id}`}>View Details</Link>
    </div>
  );
}
