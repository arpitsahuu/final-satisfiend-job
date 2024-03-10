import { createJobs } from "@/redux/actions/jobAction";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { IoMdClose } from "react-icons/io";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const JobForm = () => {
  const [skills, setSkills] = useState([]);
  const [newSkill, setNewSkill] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    data = { ...data, skills };
    dispatch(createJobs(data));
    setSkills([])
    reset();
    toast.success("Job Created Successfully");

  };

  const handleSkillChange = (event) => {
    if (event.key === "Enter") {
      const newSkillTrimmed = newSkill.trim();
      if (newSkillTrimmed !== "" && !skills.includes(newSkillTrimmed)) {
        setSkills([...skills, newSkillTrimmed]);
        setNewSkill(""); // Clear the input field after adding the skill
      }
    }
  };

  const handleInputChange = (event) => {
    setNewSkill(event.target.value);
  };

  const handleRemoveSkill = (skillToRemove) => {
    setSkills(skills.filter((skill) => skill !== skillToRemove));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          placeholder="Ex. Mern stack developer"
          {...register("title", { required: true })}
        />
        {errors.title && (
          <span className="text-red-500 text-sm">Title is required</span>
        )}
      </div>
      {/* <div>
        <label htmlFor="skills">Skills:</label>
        <input
          type="text"
          id="skills"
          {...register("skills", { required: true })}
        />
        {errors.skills && (
          <span className="text-red-500 text-sm">Skills are required</span>
        )}
      </div> */}
      <div>
        <label htmlFor="skills">Skills: <span className=" font-normal text-xs text-slate-500">(please press enter button to add skill)</span> </label>
        <input
          type="text"
          id="skills"
          value={newSkill}
          placeholder="Ex. java"
          onKeyDown={handleSkillChange}
          onChange={handleInputChange}
        />
        <ul className="flex  gap-1 justify-start items-center my-2">
          {skills.map((skill, index) => (
            <li
              className="border px-2 py-1  rounded-md bg-white cursor-pointer flex items-center justify-center gap-1"
              key={index}
              onClick={() => handleRemoveSkill(skill)}
            >
              <span>{skill}</span>
              <IoMdClose />
            </li>
          ))}
        </ul>
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
        <label htmlFor="graduation">Graduates:</label>
        <select id="graduation" {...register("graduation", { required: true })}>
          <option value="">Select graduation</option>
          <option value="Engineering">B.E/B.Tech</option>
          <option value="Graduation">Any Graduates</option>
          <option value="Management">MBA/PGDMA</option>
          <option value="Postgraduation">Any Postgraduates</option>

        </select>
        {errors.graduation && (
          <span className="text-red-500 text-sm">Graduation is required</span>
        )}
      </div>
      
      <div>
        <label htmlFor="openings">Openings:</label>
        <input
          type="text"
          id="openings"
          placeholder="Ex.10 "
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
          <span className="text-red-500 text-sm">Description is required</span>
        )}
      </div>
      <div>
        <label htmlFor="preferences">Preferences:</label>
        <textarea
          id="preferences"
          {...register("preferences", { required: true })}
        ></textarea>
        {errors.preferences && (
          <span className="text-red-500 text-sm">Preferences are required</span>
        )}
      </div>
      <div>
        <label htmlFor="salary">Salary:</label>
        <input
          type="NUMBER"
          id="salary"
          placeholder="Ex. 50000"
          className="w-full h-[40px] outline-none"
          {...register("salary", { required: true })}
        />
        {errors.salary && (
          <span className="text-red-500 text-sm">Salary is required</span>
        )}
      </div>

      <div className="mb-2">
        <label htmlFor="salary">location</label>
        <input
          type="text"
          placeholder="Ex. Banglorej  "
          id="salary"
          {...register("location", { required: true })}
        />
        {errors.location && (
          <span className="text-red-500 text-sm">location is required</span>
        )}
      </div>

      <button type="submit">Submit</button>
      <ToastContainer></ToastContainer>
    </form>
  );
};

export default JobForm;
