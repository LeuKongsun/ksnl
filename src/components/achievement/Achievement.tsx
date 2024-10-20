import GoldIcon from "@/public/icons/BestAwardIcon";
import CertificateIcon from "@/public/icons/CertificateIcon";
import SilverAwardIcon from "@/public/icons/SilverAwardIcon";
import React from "react";

const Achievement = () => {
  return (
    <section id='achievement' className="max-w-screen-md flex flex-col items-center text-white gap-6 mt-4 mb-16 pt-24 -mt-24">
      <h1 className="text-2xl text-teal-500 font-bold mb-8">ACHIEVEMENTS</h1>

      <div className="max-w-full p-4 rounded-lg shadow-md shadow-teal-500">
        <div className="flex items-center gap-1 mb-4">
          <GoldIcon />
          <a href="#">
            <h5 className="mb-2 text-xl font-semibold tracking-tight text-teal-500">
              The best team award, 1st
            </h5>
          </a>
        </div>
        <p className="mb-3 font-normal text-gray-500">
          I have lead a team of 5, and earned the best team award, Backend Spring boot
          project.
        </p>
      </div>

      <div className="max-w-full p-4 rounded-lg shadow-md shadow-teal-500">
        <div className="flex items-center gap-1 mb-4">
          <SilverAwardIcon />
          <a href="#">
            <h5 className="mb-2 text-xl font-semibold tracking-tight text-teal-500">
              2nd Place for Mobile App
            </h5>
          </a>
        </div>
        <p className="mb-3 font-normal text-gray-500">
          After Spring boot project, my team and I have secured 2nd place for
          Android Project.
        </p>
      </div>

      <div className="max-w-full p-4 rounded-lg shadow-md shadow-teal-500">
        <div className="flex items-center gap-1 mb-4">
          <CertificateIcon />
          <a href="#">
            <h5 className="mb-2 text-xl font-semibold tracking-tight text-teal-500">
              AUPP & KSRD Courses scholarship
            </h5>
          </a>
        </div>
        <p className="mb-3 font-normal text-gray-500">
          The KSHRD and AUPP have awarded me with a scholarship and made me a software engineer.
        </p>
      </div>
    </section>
  );
};

export default Achievement;
