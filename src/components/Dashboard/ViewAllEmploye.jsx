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

const MakeEmployeAdmin = async (id) =>{
  const response = await axios.post(`${basePath}/admin/make/${id}`, null, config()
  );
  setemploye(response.data.employe);
} 

const Deletemploer = async (id) =>{
  const response = await axios.post(`${basePath}/admin/delete/user/${id}`, null, config()
  );
  setUsers(response.data.user);
}
  

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
    <label for="" class="text-sm font-medium text-gray-800 text-nowrap">Search Employer :</label>
  <input 
    type="text"
    id=""
    placeholder="Search by Employer Firsrname / Lastname / Organisation "
    class="border rounded-[15px] p-2 w-[4vw] focus:outline-none focus:ring focus:border-blue-300 transition duration-300"
    onChange={(e) => setSearchTerm(e.target.value)}
  />
    </div>
      
    <div className="overflow-x-auto mt-8"> 
    <table className="min-w-full border rounded-lg overflow-hidden mt-5">
          <thead className="bg-sky-800 text-white">
            <tr>
              <th className="py-2 px-4 font-semibold text-start ">Organisation Name</th>
              <th className="py-2 px-4 font-semibold text-start ">Employer Name</th>
              <th className="py-2 px-4 font-semibold text-start ">Employer Email</th>
              <th className="py-2 px-4 font-semibold text-start ">Job Posts</th>
              <th className="py-2 px-4 font-semibold text-start  ">Delete</th>
            </tr>
          </thead>
          <tbody className="bg-orange-100">
            {employes?.map((employe, index) => (
              <tr
                key={index}
                className="bg-white border border-slate-300"
              >
                <td className="py-2 px-4  overflow-hidden">{employe?.organisationname}</td>
                <td className="py-2 px-4 ">{`${employe?.firstname} ${employe?.lastname}`}</td>
                <td className="py-2 px-4 ">{employe?.email}</td>
                <td className="py-2 px-4  ">{employe?.jobs?.length}</td>
                <td className="py-2 px-4 ">
                <button  className=" bg-sky-800 text-white px-2 py-1 rounded-md  ">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
    </div>   
        
    {/* {
        employes &&
        <div className="py-5  sm:py-10 px-5 sm:px-16  viewAllJobs-content flex  items-center justify-center flex-wrap">
        {employes?.map((employ) =>(
        <div className=" h-[200px] sm:w-[180px] w-[300px] border bg-white border-slate-300 rounded-xl flex flex-col items-center justify-center overflow-hidden ">
            <div>
                <img src={employ.organisationlogo.url} alt="" className="w-[50px] h-[50px] rounded-full" />
            </div>
            <h4>{employ.firstname} {employ.lastname}</h4>
            <h4>{employ.email}</h4>
            <div className="w-full px-5">
            { employ.isAdmin ? <button className="">Admin</button> : <button className="" onClick={() =>MakeEmployeAdmin(employ._id)} >Make Admin</button>}  
            
            </div>
        </div>
        ))}
        </div>
    } */}
    </>
  );
};

export default ViewAllEmploye;
