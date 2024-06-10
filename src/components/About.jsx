import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#160F19] text-[#d9ab60]'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-[#6A322C]'>About</p>
                </div>
                <div>
                </div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                  <div className='sm:text-right text-4xl font-bold'>
                    <p>Hi I'm Temoso, nice to meet you. Please look around.</p>
                  </div>
                  <div>
                    <p>I am a passionate full stack developer with a strong foundation in both front-end and back-end technologies. Having worked in the sector for a year, I've developed my abilities to provide scalable, effective solutions that satisfy the demands of modern web applications. I thrive on tackling complex problems and resolving them in a stylish, user-friendly manner. My goal is to leverage my technical expertise to build innovative solutions that not only meet but exceed client expectations.</p>
                  </div>
                </div> 
        </div>
    </div>
  )
}

export default About