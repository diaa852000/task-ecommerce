import { Component } from 'react'

export default class Cart extends Component {
    constructor() {
        super();

        this.state = {
            isOpenCart: false,
        };

        this.toggleCart = this.toggleCart.bind(this);
    };

    toggleCart () {
        this.setState(prevState => {
            return {
                isOpenCart: !prevState.isOpenCart
            }
        })
    };


    render() {
        return (
            <div>
                
            </div>
        )
    }
}
