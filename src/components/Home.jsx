import React, {useState} from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi';
import {Link} from 'react-scroll';

const Home = () => {

  const [nav, setNav] =useState(false)
  const handleClick = () => setNav(!nav)

  return (
    <div name='home'className='w-full h-screen bg-[#160F19]'>
        {/*container*/}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-[#852411]'>Hi, my name is</p>
            <h1 className='text-4xl sm:text-6xl font-bold text-[#E9AF73]'>
              Temoso Mojapelo
            </h1>
            <h2 className='text-4xl sm:text-6xl font-bold text-[#A85E3F]'>
              I'm a Full Stack Web Developer.
            </h2>
            <p className='text-[#e2e2e2] py-4 max-w-[700px]'>
              I am a full stack developer, I specialize in building web applications 
              using MongoDB, Express.js, React.js, and Node.js. I'm constantly absorbing 
              new information and techniques to broaden my understanding of both frontend 
              and backend development.
            </p>
            <div>
            <Link 
                     onClick={handleClick}
                     to="work" 
                     smooth={true} 
                     duration={500} 
                     
                 >
              <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#6A322C] hover:border-[#6A322C]'>
              
                View Work
                <span className='group-hover:rotate-90 duration-300'>
                  <HiArrowNarrowRight className='ml-3 ' />
                </span>
              </button>
              </Link>
            </div>
        </div>
        
    </div>
  )
}

export default Home