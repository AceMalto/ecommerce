import React, { useEffect, useState } from 'react'


const AddProducts = () => {
    const [discountType, setDiscountType] = useState("");
    const [timeSaleTime, setTimeSaleTime] = useState(""); // Store time (HH:MM)

    const [timePeriod, setTimePeriod] = useState("AM"); // Store AM/PM
    const [availableQuantity, setAvailableQuantity] = useState(500);
    const [timeSaleQuantity, setTimeSaleQuantity] = useState("");

    // Function to handle the quantity limit
    const handleQuantityChange = (e) => {
        const value = Number(e.target.value);
        if (value >= 1 && value <= availableQuantity) {
            setTimeSaleQuantity(value);
        } else {
            alert(`You must set a value between 1 and ${availableQuantity} pcs.`);
        }
    };
    return (
        <div className='flex-wrap p-5 pt-12 space-y-5 mb-12'>
            <div className=''>
                <h1 className=' font-medium text-xl'>
                    Add New Product
                </h1>
                <p className=' text-slate-400 text-xs'>
                    You can see all 
                </p>
            </div>
            
            <form action="">
                <div className='flex flex-col space-y-5'>
                    <div className='block items-center md:flex '>
                        <h1 className=' '>Brand</h1>
                        <input type="text" className='w-full border rounded-md shadow-lg py-1 pl-2'/>
                    </div>

                    <div className='block items-center md:flex'>
                        <h1>Product Name</h1>
                        <input type="text" className='w-full border rounded-md shadow-lg py-1 pl-2'/>
                        <span className=' text-xs'>A product name is required and recommended to be unique.</span>
                    </div>
                    
                    <div className='block items-center md:flex'>
                        <h1>Category</h1>
                        <select name="" id="" className='w-full border rounded-md shadow-lg py-1 pl-2'>
                            <option value="Select Categories" default>Select Categories</option>
                        </select>
                    </div>

                    <div className='block items-center md:flex'>
                        <h1>Variant</h1>
                        <input type="text" className='w-full border rounded-md shadow-lg py-1 pl-2'/>
                    </div>

                    <div className='block items-center md:flex'>
                        <h1>Description</h1>
                        <input type="text" name="" id="" className='w-full border rounded-md shadow-lg py-1 pl-2'/>
                        <span className=' text-xs'>set a description to the product for better visibility</span>
                    </div>

                    <div className='block items-center md:flex'>
                        <h1>Code</h1>
                        <input type="text" className='w-full border rounded-md shadow-lg py-1 pl-2'/>
                    </div>

                    <div className='block items-center md:flex'>
                        <h1>Images</h1>
                        <input type="file" className='w-full border rounded-md shadow-lg py-1 pl-2' multiple/>
                    </div>


                    <div className='block items-center md:flex'>
                        <h1>Pricing</h1>
                        <input type="text" className='border rounded-md shadow-lg py-1 pl-2'/>
                    </div>

                    <h1>Discount Type</h1>
                    <div className='flex flex-wrap gap-1'>
                        <label class="flex items-center space-x-2">
                            <input
                            type="radio"
                            name="discountType"
                            value="noSale"
                            class="peer hidden"
                            onChange={() => setDiscountType("noSale")}
                            />
                            <span class="w-6 h-6 rounded-full border border-gray-300 peer-checked:bg-red-500"></span>
                            <span class="text-gray-700">No Discount</span>
                        </label>
                        <label class="flex items-center space-x-2">
                            <input
                            type="radio"
                            name="discountType"
                            value="Sale"
                            class="peer hidden"
                            onChange={() => setDiscountType("Sale")}
                            />
                            <span class="w-6 h-6 rounded-full border border-gray-300 peer-checked:bg-red-500"></span>
                            <span class="text-gray-700">Sale</span>
                        </label>
                        <label class="flex items-center space-x-2">
                            <input
                            type="radio"
                            name="discountType"
                            value="timeSale"
                            class="peer hidden"
                            onChange={() => setDiscountType("TimeSale")}
                            />
                            <span class="w-6 h-6 rounded-full border border-gray-300 peer-checked:bg-red-500"></span>
                            <span class="text-gray-700">Time Sale</span>
                        </label>
                    </div>
                    {
                        discountType === "noSale" && (
                            <div>
                                
                            </div>
                        )
                    }
                    {
                        discountType === "Sale" && (
                            <div>
                                <input type="text" name='discountType'  className='w-full border rounded-md shadow-lg py-1 pl-2' placeholder='Sale Amount'/>
                                <span className=' text-xs '>note that it will not automatic set to no Discount this is manually set</span>
                            </div>
                        )
                    }
                    {discountType === "TimeSale" && (
                        <div className="mt-4 space-y-3">
                            {/* Time Input */}
                            <div>
                                <label className="block text-gray-700 font-semibold">Set Time:</label>
                                <div className="flex gap-2">
                                    <input
                                        type="time"
                                        name="timeSaleTime"
                                        className="border rounded-md px-2 py-1 w-full outline-none"
                                        value={timeSaleTime}
                                        onChange={(e) => setTimeSaleTime(e.target.value)}
                                    />
                                    {/* AM/PM Dropdown */}
                                    <select
                                        className="border rounded-md px-2 py-1 outline-none"
                                        value={timePeriod}
                                        onChange={(e) => setTimePeriod(e.target.value)}
                                    >
                                        <option value="AM">AM</option>
                                        <option value="PM">PM</option>
                                    </select>
                                </div>
                            </div>

                            {/* Quantity Limit Input */}
                            <div>
                                <label className="block text-gray-700 font-semibold">
                                    Set Quantity Limit (Max: {availableQuantity} pcs):
                                </label>
                                <input
                                    type="number"
                                    name="timeSaleQuantity"
                                    className="border rounded-md px-2 py-1 w-full outline-none"
                                    placeholder="Enter Quantity Limit"
                                    value={timeSaleQuantity}
                                    onChange={handleQuantityChange}
                                    min="1"
                                    max={availableQuantity}
                                />
                            </div>
                        </div>
                    )}

                    {/* Debugging - Display Selected Time */}
                    {discountType === "TimeSale" && timeSaleTime && (
                        <p className="mt-4 text-gray-700 font-semibold">
                            🕒 Time Sale starts at: {timeSaleTime} {timePeriod}
                        </p>
                    )}

                    <div className=''>
                        <button className='w-full border rounded-md shadow-lg py-1 pl-2'>
                            Save
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default AddProducts