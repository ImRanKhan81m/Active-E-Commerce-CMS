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
import TopSellingProduct from '../../src/Shared/Card/TopSellingProduct';
import ProductCard from '../../src/Shared/Card/ProductCard';
import image from '../../src/assets/product/image.png'


const ProductDetails = () => {
    const [value, setValue] = useState(1);
    const router = useRouter();
    const [showDescription, setShowDescription] = useState(true);
    const [showVideo, setShowVideo] = useState(false);
    const [showReview, setShowReview] = useState(false);

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

    const handleDescription = () => {
        setShowDescription(true);
        setShowVideo(false);
        setShowReview(false);
    }

    const handleVideo = () => {
        setShowDescription(false);
        setShowVideo(true);
        setShowReview(false);
    }

    const handleReview = () => {
        setShowDescription(false);
        setShowVideo(false);
        setShowReview(true);
    }


    return (
        <>
            <div className='mid-container mx-auto px-5 mt-5  '>
                <div className='p-5 bg-base-100 rounded '>
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

                            <div className='py-3'>
                                <div className='flex items-center gap-5'>
                                    <button className='btn btn-md btn-secondary text-primary font-bold hover:btn-primary capitalize'> Add To Cart</button>
                                    <button className='btn btn-md btn-primary font-bold capitalize'> Buy Now</button>
                                </div>
                            </div>

                            <div className='py-3'>
                                <div className='flex items-center gap-5 text-sm font-semibold text-primary'>
                                    <h1 className='cursor-pointer select-none'> Add To Wishlist</h1>
                                    <h1 className='cursor-pointer select-none'> Add To Compare</h1>
                                </div>
                            </div>

                            <div className='py-3'>
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

                            <div className='py-3'>
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
            </div>



            <div className='mid-container mx-auto px-5 mt-5'>
                <div className='flex gap-5'>
                    <div className='w-[30%]'>
                        <div className='bg-base-100 px-3 pt-3 pb-3 rounded'>
                            <p className='border-b text-xs text-neutral pb-1'>Sold By</p>
                            <h1 className='text-sm font-bold my-1'>Lavish Look</h1>
                            <p className='text-xs text-neutral'>2574 Lincoln Street Pleasantville, NJ 08232</p>

                            <div className='border m-5 p-3 text-center'>
                                <div className='flex  text-neutral justify-center  text-sm'>
                                    <AiFillStar />
                                    <AiFillStar />
                                    <AiFillStar />
                                    <AiFillStar />
                                    <AiFillStar />
                                </div>
                                <p className='text-sm text-neutral mt-[3px]'>(0 customer reviews)</p>
                            </div>

                            <div className='bg-secondary flex justify-center items-center p-2 rounded text-primary cursor-pointer font-semibold'>
                                <h1>Visit Store</h1>
                            </div>
                        </div>

                        <div className='bg-base-100 mt-3 p-1'>
                            <div className='border py-2 pl-3 rounded flex items-center '>
                                <p className='text-sm font-bold'>Top Selling Products</p>
                            </div>

                            <div className=''>
                                <TopSellingProduct />
                                <TopSellingProduct />
                                <TopSellingProduct />
                                <TopSellingProduct />
                                <TopSellingProduct />
                            </div>
                        </div>
                    </div>
                    <div className='w-[70%]'>
                        <div className='bg-base-100 rounded'>
                            <div className='flex gap-8 border-b p-3'>
                                <h1
                                    onClick={handleDescription}
                                    className={`cursor-pointer ${showDescription && 'border-b-2  border-primary'} pb-1 font-semibold`}>Description</h1>
                                <h1
                                    onClick={handleVideo}
                                    className={`cursor-pointer ${showVideo && 'border-b-2  border-primary'} pb-1 font-semibold`}>Video </h1>
                                <h1
                                    onClick={handleReview}
                                    className={`cursor-pointer ${showReview && 'border-b-2  border-primary'} pb-1 font-semibold`}>Review</h1>
                            </div>

                            {
                                showDescription && !showVideo && !showReview && (
                                    <div className='p-4 space-y-3'>
                                        <div>
                                            <h1 className='font-semibold text-sm'>Detachable power cord for convenient storage</h1>
                                            <p className='text-sm text-neutral'>Yes</p>
                                        </div>
                                        <div>
                                            <h1 className='font-semibold text-sm'>Dish washer safe inner pot</h1>
                                            <p className='text-sm text-neutral'>Yes</p>
                                        </div>
                                        <div>
                                            <h1 className='font-semibold text-sm'>Easy-to-clean non stick inner pot</h1>
                                            <p className='text-sm text-neutral'>Yes</p>
                                        </div>
                                        <div>
                                            <h1 className='font-semibold text-sm'>Accessories</h1>
                                            <p className='text-sm text-neutral'>Yes</p>
                                        </div>
                                    </div>
                                )
                            }
                            {
                                showVideo && !showDescription && !showReview && (
                                    <Image
                                        src={image}
                                        alt="Picture of the video"
                                        width={600}
                                        height={600}
                                        className='mx-auto py-5'
                                    />
                                )
                            }
                            {
                                showReview && !showDescription && !showVideo && (
                                    <h1 className='px-10 py-20 text-sm font-semibold text-center'>There have been no reviews for this product yet.</h1>)
                            }
                        </div>

                        <div className='bg-base-100 rounded mt-3'>
                            <h1 className='border-b p-3 font-semibold'>Related Products</h1>

                            <div className='grid lg:grid-cols-4 md:grid-cols-3 gap-3 p-3'>
                                <ProductCard />
                                <ProductCard />
                                <ProductCard />
                                <ProductCard />
                            </div>
                        </div>

                        <div className='bg-base-100 rounded mt-3'>
                            <h1 className='border-b p-3 font-semibold'>Product Queries (0)</h1>
                            <div className='p-3'>
                                <textarea className='h-24 border w-full focus:outline-none p-3 mb-5' placeholder='Write your question here...'></textarea>

                                <span className='bg-primary text-white px-4 py-2 text-sm cursor-pointer rounded '>
                                    Submit
                                </span>

                                <h1 className='font-semibold mt-5 border-b pb-2'>Other Questions</h1>
                                <p className='text-xs text-neutral pb-5 mt-2'>No none asked to seller yet</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductDetails;