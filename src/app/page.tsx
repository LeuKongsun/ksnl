import Achievement from "@/components/achievement/Achievement";
import Education from "@/components/education/Education";
import Experiences from "@/components/experiences/Experiences";
import Hero from "@/components/hero/Hero";
import Skill from "@/components/skill/Skill";

export default function Home() {
  return (
    <main className="max-w-screen-lg mx-auto">
      <div className="flex flex-col items-center pt-24 sm:pt-56 md:pt-40">
        {/* Home Section */}
        <Hero />
        {/* Experiences Section */}
        <div className="p-8 md:p-0">
          <Experiences />

          {/* Education Section */}
          <Education />

          {/* Study Section */}
          <Achievement />

          {/* Skills Section */}
          <Skill />
        </div>
      </div>
    </main>
  );
}
