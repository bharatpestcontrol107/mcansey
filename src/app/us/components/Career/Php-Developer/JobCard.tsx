

import banner from '../../../../../../public/JobList/banner.jpg';

import JobCardCommon from '../common/JobCardCommon';

export default function JobCard() {
  return (
    <JobCardCommon
    imageSrc={banner}
    jobTitle="Php Developer"
    jobType="Fulltime"
    timeAgo="5 mins ago"
    applyLink="/jobs/apply-now"
  />
  );
}
