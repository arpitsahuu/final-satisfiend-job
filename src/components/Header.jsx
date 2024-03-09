import React, { useEffect, useRef, useState } from "react";
import {
  MdDepartureBoard,
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardDoubleArrowDown,
} from "react-icons/md";
import Container from "./Container";
import Link from "next/link";
import { IoLogoSnapchat, IoPerson } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsBagFill } from "react-icons/bs";
import { FaHome } from "react-icons/fa";

import { MdKeyboardArrowDown } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { logoutStudent } from "@/redux/actions/studentAction";
import { useRouter } from "next/router";
import {
  currentEmployee,
  logoutEmployee,
} from "@/redux/actions/employeeAction";
const Header = () => {
  const { student, error } = useSelector((state) => state.student);
  const { employee, error: error2 } = useSelector((state) => state.employee);
  const dispatch = useDispatch();

  const router = useRouter();
  const [show, setShow] = useState(false);
  const [sidebar, setSidebar] = useState(false);
  const sideRef = useRef(null);

  const handelClick = () => {
    // sideRef.current.style.transition = "transform 0.3s ease-in-out";
    // sideRef.current.style.transform = "translateX(100%)";
    setSidebar(!sidebar);
  };

  function handelLogout() {
    dispatch(logoutStudent());
    dispatch(logoutEmployee());
    router.push("/");
  }

  useEffect(() => {
    dispatch(currentEmployee());
  }, []);

  return (
    <div className="w-full flex fixed  z-50 justify-center bg-[#F4F2F6]">
      <div className=" w-full    hidden md:flex items-center justify-between px-[20px] max-w-screen-xl  py-[20px]  bg-gray z-50 relative">
        <Link
          href={"/"}
          className="text-green text-[20px] font-semibold flex items-center"
        >
          {/* <img src="./logo.png" className="w-[40px] h-[40px]" alt="" /> */}
          SATISFIED <span className="text-black">JOB</span>
        </Link>
        <div className="flex items-center gap-[20px] font-semibold">
          {student || employee ? (
            <>
              {student && (
                <>
                  <Link href="/Job">Jobs</Link>
                  <Link href="/applied">Applied</Link>
                  <Link href="/profile">Profile</Link>
                </>
              )}

              {employee && (
                <>
                  <Link href="/dashboard">Dashboard</Link>
                </>
              )}

              <button
                onClick={handelLogout}
                className="px-3 py-1  border-green border-2  hover:text-white hover:bg-green rounded-[5px] text-green"
                style={{ transition: "all 0.5s" }}
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                href="/loginUser"
                className="px-3 py-1  border-green border-2  hover:text-white hover:bg-green rounded-[5px] text-green"
                style={{ transition: "all 0.5s" }}
              >
                Student
              </Link>

              <Link
                href="/loginEmployee"
                className="px-3 py-1  border-green border-2 text-white bg-green hover:bg-transparent hover:text-[#4F91CE]	 rounded-[5px] "
                style={{ transition: "all 0.5s" }}
              >
                Employee
              </Link>
            </>
          )}
        </div>
      </div>

      <div className="w-[100%] h-[40px]  md:hidden flex items-center gap-2 px-2 py-[30px]  justify-between fixed bg-gray ">
        <div className="flex gap-3 items-center text-[20px]">
          <GiHamburgerMenu className="" onClick={handelClick} />
        </div>
        <h1 className="text-green text-[20px] font-semibold flex items-center">
          SATISFIED <span className="text-black">JOB</span>
        </h1>
        <div className="flex items-center gap-3">
          {student || employee ? (
            <div className="flex items-center gap-1 relative">
              <div className="w-[30px] h-[30px] cursor-pointer flex items-center justify-center bg-green text-white rounded-full">
                <IoPerson
                  className="text-sm"
                  onClick={() => setShow((e) => !e)}
                />
              </div>
              {show && <PopUp handelLogout={handelLogout} />}
            </div>
          ) : (
            <>
              <Link href={"/loginEmployee"} className="text-green">
                Employer
              </Link>
              <Link
                href={"/loginUser"}
                className="bg-green px-2 py-1 rounded-md text-white"
              >
                Candidate
              </Link>
            </>
          )}
        </div>
        {sidebar && <Sidebar sideRef={sideRef} funSideBar={handelClick} />}
      </div>
    </div>
  );
};

export default Header;

function PopUp({ handelLogout }) {
  const { student, error } = useSelector((state) => state.student);
  const { employee, error: error2 } = useSelector((state) => state.employee);
  return (
    <div
      className="transition ease-in-out delay-150 bg-blue-500 text-center w-[150px] h-[100px] bg-white flex flex-col gap-2  justify-center absolute right-[20px] pl-[15px] top-[110%] text-[#7C7C7C]"

    >
      {student && <Link href={"/profile"}>Your Profile</Link>}
      {employee && <Link href={"/dashboard"}>Dashboard</Link>}
      <button onClick={handelLogout}>Logout</button>
    </div>
  );
}

function Sidebar({ funSideBar, sideRef }) {
  return (
    <div>
      <div
        ref={sideRef} style={{ transition: "all 0.5s" }}
        // style={{ transform: "translateX(-100%)" }}
        className="fixed z-50 w-[70vw] h-[100vh] top-0 left-0 bg-cyan-700 px-[20px] py-[20px] rounded-r-lg "
      >
        <Link
          href={"/"}
          className="text-white text-[15px] font-semibold flex items-center"
        >
          {/* <img src="./logo.png" className="w-[40px] h-[40px]" alt="" /> */}
          SATISFIED <span className="text-black">JOB</span>
        </Link>

        <div className="py-[50px] flex flex-col gap-4">
          <Link
            href="/Job"
            className="flex items-center  gap-2 text-white text-[16px] capitalize"
          >
            <BsBagFill />

            <p>Job</p>
          </Link>

          <Link
            href={"/profile"}
            className="flex items-center  gap-2 text-white text-[16px] capitalize"
          >
            <MdDepartureBoard />
            <p>Profile</p>
          </Link>

          <Link
            href={"/applied"}
            className="flex items-center  gap-2 text-white text-[16px] capitalize"
          >
            <BsBagFill />
            <p>Applied Status</p>
          </Link>
          <hr className="text-white" />
          <div className="text-[14px] flex flex-col gap-4">
            <div className="flex items-center  justify-between gap-2 text-white  capitalize">
              <p>Job by type</p>
              <MdOutlineKeyboardArrowDown className="text-[24px]" />
            </div>

            <div className="flex items-center  justify-between gap-2 text-white  capitalize">
              <p>Job by city</p>
              <MdOutlineKeyboardArrowDown className="text-[24px]" />
            </div>

            <div className="flex items-center  justify-between gap-2 text-white  capitalize">
              <p>Job by Department</p>
              <MdOutlineKeyboardArrowDown className="text-[24px]" />
            </div>

            <div className="flex items-center  justify-between gap-2 text-white  capitalize">
              <p>Job by company</p>
              <MdOutlineKeyboardArrowDown className="text-[24px]" />
            </div>

            <div className="flex items-center  justify-between gap-2 text-white  capitalize">
              <p>other</p>
              <MdOutlineKeyboardArrowDown className="text-[24px]" />
            </div>
          </div>
        </div>
      </div>
      <div
        onClick={funSideBar}
        className="w-[30vw] h-[100vh] absolute  right-0 top-0"
      ></div>
    </div>
  );
}
