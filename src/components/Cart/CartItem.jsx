import { Component } from 'react'
import { GoPlus } from "react-icons/go";
import { BsDash } from "react-icons/bs";

export default class CartItem extends Component {
    render() {
        const { product } = this.props;
        return (
            <div className='mt-4 flex flex-1 gap-1'>
                <div className='flex flex-col flex-1'>
                    <h3 className='font-light'>{product?.name}</h3>
                    <h3 className='font-medium text-sm mt-2'>{product?.prices[0]?.amount * product?.quantity}</h3>
                    <div className='flex-1'>
                        {product && product?.attributes?.map((attribute, i) => (
                            <div key={i}>
                                <h2 className='capitalize text-xs mt-2 mb-1.5 text-gray-500'>{attribute?.name}:</h2>
                                <div
                                    key={i}
                                    className='flex items-center justify-start gap-1.5 flex-1'
                                >
                                    {attribute?.items?.map((item, j) => {
                                        const isActive = product.selectedAttributes[attribute.id] === item.value;
                                        return (
                                            attribute?.id === "Color" 
                                            ?
                                                <div
                                                    key={j}
                                                    type='radio'
                                                    id={item?.id}
                                                    name={attribute?.id}
                                                    value={item?.value}
                                                    onChange={this.onChange}
                                                    style={{ background: item?.value }}
                                                    className={`cursor-pointer size-5 shadow-sm appearance-none border border-black/35 
                                                    ${isActive && 'active-attributes-item-color'}`}
                                                />
                                            :   <label
                                                    htmlFor={`${attribute?.id}-${item?.id}`}
                                                    key={j}
                                                    className={`uppercase cursor-pointer border border-black w-[40px] h-[35px] flex items-center justify-center
                                                ${isActive && 'active-attributes-item'}`}
                                                >
                                                    <input
                                                        type='radio'
                                                        id={`${attribute?.id}-${item?.id}`}
                                                        name={attribute?.id}
                                                        value={item?.value}
                                                        className={`appearance-none hidden`}
                                                        onChange={this.onChange}
                                                    />
                                                    <span className='font-medium text-xs'>{item?.value}</span>
                                                </label>
                                        )
                                    })}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className='flex flex-1 gap-2'>
                    <div className='flex flex-col justify-between'>
                        <button
                            type="button"
                            className='border p-1 border-black'
                        >
                            <GoPlus size={14} />
                        </button>

                        <div className='flex items-center justify-center fon-bold'>
                            {product?.quantity}
                        </div>

                        <button
                            type="button"
                            className='border p-1 border-black'
                        >
                            <BsDash size={14} />
                        </button>
                    </div>
                    <div>
                        <img
                            src={product?.gallery[0]}
                            alt="img"
                            className='object-contain w-full h-full'
                        />
                    </div>
                </div>
            </div>
        )
    }
}
