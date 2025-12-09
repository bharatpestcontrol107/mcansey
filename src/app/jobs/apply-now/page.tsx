import Footer from '@/app/components/Footer';
import bgImg from '../../../../public/JobList/jobbanner.png';
import ApplyNow from "@/app/components/JobForm/ApplyNow";
import JobBanner from "@/app/components/JobForm/JobBanner";
import Navbar from '@/app/components/Navbar';







export default function Page() {
  return (
    <>
    <Navbar/>
  <JobBanner
  title="Apply Jobs at Mcansey"
  
  
  bgImage={bgImg.src}
   />
  <ApplyNow/>
  <Footer/>
      </>
  );
}
