import React, { useState } from 'react'

const ProductView = () => {
    const [ activeTab, setActiveTab ] = useState("reviews")
    
    return (
        <div className='flex-wrap px-5 md:px-5 lg:px-14'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 md:gap-5 lg:gap-12 pt-16 md:pt-28 lg:pt-32'>
                <div className=''>
                    <div className='border h-80 rounded-md shadow-lg'>
                    
                    </div>
                    <div className='flex flex-row space-x-2 mt-3.5 overflow-auto'>
                    {/* use .map here since multiple card ProductView */}
                        <div className='border w-20 aspect-square flex-shrink-0 rounded-md shadow-lg'>
                            a
                        </div>
                    </div>
                </div>
                <div className='pt-5'>
                    <div className='flex justify-between items-center mb-2'> 
                        <div className='flex items-center gap-2 '>
                            <img src="" alt=""  className='rounded-full w-9 aspect-square border'/>
                            <h1>
                                Reebok
                            </h1>
                        </div>
                        <div>
                            <p className='text-gray-400 text-xs'>product code</p>
                        </div>
                    </div>
                    <div>
                        <h1 className='text-xl font-medium'>Shoes Reebok Zig Kinetica 3</h1>
                        <span className=' text-xs text-gray-400'>⭐⭐⭐⭐⭐ | 42 reviews</span>
                    </div>

                    <div className=' mt-1'>
                        <h1 className='text-3xl font-semibold'>$199.00</h1>
                    </div>

                    <form action="">
                        {/* variation of the production */}
                        <div className='flex flex-col space-y-1'>
                            {/* dito sa part na to dapat my selection if what type of products is that */}
                            <h1 className=' text-xs mt-5'>Color</h1>
                            
                            <div className='flex flex-wrap gap-1 h-16'>
                                <label class="flex items-center space-x-2">
                                    <input
                                    type="radio"
                                    name="color"
                                    value="green"
                                    class="peer hidden"
                                    />
                                    <span class="w-6 h-6 rounded-full border border-gray-300 peer-checked:bg-green-500"></span>
                                    <span class="text-gray-700">Green</span>
                                </label>
                                <label class="flex items-center space-x-2">
                                    <input
                                    type="radio"
                                    name="color"
                                    value="green"
                                    class="peer hidden"
                                    />
                                    <span class="w-6 h-6 rounded-full border border-gray-300 peer-checked:bg-green-500"></span>
                                    <span class="text-gray-700">Green</span>
                                </label>
                                <label class="flex items-center space-x-2">
                                    <input
                                    type="radio"
                                    name="color"
                                    value="green"
                                    class="peer hidden"
                                    />
                                    <span class="w-6 h-6 rounded-full border border-gray-300 peer-checked:bg-green-500"></span>
                                    <span class="text-gray-700">Green</span>
                                </label>
                                <label class="flex items-center space-x-2">
                                    <input
                                    type="radio"
                                    name="color"
                                    value="green"
                                    class="peer hidden"
                                    />
                                    <span class="w-6 h-6 rounded-full border border-gray-300 peer-checked:bg-green-500"></span>
                                    <span class="text-gray-700">Green</span>
                                </label>
                                <label class="flex items-center space-x-2">
                                    <input
                                    type="radio"
                                    name="color"
                                    value="green"
                                    class="peer hidden"
                                    />
                                    <span class="w-6 h-6 rounded-full border border-gray-300 peer-checked:bg-green-500"></span>
                                    <span class="text-gray-700">Green</span>
                                </label>
                                <label class="flex items-center space-x-2">
                                    <input
                                    type="radio"
                                    name="color"
                                    value="green"
                                    class="peer hidden"
                                    />
                                    <span class="w-6 h-6 rounded-full border border-gray-300 peer-checked:bg-green-500"></span>
                                    <span class="text-gray-700">Green</span>
                                </label>
                            </div>
                        </div>

                        <div className='flex flex-col space-y-1'>
                            {/* dito sa part na to dapat my selection if what type of products is that */}
                            <h1 className=' text-xs mt-5'>Size</h1>
                            
                            <div className='flex flex-wrap items-center gap-1 h-20'>
                                <label class="cursor-pointer">
                                    <input
                                    type="radio"
                                    name="box-radio"
                                    value="option2"
                                    class="peer hidden"
                                    />
                                    <div class="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-lg peer-checked:bg-blue-500 peer-checked:text-white peer-checked:border-blue-600">
                                        41
                                    </div>
                                </label>
                                <label class="cursor-pointer">
                                    <input
                                    type="radio"
                                    name="box-radio"
                                    value="option2"
                                    class="peer hidden"
                                    />
                                    <div class="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-lg peer-checked:bg-blue-500 peer-checked:text-white peer-checked:border-blue-600">
                                        41
                                    </div>
                                </label>
                                <label class="cursor-pointer">
                                    <input
                                    type="radio"
                                    name="box-radio"
                                    value="option2"
                                    class="peer hidden"
                                    />
                                    <div class="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-lg peer-checked:bg-blue-500 peer-checked:text-white peer-checked:border-blue-600">
                                        41
                                    </div>
                                </label>
                                <label class="cursor-pointer">
                                    <input
                                    type="radio"
                                    name="box-radio"
                                    value="option2"
                                    class="peer hidden"
                                    />
                                    <div class="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-lg peer-checked:bg-blue-500 peer-checked:text-white peer-checked:border-blue-600">
                                        41
                                    </div>
                                </label>
                                <label class="cursor-pointer">
                                    <input
                                    type="radio"
                                    name="box-radio"
                                    value="option2"
                                    class="peer hidden"
                                    />
                                    <div class="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-lg peer-checked:bg-blue-500 peer-checked:text-white peer-checked:border-blue-600">
                                        41
                                    </div>
                                </label>
                                <label class="cursor-pointer">
                                    <input
                                    type="radio"
                                    name="box-radio"
                                    value="option2"
                                    class="peer hidden"
                                    />
                                    <div class="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-lg peer-checked:bg-blue-500 peer-checked:text-white peer-checked:border-blue-600">
                                        41
                                    </div>
                                </label>
                                <label class="cursor-pointer">
                                    <input
                                    type="radio"
                                    name="box-radio"
                                    value="option2"
                                    class="peer hidden"
                                    />
                                    <div class="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-lg peer-checked:bg-blue-500 peer-checked:text-white peer-checked:border-blue-600">
                                        41
                                    </div>
                                </label>
                                <label class="cursor-pointer">
                                    <input
                                    type="radio"
                                    name="box-radio"
                                    value="option2"
                                    class="peer hidden"
                                    />
                                    <div class="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-lg peer-checked:bg-blue-500 peer-checked:text-white peer-checked:border-blue-600">
                                        41
                                    </div>
                                </label>
                                <label class="cursor-pointer">
                                    <input
                                    type="radio"
                                    name="box-radio"
                                    value="option2"
                                    class="peer hidden"
                                    />
                                    <div class="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-lg peer-checked:bg-blue-500 peer-checked:text-white peer-checked:border-blue-600">
                                        41
                                    </div>
                                </label>
                                <label class="cursor-pointer">
                                    <input
                                    type="radio"
                                    name="box-radio"
                                    value="option2"
                                    class="peer hidden"
                                    />
                                    <div class="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-lg peer-checked:bg-blue-500 peer-checked:text-white peer-checked:border-blue-600">
                                        41
                                    </div>
                                </label>
                                <label class="cursor-pointer">
                                    <input
                                    type="radio"
                                    name="box-radio"
                                    value="option2"
                                    class="peer hidden"
                                    />
                                    <div class="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-lg peer-checked:bg-blue-500 peer-checked:text-white peer-checked:border-blue-600">
                                        41
                                    </div>
                                </label>
                                <label class="cursor-pointer">
                                    <input
                                    type="radio"
                                    name="box-radio"
                                    value="option2"
                                    class="peer hidden"
                                    />
                                    <div class="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-lg peer-checked:bg-blue-500 peer-checked:text-white peer-checked:border-blue-600">
                                        41
                                    </div>
                                </label>
                                <label class="cursor-pointer">
                                    <input
                                    type="radio"
                                    name="box-radio"
                                    value="option2"
                                    class="peer hidden"
                                    />
                                    <div class="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-lg peer-checked:bg-blue-500 peer-checked:text-white peer-checked:border-blue-600">
                                        41
                                    </div>
                                </label>
                                
                            </div>
                        </div>

                        <div className='flex gap-2 mt-3'>
                            <button className='border bg-black text-white w-full rounded-lg shadow-md'>
                                Add to cart
                            </button>
                            <button className='border w-12 h-10 rounded-lg shadow-md'>
                                💖
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <div className=' pt-5 space-x-2'>
                <button onClick={() => setActiveTab("details")} className={`px-3 ${
                    activeTab === "details" ? "font-bold" : ""}`}>
                    Details
                </button>
                <button onClick={() => setActiveTab("reviews")} className={`px-3 ${
                    activeTab === "reviews" ? "font-bold" : ""}`}>
                    Reviews
                </button>
                <button onClick={() => setActiveTab("discussion")} className={`px-3 ${
                    activeTab === "discussion" ? "font-bold" : ""}`}>
                    Discussion
                </button>
            </div>
            <div className='pt-5 w-full'>
                {
                    activeTab === "details" && (
                        <div>
                            <h2 className="text-lg font-semibold mb-2">Details</h2>
                            <p>Here are the details of the item.</p>
                        </div>
                    )
                }
                {
                    activeTab === "reviews" && (
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-2'>
                            <div className=''>
                                <div>
                                    <div className='flex gap-3'>
                                        <img src="" alt="" className='w-10 rounded-full aspect-square border'/>
                                        <div className=''>
                                            <div className='flex items-center gap-1'>
                                                <h1 className='text-sm'>John Doe</h1>
                                                <span className='text-xs text-gray-300'>Yesterday</span>
                                            </div>
                                            <span>⭐⭐⭐⭐⭐</span>
                                        </div>
                                    </div>
                                    <div className='py-2'>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, deleniti.</p>
                                    </div>
                                    <hr className='w-full h-1'/>
                                </div>
                            </div>
                            <div className=''>
                                <div className='flex justify-between py-5'>
                                    <h1>⭐⭐⭐⭐⭐</h1>
                                    <p>5.0</p>
                                </div>
                                <hr className='w-full h-1' />
                            </div>
                        </div>
                    )
                }
                {
                    activeTab === "discussion" && (
                        <div>
                            <h2 className="text-lg font-semibold mb-2">Details</h2>
                            <p>Here are the details of the item.</p>
                        </div>
                    )
                }
            </div>

            <div className='pt-5 md:pt-10 lg:pt-10 grid grid-cols-2 gap-2 md:grid-cols-4 lg:grid-cols-6'>
                <div className='border h-52 rounded-md lg:h-60'>
                    <img src="" alt=""  className='w-full h-36 rounded-md'/>
                    <div className='text-center pt-2'>
                        <p className='text-xs md:text-sm lg:text-md xl:text-lg'>Addidas Yeezy Boost</p>
                        <span className=' font-medium'>$201.50</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductView