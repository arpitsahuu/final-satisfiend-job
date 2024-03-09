import React, { useEffect, useState } from "react";
import { IoIosSearch, IoMdMenu } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { AiOutlineUserAdd } from "react-icons/ai";
import { FaChartLine, FaChartPie } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { allApplications, updateStatus } from "@/redux/actions/employeeAction";
import { useRouter } from "next/router";
import Filter from "./FilterApplications";
const Main = () => {
  const router = useRouter();
  const [applicationFilter, setapplicationFilters] = useState({});
  const { employee, error, allApplication, loading } = useSelector(
    (state) => state.employee
  );
  const dispatch = useDispatch();
  const [statusMap, setStatusMap] = useState({});

  useEffect(() => {
    dispatch(allApplications(applicationFilter));
  }, [applicationFilter]);

  const handleSelectChange = (id, event) => {
    const selectedStatus = event.target.value;
    dispatch(updateStatus({ id, status: selectedStatus }));
    setStatusMap((prevStatusMap) => ({
      ...prevStatusMap,
      [id]: selectedStatus,
    }));
  };

  useEffect(() => {
    if (allApplication) {
      const initialStatusMap = {};
      allApplication.forEach((app) => {
        initialStatusMap[app._id] = app.status || "pending";
      });
      setStatusMap(initialStatusMap);
    }
  }, [allApplication]);

  return (
    <div className="h-[100vh] bg-gray-200 container mx-auto p-4">
      <div className="flex flex-col items-center justify-between mb-8">
        <div className="text-2xl font-bold">Dashboard</div>
        <div className="flex items-center space-x-4">
          {/* <Filter setapplicationFilters={setapplicationFilters} /> */}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-sky-500 text-white p-6 rounded-md flex items-center justify-between">
          <AiOutlineUserAdd className="text-4xl" />
          <span className="text-2xl ml-4">76 Users Applied</span>
        </div>

        <div className="bg-orange-500 text-white p-6 rounded-md flex items-center justify-between">
          <FaChartPie className="text-4xl" />
          <span className="text-2xl ml-4">3 Jobs Posted</span>
        </div>

        <div className="bg-yellow-500 text-white p-6 rounded-md flex items-center justify-between">
          <FaChartLine className="text-4xl" />
          <span className="text-2xl ml-4">237 Profile Viewed</span>
        </div>
      </div>

      <div className="overflow-x-auto mt-8">
        <table className="min-w-full border rounded-lg overflow-hidden">
          <thead className="bg-sky-800 text-white">
            <tr>
              <th className="py-2 px-4 font-semibold">Name</th>
              <th className="py-2 px-4 font-semibold">Email</th>
              <th className="py-2 px-4 font-semibold">Job Applied</th>
              <th className="py-2 px-4 font-semibold">Contact</th>
              <th className="py-2 px-4 font-semibold">Update Status</th>
            </tr>
          </thead>
          <tbody className="bg-orange-100">
            {allApplication?.map((e, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? "bg-orange-100" : "bg-white"}
              >
                <td className="py-2 px-4 text-center">{`${e.studentId?.firstname} ${e.studentId?.lastname}`}</td>
                <td className="py-2 px-4 text-center">{e.studentId?.email}</td>
                <td className="py-2 px-4 text-center">{e.jobId?.title}</td>
                <td className="py-2 px-4 text-center">
                  {e.studentId?.contact}
                </td>
                <td className="py-2 px-4 text-center">
                  <select
                    className="bg-white border rounded-md py-1 px-2"
                    value={statusMap[e._id] || "pending"}
                    onChange={(event) => handleSelectChange(e._id, event)}
                  >
                    <option value="Pending">Pending</option>
                    <option value="Accepted">Accept</option>
                    <option value="Rejected">Reject</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Main;
