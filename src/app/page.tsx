import Education from "@/components/education/Education";
import Experiences from "@/components/experiences/Experiences";
import Hero from "@/components/hero/Hero";

export default function Home() {
  return (
    <main className="max-w-screen-xl mx-auto mb-10">
      {/* Home Section */}
      <Hero />
      {/* Experiences Section */}
      <Experiences />

      {/* Education Section */}
      <Education />
      
      {/* Study Section */}
      <section id="study" className="py-20 bg-gray-100">
        <h2 className="text-3xl font-bold">My Study</h2>
        <p className="mt-4">Details about my education go here.</p>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <h2 className="text-3xl font-bold">My Skills</h2>
        <p className="mt-4">
          Here are the skills I have acquired over the years.
        </p>
      </section>
    </main>
  );
}
