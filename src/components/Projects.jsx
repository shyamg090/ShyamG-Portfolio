import { useState } from "react";
import { getConfigData } from "../data/configReader";
import { Link } from "react-router-dom";
import {FaArrowLeft} from 'react-icons/fa'

export default function Card({ name, path }) {

  // const configData = getConfigData();
  // const projects = configData.projects;

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const svgClass = isHovered
    ? "w-6 h-6 text-gray-500 transition delay-150"
    : "w-6 h-6 text-gray-300";

  return (
    <>
    
      <div className="px-2">
        <div className="flex flex-col bg-gray-100 rounded-lg px-5 py-5 ">
          <div className="flex items-center justify-between">
            <div className="font-medium text-lg flex items-center gap-x-2">
              <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
              {name}
            </div>
            <Link to={path}>
              <button
                type="button"
                className="gap-x-2 text-gray-900 bg-white border border-gray-200 hover:border-gray-300 transition-all duration-300 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center"
              >
                View All
              </button>
            </Link>
          </div>

        </div>
      </div>
    </>
  );
}
