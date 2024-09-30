import Profile from "../components/Profile";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

export default function Home() {
  return (
    <>
   <Profile />
   {/* <div className="flex flex-col text-center gap-4">
            <h1 className="text-3xl font-semibold">My Skills</h1>
            <Skills />
          </div> */}
   <Projects />
      <div className="flex flex-col items-center justify-center py-8">
        <h1 className="text-3xl font-semibold">Let's work together.</h1>
        <p className="text-md font-normal text-gray-500 text-center px-3">
          Creating user experience and visual appealing design
        </p>
      </div>
    </>
  );
}
