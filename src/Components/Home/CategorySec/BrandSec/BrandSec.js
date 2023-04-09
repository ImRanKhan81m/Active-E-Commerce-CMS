import React from 'react';
import CategoryItem from '../CategorySec/CategoryItem';
import BrandItem from './BrandItem';

const BrandSec = () => {
    return (
        <div className='mt-10 '>
            <div className='flex justify-between items-center mb-5'>
                <h1 className='font-bold text-xl'>Top 10 Brands</h1>
                <div className='bg-primary px-3 py-2 text-xs text-white rounded'>
                    <h1>View All Brands</h1>
                </div>
            </div>

            <div className='grid lg:grid-cols-2 gap-5'>
                <BrandItem/>
                <BrandItem/>
                <BrandItem/>
                <BrandItem/>
                <BrandItem/>
                <BrandItem/>
                <BrandItem/>
                <BrandItem/>
            </div>
        </div>
    );
};

export default BrandSec;