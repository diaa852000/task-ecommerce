import { Component } from 'react'
import { GoPlus } from "react-icons/go";
import { BsDash } from "react-icons/bs";

export default class Cart extends Component {

    render() {
        return (
            <div className='fixed top-[80px] left-0 w-full h-full bg-[#d3d3d7] overflow-hidden z-20'>
                <div
                    className='w-full sm:w-[325px] z-30 bg-white absolute top-0 sm:right-[2.5%] min-[1440px]:right-[2.3%] min-[1500px]:right-[12%]
                        shadow-sm rounded-sm p-4 flex flex-col gap-4'
                >
                    <div className='text-sm flex items-center gap-1 mt-2'>
                        <p className='font-semibold capitalize'>my bag,</p>
                        <p>3 items</p>
                    </div>

                    {/* cartItem component */}
                    <div className='mt-4 flex flex-1 gap-1'>
                        <div className='flex flex-col flex-1'>
                            <h3 className='font-light '>Running Short</h3>
                            <h3 className='font-medium text-sm mt-2'>$50.00</h3>
                            <div className='flex-1'>
                                <h2 className='capitalize text-xs mt-2 mb-1.5 text-gray-500'>size:</h2>
                                <div className='flex items-center justify-start gap-1.5 flex-1'>
                                    {/* //TODO => map over all sizes and add active-size class  to the chosen one*/}
                                    <div className='uppercase shadow-sm  w-6 h-6 text-xs border border-black flex items-center justify-center font-medium'>xs</div>
                                    <div className='uppercase shadow-sm  w-6 h-6 text-xs border border-black flex items-center justify-center font-medium'>s</div>
                                    <div className='uppercase shadow-sm  w-6 h-6 text-xs border border-black flex items-center justify-center font-medium'>m</div>
                                    <div className='uppercase shadow-sm  w-6 h-6 text-xs border border-black flex items-center justify-center font-medium'>l</div>
                                </div>
                            </div>
                            <div className=''>
                                <h2 className='capitalize text-xs mt-2 mb-1.5 text-gray-500'>color:</h2>
                                <div className='flex items-center justify-start gap-1.5'>
                                    {/* //TODO => map over all sizes and add active-color class to the chosen one*/}
                                    <div className='size-4 bg-green-600 shadow-sm' />
                                    <div className='size-4 bg-green-600 shadow-sm' />
                                    <div className='size-4 bg-green-600 shadow-sm' />
                                </div>
                            </div>
                        </div>

                        <div className='flex flex-1 gap-2'>
                            <div className='flex flex-col justify-between'>
                                <button
                                    type="button"
                                    className='border p-1 border-black'
                                >
                                    <GoPlus size={14} />
                                </button>

                                <div className='flex items-center justify-center fon-bold'>
                                    1
                                </div>

                                <button
                                    type="button"
                                    className='border p-1 border-black'
                                >
                                    <BsDash size={14} />
                                </button>
                            </div>
                            <div>
                                <img
                                    src="https://images-na.ssl-images-amazon.com/images/I/510VSJ9mWDL._SL1262_.jpg"
                                    alt="img"
                                    className='object-contain w-full h-full'
                                />
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col flex-1 gap-6 mt-2'>
                        <div className='flex items-center justify-between'>
                            <p className='capitalize text-sm font-semibold'>total</p>
                            <p className='text-sm font-semibold'>$200.00</p>
                        </div>
                        <button
                            type="submit"
                            className='bg-primary text-center text-white uppercase font-semibold text-xs rounded-sm w-full py-3 hover:bg-green-500 transition-all ease-in-out duration-200'
                        >
                            place order
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}
