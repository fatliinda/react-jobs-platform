import React from 'react'

const Navbar = () => {
  return (
    <>
    <nav class="relative container mx-auto p-6">
      
      <div class="flex items-center justify-between">
       
        <div class="pt-2">
           <h1 class="text-lg font-bold">DevJobs</h1> 
        </div>
       
        <div class="hidden space-x-6 md:flex">
          <a href="#" class="hover:text-darkGrayishBlue">Pricing</a>
          <a href="#" class="hover:text-darkGrayishBlue">Product</a>
          <a href="#" class="hover:text-darkGrayishBlue">About Us</a>
          <a href="#" class="hover:text-darkGrayishBlue">Careers</a>
          <a href="#" class="hover:text-darkGrayishBlue">Community</a>
        </div>
       
        <a
          href="#"
          class="hidden p-3 px-6 pt-2 text-white bg-blue-600 rounded-full baseline hover:bg-blue md:block"
          >Get Started</a
        >
        </div>
        </nav>
        </>
  )
}

export default Navbar
