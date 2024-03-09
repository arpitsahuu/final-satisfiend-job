import React from "react";
import { RotateLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="flex flex-col h-screen justify-center items-center bg-white">
      <div className="loader-container">
        <RotateLoader color="#3498db" size={20} />
      </div>
      <p className="text-lg font-semibold mt-4 text-gray-700">Loading...</p>

      <style jsx>{`
        .loader-container {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100px;
        }
      `}</style>
    </div>
  );
};

export default Loading;
