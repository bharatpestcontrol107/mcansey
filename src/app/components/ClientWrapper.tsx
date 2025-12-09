"use client";

import { usePathname } from "next/navigation";
import Navbar from "./About/Navbar";
import Footer from "./LandingPage/Footer";
import ContactFooter from "./LandingPage/ContactFooter";



const ClientWrapper = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  // Define routes where Navbar and Footer should not appear
  const excludePaths = ["/landing-page"];

  const shouldExclude = excludePaths.includes(pathname);

  return (
    <>
      {!shouldExclude && <Navbar/>}
      <main>{children}</main>
      {!shouldExclude && <ContactFooter/>}
    </>
  );
};

export default ClientWrapper;
