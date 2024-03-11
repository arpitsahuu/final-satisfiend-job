import { allJobs, createJobs } from "@/redux/actions/jobAction";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaHome, FaRegClock, FaRupeeSign, FaShoppingBag } from "react-icons/fa";
import { IoCashOutline, IoLocation } from "react-icons/io5";
import { MdOutlineNotStarted } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import Filter from "../Filter";
import axios from "axios";
useState;
const ViewAllEmploye = () => {

  const { employee, error } = useSelector((e) => e.employee);
  const [searchTerm,setSearchTerm] = useState("");
  const [employes,setemploye] = useState();
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
        const response = await axios.post(`${basePath}/admin/employe?q=${searchTerm}`, null, config()
        );
        setemploye(response.data);
      };
     searchUsers();
  }, [searchTerm]); 

  // allJobs

  return (
    <>
    <div className="mx-10 mt-4">
    <label for="jobTitle" class="text-sm font-medium text-gray-800 text-nowrap">Search Studnt :</label>
  <input 
    type="text"
    id="jobTitle"
    placeholder="Search by Student Firsrname / Lastname / email "
    class="border rounded-[15px] p-2 w-[4vw] focus:outline-none focus:ring focus:border-blue-300 transition duration-300"
    onChange={(e) => setSearchTerm(e.target.value)}
  />
    </div>
    {
        employes &&
        <div className=" py-10 px-16 viewAllJobs-content flex  items-center justify-center flex-wrap">
        {employes?.map((employ) =>(
        <div className=" h-[200px] w-[180px] border bg-white border-slate-300 rounded-xl flex flex-col items-center justify-center overflow-hidden ">
            <div>
                <img src={employ.organisationlogo.url} alt="" className="w-[50px] h-[50px] rounded-full" />
            </div>
            <h4>{employ.firstname} {employ.lastname}</h4>
            <h4>{employ.email}</h4>
            <div className="w-full px-5">
            <button className="">Make Admin</button>
            </div>
        </div>
        ))}
        </div>
    }
    </>
  );
};

export default ViewAllEmploye;
