import Image from "next/image";
import { useRouter } from "next/router";
import React, { useContext } from "react";
import CreateContext from "../../CreateContex";
import SidebarMenu from "./SidebarMenu";
import SliderInHeader from "./SliderInHeader";
import ProductsRight from "./ProductsRight";
import img1 from '../../../assets/banner/banner2.png'
import img2 from '../../../assets/banner/banner3.png'
import img3 from '../../../assets/banner/banner4.png'

const Banner = () => {

  return (
    <section className="mid-container mx-auto px-5 ">
      <div className="flex gap-3">
        <div className="lg:w-[25%] lg:block hidden bg-white mt-4 ">
          <SidebarMenu />
        </div>
        {/* -----------------------------slider */}
        <div className="lg:w-[60%] w-full mt-4 ">
          <SliderInHeader />
        </div>
        <div className="lg:w-[15%] lg:block hidden mt-4 space-y-3 ">
          <ProductsRight />
        </div>
      </div>

      <div className="grid grid-cols-3 gap-10 mt-5 ">
        <div> <Image src={img1} alt="img1" width={1200} height={300} />
        </div>
        <div> <Image src={img2} alt="img1" width={1200} height={300} />
        </div>
        <div> <Image src={img3} alt="img1" width={1200} height={300} />
        </div>
      </div>
    </section>
  );
};

export default Banner;
