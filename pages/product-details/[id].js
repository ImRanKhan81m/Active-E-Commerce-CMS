import { useRouter } from 'next/router';
import React from 'react';
import ImageGallery from 'react-image-gallery';
import { AiFillStar } from 'react-icons/ai';

const ProductDetails = () => {
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

                    <div className='flex gap-5 items-center mt-5 border-b pb-5'>
                        <div>
                            <p className='text-xs text-neutral'>SoldBy:</p>
                            <h1 className='text-sm font-semibold'>Lavish Look</h1>
                        </div>

                        <div className='flex gap-3'>
                            <button className='bg-secondary px-4 py-2 text-primary text-xs rounded border border-primary'>Message Seller</button>
                            <button className='bg-secondary px-4 py-2 text-primary text-xs rounded border border-primary'>Brand</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;