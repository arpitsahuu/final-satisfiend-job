"use client"
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addAducation } from "@/redux/actions/resumeAction";
import Layout from "@/components/Layout";
import { useRouter } from "next/router";

const AddEducation = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [college, setcollege] =  useState("")
  const [endyear, setendyear] = useState("");
  const [startyear, setstartyear] = useState("");
  const [degree, setdegree] = useState("");
  const [performance, setperformance] = useState("");
  const [Stream, setStream] = useState("");
  const [board, setboard] = useState("");
  const [school, setschool] = useState("");
  const [type, settype] = useState('')
  const [Schoolclass, setSchoolclass] = useState('')

  const hendelSubmit = async (e) => {
    e.preventDefault();
    const education = {
    };
    if(college != ""){
        education.college = college
    }
    if(endyear != ""){
        education.endyear = endyear
    }
    if(startyear != ""){
        education.startyear = startyear
    }
    if(degree != ""){
        education.degree = degree
    }
    if(performance != ""){
        education.performance = performance
    }
    if(Stream != ""){
        education.Stream = Stream
    }
    if(type != ""){
        education.type = type
    }
    if(school != ""){
        education.school = school
    }
    if(Schoolclass != ""){
        education.class = Schoolclass
    }
    await dispatch(addAducation(education));
    router.push("/CreateResume");
  };

  return (
    <Layout>
    <div
      className=" relative  m-auto mt-16 "
    >
      
        <form className=" flex flex-col items-center justify-center" action="" method="Post" onSubmit={hendelSubmit}>
          <h1 className=" text-xl font-semibold text-center py-6 sm:text-3xl sm:py-10">Add Education</h1>
          <label className="bg-while text-slate-700 mx-5 my-2  font-medium ">
              Internship Type
              <select
                className=" w-[320px] mt-1 block px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm "
                value={type}
                onChange={(e) => settype(e.target.value)}
                required
              >
                <option className=" font-light" value="">Select Education type</option>
                <option value="School">School</option>
                <option value="Graduation">Graduation</option>
                <option value="Post Graduation">Post Graduation</option>
                <option value="PHD">PHD</option>
              </select>
            </label>
           { type && <div>
            
          { type != "School" &&
           <label  className="flex flex-col  font-medium text-slate-700">
           College
            <input className="mt-1 block px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm sm:w-[600px]" type="text" name="college" id="addeduinputsix" value={college} placeholder="Ex: XYZ College"
              onChange={(e) => setcollege(e.target.value)} />
          </label>}
          { type == "School" && 
          <label  className="flex flex-col  font-medium text-slate-700">
          School Name
            <input className=" w-[600px] mt-1 block px-3 py-3 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm sm:w-[600px]" type="text" name="college" id="addeduinputone" value={school} placeholder="Ex: XYZ School"
              onChange={(e) => setschool(e.target.value)} />
          </label>}
          { type == "School" && 
          <label  className="flex flex-col  font-medium text-slate-700">
          Board
            <input className="w-[50vw] mt-1 block px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm sm:w-[600px]" type="text" name="college" id="addeduinputtwo" value={board} placeholder="Ex: XYZ board"
              onChange={(e) => setboard(e.target.value)} />
          </label>}
          <label  className="flex flex-col  font-medium text-slate-700">
          Starding Year
            <input className="w-[300px] border-slate-300  bg-white text-gray-800 border text-sm  p-3 placeholder-gray-500 focus:outline-none my-2" type="date" name="startyear" id="" value={startyear} required
              onChange={(e) => setstartyear(e.target.value)} />
          </label>
          <label  className="flex flex-col  font-medium text-slate-700">
          End Year
            <input className="w-[300px] bg-white text-gray-800 border text-sm border-slate-300 p-3 placeholder-gray-500 focus:outline-none my-2" type="date" name="endyear" required id="" value={endyear}
              onChange={(e) => setendyear(e.target.value)} />
          </label>
          { type !="School" &&
           <label  className="flex flex-col  font-medium text-slate-700">
            Degree
            <input className="w-80 bg-white text-gray-800 border text-sm border-[#272727] p-3 placeholder-gray-500 focus:outline-none my-2 " type="text" name="degreef" id="addeduinputseven" value={degree} placeholder="Ex: B Tach"
              onChange={(e) => setdegree(e.target.value)}/>
          </label>}
          { type =="School" &&
           <label  className="flex flex-col  font-medium text-slate-700">
            Class
            <input className="addeduinputthree bg-white text-gray-800 border text-sm border-[#272727] p-3 placeholder-gray-500 focus:outline-none my-2 " type="text" name="degreef" id="addeduinputthree" value={Schoolclass} placeholder="Ex: 10 & 12"
              onChange={(e) => setSchoolclass(e.target.value)}/>
          </label>}
          <label className="flex flex-col  font-medium text-slate-700">
          Stream
            <input className="w-80 bg-white text-gray-800 border text-sm border-[#272727] p-3 placeholder-gray-500 focus:outline-none my-2 " type="text" name="performance" id="addeduinputfour" value={Stream} placeholder="Ex: Computer Science"
              onChange={(e) => setStream(e.target.value)}/>
          </label>
          <label className="flex flex-col  font-medium text-slate-700">
            Performance
            <input className="w-[50vw] bg-white text-gray-800 border text-sm border-[#272727] p-3 placeholder-gray-500 focus:outline-none my-2 " type="text" name="performance" id="addeduinputfive" value={performance} placeholder="Persentage Ex: 75%" required
              onChange={(e) => setperformance(e.target.value)}/>
          </label>
          </div>
          } 
          <button type="Submit" className="py-3 px-5 m-8">Add Adducation</button>
        </form>
    </div>
    </Layout>
  );
};

export default AddEducation;