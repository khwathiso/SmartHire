import React from 'react';
import './Home.css';
import JobCard from '../../components/JobCard/JobCard';

const jobs = [
  { id: 1, title: 'Frontend Developer', location: 'Cape Town' },
  { id: 2, title: 'Backend Developer', location: 'Johannesburg' },
];

export default function Home() {
  return (
    <div className="home-container">
      <h1>Available Jobs</h1>
      <div className="job-list">
        {jobs.map(job => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
}