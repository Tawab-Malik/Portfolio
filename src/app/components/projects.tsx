import { Button, Image } from "@nextui-org/react"
import Link from "next/link"







export default function Projects(){
      return(
        <>
          <section id="2">
            <div className=" py-[100px]">

                    <div className=" flex flex-col justify-center items-center">
                    <h1 className=" text-[48px] font-bold">Projects</h1>
                    <div className=" w-[100px] h-[4px] bg-yellow flex justify-center " ></div>
                    </div>
                        {/* 1st div  */}
                    <div className=" xl:flex w-full rounded-r-3xl py-[50px]  ">
                        <div className=" space-y-5 bg-[#f4f4f4] px-8 py-9  rounded-l-3xl w-full xl:w-[50%]">
                              <h1 className=" text-[40px] font-bold">Stratonode</h1>
                              <p className=" text-lg text-silver">I created this personal project in Next.js All the Component that are used are taken from Next.ui as well as from Tailwindcss Componenents and Tailwindcss is used to impove the Efficiency of Code. </p>
                            <Button className=" w-[150px] h-[43px] text-lg font-medium !bg-transparent border border-[#25282B] rounded-3xl"><Link className=" my-5" href="https://www.stratonode-two.vercel.app">View Project</Link></Button>
                        </div>
                        <div className=" h-full w-full xl:w-[50%] !rounded-r-3xl">
                            <Image src="/pro/1.png" isZoomed radius="none" className="  !rounded-r-3xl h-full w-full"  height={1000} width={1000}></Image>
                        </div>
                    </div>
                     {/* 2st div  */}
                     <div className=" xl:flex w-full rounded-r-3xl py-[50px]  ">
                     <div className=" h-full w-full xl:w-[50%] !rounded-l-3xl">
                            <Image src="/pro/2.png" isZoomed radius="none" className="  !rounded-l-3xl h-full w-full"  height={1000} width={1000}></Image>
                        </div>
                        <div className=" space-y-5 bg-[#f4f4f4] px-8 py-9 w-full xl:w-[50%] rounded-r-3xl">
                              <h1 className=" text-[40px] font-bold">Stoshi-Dex</h1>
                              <p className=" text-lg text-silver">I created this personal project in Next.js All the Component that are used are taken from Next.ui as well as from Tailwindcss Componenents and Tailwindcss is used to impove the Efficiency of Code.</p>
                              <Button className=" w-[150px] h-[43px] text-lg font-medium !bg-transparent border border-[#25282B] rounded-3xl"><Link className=" my-5" href="https://https://stoshi-dex.vercel.app/">View Project</Link></Button>                        </div>
                        
                    </div>
                     {/* 3rd div  */}
                     <div className=" xl:flex w-full rounded-l-3xl py-[50px]  ">
                    
                        <div className=" space-y-5 bg-[#f4f4f4] px-8 py-9 w-full xl:w-[50%] rounded-l-3xl">
                              <h1 className=" text-[40px] font-bold">Portfolio</h1>
                              <p className=" text-lg text-silver">I created this personal project in Next.js All the Component that are used are taken from Next.ui as well as Tailwindcss is used to impove the Efficiency of Code.</p>
                              <Button className=" w-[150px] h-[43px] text-lg font-medium !bg-transparent border border-[#25282B] rounded-3xl"><Link className=" my-5" href="https://www.stratonode-two.vercel.app">View Project</Link></Button>                        </div>
                        <div className=" h-full w-full xl:w-[50%] !rounded-r-3xl">
                            <Image src="/pro/3.png" isZoomed radius="none" className="  !rounded-r-3xl h-full w-full"  height={1000} width={1000}></Image>
                        </div>
                        
                    </div>
               
            </div>
          </section>
        </>
      )
}