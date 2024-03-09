import { getJobById } from "@/redux/actions/jobAction";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { createJobs } from "@/redux/actions/jobAction";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EditJobs = ({ id, setTab }) => {

  const { job, loading } = useSelector((e) => e.Jobs);
  
  const dispatch = useDispatch();

  useEffect(() => {
    if (!id) {
      return;
    }
    dispatch(getJobById(id));
  }, [id]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  useEffect(() => {
    if (job) {
      reset(job);
    }
  }, [job, reset]);

  const onSubmit = (data) => {
    dispatch(getJobById(id, data));
    setTab("ViewAllJobs");
    reset();
    toast.success("Job edit successful");
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            {...register("title", { required: true })}
          />
          {errors.title && (
            <span className="text-red-500 text-sm">Title is required</span>
          )}
        </div>
        <div>
          <label htmlFor="skills">Skills:</label>
          <input
            type="text"
            id="skills"
            {...register("skills", { required: true })}
          />
          {errors.skills && (
            <span className="text-red-500 text-sm">Skills are required</span>
          )}
        </div>
        <div>
          <label htmlFor="jobType">Job Type:</label>
          <select id="jobType" {...register("jobType", { required: true })}>
            <option value="">Select Job Type</option>
            <option value="In Office">In Office</option>
            <option value="Remote">Remote</option>
          </select>
          {errors.jobType && (
            <span className="text-red-500 text-sm">Job Type is required</span>
          )}
        </div>
        <div>
          <label htmlFor="category">Category:</label>
          <select id="category" {...register("category", { required: true })}>
            <option value="">Select Category</option>
            <option value="Internship">Internship</option>
            <option value="job">Job</option>
          </select>
          {errors.category && (
            <span className="text-red-500 text-sm">Category is required</span>
          )}
        </div>
        <div>
          <label htmlFor="openings">Openings:</label>
          <input
            type="text"
            id="openings"
            {...register("openings", { required: true })}
          />
          {errors.openings && (
            <span className="text-red-500 text-sm">Openings are required</span>
          )}
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            {...register("description", { required: true })}
          ></textarea>
          {errors.description && (
            <span className="text-red-500 text-sm">
              Description is required
            </span>
          )}
        </div>
        <div>
          <label htmlFor="preferences">Preferences:</label>
          <textarea
            id="preferences"
            {...register("preferences", { required: true })}
          ></textarea>
          {errors.preferences && (
            <span className="text-red-500 text-sm">
              Preferences are required
            </span>
          )}
        </div>
        <div>
          <label htmlFor="salary">Salary:</label>
          <input
            type="NUMBER"
            id="salary"
            className="w-full h-[40px] outline-none"
            {...register("salary", { required: true })}
          />
          {errors.salary && (
            <span className="text-red-500 text-sm">Salary is required</span>
          )}
        </div>

        <div cla>
          <label htmlFor="salary">location</label>
          <input
            type="text"
            id="salary"
            {...register("location", { required: true })}
          />
          {errors.location && (
            <span className="text-red-500 text-sm">location is required</span>
          )}
        </div>

       
    
        <button type="submit" className="mt-[20px]">Submit</button>
        <ToastContainer></ToastContainer>
      </form>
    </div>
  );
};

export default EditJobs;
