import { useRouter } from 'next/router';
import React from 'react';
import ImageGallery from 'react-image-gallery';

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
        <div className='mid-container bg-base-100'>
            <div className='flex justify-center items-center mt-5'>
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
                    
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;