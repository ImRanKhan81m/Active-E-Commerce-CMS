import React from 'react';
import logo from '../../assets/images/logo/logo.png'
import playStore from '../../assets/footer/playstore.png'
import appleStore from '../../assets/footer/appleStore.png'
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
    
    return (
        <div className=" bg-[#111723] text-[#A7A9AC]">
            <footer className="mid-container mx-auto px-5  ">
                <div className="container px-4 pt-20 pb-5 mx-auto sm:px-6 lg:px-8">
                    <div className="flex gap-5">
                        <div className='md:w-[40%]'>
                            <Link href={"/"}>
                                <Image
                                    src={logo}
                                    height={300}
                                    width={260}
                                    className="mr-5 h-16" alt="logo" />
                            </Link>
                            <p className="max-w-xs mt-4 text-sm mb-4">
                                Complete system for your eCommerce business
                            </p>
                            <div className='flex gap-3 items-center justify-start'>
                                <Link href={"/"}>
                                    <Image
                                        src={playStore}
                                        height={90}
                                        width={150}
                                        alt="Get it on google play"
                                        className=""
                                    />
                                </Link>
                                <Link href={"/"}>
                                    <Image
                                        src={appleStore}
                                        height={90}
                                        width={150}
                                        alt="Get it on google play"
                                        className=""
                                    />
                                </Link>
                            </div>
                        </div>
                        <div className='md:w-[60%]'>
                            <div className="grid grid-cols-2 gap-8 lg:col-span-2 sm:grid-cols-2 lg:grid-cols-3">
                                <div>
                                    <p className="font-medium footer-heading">Company</p>
                                    <nav className="flex flex-col mt-4 space-y-4 text-sm ">
                                        <a
                                            className="hover:text-red-600 transition-all ease-linear duration-300"
                                            href="https://www.ototrips.com/about-us/"
                                        >
                                            About
                                        </a>
                                        <a
                                            className="hover:text-red-600 transition-all ease-linear duration-300"
                                            href="https://www.ototrips.com/#"
                                        >
                                            Contact Us
                                        </a>
                                        <a
                                            className="hover:text-red-600 transition-all ease-linear duration-300"
                                            href="https://www.ototrips.com/#"
                                        >
                                            Newsroom
                                        </a>
                                        <a
                                            className="hover:text-red-600 transition-all ease-linear duration-300"
                                            href="https://www.ototrips.com/#"
                                        >
                                            Our Sitemap
                                        </a>
                                    </nav>
                                </div>
                                
                                <div>
                                    <p className="font-medium footer-heading">Usefull Links</p>
                                    <nav className="flex flex-col mt-4 space-y-4 text-sm">
                                        <a
                                            className="hover:text-red-600 transition-all ease-linear duration-300"
                                            href="https://www.ototrips.com/privacy-policy/"
                                        >
                                            Privacy Policy
                                        </a>
                                        <a
                                            className="hover:text-red-600 transition-all ease-linear duration-300"
                                            href="https://www.ototrips.com/refund_policy/"
                                        >
                                            Refund Policy
                                        </a>
                                        <a
                                            className="hover:text-red-600 transition-all ease-linear duration-300"
                                            href="https://www.ototrips.com/#"
                                        >
                                            Terms & Conditions
                                        </a>
                                        <a
                                            className="hover:text-red-600 transition-all ease-linear duration-300"
                                            href="https://www.ototrips.com/#"
                                        >
                                            FAQs
                                        </a>
                                    </nav>
                                </div>
                                <div>
                                    <p className="font-medium footer-heading">info</p>
                                    <nav className="flex flex-col mt-4 space-y-4 text-sm">
                                        <a
                                            className="hover:text-red-600 transition-all ease-linear duration-300"
                                            href="https://www.ototrips.com/flight/"
                                        >
                                            Flight
                                        </a>
                                        <a
                                            className="hover:text-red-600 transition-all ease-linear duration-300"
                                            href="https://www.ototrips.com/#"
                                        >
                                            Shared
                                        </a>
                                        <a
                                            className="hover:text-red-600 transition-all ease-linear duration-300"
                                            href="https://www.carrier.otoapp.com.bd/"
                                        >
                                            Carrier
                                        </a>
                                        <a
                                            className="hover:text-red-600 transition-all ease-linear duration-300"
                                            href="https://www.business.otoapp.com.bd/"
                                        >
                                            Business
                                        </a>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className="mt-24 text-md text-center">
                        <Link className="text-bold" href="/">
                            @Active eCommerce CMS  © {Date().slice(11, 15)}.
                        </Link>
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;