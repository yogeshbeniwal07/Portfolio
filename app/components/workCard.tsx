import React from 'react'
import { WorkCarkProps } from '../utils/types';

function WorkCard({imageUrl, title, description, techStack, gitHubLink, liveLink}: WorkCarkProps) {

  return (
    <div className='flex flex-col border-2 rounded-lg p-4 m-4 shadow-lg shadow-cyan-700/30 w-full h-110 px-5 max-lg:h-auto'>
      <img src={imageUrl} alt={title} className='w-1/4 h-20 rounded-md shadow-md shadow-cyan-700 object-top-left'/>
      <h2 className='text-2xl font-semibold mt-2'>{title}</h2>
      <p className='text-md mt-1'>{description}</p>
      <div className='flex flex-wrap mt-2 mb-2'>
        {techStack.map((tech, i) => (
          <span key={i} className="border rounded-md px-2 py-1 m-1 text-sm">
            {tech}
          </span>
        ))}
      </div>
      <div className='flex flex-row object-bottom-left gap-4 mt-auto'>
        {liveLink && (
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1 bg-cyan-600 text-white rounded hover:scale-105 transition-transform"
          >
            Live
          </a>
        )}
        <a
          href={gitHubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="px-3 py-1 border rounded hover:shadow-md hover:shadow-cyan-700 hover:scale-105 transition-transform"
        >
          GitHub
        </a>
      </div>
    </div>
  )
}

export default WorkCard
