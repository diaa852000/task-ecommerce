import { Component } from 'react'
import { CartItem } from '../'
import { CartConsumer } from '../../contexts/CartContext'

export default class Cart extends Component {
    constructor(props) {
        super(props);

        this.handlePlaceOrder = this.handlePlaceOrder.bind(this);
    }

    async handlePlaceOrder(callback) {
        await callback();
    }

    render() {
        return (
            <CartConsumer>
                {props => {
                    const { totalNumber, cart, totalAmount, placeOrder, decreaseQuantity, increaseQuantity } = props;
                    return (
                        <div
                            onClick={e => e.stopPropagation()}
                            className={`absolute top-[57px] right-0 md:right-8 w-full md:w-[400px] z-30  bg-white p-2 
                                ${cart?.length > 3 && 'max-h-[800px] h-full'} flex flex-col`}>
                            <div className='flex flex-col overflow-y-auto'>
                                <div className='text-sm flex items-start gap-1 mt-2'>
                                    <p className='font-semibold capitalize'>my bag,</p>
                                    {totalNumber > 1 ? <p>{totalNumber} items</p> : <p>{totalNumber} item</p>}
                                </div>

                                <div className='flex flex-col gap-1'>
                                    {cart && cart?.length > 0 && cart.map((product, i) => (
                                        <CartItem
                                            product={product}
                                            key={i}
                                            cart={cart}
                                            decreaseQuantity={decreaseQuantity}
                                            increaseQuantity={increaseQuantity}
                                        />
                                    ))}
                                </div>
                            </div>
                            <div className='flex flex-col flex-1 gap-6 mt-2'>
                                <div className='flex items-center justify-between'>
                                    <p className='capitalize text-sm font-semibold'>total</p>
                                    <p className='text-sm font-semibold'>{totalAmount}</p>
                                </div>
                                <button
                                    type="submit"
                                    onClick={() => this.handlePlaceOrder(placeOrder)}
                                    disabled={cart?.length > 0 ? false : true}
                                    className={`text-center text-white uppercase font-semibold text-xs rounded-sm w-full py-3 
                                        transition-all ease-in-out duration-200 ${cart?.length > 0 ? 'bg-primary hover:bg-green-500' : 'bg-gray-300'}`}
                                >
                                    place order
                                </button>
                            </div>
                        </div>
                    )
                }}
            </CartConsumer>
        )
    }
}
