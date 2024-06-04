import React from 'react';
import { Query } from '@apollo/client/react/components';
import { mainQuery } from '../lib/query';

const withCategory = (WrappedComponent, categoryId) => {
    return class extends React.Component {
        render() {
            return (
                <Query query={mainQuery}>
                    {({ loading, error, data }) => {
                        if (loading) return <p>Loading...</p>;
                        if (error) return <p>Error: {error.message}</p>;

                        const categories = data ? data?.categories : [];
                        const category = categories && categories?.find(cate => cate.id === categoryId);
                        const products =  data?.products?.filter(product => product?.category === category?.id);
                        
                        return <WrappedComponent 
                            {...this.props} 
                            products={products} 
                            category={category}
                        />;
                    }}
                </Query>
            );
        }
    };
};

export default withCategory;
