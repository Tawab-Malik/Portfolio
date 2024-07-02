import Image from "next/image";
import * as React from "react";
import Hello from "./components/hellomy";

// 1. import `NextUIProvider` component

export default function Home() {
  return (
   <> <div className=" max-w-7xl mx-auto">
        <Hello/>

   </div>
        
   </>
  );
}
