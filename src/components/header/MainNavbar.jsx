import React, { useState } from 'react'
import svg from '../../assets/logo-header.xl.svg'
import { ArrowDownNarrowWide } from 'lucide-react'

import  { RiArrowDownWideLine  } from "react-icons/ri";

function MainNavbar({setTabHoverTitle}) {
 
  return (
    <div className='px-14 flex justify-between items-center py-4 border-b-1 border-neutral-300'>
      <img src={svg} alt="main logo" className='cursor-pointer' />
    
      {/* navbar */}
      <div className='flex-1 hidden lg:flex justify-center items-center text-[18px] text-[#003A43] '>
        <button onMouseEnter={()=>setTabHoverTitle("products")} onMouseLeave={()=>setTabHoverTitle(null)} className='hover:bg-[#F8F3EB] group duration-300 px-3 py-3 rounded-4xl flex gap-2 justify-center items-center'>Products <span className='group-hover:rotate-180 duration-300 delay-75 '><RiArrowDownWideLine size={14} /></span></button>
        <button className='hover:bg-[#F8F3EB] group duration-300 px-3 py-3 rounded-4xl'>Pricing</button>
        <button onMouseEnter={()=>setTabHoverTitle("products")} onMouseLeave={()=>setTabHoverTitle(null)} className='hover:bg-[#F8F3EB] group duration-300 px-3 py-3 rounded-4xl flex gap-3 justify-center items-center'>Resources <span className='bg-[#D2DCDA] rounded-4xl text-xs py-1 px-2'>New</span> <span className='group-hover:rotate-180 duration-300 delay-75 '><RiArrowDownWideLine size={14} /></span></button>
        <button onMouseEnter={()=>setTabHoverTitle("products")} onMouseLeave={()=>setTabHoverTitle(null)} className='hover:bg-[#F8F3EB] group duration-300 px-3 py-3 rounded-4xl flex gap-2 justify-center items-center'>About <span className='group-hover:rotate-180 duration-300 delay-75 '><RiArrowDownWideLine size={14} /></span></button>
      </div>

    {/* {hovered && "Hello"} */}

      <div className="buttons gap-6 flex justify-center items-center">
        <button className='text-[18px] border-[1px] border-[#003A43] text-[#003A43] rounded-4xl py-3 px-5 cursor-pointer text-nowrap'>Take a tour</button>
        <button className='text-[18px] bg-[#FF8D6E] text-[#232323] rounded-4xl py-3 px-5 cursor-pointer text-nowrap'>Get a demo</button>
      </div>
    </div>
  )
}

export default MainNavbar
