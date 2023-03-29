import React from 'react';
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { IoIosArrowDown } from 'react-icons/io';

const SecondNav = () => {
    const { pathname } = useRouter();
    return (
        <div className=' sticky top-0 z-50 bg-base-100 border-b-[1px]'>
            <div className='mid-container '>
                <div className="flex items-center justify-between bg-base-100 px-0 py-2">

                    <div className="sm:text-sm text-xs flex gap-5">
                        <div className="dropdown">
                            <label tabIndex={0} className="cursor-pointer flex items-center gap-1 ">
                                <p>English</p> <IoIosArrowDown className='mt-1'/>
                            </label>

                            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-0 shadow bg-base-100 rounded  space-y-1">
                                <Link href='/'>
                                    <li className='hover:bg-primary rounded hover:text-white duration-200 p-0'><h6 className=' font-medium hover:text-white py-2'>Bangla</h6></li>
                                </Link>
                            </ul>
                        </div>
                        <div className="dropdown">
                            <label tabIndex={0} className="cursor-pointer flex items-center gap-1 ">
                                <p>US Dollar $</p> <IoIosArrowDown className='mt-1'/>
                            </label>

                            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-0 shadow bg-base-100 rounded  space-y-1">
                                <Link href='/'>
                                    <li className='hover:bg-primary rounded hover:text-white duration-200 p-0'><h6 className=' font-medium hover:text-white py-2'>Bd Tk ৳</h6></li>
                                </Link>
                            </ul>
                        </div>
                    </div>

                    <div className='flex gap-8 items-center sm:text-sm text-xs font-medium'>
                        <p className=' hover:bg-base-100 hover:text-primary'>Help line +01 11 2352 566</p>
                        <div className="dropdown dropdown-end sm:block hidden">
                            <label tabIndex={0} className="cursor-pointer">
                                <p>My Panel</p>
                            </label>

                            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded w-52 space-y-1">
                                <Link href='/'>
                                    <li className='hover:bg-primary rounded hover:text-white duration-200'><h6 className=' font-medium hover:text-white'>My Profile</h6></li>
                                </Link>
                                <Link href='/' >
                                    <li className='hover:bg-primary rounded hover:text-white duration-200'><p className=' font-medium hover:text-white hover:bg-primary'>My Orders</p></li>
                                </Link>
                                <Link href='/' >
                                    <li className='hover:bg-primary rounded hover:text-white duration-200'><p className=' font-medium  hover:text-white hover:bg-primary'>Payment History</p></li>
                                </Link>
                                <Link href='/' >
                                    <li className='hover:bg-primary rounded hover:text-white duration-200'><p className=' font-medium hover:text-white hover:bg-primary'>My Wishlist</p></li>
                                </Link>
                                <Link href='/' >
                                    <li className='hover:bg-primary rounded hover:text-white duration-200'><p className=' font-medium hover:text-white hover:bg-primary'>My Cart</p></li>
                                </Link>

                            </ul>
                        </div>

                        <h6 className=' hover:bg-base-100 hover:text-primary cursor-pointer  sm:block hidden'>Log out</h6>

                    </div>
                </div>
            </div>
        </div >
    );
};

export default SecondNav;