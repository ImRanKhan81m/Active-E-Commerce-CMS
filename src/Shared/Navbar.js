import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { BiGitCompare } from 'react-icons/bi';
import { GrFavorite } from 'react-icons/gr';
import { FiShoppingCart } from 'react-icons/fi';
import logo from '../assets/images/logo/logo.png'

const Navbar = () => {
  const router = useRouter();
  const { pathname } = useRouter();


  return (
    <>
      <div className='shadow-sm sticky top-0 z-40 bg-base-100'>
        <div className='mid-container '>
          <div className="navbar justify-between gap-10 bg-base-100 px-0 py-0">


            <div className="dropdown  sm:hidden">
              <label tabIndex={0} className="btn btn-ghost">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
              </label>

              <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                <Link href='/'>
                  <li><h6 className='font-semibold text-[16px] hover:bg-base-100 hover:text-primary'>Home</h6></li>
                </Link>
                <Link href='/all-blogs'>
                  <li><h6 className='font-semibold text-[16px] hover:bg-base-100 hover:text-primary'>Blogs</h6></li>
                </Link>
              </ul>
            </div>

            <div className=" md:w-[40%] mx-auto">
              <Link href='/' className="flex justify-center items-center gap-2">
                <Image
                  src={logo}
                  alt="logo"
                  width={250}
                  height={120}
                // className='w-5'
                ></Image>
                {/* <h1 className="font-semibold text-xl text-neutral">Portfolio</h1> */}
              </Link>

            </div>

            <div className="w-[70%]  justify-center md:block hidden">
              <input type="search" placeholder="Type here" className="input input-bordered w-full " />
            </div>

            <div className='w-[40%]  justify-end md:block hidden'>
              <div className=" flex gap-5">
                <Link href='/'>
                  <div className="flex items-center gap-1">
                    <BiGitCompare className="text-2xl" />
                    <div>
                      <div className="bg-primary  text-white rounded-full flex justify-center items-center w-6 h-6 text-xs">
                        <p className="p-1">10</p>
                      </div>
                      <p className="p-0 text-xs font-medium">Compare</p>
                    </div>
                  </div>
                </Link>
                <Link href='/'>
                  <div className="flex items-center gap-1">
                    <GrFavorite className="text-2xl" />
                    <div>
                      <div className="bg-primary  text-white rounded-full flex justify-center items-center w-6 h-6 text-xs">
                        <p className="p-1">10</p>
                      </div>
                      <p className="p-0 text-xs font-medium">Wishlist</p>
                    </div>
                  </div>
                </Link>
                <Link href='/'>
                  <div className="flex items-center gap-1">
                    <FiShoppingCart className="text-2xl" />
                    <div>
                      <div className="bg-primary  text-white rounded-full flex justify-center items-center w-6 h-6 text-xs">
                        <p className="p-1">10</p>
                      </div>
                      <p className="p-0 text-xs font-medium">Compare</p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div >
    </>
  );
};

export default Navbar;

// cart drawer
