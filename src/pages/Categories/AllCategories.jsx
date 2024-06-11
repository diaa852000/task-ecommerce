import React, { Component } from 'react'
import { ProductCard } from '../../components';
import { Query } from '@apollo/client/react/components';
import { getProductsQuery } from '../../lib/query';

class AllCategories extends Component {

    render() {
        return (
            <Query query={getProductsQuery}>
                {({ loading, error, data }) => {
                    if (loading) return <p>Loading...</p>;
                    if (error) return <p>Error: {error.message}</p>;

                    return (
                        <div className="main-container content-padding mt-8">
                            <div className='category-title'>all</div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
                                {data?.products?.map(product => (
                                    <ProductCard product={product} key={product.id} />
                                ))}
                            </div>
                        </div>
                    )
                }}
            </Query>
        )
    }
}

export default AllCategories;