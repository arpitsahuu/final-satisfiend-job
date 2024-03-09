import Container from "@/components/Container";
import Layout from "@/components/Layout";
import { getApplication } from "@/redux/actions/studentAction";
import React, { useEffect } from "react";
import { FaRupeeSign, FaShoppingBag } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import { MdOutlineNotStarted } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";

const ApplicationCard = ({ status, jobId }) => {
  const getStatusBackgroundColor = () => {
    switch (status) {
      case "Pending":
        return "bg-[#ebf8ff]";
      case "Accepted":
        return "bg-[#50C878]";
      case "Rejected":
        return "bg-red-200";
      default:
        return "bg-gray-200";
    }
  };

  return (
    <div className={`bg-white w-full rounded-[10px] overflow-hidden shadow-lg mb-4`}>
      <div className={`p-4  ${getStatusBackgroundColor()}`}>
        <p className="text-sm font-semibold">{status}</p>
      </div>
      <div className="p-4">
        <h1 className="text-lg font-semibold mb-2">{jobId.title}</h1>
        <div className="flex items-center gap-1 font-semibold text-sm">
          <IoLocation />
          <p className="capitalize">{jobId.location}</p>
        </div>
        <div className="flex items-center gap-2 text-sm text-[#8A8A8A] mt-2">
          <div className="flex items-center gap-2">
            <MdOutlineNotStarted />
            <p className="">Job Type</p>
          </div>
          <p>{jobId.jobType}</p>
        </div>
        <div className="flex items-center gap-2 text-sm text-[#8A8A8A]">
          <div className="flex items-center gap-2">
            <FaRupeeSign />
            <p>CTC (ANNUAL)</p>
          </div>
          <p>{jobId.salary}</p>
        </div>
        <div className="flex items-center gap-2 text-sm text-[#8A8A8A]">
          <div className="flex items-center gap-2">
            <FaShoppingBag />
            <p>Opening</p>
          </div>
          <p>{jobId.openings}</p>
        </div>
      </div>
    </div>
  );
};

const Applied = () => {
  const dispatch = useDispatch();
  const { applications } = useSelector((state) => state.student);

  useEffect(() => {
    dispatch(getApplication());
  }, []);

  return (
    <Layout>
      <Container>
        <div className="min-h-[100vh] pt-16 flex flex-col items-center mt-[50px]">
          <h1 className="text-2xl font-semibold mb-6">Job Application Status</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
            {applications &&
              applications?.map(({ status, jobId }, i) => (
                <ApplicationCard key={i} status={status} jobId={jobId} />
              ))}
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export default Applied;
