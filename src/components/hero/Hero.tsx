"use client";
import ProfileDescription from "./ProfileDescription";
import ProfileSkill from "./ProfileSkill";
import DownArrow from "@/public/icons/DownArrow";
import EmailIcon from "@/public/icons/EmailIcon";
import LocationIcon from "@/public/icons/LocationIcon";
import PhoneIcon from "@/public/icons/PhoneIcon";
import GithubIcon from "@/public/icons/GithubIcon";
import LinkedInIcon from "@/public/icons/LinkedInIcon";

const profileDescriptions = [
  {
    icon: <EmailIcon />,
    text: "lkongsun@gmail.com",
    url: ""
  },
  {
    icon: <LocationIcon />,
    text: "Phnom Penh 🇰🇭",
    url: ""
  },
  {
    icon: <PhoneIcon />,
    text: "(855) 70256959",
    url: ""
  },
  {
    icon: <GithubIcon className="w-4 h-4" fill="#14B8A6"/>,
    text: "github.com/LeuKongsun",
    url: "https://github.com/LeuKongsun"
  },
  {
    icon: <LinkedInIcon />,
    text: "linkedin.com/in/kongsun-leu/",
    url: "https://www.linkedin.com/in/kongsun-leu-502881145/"
  },
];

const profileSkills = ["Back-end", "Front-end", "Mobile app"];

const Hero = () => {
  return (
    <section
      id="profile"
      className="flex flex-col justify-center items-center text-white pt-44 -mt-24 md:h-screen sm:p-4 md:pb-10 md:mb-10"
    >
      <div className="flex gap-10 flex-col md:flex-row justify-between">
        <div className="flex justify-center">
          <div className="card-frame flex flex-col items-center">
            <img
              src="https://i.pinimg.com/280x280_RS/f2/ec/7f/f2ec7f84d8e65b94824896bc80edb52b.jpg"
              alt="profile"
              className="w-24 h-24 rounded-full self-center"
            />
            <h2 className="text-2xl self-center font-semibold">Kongsun Leu</h2>
            <p className="mb-4 self-center">
             Software Engineer
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
            <div className="flex gap-3 mb-4">
              {profileSkills.map((profileSkill, index) => (
                <ProfileSkill key={index} skill={profileSkill} />
              ))}
            </div>
            <button
              type="button"
              className="w-full text-white rounded-full border border-teal-500 py-2 hover:border-teal-300"
              // style={{
              //   boxShadow:
              //     "0 0 5px rgba(20, 184, 166, 0.7), 0 0 10px rgba(20, 184, 166, 0.5)",
              // }}
              onClick={() => alert("Sooner available!")}
            >
              Download CV
            </button>
          </div>
        </div>
        <div className="flex flex-col p-4">
          <p className="text-blue-500">&lt;h1&gt;</p>
          <div className="text-4xl pl-8 sm:text-2xl lg:text-4xl">
            <h1>Hey!! 🖐️</h1>
            <h1>I&apos;m Kongsun</h1>
            <h1 className="text-teal-500">a Software Engineer</h1>
          </div>
          <p className="text-blue-500 mb-10">&lt;/h1&gt;</p>
          <p className="text-blue-500">&lt;p&gt;</p>
          <p className="text-sm pl-8 sm:text-xs lg:text-sm">
            As a dedicated leader in technology, I guide teams toward innovative
            solutions and project success. With a strong foundation as a
            software engineer, I design, develop, and maintain software systems,
            applying engineering principles to create efficient and reliable
            applications.
          </p>
          <p className="text-blue-500">&lt;/p&gt;</p>
        </div>
      </div>
      <div className="text-white absolute bottom-0 hidden md:block">
        <DownArrow />
      </div>
    </section>
  );
};

export default Hero;
