import React from 'react'

import skill from '../data/skill'

const Skills = ({start, end}) => {
  return (
    <div className='grid grid-cols-3 grid-rows-none place-items-center p-4 gap-5'>
        {
            skill.slice(start, end).map(({Image, color},index)=>{
                return <Image  key={index} className={`text-${color} w-[10vw] h-[10vh] `} /> 
            })
        }
    </div>
  )
}

export default Skills;