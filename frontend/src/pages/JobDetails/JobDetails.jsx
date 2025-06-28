import React from "react";
import './JobDetails.css';
import { useSearchParams,Link, useParams } from "react-router-dom";

const dummyJobs = [ { id: 1, title: 'Frontend Developer', location: 'Cape Town', description: 'Develop and maintain UI components.' },
  { id: 2, title: 'Backend Developer', location: 'Johannesburg', description: 'Build scalable APIs and backend systems.' },
];

export default function JobDetails (){

    const { id } =useParams();
    const job = dummyJobs.find(j => j.id.toString()===id);
    if (!job){
        return <div className="job-details"><h2>Job not found</h2></div>
    }

    return(
        <div className="job-details">
         <h1> {job.title}</h1>
               <p><strong>Location:</strong> {job.location}</p>
                     <p>{job.description}</p>
                           <Link to={`/apply/${job.id}`} className="apply-link">Apply Now</Link>        
        </div>

    );
}