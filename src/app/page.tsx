import Hero from "@/components/hero/Hero";

export default function Home() {
  return (
    <main className="max-w-screen-xl mx-auto mb-10">
      {/* Home Section */}
      <Hero />
      {/* About Section */}
      <section id="about" className="py-20 bg-gray-100">
        <h2 className="text-3xl font-bold">About Me</h2>
        <p className="mt-4">
          This is the about section where I tell more about myself.
        </p>
      </section>

      {/* Work Section */}
      <section id="work" className="py-20">
        <h2 className="text-3xl font-bold">My Work</h2>
        <p className="mt-4">
          This is where I showcase my past work experiences.
        </p>
      </section>

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
