import React from 'react';
import img from '../../../../assets/categories/Rectangle 40 (5).png'
import { AiOutlineRight } from 'react-icons/ai';
import Image from 'next/image';

const BrandItem = () => {
    return (
        <div className='flex justify-between items-center gap-6 bg-white rounded p-2 shadow'>
            <div className='w-[30%]'>
                <Image 
                src={'https://i.ibb.co/4jdwpQn/redbull.png'} 
                height={300}
                width={100}
                alt="category" 
                className='w-full'
                />
            </div>
            <div className='w-[60%]'>
                <h1 className='font-semibold'>Woman Clothing & Fashion</h1>
            </div>
            <div className='w-10%]'>
                <AiOutlineRight className='text-primary mr-5 text-xl font-semibold'/>
            </div>
        </div>
    );
};

export default BrandItem;