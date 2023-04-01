import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination, Autoplay } from "swiper";
import Image from 'next/image';
import ProductCard from '../../../Shared/Card/ProductCard';

const FlashSale = () => {
    return (
        <div className=' mt-5'>
            <div className='flex justify-between items-center py-2 bg-white'>
                <div className='flex sm:gap-3 gap-2 items-center'>
                    <h1 className='font-bold sm:text-xl ml-2'>Flash Sale</h1>
                    <div className="grid grid-flow-col gap-1 text-center auto-cols-max">
                        <div className="flex flex-col justify-center sm:p-2 p-1 bg-primary text-white rounded ">
                            <span className="countdown font-mono mx-auto ">
                                <span style={{ "--value": 15 }}></span>
                            </span>
                            {/* <p className='text-xs'>  Days</p> */}
                        </div>
                        <h1 className='text-2xl font-semibold'>:</h1>
                        <div className="flex flex-col justify-center sm:p-2 p-1 bg-primary text-white rounded">
                            <span className="countdown font-mono mx-auto  ">
                                <span style={{ "--value": 10 }}></span>
                            </span>
                            {/* <p className='text-xs'>Hours</p> */}
                        </div>
                        <h1 className='text-2xl font-semibold'>:</h1>
                        <div className="flex flex-col justify-center sm:p-2 p-1 bg-primary text-white rounded ">
                            <span className="countdown font-mono mx-auto">
                                <span style={{ "--value": 24 }}></span>
                            </span>
                            {/* <p className='text-xs'>Min</p> */}
                        </div>
                        <h1 className='text-2xl font-semibold'>:</h1>
                        <div className="flex flex-col justify-center sm:p-2 p-1 bg-primary text-white rounded ">
                            <span className="countdown font-mono mx-auto">
                                <span style={{ "--value": 39 }}></span>
                            </span>
                            {/* <p className='text-xs'>Sec</p> */}
                        </div>
                    </div>
                </div>
                <div className='sm:mr-6 mr-2'>
                    <button className='bg-primary sm:px-3 px-2 py-2 sm:text-sm text-xs rounded text-white'>View More</button>
                </div>
            </div>
            <div className='mt-1 p-3 bg-white'>
                <div className=''>
                    <Swiper
                        effect={"coverflow"}
                        spaceBetween={15}
                        grabCursor={true}
                        pagination={{
                            clickable: true,
                            dynamicBullets: true,
                        }}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                        }}
                        modules={[Autoplay]}
                        className="mySwiper"
                        breakpoints={{
                            240: {
                                // width: 640,
                                slidesPerView: 2,
                            },
                            640: {
                                // width: 640,
                                slidesPerView: 3,
                            },
                            768: {
                                // width: 768,
                                slidesPerView: 4,
                            },
                            900: {
                                // width: 768,
                                slidesPerView: 5,
                            },
                            1200: {
                                // width: 768,
                                slidesPerView: 6,
                            },
                        }}
                    >
                        <SwiperSlide>
                            <ProductCard />
                        </SwiperSlide>
                        <SwiperSlide>
                            <ProductCard />
                        </SwiperSlide>
                        <SwiperSlide>
                            <ProductCard />
                        </SwiperSlide>
                        <SwiperSlide>
                            <ProductCard />
                        </SwiperSlide>
                        <SwiperSlide>
                            <ProductCard />
                        </SwiperSlide>
                        <SwiperSlide>
                            <ProductCard />
                        </SwiperSlide>
                        <SwiperSlide>
                            <ProductCard />
                        </SwiperSlide>
                        <SwiperSlide>
                            <ProductCard />
                        </SwiperSlide>
                        <SwiperSlide>
                            <ProductCard />
                        </SwiperSlide>
                        <SwiperSlide>
                            <ProductCard />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default FlashSale;