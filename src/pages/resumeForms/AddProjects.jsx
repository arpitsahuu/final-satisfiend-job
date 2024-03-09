"use client"
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addinternship, addproject } from "@/redux/actions/resumeAction";
import Layout from "@/components/Layout";
import { useRouter } from "next/router";

const AddProjects = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [title, settitle] = useState("");
  const [description , setdescription ] = useState("");
  const [url, seturl] = useState("");

  const hendelSubmit = (e) => {
    e.preventDefault();
    const project = {
      title,
      description,
      url
    };
    dispatch(addproject(project));
    router.push("/CreateResume")
  };


  return (
    <Layout>
      <div className="  relative m-auto mt-16  w-[300px] sm:w-[300px]">
      <form className="w-full flex flex-col justify-center" action="" method="Post" onSubmit={hendelSubmit}>
        <div className="">
          <h1 className=" text-2xl text-gray-800 font-semibold py-10">Add Projects</h1>
          <label  className="flex flex-col"> Project title
            <input className="mt-1 block px-3 py-3 border-slate-300 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" type="text" name="title" id="proone" value={title} placeholder="Ex: Amazon"
              onChange={(e) => settitle(e.target.value)} required />
          </label> 

          <label className="flex flex-col">
          Project link 
            <input className="mt-1 block px-3 py-3 border-slate-300 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" type="url" name="url" value={url} id="protwo" placeholder="Ex: www.Amazon.com"
              onChange={(e) => seturl(e.target.value)}/>
          </label>

          <label className="flex flex-col text-xl" >
            Description
          </label>
          
          <textarea
            className=" border-slate-300 bg-white text-gray-800 border text-sm  p-3 placeholder-gray-500 focus:outline-none my-2  rounded-xl"
            placeholder="Short description of project and its workings (max 250 word)"
            name="description"
            value={description}
            id="prothree"
            cols="60"
            rows="8"
            onChange={(e) => setdescription(e.target.value)}
          ></textarea>
          </div>

          
          <button type="Submit" className="py-3 px-5 m-8 ">ADD</button>
        </form>
      </div>
    </Layout>
  );
};

export default AddProjects;