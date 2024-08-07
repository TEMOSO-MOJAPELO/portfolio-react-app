import React from 'react';
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import Javascript from '../assets/javascript.png';
import GitHub from '../assets/github.png';
import REACTA from '../assets/react.png';
import NODE from '../assets/node.png';
import Tailwind from '../assets/tailwind.png';
import PHP from '../assets/php.png';

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#160F19] text-[#d9ab60]'>
        {/* container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-[#6A322C]'>Skills</p>
                <br />
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                <div className='shadow-md shadow-[#09060a] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src= {HTML} alt="HTML icon" />
                    <p className='my-4'>HTML</p>
                </div>
                <div className='shadow-md shadow-[#09060a] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src= {CSS} alt="HTML icon" />
                    <p className='my-4'>CSS</p>
                </div>
                <div className='shadow-md shadow-[#09060a] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src= {Javascript} alt="HTML icon" />
                    <p className='my-4'>JAVASCRIPT</p>
                </div>
                <div className='shadow-md shadow-[#09060a] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src= {GitHub} alt="HTML icon" />
                    <p className='my-4'>GITHUB</p>
                </div>
                <div className='shadow-md shadow-[#09060a] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src= {REACTA} alt="HTML icon" />
                    <p className='my-4'>REACT</p>
                </div>
                <div className='shadow-md shadow-[#09060a] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src= {NODE} alt="HTML icon" />
                    <p className='my-4'>NODE</p>
                </div>
                <div className='shadow-md shadow-[#09060a] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src= {Tailwind} alt="HTML icon" />
                    <p className='my-4'>TAILWIND</p>
                </div>
                <div className='shadow-md shadow-[#09060a] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src= {PHP} alt="HTML icon" />
                    <p className='my-4'>PHP</p>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Skills