import { Component } from 'react'
import withRouter from '../HOC/WithRouter';


class ProductDetails extends Component {
    render() {
        const { params } = this.props.router;
        const { id } = params;
        return (
            <div>ProductDetails {id}</div>
        );
    }
}

export default withRouter(ProductDetails);