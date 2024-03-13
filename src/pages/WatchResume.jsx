import React, { useEffect, useState } from "react";

import { jsPDF } from "jspdf";
import { useDispatch, useSelector } from "react-redux";
import { setResumeaction } from "@/redux/actions/resumeAction";
import { currentStudent } from "@/redux/actions/studentAction";
import html2canvas from "html2canvas";

function Resume() {

  const [showButton, setShowButton] = useState(
    typeof window !== "undefined" && window.innerWidth > 880
  );

  useEffect(() => {
    const handleResize = () => {
      setShowButton(typeof window !== "undefined" && window.innerWidth > 880);
    };

    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", handleResize);
      }
    };
  }, []);

  const downloadPDF = () => {
    if (typeof window === "undefined") {
      // Skip download if not in a browser environment
      return;
    }

    const element = document.getElementById("resume");

    // Use html2canvas to take a screenshot of the element
    html2canvas(element, {
      scale: window.devicePixelRatio, // Use device's pixel ratio to maintain visual fidelity
      logging: true,
      useCORS: true, // Helps with loading external resources, if any
    }).then((canvas) => {
      // Initialize jsPDF
      const imgWidth = 210; // A4 width in mm
      const maxImgHeight = 250; // Maximum allowed height in mm
      let imgHeight = (canvas.height * imgWidth) / canvas.width;

      // Check if the height exceeds the maximum allowed height
      if (imgHeight > maxImgHeight) {
        imgHeight = maxImgHeight;
      }

      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm");
      let position = 0;

      // Add image to PDF
      pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
      pdf.save("resume.pdf");
    });
  };

  

  const dispatch = useDispatch();
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

  useEffect(() => {
    if (student) {
      setStudentProfile((prevStudentProfile) => ({
        ...prevStudentProfile,
        ...student,
      }));
      dispatch(setResumeaction(student));
    }
  }, [student]);
  useEffect(() => {
    dispatch(currentStudent());
  }, []);

  return (
    <div className="bg-gray-100 p-5 lg:p-10  ">
      <h1 className=" text-center font-medium sm:font-semibold text-xl sm:text-2xl mb-5 ">This is an <span className=" text-sky-800">ATS-friendly</span>  Resume that will Elevate your job search success</h1>
      <div
        className="max-w-4xl mx-auto bg-white shadow-lg  font-bold print:body print:margin-0 print:padding-0 print:box-border print:size-A4 print:portrait screen:@page-size-210mm-297mm screen:margin-0 screen:box-border screen:w-210mm screen:h-297mm "
        id="resume"
      >
        <div className="mb-3 flex justify-between px-8 py-8 bg-slate-300">
          <div className="flex justify-center">
            <h1 className=" uppercase text-2xl sm:text-4xl ">
              {student?.firstname} {student?.lastname}
            </h1>
          </div>
          <div className=' font-medium text-[10px] sm:text-sm mt-1 " '>
            <ul className="flex  flex-col text-end text-slate-700 ">
              {student?.contact  && <li>+91-{student.contact}</li>}
              <li className="flex"> {student?.email}</li>
            </ul>
          </div>
        </div>
        <div className="px-8 pb-3">
       

          <h2 className="text-base  mb-3 sm:text-xl sm:mb-2">Education</h2>
          {resume?.education != 0 && (
            <div className=" border-t-2 border-slate-400 py-2">
              {resume?.education?.map((education) => (
                <div>
                  <div className="flex  justify-between gap-10 mb-">
                    <div>
                      {education.school && (
                        <h2 className=" font-medium text-sm">
                          {education.school} | {education.location}
                        </h2>
                      )}
                      {education.college && (
                        <h2 className=" font-medium text-sm">
                          {education.college} | {education.location}
                        </h2>
                      )}
                    </div>
                    <div>
                      <h6 className="font-medium text-sm text-slate-700 ">
                        {education.endyear}
                      </h6>
                    </div>
                  </div>
                  <div className="flex  mb-1 ">
                    {education.class && (
                      <h3 className=" font-medium text-sm text-slate-700 ">
                        {education.class} | {education.Stream}
                      </h3>
                    )}
                    {education.degree && (
                      <h3 className=" font-medium text-sm text-slate-700 ">
                        {education.degree} | {education.Stream}
                      </h3>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
          <h2 className="text-base mb-3 sm:text-xl sm:mb-2">Experience</h2>
          {resume?.jobs.length != 0 && (
            <div className=" border-t-2 border-slate-400 py-2">
              {resume?.jobs?.map((job) => (
                <div>
                  <div className="flex  justify-between gap-10 mb-">
                    <div>
                      <h2 className=" font-medium text-sm">
                        {job.profile} | {job.location}
                      </h2>
                    </div>
                    <div>
                      <h6 className="font-medium text-sm text-slate-700 ">
                        {job.enddate}
                      </h6>
                    </div>
                  </div>
                  <div className="flex   ">
                    <h3 className=" font-medium text-sm text-slate-700 ">
                      {job.organization}
                    </h3>
                  </div>
                  <div>
                    <p className="text-xs text-slate-600 mb-2">
                      {job.description}
                    </p>
                  </div>
                </div>
            
              ))}
            </div>
          )}
          {resume?.internships?.length != 0 && (
            <h2 className="text-base mb-3 sm:text-xl sm:mb-2">Interships</h2>
          )}

          {resume?.internships?.length != 0 && (
            <div className=" border-t-2 border-slate-400 py-2">
              {resume?.internships?.map((intership) => (
                <div>
                  <div className="flex  justify-between gap-10 mb-">
                    <div>
                      <h2 className=" font-medium text-sm">
                        {intership.profile} | {intership.location}
                      </h2>
                    </div>
                    <div>
                      <h6 className="font-medium text-sm text-slate-700 ">
                        {intership.enddate}
                      </h6>
                    </div>
                  </div>
                  <div className="flex   ">
                    <h3 className=" font-medium text-sm text-slate-700 ">
                      {intership.organization}
                    </h3>
                  </div>
                  <div>
                    <p className="text-xs text-slate-600 mb-2">
                      {intership.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
          {resume?.projects.length != 0 && (
            <h2 className="text-base mb-3 sm:text-xl sm:mb-2">Projects</h2>
          )}
          {resume?.projects.length != 0 && (
            <div className=" border-t-2 border-slate-400 py-2">
              {resume?.projects?.map((project) => (
                <div>
                  <div className="flex  justify-between gap-10 mb-">
                    <div>
                      <h2 className=" font-medium text-sm">{project.title}</h2>
                    </div>
                  </div>
                  <div className="flex  ">
                    <h3 className=" font-medium text-sm text-slate-700 ">
                      <a className=" text-sky-500 " href={project.url}>
                        {" "}
                        Project Link
                      </a>
                    </h3>
                  </div>
                  <ul>
                    <li className=" text-xs text-slate-700 mb-2 ">
                      {project.description}
                    </li>
                  </ul>
                </div>
              ))}
            </div>
          )}

          {resume?.skills.length != 0 && (
            <h2 className="text-base mb-3 sm:text-xl sm:mb-2">Skills</h2>
          )}
          {resume?.skills.length != 0 && (
            <div className=" border-t-2 border-slate-400 py-2">
              {resume?.skills?.map((skill) => (
                <div className="px-3">
                  <ul className=" flex gap-10 flex-wrap list-disc ">
                    <li className=" text-xs">{skill.skill} <spans className=" text-slate-500">({skill.level})</spans></li>
                  </ul>
                </div>
              ))}
            </div>
          )}
          {resume.courses && (
            <h2 className="text-base mb-3 sm:text-xl sm:mb-2">
              Course/ Traning
            </h2>
          )}

          {resume?.courses.length != 0 && (
            <div className=" border-t-2 border-slate-400 py-2">
              {resume?.courses?.map((course) => (
                <div>
                  <div className="flex  justify-between gap-10 mb-">
                    <div>
                      <h2 className=" font-medium text-sm">
                        {course.traning} | {course.location}
                      </h2>
                    </div>
                    <div>
                      <h6 className="font-medium text-sm text-slate-700 ">
                        {course.enddate}
                      </h6>
                    </div>
                  </div>
                  <div className="flex  mb-1 ">
                    <h3 className=" font-medium text-sm text-slate-700 ">
                      {course.organization}
                    </h3>
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 mb-2">
                      {course.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {resume.responsibilities && (
            <h2 className="text-base mb-3 sm:text-xl sm:mb-2">
              POSITION OF RESPONSIBILITY
            </h2>
          )}

          {resume?.responsibilities.length != 0 && (
            <div className=" border-t-2 border-slate-300 py-2 mb-5">
              {resume?.responsibilities?.map((res) => (
                <div>
                  <div>
                    <p className="text-xs text-slate-600">
                      {res.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="w-full flex justify-center items-center">
        {showButton ? (<button
          onClick={() => downloadPDF()}
          className="mt-5 p-3 m-auto bg-red-500 text-white rounded"
        >
          Download Resume
        </button>): <p className="mt-3">Pleas Open it in desktop for Download PDF</p>}
        
      </div>
      {/* Download Button */}
    </div>
  );
}

export default Resume;