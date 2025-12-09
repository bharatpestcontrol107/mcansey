import React from 'react';
import HeroSectionLead from '../components/Leaderships/HeroSectionLead';
import LeaderBanner from '../components/Leaderships/LeaderBanner';
import DiversitySection from '../components/Leaderships/DiversitySection';
import BoardMembers from '../components/Leaderships/BoardMembers';
import ManagementTeam from '../components/Leaderships/ManagementTeam';
import TeamGalleries from '../components/Leaderships/TeamGalleries';



function Page() {

  return (
    <>  
    <HeroSectionLead/>
    <LeaderBanner/>
    <DiversitySection/>
    <BoardMembers/>
    <ManagementTeam/>
    <TeamGalleries/>
    </>
  );
}

export default Page;
