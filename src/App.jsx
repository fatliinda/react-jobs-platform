import React from 'react'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HomeCards from './components/HomeCards';
const App = () => {
  return (
    <>
    <Navbar />
    <Hero title='Find your dream job' subtitle='Find the job that suits your skills and needs' />
    <HomeCards />
    <div>
       
    </div>
    </>
  )
}

export default App
