import { Component, createRef } from 'react'
import withRouter from '../../HOC/WithRouter';
import leftArrow from '../../assets/left-arrow.svg'
import rightArrow from '../../assets/right-arrow.svg'

class ProductDetails extends Component {
    constructor(props) {
        super(props);

        this.imgRef = createRef(null);
        this.handleChooseImg = this.handleChooseImg.bind(this);
        this.handleSwapImages = this.handleSwapImages.bind(this);
    }


    handleChooseImg(e) {
        if (this.imgRef !== null && this.imgRef !== undefined) {
            const renderedImgEle = this.imgRef.current;
            const imgSrc = e.target.getAttribute('src');
            renderedImgEle.setAttribute('src', imgSrc);
        }
    }

    handleSwapImages() {
        
    }


    render() {
        const { params } = this.props.router;
        const { id } = params;

        return (
            <div className='main-container flex flex-col lg:flex-row gap-4 lg:gap-28 mt-10'>
                {/* HERE'S THE IMAGES */}
                <div className='flex flex-col justify-center items-center lg:flex-row lg:items-start gap-10'>
                    <div className='flex lg:flex-col justify-center lg:justify-start lg:items-center gap-4 h-full'>
                        <div className='max-w-[79px] max-h-[80px]'>
                            <img
                                src="https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_2_720x.jpg?v=1612816087"
                                alt="demo1"
                                className='cursor-pointer object-cover object-center w-full h-full'
                                onClick={(e) => this.handleChooseImg(e)}
                            />
                        </div>
                        <div className='max-w-[79px] max-h-[80px]'>
                            <img
                                src="https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_1_720x.jpg?v=1612816087"
                                alt="demo"
                                className='cursor-pointer object-cover object-center w-full h-full'
                                onClick={(e) => this.handleChooseImg(e)}
                            />
                        </div>
                        <div className='max-w-[79px] max-h-[80px]'>
                            <img
                                src="https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_2_720x.jpg?v=1612816087"
                                alt="demo"
                                className='cursor-pointer object-cover object-center w-full h-full'
                                onClick={(e) => this.handleChooseImg(e)}
                            />
                        </div>
                        <div className='max-w-[79px] max-h-[80px]'>
                            <img
                                src="https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_2_720x.jpg?v=1612816087"
                                alt="demo"
                                className='cursor-pointer object-cover object-center w-full h-full'
                                onClick={(e) => this.handleChooseImg(e)}
                            />
                        </div>
                        <div className='max-w-[79px] max-h-[80px]'>
                            <img
                                src="https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_2_720x.jpg?v=1612816087"
                                alt="demo"
                                className='cursor-pointer object-cover object-center w-full h-full'
                                onClick={(e) => this.handleChooseImg(e)}
                            />
                        </div>
                    </div>
                    
                    <div className='relative lg:w-[575px] lg:h-[475px]'>
                        <button
                            type="button"
                            className='absolute top-1/2 left-4 transform -translate-y-1/2'
                        >
                            <img src={leftArrow} alt="left-arrow" />
                        </button>
                        <div className=''>
                            <img
                                src="https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_2_720x.jpg?v=1612816087"
                                alt="demo"
                                ref={this.imgRef}
                                className='object-cover object-center w-full h-full'
                            />
                        </div>
                        <button
                            type="button"
                            className='absolute top-1/2 right-4 transform -translate-y-1/2'
                        >
                            <img src={rightArrow} alt="right-arrow" />
                        </button>
                    </div>
                </div>

                {/* HERE'S THE CONTENT */}
                <div className='flex flex-col lg:flex-row flex-1 justify-start'>
                    <div className='flex flex-col flex-grow gap-6 lg:max-w-[310px] px-2'>
                        <h1 className='text-3xl font-semibold capitalize'>Running Shorts</h1>
                        <div>
                            <p className='uppercase font-bold text-lg font-roboto'>size:</p>
                            <div className='flex gap-2'>
                                <label htmlFor="xs" className='uppercase cursor-pointer border border-black w-[63px] h-[45px] flex items-center justify-center'>
                                    <input
                                        type='radio'
                                        id='xs'
                                        name='xs'
                                        className='appearance-none'
                                    />
                                    <span>xs</span>
                                </label>
                                <label htmlFor="s" className='uppercase cursor-pointer border border-black w-[63px] h-[45px] flex items-center justify-center'>
                                    <input
                                        type='radio'
                                        id='s'
                                        name='s'
                                        className='appearance-none'
                                    />
                                    <span>s</span>
                                </label>
                                <label htmlFor="m" className='uppercase cursor-pointer border border-black w-[63px] h-[45px] flex items-center justify-center'>
                                    <input
                                        type='radio'
                                        id='m'
                                        name='m'
                                        className='appearance-none'
                                    />
                                    <span>m</span>
                                </label>
                                <label htmlFor="l" className='uppercase cursor-pointer border border-black w-[63px] h-[45px] flex items-center justify-center active-size'>
                                    <input
                                        type='radio'
                                        id='l'
                                        name='l'
                                        className='appearance-none'
                                    />
                                    <span>l</span>
                                </label>
                            </div>
                        </div>

                        <div>
                            <p className='uppercase font-bold text-lg font-roboto'>color:</p>
                            <div className='flex items-center justify-start gap-1.5'>
                                {/* //TODO => map over all sizes and add active-color class to the chosen one*/}
                                <input type='radio' className='cursor-pointer size-8 shadow-sm bg-gray-600 active-color appearance-none' />
                                <input type='radio' className='cursor-pointer size-8 shadow-sm bg-green-600 appearance-none' />
                                <input type='radio' className='cursor-pointer size-8 shadow-sm bg-black/80 appearance-none' />
                            </div>
                        </div>

                        <div className=''>
                            <p className='uppercase font-roboto text-lg font-bold'>price:</p>
                            <p className='font-bold text-2xl mt-1'>$50.00</p>
                        </div>
                        <div>
                            <button
                                type="submit"
                                className='bg-primary text-center text-white uppercase font-semibold text-sm rounded-sm w-full py-4 hover:bg-green-500 
                            transition-all ease-in-out duration-200'
                            >
                                add to cart
                            </button>
                        </div>

                        <div className=' text-balance font-roboto text-base'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae in porro ipsa optio suscipit delectus nemo vel nulla, iusto quod cum provident! Sed distinctio esse, voluptate impedit temporibus id natus.
                            iusto quod cum provident! Sed distinctio esse, voluptate impedit temporibus id natus. iusto quod cum provident! Sed distinctio esse, voluptate impedit temporibus id natus.
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(ProductDetails);