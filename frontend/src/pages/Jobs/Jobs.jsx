import React from 'react';
import './Jobs.css';
import JobCard from '../../components/JobCard/JobCard';
import { useSelector } from 'react-redux';

export default function Jobs() {
  const jobs = useSelector((state) => state.jobs.jobsList);

  return (
    <div className="jobs-container">
      <h1>Available Jobs</h1>
      <div className="job-list">
        {jobs && jobs.length > 0 ? (
          jobs.map((job) => <JobCard key={job.id} job={job} />)
        ) : (
          <p>No jobs available at the moment.</p>
        )}
      </div>
    </div>
  );
}
