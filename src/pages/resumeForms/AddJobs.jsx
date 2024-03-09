"use client"
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addJob } from "@/redux/actions/resumeAction";
import Layout from "@/components/Layout";
import { useRouter } from "next/router";

const AddJob = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const [profile, setprofile] = useState("");
    const [organization, setorganization] = useState("");
    const [location, setlocation] = useState("");
    const [startdate, setstartdate] = useState("");
    const [enddate, setenddate] = useState("");
    const [description, setdescription] = useState("");
    

    const hendelSubmit = async (e) => {
      e.preventDefault();
      const job = {
          profile,
          organization,
          location,
          startdate,
          enddate,
          description,
        };
        await dispatch(addJob(job));
        router.push("/CreateResume")
    };

  return (
    <Layout>
    
      <div className="  m-auto mt-16 w-[370px] sm:w-[300px] flex justify-center items-center">
        <form className="w-full flex flex-col " action="" method="Post" onSubmit={hendelSubmit}>
          <h1 className=" text-2xl text-gray-800 text-center py-10">Add Job Details</h1>
          <label  className="flex flex-col w-1/2 font-medium">
          profile
            <input className="mt-1 block px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" type="text" name="profile" id="jobone" value={profile} placeholder="Ex: Operation" 
              onChange={(e) => setprofile(e.target.value)} required  />
          </label>
          <div className=" w-1/2 flex justify-evenly flex-col font-medium ">

          <label  className=" w-full flex flex-col font-medium">
          Start date
            <input className="mt-1 block px-3 py-3 border-slate-300 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" type="date" name="startdate" id="jobtwo" value={startdate}
              onChange={(e) => setstartdate(e.target.value)}  required />
          </label>
          <label  className=" w-full flex flex-col font-medium">
          End date
            <input className="mt-1 block border-slate-300 px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" type="date" name="enddate" id="jobthree" value={enddate}
              onChange={(e) => setenddate(e.target.value)}  required />
          </label>
              </div>
          <label  className="w-1/2 flex flex-col font-medium">
            organization
            <input className="w-1/2mt-1 block px-3 border-slate-300 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" id="jobfour" value={organization} placeholder="Ex: Wipro"
              onChange={(e) => setorganization(e.target.value)} required />
          </label>
          <label className="w-1/2 flex flex-col font-medium">
          location
            <input className="mt-1 block px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" type="text" name="performance" id="jobfive" value={location} placeholder="Ex: Banglore/Work form home"
              onChange={(e) => setlocation(e.target.value)} required />
          </label>
          <textarea
            className=" w-[300px] mt-3 block px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm "
            placeholder="Short description of work done (max 250 word)"
            name="description"
            value={description}
            id="jobsix"
            cols="60"
            rows="6"
            onChange={(e) => setdescription(e.target.value)} required 
          ></textarea>
          <button type="Submit" className="py-3 px-5 m-8 bg-gray-800 bg-black text-white">SAVE</button>
        </form>
      </div>
    </Layout>
  );
};

export default AddJob;