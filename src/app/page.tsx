import Image from "next/image";
import * as React from "react";
import Hello from "./components/hellomy";
import Projects from "./components/projects";
import Contact from "./components/contact";

// 1. import `NextUIProvider` component

export default function Home() {
  return (
   <> <div className=" max-w-7xl mx-[20px]  2xl:mx-auto ">
        <Hello/>
        <Projects/>
        <Contact/>

   </div>
        
   </>
  );
}
