import React from 'react'
import { ResponsiveLine } from '@nivo/line';


import { AllCommunityModule, ModuleRegistry } from 'ag-grid-community';



const Dashboard = () => {

    const data = [
        {
            id: 'Sales',
            data: [
                { x: 'Jan', y: 100 },
                { x: 'Feb', y: 200 },
                { x: 'Mar', y: 150 },
                { x: 'Apr', y: 250 },
            ],
        },
    ];


    // const [rowData, setRowData] = useState([
    //     { make: "Tesla", model: "Model Y", price: 64950, electric: true },
    //     { make: "Ford", model: "F-Series", price: 33850, electric: false },
    //     { make: "Toyota", model: "Corolla", price: 29600, electric: false },
    // ]);

    // // Column Definitions: Defines the columns to be displayed.
    // const [colDefs, setColDefs] = useState([
    //     { field: "make" },
    //     { field: "model" },
    //     { field: "price" },
    //     { field: "electric" }
    // ]);

    return (
        <div className='flex-wrap bg-slate-300 w-full min-h-screen px-5 pt-12 md:pt-28 lg border border-orange-400'>
            <div className=''>
                <h1 className=' font-medium text-sm md:text-lg'>
                    Welcome Back, User!
                </h1>
                <span className=' text-xs text-gray-500 md:text-sm lg:text-sm xl:text-sm'>
                    Here's what happening with your store today
                </span>
            </div>  

            {/* cards  start*/}
            <div className=' flex justify-center mb-5'>
                <div className='pt-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2'>
                    <div className=' bg-white px-10 py-5 rounded-lg w-72'>
                        <div>
                            <h1 className=' font-serif font-bold text-2xl'>
                                $307.48k
                            </h1>
                            <span className=' text-sm text-gray-400'>
                                Total Customer
                            </span>
                        </div>
                        <div>
                            <p className='font-medium text-lg'>
                                +30%
                            </p>
                            <span className='text-sm text-gray-400'>
                                This month
                            </span>
                        </div>
                    </div>
                    <div className=' bg-white px-10 py-5 rounded-lg w-72'>
                        <div>
                            <h1 className=' font-serif font-bold text-2xl'>
                                $307.48k
                            </h1>
                            <span className=' text-sm text-gray-500'>
                                Total Revenue
                            </span>
                        </div>
                        <div>
                            <p className='font-medium text-lg'>
                                -30%
                            </p>
                            <span className='text-sm text-gray-500'>
                                This month
                            </span>
                        </div>
                    </div>
                    <div className=' bg-white px-10 py-5 rounded-lg w-72'>
                        <div>
                            <h1 className=' font-serif font-bold text-2xl'>
                                $307.48k
                            </h1>
                            <span className=' text-sm text-gray-500'>
                                Total Deals
                            </span>
                        </div>
                        <div>
                            <p className='font-medium text-lg'>
                                +30%
                            </p>
                            <span className='text-sm text-gray-500'>
                                This month
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            {/* cards  end*/}

            {/* Data Visualization Start*/}
            <div className='bg-white rounded-md h-80 md:h-96 lg:h-[420px]'>
                <ResponsiveLine
                    data={data}
                    margin={{ top: 50, right: 50, bottom: 50, left: 60 }}
                    xScale={{ type: 'point' }}
                    yScale={{ type: 'linear', min: 0, max: 'auto', stacked: false }}
                    axisLeft={{ legend: 'Sales', legendOffset: -40, legendPosition: 'middle' }}
                    colors={{ scheme: 'category10' }}
                    pointSize={10}
                    pointBorderWidth={2}
                    useMesh={true}
                />
            </div>
            {/* Data Visualization End*/}

            {/* datagrid for product start */}
            {/* <div className="ag-theme-alpine bg-white w-full min-h-[400px]">
                <AgGridReact rowData={rowData} columnDefs={columnDefs} pagination={true} />
            </div> */}
            {/* datagrid for product end */}
            
            <div className='pt-5'>
                {/* top sale in municipal start */}
                <div className='bg-white px-5 py-5 rounded-md border w-full'>
                    <h1 className=' font-medium'>
                        Top Sale in Different Place
                    </h1>
                    <hr className='my-2' />
                    <div className='flex justify-between items-center mb-3'>
                        <p className=' text-xl font-medium'>34.48k</p>
                        <span className=' text-slate-400 text-xs'>Since Last week</span>
                    </div>
                    <div className='grid grid-flow-row'>
                        <div className='flex justify-between items-center'>
                            <h1>
                                Albay
                            </h1>
                            <span>
                                24k
                            </span>
                        </div>
                    </div>
                </div>
                {/* top sale in municipal end */}

            </div>
        </div>
    )
}

export default Dashboard    