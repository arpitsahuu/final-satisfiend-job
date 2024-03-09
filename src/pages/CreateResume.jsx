
import React, { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { MdOutlineDelete } from "react-icons/md";
import Loading from "./Loading"
import { deleteAducation, deleteJob, deleteaccomplishment, deletecourse, deleteinternship, deleteproject, deleteresponsibility, deleteskill, setResumeaction } from "@/redux/actions/resumeAction";

const EditResume = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { student, error, loading } = useSelector((state) => state.student);
  const { resume } = useSelector((state) => state.Resume);

  const [studentProfile, setStudentProfile] = useState({
    avatar: { fileId: "", url: "" },
    firstname: "",
    lastname: "",
    email: "apj@example.com",
    internships: [],
    jobs: [],
    education: [],
    skills: [],
    languages: [],
    contact: "",
    city: "example",
    gender: "male",
    avatar: "",
  });
  const [Resumedata,setResumeData] =useState()

  useEffect(() => {
    if (student) {
      setStudentProfile((prevStudentProfile) => ({
        ...prevStudentProfile,
        ...student, // Update only the fields that exist in student
      }));
      dispatch(setResumeaction(student))
      setResumeData(resume)
    }
  }, [student]);


  const setaddeducation =() =>{
    router.push("/resumeForms/AddEducation");
  }
  const Deletjob = (id) => {
    dispatch(asynDeletjobRes(id))
  }
  const setAddIntership = () => {
    router.push("/resumeForms/AddIntership");
  }
  const setAddJob = () => {
    router.push("/resumeForms/AddJobs");
  }
  const setAddresponsibilitie = (id) => {
    router.push("/resumeForms/AddPositions");
  }
  const setAddCourses = (id) => {
    router.push("/resumeForms/AddCourses");
  }
  const setaddproject = (id) => {
    router.push("/resumeForms/AddProjects");
  }
  const setaddskill = (id) => {
    router.push("/resumeForms/AddSkills");
  }
  const setaddaditional = (id) => {
    router.push("/resumeForms/AddAditional");
  }


 
  const downloadresume = () =>{
    router.push("/Resume")
  }



  const Deletedu = (id) => {
    dispatch(deleteAducation(id))
  }
  const DeletJob = (id) => {
    dispatch(deleteJob(id))
  }
  const DeletInter = (id) => {
    dispatch(deleteinternship(id))
  }
  const DeletRes = (id) => {
    dispatch(deleteresponsibility(id))
  }
  const DeletPro = (id) => {
    dispatch(deleteproject(id))
  }
  const Deletaddi = (id) => {
    dispatch(deleteaccomplishment(id))
  }

  const Deletcourse = (id) => {
    dispatch(deletecourse(id))
  }

  const Deletskill= (id) => {
    dispatch(deleteskill(id))
  }

  
  return (
    <Layout>
      {/* {loading && <Loading />} */}
      {studentProfile && 
      <div className="w-full">
      <div id="resume" className=" w-[90%] m-auto scroll-non mt-20 mb-12 border-slate-400 rounded-lg overflow-hidden sm:w-[80%] md:w-[70%]">
      <h1 className="text-xl text-center py-5 font-semibold text-gray-700 mb-2  sm:mb-11 sm:text-3xl">
        RESUME
      </h1>
      <div className="w-full border-[1px] border-slate-400   px-4 py-3 flex justify-between sm:px-16 sm:py-7">
        <div>
          <h3 className="text-xl uppercase font-semibold pb-1 text-slate-800 sm:text-3xl ">
            {studentProfile.firstname} {studentProfile.lastname}
          </h3>
          <h4 className=" text-zinc-600 text-xs sm:pb-1 sm:text-sm"><span>Email:</span> {studentProfile.email} </h4>
          { studentProfile.contact && <h4 className="text-zinc-600 text-xs sm:pb-1 sm:text-sm"><span>Contact:</span> {" "}
          +91-{studentProfile.contact}
          </h4>}
          <p className="text-zinc-600 text-xs sm:pb-1 sm:text-sm">
            {/* {studentProfile.city}  */}
            Location: Bhopal
            </p>
        </div>

        { studentProfile?.avatar.url &&
        <div>
          <img src={studentProfile.avatar.url} height={150} width={150} />
        </div>
        }
      </div>

      <div className="w-full flex border-[1px] border-inherit px-4 py-3  sm:px-16 sm:py-7">
        <h4 className="w-[25%] text-slate-500 text-[8px] sm:text-sm ">EDUCATION</h4>

        <div className=" ps-2 ">
          { resume?.education?.length != 0 &&
          resume?.education.map((education) =>(
            <div className="py-1 flex justify-between border-b-[1px] border-slate-300 ">
          <div>
            {education.degree && 
            <h4 className="text-sm pb-1">
              {education.degree}
              {" in "}
              {education.Stream}
            </h4>}
            {education.class && 
            <h4 className="text-sm pb-1">
              {education.class}
              {" in "}
              {education.Stream}
            </h4>}
            { education.college && <h5 className="text-sm text-slate-500">{education.college}</h5>}
            { education.school && <h5 className="text-sm text-slate-500">{education.school}</h5>}
            <h5 className="text-sm text-slate-500">
              {education.startyear} {" - "} {education.startyear}
            </h5>
            <h5 className=" text-sm text-slate-500">
              Persentage: {education.performance}
            </h5>
          </div>
          <div>
            <MdOutlineDelete onClick={() => Deletedu(education.id)}    className="h-5 inline-block ms-8 mt-1"/>
          </div>
        </div>
          ))
          }

          <button
            className="  text-sky-500 text-[8px] sm:text-sm py-1"
            onClick={() => setaddeducation()}
          >
            {" "}
            + Add Education
          </button> 
        </div>
      </div>
      <div className="w-full flex border-[1px] border-inherit px-4 py-3  sm:px-16 sm:py-7">
        <h4 className="w-[25%] text-slate-500 text-[8px] sm:text-sm ">JOBS</h4>
        <div className="  ps-2">
          {resume?.jobs.length != 0 && (
            <div>
              {resume?.jobs.map((job) => (
                <div className="flex py-1 justify-between border-b-[1px] border-slate-300 ">
                  <div>
                    <h4 className="text-sm ">{job.profile}</h4>
                    <h4 className="text-sm text-slate-500">Company: {job.organization}</h4>
                    <h4 className="text-sm text-slate-500">Location: {job.location}</h4>
                    <h4 className="text-sm text-slate-500">
                      {job.startdate}
                      {" - "}
                      {job.enddate}{" "}
                    </h4>
                    <p className="text-sm text-slate-500 hidden  sm:block sm:w-[250px] ">{job.description}</p>
                  </div>
                  <div>
                    <button >
                  <MdOutlineDelete onClick={() => DeletJob(job.id)}    className="h-5 inline-block ms-8 mt-1"/>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
          <button
            className=" block  py-1 text-sky-500 text-[8px] sm:text-sm"
            onClick={() => setAddJob()}
          >
            + Add jobs
          </button>
        </div>
      </div>
      <div className="w-full flex border-[1px] border-inherit px-4 py-3  sm:px-16 sm:py-7">
        <h4 className="w-[25%] text-slate-500 text-[8px] sm:text-sm ">INTERNSHIPS</h4>
        <div className="  ps-2">
          {resume?.internships?.length != 0 &&
            <div>
              {resume?.internships?.map((internship) => (
                <div className="flex py-1 border-b-[1px] border-slate-300  mb-2 justify-between">
                  <div>
                    <h4 className="text-sm ">{internship.profile}</h4>
                    <h4 className="text-sm text-slate-500">Company:{"  "} {internship.organization}</h4>
                    <h4 className="text-sm text-slate-500">Location:{"  "} {internship.location}</h4>
                    <h4 className="text-sm text-slate-500">Duration: {"  "}
                      {internship.startdate}
                      {" - "}
                      {internship.enddate}{" "}
                    </h4>
                    <p className=" text-[8px] sm:w-[250px] text-sm text-slate-500">Description: {internship.description}</p> 
                  </div>
                  <div>
                  <MdOutlineDelete  onClick={() => DeletInter(internship.id)} className="h-5 inline-block ms-8 mt-1"/>
                  </div>
                </div>
              ))}
            </div>
          }
          <button className="text-sky-500 text-[8px] sm:text-sm" onClick={() => setAddIntership()}>
              + Add Internships
            </button>
        </div>
      </div>
      <div className="w-full flex border-[1px] border-inherit px-4 py-3  sm:px-16 sm:py-7">
        <h4 className="w-[25%] text-slate-500 text-[8px] sm:text-sm ">
          POSITION OF <br /> RESPONSIBILITY
        </h4>
        <div className="ps-2 ">
          {resume?.responsibilities.length != 0 &&
            <div>
              {resume?.responsibilities.map((responsibilitie) => (
                <div className="flex justify-between border-b-[1px] border-slate-300 ">
                  <ul>
                    <li className="w-[180px] text-[8px] sm:w-[250px] text-sm text-slate-500 mb-2">{responsibilitie.description}</li>
                  </ul>
                  <div>
                  <MdOutlineDelete onClick={() => DeletRes(responsibilitie.id)}  className="h-5 inline-block ms-8 mt-1"/>
                  </div>
                </div>
              ))}
            </div>
          }
          <button className="text-sky-500 text-[8px] sm:text-sm " onClick={() => setAddresponsibilitie(true)}>
              + Add position of responsibility
          </button>
        </div>
      </div>
      <div className="w-full flex border-[1px] border-inherit px-4 py-3  sm:px-16 sm:py-7">
        <h4 className="w-[25%] text-slate-500 text-[8px] sm:text-sm ">TRAINING/COURSES</h4>
        <div className=" ps-2">
          {resume?.courses.length != 0 &&
            <div>
              {resume?.courses.map((course) => (
                <div className="flex py-1 justify-between border-b-[1px] border-slate-300 ">
                  <div>
                    <h4 className="text-sm ">{course.traning}</h4>
                    <h4 className="text-sm text-slate-500">{course.organization}</h4>
                    <h4 className="text-sm text-slate-500">{course.location}</h4>
                    <h4 className="text-sm text-slate-500">
                      {course.startdate}
                      {" - "}
                      {course.enddate}{" "}
                    </h4>
                    <p className="text-sm text-slate-500">{course.description}</p>
                  </div>
                  <div>
                  <MdOutlineDelete  onClick={() => Deletcourse(course.id)} className="h-5 inline-block ms-8 mt-1"/>
                  </div>
                </div>
              ))}
            </div>
          }
          <button className="text-sky-500 text-[8px] sm:text-sm" onClick={() => setAddCourses()}>
              + Add Training/Courses
          </button>
        </div>
      </div>
      <div className="w-full flex border-[1px] border-inherit px-4 py-3  sm:px-16 sm:py-7">
        <h4 className="w-[25%] text-slate-500 text-[8px] sm:text-sm ">
          ACADEMICS/ PERSONAL PROJECTS
        </h4>
        <div className=" ps-2">
          {resume?.projects.length != 0 &&
            <div>
              {resume?.projects.map((project) => (
                <div className="flex justify-between mt-2 py-1 border-b-[1px] border-slate-300 ">
                  <div>
                    <h4 className="text-sm">{project.title}</h4>
                    <a target="_blank" className="text-sm text-sky-700 " href={project.url}>Project link</a>
                    <p className="text-[8px] sm:w-[250px] text-sm text-slate-500">{project.description}</p>
                  </div>
                  <div>
                    <MdOutlineDelete onClick={() => DeletPro(project.id)}  className="h-5 inline-block ms-8 mt-1"/>
                  </div>
                </div>
              ))}
            </div>
          }
          <button className="text-sky-500 text-[8px] sm:text-sm " onClick={() => setaddproject()}>
              + Add Academics/ Personal Projects
            </button>
        </div>
      </div>
      <div className="w-full flex border-[1px] border-inherit px-4 py-3  sm:px-16 sm:py-7">
        <h4 className="w-[25%] text-slate-500 text-[8px] sm:text-sm ">SKILLS</h4>
        <div className="ps-2">
          {resume?.skills.length != 0 &&
            <div className="">
              {resume?.skills.map((skill) => (
                <div className="flex justify-between mt-3 border-b-[1px] border-slate-300 ">
                  <div>
                    <h6 className="text-sm " >{skill.skill}</h6>
                    <p className="text-sm text-slate-500" >{skill.level}</p>
                  </div>
                  <div>
                  <MdOutlineDelete onClick={() => Deletskill(skill.id)}  className="h-5 inline-block ms-8 mt-1"/>
                  </div>
                </div>
              ))}
            </div>
          }
          <button className="text-sky-500 text-[8px] sm:text-sm" onClick={() => setaddskill()}>+ Add Skills</button>

        </div>
      </div>
    </div>
    <div className="w-full flex justify-center items-center">

    <button className=" px-3 py-2 mb-10 rounded-lg bg-sky-600 text-white" onClick={() => downloadresume()}>See Resume</button>
    </div>
    </div>
    } 
    
    </Layout>
  );
};

export default EditResume;