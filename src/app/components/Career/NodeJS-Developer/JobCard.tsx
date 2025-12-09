
import banner from '../../../../../public/JobList/banner.jpg';

import JobCardCommon from '../common/JobCardCommon';

export default function JobCard() {
  return (
    <JobCardCommon 
        imageSrc={banner}
        jobTitle="Node.JS Developer"
        jobType="Fulltime"
        timeAgo="3 mins ago"
        applyLink="/jobs/apply-now"
      />
  );
}
