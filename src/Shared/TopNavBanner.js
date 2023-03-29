import Image from 'next/image';
import React from 'react';
import banner from '../assets/images/Navbar/topbanner.png'
import banner2 from '../assets/images/Navbar/mobilenav.png'

const TopNavBanner = () => {
    return (
        <div>
            <Image
            src={banner}
            alt="banner"
            width={1200}
            height={100}
            className='w-full h-16 object-cover sm:block hidden'
            />
            <Image
            src={banner2}
            alt="banner"
            width={1200}
            height={100}
            className='w-full h-full object-contain sm:hidden block'
            />
        </div>
    );
};

export default TopNavBanner;