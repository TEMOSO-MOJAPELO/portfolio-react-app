import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#160F19] flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/warkwjpb" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-[#6A322C] text-[#d9ab60]'>Contact</p>
                <p className='text-[#d9ab60] py-4'>//Submit the form below or contact me</p>
            </div>
            <input className='bg-[#f6edb1] p-2' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#f6edb1]' type="text" placeholder='Email' name='email' />
            <textarea className='bg-[#f6edb1] p-2' name="message" rows='10' placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-[#6A322C] hover:border-[#6A322C] px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
        </form>
    </div>
  )
}

export default Contact