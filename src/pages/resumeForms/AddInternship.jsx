"use client"
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addinternship } from "@/redux/actions/resumeAction";
import Layout from "@/components/Layout";
import { useRouter } from "next/router";

const AddIntership = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const [profile, setprofile] = useState("");
    const [organization, setorganization] = useState("");
    const [location, setlocation] = useState("");
    const [startdate, setstartdate] = useState("");
    const [enddate, setenddate] = useState("");
    const [description, setdescription] = useState("");
    
    const hendelSubmit =async (e) => {
      e.preventDefault();
      const internship = {
          profile,
          organization,
          location,
          startdate,
          enddate,
          description,
        };
        await dispatch(addinternship(internship));
        router.push("/CreateResume")

    };

  return (
    <Layout>
      <div className="  m-auto mt-16 w-[300px] sm:w-[300px] flex ">
      <form className="w-full flex flex-col " action="" method="Post" onSubmit={hendelSubmit}>
          <h1 className=" text-2xl text-gray-800 text-center py-10">Internship details</h1>
          <label  className=" w-1/2 flex flex-col font-medium">
          profile
            <input className="w-1/2 bg-white text-gray-800 border text-sm  p-3 placeholder-gray-500 focus:outline-none my-2" required  type="text" name="profile" id="interone" value={profile} placeholder="Ex: Operation"
              onChange={(e) => setprofile(e.target.value)} />
          </label>
          <div className=" w-1/2 flex justify-between  flex-col font-medium">

          <label  className=" w-full flex flex-col font-medium">
          Start date
            <input className=" w-full bg-white text-gray-800 border text-sm p-3 placeholder-gray-500 border-slate-300 focus:outline-none my-2" required  type="date" name="startdate" id="intersix" value={startdate}
              onChange={(e) => setstartdate(e.target.value)} />
          </label>
          <label  className="w-full flex flex-col font-medium">
          End date
            <input className="w-full bg-white text-gray-800 border text-sm  p-3 placeholder-gray-500 border-slate-300 focus:outline-none my-2"  required type="date" name="enddate" id="interfive" value={enddate}
              onChange={(e) => setenddate(e.target.value)} />
          </label>
         </div>
          <label  className="w-1/2 flex flex-col font-medium">
            organization
            <input className="w-1/2 bg-white text-gray-800 border text-sm  p-3 placeholder-gray-500 border-slate-300 focus:outline-none my-2 " required  type="text" name="organizationf" id="intertwo" value={organization} placeholder="Ex: Wipro"
              onChange={(e) => setorganization(e.target.value)}/>
          </label>
          <label className="w-1/2 flex flex-col font-medium">
          location
            <input className="w-1/2 bg-white text-gray-800 border text-sm  p-3 placeholder-gray-500 border-slate-300 focus:outline-none my-2 " required   type="text" name="performance" id="interthree" value={location} placeholder="Ex: Banglore/Work form home"
              onChange={(e) => setlocation(e.target.value)}/>
              
          </label>
          <textarea
            className="w-1/2 bg-white text-gray-800 border-slate-300 border text-sm  p-3 placeholder-gray-500 focus:outline-none my-2 mx-5"
            placeholder="Short description of work done (max 250 word)"
            name="description"
            value={description}
            id="interfour"
            cols="60"
            rows="6"
            onChange={(e) => setdescription(e.target.value)}
            required
          ></textarea>
          <button type="Submit" className=" py-3 px-5 m-8 bg-gray-800 text-white">SAVE</button>
        </form>
      </div>
    </Layout>
  );
};

export default AddIntership;