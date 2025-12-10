import Image from 'next/image'
import React from 'react'
import Button from './Button'
import { FaGlobe, FaPlay, FaStar } from 'react-icons/fa';


const Hero = () => {
  return (
    <section className=' max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row'>
      <div className='hero-map'/>

      {/* Left */}

      <div className='lg:flex space-y-10 lg:space-y-none'>
        <div className='relative mx-5 z-30 flex flex-1 flex-col xl:w-1/2'>
       <FaGlobe size={45}
        className='absolute text-[#00B4D8]  left-[-10px] top-[-34px] w-10 lg:w-[50px] lg:top-[-38px]'
       />
       <h1 className='text-3xl mt-0.5 lg:text-4xl font-bold'>Puerto Rico Camp Area</h1>
       <p className='regular-16 mt-6 text-gray-30 xl:w-[520px]'>We want to be on each of journeys seeking the satisfaction of seeing the incorruptible beauty of nature. We can help you on an adventure around the world in just one app.</p>

       <div className='my-11 flex flex-wrap gap-5'>
          <div className='flex items-center gap-2'>
            {Array(5).fill(1).map((_, index) =>(
           <FaStar 
           className='text-amber-400'  
           size={20}
           key={index}/>
            ))}
          </div>

          <p className='font-semibold text-green-400'>
            198k
            <span className='ml-1 font-light font-serif text-green-200'>Excellent Reviews</span>
          </p>
       </div>

       <div className='flex flex-col w-full gap-3 sm:flex-row'>
          <Button
          type='button'
          title='Download App'
          variant='btn_green'
        
          />

          <Button
          type='button'
          title='How we work?'
          icon={<FaPlay className='size-4 text-green-500'/>}
          variant='btn_white_text'
          />
       </div>
      </div>

      <div className='relative flex flex-1 items-start mx-5 '>
        <div className='relative z-20 flex w-[268px] flex-col gap-8 rounded-3xl bg-green-950 px-7 py-8'>
          
          
          <div className='flex flex-col'>
            <div className='justify-between flex -mt-2 text-sm text-gray-500'>
              <p className=''>
                Location
              </p>
              <p className='text-white text-[1.2rem]'>&times;</p>
            </div>
            <p className='font-bold'>Aquas Callentes</p>
          </div>

            <div className='justify-between flex'>
              <div className='flex flex-col'>
                <p className='text-sm text-gray-500'>Distance</p>
                <p className='font-bold text-lg'>156.43ml</p>
              </div>

              <div className='flex flex-col '>
                <p className='text-sm text-gray-500'>Elevation</p>
                <p className='font-bold text-lg'>2,040km</p>
              </div>
            </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Hero