"use client";
import { useState } from "react";
import ProfileIcon from "@/public/icons/ProfileIcon";
import WorkIcon from "@/public/icons/WorkIcon";
import SkillIcon from "@/public/icons/SkillIcon";
import StudyIcon from "@/public/icons/StudyIcon";
import AchievementIcon from "@/public/icons/AchievementIcon";

const menuItems = [
  { name: "Profile", href: "profile", icon: <ProfileIcon /> },
  { name: "Experience", href: "experience", icon: <WorkIcon /> },
  { name: "Education", href: "education", icon: <StudyIcon /> },
  { name: "Achievement", href: "achievement", icon: <AchievementIcon /> },
  { name: "Skill", href: "skill", icon: <SkillIcon /> },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("profile");

  const handleSetActive = (section: string) => {
    setActiveSection(section);
    document.getElementById(section)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <nav className="border-gray-200 bg-gray-900 text-white fixed top-0 left-0 w-full z-50">
      <div className="max-w-screen-lg flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2603/2603105.png"
            className="h-8"
            alt="Flowbite Logo"
          />
          <span className="hidden md:block self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Gabage
          </span>
        </a>
        <div className="hidden md:flex w-full md:w-auto">
          <ul className="font-medium flex">
            {menuItems.map((item) => (
              <li key={item.name}>
                <a
                  href={`#${item.href}`} // linking to section ID
                  onClick={() => handleSetActive(item.href)} // handle click to set active section and smooth scroll
                  className={`flex items-center py-2 px-3 ${
                    activeSection === item.href
                      ? "text-teal-500"
                      : "md:border-0 md:hover:text-teal-500"
                  }`}
                  aria-current={
                    activeSection === item.href ? "page" : undefined
                  }
                >
                  {item.icon}
                  <span className="hidden md:inline ml-2">
                    {item.name}
                  </span>{" "}
                  {/* Hide text on small screens */}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex md:hidden">
          <ul className="font-medium flex space-x-4">
            {menuItems.map((item) => (
              <li key={item.name}>
                <a
                  href={`#${item.href}`} // linking to section ID
                  onClick={() => handleSetActive(item.href)} // handle click to set active section and smooth scroll
                  className={`flex items-center py-2 px-3 ${
                    activeSection === item.href
                      ? "text-teal-500 bg-gray-700 rounded-2xl"
                      : "md:hover:bg-transparent md:border-0 hover:rounded-2xl md:hover:text-teal-500 dark:hover:bg-gray-700 dark:hover:text-white"
                  }`}
                  aria-current={
                    activeSection === item.href ? "page" : undefined
                  }
                >
                  {item.icon}
                  <span className="sr-only">{item.name}</span>{" "}
                  {/* Hide text for screen readers */}
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
