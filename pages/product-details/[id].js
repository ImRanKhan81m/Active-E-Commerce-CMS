import { useRouter } from 'next/router';
import React from 'react';
import ImageGallery from 'react-image-gallery';
import { AiFillStar } from 'react-icons/ai';
import { RxMinus } from 'react-icons/rx';
import { FiPlus } from 'react-icons/fi';
import { useState } from 'react';
import img from '../../src/assets/Order/refund.png'
import social from '../../src/assets/social/social.png'
import Image from 'next/image';


const ProductDetails = () => {
    const [value, setValue] = useState(1);
    const router = useRouter();

    const images = [
        {
            original: 'https://picsum.photos/id/1018/1000/600/',
            thumbnail: 'https://picsum.photos/id/1018/250/150/',
        },
        {
            original: 'https://picsum.photos/id/1015/1000/600/',
            thumbnail: 'https://picsum.photos/id/1015/250/150/',
        },
        {
            original: 'https://picsum.photos/id/1019/1000/600/',
            thumbnail: 'https://picsum.photos/id/1019/250/150/',
        },
    ];



    const handleIncreaseValue = () => {
        setValue(value + 1);
    }

    const handleDecreaseValue = () => {
        if (value > 1) {
            setValue(value - 1);
        }
    }


    return (
        <div className='mid-container mx-auto p-5 mt-5  bg-base-100 rounded '>
            <div className='flex gap-10'>
                <div className='w-[40%]'>
                    <ImageGallery
                        items={images}
                        showPlayButton={false}
                        // showFullscreenButton={false}
                        showNav={false}
                    // showBullets={true}
                    // showThumbnails={false}

                    />
                </div>
                <div className='w-[60%]'>
                    <h1 className='text-xl font-semibold '>Philips Rice Cooker 0.6L</h1>

                    <div className='flex gap-1 items-center mt-2 border-b pb-3'>
                        <div className='flex  text-neutral  text-sm'>
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                        </div>
                        <p className='text-sm text-neutral mt-[3px]'>(0 reviews)</p>
                    </div>

                    <div className='flex gap-5 items-center border-b py-5'>
                        <div>
                            <p className='text-xs text-neutral'>SoldBy:</p>
                            <h1 className='text-sm font-semibold'>Lavish Look</h1>
                        </div>

                        <div className='flex gap-3'>
                            <button className='bg-secondary px-4 py-2 text-primary text-xs rounded border border-primary'>Message Seller</button>
                            <button className='bg-secondary px-4 py-2 text-primary text-xs rounded border border-primary'>Brand</button>
                        </div>
                    </div>

                    <div className='py-5 border-b space-y-2'>
                        <div className='flex items-center'>
                            <p className='text-xs text-neutral w-32'>Price : </p>
                            <strike><h1 className='text-sm font-semibold text-neutral'>৳ 1,500</h1></strike>
                        </div>
                        <div className='flex items-center'>
                            <p className='text-xs text-neutral w-32'>Discount Price : </p>
                            <h1 className='font-bold text-primary'>৳ 1,500</h1>
                        </div>
                        <div className='flex items-center'>
                            <p className='text-xs text-neutral w-32'>Club Point : </p>
                            <h1 className='text-xs rounded font-semibold bg-secondary px-2 py-1'>325</h1>
                        </div>
                    </div>

                    <div className='border-b py-5'>
                        <div className='flex items-center'>
                            <p className='text-xs text-neutral w-32'>Quantity : </p>
                            <div className='flex items-center gap-4'>
                                <div
                                    onClick={handleDecreaseValue}
                                    className='bg-gray-300 p-1 cursor-pointer h-6 w-6 rounded-full flex justify-center items-center text-xl font-bold select-none'> <RxMinus className='text-black' /> </div>

                                <p>{value}</p>

                                <div
                                    onClick={handleIncreaseValue}
                                    className='bg-gray-300 p-1 cursor-pointer h-6 w-6 rounded-full flex justify-center items-center text-xl font-semibold select-none'> <FiPlus className='text-black' /> </div>
                            </div>
                        </div>
                    </div>

                    <div className='py-5'>
                        <div className='flex items-center'>
                            <p className='text-xs text-neutral w-32'>Total Price : </p>
                            <h1 className='font-bold text-primary'>৳ {1500 * value}</h1>
                        </div>
                    </div>

                    <div className='py-5'>
                        <div className='flex items-center gap-5'>
                           <button className='btn btn-md btn-secondary text-primary font-bold hover:btn-primary capitalize'> Add To Cart</button>
                           <button className='btn btn-md btn-primary font-bold capitalize'> Buy Now</button>
                        </div>
                    </div>

                    <div className='py-5'>
                        <div className='flex items-center gap-5 text-sm font-semibold text-primary'>
                           <h1 className='cursor-pointer select-none'> Add To Wishlist</h1>
                           <h1 className='cursor-pointer select-none'> Add To Compare</h1>
                        </div>
                    </div>

                    <div className='py-5'>
                        <div className='flex items-center'>
                            <p className='text-xs text-neutral w-32'>Price : </p>
                            <div className='flex items-center gap-2'>
                                <Image
                                src={img}
                                alt="Picture of the refund"
                                width={200}
                                height={200}
                                ></Image>

                                <h1 className='cursor-pointer text-primary text-sm font-semibold'>View Policy</h1>
                            </div>
                        </div>
                    </div>

                    <div className='py-5'>
                        <div className='flex items-center'>
                            <p className='text-xs text-neutral w-32'>Share : </p>
                                <Image
                                src={social}
                                alt="Picture of the refund"
                                width={200}
                                height={200}
                                ></Image>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;