import { Component } from 'react'
import { Link } from 'react-router-dom'

export default class ProductCard extends Component {

    render() {
        return (
            <Link
                to={`/${this.props.product.id}`}
                key={this.props.product.id}
                className="group relative flex flex-col h-[444px] lg:w-[386px] hover:shadow-primaryShadow p-3 transition-all ease-in-out duration-200"
            >
                <div className="flex-1 w-full overflow-hidden lg:aspect-none">
                    <img
                        src={this.props.product.imageSrc}
                        alt={this.props.product.imageAlt}
                        className="h-full w-full  md:object-cover object-center lg:h-full lg:w-full"
                    />
                </div>
                <div className="mt-4 pb-1">
                    <div>
                        <h3 className="text-gray-700">
                            <span>
                                <span aria-hidden="true" className="absolute inset-0" />
                                {this.props.product.name}
                            </span>
                        </h3>
                    </div>
                    <p className="text-sm text-gray-900 mt-1 font-semibold">{this.props.product.price}</p>
                </div>
            </Link>
        )
    }
}
