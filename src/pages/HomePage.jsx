import React from 'react';
import Hero from '../components/Hero';
import HomeCards from '../components/HomeCards';
import JobListings from '../components/JObListings';
import ViewAllJobs from '../components/ViewAllJobs';

const HomePage = () => {
  return (
    <>
      <Hero title='Find the job of your dreams!'  subtitle='Find the job that matches your skills and interest'/>
      <HomeCards />
      <JobListings isHome={true} />
      <ViewAllJobs />
    </>
  )
}

export default HomePage
