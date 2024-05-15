import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi';

const Home = () => {
  return (
    <div name='home'className='w-full h-screen bg-[#a16f24]'>
        {/*container*/}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-[#fff]'>Hi, my name is</p>
            <h1 className='text-4xl sm:text-6xl font-bold text-[#503a17]'>
              Temoso Mojapelo
            </h1>
            <h2 className='text-4xl sm:text-6xl font-bold text-[#d9ab60]'>
              I'm a Full Stack Web Developer.
            </h2>
            <p className='text-[#e2e2e2] py-4 max-w-[700px]'>
              I am a full stack developer, I specialize in building web applications 
              using MongoDB, Express.js, React.js, and Node.js. I'm constantly absorbing 
              new information and techniques to broaden my understanding of both frontend 
              and backend development.
            </p>
            <div>
              <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#503a17] hover:border-[#503a17]'>View Work
                <span className='group-hover:rotate-90 duration-300'>
                  <HiArrowNarrowRight className='ml-3 ' />
                </span>
              </button>
            </div>
        </div>
        
    </div>
  )
}

export default Home