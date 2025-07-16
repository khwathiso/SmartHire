import React, { useEffect, useState } from 'react';
import './Jobs.css';
import JobCard from '../../components/JobCard/JobCard';
import { useSelector } from 'react-redux';
import axios from '../../api/axios';


export default function Jobs() {
  const [jobs, setJobs] = useState([]);

useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get('jobs/');
        setJobs(response.data);
      } catch (error) {
        console.error('Error fetching jobs:', error);
      }
    };

    fetchJobs();
  }, []);

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
