import React from 'react'
import SkillsCard from './skillsCard'

const Skills = () => {
  return (
    <div className='flex flex-col items-center mt-[50px]'>
      <h1 className='text-4xl font-bold'>Skills</h1>
      <SkillsCard skills={["HTML", "CSS", "JavaScript", "C", "C++", "Python", "TypeScript", "Tailwind CSS", "React", "Next.js", "Node.js", "Hono", "Express", "MongoDB", "PostgreSQL", "Prisma", "Cloudflare Workers", "Docker", "CI/CD", "Monorepo", "OAuth", "JWT", "Zod", "Axios", "Git", "Github", "Figma", "Framer Motion", "WebSocket"]} />
    </div>
  )
}

export default Skills
