import TabView from "./TabView";

const Experiences = () => {
  return (
    <div className="flex flex-col items-center text-white mt-4">
      <h1 className="text-2xl text-teal-500 font-bold mb-4">EXPERIENCES</h1>
      <div className="flex flex-col p-8">
        <TabView/>
      </div>
    </div>
  );
};

export default Experiences;
