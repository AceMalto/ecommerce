import React from 'react'
import { LuShoppingCart } from "react-icons/lu";
import { CiHeart } from "react-icons/ci";

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
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDescription