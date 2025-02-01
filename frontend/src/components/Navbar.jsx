import React from 'react'
import { IoMdArrowBack } from "react-icons/io";
import { IoBasketOutline } from "react-icons/io5";


const Navbar = () => {
    return (
        <div 
            className='fixed w-screen bg-white shadow-lg
            sm: 
            md: 
            lg:
            xl: 
            2xl:'
        >
            <div
                className='flex items-center justify-between px-5 md:px-14 lg:px-14 h-10 md:h-16 lg:h-20'
            >
                <div>
                    <h1 className='hidden md:block lg:block font-bold text-lg'>
                        <strong>AM.</strong><span className=' text-gray-400'>S</span>
                    </h1>
                    <IoMdArrowBack className='text-xl block md:hidden lg:hidden'/>
                </div>
                <input type="text"  className='outline-none hidden md:block w-72 pl-10 py-1 rounded-md border shadow-lg' placeholder='Search'/>
                <div className='flex items-center space-x-5'>
                    <div>
                        <IoBasketOutline className='text-xl md:text-2xl lg:text-3xl xl: 2xl:'/>
                    </div>
                    <div>
                        <img src="" alt=""  className='hidden lg:block lg:w-10 lg:h-10 rounded-full shadow-lg'/>
                    </div>
                </div>
            </div>
            <div className='flex pl-14 text-sm hidden md:block pb-3'>
                <ul className='flex gap-5'>
                    <li className=' font-medium'>Women</li>
                    <li className=' font-medium'>Men</li>
                    <li className=' font-medium'>Kids</li>
                    <li className=' font-medium'>Sports</li>
                    <li className=' font-medium'>New</li>
                    <li className=' font-medium'>Brands</li>
                    <li className=' text-red-400'>Sale</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar