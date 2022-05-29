import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8'>
            <div className='sm:text-right pb-8 pl-4'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-800'>
                About
                </p>
            </div>
            <div></div>
            </div>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                <div className='sm:text-right text-4xl font-bold'>
                    <p>Hi there! I'm Ahmad Noor and I'm 23 years old. Please take a look around.</p>
                </div>
                <div>
                    <p>After graduating in 2021, I decided to join Masai School to acquire necessary skills 
					required for industries. Since then I've focused on learning everything about web development, and I've had the
					privilege of learning with amazing instructors in Masai School. My main focus is building accessible, performant and awesome websites. I'm always
					looking for new challenges.</p>
                </div>
            </div>
        </div>
      </div>
  )
}

export default About
