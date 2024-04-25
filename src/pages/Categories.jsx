import React, { Component } from 'react'
import ProductCard from '../components/ProductCard/ProductCard'

export default class Categories extends Component {
    constructor() {
        super();

        this.state = {
            products: [
                {
                    id: 1,
                    name: 'Basic Tee',
                    href: '#',
                    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
                    imageAlt: "Front of men's Basic Tee in black.",
                    price: '$35',
                    color: 'Black',
                },
            ]
        }
    }


    render() {
        return (
            <div className="bg-white">
                <div className="main-container">
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2>

                    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                        <ProductCard product={this.state.products[0]} />
                    </div>
                </div>
            </div>
        )
    }
}
