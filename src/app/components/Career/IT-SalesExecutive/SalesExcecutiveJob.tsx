
import banner from '../../../../../public/JobList/banner.jpg';

import JobCardCommon from '../common/JobCardCommon';

export default function SalesExcecutiveJobs() {
  return (
    <JobCardCommon 
        imageSrc={banner}
        jobTitle="IT Sales Executive – LinkedIn Lead Generation & Global Sales Specialist"
        jobType="Fulltime"
        timeAgo="3 mins ago"
        applyLink="/jobs/apply-now"
      />
  );
}
