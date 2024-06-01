import { Component, createRef } from 'react'
import withRouter from '../../HOC/WithRouter';
import leftArrow from '../../assets/left-arrow.svg'
import rightArrow from '../../assets/right-arrow.svg'
import { Query } from '@apollo/client/react/components';
import { getSingleProductQuery } from '../../lib/query';

class ProductDetails extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentImg: ''
        }

        this.imgRef = createRef(null);
        this.handleChooseImg = this.handleChooseImg.bind(this);
        this.handleSwapImages = this.handleSwapImages.bind(this);
    }


    handleChooseImg(e) {
        if (this.imgRef !== null && this.imgRef !== undefined) {
            const renderedImgEle = this.imgRef.current;
            const imgSrc = e.target.getAttribute('src');
            this.setState({ currentImg: imgSrc });
            renderedImgEle.setAttribute('src', imgSrc);
        }
    }

    handleSwapImages() {

    }

    componentDidUpdate() {

    }


    render() {
        const { params } = this.props.router;
        const { id } = params;

        return (
            <Query query={getSingleProductQuery} variables={{ id: id }}>
                {({ loading, error, data }) => {
                    if (loading) return <p>Loading...</p>;
                    if (error) return <p>Error: {error.message}</p>;

                    const product = data?.product;
                    return (

                        <div className='main-container flex flex-col lg:flex-row gap-4 lg:gap-28 mt-10'>
                            {/* HERE'S THE IMAGES */}
                            <div className='flex flex-col justify-center items-center lg:flex-row lg:items-start gap-10'>
                                <div className='h-[110px] lg:flex lg:flex-col justify-center lg:justify-start lg:items-center gap-4 lg:h-full overflow-x-scroll sm:overflow-x-auto whitespace-nowrap custom-scrollbar-PDP'>
                                    {product && product?.gallery?.map((image, i) => (
                                        <div className='max-w-[79px] max-h-[80px] h-full w-full inline-block mx-2 mt-2' key={i}>
                                            <img
                                                src={image}
                                                alt="demo1"
                                                className='cursor-pointer object-cover object-center w-full h-full'
                                                onClick={(e) => this.handleChooseImg(e)}
                                            />
                                        </div>
                                    ))}
                                </div>

                                <div className='relative w-full sm:w-[500px] xl:w-[675px] overflow-hidden'>
                                    <button
                                        type="button"
                                        className='absolute top-1/2 left-4 transform -translate-y-1/2'
                                    >
                                        <img src={leftArrow} alt="left-arrow" />
                                    </button>
                                    <div className='w-full aspect-square'>
                                        <img
                                            src={product?.gallery[0]}
                                            alt={product?.id}
                                            ref={this.imgRef}
                                            className='object-fill object-top w-full h-full'
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
                            <div className='flex flex-col lg:flex-row flex-1 justify-start mt-8 lg:mt-0'>
                                <div className='flex flex-col flex-grow gap-6 lg:max-w-[320px] px-2'>
                                    <h1 className='text-3xl font-semibold capitalize'>{product?.name}</h1>
                                    <div className='flex flex-col gap-4'>
                                        {product && product?.attributes?.map((attribute, i) => (
                                            <div key={i}>
                                                <p className='uppercase font-bold text-lg font-roboto'>{attribute.name}</p>
                                                <div className='flex items-center justify-start gap-1.5'>
                                                    {attribute?.items?.map((item, i) => {
                                                        if(attribute.id === "Color"){
                                                            // console.log('first')
                                                        }

                                                        // TODO: create custom component for each attribute 
                                                        return (
                                                            <input 
                                                            key={i}
                                                            type='radio' 
                                                            className={`cursor-pointer size-8 shadow-sm appearance-none border border-black/35`} 
                                                            style={{background:attribute?.id === 'Color' && item?.value}}
                                                            />
                                                    )})}
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    <div className=''>
                                        <p className='uppercase font-roboto text-lg font-bold'>price:</p>
                                        <div className='font-bold text-2xl mt-1 flex items-center justify-start'>
                                            <p>{product?.prices[0]?.currency?.symbol}</p>
                                            <p>{product?.prices[0]?.amount}</p>
                                        </div>
                                    </div>
                                    <div>
                                        <button
                                            type="submit"
                                            className='bg-primary text-center text-white uppercase font-semibold text-sm rounded-sm w-full py-4 hover:bg-green-500 transition-all ease-in-out duration-200'
                                        >
                                            add to cart
                                        </button>
                                    </div>
                                    <div className='text-balance font-roboto text-base' dangerouslySetInnerHTML={{ __html: product?.description }} />

                                </div>
                            </div>
                        </div>
                    )
                }}
            </Query>
        );
    }
}

export default withRouter(ProductDetails);