import React, { useEffect, useState } from "react";
import { IoIosSearch, IoMdMenu } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { AiOutlineUserAdd } from "react-icons/ai";
import { FaChartLine, FaChartPie } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { allApplications, updateStatus } from "@/redux/actions/employeeAction";
import { useRouter } from "next/router";
import Filter from "./FilterApplications";
import Link from "next/link";
import { allJobs } from "@/redux/actions/jobAction";
import axios from "axios";
// import { Bar } from 'react-chartjs-2';
import {Bar} from "chart.js"

const Main = () => {
  const router = useRouter();
  const basePath = `${process.env.NEXT_PUBLIC_REACT_APP_API_URL}`;
  const [applicationFilter, setapplicationFilters] = useState({});
  const { employee, error, allApplication, loading } = useSelector(
    (state) => state.employee
  );
  const config = () => {
    return {
        headers: {
            'authorization': localStorage.getItem('token') || '' // Ensure token is always a string
        },
        withCredentials: true
    };
};
  const { jobs } = useSelector((e) => e.Jobs);
  
  
  useEffect(() => {
    dispatch(allJobs());
  }, []); 
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

  //  ------------------graph---------------------
  
  const [data, setData] = useState({
    labels: ['Today', 'This Month'],
    datasets: [{
        label: 'User Registrations',
        data: [0, 0], // Placeholder data
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)'
        ],
        borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)'
        ],
        borderWidth: 1
    }]
});

  const GraphAdmin = async () => {
    const response = await axios.get(
      `${basePath}/employer/admin/registration-stats`,config()
    );
    let json = response.data;
    console.log(json)
    setData({
      ...data,
      datasets: [{
          ...data.datasets[0],
          data: [json.today, json.thisMonth]
      }]
  })
  console.log(data,"data")
  };

  // if(employee?.isAdmin){
  //   // GraphAdmin()
  //   useEffect(() => {
  //     GraphAdmin();
  //   }, [employee.isAdmin])
  // }

  

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
          <span className="text-2xl ml-4">{allApplication && allApplication.length} Users Applied</span>
        </div>

        <div className="bg-orange-500 text-white p-6 rounded-md flex items-center justify-between">
          <FaChartPie className="text-4xl" />
          <span className="text-2xl ml-4">{ jobs && jobs.length} Jobs Posted</span>
        </div>

        <div className="bg-yellow-500 text-white p-6 rounded-md flex items-center justify-between">
          <FaChartLine className="text-4xl" />
          <span className="text-2xl ml-4">237 Profile Viewed</span>
        </div>
      </div>
      {/* { data && 
      <Bar data={data} />

      } */}


      <div className="overflow-x-auto mt-8">
        <table className="min-w-full border rounded-lg overflow-hidden">
          <thead className="bg-sky-800 text-white">
            <tr>
              <th className="py-2 px-4 font-semibold">Name</th>
              <th className="py-2 px-4 font-semibold">Email</th>
              <th className="py-2 px-4 font-semibold">Job Applied</th>
              <th className="py-2 px-4 font-semibold">Resume</th>
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
                {
                    e.studentId.resumePdf.fileId ? <a href={e.studentId.resumePdf.url}  target="_blank">Doanload</a> : <Link href={`/watchResume/${e.studentId._id}`}>Watch</Link>
                  }
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
            { allApplication?.length == 0 && <h1 className=" font-semibold text-center mt-10">No Applicaion yet</h1> }
        {/* <Bar data={data} /> */}
        
      </div>
    </div>
  );
};

export default Main;
