import Profile from "../components/Profile";
import Projects from "../components/Projects";
import Skills from "../components/SkillsCard";
import WorkExperience from "./WorkExperience";

export default function Home() {
  return (
    <>
      <Profile />

      {/* <WorkExperience/> */}

      <div className="flex flex-col gap-4">
      <Projects name={'Work Experience'} path={'/work'} />

        <Projects name={'Projects'} path={'/projects'} />
        <Projects name={'Skills'} path={'/skills'} />
        <Projects name={'Articles'} path={'/articles'} />

      </div>


      <div className="flex flex-col items-center justify-center py-8">
        <h1 className="text-3xl font-semibold">Let's work together.</h1>
        <p className="text-md font-normal text-gray-500 text-center px-3">
          Creating user experience and visual appealing design
        </p>
      </div>
    </>
  );
}
