import profile from "../assets/profile.png";
import CopyEmailButton from "../components/CopyEmailButton";
import Skills from "../components/Skills";
import { getConfigData } from "../data/configReader";

export default function About() {
  const configData = getConfigData();
  return (
    <>
      <div className="px-7 py-7">
        <h1 className="flex items-center text-lg font-medium">
          <div className="w-2 h-2 bg-gray-400 rounded-full mr-2"></div>
          Skills
        </h1>
      </div>

      <div className="flex flex-col text-center gap-8 bg-gray-100 p-4 mx-2 rounded-md">
        {/* <h1 className="text-3xl font-semibold">My Skills</h1> */}
        <h1 className="text-2xl font-semibold">Languages</h1>
        <Skills start={1} end={4} />
        <h1 className="text-2xl font-semibold">Front End</h1>
        <Skills start={4} end={9} />
        <h1 className="text-2xl font-semibold">Backend</h1>
        <Skills start={9} end={13} />
        <h1 className="text-2xl font-semibold">Tools</h1>
        <Skills start={13} end={100} />
      </div>

    </>
  );
}
