import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { Link } from "@nextui-org/react";
import Image from "next/image";


export default function Footer(){
      return(
        <>
          <footer className=" relative">
          <Image src="/footer.png" alt="footer" className=" absolute w-full h-[344px]" height={1000} width={1000}></Image>
            <div className=" max-w-7xl mx-auto py-[50px] space-y-3">
                
                 <div className=" flex gap-3 justify-center">
                    <Link href="https://www.instagram.com/taw_abmalik?igsh=dGs5ZTljZnZiYXds&utm_source=qr"><RiInstagramFill className=" w-[48px] !text-black h-[48px]"/></Link>
                    <Link href="https://www.linkedin.com/in/tawab-malik-78ab9525b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"><FaLinkedin  className=" w-[48px] !text-black hover:text-yellow h-[48px]"/></Link>
                    <Link href="https://www.facebook.com/tawab.channar.12?mibextid=LQQJ4d"><FaFacebookSquare  className=" w-[48px] !text-black h-[48px]"/></Link>
                 </div>
                 <p className=" text-base text-center text-silver">TawabMalikx 2023</p>

            </div>
          </footer>
        </>
      )
}