import { Component } from 'react'
import navlinks from '../../fixtures/navlinks'
import { Link } from 'react-router-dom'
import logo from '../../assets/a-logo.png'
import cartIcon from '../../assets/cart.svg'
import {Cart} from '../'
export default class Header extends Component {
    constructor() {
        super();

        this.state = {
            hoveredLinkId: null,
            isOpenCart: false,
        };

        this.hoverNavLink = this.hoverNavLink.bind(this);
        this.toggleCart = this.toggleCart.bind(this);
    };

    hoverNavLink(linkId) {
        this.setState({ hoveredLinkId: linkId })
    };

    toggleCart() {
        this.setState(prevState => {
            return {
                isOpenCart: !prevState.isOpenCart
            }
        })
    };

    render() {
        return (
            <div>
                <nav className='main-container grid grid-cols-7 h-[80px] text-base font-medium z-30 bg-white'>
                    <ul className='flex flex-row items-center gap-4 col-span-3'>
                        {navlinks.map(navlink => (
                            <li
                                key={navlink.id}
                                className={`uppercase ${this.state.hoveredLinkId === navlink.id && 'active-link'}`}
                                onMouseEnter={() => this.hoverNavLink(navlink.id)}
                                onMouseLeave={() => this.hoverNavLink(null)}
                                onClick={() => this.hoverNavLink(navlink.id)}
                            >
                                <Link to={navlink.route}>{navlink.label}</Link>
                            </li>
                        ))}
                    </ul>

                    <Link to={'/'} className='col-span-1 flex items-center justify-center'>
                        <img
                            src={logo}
                            alt="logo"
                        />
                    </Link>

                    <div className='col-span-3 flex items-center justify-self-end w-fit relative px-2'>
                        <button type='button' onClick={this.toggleCart}>
                            <span 
                                className='absolute top-4 md:top-3.5 -right-0 bg-[#1d1f22] text-white text-[10px] size-4 outline-none
                                rounded-full flex justify-center items-center font-bold'
                            >
                                3
                            </span>
                            <img src={cartIcon} alt="cartIcon" />
                        </button>
                    </div>
                </nav>
                {this.state.isOpenCart && <div className="overlay" onClick={this.toggleCart}></div>}

                {this.state.isOpenCart && <Cart />}
            </div>
        )
    }
};
