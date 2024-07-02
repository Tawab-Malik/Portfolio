import { Button, Image } from "@nextui-org/react"









export default function Projects(){
      return(
        <>
          <section>
            <div className=" py-[100px]">

                    <div className=" flex flex-col justify-center items-center">
                    <h1 className=" text-[48px] font-bold">Projects</h1>
                    <div className=" w-[100px] h-[4px] bg-yellow flex justify-center " ></div>
                    </div>
                        {/* 1st div  */}
                    <div className=" xl:flex w-full rounded-r-3xl py-[50px]  ">
                        <div className=" space-y-5 bg-[#f4f4f4] px-8 py-10  rounded-l-3xl w-full xl:w-[50%]">
                              <h1 className=" text-[40px] font-bold">Stratonode</h1>
                              <p className=" text-lg text-silver">I created this personal project in order to show how to create an interface in Figma using a portfolio as an example.</p>
                            <Button className=" w-[150px] h-[43px] text-lg font-medium !bg-transparent border border-[#25282B] rounded-3xl">View Project</Button>
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
                        <div className=" space-y-5 bg-[#f4f4f4] px-8 py-10 w-full xl:w-[50%] rounded-r-3xl">
                              <h1 className=" text-[40px] font-bold">Stoshi-Dex</h1>
                              <p className=" text-lg text-silver">I created this personal project in order to show how to create an interface in Figma using a portfolio as an example.</p>
                            <Button className=" w-[150px] h-[43px] text-lg font-medium !bg-transparent border border-[#25282B] rounded-3xl">View Project</Button>
                        </div>
                        
                    </div>
                     {/* 3rd div  */}
                     <div className=" xl:flex w-full rounded-l-3xl py-[50px]  ">
                    
                        <div className=" space-y-5 bg-[#f4f4f4] px-8 py-10 w-full xl:w-[50%] rounded-l-3xl">
                              <h1 className=" text-[40px] font-bold">Portfolio</h1>
                              <p className=" text-lg text-silver">I created this personal project in order to show how to create an interface in Figma using a portfolio as an example.</p>
                            <Button className=" w-[150px] h-[43px] text-lg font-medium !bg-transparent border border-[#25282B] rounded-3xl">View Project</Button>
                        </div>
                        <div className=" h-full w-full xl:w-[50%] !rounded-r-3xl">
                            <Image src="/pro/3.png" isZoomed radius="none" className="  !rounded-r-3xl h-full w-full"  height={1000} width={1000}></Image>
                        </div>
                        
                    </div>
               
            </div>
          </section>
        </>
      )
}