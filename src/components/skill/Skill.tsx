import AndriodIcon from "@/public/icons/AndriodIcon";
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
import Pm2Icon from "@/public/icons/Pm2Icon";
import PostgresqlIcon from "@/public/icons/PostgresqlIcon";
import ReactJsIcon from "@/public/icons/ReactJsIcon";
import SpringBootIcon from "@/public/icons/SpringBootIcon";
import XcodeIcon from "@/public/icons/XcodeIcon";
import React from "react";

const Skill = () => {
  return (
    <section id="skill" className="flex flex-col mt-8 p-6">
      <h1 className="text-2xl text-teal-500 font-bold self-center mb-4">SKILLS</h1>
      <div className="flex flex-col gap-4">
        <div>
          <div className="flex w-1/3 h-1/3 gap-2 mb-2 grayscale">
            <JavaIcon />
            <SpringBootIcon />
            <AndriodIcon />
          </div>
          <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700">
            <div className="bg-blue-600 h-1.5 rounded-full dark:bg-blue-500 w-10/12"></div>
          </div>
        </div>

        <div>
          <div className="flex w-2/4 h-2/4 gap-2 mb-2 grayscale">
            <NodejsIcon />
            <ExpressjsIcon />
            <NestJsIcon />
            <ReactJsIcon />
            <NextjsIcon />
          </div>
          <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700">
            <div className="bg-blue-600 h-1.5 rounded-full dark:bg-blue-500 w-9/12"></div>
          </div>
        </div>

        <div>
          <div className="flex w-2/5 h-2/5 gap-2 mb-2 grayscale">
            <AndriodIcon />
            <ReactJsIcon />
            <FlutterIcon />
            <XcodeIcon />
          </div>
          <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700">
            <div className="bg-blue-600 h-1.5 rounded-full dark:bg-blue-500 w-7/12"></div>
          </div>
        </div>

        <div>
          <div className="flex w-1/3 h-1/3 gap-2 mb-2 grayscale">
            <PostgresqlIcon />
            <OracleDbIcon />
            <MongoDbIcon />
          </div>
          <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700">
            <div className="bg-blue-600 h-1.5 rounded-full dark:bg-blue-500 w-9/12"></div>
          </div>
        </div>

        <div>
          <div className="flex w-1/3 h-1/3 gap-2 mb-2 grayscale">
            <GithubIcon />
            <DockerIcon />
            <Pm2Icon />
          </div>
          <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700">
            <div className="bg-blue-600 h-1.5 rounded-full dark:bg-blue-500 w-9/12"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
