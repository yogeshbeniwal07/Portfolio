import React from 'react'

export default function Home(){
  return (
    <>
        <div className='flex flex-col justify-center items-center mt-50'>
          <img src="/yb_logo.png" alt="Logo" className='w-25 h-25 rounded-full mb-4 shadow-md shadow-cyan-700/50'/>
          <h1 className='text-4xl font-bold mt-4 mb-4'>Hi, I&apos;m Yogesh Beniwal</h1>
          <div className='max-w-xl px-4 py-4 mt-5 mb-5 rounded-sm text-center text-lg max-md:w-sm shadow-xs shadow-cyan-700/20'>
            <p>Every line of code serves a purpose: creating seamless, accessible, and visually compelling digital experiences.</p>
            <p className='mt-3'>Let&apos;s Build something real.</p>
          </div>
          <a
            href='https://linkedin.com/in/yogesh-beniwal-808b19271'
            target='_blank'
            rel='noopener noreferrer'
            className='mt-5 py-3 px-6 border rounded-xl text-center hover:scale-105 hover:shadow-sm hover:shadow-cyan-700/50 transition'
          >
            Contact me
          </a>
        </div>
    </>
  )
}
