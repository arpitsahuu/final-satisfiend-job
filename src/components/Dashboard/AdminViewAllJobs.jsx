import { allJobs, createJobs } from "@/redux/actions/jobAction";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaHome, FaRegClock, FaRupeeSign, FaShoppingBag } from "react-icons/fa";
import { MdOutlineNotStarted } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { IoCashOutline } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import Filter from "../Filter";
import axios from "axios";
useState;
const AdminViewAllJobs = () => {

  const { employee, error } = useSelector((e) => e.employee);
  const [searchTerm,setSearchTerm] = useState("");
  const [jobs, setJobs] = useState();
  const dispatch = useDispatch();

  

  const basePath = `${process.env.NEXT_PUBLIC_REACT_APP_API_URL}/employer`;

const config = () => {
    return {
        headers: {
            'authorization': localStorage.getItem('token') || '' // Ensure token is always a string
        },
        withCredentials: true
    };
};

  
  

//   useEffect( async () => {
//     searchUsers();
//   }, []);

useEffect(() => {
    const searchUsers = async () => {
        const response = await axios.post(`${basePath}/admin/jobs?q=${searchTerm}`, null, config()
        );
         setJobs(response.data);
        console.log(response.data);
      };
     searchUsers();
  }, [searchTerm]); 

  // allJobs

  return (
    <>
    <div className="mx-1 sm:mx-10 mt-4">
    <label for="" class="text-sm font-medium text-gray-800 text-nowrap">Search jobs :</label>
  <input 
    type="text"
    id=""
    placeholder="Search Jobs by Title / Location "
    class="border rounded-[15px] p-2 w-[4vw] focus:outline-none focus:ring focus:border-blue-300 transition duration-300"
    onChange={(e) => setSearchTerm(e.target.value)}
  />
    </div>
    {
        jobs &&
        <div className=" py-5  sm:py-10 px-5 sm:px-16 viewAllJobs-content flex  items-center justify-center flex-wrap">
        {jobs?.map((job) =>(
          <div className="w-[300px] h-[200px] bg-white border border-slate-300 rounded-lg px-2 py-3">
            <div className="flex justify-between mb-1 items-center">
                <div className="ps-2">
                  <h1 className="text-md font-semibold">{job?.title}</h1>
                  <p className="text-xs text-gray-500">{job?.employer?.organisationname}</p>
                </div>
                <img src={job?.employer?.organisationlogo.url} className="h-8 pe-2" alt="" />
              </div>
              <div className="flex items-center gap-1 mt-2 ps-2  text-sm text-slate-600">
                <FaLocationDot  className="text-xs" />
                <p>{job.location}</p>
              </div>
              <div className="flex items-center gap-1 mt-1 ps-2  text-sm text-slate-600">
                <IoCashOutline  className="text-xs" />
                <p>{job?.salary} year</p>
              </div>
              <div className="flex items-center gap-1 mt-1 ps-2  text-sm text-slate-600">
                <FaShoppingBag  className="text-xs" />
                <p>{job?.openings} openings</p>
              </div>
              
          </div>
        ))}
        </div>
    }
    </>
  );
};

export default AdminViewAllJobs;
