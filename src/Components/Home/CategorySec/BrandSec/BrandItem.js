import React from 'react';
import img from '../../../../assets/categories/Rectangle 40 (5).png'
import { AiOutlineRight } from 'react-icons/ai';

const BrandItem = () => {
    return (
        <div className='flex justify-between items-center gap-6 bg-white rounded p-2 shadow'>
            <div className='w-[30%]'>
                <img src={'https://i.ibb.co/4jdwpQn/redbull.png'} alt="category" className='w-full'/>
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