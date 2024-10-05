import { Link } from "react-router-dom";
import Skills from "../components/Skills";
import { FaArrowLeft } from "react-icons/fa";

export default function About() {
  return (
    <>
      <div className="flex flex-col text-center gap-8 bg-gray-100 p-4 mx-2 my-4 rounded-md">
        <div className="px-7 py-7">
          <h1 className="flex items-center text-lg font-medium">
            <Link to={'/'}>
              <FaArrowLeft className="text-[3vw] lg:text-[1.5vw] mr-8" />
            </Link>
            Skills
          </h1>
        </div>
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
