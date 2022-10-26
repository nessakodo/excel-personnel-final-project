import React from 'react';
import { useEffect, useState } from 'react';
import Jobs from "./Jobs"


export default function Opportunities ({currentCandidate, jobs, setJobs, loggedIn, onApply}) {


    useEffect( () => {
        fetch(`http://localhost:3000/jobs`)
        .then((res) => res.json())
        .then((jobs) => setJobs(jobs.jobs))
    }, [])

    return (
        <div>
            
            <Jobs
        currentCandidate={currentCandidate}
        jobs={jobs}
        loggedIn={loggedIn}
        onApply={onApply} />
        </div>
      
        
    )

};