import { useRouter } from "next/router";
import React from "react";
import { Toaster } from "react-hot-toast";
import SecondNav from "../Shared/2ndNavbar";
import Footers from "../Shared/Footers";
import Navbar from "../Shared/Navbar";
import TopNavBanner from "../Shared/TopNavBanner";
import MenuNav from "../Shared/MenuNav";
import Footer from "../Shared/Footer/Footer";

function Layout({ children }) {
  const router = useRouter();
  const pathName = router.pathname;

  return (
    <>
      <TopNavBanner />
      <SecondNav/>
      <Navbar></Navbar>
      <MenuNav/>
      <main>{children}</main>
      {/* {!pathName.includes("admin") && (
        <Footers></Footers>
      )} */}
      <Footer/>
      <Toaster />
    </>
  );
}

export default Layout;
