import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';
import { AiFillStar } from 'react-icons/ai';

const ProductCard = () => {
    const router = useRouter();

    return (
        <div className='bg-white border  rounded'>
            <div
                onClick={() => router.push('/product-details/1')}
                className='w-full h-44 p-2 cursor-pointer'>
                <Image
                    src='https://i.ibb.co/9pWFTMg/Rectangle-73.png'
                    width={100}
                    height={100}
                    alt='banner'
                    className='w-full max-h-full'
                />
            </div>
            <div className='mt-3'>
                <span className='text-sm px-3 py-1 bg-accent text-white  font-semibold' >Wholesale</span>

                <div className='mt-2 flex gap-3 px-2'>
                    <strike className='text-neutral'><h1>$150.000</h1></strike>
                    <h1 className='text-primary font-bold'>$120.000</h1>
                </div>
                <div className='px-3 py-2 flex text-sm'>
                    <AiFillStar className='text-warning' />
                    <AiFillStar className='text-warning' />
                    <AiFillStar className='text-warning' />
                    <AiFillStar className='text-warning' />
                    <AiFillStar className='text-warning' />
                </div>

                <h1
                    onClick={() => router.push('/product-details/1')}
                    className='px-3 text-sm cursor-pointer hover:text-primary duration-200 '>Calvin Klein Women's Scuba Sleeveless Princess...</h1>

                <div className='bg-secondary flex justify-between px-2 py-1 rounded mx-3 mt-2 mb-5'>
                    <h1>Club Point:</h1>
                    <h1 className='font-bold'>750</h1>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;