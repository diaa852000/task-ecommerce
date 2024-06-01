import { Component } from 'react'
import addIcon from '../../assets/Common.svg'
import withRouter from '../../HOC/WithRouter';

class ProductCard extends Component {
    constructor() {
        super();

        this.state = {
            isHovered: false,
        }

        this.handleHovere = this.handleHovere.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handlAddSingleItem = this.handlAddSingleItem.bind(this);
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
        navigate(`/${this.props.product.id}`);

    }

    handlAddSingleItem(e) {
        e.stopPropagation();
        console.log('add to cart')
    }



    render() {
        const { product } = this.props;

        return (
            <div
                key={this.props.product.id}
                onMouseEnter={this.handleHovere}
                onMouseLeave={this.handleHovere}
                onClick={this.handleClick}
                className={`relative flex flex-col justify-self-center sm:justify-self-auto p-3 cursor-pointer transition-all ease-in-out duration-200 ${this.state.isHovered && 'card-shadow'} h-[500px]`}
            >
                <div className="flex-1 overflow-hidden">
                    <div className='h-full w-full relative'>
                        <img
                            src={product?.gallery[0]}
                            alt={product?.id}
                            className="w-full h-full object-fill object-top"
                        />
                    </div>
                </div>


                <div className="mt-4 md:mt-8 pb-1 shrink-0 relative">
                    <button
                        type='button'
                        className={`absolute -top-11 right-6 trasnition ease-in-out duration-150 cursor-pointer z-20 drop-shadow-xl
                        ${this.state.isHovered ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
                        onClick={(e) => this.handlAddSingleItem(e)}
                    >
                        <img src={addIcon} alt="add-icon" />
                    </button>

                    <h3 className="text-gray-800 font-light">
                        <span>
                            <span aria-hidden="true" className="absolute inset-0" />
                            {product?.name}
                        </span>
                    </h3>
                    <p className="text-[15px] text-gray-900 mt-1 font-semibold">{product?.prices[0]?.amount} {product?.prices[0]?.currency?.symbol}</p>
                </div>
            </div>
        )
    }
}

export default withRouter(ProductCard);