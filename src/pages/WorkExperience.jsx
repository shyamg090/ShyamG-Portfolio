import { FaArrowLeft } from 'react-icons/fa'
import { Link } from "react-router-dom";

export default function WorkExperience() {

    const experience = [{
        id: 1,
        name: "Axis Technologies",
        date: "Aug 2023 - Oct 2023",
        desc: "Worked as a MERN Stack Developer, Increased the service and product visibility on clients by 80% as we built a scalable MERN website with industry standart techniques."
    },
    {
        id: 2,
        name: "Paper Rabbit Solutions",
        date: "Feb 2024 - April 2024",
        desc: "Worked as a Web Developer, Worked on Figma, React.js and GSAP, to create visually stunning websites"
    },
    {
        id: 3,
        name: "Varcons Technologies Pvt. Ltd.",
        date: "May 2024 -  Present",
        desc: "Worked as a Full Stack Web Developer, Worked on Figma, MERN, to create a car reselling and service company website for a client."
    }
    ]

    return (
        <>
            <div className="flex flex-col items-center justify-evenly bg-gray-100 rounded-md mx-2 my-5 relative">
                <div className="px-7 py-7 w-full">
                    <h1 className="flex items-center text-lg font-medium">
                        <Link to={'/'}>
                            <FaArrowLeft className="text-[3vw] lg:text-[1.5vw] mr-8" />
                        </Link>                        
                        Work Experience
                    </h1>
                </div>

                {
                    experience.map((item) => {
                        return <div key={item.id} className="flex items-center justify-center p-6 gap-6">

                            {/* <div className="max-w-[5rem] max-h-[2rem] flex items-center justify-center rounded-full bg-gray-300 ">
                                <div className="w-[1rem] h-[1rem] rounded-full bg-black "></div>
                            </div> */}

                            <div className="flex flex-col gap-4">
                                <div className="text-[4.5vw] lg:text-[1.5vw] ">
                                    {item.name}
                                </div>
                                <div className="text-sm text-justify">
                                    {item.date}
                                </div>
                                <div className="text-sm text-justify">
                                    {item.desc}
                                </div>
                            </div>
                        </div>
                    })
                }
            </div>
        </>
    )
}