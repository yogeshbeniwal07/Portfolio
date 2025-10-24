import React from 'react'

const Education = () => {
  return (
    <div className='flex flex-col items-center mt-[50px]'>
        <h1 className='text-4xl font-bold mt-4 mb-4'>Education</h1>
        <div className='flex flex-row border-2 rounded-lg p-4 m-4 shadow-lg shadow-cyan-700/30 w-1/2 max-lg:w-5/6'>
            <img src="/nit-kurukshetra-logo.png" alt="University Logo" className='w-15 h-15 rounded-md shadow-md shadow-cyan-700/30 object-top-left mr-6'/>
            <div className='flex flex-col justify-center'>
                <h2 className='text-2xl max-md:text-xl font-semibold content-start'>B.Tech, Production and Industrial Engineering  |  2022-2026</h2>
                <p className='text-md mt-1'>National Institute of Technology, Kurukshetra</p>
            </div>
        </div>
    </div>
  )
}

export default Education
