import WorkIcon from "@/public/icons/WorkIcon";
import ProfileDescription from "./ProfileDescription";
import ProfileSkill from "./ProfileSkill";

const profileDescriptions = [
  {
    icon: <WorkIcon />,
    text: "dara@gmail.com",
  },
  {
    icon: <WorkIcon />,
    text: "Phnom Penh, Cambodia",
  },
  {
    icon: <WorkIcon />,
    text: "www.github.com/gabagecollector",
  },
];

const profileSkills = ["HTML", "CSS", "Javascript", "Typescript"];

const Hero = () => {
  return (
    <div className="flex flex-col items-center text-white mt-4">
      <h1 className="text-4xl font-bold mb-4">Garbage Collector</h1>
      <div className="flex gap-10 flex-col justify-between">
        <div className="flex justify-center">
          <div className="relative">
            <div className="absolute h-full w-full border-4 border-white mt-1 ml-1"></div>
            <div className="flex flex-col items-center border-t-4 border-l-4 border-teal-500 p-10">
              <img
                src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                alt="profile"
                className="w-24 h-24 rounded-full"
              />
              <h2 className="text-2xl">Username</h2>
              <p className="mb-4">title goes here</p>
              <div className="mb-4">
                {profileDescriptions.map((profileDescription, index) => (
                  <ProfileDescription
                    key={index}
                    icon={profileDescription.icon}
                    text={profileDescription.text}
                  />
                ))}
              </div>
              <div className="flex gap-3">
                {profileSkills.map((profileSkill, index) => (
                  <ProfileSkill key={index} skill={profileSkill} />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col p-8">
          <p className="text-blue-500">&lt;h1&gt;</p>
          <div className="text-4xl pl-8 ">
            <h1>Hey</h1>
            <h1>I&apos;m Kongsun</h1>
            <h1>Full-stack Gabage Collector</h1>
          </div>
          <p className="text-blue-500">&lt;/h1&gt;</p>
          <p className="text-blue-500">&lt;p&gt;</p>
          <p className="text-sm pl-8">
            A software engineer designs, develops, and maintains software
            systems, using programming and engineering principles to create
            efficient and reliable applications.
          </p>
          <p className="text-blue-500 mb-5">&lt;/p&gt;</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
