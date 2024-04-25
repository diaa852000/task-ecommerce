import { Component } from 'react'
import { CartItem } from '../'

export default class Cart extends Component {

    render() {
        return (
            <div className='fixed top-[80px] left-0 w-full h-full overflow-hidden z-30'>
                <div className='w-full sm:w-[325px] z-30 bg-white absolute top-0 sm:right-[2.5%] min-[1440px]:right-[2.3%] min-[1500px]:right-[12%]
                    shadow-sm p-4 flex flex-col gap-4'
                >
                    <div className='text-sm flex items-center gap-1 mt-2'>
                        <p className='font-semibold capitalize'>my bag,</p>
                        <p>3 items</p>
                    </div>

                    {/* //TODO: pass item/product to the cartItem as a props. */}
                    <CartItem />

                    <div className='flex flex-col flex-1 gap-6 mt-2'>
                        <div className='flex items-center justify-between'>
                            <p className='capitalize text-sm font-semibold'>total</p>
                            <p className='text-sm font-semibold'>$200.00</p>
                        </div>
                        <button
                            type="submit"
                            className='bg-primary text-center text-white uppercase font-semibold text-xs rounded-sm w-full py-3 hover:bg-green-500 
                            transition-all ease-in-out duration-200'
                        >
                            place order
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}
