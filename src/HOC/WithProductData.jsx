import React from 'react';
import { Query } from '@apollo/client/react/components';
import { getSingleProductQuery } from '../lib/query';

const withProductData = (WrappedComponent) => {
    return class extends React.Component {
        render() {
            const { id } = this.props?.router?.params;

            return (
                <Query query={getSingleProductQuery} variables={{ id }}>
                    {({ loading, error, data }) => {
                        const product = data ? data.product : null;
                        return <WrappedComponent {...this.props} product={product} />;
                    }}
                </Query>
            );
        }
    };
};

export default withProductData;
