import { Component } from 'react';
import navlinks from '../../fixtures/navlinks';
import { Link } from 'react-router-dom';
import logo from '../../assets/a-logo.png';
import cartIcon from '../../assets/cart.svg';
import { Cart } from '../';
import { CartConsumer } from '../../contexts/CartContext';
import withRouter from '../../HOC/WithRouter';

class Header extends Component {
    constructor(props) {
        super(props);

        const currentPath = props.router.location.pathname;
        this.state = {
            hoveredLinkId: null,
            isOpenCart: false,
            activeLink: this.getActiveLink(currentPath),
        };

        this.hoverNavLink = this.hoverNavLink.bind(this);
        this.toggleCart = this.toggleCart.bind(this);
        this.setActiveLink = this.setActiveLink.bind(this);
        this.clearActiveLink = this.clearActiveLink.bind(this);
    }
    componentDidMount() {
        const activeLink = localStorage.getItem('activeLink');
        if (activeLink) {
            this.setState({ activeLink });
        }
        window.addEventListener('beforeunload', this.clearActiveLink);
    }

    componentWillUnmount() {
        window.removeEventListener('beforeunload', this.clearActiveLink);
    }

    clearActiveLink() {
        localStorage.removeItem('activeLink');
    }

    componentDidUpdate(prevProps) {
        const { location } = this.props.router;
        if (prevProps.router.location.pathname !== location.pathname) {
            this.setActiveLink(location.pathname);
        }
    }

    getActiveLink(pathname) {
        const validPaths = ['/', '/clothes', '/tech'];
        if (validPaths.includes(pathname)) {
            return pathname;
        }
        return localStorage.getItem('activeLink');
    }

    setActiveLink(pathname) {
        const newActiveLink = this.getActiveLink(pathname);
        localStorage.setItem('activeLink', newActiveLink);
        this.setState({ activeLink: newActiveLink });
    }


    hoverNavLink(linkId) {
        this.setState({ hoveredLinkId: linkId });
    }

    toggleCart() {
        this.setState((prevState) => ({
            isOpenCart: !prevState.isOpenCart,
        }));
    }

    render() {
        const { isOpenCart, activeLink } = this.state;
        return (
            <CartConsumer>
                {(props) => {
                    const { totalNumber } = props;
                    return (
                        <>
                            <div className='sticky top-0 left-0 w-full h-full z-30 bg-white'>
                                <nav className='grid grid-cols-7 text-base font-medium z-30 bg-white px-4 pt-4 h-[80px] main-container'>
                                    <ul className='flex flex-row items-center gap-4 col-span-3 h-full'>
                                        {navlinks.map((navlink) => (
                                            <li
                                                key={navlink.id}
                                                className={`uppercase h-full ${this.state.hoveredLinkId === navlink.id && 'active-link'} 
                                                ${activeLink === navlink.route && 'active-link'}`}
                                                onMouseEnter={() => this.hoverNavLink(navlink.id)}
                                                onMouseLeave={() => this.hoverNavLink(null)}
                                                data-testid={activeLink === navlink.route ? 'active-category-link' : 'category-link'}
                                            >
                                                <Link
                                                    className='h-full inline-block'
                                                    to={navlink.route}
                                                    // data-testid={activeLink === navlink.route ? 'active-category-link' : 'category-link'}
                                                    data-testid='active-category-link'
                                                >
                                                    {navlink.label}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>

                                    <Link 
                                        to={'/'} 
                                        className='col-span-1 flex items-center justify-center'
                                    >
                                        <img src={logo} alt="logo" />
                                    </Link>

                                    <div className='col-span-3 flex items-center justify-self-end w-fit relative px-2'>
                                        <button
                                            type='button'
                                            onClick={this.toggleCart}
                                            data-testid='cart-btn'
                                        >
                                            <span
                                                className='absolute top-4 md:top-3.5 -right-0 bg-[#1d1f22] text-white text-[10px] size-4 outline-none
                                            rounded-full flex justify-center items-center font-bold'
                                            >
                                                {totalNumber}
                                            </span>
                                            <img src={cartIcon} alt="cartIcon" />
                                        </button>
                                    </div>
                                </nav>
                                {/* //TODO: HANDLE THE CART OVERLAY AND ITS POSITION */}
                            </div>
                            {isOpenCart && (
                                <div 
                                    className="overlay" 
                                    onClick={this.toggleCart}
                                    data-testid='cart-overlay'
                                >
                                    <Cart />
                                </div>
                            )}
                        </>
                    );
                }}
            </CartConsumer>
        );
    }
}

export default withRouter(Header);
