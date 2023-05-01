import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination, Autoplay } from "swiper";
import Image from 'next/image';
import ProductCard from '../../../Shared/Card/ProductCard';

const BestSelling = () => {
    return (
        <div className=' mt-5'>
            <div className='flex justify-between items-center py-2 bg-white'>
                <h1 className='font-bold sm:text-xl ml-2'>Best Selling</h1>
                <div className='sm:mr-6 mr-2'>
                    <button className='bg-primary sm:px-3 px-2 py-2 sm:text-sm text-xs rounded text-white'>View More</button>
                </div>
            </div>
            <div className='mt-1 p-3 bg-white'>
                <div className=''>
                    <Swiper
                        effect={"coverflow"}
                        spaceBetween={15}
                        // grabCursor={true}
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

export default BestSelling;