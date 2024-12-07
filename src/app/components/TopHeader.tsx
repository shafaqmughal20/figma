import React from 'react';
import { IoSearch } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import Link from '.react/link'





  const TopHeader = () => {
    return (
      
      <div className="bg-[#000000] text-[#FAFAFA] flex w-[1440px]  h-[48px] ">
        <div className=' flex  w-[859px] h-[24px]  ml-[445px] gap-[231px]   '>
        
        <div>
      <p className=" flex gap-8 w-[580px] h-[18px] mt-[12px] text-[14px] ">
  Summer Sale For All Swim Suits And Free Express Delivery-OFF 50%!
     <span className=' font-poppins font-semibold w-[68px] h-[24px] underline text-[14px] text-cente'>ShopNow</span> </p>
     </div>

    <div className='text-[14px]
    w-[78px] h-[24px] gap-5 items-center' >
     <select name='select' id='select' className= 'bg-[#000000] text-white  mt-[12px]  '>
      <option value='English' className= 'bg-[#000000] text-white w-[24px] h-[24px] '>English</option> 
     </select>
     </div>
      </div>
    </div>
    
      
    )
  }
  


  export default TopHeader;


  export const Header = () => {
    return (

<div className="text-gray-600 body-font" >
    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
        <span className="ml-3 text-xl">Exclusive</span>
      </a>
      <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
        <Link href="/">Home</Link>
        <Link href="/">About</Link>
        <Link href="/">Contact</Link>
        <Link href="/">Sign-Up</a>
        <Link href="/">Sign-Up</a>
         </nav>

         <div className=' w-[220px] h-[20px] '>
         <input  type='text' placeholder='What Are You Looking For?'   className=' w-[220px] h-[20px] '  >
  </input>
  <IoSearch className= 'font-[#000000]' />
  </div>
 
      <IoMdHeartEmpty  className= '' />
  <IoCartOutline className=  'font-[#000000] '  />
  
  
    </div>
  </div>

    )
  }
