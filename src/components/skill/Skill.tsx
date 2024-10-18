import DockerIcon from "@/public/icons/DockerIcon";
import ExpressjsIcon from "@/public/icons/ExpressjsIcon";
import FlutterIcon from "@/public/icons/FlutterIcon";
import GithubIcon from "@/public/icons/GithubIcon";
import JavaIcon from "@/public/icons/JavaIcon";
import MongoDbIcon from "@/public/icons/MongoDbIcon";
import NestJsIcon from "@/public/icons/NestJsIcon";
import NextjsIcon from "@/public/icons/NextjsIcon";
import NodejsIcon from "@/public/icons/NodejsIcon";
import OracleDbIcon from "@/public/icons/OracleDbIcon";
import PostgresqlIcon from "@/public/icons/PostgresqlIcon";
import ReactJsIcon from "@/public/icons/ReactJsIcon";
import SpringBootIcon from "@/public/icons/SpringBootIcon";
import XcodeIcon from "@/public/icons/XcodeIcon";
import React from "react";
import LinuxIcon from "@/public/icons/LinuxIcon";
import AndroidIcon from "@/public/icons/AndroidIcon";
import { SkillGroupProps } from "@/types/type";
import Programmer from "@/public/gif/programmer.gif";
import Image from "next/image";

const SkillGroup: React.FC<SkillGroupProps> = ({
  icons,
  progressWidth,
  iconCount,
}) => {
  // Calculate width and height based on the number of icons
  const widthClass =
    iconCount <= 3
      ? "w-1/3 md:w-1/5"
      : iconCount <= 5
      ? "w-2/5 md:w-1/4"
      : "w-1/4 md:w-1/5";
  const heightClass =
    iconCount <= 3
      ? "h-1/3 md:h-1/5"
      : iconCount <= 5
      ? "h-2/5 md:h-1/4"
      : "h-1/4 md:h-1/5";

  return (
    <div>
      <div className={`flex ${widthClass} ${heightClass} gap-2 mb-2`}>
        {icons.map((Icon, index) => (
          <Icon
            key={index}
            className="grayscale hover:filter-none transition duration-300"
          />
        ))}
      </div>
      <div className="w-full bg-gray-200 rounded-full h-1 mb-4 dark:bg-gray-700">
        <div
          className={`water-stream h-1 rounded-full dark:bg-blue-500 ${progressWidth}`}
        ></div>
      </div>
    </div>
  );
};

const Skill: React.FC = () => {
  return (
    <section
      id="skill"
      className="w-full max-w-screen-md flex flex-col pt-24 -mt-24"
    >
      <h1 className="text-2xl text-teal-500 font-bold self-center mb-4">
        SKILLS
      </h1>
      <div className="flex flex-col gap-4">
        <SkillGroup
          icons={[JavaIcon, SpringBootIcon, AndroidIcon]}
          progressWidth="w-10/12"
          iconCount={3}
        />
        <SkillGroup
          icons={[
            NodejsIcon,
            ExpressjsIcon,
            NestJsIcon,
            ReactJsIcon,
            NextjsIcon,
          ]}
          progressWidth="w-9/12"
          iconCount={5}
        />
        <SkillGroup
          icons={[AndroidIcon, ReactJsIcon, FlutterIcon, XcodeIcon]}
          progressWidth="w-7/12"
          iconCount={4}
        />
        <SkillGroup
          icons={[PostgresqlIcon, OracleDbIcon, MongoDbIcon]}
          progressWidth="w-9/12"
          iconCount={3}
        />
        <SkillGroup
          icons={[GithubIcon, DockerIcon, LinuxIcon]}
          progressWidth="w-9/12"
          iconCount={3}
        />
      </div>
      <div className="text-center self-center mb-4 md:mb-10">
        <Image
          src={Programmer}
          alt="programmer"
          className="rounde"
          width={300}
          height={300}
        />
        <p className="text-white text-green-500">Kevin is cooking</p>
      </div>
    </section>
  );
};

export default Skill;
