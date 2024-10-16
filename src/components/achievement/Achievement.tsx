import GoldIcon from "@/public/icons/BestAwardIcon";
import SilverAwardIcon from "@/public/icons/SilverAwardIcon";
import React from "react";

const Achievement = () => {
  return (
    <div className="flex flex-col items-center text-white gap-4 mt-4">
      <h1 className="text-2xl text-teal-500 font-bold">ACHIEVEMENTS</h1>

      <div className="max-w-md p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className="flex items-center gap-1 mb-4">
          <GoldIcon />
          <a href="#">
            <h5 className="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              The best team award, 1st
            </h5>
          </a>
        </div>
        <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
          I have lead a team of 5, and earned the best team award, Spring boot
          project.
        </p>
      </div>

      <div className="max-w-md p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className="flex items-center gap-1 mb-4">
          <SilverAwardIcon />
          <a href="#">
            <h5 className="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              2nd Place for Mobile App
            </h5>
          </a>
        </div>
        <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
          After Spring boot project, my team and I have secured 2nd place for
          Android Project.
        </p>
      </div>
    </div>
  );
};

export default Achievement;
