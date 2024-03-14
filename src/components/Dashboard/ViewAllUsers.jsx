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
const ViewAllUsers = () => {

  const { employee, error } = useSelector((e) => e.employee);
  const [searchTerm,setSearchTerm] = useState("");
  const [users,setUsers] = useState();
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

const DeletUser = async (id) =>{
  const response = await axios.post(`${basePath}/admin/delete/user/${id}`, null, config()
  );
  setUsers(response.data.user);
}

  
  

//   useEffect( async () => {
//     searchUsers();
//   }, []);

useEffect(() => {
    const searchUsers = async () => {
        const response = await axios.post(`${basePath}/admin/user?q=${searchTerm}`, null, config()
        );
        setUsers(response.data);
      };
     searchUsers();
  }, [searchTerm]); 

  // allJobs

  return (
    <>
    <div className="mx-10 mt-4">
    <label for="" class="text-sm font-medium text-gray-800 text-nowrap">Search Studnt :</label>
  <input 
    type="text"
    id=""
    placeholder="Search by Student Firsrname / Lastname  / Email"
    class="border rounded-[15px] p-2 w-[4vw] focus:outline-none focus:ring focus:border-blue-300 transition duration-300"
    onChange={(e) => setSearchTerm(e.target.value)}
  />
    </div>

    <div className="overflow-x-auto mt-8">
        <table className="min-w-full border rounded-lg overflow-hidden">
          <thead className="bg-sky-800 text-white">
            <tr>
              <th className="py-2 px-4 font-semibold text-start">Name</th>
              <th className="py-2 px-4 font-semibold text-start">Email</th>
              <th className="py-2 px-4 font-semibold text-start">Job Applyed</th>
              <th className="py-2 px-4 font-semibold text-start">Resume</th>
              <th className="py-2 px-4 font-semibold text-start">Delete</th>
            </tr>
          </thead>
          <tbody className="bg-orange-100">
            {users?.map((student, index) => (
              <tr
                key={index}
                className="bg-white border border-slate-300"
              >
                <td className="py-2 px-4 ">{`${student?.firstname} ${student?.lastname}`}</td>
                <td className="py-2 px-4 ">{student?.email}</td>
                <td className="py-2 px-4 ">{student?.applications?.length}</td>
                <td className="py-2 px-4 ">
                {
                    student?.resumePdf?.fileId ? <a href={student?.resumePdf?.url}  target="_blank">Doanload</a> : <Link href={`/watchResumeEmploye/${student?._id}`}>Watch</Link>
                  }
                </td>
                <td className="py-2 px-4 text-center">
                <button onClick={() =>DeletUser(student?._id)} className=" bg-sky-800 text-white px-2 py-1 rounded-md text-center">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
          
        {/* <Bar data={data} /> */}
        
      </div>
    {/* {
        users &&
        <div className=" py-10 px-5 sm:px-16 viewAllJobs-content flex  items-center justify-center flex-wrap">
        {users?.map((user) =>(
        <div className=" h-[200px]  sm:w-[180px] w-[300px] border bg-white border-slate-300 rounded-xl flex flex-col items-center justify-center ">
            <div>
                <img src={user.avatar.url} alt="" className="w-[50px] h-[50px] rounded-full" />
            </div>
            <h4>{user.firstname} {user.lastname}</h4>
            <h4>{user.email}</h4>
            <div className="w-full px-5">
            <button onClick={() =>DeletUser(user._id)} className="">Delete</button>
            </div>
        </div>
        ))}
        </div>
    } */}
    </>
  );
};

export default ViewAllUsers;
