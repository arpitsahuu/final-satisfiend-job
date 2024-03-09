"use client"
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addaccomplishment, addinternship } from "@/redux/actions/resumeAction";
import Layout from "@/components/Layout";
import { useRouter } from "next/router";

const AddAditional = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [description, setdescription] = useState("");
 
  const hendelSubmit = async (e) => {
    e.preventDefault();
    const position = {
      description
    };
    await dispatch(addaccomplishment(position));
    router.push("/CreateResume")
  };

  return (
    <Layout>
      <div className="  relative w-full  m-auto mt-16">
      <form className="flex flex-col items-center justify-center" action="" method="Post" onSubmit={hendelSubmit}>
        <div className="w-1/2 ">
          <h1 className=" text-2xl text-gray-800 text-center py-10">Additional details</h1>

          <label className=" flex flex-col text-xl font-medium" >
            <span className="text-sm text-gray-500 my-2 text-slate-600">Add your accomplishments such as rewards, recognitions, test scores, certifications, etc. here. You may also add information such as seminars/workshops you have attended or any interests/hobbies you have pursued.</span>
          </label>
          
          <textarea
            className=" bg-white text-gray-800 border text-sm border-[#272727] p-3 placeholder-gray-500 focus:outline-none my-2  rounded-xl "
            placeholder="Short description of work done (max 250 word)"
            name="description"
            value={description}
            id=""
            cols="60"
            rows="8"
            onChange={(e) => setdescription(e.target.value)}
          ></textarea>
          </div>
          <button type="Submit" className="py-3 px-5 m-8 bg-gray-800 text-white">ADD</button>
        </form>
      </div>
    </Layout>
  );
};

export default AddAditional;