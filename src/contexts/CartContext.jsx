import { Component, createContext } from "react";
import {placeOrderMutation} from '../lib/query'
import apolloClient from "../lib/apollo";

const CartContext = createContext();

export const CartConsumer = CartContext.Consumer;

export class CartProvider extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cart: [],
            totalNumber: 0,
            totalAmount: 0,
        }

        this.addToCart = this.addToCart.bind(this);
        this.placeOrder = this.placeOrder.bind(this);
        this.increaseQuantity = this.increaseQuantity.bind(this)
        this.decreaseQuantity = this.decreaseQuantity.bind(this);
    }


    addToCart(product, selectedAttributes) {
        const { cart } = this.state;
    
        const uniqueId = `${product?.id}-${Object.values(selectedAttributes).join('-')}`;
        
        const cartItem = cart?.find(item => item.uniqueId === uniqueId);
    
        if (cartItem) {
            const updatedCart = cart.map(item => 
                item.uniqueId === uniqueId ? { ...item, quantity: item.quantity + 1 } : item
            );
            this.setState(prevState => ({
                cart: updatedCart,
                totalNumber: prevState.totalNumber + 1
            }));
        } else {
            const newCartItem = {
                ...product,
                uniqueId,
                selectedAttributes,
                quantity: 1
            };
            this.setState(prevState => ({
                cart: [...prevState.cart, newCartItem],
                totalNumber: prevState.totalNumber + 1
            }));
        }
    }
    
    async placeOrder() {
        const {totalAmount} = this.state;
        try {
            const { data } = await apolloClient.mutate({
                mutation: placeOrderMutation,
                variables: {totalAmount: +totalAmount},
            });
            this.setState({ cart: [], totalNumber: 0 }); 

        } catch (error) {
            console.error("Error placing order:", error.message);
        }
    }

    increaseQuantity(uniqueId) {
        const { cart } = this.state;
        const updatedCart = cart.map(item =>
            item.uniqueId === uniqueId ? { ...item, quantity: item.quantity + 1 } : item
        );
        this.setState(prevState => ({
            cart: updatedCart,
            totalNumber: prevState.totalNumber + 1
        }));
    }

    decreaseQuantity(uniqueId) {
        const { cart } = this.state;
        const cartItem = cart.find(item => item.uniqueId === uniqueId);

        if (cartItem && cartItem.quantity > 1) {
            const updatedCart = cart.map(item =>
                item.uniqueId === uniqueId ? { ...item, quantity: item.quantity - 1 } : item
            );
            this.setState(prevState => ({
                cart: updatedCart,
                totalNumber: prevState.totalNumber - 1
            }));
        } else if (cartItem && cartItem.quantity === 1) {
            const updatedCart = cart.filter(item => item.uniqueId !== uniqueId);
            this.setState(prevState => ({
                cart: updatedCart,
                totalNumber: prevState.totalNumber - 1
            }));
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.cart !== prevState.cart) {
            const totalAmount = this.state.cart.reduce((sum, item) => sum + item.prices[0]?.amount * item.quantity, 0);
            const fixedTotlaAmount = totalAmount.toFixed(2);

            this.setState({ totalAmount: fixedTotlaAmount });
        }
    }

    render() {
        const {totalNumber, cart, totalAmount} = this.state;
        const {addToCart, placeOrder, increaseQuantity, decreaseQuantity} = this;

        return (
            <CartContext.Provider value={{
                totalNumber,
                totalAmount,
                cart,
                placeOrder,
                addToCart,
                increaseQuantity,
                decreaseQuantity
            }}>
                {this.props.children}
            </CartContext.Provider>
        )
    }
}

export default CartContext;