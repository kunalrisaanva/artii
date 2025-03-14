
import React from 'react'
import NavBarImage from "../../public/images/DALL·E 2024-10-01 19.02.09 - A detailed cultural image with traditional Indian elements like peacock feathers, musical instruments, and books arranged artistically on a white back-Photoroom.png";
import Image from 'next/image';


function Navbar() {
  return (
    <>
      <div className='flex items-center justify-start shadow-lg px-3  bg-orange-50'>

        <div className='w-[10rem] flex items-center'>
          <Image src={NavBarImage} alt="nabar_image" hieght={0} width={70} />
          <span className="font-serif text-2xl pl-2 text-yellow-600 font-bold ">Paawan</span>
        </div>
      </div>


    </>


  )
  0
}

export default Navbar