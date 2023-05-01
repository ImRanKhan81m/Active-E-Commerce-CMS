import React from 'react';
import CategoryItem from './CategoryItem';

const CategorySec = () => {
    return (
        <div className='mt-10 sm:mb-10'>
            <div className='flex justify-between items-center mb-5'>
                <h1 className='font-bold text-xl'>Top 10 Categories</h1>
                <div className='bg-primary px-3 py-2 text-xs text-white rounded'>
                    <h1>View All Categories</h1>
                </div>
            </div>

            <div className='grid lg:grid-cols-2 gap-5'>
                <CategoryItem/>
                <CategoryItem/>
                <CategoryItem/>
                <CategoryItem/>
                <CategoryItem/>
                <CategoryItem/>
                <CategoryItem/>
                <CategoryItem/>
            </div>
        </div>
    );
};

export default CategorySec;