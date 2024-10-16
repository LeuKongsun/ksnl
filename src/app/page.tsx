import Achievement from "@/components/achievement/Achievement";
import Education from "@/components/education/Education";
import Experiences from "@/components/experiences/Experiences";
import Hero from "@/components/hero/Hero";
import Skill from "@/components/skill/Skill";

export default function Home() {
  return (
    <main className="max-w-screen-lg mx-auto mb-10">
      <div className="flex flex-col gap-10">
        {/* Home Section */}
      <Hero />
      {/* Experiences Section */}
      <Experiences />

      {/* Education Section */}
      <Education />

      {/* Study Section */}
      <Achievement />

      {/* Skills Section */}
      <Skill />
      </div>
    </main>
  );
}
