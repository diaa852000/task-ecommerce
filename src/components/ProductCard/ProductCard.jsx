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
        const {navigate} = this.props.router;
        navigate(`/${this.props.product.id}`);

    }
    
    handlAddSingleItem(e) {
        e.stopPropagation();
        console.log('add to cart')
    }
    

    render() {
        return (
            <div
                key={this.props.product.id}
                className={`relative flex flex-col p-3 cursor-pointer transition-all ease-in-out duration-200 ${this.state.isHovered && 'shadow-primaryShadow'}`}
                onMouseEnter={this.handleHovere}
                onMouseLeave={this.handleHovere}
                onClick={this.handleClick}
            >
                <div className="flex-1 relative ">
                    <div className='w-full h-full'>
                        <img
                            src={this.props.product.imageSrc}
                            alt={this.props.product.imageAlt}
                            className="h-full w-full object-cover object-center"
                        />
                    </div>
                    <button 
                        type='button' 
                        className={`absolute -bottom-6 right-6 trasnition ease-in-out duration-150 cursor-pointer z-20 drop-shadow-xl
                        ${this.state.isHovered ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
                        onClick={(e) => this.handlAddSingleItem(e)}
                    >
                        <img src={addIcon} alt="add-icon" />
                    </button>
                </div>
                <div className="mt-4 pb-1">
                    <h3 className="text-gray-700">
                        <span>
                            <span aria-hidden="true" className="absolute inset-0" />
                            {this.props.product.name}
                        </span>
                    </h3>
                    <p className="text-sm text-gray-900 mt-1 font-semibold">{this.props.product.price}</p>
                </div>
            </div>
        )
    }
}

export default withRouter(ProductCard);