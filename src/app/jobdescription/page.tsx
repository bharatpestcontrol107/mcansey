
'use client'

import JobCard from "../components/Career/descriptionPage/JobCard";
import JobLayout from "../components/Career/descriptionPage/JobLayout";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function JobMain() {
  return (
    <>
    <Navbar/>
    <JobCard/>
    <JobLayout/>
  <Footer/>
    </>
  );
}
