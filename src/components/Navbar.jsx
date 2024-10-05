import { NavLink } from "react-router-dom";
import { getConfigData } from "../data/configReader";

import { useDispatch, useSelector } from "react-redux";
import { changetheme } from "../redux/themeSlice";

import { TiHome } from "react-icons/ti";
import { MdArticle,MdOutlineWork } from "react-icons/md";

import { FaJs, FaYoutube } from "react-icons/fa";
import { GrProjects } from "react-icons/gr";



export default function Navbar() {
  // const configData = getConfigData();

  // const themeIcon = [<MdOutlineLightMode className="w-[3vw] h-[3vh]" />, <MdOutlineNightlightRound className="w-[3vw] h-[3vh]" />]

  const dispatch = useDispatch();

  const theme = useSelector((state) => state.theme.mode)


  return (
    <>
      <header className="py-2 px-2 fixed top-0 left-0 w-full z-40">
        <div className="mx-auto max-w-3xl ">
          <navbar className="backdrop-filter backdrop-blur-lg bg-white bg-opacity-40 rounded-xl flex items-center justify-between shadow-md">
            <div className="flex gap-x-3 px-5 py-2 relative">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "bg-white rounded-full p-2 transition-all duration-300"
                    : "opacity-50 p-2 hover:bg-white rounded-full transition-all duration-300 hover:opacity-100"
                }
              >

                <TiHome className="text-[7vw] lg:text-[2vw] " />

              </NavLink>
              {/* <span className="absolute top-5 z-10">home</span> */}


              <NavLink
                to="/skills"
                className={({ isActive }) =>
                  isActive
                    ? "bg-white rounded-full p-2 transition-all duration-300"
                    : "opacity-50 p-2 hover:bg-white rounded-full transition-all duration-300 hover:opacity-100"
                }
              >
                <FaJs className="text-[6vw] lg:text-[2vw] " />

              </NavLink>

              <NavLink
                to="/projects"
                className={({ isActive }) =>
                  isActive
                    ? "bg-white rounded-full p-2 transition-all duration-300"
                    : "opacity-50 p-2 hover:bg-white rounded-full transition-all duration-300 hover:opacity-100"
                }
              >
                <GrProjects className="text-[6vw] lg:text-[1.8vw] " />

              </NavLink>

              <NavLink
                to="/work"
                className={({ isActive }) =>
                  isActive
                    ? "bg-white rounded-full p-2 transition-all duration-300"
                    : "opacity-50 p-2 hover:bg-white rounded-full transition-all duration-300 hover:opacity-100"
                }
              >
                <MdOutlineWork className="text-[7vw] lg:text-[2vw] " />

              </NavLink>

              <NavLink
                to="/articles"
                className={({ isActive }) =>
                  isActive
                    ? "bg-white rounded-full p-2 transition-all duration-300"
                    : "opacity-50 p-2 hover:bg-white rounded-full transition-all duration-300 hover:opacity-100"
                }
              >
                <MdArticle className="text-[7vw] lg:text-[2vw] " />
              </NavLink>

              <NavLink
                to="/youtube"
                className={({ isActive }) =>
                  isActive
                    ? "bg-white rounded-full p-2 transition-all duration-300"
                    : "opacity-50 p-2 hover:bg-white rounded-full transition-all duration-300 hover:opacity-100"
                }
              >
                <FaYoutube className="text-[7vw] lg:text-[2vw] " />
              </NavLink>
            </div>


            {/* <div className="justify-center flex">
              <div className="items-center flex justify-center" onClick={() => dispatch(changetheme())}> {theme ? themeIcon[1] : themeIcon[0]} </div>
            </div> */}


          </navbar>
        </div>
      </header>
    </>
  );
}
