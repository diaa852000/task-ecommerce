import { Component, createRef } from 'react'
import withRouter from '../../HOC/WithRouter';
import leftArrow from '../../assets/left-arrow.svg'
import rightArrow from '../../assets/right-arrow.svg'
import withProductData from '../../HOC/WithProductData';

class ProductDetails extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentImg: '',
            currentImgIndex: 0,
            productAttributes: [],
            formData: {},
            formMsg: "",
        }

        this.imgRef = createRef(null);
        this.onChange = this.onChange.bind(this);
        this.handleChooseImg = this.handleChooseImg.bind(this);
        this.handleSwapImages = this.handleSwapImages.bind(this);
        this.handleOnSubmit = this.handleOnSubmit.bind(this);
        this.checkFormValidation = this.checkFormValidation.bind(this);
    }

    onChange(e) {
        this.setState((prevState) => ({
            formData: {
                ...prevState.formData,
                [e.target.name]: e.target.value
            }
        }));
    }

    checkFormValidation() {
        const { productAttributes, formData } = this.state;

        const attributesFormData = Object.keys(formData);

        const isValid = productAttributes.every(attribute => attributesFormData.includes(attribute));

        return isValid;
    }

    handleOnSubmit(e) {
        const { formData, formMsg } = this.state;
        const validMsg = "Successfully added to cart!";
        const inValidMsg = "Unsuccessfully added to cart! Please choose all attributes";

        e.preventDefault();

        const isValid = this.checkFormValidation();
        this.setState({formMsg: isValid? validMsg : inValidMsg});

        if(!isValid) return;

        // add to cart logic here.


        return formMsg;
    }

    handleChooseImg(e) {
        const { product } = this.props;
        if (product && product.gallery) {
            const imgSrc = e.target.getAttribute('src');
            const currentImgIndex = product.gallery.indexOf(imgSrc);
            this.setState({ currentImg: imgSrc, currentImgIndex });
        }
    }

    handleSwapImages(direction) {
        const { product } = this.props;
        if (!product || !product.gallery || product.gallery.length === 0) return;

        const { currentImgIndex } = this.state;
        let nextIndex;

        if (direction === 'right') {
            nextIndex = (currentImgIndex + 1) % product.gallery.length;
        } else {
            nextIndex = (currentImgIndex - 1 + product.gallery.length) % product.gallery.length;
        }

        const nextImg = product.gallery[nextIndex];
        this.setState({ currentImg: nextImg, currentImgIndex: nextIndex });
    }

    componentDidMount() {
        const { product } = this.props;
        const { productAttributes } = this.state;

        if (product && product?.gallery && product?.gallery.length > 0) {
            this.setState({ currentImg: product?.gallery[0], currentImgIndex: 0 });
        }
    }

    componentDidUpdate(prevProps) {
        const { product } = this.props;
        const { formData, productAttributes } = this.state;

        if (product && product !== prevProps.product && product.gallery && product.gallery.length > 0) {
            this.setState({ currentImg: product.gallery[0], currentImgIndex: 0 });
        }

        const newAttributes = product?.attributes?.map(attribute => attribute.id) || [];
        if (JSON.stringify(productAttributes) !== JSON.stringify(newAttributes)) {
            this.setState({ productAttributes: newAttributes });
        }
    }

    render() {
        const { product } = this.props;
        const { currentImgIndex, formData, formMsg } = this.state;

        return (
            <div className='main-container flex flex-col lg:flex-row gap-4 lg:gap-28 mt-10 sm:min-h-dvh xl:min-h-0'>
                <div className='flex flex-col justify-center items-center lg:flex-row lg:items-start gap-10'>
                    <div className='h-[110px] w-full text-center lg:w-auto lg:flex lg:flex-col justify-center lg:justify-start lg:items-center gap-4 
                        lg:h-full overflow-x-scroll sm:overflow-x-hidden whitespace-nowrap custom-scrollbar-PDP'>
                        {product && product?.gallery?.map((image, i) => (
                            <div className='max-w-[79px] max-h-[80px] h-full w-full inline-block mx-2 mt-2' key={i}>
                                <img
                                    src={image}
                                    alt="demo1"
                                    className='cursor-pointer object-cover object-top w-full h-full'
                                    onClick={(e) => this.handleChooseImg(e)}
                                />
                            </div>
                        ))}
                    </div>

                    <div className='relative w-full lg:w-[500px] xl:w-[675px] overflow-hidden'>
                        <button
                            type="button"
                            className='absolute top-1/2 left-4 transform -translate-y-1/2'
                            onClick={() => this.handleSwapImages('left')}
                        >
                            <img src={leftArrow} alt="left-arrow" />
                        </button>
                        <div className='w-full sm:w-2/3 mx-auto lg:w-auto aspect-square'>
                            <img
                                src={product?.gallery[currentImgIndex]}
                                alt={product?.id}
                                ref={this.imgRef}
                                className='object-cover object-top h-full w-full'
                            />
                        </div>
                        <button
                            type="button"
                            className='absolute top-1/2 right-4 transform -translate-y-1/2'
                            onClick={() => this.handleSwapImages('right')}
                        >
                            <img src={rightArrow} alt="right-arrow" />
                        </button>
                    </div>
                </div>

                <form
                    onSubmit={(e) => this.handleOnSubmit(e)}
                    className='flex flex-col lg:flex-row flex-1 justify-start mt-8 lg:mt-0'
                >
                    <div className='flex flex-col flex-grow gap-6 px-2 w-full'>
                        <h1 className='text-3xl font-semibold capitalize'>{product?.name}</h1>
                        <div className='flex flex-col gap-4'>
                            {product && product?.attributes?.map((attribute, i) => (
                                <div key={i}>
                                    <p className='uppercase font-bold text-lg font-roboto'>{attribute.name}</p>
                                    <div className='flex items-center justify-start gap-1.5'>
                                        {attribute?.items?.map((item, j) => (
                                            attribute?.id === "Color" ?
                                                <input
                                                    key={j}
                                                    type='radio'
                                                    id={item?.id}
                                                    name={attribute?.id}
                                                    value={item?.value}
                                                    onChange={this.onChange}
                                                    style={{ background: item?.value }}
                                                    className={`cursor-pointer size-8 shadow-sm appearance-none border border-black/35 
                                                    ${formData[attribute?.id] === item?.value && 'active-attributes-item-color'}`}
                                                />
                                                : <label
                                                    htmlFor={`${attribute?.id}-${item?.id}`}
                                                    key={j}
                                                    className={`uppercase cursor-pointer border border-black w-[70px] h-[45px] flex items-center justify-center 
                                                    ${formData[attribute?.id] === item?.value && 'active-attributes-item'}`}
                                                >
                                                    <input
                                                        type='radio'
                                                        id={`${attribute?.id}-${item?.id}`}
                                                        name={attribute?.id}
                                                        value={item?.value}
                                                        className={`appearance-none hidden`}
                                                        onChange={this.onChange}
                                                    />
                                                    <span className='font-medium text-base'>{item?.value}</span>
                                                </label>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div>
                            <p className='uppercase font-roboto text-lg font-bold'>price:</p>
                            <div className='font-bold text-2xl mt-1 flex items-center justify-start'>
                                <p>{product?.prices[0]?.currency?.symbol}</p>
                                <p>{product?.prices[0]?.amount}</p>
                            </div>
                        </div>
                        <div>
                            <button
                                type="submit"
                                className='bg-primary text-center text-white uppercase font-semibold text-sm rounded-sm w-full py-4 
                                hover:bg-green-500 transition-all ease-in-out duration-200 lg:max-w-[320px]'
                                disabled={!product?.inStock}
                            >
                                add to cart
                            </button>
                            {formMsg.trim().length > 0 && <p className='text-sm capitalize mt-2'>{formMsg}</p>}
                        </div>
                        <div className='text-balance font-roboto text-base' dangerouslySetInnerHTML={{ __html: product?.description }} />
                    </div>
                </form>
            </div>
        );
    }
}


export default withRouter(withProductData(ProductDetails)); 