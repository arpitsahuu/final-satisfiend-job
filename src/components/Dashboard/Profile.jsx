import { avatarEmployee, updateEmployee } from "@/redux/actions/employeeAction";
import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

const Profile = () => {
  const { employee, error: error } = useSelector((state) => state.employee);
  const [editMode, setEditMode] = useState(false);
  const dispatch = useDispatch();
  let avatar = {};

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    setValue("email", employee?.email);
    setValue("firstname", employee?.firstname);
    setValue("lastname", employee?.lastname);
    setValue("contact", employee?.contact);
    setValue("organisationname", employee?.organisationname);
  }, [employee]);

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleCancel = () => {
    setEditMode(false);
  };

  const onSubmit = handleSubmit((data) => {
    dispatch(updateEmployee(data));
    setEditMode(false);
  });

  const [selectedFile, setSelectedFile] = useState(null);
  const formRef = useRef();
  const inputRef = useRef();
  const btnRef = useRef();

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    // setSelectedFile(file);
    avatar = file;
    btnRef.current.click();
  };

  const handleSubmitlogo = async (event) => {
    event.preventDefault();
    if (avatar) {
      dispatch(avatarEmployee(avatar));
    } else {
      console.log("No file selected");
    }
  };

  const handleClick = () => {
    inputRef.current.click();
  };

  return (
    <div className="flex items-center justify-center flex-col  ">
      <img
        onClick={handleClick}
        src={employee?.organisationlogo?.url}
        className="w-[80px] h-[80px] mt-10 rounded-full"
        alt=""
      />

      {editMode ? (
        <form onSubmit={onSubmit}>
          {/* Form fields */}
          <div className="space-y-12 mt-[20px]  border-gray-300 pb-8 p-4 flex flex-col gap-4 bg-gray-200 rounded-lg shadow-md w-[70vw]">
            <div className=" border-gray-900/10 pb-3">
              <form onSubmit={onSubmit}>
                <div className="space-y-12 mt-[20px]">
                  <div className=" border-gray-900/10 pb-6">
                    <h2 className="text-base font-semibold leading-7 text-gray-900">
                      Orgination Information
                    </h2>
                    <p className="mt-1 text-sm leading-6 text-gray-600">
                      Use a permanent address where you can receive mail.
                    </p>

                    <div className="sm:col-span-3">
                      <label
                        htmlFor="organization-name"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Organization Name
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          id="organization-name"
                          {...register("organisationname")}
                          className="prof-inp block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-3">
                      <label
                        htmlFor="first-name"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        First Name
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          id="first-name"
                          {...register("firstname", { required: true })}
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                        {errors.firstname && (
                          <p className="text-[15px] text-red-500">
                            Please enter firstname.
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="sm:col-span-3">
                      <label
                        htmlFor="last-name"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Last Name
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          id="last-name"
                          {...register("lastname", { required: true })}
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                        {errors.lastname && (
                          <p className="text-[15px] text-red-500">
                            Please enter lastname.
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="sm:col-span-4">
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Email address
                      </label>
                      <div className="mt-2">
                        <input
                          id="email"
                          type="email"
                          {...register("email", { required: true })}
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                        {errors.email && (
                          <p className="text-[15px] text-red-500">
                            Please enter email.
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="sm:col-span-4 w-full">
                      <label
                        htmlFor="contract"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Contract
                      </label>
                      <div className="mt-2">
                        <input
                          id="contract"
                          type="text"
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          {...register("contact", { required: true })}
                        />

                        {errors.contact && (
                          <p className="text-[15px] text-red-500">
                            Please enter contact.
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div className="flex items-center justify-end mt-[50px] gap-x-6">
            <button
              type="button"
              onClick={handleCancel}
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Save
            </button>
          </div>
        </form>
      ) : (
        <div>
          <div className="space-y-12 mt-[20px] w-[70vw]">
            <div className="pb-6">
              <div className="space-y-12 mt-[20px]">
                <div className="border-gray-300 pb-8 p-4 flex flex-col gap-4 bg-gray-200 rounded-lg shadow-md">
                  <h2 className="text-base font-semibold leading-7 text-gray-900">
                    Orgination Information
                  </h2>
                  <p className="mt-1 text-sm leading-6 text-gray-600">
                    Use a permanent address where you can receive mail.
                  </p>

                  <div className="sm:col-span-3">
                    <label
                      htmlFor="organization-name"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Organization Name
                    </label>
                    <div className="mt-2">
                      <p className="prof-inp block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400    sm:text-sm sm:leading-6">
                        {employee?.organisationname}
                      </p>
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label
                      htmlFor="first-name"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      First Name
                    </label>
                    <div className="mt-2">
                      <p className="prof-inp block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400    sm:text-sm sm:leading-6">
                        {employee?.firstname}
                      </p>
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label
                      htmlFor="last-name"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Last Name
                    </label>
                    <div className="mt-2">
                      <p className="prof-inp block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400    sm:text-sm sm:leading-6">
                        {employee?.lastname}
                      </p>
                    </div>
                  </div>

                  <div className="sm:col-span-4">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Email address
                    </label>
                    <div className="mt-2">
                      <p className="prof-inp block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400    sm:text-sm sm:leading-6">
                        {employee?.email}
                      </p>
                    </div>
                  </div>

                  <div className="sm:col-span-4 w-full">
                    <label
                      htmlFor="contract"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Contract
                    </label>
                    <div className="mt-2">
                      <p className="prof-inp block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400    sm:text-sm sm:leading-6">
                        {employee?.contact}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <form ref={formRef} onSubmit={handleSubmitlogo} className="hidden">
            <input
              ref={inputRef}
              type="file"
              name="organisationlogo"
              onChange={handleFileChange}
            />
            <button ref={btnRef} type="submit">
              Submit
            </button>
          </form>
          <div className="mt-6 flex items-center justify-between gap-x-6">
            <button
              onClick={handleEdit}
              className="px-4 py-2 text-sm bg-[#4f91ce] border-green-500 text-white  hover:bg-[#4f91ce] hover:bg-green-500 hover:rounded-md cursor-pointer transition-all duration-300 ease-in-out"
            >
              Edit
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
