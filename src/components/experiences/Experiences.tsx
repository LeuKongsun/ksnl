import TabView from "./TabView";

const Experiences = () => {
  return (
    <section
      id="experience"
      className="flex flex-col items-center text-white mt-4 mb-16 md:mb-0"
    >
      <h1 className="text-2xl text-teal-500 font-bold mb-8">EXPERIENCES</h1>
      <div className="flex flex-col">
        <TabView />
      </div>
    </section>
  );
};

export default Experiences;
