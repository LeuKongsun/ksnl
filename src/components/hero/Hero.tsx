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
    <div className="flex flex-col items-center text-white">
      <h1 className="text-4xl font-bold mb-4">Garbage Collector</h1>
      <div className="flex flex-col justify-between">
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
        <div>asdfasdf</div>
        <div>asdfa</div>
      </div>
    </div>
  );
};

export default Hero;
