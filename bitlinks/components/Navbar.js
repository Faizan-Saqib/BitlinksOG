import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <>
      <div className='h-14 px-8 flex items-center justify-between text-white bg-purple-600   poppins-regular-italic' >
        <div className="logo font-black ">
           <Link href='/' >BitLink</Link> 
        </div>
        <ul className='flex justify-center items-center gap-4 ' >
         <Link href='/' > <li className='cursor-pointer' >Home</li> </Link> 
         <Link href='/about' > <li className='cursor-pointer' >About</li>     </Link> 
         <Link href='/shorten' > <li className='cursor-pointer' >Shorten</li>    </Link>     
         <Link href='/contact' > <li className='cursor-pointer' >Contact Us</li>    </Link>
          <li>
            <div className="buttons flex justify-center gap-2 ">
             <Link href="/shorten"><button className='bg-purple-500 rounded-lg shadow-lg p-3 py-1 font-bold text-white'>Try Now</button></Link>
          <Link href="/github"><button className='bg-purple-500 rounded-lg shadow-lg p-3 py-1 font-bold text-white'>GitHub</button></Link>
            </div>
          </li>
        </ul>
      </div >
    </>
  )
}

export default Navbar
