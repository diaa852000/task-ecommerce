import { Component } from 'react'
import { CartItem } from '../'
import { CartConsumer } from '../../contexts/CartContext'

export default class Cart extends Component {
    constructor(props) {
        super(props);

        this.handlePlaceOrder = this.handlePlaceOrder.bind(this);
    }

    async handlePlaceOrder(callback) {
        // e.preventDefault();

        await callback();
    }

    render() {
        // const { handlePlaceOrder } = this
        return (
            <CartConsumer>
                {props => {
                    const { totalNumber, cart, totalAmount, placeOrder } = props;
                    return (
                        <div className='fixed top-[80px] left-0 w-full h-full overflow-y-scroll z-30'>
                            <form
                                // onSubmit={(e) => handlePlaceOrder(e, placeOrder)}
                                className='w-full sm:w-[325px] z-30 bg-white absolute top-0 sm:right-[2.5%] min-[1440px]:right-[2.3%] min-[1500px]:right-[12%]
                                shadow-sm p-4 flex flex-col gap-4'
                            >
                                <div className='text-sm flex items-center gap-1 mt-2'>
                                    <p className='font-semibold capitalize'>my bag,</p>
                                    {totalNumber > 1 ? <p>{totalNumber} items</p> : <p>{totalNumber} item</p>}
                                </div>

                                {cart && cart?.length > 0 && cart.map((product, i) => (
                                    <CartItem product={product} key={i} cart={cart} />
                                ))}

                                <div className='flex flex-col flex-1 gap-6 mt-2'>
                                    <div className='flex items-center justify-between'>
                                        <p className='capitalize text-sm font-semibold'>total</p>
                                        <p className='text-sm font-semibold'>{totalAmount}</p>
                                    </div>
                                    <button
                                        type="submit"
                                        onClick={() => this.handlePlaceOrder(placeOrder)}
                                        className='bg-primary text-center text-white uppercase font-semibold text-xs rounded-sm w-full py-3 hover:bg-green-500 
                                        transition-all ease-in-out duration-200'
                                    >
                                        place order
                                    </button>
                                </div>
                            </form>
                        </div>
                    )
                }}
            </CartConsumer>
        )
    }
}
