import Image from 'next/image';
import React from 'react';
import banner from '../assets/images/Navbar/topbanner.png'

const TopNavBanner = () => {
    return (
        <div>
            <Image
            src={banner}
            alt="banner"
            width={1200}
            height={100}
            className='w-full h-16 object-cover'
            />
        </div>
    );
};

export default TopNavBanner;