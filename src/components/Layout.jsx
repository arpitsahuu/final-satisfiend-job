import React, { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { currentStudent } from "@/redux/actions/studentAction";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";

const Layout = ({ children }) => {
  const { student, error } = useSelector((state) => state.student);
  const dispatch = useDispatch();
  const router = useRouter();
useEffect(()=>{
  if(!student){
    router.push('/')
  }
},[student])
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
    dispatch(currentStudent());
  }, []);

  return (
    <div className="font-inter w-[100vw] font-medium bg-gray min-h-[100vh] paragraph flex flex-col items-center">
      <Header />
      {children}
      <Footer />
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Layout;
