import React from 'react'
import { LuShoppingCart } from "react-icons/lu";
import { CiHeart } from "react-icons/ci";
import { SlLike } from "react-icons/sl";
import { SlDislike } from "react-icons/sl";
const ProductDescription = () => {
    return (
        <div 
            className='w-screen h-screen
            xz:p-5 border border-black
            xy:
            xx:
            xw:
            xu:
            xt:
            '>
            {/* NAV PART */}
            <div >
                {/* <div> breadcrums when medium screen to large</div> */}
                <div
                    className='grid
                    xz:grid-cols-1 xz:gap-5
                    xy:
                    xx:
                    xw:
                    xu:
                    xt:
                    '       
                >
                    <div 
                        className='border border-black w-full
                            xz:h-96
                            xy:
                            xx:
                            xw:
                            xu:
                            xt:
                        '
                    >
                        {/* images here and more picture */}
                        asdsa
                    </div>
                    <div className='xz:space-y-2'>
                        {/* description here */}
                        <div className='flex items-center xz:justify-between'>
                            <h1 className='text-[15px] font-medium'>Reebok</h1>
                            <span className=' text-[#a4a4a4] text-[13px]'>HR132ROO-8</span>
                        </div>
                        
                        <div>
                            <h1 className=' font-medium xz:text-lg'>Shoes Reebok Zig Kinetica 3</h1>
                            {/* reviews for product */}

                        </div>

                        <div>
                            <h1 className=' text-3xl font-medium'>
                                $199.00
                            </h1>
                        </div>

                        <div>
                            {/* variant color etc. */}
                        </div>
                        
                        <div className='flex space-x-2'>
                            <button className='flex justify-center items-center text-sm text-white border border-[#010101] bg-[#010101]
                                xz:py-2 xz:px-3 xz:w-full rounded-lg
                                xy:
                                xx:
                                xw:
                                xu:
                                xt:
                            '>
                                <LuShoppingCart />&nbsp;&nbsp;Add to cart
                            </button>
                            <button className='  border bg-[#a4a4a4]
                                xz:py-2 xz:px-3 rounded-lg
                                xy:
                                xx:
                                xw:
                                xu:
                                xt:
                            '>
                                <CiHeart className=' text-2xl'/>
                            </button>
                        </div>

                        <div className='grid
                                xz:grid-cols-1
                                xy:
                                xx:
                                xw:
                                xu:
                                xt:
                        '>
                            {/* naka tab dito & rate */}
                            <div>
                                {/* star rating if meron */}
                            </div>
                            <div>
                                <div className='flex space-x-2'>
                                    <img src="" alt="profile_pic"  className='border rounded-full w-10 h-10'/>
                                    <div>
                                        <h1>Name here</h1>
                                        <p>
                                            {/* star rate here */}
                                        </p>
                                        dapat naka map dito since madami yun mga possible reviews
                                        <div>
                                            <span className='flex text-left'>
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit ipsa explicabo recusandae reprehenderit labore dolores.
                                            </span>
                                            <div className=' space-x-12'>
                                                <button>
                                                    <SlLike/> {/*  add count like and dislike */}
                                                </button>
                                                <button>
                                                    <SlDislike/>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                {/* suggested products (top 6 search products ) my user like and dapat naka map rin dito  */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDescription