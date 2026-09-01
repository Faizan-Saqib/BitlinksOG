import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
      <>
      <div className="grid grid-cols-2  h-80 " >
       <div className="head bg-purple-100 flex flex-col justify-center items-center gap-4 ">
        <h1 className="font-bold text-xl" >The best URL shortener in the Market</h1>
         <p className="px-28 text-center">
            We are the most straightfoward URL Shortener in the world. Most of the url shorteners will track you or ask you to give your details for login. We understand your needs and hence we have created this URL shortener
          </p>
         
              <div className='flex gap-3 justify-start'>
          <Link href="/shorten"><button className='bg-purple-500 rounded-lg shadow-lg p-3 py-1 font-bold text-white'>Try Now</button></Link>
          <Link href="/github"><button className='bg-purple-500 rounded-lg shadow-lg p-3 py-1 font-bold text-white'>GitHub</button></Link>
        </div>
            
       </div>
       <div className="img flex justify-start relative bg-purple-100">
        <Image className="mix-blend-darken " alt="This is vector img" src={"/vector.jpg"} fill={true} />
       </div>
      </div>
      </>
  );
}
