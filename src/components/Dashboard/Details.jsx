import { getJobById } from "@/redux/actions/jobAction";
import Link from "next/link";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Container from "../Container";
import { FaHome, FaRegClock, FaShoppingBag } from "react-icons/fa";
import { MdOutlineNotStarted } from "react-icons/md";
import { IoCashOutline } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";

const Details = ({ id, setTab }) => {
  const { job, loading } = useSelector((e) => e.Jobs);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!id) {
      return;
    }
    dispatch(getJobById(id));
  }, [id]);

  return (
    <div>
      {job && (
        <Container>
          <div className="min-h-screen pt-16 px-4 flex flex-col items-center justify-center">
            <h1 className="text-xl font-semibold mb-4">{job.employer?.organisationname}</h1>

            <div className="bg-white w-full lg:max-w-[60%] p-6 rounded-md shadow-md">
              <div className="flex items-center mb-4">
                <div className="border border-gray-400 rounded-md px-2">
                  <p className="text-xs text-gray-600">Actively hiring</p>
                </div>
              </div>

              <div className="flex justify-between mb-4">
                <div>
                  <h1 className="text-lg font-semibold">{job.title}</h1>
                  <p className="text-sm text-gray-500">{job.employer?.organisationname}</p>
                </div>
                <img src={job.employer?.organisationlogo.url} className="h-6" alt="" />
              </div>

              <div className="flex items-center gap-2 font-semibold text-sm text-gray-600">
                <FaLocationDot />
                <p>{job.location}</p>
              </div>

              <div className="mt-4">
                <div className="flex flex-wrap gap-4 items-center justify-between">
                  <div className="flex flex-col items-start text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <MdOutlineNotStarted />
                      <p className="">Job Type</p>
                    </div>
                    <h3 className="text-black">{job.jobType}</h3>
                  </div>

                  <div className="flex flex-col items-start text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <IoCashOutline />
                      <p>CTC (ANNUAL)</p>
                    </div>
                    <h3 className="text-black">{job.salary}</h3>
                  </div>

                  <div className="flex flex-col items-start text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <FaShoppingBag />
                      <p>Openings</p>
                    </div>
                    <h3 className="text-black">{job.openings}</h3>
                  </div>
                </div>
              </div>

              <div className="w-full h-1 bg-gray-300 mt-4" />

              <div className="mt-4">
                <h1 className="text-md font-semibold">About the job</h1>
                <p className="text-sm md:text-base">{job.description}</p>
              </div>

              <div className="mt-4">
                <h1 className="text-md font-semibold">Requirements</h1>
                <p className="text-sm md:text-base">{job.preferences}</p>
              </div>

              <div className="mt-4">
                <h1 className="text-md font-semibold">Skills</h1>
                {job?.skills?.map((skill, index) => (
                  <p key={index} className="text-sm py-1 capitalize">
                    {skill}
                  </p>
                ))}
              </div>

              <div className="flex items-center justify-end mt-6">
                <button
                  onClick={() => {
                    setTab("Edit");
                  }}
                  className="px-4 py-2 text-sm bg-sky-500 hover:bg-sky-700 text-white rounded-md transition-all duration-300"
                >
                  Edit
                </button>
              </div>
            </div>
          </div>
        </Container>
      )}
    </div>
  );
};

export default Details;