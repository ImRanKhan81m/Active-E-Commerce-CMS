import Image from 'next/image';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { BiChevronRight } from "react-icons/bi";

const SidebarMenu = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    console.log(categories);

    return (
        <div>
            <div className='flex justify-center bg-secondary mt-0 py-2 font-semibold'>
                <h1>Categories</h1>
            </div>
            <div>
                <ul id="catagory-menu">
                    {categories.map((category) => {
                        return (
                            <li key={category._id}>
                                <a href="#">
                                    <span className="flex items-center justify-between">
                                        <span className="flex items-center gap-2">
                                            <Image
                                                alt="category icon"
                                                src={category.imageURLs[0]}
                                                width={35}
                                                height={35}
                                                className="rounded-md object-fill w-6 h-6"
                                            />
                                            {category.parentCategory}
                                        </span>

                                        <BiChevronRight size={25} />
                                    </span>
                                </a>
                                {/* dropdown */}
                                <ul>
                                    {category.childCategory.map((child, index) => (
                                        <li key={index}>
                                            <a>{child}</a>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};

export default SidebarMenu;