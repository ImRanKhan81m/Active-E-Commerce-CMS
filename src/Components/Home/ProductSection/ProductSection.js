import React from 'react';
import FlashSale from './FlashSale';
import NewProduct from './NewProduct';
import FeaturedProducts from './FeaturedProducts';
import BestSelling from './BestSelling';
import ProductAd from '../ProductAd/ProductAd';

const ProductSection = () => {
    return (
        <div className='mid-container'>
            <FlashSale/>
            <NewProduct/>
            <FeaturedProducts/>
            <BestSelling/>
            <ProductAd/>
            <FeaturedProducts/>
            <BestSelling/>
            <ProductAd/>
        </div>
    );
};

export default ProductSection;