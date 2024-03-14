import React, { useEffect, useState, PureComponent } from "react";
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
// import {Bar} from "chart.js"
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const datas = [
  {
    name: "7-march",
    users: 500,
  },
  {
    name: "8-march",
    users: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "9-march",
    users: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "10-march",
    users: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "11-march",
    users: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "12-march",
    users: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "13-march",
    users: 3490,
    pv: 4300,
    amt: 2100,
  },
];
const renderCustomBarLabel = ({ x, y, width, height, value }) => {
  return (
    <text x={x + width / 2} y={y} fill="#666" textAnchor="middle" dy={-6}>
      {value}
    </text>
  );
};

const Main = () => {
  const router = useRouter();
  const basePath = `${process.env.NEXT_PUBLIC_REACT_APP_API_URL}`;
  const [applicationFilter, setapplicationFilters] = useState({});
  const { employee, error, allApplication, loading } = useSelector(
    (state) => state.employee
  );
  const [AdminInfo, setAdminInfo] = useState({});
  const config = () => {
    return {
      headers: {
        authorization: localStorage.getItem("token") || "", // Ensure token is always a string
      },
      withCredentials: true,
    };
  };
  const { jobs } = useSelector((e) => e.Jobs);

  useEffect(() => {
    dispatch(allJobs());
    if (employee.isAdmin) {
      GraphAdmin();
      AddAdminInformation();
    }
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
    labels: ["Today", "This Month"],
    datasets: [
      {
        label: "User Registrations",
        data: [0, 0], // Placeholder data
        backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
        borderWidth: 1,
      },
    ],
  });

  const GraphAdmin = async () => {
    const response = await axios.get(
      `${basePath}/employer/admin/registration-stats`,
      config()
    );
    let json = response.data;
    console.log(json);
    setData(json);
    // console.log(data, "data");
  };

  const AddAdminInformation = async () => {
    const response = await axios.get(
      `${basePath}/employer/admin/info`,
      config()
    );
    let json = response.data;
    console.log(json);
    setAdminInfo(json);
    console.log(data, "data");
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

      {employee?.isAdmin && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-sky-500 text-white p-6 rounded-md flex items-center justify-between">
            <AiOutlineUserAdd className="text-4xl" />
            <span className="text-2xl ml-4">
              {AdminInfo && AdminInfo?.userCount} Students
            </span>
          </div>

          <div className="bg-orange-500 text-white p-6 rounded-md flex items-center justify-between">
            <AiOutlineUserAdd className="text-4xl" />
            <span className="text-2xl ml-4">
              {AdminInfo && AdminInfo?.employerCount} Employer
            </span>
          </div>

          <div className="bg-yellow-500 text-white p-6 rounded-md flex items-center justify-between">
            <FaChartLine className="text-4xl" />
            <span className="text-2xl ml-4">
              {AdminInfo && AdminInfo?.jobCount} Jobs
            </span>
          </div>
        </div>
      )}

      {/* { data && 
      <Bar data={data} />

      } */}

      {!employee?.isAdmin && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-sky-500 text-white p-6 rounded-md flex items-center justify-between">
            <AiOutlineUserAdd className="text-4xl" />
            <span className="text-2xl ml-4">
              {allApplication && allApplication.length} Users Applied
            </span>
          </div>

          <div className="bg-orange-500 text-white p-6 rounded-md flex items-center justify-between">
            <FaChartPie className="text-4xl" />
            <span className="text-2xl ml-4">
              {jobs && jobs.length} Jobs Posted
            </span>
          </div>

          <div className="bg-yellow-500 text-white p-6 rounded-md flex items-center justify-between">
            <FaChartLine className="text-4xl" />
            <span className="text-2xl ml-4">237 Profile Viewed</span>
          </div>
        </div>
      )}
      {
        employee.isAdmin &&
        <div className=" chartbar w-full flex flex-col   items-center gap-10 ">
          <div className=" h-[200px] w-[320px] sm:h-[400px] sm:w-[600px]">
        <ResponsiveContainer className="mt-16" width="100%" height="100%">
          <BarChart
            width={50}
            height={10}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="users" fill="#4080ED" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="flex flex-col  gap-5 pt-5 mt-14 sm:mt-1">
          <div className="bg-green text-white px-5 py-5 rounded-md flex items-center justify-between barbtn">
            <span className="text-xl ml-4">
              {AdminInfo && AdminInfo?.TodayEmployerRegistration} Today Job
              Posts
            </span>
          </div>
          <div className="bg-green text-white p-6 rounded-md flex items-center justify-between barbtn">
            <span className="text-xl ml-4">
              {AdminInfo && AdminInfo?.TodayJobRegistration} Today
              Job Posts
            </span>
          </div>
        </div>
        </div>
      }
{/*       
      {employee?.isAdmin && (
        
      )} */}

      {!employee?.isAdmin && (
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
                  <td className="py-2 px-4 text-center">
                    {e.studentId?.email}
                  </td>
                  <td className="py-2 px-4 text-center">{e.jobId?.title}</td>
                  <td className="py-2 px-4 text-center">
                    {e.studentId.resumePdf.fileId ? (
                      <a href={e.studentId.resumePdf.url} target="_blank">
                        Doanload
                      </a>
                    ) : (
                      <Link href={`/watchResume/${e.studentId._id}`}>
                        Watch
                      </Link>
                    )}
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
          
          {allApplication?.length == 0 && (
            <h1 className=" font-semibold text-center mt-10">
              No Applicaion yet
            </h1>
          )}
          {/* <Bar data={data} /> */}
        </div>
      )}
    </div>
  );
};

export default Main;
