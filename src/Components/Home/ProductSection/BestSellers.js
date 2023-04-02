import React from 'react';
import Image from 'next/image';
import img1 from '../../../assets/brands/Rectangle 77.png'
import img2 from '../../../assets/brands/redbull.png'
import img3 from '../../../assets/brands/tesla.png'
import img4 from '../../../assets/brands/aston.png'
import img5 from '../../../assets/brands/bonton.png'
import img6 from '../../../assets/brands/ikea.png'
import { AiFillStar } from 'react-icons/ai';
import { AiOutlineRight } from 'react-icons/ai';

const BestSellers = () => {
    return (
        <div className=' mt-5'>
            <div className='flex justify-between items-center py-2 bg-white'>
                <h1 className='font-bold sm:text-xl ml-2'>Best Selling</h1>
                <div className='sm:mr-6 mr-2'>
                    <button className='bg-primary sm:px-3 px-2 py-2 sm:text-sm text-xs rounded text-white'>View More</button>
                </div>
            </div>
            <div className='mt-1 p-3 bg-white grid md:grid-cols-3 gap-5'>
                <div className='md:flex items-center gap-5 border rounded overflow-hidden '>
                    <div className='w-[40%]'>
                        <Image
                            src={img1}
                            alt='img1'
                            width={100}
                            height={100}
                            className='w-full '
                        />
                    </div>
                    <div className='w-[60%] lg:space-y-3 sm:space-y-2 space-y-1 p-2'>
                        <h1 className='md:text-md text-sm'>Lavish Look</h1>
                        <div className='  flex text-sm'>
                            <AiFillStar className='text-warning' />
                            <AiFillStar className='text-warning' />
                            <AiFillStar className='text-warning' />
                            <AiFillStar className='text-warning' />
                            <AiFillStar className='text-warning' />
                        </div>
                        <span className='bg-secondary px-2 py-2 text-primary rounded text-xs cursor-pointer flex items-center gap-1 w-[91px] font-semibold'>Visit Store <AiOutlineRight className='mt-1'/></span>
                    </div>
                </div>
                <div className='flex items-center gap-5 border rounded overflow-hidden '>
                    <div className='w-[40%]'>
                        <Image
                            src={img2}
                            alt='img1'
                            width={100}
                            height={100}
                            className='w-full '
                        />
                    </div>
                    <div className='w-[60%]'>
                        <h1>Lavish Look</h1>
                        <div className=' flex text-sm'>
                            <AiFillStar className='text-warning' />
                            <AiFillStar className='text-warning' />
                            <AiFillStar className='text-warning' />
                            <AiFillStar className='text-warning' />
                            <AiFillStar className='text-warning' />
                        </div>
                        <span className='bg-secondary px-2 py-2 text-primary rounded text-xs cursor-pointer flex items-center gap-1 w-[91px] font-semibold'>Visit Store <AiOutlineRight className='mt-1'/></span>
                    </div>
                </div>
                <div className='flex items-center gap-5 border rounded overflow-hidden '>
                    <div className='w-[40%]'>
                        <Image
                            src={img3}
                            alt='img1'
                            width={100}
                            height={100}
                            className='w-full '
                        />
                    </div>
                    <div className='w-[60%]'>
                        <h1>Lavish Look</h1>
                        <div className=' flex text-sm'>
                            <AiFillStar className='text-warning' />
                            <AiFillStar className='text-warning' />
                            <AiFillStar className='text-warning' />
                            <AiFillStar className='text-warning' />
                            <AiFillStar className='text-warning' />
                        </div>
                        <span className='bg-secondary px-2 py-2 text-primary rounded text-xs cursor-pointer flex items-center gap-1 w-[91px] font-semibold'>Visit Store <AiOutlineRight className='mt-1'/></span>
                    </div>
                </div>
                <div className='flex items-center gap-5 border rounded overflow-hidden '>
                    <div className='w-[40%]'>
                        <Image
                            src={img4}
                            alt='img1'
                            width={100}
                            height={100}
                            className='w-full '
                        />
                    </div>
                    <div className='w-[60%]'>
                        <h1>Lavish Look</h1>
                        <div className='flex text-sm'>
                            <AiFillStar className='text-warning' />
                            <AiFillStar className='text-warning' />
                            <AiFillStar className='text-warning' />
                            <AiFillStar className='text-warning' />
                            <AiFillStar className='text-warning' />
                        </div>
                        <span className='bg-secondary px-2 py-2 text-primary rounded text-xs cursor-pointer flex items-center gap-1 w-[91px] font-semibold'>Visit Store <AiOutlineRight className='mt-1'/></span>
                    </div>
                </div>
                <div className='flex items-center gap-5 border rounded overflow-hidden '>
                    <div className='w-[40%]'>
                        <Image
                            src={img5}
                            alt='img1'
                            width={100}
                            height={100}
                            className='w-full '
                        />
                    </div>
                    <div className='w-[60%]'>
                        <h1>Lavish Look</h1>
                        <div className='flex text-sm'>
                            <AiFillStar className='text-warning' />
                            <AiFillStar className='text-warning' />
                            <AiFillStar className='text-warning' />
                            <AiFillStar className='text-warning' />
                            <AiFillStar className='text-warning' />
                        </div>
                        <span className='bg-secondary px-2 py-2 text-primary rounded text-xs cursor-pointer flex items-center gap-1 w-[91px] font-semibold'>Visit Store <AiOutlineRight className='mt-1'/></span>
                    </div>
                </div>
                <div className='flex items-center gap-5 border rounded overflow-hidden '>
                    <div className='w-[40%]'>
                        <Image
                            src={img6}
                            alt='img1'
                            width={100}
                            height={100}
                            className='w-full '
                        />
                    </div>
                    <div className='w-[60%]'>
                        <h1>Lavish Look</h1>
                        <div className='flex text-sm'>
                            <AiFillStar className='text-warning' />
                            <AiFillStar className='text-warning' />
                            <AiFillStar className='text-warning' />
                            <AiFillStar className='text-warning' />
                            <AiFillStar className='text-warning' />
                        </div>
                        <span className='bg-secondary px-2 py-2 text-primary rounded text-xs cursor-pointer flex items-center gap-1 w-[91px] font-semibold'>Visit Store <AiOutlineRight className='mt-1'/></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BestSellers;