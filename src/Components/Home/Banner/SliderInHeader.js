import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import styles from "./Sidebar.module.css";
import "swiper/css/autoplay";

// import required modules
import { Pagination, Autoplay } from "swiper";
import Image from "next/image";
import banner1 from '../../../assets/banner/banner.png'
import banner2 from '../../../assets/banner/banner2.png'
import banner3 from '../../../assets/banner/banner3.png'

const SliderInHeader = () => {
    return (
        <>
            <Swiper
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination, Autoplay]}
                className={styles}
                autoplay={true}
                navigation
            >
                <SwiperSlide>
                    <div className='sm:h-72 h-52 '>
                        <Image
                            width={1200}
                            height={1200}
                            alt="banner"
                            src={banner1}
                            className='w-full h-full'
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='sm:h-72 h-52 '>
                        <Image
                            width={1200}
                            height={1200}
                            alt="banner"
                            src={'https://icms-image.slatic.net/images/ims-web/ad6bfb35-cb9f-4d6e-899d-9b0aa6e5b6ac.jpg'}
                            className='w-full h-full'
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='sm:h-72 h-52 '>
                        <Image
                            width={1200}
                            height={1200}
                            alt="banner"
                            src={'https://icms-image.slatic.net/images/ims-web/5086f772-88e8-42e5-b281-d62e9ec9ff08.jpg_1200x1200.jpg'}
                            className='w-full h-full'
                        />
                    </div>
                </SwiperSlide>
            </Swiper>


            <div className='pt-4'>
                <Swiper
                    effect={"coverflow"}
                    spaceBetween={15}
                    // grabCursor={true}
                    pagination={{
                        clickable: true,
                        dynamicBullets: true,
                    }}
                    autoplay={{
                        delay: 1000,
                        disableOnInteraction: false,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                    breakpoints={{
                        240: {
                            // width: 640,
                            slidesPerView: 3,
                        },
                        640: {
                            // width: 640,
                            slidesPerView: 4,
                        },
                        768: {
                            // width: 768,
                            slidesPerView: 5,
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
                        <div className='bg-white'>
                            <Image
                                src='https://i.ibb.co/wWzP7qS/Rectangle-40.png'
                                width={100}
                                height={100}
                                alt='banner'
                                className='w-full'
                            />
                            <h1 className='text-xs py-5  font-semibold text-center'>Woman Clothing</h1>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='bg-white'>
                            <Image
                                src='https://i.ibb.co/zNRZNdV/Rectangle-40-1.png'
                                width={100}
                                height={100}
                                alt='banner'
                                className='w-full'
                            />
                            <h1 className='text-xs py-5 font-semibold text-center'>Man Clothing</h1>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='bg-white'>
                            <Image
                                src='https://i.ibb.co/dbVMhz9/Rectangle-40-2.png'
                                width={100}
                                height={100}
                                alt='banner'
                                className='w-full'
                            />
                            <h1 className='text-xs py-5 font-semibold text-center'>Baby Clothing</h1>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='bg-white'>
                            <Image
                                src='https://i.ibb.co/4m1WmGd/Rectangle-40-3.png'
                                width={100}
                                height={100}
                                alt='banner'
                                className='w-full'
                            />
                            <h1 className='text-xs py-5 font-semibold text-center'>Smartphone</h1>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='bg-white'>
                            <Image
                                src='https://i.ibb.co/ss1Tb6D/Rectangle-40-4.png'
                                width={100}
                                height={100}
                                alt='banner'
                                className='w-full'
                            />
                            <h1 className='text-xs py-5 font-semibold text-center'>Toys</h1>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='bg-white'>
                            <Image
                                src='https://i.ibb.co/SVWhRJj/Rectangle-40-5.png'
                                width={100}
                                height={100}
                                alt='banner'
                                className='w-full'
                            />
                            <h1 className='text-xs py-5 font-semibold text-center'>Tools</h1>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='bg-white'>
                            <Image
                                src='https://i.ibb.co/zNRZNdV/Rectangle-40-1.png'
                                width={100}
                                height={100}
                                alt='banner'
                                className='w-full'
                            />
                            <h1 className='text-xs py-5 font-semibold text-center'>Man Clothing</h1>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='bg-white'>
                            <Image
                                src='https://i.ibb.co/dbVMhz9/Rectangle-40-2.png'
                                width={100}
                                height={100}
                                alt='banner'
                                className='w-full'
                            />
                            <h1 className='text-xs py-5 font-semibold text-center'>Baby Clothing</h1>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='bg-white'>
                            <Image
                                src='https://i.ibb.co/4m1WmGd/Rectangle-40-3.png'
                                width={100}
                                height={100}
                                alt='banner'
                                className='w-full'
                            />
                            <h1 className='text-xs py-5 font-semibold text-center'>Smartphone</h1>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='bg-white'>
                            <Image
                                src='https://i.ibb.co/ss1Tb6D/Rectangle-40-4.png'
                                width={100}
                                height={100}
                                alt='banner'
                                className='w-full'
                            />
                            <h1 className='text-xs py-5 font-semibold text-center'>Toys</h1>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='bg-white'>
                            <Image
                                src='https://i.ibb.co/SVWhRJj/Rectangle-40-5.png'
                                width={100}
                                height={100}
                                alt='banner'
                                className='w-full'
                            />
                            <h1 className='text-xs py-5 font-semibold text-center'>Tools</h1>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>

            {/* <div className='grid grid-cols-6 gap-3 mt-5'>
                <div className='bg-white'>
                    <Image
                        src='https://i.ibb.co/wWzP7qS/Rectangle-40.png'
                        width={100}
                        height={100}
                        alt='banner'
                        className='w-full'
                    />
                    <h1 className='text-xs py-7  font-semibold text-center'>Woman Clothing</h1>
                </div>
                <div className='bg-white'>
                    <Image
                        src='https://i.ibb.co/zNRZNdV/Rectangle-40-1.png'
                        width={100}
                        height={100}
                        alt='banner'
                        className='w-full'
                    />
                    <h1 className='text-xs py-7 font-semibold text-center'>Man Clothing</h1>
                </div>
                <div className='bg-white'>
                    <Image
                        src='https://i.ibb.co/dbVMhz9/Rectangle-40-2.png'
                        width={100}
                        height={100}
                        alt='banner'
                        className='w-full'
                    />
                    <h1 className='text-xs py-7 font-semibold text-center'>Baby Clothing</h1>
                </div>
                <div className='bg-white'>
                    <Image
                        src='https://i.ibb.co/4m1WmGd/Rectangle-40-3.png'
                        width={100}
                        height={100}
                        alt='banner'
                        className='w-full'
                    />
                    <h1 className='text-xs py-7 font-semibold text-center'>Smartphone</h1>
                </div>
                <div className='bg-white'>
                    <Image
                        src='https://i.ibb.co/ss1Tb6D/Rectangle-40-4.png'
                        width={100}
                        height={100}
                        alt='banner'
                        className='w-full'
                    />
                    <h1 className='text-xs py-7 font-semibold text-center'>Toys</h1>
                </div>
                <div className='bg-white'>
                    <Image
                        src='https://i.ibb.co/SVWhRJj/Rectangle-40-5.png'
                        width={100}
                        height={100}
                        alt='banner'
                        className='w-full'
                    />
                    <h1 className='text-xs py-7 font-semibold text-center'>Tools</h1>
                </div>
            </div> */}
        </>
    );
};

export default SliderInHeader;