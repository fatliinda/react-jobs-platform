import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <nav className="relative container mx-auto p-6">
      
      <div className="flex items-center justify-between">
       
        <div className="pt-2">
           <h1 className="text-lg font-bold">DevJobs</h1> 
        </div>
       
        <div className="hidden space-x-6 md:flex">
          <Link to="/jobs" className="hover:text-darkGrayishBlue">Jobs</Link>
          
        </div>
       
        <Link
          to="#"
          className="hidden p-3 px-6 pt-2 text-white bg-blue-600 rounded-full baseline hover:bg-blue md:block"
          >Get Started</Link>
        
        </div>
        </nav>
        </>
  )
}

export default Navbar
