import React, { useEffect, useState } from 'react';
import './JobDetails.css';
import { useParams, Link } from 'react-router-dom';
import axios from '../../api/axios';

export default function JobDetails() {
  const { id } = useParams();
  const [job, setJob] = useState(null);

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const response = await axios.get(`jobs/${id}/`);
        setJob(response.data);
      } catch (error) {
        console.error('Error fetching job details:', error);
      }
    };

    fetchJob();
  }, [id]);

  if (!job) {
    return <div className="job-details"><h2>Job not found</h2></div>;
  }

  return (
    <div className="job-details">
      <h1>{job.title}</h1>
      <p><strong>Location:</strong> {job.location}</p>
      <p>{job.description}</p>
      <Link to={`/apply/${job.id}`} className="apply-link">Apply Now</Link>
    </div>
  );
}
