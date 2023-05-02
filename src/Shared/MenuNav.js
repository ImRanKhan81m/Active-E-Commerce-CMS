import React from 'react';

const MenuNav = () => {
    return (
        <div className='bg-white py-3 sm:block hidden'>
            <div className='mid-container mx-auto px-5   flex gap-6 text-sm font-medium justify-center'>
                <h1 className='cursor-pointer hover:text-primary duration-200'>Home</h1>
                <h1 className='cursor-pointer hover:text-primary duration-200'>Flash Sale</h1>
                <h1 className='cursor-pointer hover:text-primary duration-200'>Blogs</h1>
                <h1 className='cursor-pointer hover:text-primary duration-200'>All Brands</h1>
                <h1 className='cursor-pointer hover:text-primary duration-200'>All Categories</h1>
                <h1 className='cursor-pointer hover:text-primary duration-200'>All Sellers</h1>
                <h1 className='cursor-pointer hover:text-primary duration-200'>Coupons</h1>
            </div>
        </div>
    );
};

export default MenuNav;