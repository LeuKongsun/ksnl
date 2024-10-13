import Bikay from "@/public/logos/Bikay";
import Metfone from "@/public/logos/Metfone";
import Pipay from "@/public/logos/Pipay";
import Vtech from "@/public/logos/Vtech";
import Tab from "./Tab";

const Experiences = () => {
  return (
    <div className="flex flex-col items-center text-white mt-4">
      <h1 className="text-2xl text-teal-500 font-bold mb-4">Experience</h1>
      <div className="flex flex-col p-8">
        <Tab/>
      </div>
    </div>
  );
};

export default Experiences;
