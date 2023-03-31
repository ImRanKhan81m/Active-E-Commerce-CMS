import Image from 'next/image';
import React from 'react';

const ProductsRight = () => {
    return (
        <div>
            <div className='flex justify-center bg-secondary mt-0 py-2 font-semibold'>
                <h1>Todays Deal</h1>
            </div>

            <div className=''>
                <div className='bg-white flex items-center border-[5px] border-primary p-2 py-3'>
                    <div className='w-[50%]'>
                        <Image
                            src='https://i.ibb.co/wWzP7qS/Rectangle-40.png'
                            width={100}
                            height={100}
                            alt='banner'
                            className='w-full'
                        />
                    </div>
                    <div className='w-[50%]'>
                        <h1 className='text-xs font-bold text-center text-primary'>$54.750</h1>
                        <p className='text-xs text-neutral text-center my-0'>$68.950</p>
                    </div>
                </div>
                <div className='bg-white flex items-center border-[5px] border-t-[0px] border-primary p-2 py-3'>
                    <div className='w-[50%]'>
                        <Image
                            src='https://i.ibb.co/zNRZNdV/Rectangle-40-1.png'
                            width={100}
                            height={100}
                            alt='banner'
                            className='w-full'
                        />
                    </div>
                    <div className='w-[50%]'>
                        <h1 className='text-xs font-bold text-center text-primary'>$54.750</h1>
                        <p className='text-xs text-neutral text-center my-0'>$68.950</p>
                    </div>
                </div>
                <div className='bg-white flex items-center border-[5px] border-t-[0px] border-primary p-2 py-3'>
                    <div className='w-[50%]'>
                        <Image
                            src='https://i.ibb.co/dbVMhz9/Rectangle-40-2.png'
                            width={100}
                            height={100}
                            alt='banner'
                            className='w-full'
                        />
                    </div>
                    <div className='w-[50%]'>
                        <h1 className='text-xs font-bold text-center text-primary'>$54.750</h1>
                        <p className='text-xs text-neutral text-center my-0'>$68.950</p>
                    </div>
                </div>
                <div className='bg-white flex items-center border-[5px] border-t-[0px] border-primary p-2 py-3'>
                    <div className='w-[50%]'>
                        <Image
                            src='https://i.ibb.co/wWzP7qS/Rectangle-40.png'
                            width={100}
                            height={100}
                            alt='banner'
                            className='w-full'
                        />
                    </div>
                    <div className='w-[50%]'>
                        <h1 className='text-xs font-bold text-center text-primary'>$54.750</h1>
                        <p className='text-xs text-neutral text-center my-0'>$68.950</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductsRight;