import { Component, createContext } from "react";

const CartContext = createContext();

export const CartConsumer = CartContext.Consumer;

export class CartProvider extends Component {
    constructor(props) {
        super();

        this.state = {
            totalNumber: 0,
        }

        this.addToCart = this.addToCart.bind(this);
    }

    addToCart(product) {
        this.setState(prevState => ({
            totalNumber: prevState.totalNumber + 1
        }));

        console.log(product);
    }


    render() {
        const {totalNumber} = this.state;
        const {addToCart} = this;

        return (
            <CartContext.Provider value={{
                totalNumber,
                addToCart
            }}>
                {this.props.children}
            </CartContext.Provider>
        )
    }
}

export default CartContext;