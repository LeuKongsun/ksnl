"use client";
import { useState } from "react";
import HomeIcon from "../public/icons/HomeIcon";
import ProfileIcon from "@/public/icons/ProfileIcon";
import WorkIcon from "@/public/icons/WorkIcon";
import SkillIcon from "@/public/icons/SkillIcon";
import StudyIcon from "@/public/icons/StudyIcon";

const menuItems = [
  { name: "Home", href: "home", icon: <HomeIcon /> },
  { name: "About", href: "about", icon: <ProfileIcon /> },
  { name: "Work", href: "work", icon: <WorkIcon /> },
  { name: "Study", href: "study", icon: <StudyIcon /> },
  { name: "Skills", href: "skills", icon: <SkillIcon /> },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");

  const handleSetActive = (section: string) => {
    setActiveSection(section);
    document.getElementById(section)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <nav className="bg-[#292f36] border-gray-200 dark:bg-gray-900 text-white">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8"
            alt="Flowbite Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Gabage
          </span>
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {menuItems.map((item) => (
              <li key={item.name}>
                <a
                  href={`#${item.href}`} // linking to section ID
                  onClick={() => handleSetActive(item.href)} // handle click to set active section and smooth scroll
                  className={`flex items-center py-2 px-3 ${
                    activeSection === item.href
                      ? "bg-teal-500 md:bg-transparent md:text-teal-500"
                      : "md:hover:bg-transparent md:border-0 md:hover:text-teal-500 md:dark:hover:text-teal-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  }`}
                  aria-current={
                    activeSection === item.href ? "page" : undefined
                  }
                >
                  {item.icon}
                  <span className="ml-2">{item.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
