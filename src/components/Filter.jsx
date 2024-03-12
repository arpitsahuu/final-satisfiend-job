import React from "react";

const Filter = ({ jobFilters, setJobFilters }) => {
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setJobFilters((prevFilters) => ({
      ...prevFilters,
      [id]: value,
    }));
  };

  return (
    <div className="bg-gray-100 flex p-4 rounded-md w-full bg-gray">
      <div id="alljobsfilteremploye" className="flex  sm:items-center gap-2 sm:gap-6">
        <div class="flex items-center gap-2">
          <label
            for="jobTitle"
            class="text-sm font-medium text-gray-800 text-nowrap"
          >
            Job Title:
          </label>
          <input
            type="text"
            id="jobTitle"
            placeholder="Search by job title..."
            class="border rounded-[15px] p-2 sm:w-[4vw] w-[500px] focus:outline-none focus:ring focus:border-blue-300 transition duration-300"
            onChange={handleInputChange}
          />
        </div>

        <div class="flex items-center gap-2 ">
          <label
            for="location"
            class="text-sm font-medium text-gray-800 text-nowrap"
          >
            Location:
          </label>
          <input
            type="text"
            id="location"
            placeholder="Search by location..."
            class="border rounded-md p-2 w-[4vw] focus:outline-none focus:ring focus:border-blue-300 transition duration-300"
            onChange={handleInputChange}
          />
        </div>

        <div class="flex items-center gap-2">
          <label
            for="jobType"
            class="text-sm font-medium text-gray-800 text-nowrap"
          >
            Job Type:
          </label>
          <select
            id="jobType"
            class="border rounded-md p-2 w-[6vw]focus:outline-none focus:ring focus:border-blue-300 transition duration-300"
            onChange={handleInputChange}
          >
            <option value="">Select job type...</option>
            <option value="In Office">In Office</option>
            <option value="Remote">Remote</option>
          </select>
        </div>

        {/* <div class="flex items-center gap-2 ">
  <label for="department" class="text-sm font-medium text-gray-800 text-nowrap">Department:</label>
  <input
    type="text"
    id="department"
    placeholder="Search by department..."
    class="border rounded-md p-2 w-full focus:outline-none focus:ring focus:border-blue-300 transition duration-300"
    onChange={handleInputChange}
  />
</div> */}

        {/* <div class="flex items-center gap-2 ">
  <label for="company" class="text-sm font-medium text-gray-800">Company:</label>
  <input
    type="text"
    id="company"
    placeholder="Search by company..."
    class="border rounded-full p-2 w-full focus:outline-none focus:ring focus:border-blue-300 transition duration-300"
    onChange={handleInputChange}
  />
</div> */}
      </div>
    </div>
  );
};

export default Filter;
