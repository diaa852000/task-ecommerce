import React, { Component } from 'react'
import { Outlet } from 'react-router';

export default class Categories extends Component {
    render() {
        return (
            <div className="main-container content-padding mt-8">
                <Outlet />
            </div>
        )
    }
}
