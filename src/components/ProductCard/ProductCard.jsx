import { Component } from 'react'

export default class ProductCard extends Component {
    render() {
        return (
            <div key={this.props.product.id} className="group relative lg:h-[444px]">
                <div className="w-full overflow-hidden bg-gray-200 lg:aspect-none group-hover:opacity-75 transition-all ease-in-out duration-200">
                    <img
                        src={this.props.product.imageSrc}
                        alt={this.props.product.imageAlt}
                        className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                    />
                </div>
                <div className="mt-4">
                    <div>
                        <h3 className="text-sm text-gray-700">
                            <a href={this.props.product.href}>
                                <span aria-hidden="true" className="absolute inset-0" />
                                {this.props.product.name}
                            </a>
                        </h3>
                    </div>
                    <p className="text-sm text-gray-900 mt-1 font-semibold">{this.props.product.price}</p>
                </div>
            </div>
        )
    }
}
