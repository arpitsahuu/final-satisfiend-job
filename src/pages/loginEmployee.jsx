import React, { useEffect } from "react";
import Link from "next/link";
import { TiTick } from "react-icons/ti";
import { MdArrowBackIos } from "react-icons/md";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { loginStudent } from "@/redux/actions/studentAction";
import { loginEmployee } from "@/redux/actions/employeeAction";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";

const LoginEmployee = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { employee, error } = useSelector((state) => state.employee);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit((data) => {
    dispatch(loginEmployee(data));
  });

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);

  useEffect(() => {
    if (!employee) {
      return;
    }
    router.push("/");
  }, [employee]);

  return (
    <div className="flex relative">
      <Link
        href="/"
        className="absolute top-2  left-2 md:left-4 md:top-2  text-white flex items-center  cursor-pointer justify-center"
      >
        <MdArrowBackIos className="text-md " />
        <p>Back</p>
      </Link>

      <div className="w-[40%] md:w-[60%] lg:w-[40%]   hidden md:flex h-[100vh]  flex-col items-center py-[100px]  bg-[#4080ED] px-10 relative ">
        <div className="text-white flex flex-col gap-3 ">
          <div>
            <p className="text-[25px] font-semibold">
              Complete your profile! 👋
            </p>
            <p className="text-[16px]">
              Unlock 500+ jobs from top companies and receive direct calls from
              HRs
            </p>
          </div>

          <div className="flex flex-col gap-3 mt-[40px]">
            <div className="flex items-center gap-1">
              <div className="w-[16px] h-[16px] flex  items-center justify-center rounded-full bg-[#C8C2C9]">
                <TiTick className="text-[#37283A]" />
              </div>
              <p>Takes only 4 steps</p>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-[16px] h-[16px] flex  items-center justify-center rounded-full bg-[#C8C2C9]">
                <TiTick className="text-[#37283A]" />
              </div>
              <p>Takes only 4 steps</p>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-[16px] h-[16px] flex  items-center justify-center rounded-full bg-[#C8C2C9]">
                <TiTick className="text-[#37283A]" />
              </div>
              <p>Takes only 4 steps</p>
            </div>
          </div>
        </div>
        <div className="flex gap-8 text-2xl text-white absolute bottom-8 ">
            <FaFacebookSquare />
            <FaSquareXTwitter />
            <IoLogoInstagram />
            <FaLinkedin />
        </div>
      </div>
      <div className="w-[100%]  md:w-[60%] h-[100vh] flex md:bg-white md:text-black  flex-col  items-center justify-start sm:justify-center ">
      <div id="Employelongintitle" className="bg-[#4080ED] w-full h-[21%] pt-[10vh] block sm:hidden " >
        {/* <Link
          href={"/"}
          className="text-white text-[33px] font-semibold flex items-center"
        >
          SATISFIED <span className="">JOB</span>
        </Link> */}
        <h1 className=" text-white text-[33px] font-semibold text-center">SATISFIED JOB</h1>
       
        </div>
        <h1 className="text-2xl md:text-4xl font-semibold capitalize mt-14 mb-10 sm:mt-6 sm:mb-6 text-gray-800  ">
          Welcome Back
        </h1>
        <form
          onSubmit={onSubmit}
          className="flex w-[300px] md:w-[50%] flex-col  gap-[10px] items-center justify-center"
        >
          <div className="w-full">
            <p className="text-[18px] my-2 font-[500]">Email</p>
            <input
              type="text"
              style={{ border: "2px solid #D1CED4" }}
              className="  px-3 py-2  w-[100%] rounded-md outline-none"
              placeholder="please enter your email address"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <p className="text-[15px] text-red-500">please Enter email.</p>
            )}
          </div>

          <div className="w-full">
            <div className="flex items-center justify-between">
              <p className="text-[18px] my-2 font-[500]">Password</p>
              
            </div>

            <input
              type="text"
              style={{ border: "2px solid #D1CED4" }}
              className=" text-black px-3 py-2  w-[100%] rounded-md outline-none"
              placeholder="please enter your password "
              {...register("password", { required: true })}
            />
            {errors.password && (
              <p className="text-[15px] text-red-500">Please Enter Password.</p>
            )}
          </div>
          <div></div>
          <button className="bg-blue-500 hover:bg-blue-700 w-[100%] text-white bg-green font-bold py-2 px-4 focus:outline-none focus:shadow-outline rounded-3xl  bg-[#4080ED] border-2  transition duration-300 ease-in-out">
            Login
          </button>

          <p>
            All ready have a account{" "}
            <Link href="/registerEmployee" className="text-[#4080ED]">
              {" "}
              Sign up
            </Link>
          </p>
          <Link href="/admin/sendMail" className="text-sm text-[#4080ED]">
                forget password
              </Link>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default LoginEmployee;
