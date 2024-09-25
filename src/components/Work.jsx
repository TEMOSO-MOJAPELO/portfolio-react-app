import React from 'react';
import Calculator from '../assets/Calculator.png';
import PredictApp from '../assets/predictapp.png';
import PredictUI from '../assets/predictUI.png';

const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen bg-[#160F19] text-[#d9ab60]'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-[#d9ab60] border-[#6A322C]'>Work</p>
                <p className='py-6'>Check out my recent projects. More projects coming soon.</p>
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
                        React Calculator
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-[#d9ab60] font-bold text-lg'>
                                    View
                                </button>
                            </a>
                            <a href="https://github.com/TEMOSO-MOJAPELO/Calculator.git">
                                <button className='text-center+ rounded-lg px-4 py-3 m-2 bg-white text-[#d9ab60] font-bold text-lg'>
                                    Code
                                </button>
                            </a>
                        </div>
                    </div>
                </div>

                <div style={{backgroundImage: `url(${PredictApp})`}} className='shadow-lg shadow-[#09060a] group container rounded-md flex justify-center items-center mx-auto content-div'>

                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'> 
                        Predict Express App
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://predict-0tf4.onrender.com/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-[#d9ab60] font-bold text-lg'>
                                    View
                                </button>
                            </a>
                            <a href="https://github.com/TEMOSO-MOJAPELO/predict.git">
                                <button className='text-center+ rounded-lg px-4 py-3 m-2 bg-white text-[#d9ab60] font-bold text-lg'>
                                    Code
                                </button>
                            </a>
                        </div>
                    </div>
                </div>

                <div style={{backgroundImage: `url(${PredictUI})`}} className='shadow-lg shadow-[#09060a] group container rounded-md flex justify-center items-center mx-auto content-div'>

                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'> 
                        Predict UI
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://www.figma.com/design/lIUhW4sa6wCrcQHpWopNhp/Predict-App?node-id=149-2&t=HEaxGNUoU4CdyunO-1">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-[#d9ab60] font-bold text-lg'>
                                    View
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