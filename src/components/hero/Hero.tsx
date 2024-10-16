import WorkIcon from "@/public/icons/WorkIcon";
import ProfileDescription from "./ProfileDescription";
import ProfileSkill from "./ProfileSkill";
import DownArrow from "@/public/icons/DownArrow";

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

const profileSkills = ["Back-end", "Front-end", "Mobile app"];

const Hero = () => {
  return (
    <section id="home" className="flex flex-col justify-center items-center text-white h-screen md:p-4">
      <div className="flex gap-10 flex-col md:flex-row justify-between">
        <div className="flex justify-center">
          <div>
            <div className="gradient-flow text-white rounded p-1">
              <div className="flex flex-col w-full bg-[#292f36] text-white rounded p-10">
                <img
                  src="https://i.pinimg.com/280x280_RS/f2/ec/7f/f2ec7f84d8e65b94824896bc80edb52b.jpg"
                  alt="profile"
                  className="w-24 h-24 rounded-full self-center"
                />
                <h2 className="text-2xl self-center font-semibold">
                  Kevin Big L.
                </h2>
                <p className="mb-4 self-center font-semibold">
                  Senior Garbage Collector🗑️😎
                </p>
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
        </div>
        <div className="flex flex-col p-4">
          <p className="text-blue-500">&lt;h1&gt;</p>
          <div className="text-4xl pl-8 ">
            <h1>Hey 🖐️</h1>
            <h1>I&apos;m Kevin Big L.</h1>
            <h1 className="text-teal-500">Full-stack Gabage Collector</h1>
          </div>
          <p className="text-blue-500 mb-5">&lt;/h1&gt;</p>
          <p className="text-blue-500">&lt;p&gt;</p>
          <p className="text-sm pl-8">
            A software engineer designs, develops, and maintains software
            systems, using programming and engineering principles to create
            efficient and reliable applications.
          </p>
          <p className="text-blue-500 mb-5">&lt;/p&gt;</p>
        </div>
      </div>
      <div className="text-white absolute bottom-0"><DownArrow /></div>
    </section>
  );
};

export default Hero;
