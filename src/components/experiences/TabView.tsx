"use client";
import Bikay from "@/public/logos/Bikay";
import Metfone from "@/public/logos/Metfone";
import Pipay from "@/public/logos/Pipay";
import Vtech from "@/public/logos/Vtech";
import React, { useState } from "react";
import JobDescription from "./JobDescription";
import { Tab } from "@/types/type";
import { bikayData, metfoneData, pipayData, vtechData } from "@/data/Jobs";
import DoneIcon from "@/public/icons/DoneIcon";

const tabs: Tab[] = [
  { name: "Pipay", component: <Pipay /> },
  { name: "Vtech", component: <Vtech /> },
  { name: "Metfone", component: <Metfone /> },
  { name: "Bikay", component: <Bikay /> },
];

const TabView: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("Pipay");

  const tabContent: Record<string, JSX.Element> = {
    Pipay: <JobDescription job={pipayData} />,
    Vtech: <JobDescription job={vtechData} />,
    Metfone: <JobDescription job={metfoneData} />,
    Bikay: <JobDescription job={bikayData} />,
  };

  return (
    <div>
      <div className="border-b border-gray-200 dark:border-gray-700">
        <ul className="flex flex-wrap justify-between -mb-px font-medium text-center text-gray-400 max-w-screen-lg">
          {tabs.map(({ name, component }) => (
            <li className="me-2" key={name}>
              <button
                onClick={() => setActiveTab(name)}
                className={`inline-flex items-center justify-center border-b-2 rounded-t-lg w-20 h-10 p-2 md:w-28 md:h-14 ${
                  activeTab === name
                    ? "text-blue-600 border-blue-600"
                    : "border-transparent hover:text-gray-600 hover:border-gray-300 svg-logo"
                }`}
                aria-current={activeTab === name ? "page" : undefined}
              >
                {name === "Pipay" ? (
                  <span className="flex items-center gap-1">
                    <Pipay />
                    <span className="text-xs">
                      <DoneIcon />
                    </span>
                  </span>
                ) : (
                  component
                )}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="max-w-2xl">
        {" "}
        {/* Set max and min width here */}
        {tabContent[activeTab]}
      </div>
    </div>
  );
};

export default TabView;
