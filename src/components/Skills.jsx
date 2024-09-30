import React from 'react'

import skill from '../data/skill'

const Skills = () => {
  return (
    <div className='grid grid-cols-3 grid-rows-none place-items-center p-4 gap-5'>
        {
            skill.map(({Image, color})=>{
                return <Image  className={`shadow-${color} w-[10vw] h-[10vh] `} /> 
            })
        }
    </div>
  )
}

export default Skills;