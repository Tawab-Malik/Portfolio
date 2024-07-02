import { Button, Image } from "@nextui-org/react";
import Link from "next/link";




export default function About(){
       return(
        <>

        <section>
            <div className=" py-[100px] flex justify-center w-full max-w-7xl mx-auto xl:flex-row flex-col-reverse">

                <div className=" px-[20px] xl:px-10 py-20 w-full space-y-5">
                    <h1 className=" text-[48px] font-bold">About me</h1>
                    <p className=" text-silver text-base text-justify">Hi, My name is Abdul Tawab. I am a Front-End Website Developer. As a Front-End Web Developer, I specialize in crafting engaging and user-friendly interfaces. With expertise in HTML, CSS, and JavaScript, Now continue Developing my Project using Tailwindcss,in Next.js as well as Next.UI. I am dedicated to bringing creative designs to life and ensuring seamless user experiences. My goal is to build visually appealing and highly functional websites that meet the needs of users and clients alike.</p>
                    <Button className=" bg-yellow text-lg font-medium"><Link href="/mine/cv.pdf">Resume</Link></Button>
                </div>
                <div className=" w-full flex justify-center">
                    <Image src="/mine/11.png" className=" h-[250px] w-[250px] xl:h-[524px] xl:w-[524px] rounded-full bg-yellow" alt=" img" height={1000} width={1000}/>
                </div>
            </div>
        </section>
        </>
       )
}