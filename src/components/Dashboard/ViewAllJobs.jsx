import { allJobs, createJobs } from "@/redux/actions/jobAction";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaHome, FaRegClock, FaRupeeSign, FaShoppingBag } from "react-icons/fa";
import { IoCashOutline, IoLocation } from "react-icons/io5";
import { MdOutlineNotStarted } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import Filter from "../Filter";
useState
const ViewAllJobs = ({ setTab, setId }) => {
  const { jobs } = useSelector((e) => e.Jobs);
  const { employee, error } = useSelector((e) => e.employee);
  const [jobFilters, setJobFilters] = useState({});
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(allJobs(jobFilters));
  }, [jobFilters]);

  // allJobs

  return (
    <div className="h-[100vh]">
      <div className="sub-nav">
        <div className="left">
          <h1>Total Jobs Posted ({jobs?.length})</h1>
          <div className="flex w-full">
          <Filter setJobFilters={setJobFilters}/>
          </div>
         
        </div>
        {/* <div className="right">
            <button onClick={()=>setTab("ViewAllJobs")}>
              <i className="ri-add-line" /> &nbsp; Add new job
            </button>
        </div> */}
      </div>
      <div className="viewAllJobs-content flex  items-center justify-center flex-wrap ">
        {jobs?.map(
          ({
            _id,
            salary,
            jobType,
            description,
            openings,
            perks,
            skills,
            title,
            category,
            location,
          }) => {
            return (
              <>
                <div
                  key={_id}
                  className="bg-stone-50	shadow-md rounded-[20px] w-fit h-fit px-[20px] min-w-[46%] py-[20px] flex flex-col gap-3"
                >
                  <div className="flex border-[0.5px] rounded-[4px] px-2 w-fit border-[#8A8A8A]">
                    <p className="text-[12px]">Actively hiring</p>
                  </div>

                  <div className="flex justify-between w-full">
                    <div>
                      <h1 className="text-[14px] font-semibold  mr-[140px]">
                        {title}
                      </h1>

                      <div className="flex gap-2">
                        {skills.map((e,i) => {
                          return (
                            <>
                              <p key={i} className="text-sm text-[#8A8A8A]">{e}</p>
                            </>
                          );
                        })}
                      </div>
                    </div>
                    <img
                      src={employee.organisationlogo.url}
                      className="h-[18px] "
                      alt=""
                    />
                  </div>

                  <div className="flex items-center gap-1 font-[500] text-sm">
                    <IoLocation />
                    <p className="capitalize">{location}</p>
                  </div>

                  <div>
                    <div className="flex flex-wrap gap-2 lg:-0 items-center justify-between ">
                      <div className=" flex flex-col items-start justify-start text-sm  text-[#8A8A8A]">
                        <div className="flex items-center justify-center  gap-2">
                          <MdOutlineNotStarted />
                          <p className="">Job Type</p>
                        </div>
                        <h3 className="text-black">{jobType}</h3>
                      </div>

                      <div className=" flex flex-col items-start justify-start text-sm  text-[#8A8A8A]">
                        <div className="flex items-center justify-center  gap-2">
                          <FaRupeeSign />
                          <p>CTC (ANNUAL)</p>
                        </div>
                        <h3 className="text-black">{salary}</h3>
                      </div>

                      <div className=" flex flex-col items-start justify-start text-sm  text-[#8A8A8A]">
                        <div className="flex items-center justify-center  gap-2">
                          <FaShoppingBag />
                          <p>Opening</p>
                        </div>
                        <h3 className="text-black">{openings}</h3>
                      </div>
                    </div>
                  </div>

                  <div className="w-full h-[1px]" />

                  <div className="flex items-center gap-3 justify-end">
                    <div
                      onClick={() => {
                        setId(_id);
                        setTab("Edit");
                      }}
                      className="border-2 px-2 py-1 text-sm border-green text-green hover:bg-green hover:text-white rounded-md"
                      style={{ transition: "all .5s " }}
                    >
                      Edit
                    </div>

                    <div
                      onClick={() => {
                        setId(_id);

                        setTab("Details");
                      }}
                      className="border-2 px-2 py-1 text-sm border-green text-green hover:bg-green hover:text-white rounded-md"
                      style={{ transition: "all .5s " }}
                    >
                      View details
                    </div>
                  </div>
                </div>
              </>
            );
          }
        )}
        { jobs?.length == 0 && <h1 className=" font-semibold text-center mt-10 text-slate-600 text-xl ">
              You have not post any Job yet !
            </h1>}
      </div>
    </div>
  );
};

export default ViewAllJobs;