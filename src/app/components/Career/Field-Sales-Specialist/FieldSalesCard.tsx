
import banner from '../../../../../public/JobList/banner.jpg';

import JobCardCommon from '../common/JobCardCommon';

export default function FieldSalesCard() {
  return (
    <JobCardCommon 
        imageSrc={banner}
        jobTitle=" IT Sales Executive – Field Sales Specialist"
        jobType="Fulltime"
        timeAgo="2 mins ago"
        applyLink="/jobs/apply-now"
      />
  );
}
