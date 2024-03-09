"use client"
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addinternship, addresponsibility } from "@/redux/actions/resumeAction";
import Layout from "@/components/Layout";
import { useRouter } from "next/router";

const AddPosition = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [description, setdescription] = useState("");
 
  const hendelSubmit = (e) => {
    e.preventDefault();
    const position = {
      description
    };
    dispatch(addresponsibility(position));
    router.push("/CreateResume")
  };

  return (
    <Layout>
      <div className="  relative m-auto mt-16 w-[400px] sm:w-[900px]">
      <form className="flex flex-col items-center justify-center" action="" method="Post" onSubmit={hendelSubmit}>
          <h1 className=" text-xl  font-semibold text-gray-800 text-center py-10 sm:text-3xl">Position of responsibility</h1>

          <label className="w-1/2 flex flex-col text-xl font-medium" >
            Description
            <span className="text-sm text-gray-500 my-2  text-slate-700 ">if you have been/are an active part of societies, conducted any events or led a team, add details here</span>
          </label>
          
          <textarea
            className=" w-1/2 bg-white text-gray-800 border text-sm border-[#272727] p-3 placeholder-gray-500 focus:outline-none my-2 mx-5 rounded-xl"
            placeholder="Short description of work done (max 250 word)"
            required
            name="description"
            value={description}
            id=""
            cols="60"
            rows="8"
            onChange={(e) => setdescription(e.target.value)}
          ></textarea>
          <button type="Submit" className="py-3 px-5 m-8 mb-32">ADD </button>
        </form>
      </div>
    </Layout>
  );
};

export default AddPosition;