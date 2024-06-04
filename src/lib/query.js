import { gql } from '@apollo/client';

export const getProductsQuery = gql`
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

export const getSingleProductQuery = gql`
query GetSingleProduct($id: String!) {
    product(id: $id) {
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


export const mainQuery = gql`
    {
        categories {
            id
            name
            __typename
        }

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
`