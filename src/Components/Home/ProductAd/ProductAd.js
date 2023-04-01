import React from 'react';
import Image from 'next/image';
import img1 from '../../../assets/banner/banner2.png';
import img2 from '../../../assets/banner/banner3.png';
import img3 from '../../../assets/banner/banner4.png';

const ProductAd = () => {
    return (
        <div>
            <div className="grid grid-cols-3 gap-10 mt-5 ">
                <div> <Image src={img1} alt="img1" width={1200} height={300} />
                </div>
                <div> <Image src={img2} alt="img1" width={1200} height={300} />
                </div>
                <div> <Image src={img3} alt="img1" width={1200} height={300} />
                </div>
            </div>
        </div>
    );
};

export default ProductAd;