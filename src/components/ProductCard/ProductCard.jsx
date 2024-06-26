    // import { Component } from 'react'
    // import addIcon from '../../assets/Common.svg'
    // import withRouter from '../../HOC/WithRouter';
    // import { CartConsumer } from '../../contexts/CartContext';
    // import { toKebabCase } from '../../helpers';
    // class ProductCard extends Component {
    //     constructor() {
    //         super();

    //         this.state = {
    //             isHovered: false,
    //         }

    //         this.handleHovere = this.handleHovere.bind(this);
    //         this.handleClick = this.handleClick.bind(this);
    //         this.handlAddSingleItem = this.handlAddSingleItem.bind(this);
    //     }

    //     handleHovere() {
    //         this.setState(prevState => {
    //             return {
    //                 isHovered: !prevState.isHovered
    //             }
    //         })
    //     };

    //     handleClick(e) {
    //         const { navigate } = this.props.router;
    //         navigate(`/${this.props.product.id}`);

    //     }

    //     handlAddSingleItem(e, callback) {
    //         e.stopPropagation();
    //         callback()
    //     }

    //     render() {
    //         const { product } = this.props;
    //         const { isHovered } = this.state;
    //         const kebabCaseProductName = toKebabCase(product?.name);

    //         const defaultAttributes = product?.attributes?.map(attribute => attribute?.items[0]?.value);

    //         return (
    //             <CartConsumer>
    //                 {props => {
    //                     const {addToCart} = props;
    //                     return (
    //                         <div
    //                             key={this.props.product.id}
    //                             onMouseEnter={this.handleHovere}
    //                             onMouseLeave={this.handleHovere}
    //                             onClick={this.handleClick}
    //                             className={`relative flex flex-col justify-self-center sm:justify-self-auto p-3 cursor-pointer transition-all ease-in-out duration-200 
    //                             ${this.state.isHovered && 'card-shadow'} h-[500px]`}
    //                             data-testid={`product-${kebabCaseProductName}`}
    //                         >
    //                             <div className="flex-1 overflow-hidden">
    //                                 <div className='h-full w-full relative'>
    //                                     <img
    //                                         src={product?.gallery[0]}
    //                                         alt={product?.id}
    //                                         className={`w-full h-full object-cover object-top`}
    //                                     />
    //                                     {!product?.inStock &&
    //                                         <span className='outOfStock-overlay'>out of stock</span>
    //                                     }
    //                                 </div>
    //                             </div>


    //                             <div className="mt-4 md:mt-8 pb-1 shrink-0 relative">
    //                                 <button
    //                                     type='button'
    //                                     onClick={(e) => this.handlAddSingleItem(e, ()=> addToCart(product, defaultAttributes))}
    //                                     className={`absolute -top-11 right-6 trasnition ease-in-out duration-150 cursor-pointer z-20 drop-shadow-xl
    //                                 ${isHovered ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'} 
    //                                 ${!product?.inStock && 'hidden'}
    //                                 `}
    //                                 >
    //                                     <img src={addIcon} alt="add-icon" />
    //                                 </button>

    //                                 <h3 className="text-gray-800 font-light">
    //                                     <span>
    //                                         <span aria-hidden="true" className="absolute inset-0" />
    //                                         {product?.name}
    //                                     </span>
    //                                 </h3>
    //                                 <p className="text-[15px] text-gray-900 mt-1 font-semibold">{product?.prices[0]?.amount} {product?.prices[0]?.currency?.symbol}</p>
    //                             </div>
    //                         </div>
    //                     )
    //                 }}
    //             </CartConsumer>
    //         )
    //     }
    // }

    // export default withRouter(ProductCard);


    import { Component } from 'react'
import addIcon from '../../assets/Common.svg'
import withRouter from '../../HOC/WithRouter';
import { CartConsumer } from '../../contexts/CartContext';
import { toKebabCase } from '../../helpers';

class ProductCard extends Component {
    constructor() {
        super();

        this.state = {
            isHovered: false,
            selectedAttributes: {}
        }

        this.handleHovere = this.handleHovere.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handlAddSingleItem = this.handlAddSingleItem.bind(this);
        this.handleAttributeSelect = this.handleAttributeSelect.bind(this);
    }

    handleHovere() {
        this.setState(prevState => {
            return {
                isHovered: !prevState.isHovered
            }
        })
    };

    handleClick(e) {
        const { navigate } = this.props.router;
        navigate(`/product/${this.props.product.id}`);
    }

    handlAddSingleItem(e, callback) {
        e.stopPropagation();
        callback()
    }

    handleAttributeSelect(attributeId, value) {
        this.setState(prevState => ({
            selectedAttributes: {
                ...prevState.selectedAttributes,
                [attributeId]: value
            }
        }));
    }

    render() {
        const { product } = this.props;
        const { isHovered, selectedAttributes } = this.state;
        const kebabCaseProductName = toKebabCase(product?.name);

        const defaultAttributes = product?.attributes?.reduce((item, attribute) => {
            item[attribute.id] = attribute.items[0].value;
            return item;
        }, {});

        const activeAttributes = { ...defaultAttributes, ...selectedAttributes };

        return (
            <CartConsumer>
                {props => {
                    const { addToCart } = props;
                    return (
                        <div
                            key={this.props.product.id}
                            onMouseEnter={this.handleHovere}
                            onMouseLeave={this.handleHovere}
                            onClick={this.handleClick}
                            className={`relative flex flex-col justify-self-center sm:justify-self-auto p-3 cursor-pointer transition-all ease-in-out duration-200 
                            ${this.state.isHovered && 'card-shadow'} h-[500px]`}
                            data-testid={`product-${kebabCaseProductName}`}
                        >
                            <div className="flex-1 overflow-hidden">
                                <div className='h-full w-full relative'>
                                    <img
                                        src={product?.gallery[0]}
                                        alt={product?.id}
                                        className={`w-full h-full object-cover object-top`}
                                    />
                                    {!product?.inStock &&
                                        <span className='outOfStock-overlay'>out of stock</span>
                                    }
                                </div>
                            </div>

                            <div className="mt-4 md:mt-8 pb-1 shrink-0 relative">
                                <button
                                    type='button'
                                    onClick={(e) => this.handlAddSingleItem(e, () => addToCart(product, activeAttributes))}
                                    className={`absolute -top-11 right-6 trasnition ease-in-out duration-150 cursor-pointer z-20 drop-shadow-xl
                                    ${isHovered ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'} 
                                    ${!product?.inStock && 'hidden'}
                                    `}
                                >
                                    <img src={addIcon} alt="add-icon" />
                                </button>

                                <h3 className="text-gray-800 font-light">
                                    <span>
                                        {product?.name}
                                    </span>
                                </h3>
                                <p className="text-[15px] text-gray-900 mt-1 font-semibold">{product?.prices[0]?.amount} {product?.prices[0]?.currency?.symbol}</p>
                            </div>
                        </div>
                    )
                }}
            </CartConsumer>
        )
    }
}

export default withRouter(ProductCard);
