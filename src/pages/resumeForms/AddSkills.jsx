"use client"
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addskill } from "@/redux/actions/resumeAction";
import Layout from "@/components/Layout";
import { useRouter } from "next/router";

const AddSkills = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [skill, setskill] = useState("");
  const [level , setlevel ] = useState("");

  
  const hendelSubmit = async (e) => {
    e.preventDefault();
    const skills = {
      skill,
      level

    };
    await dispatch(addskill(skills));
    router.push("/CreateResume")
  };

  return (
    <Layout>
      <div className="  relative w-full  m-auto my-32">
      <form className="flex flex-col items-center justify-center" action="" method="Post" onSubmit={hendelSubmit}>

<h1 className=" text-2xl text-gray-800 text-center py-10">Projects</h1>
<label  className="flex flex-col"> SKILL
  <input className="w-80 bg-white text-gray-800 border text-sm border-[#272727] p-3 placeholder-gray-500 focus:outline-none my-2" type="text" name="skill" id="" value={skill} placeholder="Ex: Amazon"
    onChange={(e) => setskill(e.target.value)} required />
</label>

{skill != "" && (
<label className="bg-while text-gray-800 flex flex-col mt-3 ">
How would you rate yourself on this skill?
    <select
      className=" w-80 bg-white text-gray-800 border text-sm border-[#272727] p-3 placeholder-gray-500 focus:outline-none rounded-sm mt-2"
      value={level}
      onChange={(e) => setlevel(e.target.value)}
      required
    >
      <option value="">Select level</option>
      <option value="Beginner">Beginner</option>
      <option value="Intermediate">Intermediate</option>
      <option value="Advanced">Advanced</option>
    </select>
  </label>
  )}



<button type="Submit" className="py-3 px-5 m-8 bg-gray-800 text-white">ADD</button>
</form>
      </div>
    </Layout>
  );
};

export default AddSkills;