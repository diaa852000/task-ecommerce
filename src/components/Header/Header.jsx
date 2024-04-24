import { Component } from 'react'
import navlinks from '../../fixtures/navlinks'
import { Link } from 'react-router-dom'
import logo from '../../assets/a-logo.png'
import cartIcon from '../../assets/cart.svg'
export default class Header extends Component {
    constructor() {
        super();

        this.state = {
            hoveredLinkId: null,
        };

        this.hoverNavLink = this.hoverNavLink.bind(this);
    };

    hoverNavLink (linkId) {
        this.setState({hoveredLinkId: linkId})
    };


    render() {
        return (
            <nav className='main-container grid grid-cols-7 h-[80px] text-base font-medium'>
                <ul className='flex flex-row items-center gap-4 col-span-3'>
                    {navlinks.map(navlink => (
                        <li
                            key={navlink.id}
                            className={`uppercase ${ this.state.hoveredLinkId === navlink.id && 'active-link'}`}
                            onMouseEnter={() => this.hoverNavLink(navlink.id)}
                            onMouseLeave={() => this.hoverNavLink(null)}
                            onClick={()=> this.hoverNavLink(navlink.id)}
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

                <div className='col-span-3 flex items-center justify-self-end w-fit'>
                    <button type='button'>
                        <img src={cartIcon} alt="cartIcon" />
                    </button>
                </div>

            </nav>
        )
    }
};
