import { People } from "@/constant"
import Image from "next/image"


const Campsite = ({backgroundImage, title, subtitle, peoplejoined}) => {
  return (
    <div className={`overflow-x-auto whitespace-nowrap className="min-w-[300px] flex-shrink-0" h-full w-full min-w[2500px] ${backgroundImage} bg-cover bg-no-repeat lg:rounded-4xl 2xl:rounded-5xl`}>
      <div className="flex h-full flex-col items-start justify-between p-6 lg:px-20">
        <div className="flex gap-4 -mx-15 ">
          <div className="rounded-full bg-[#00B4D8]  p-4 ">
             <Image
             src='/globe.svg'
             alt="wind"
             width={28}
             height={28}/>
          </div>
          <div className="flex flex-col gap-1">
            <h4 className="font-bold ">{title}</h4>
            <p>{subtitle}</p>
          </div>
        </div>
        <div className="flex gap-6 -mx-15 mt-10 ">
           <span className="flex -space-x-4 overflow-hidden">
            {People.map(display => (
              <Image
              className=" rounded-full inline-block h-10 w-10 border-green-500 -mx-2"
              src={display}
              key={display}
              alt="person"
              width={25}
              height={25}/>
            ))}
           </span>
           <p className="font-bold text-lg -mx-3 mt-2">{peoplejoined}</p>
        </div>
      </div>
    
    </div>
  )
}


const Camp = () => {
  return (
    <section className='max-w-[1150px] 2xl:max-container mx-auto py-10 lg:mb-10 lg:py:20 xl:mb:20 flex flex-col relative'>
      <div className='hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]'>
       <Campsite
       backgroundImage="bg-[url('/camp1.jpeg')]"
       title='Puerto Rico Camp'
       subtitle='Prigon, Pasuruan'
       peoplejoined='50+ joined'/>

      <Campsite
       backgroundImage="bg-[url('/camp.webp')]"
       title='Puerto Rico Camp'
       subtitle='justina, julius'
       peoplejoined='40+ joined'/>
      </div> 

      <div className="flex mt-10 lg:-mt-20 lg:ml-70 ">
        <div className=" space-y-6 bg-green-600 p-8 lg:max-w-[460px] xl:rounded-5xl xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl">
          <h2 className="font-bold text-xl md:text-2xl lg:text-3xl">
            <strong>Feeling Lost</strong> And Not Knowing The Way?
          </h2>
          <p className="text-xl xl:text-2xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Error neque culpa, odit recusandae <br />nemo voluptatem? 
            Quis dicta autem nulla! Cum eaque reiciendis ut similique? Eaque <br />
            doloribus amet dicta natus quisquam!
          </p>

        </div>
      </div>
    </section>
  )
}

export default Camp