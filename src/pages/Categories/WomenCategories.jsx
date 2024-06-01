import React, { Component } from 'react'
import { ProductCard } from '../../components';
import { gql } from '@apollo/client';
import { Query } from '@apollo/client/react/components';


const getProductsQuery = gql`
    {
        products {
            id
            name
            brand
            inStock
            description
            category
            prices {
              amount
              currency {
                label
                symbol
                __typename
              }
              __typename
            }
            gallery
            attributes { 
              id
              name
              type
              items {
                displayValue
                value
                id
                __typename
              }
              __typename
            }
            __typename
          }
    }
`;


export default class WomenCategories extends Component {
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
            ]
        }
    }

    componentDidMount() {

    }

    render() {
        return (
            <Query query={getProductsQuery}>
                {({ loading, error, data }) => {
                    if (loading) return <p>Loading...</p>;
                    if (error) return <p>Error: {error.message}</p>;
                    return (
                        <>
                            <div className='category-title'>Women</div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
                                {data?.products?.map(product => (
                                    <ProductCard product={product} key={product.id} />
                                ))}
                            </div>
                        </>
                    )
                }}
            </Query>
        )
    }
}
