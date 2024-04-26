import React, { Component } from 'react'
import ProductCard from '../../components/ProductCard/ProductCard'
import { Outlet } from 'react-router';

export default class Categories extends Component {
    render() {
        return (
            <div className="main-container content-padding">
                <Outlet />
            </div>
        )
    }
}
