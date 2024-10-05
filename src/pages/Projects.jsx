import myProject from "../data/projects"
import { FaArrowLeft , FaLink, FaGithub } from 'react-icons/fa'
import { Link } from "react-router-dom"

export default function Projects() {

  return (
    <>
      <div className="px-7 py-7 w-full">
        <h1 className="flex items-center text-lg font-medium">
          <Link to={'/'}>
          <FaArrowLeft className="text-[5vw] mr-4 lg:text-[1.5vw] lg:mr-8" />
          </Link>
          Projects
        </h1>
      </div>

      <div className="mx-2  grid grid-cols-1 lg:grid-cols-2 grid-rows-none place-items-center p-4 gap-2">

        {
          myProject.map((item) => {
            return <div key={item.id} className="min-w-[20vw] h-full bg-gray-100 p-4 rounded-lg grid grid-cols-1 grid-rows-none place-items-center gap-2">
              <div className="w-full h-[30vh] bg-cover bg-center" style={{ backgroundImage: `url(${item.url})` }}> </div>
              <h1 className="text-md font-bold text-justify">
                {item.name}
              </h1>
              <h1 className="text-sm text-justify">
                {item.desc}
              </h1>
              <div className="flex flex-wrap gap-2">
                {
                  item.skills.map((skill, index) => {return <span key={index} className="text-xs p-2 bg-black text-gray-100 rounded-lg"> {skill} </span> })
                }
              </div>
              <div className="w-full flex items-center justify-evenly gap-4 m-4">
                  <a href={item.link} target="_blank"> <FaLink className="text-[6vw] lg:text-[1.8vw]" /> </a>
                  <a href={item.github} target="_blank"> <FaGithub className="text-[6vw] lg:text-[1.8vw]" /> </a>
                </div>
            </div>
          })
        }

      </div>

    </>
  )
}