import {useEffect, useCallback, useState} from "react"
import api from "../helpers/api";

const JobBoard = () => {
    const [jobs, setJobs] = [];
    const fetchAlljobs = useCallback(async () => {
        const response = api.get("/jobs/get_all_jobs");

        if(response.status === "success") {
            
        }
    })

    const useEffect = () => {

    }

  return <div>This is the job board</div>;
};

export default JobBoard;
