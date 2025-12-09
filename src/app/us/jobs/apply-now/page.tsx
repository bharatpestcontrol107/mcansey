import bgImg from '../../../../../public/JobList/jobbanner.png';
import ApplyNow from "@/app/components/JobForm/ApplyNow";
import JobBanner from "@/app/components/JobForm/JobBanner";







export default function Page() {
  return (
    <>
  <JobBanner
  title="Apply Jobs at Mcansey"
  
  
  bgImage={bgImg.src}
   />
  <ApplyNow/>
      </>
  );
}
