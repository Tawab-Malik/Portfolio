import { Button, Image } from "@nextui-org/react";





export default function Hello(){
      return(
        <>
         <section>
            <div className=" xl:flex w-full  ">
                {/* left div */}
                <div className=" w-full pt-24">
                    <p  className=" text-xl text-yellow">Website Developer</p>
                    <h1 className=" md:text-6xl text-[40px] font-bold">Hello,  my name is Abdul Tawab</h1>
                    <p  className=" text-silver text-[24px]">Short text with details about you, what you do or your professional career. You can add more information on the about page.</p>
                   <div className=" flex gap-3">
                     <Button className=" bg-yellow w-28 h-10 text-base font-medium">Projects</Button>
                     <Button className=" bg-transparent w-28 h-10 text-base font-medium border-black rounded-lg border-2">Linkedin</Button>
                   </div>
                </div>
                {/* right div */}
                <div className=" w-full relative">
                    <Image src="/yellow.png" className=" absolute right-0 top-0   w-[720px] h-[400px] md:h-[630px]" width={1000} height={1000} alt=""></Image>
                    <Image src="/mine/Vector.png" alt="img" height={1000} width={1000} className=" absolute top-0"></Image>
                  <div className=" flex !justify-center">
                  <Image src="/mine/1.png" className=" relative w-[420px] h-[400px] md:h-[550px] top-0 mix-blend-color-burn" width={1000} height={1000} alt=""></Image>
                  
                  </div> 
                 
                    
                </div>
            </div>
         </section>
        </>
      )
}