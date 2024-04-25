import { Component } from 'react'
import { GoPlus } from "react-icons/go";
import { BsDash } from "react-icons/bs";

export default class CartItem extends Component {
    render() {
        return (
            <div className='mt-4 flex flex-1 gap-1'>
                <div className='flex flex-col flex-1'>
                    <h3 className='font-light '>Running Short</h3>
                    <h3 className='font-medium text-sm mt-2'>$50.00</h3>
                    <div className='flex-1'>
                        <h2 className='capitalize text-xs mt-2 mb-1.5 text-gray-500'>size:</h2>
                        <div className='flex items-center justify-start gap-1.5 flex-1'>
                            {/* //TODO => map over all sizes and add active-size class  to the chosen one*/}
                            <div className='uppercase shadow-sm  w-6 h-6 text-xs border border-black flex items-center justify-center font-semibold'>xs</div>
                            <div className='uppercase shadow-sm  w-6 h-6 text-xs border border-black flex items-center justify-center font-semibold active-size'>s</div>
                            <div className='uppercase shadow-sm  w-6 h-6 text-xs border border-black flex items-center justify-center font-semibold'>m</div>
                            <div className='uppercase shadow-sm  w-6 h-6 text-xs border border-black flex items-center justify-center font-semibold'>l</div>
                        </div>
                    </div>
                    <div className=''>
                        <h2 className='capitalize text-xs mt-2 mb-1.5 text-gray-500'>color:</h2>
                        <div className='flex items-center justify-start gap-1.5'>
                            {/* //TODO => map over all sizes and add active-color class to the chosen one*/}
                            <div className='size-4 shadow-sm bg-gray-600 active-color' />
                            <div className='size-4 shadow-sm bg-green-600' />
                            <div className='size-4 shadow-sm bg-green-600' />
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
        )
    }
}
