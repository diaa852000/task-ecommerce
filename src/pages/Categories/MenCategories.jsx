import React, { Component } from 'react'
import { ProductCard } from '../../components';

export default class MenCategories extends Component {
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
                {
                    id: 2,
                    name: 'Basic Tee',
                    href: '#',
                    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
                    imageAlt: "Front of men's Basic Tee in black.",
                    price: '$35',
                    color: 'Black',
                },
                {
                    id: 3,
                    name: 'Basic Tee',
                    href: '#',
                    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
                    imageAlt: "Front of men's Basic Tee in black.",
                    price: '$35',
                    color: 'Black',
                },
                {
                    id: 4,
                    name: 'Basic Tee',
                    href: '#',
                    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
                    imageAlt: "Front of men's Basic Tee in black.",
                    price: '$35',
                    color: 'Black',
                },
                {
                    id: 5,
                    name: 'Basic Tee',
                    href: '#',
                    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
                    imageAlt: "Front of men's Basic Tee in black.",
                    price: '$35',
                    color: 'Black',
                },
                {
                    id: 6,
                    name: 'Basic Tee',
                    href: '#',
                    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
                    imageAlt: "Front of men's Basic Tee in black.",
                    price: '$35',
                    color: 'Black',
                },
                {
                    id: 7,
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
            <>
                <div className='category-title'>Men</div>
                <div className="grid-container justify-between">
                    {this.state.products.map(product => (
                        <ProductCard product={product} key={product.id} />
                    ))}
                </div>
            </>
        )
    }
}
