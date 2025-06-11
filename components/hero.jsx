"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="pb-20 px-4">
   <div className="container mx-auto text-center">
    <h1 className="text-5xl md:text-8xl lg:text-[105px] pb-6 gradient-title">
          Master Your Finances <br /> with Quantro Intelligence
    </h1>
    <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
      Quantro is an AI-powered platform that helps you track expenses,  
  analyze spending patterns, and gain real-time financial insights.
    </p>

   <div className="flex justify-center space-x-4">
   <Link href="/dashboard">
   <Button size= "lg" className="px-8" >Get Started</Button>
   </Link>
  <Link href="https://github.com/">
   <Button size= "lg" variant ='outline'className="px-8" >Source Code Here </Button>
   </Link>
    </div>
    <div>
      <div>
        <Image/>
        </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
