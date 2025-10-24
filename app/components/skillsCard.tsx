import React from 'react'
import { SkillProps } from '../utils/types'

const SkillsCard = ({skills}: SkillProps) => {
  return (
    <div className='flex flex-wrap text-center justify-center w-200 max-lg:w-3/4 mt-6 gap-4'>
      {skills.map((skill, i) =>(
        <span className='border-1 px-2 py-2 rounded-md' key={i} >
          {skill}
        </span>
      ))}
    </div>
  )
}

export default SkillsCard
