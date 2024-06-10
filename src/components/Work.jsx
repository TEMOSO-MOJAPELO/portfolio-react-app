import React from 'react';
import Calculator from '../assets/Calculator.png';

const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen bg-[#160F19] text-[#d9ab60]'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-[#d9ab60] border-[#6A322C]'>Work</p>
                <p className='py-6'>// Check out my recent work</p>
            </div>
            {/*  Container */}
            <div 
                
                className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'
            >
                {/*Grid Item */}
                <div style={{backgroundImage: `url(${Calculator})`}} className='shadow-lg shadow-[#09060a] group container rounded-md flex justify-center items-center mx-auto content-div'>

                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'> 
                        React JS Application
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-[#d9ab60] font-bold text-lg'>
                                    Demo
                                </button>
                            </a>
                            <a href="/">
                                <button className='text-center+ rounded-lg px-4 py-3 m-2 bg-white text-[#d9ab60] font-bold text-lg'>
                                    Code
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Work