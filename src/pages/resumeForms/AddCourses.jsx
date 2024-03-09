"use client"
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addcourse, addinternship } from "@/redux/actions/resumeAction";
import Layout from "@/components/Layout";
import { useRouter } from "next/router";

const AddCourses = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [traning, settraning] = useState("");
  const [organization, setorganization] = useState("");
  const [location, setlocation] = useState("");
  const [startdate, setstartdate] = useState("");
  const [enddate, setenddate] = useState("");
  const [description, setdescription] = useState("");
  

  const hendelSubmit = (e) => {
    e.preventDefault();
    const info = {
        traning,
        organization,
        location,
        startdate,
        enddate,
        description,
      };
      dispatch(addcourse(info));
      router.push("/CreateResume")
  };
  return (
    <Layout>
      <div className="  relative  m-auto mt-16 w-[300px] sm:w-[300px]">
      <form className="w-full flex flex-col" action="" method="Post" onSubmit={hendelSubmit}>
          <h1 className=" text-2xl text-gray-800 text-center py-10">Add Traning or Course</h1>
          <div className=" w-1/2">
          <label  className="  flex flex-col font-medium">
          Traning program
            <input className="mt-1 block px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" type="text" name="traning" id="coone" value={traning} placeholder="Ex: Web developer"
              onChange={(e) => settraning(e.target.value)} />
          </label>
          </div>
          <div className="w-1/2 flex justify-between flex-col">

          <label  className="flex flex-col font-medium">
          Start date
            <input className="mt-1 w-full block px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-slate-300" type="date" name="startdate" id="cotwo" value={startdate}
              onChange={(e) => setstartdate(e.target.value)} />
          </label>
          <label  className="flex flex-col font-medium">
          End date
            <input className="mt-1 border-slate-300 w-full block px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" type="date" name="enddate" id="cothree" value={enddate}
              onChange={(e) => setenddate(e.target.value)} />
          </label>
              </div>
            <div className="w-1/2">  
          <label  className="flex flex-col font-medium">
            organization
            <input className="w-80 border-slate-3 bg-white text-gray-800 border text-sm border-[#272727] p-3 placeholder-gray-500 focus:outline-none my-2 " type="text" name="organizationf" id="cofour" value={organization} placeholder="Ex: Wipro"
              onChange={(e) => setorganization(e.target.value)}/>
          </label>
          <label className="flex flex-col font-medium">
          location
            <input className=" bg-white text-gray-800 border text-sm  p-3 placeholder-gray-500 focus:outline-none my-2 " type="text" name="performance" id="cofive" value={location} placeholder="Ex: Banglore/Work form home"
              onChange={(e) => setlocation(e.target.value)}/>
          </label>
          <textarea
            className="  bg-white text-gray-800 border text-sm  p-3 placeholder-gray-500 focus:outline-none my-2 border-slate-300"
            placeholder="Short description of work done (max 250 word)"
            name="description"
            value={description}
            id="cosix"
            cols="60"
            rows="6"
            onChange={(e) => setdescription(e.target.value)}
          ></textarea>
          </div>
          <button type="Submit" className="py-3 px-5 m-8">SAVE</button>
        </form>
      </div>
    </Layout>
  );
};

export default AddCourses;