import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { CgProfile } from "react-icons/cg";
import { MdDashboard } from "react-icons/md";
import { FaUsersViewfinder } from "react-icons/fa6";
import { CiEdit } from "react-icons/ci";
import { IoIosSearch, IoMdMenu } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { currentEmployee } from "@/redux/actions/employeeAction";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";
import { MdWork } from "react-icons/md";
import { FaChalkboardUser } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";

const Layout = ({ children, setTab, tab }) => {
  const router = useRouter();
  const { employee, error, loading, isAuthenticated } = useSelector(
    (state) => state.employee
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (error === "jwt expired") {
      router.push("/");
      return;
    }

    if (error) {
      toast.error(error);
    }
  }, [error]);

  useEffect(() => {
    if (!employee) {
      router.push("/");
    }
  }, [employee]);

  useEffect(() => {
    dispatch(currentEmployee());
  }, []);

  useEffect(() => {
    if (!employee) {
      dispatch(currentEmployee());
    }
  }, [employee]);

  const menuBtn = useRef(null);
  const sidebar = useRef(null);

  let flag = 0;

  const handleClick = () => {
    if (flag === 0) {
      sidebar.current.style.transform = "translateX(0px)";
      flag = 1;
    } else {
      sidebar.current.style.transform = "translateX(-100%)";
      flag = 0;
    }
  };
  const handleLinkClick = (value) =>{
    handleClick()
    setTab(value);
  }

  return (
    <div>
      <div className="main">
        <div className="dashboard">
          <div className="sidebar" ref={sidebar}>
            <RxCross1  className=" absolute right-5 top-4 block  md:hidden  " onClick={handleClick} />
            <div className="text-center text-2xl font-semibold cursor-pointer">
              <Link  href={"/"}>SatisfiedJob</Link>
            </div>
            <div className="sidebar-links">
              <link href="/index.html" />
              <h3
                className={`flex items-center gap-1  cursor-pointer ${
                  tab === "Main" ? "bg-white text-black" : ""
                }`}
                onClick={() => handleLinkClick("Main")}
              >
                <MdDashboard /> Dashboard
              </h3>
              <h3
                className={`flex items-center gap-1 cursor-pointer  ${
                  tab === "Profile" ? "bg-white text-black" : ""
                }`}
                onClick={() => setTab("Profile")}
              >
                <CgProfile /> Profile
              </h3>
              <h3
                className={`flex items-center gap-1  cursor-pointer  ${
                  tab === "ViewAllJobs" ? "bg-white text-black" : ""
                }`}
                onClick={() => setTab("ViewAllJobs")}
              >
                <FaUsersViewfinder /> View all jobs
              </h3>
              <h3
                className={`flex items-center gap-1  cursor-pointer ${
                  tab === "CreateJob" ? "bg-white text-black" : ""
                }`}
                onClick={() => setTab("CreateJob")}
              >
                <CiEdit /> Create Job
              </h3>
              {employee?.isAdmin && (
                <h3
                  className={`flex items-center gap-1  cursor-pointer ${
                    tab === "AllUsers" ? "bg-white text-black" : ""
                  }`}
                  onClick={() => setTab("AllUsers")}
                >
                  <FaChalkboardUser  /> All Users
                </h3>
              )}
              {employee?.isAdmin && (
                <h3
                  className={`flex items-center gap-1  cursor-pointer ${
                    tab === "AllEmploye" ? "bg-white text-black" : ""
                  }`}
                  onClick={() => setTab("AllEmploye")}
                >
                  <FaChalkboardUser /> All Employe
                </h3>
              )}
              {employee?.isAdmin && (
                <h3
                  className={`flex items-center gap-1  cursor-pointer ${
                    tab === "" ? "bg-white text-black" : ""
                  }`}
                  onClick={() => setTab("WebsiteJobs")}
                >
                  <FaUsersViewfinder /> Website Jobs
                </h3>
              )}
            </div>
            <div className="social-links">
              <h5>
                <i className="ri-facebook-circle-fill" /> Facebook
              </h5>
              <h5>
                <i className="ri-twitter-fill" /> Twitter
              </h5>
            </div>
          </div>
          <div className="dashboard-content ">
            <nav className="flex items-center md:items-start">
              <div className="text-whitep-4 text-center flex flex-col items-center w-full">
                <h1 className="text-2xl font-semibold">SatisfiedJob</h1>
                <h6 className="text-sm">28 Jobs Found</h6>
              </div>

              <div className="nav-right text-[20px]">
                <IoMdMenu
                  ref={menuBtn}
                  id="menu-btn"
                  onClick={handleClick}
                  className="md:hidden"
                />
              </div>
            </nav>
            {children}
          </div>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Layout;
