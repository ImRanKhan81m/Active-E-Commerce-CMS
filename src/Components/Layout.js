import { useRouter } from "next/router";
import React from "react";
import { Toaster } from "react-hot-toast";
import SecondNav from "../Shared/2ndNavbar";
import Footers from "../Shared/Footers";
import Navbar from "../Shared/Navbar";
import TopNavBanner from "../Shared/TopNavBanner";

function Layout({ children }) {
  const router = useRouter();
  const pathName = router.pathname;

  return (
    <>
      <TopNavBanner />
      <SecondNav/>
      <Navbar></Navbar>
      <main>{children}</main>
      {/* {!pathName.includes("admin") && (
        <Footers></Footers>
      )} */}
      <Toaster />
    </>
  );
}

export default Layout;
