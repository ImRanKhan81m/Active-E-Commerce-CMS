import React from 'react';
import img from '../../assets/product/Rectangle 73.png'
import Image from 'next/image';
import { AiFillStar } from 'react-icons/ai';

const TopSellingProduct = () => {
    return (
        <div className='flex gap-5 items-center p-3 border-b'>
            <div className='w-[50%]'>
                <Image
                    src={img}
                    alt="Picture of the product"
                    width={150}
                    height={150}
                />
            </div>

            <div className='w-[50%] space-y-3'>
                <h1 className=' text-neutral'>Philipps Airfryer XXL</h1>
                <div className='flex  text-neutral  text-sm'>
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                </div>

                <h1 className='font-bold text-primary'>$54.750</h1>
            </div>
        </div>
    );
};

export default TopSellingProduct;