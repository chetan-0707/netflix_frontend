import React from 'react'
import { MdOutlinePlayCircle } from "react-icons/md";
import { IoIosInformationCircleOutline } from "react-icons/io";

export default function VideoTitle( {title,overview}) {
  return (
    <div className='w-[vw] absolute text-white pt-[18%] p-12'>
        <h1 className='text-3xl font-bold'>{title}</h1>
        <p className='w-1/3 mt-4'>{overview}</p>
        <div className='mt-8 flex mx-4'>
            <button className='flex items-center px-6 py-2 bg-white text-black rounded-md hover:bg-opacity-75'> <MdOutlinePlayCircle size="24px" /> <span className='ml-1'>Play</span></button>
            <button className='mx-2 flex items-center px-6 py-2 bg-gray-500 text-black rounded-md hover:bg-opacity-60'><IoIosInformationCircleOutline size="24px"/><span className='ml-1'>Watch more</span></button>
        </div>
    </div>
  )
}
