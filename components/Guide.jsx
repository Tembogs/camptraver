
import Image from 'next/image'
import { FaGlobe } from 'react-icons/fa'

const Guide = () => {
  return (
    <section className='flex flex-col max-w-[1000px] mx-auto'>
      <div className='padding-container max-container w-full pb-24'>
      <FaGlobe size={40}
        className='text-[#00B4D8]'
       />
        <p className='uppercase mb-3 text-green-500 mx-2'>
          We are here for you
        </p>
        
        <div className='flex flex-wrap justify-between gap-5 lg:gap-10'>
          <h2 className='text-xl lg:text-3xl'>
            Guide You to Easy Path
          </h2>
          <p className='lg:max-w[520px]'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat illum ducimus saepe 
            dolorem, cupiditate praesentium fuga reiciendis totam dignissimos autem 
            amet deleniti voluptatem nesciunt similique earum. Fugit assumenda molestiae dolores!
          </p>
        </div>
      </div>
    
      <div className='flex items-center relative max-w-full w-full'>
        <Image
        src ='/boat.webp'
        alt ='boat'
        width ={1440}
        height ={500}
        className = 'w-full object-cover object-center 2xl:rounded-5xl h-44 lg:h-180'
        />


        <div className='absolute bg-white py-12 pl-5 pr-7 gap-3 rounded-3xl shadow-lg md:-left-30 lg:top-10 mx-40 text-black'>
          <div className='flex justify-between flex-col'>
            <div className='flex w-full flex-col'>
              <div className='flex space-x-4'>
                <p className=''>Destination</p>
                <p className='font-bold text-green-500'> 48min</p>
              </div>
              <p className='font-bold mt-2'>Aquas Callentes</p>
            </div>
          </div>
           
          <div className='flex w-full flex-col'>
            <p className=''>Start Track</p>
            <h4 className='font-bold mt-2 whitespace-nowrap'>Wonorejo Pasuruan</h4>
          </div>
          
        </div>
      </div>
      
    </section>
  )
}

export default Guide