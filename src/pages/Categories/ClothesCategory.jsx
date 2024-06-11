import React, { Component } from 'react'
import { ProductCard } from '../../components';
import withCategory from '../../HOC/withCategory';

class ClothesCategory extends Component {
    constructor() {
        super();

        this.state = {
        }
    }

    render() {
        const {products, category} = this.props;
        return (
            <div className="main-container content-padding mt-8">
                <div className='category-title'>{category?.name}</div>
                <div className="grid-container justify-between">
                    {products?.map(product => (
                        <ProductCard product={product} key={product.id} />
                    ))}
                </div>
            </div>
        )
    }
}

export default withCategory(ClothesCategory, 'clothes');