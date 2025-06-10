import React from 'react'
import { Link } from 'react-router-dom';

function SideNav() {
  return (
    <>
      <div className="w-[20%] h-full p-3 border-r-2  border-zinc-200">
        <h1 className='text-2xl text-white font-bold '>
          <i className="text-[#6556CD] ri-tv-fill mr-2"></i>
          <span className=''>SCSDB</span>
        </h1>

        <nav className='flex flex-col text-zinc-400 text-md gap-3'>
            <h1 className='text-white font-semibold text-xl mt-7 mb-3'> New Feeds</h1>
            <Link to="/trending" className='hover:bg-[#6556CD] hover:text-white p-1 duration-300 rounded-lg'><i  class="mr-2 ri-fire-fill"></i>Trending</Link>
            <Link to="/popular" className='hover:bg-[#6556CD] hover:text-white p-1 duration-300 rounded-lg'><i class="mr-2 ri-bard-fill"></i>Popular</Link>
            <Link to="/movie" className='hover:bg-[#6556CD] hover:text-white p-1 duration-300 rounded-lg'><i class="mr-2 ri-movie-fill"></i>Movies</Link>
            <Link to="/tv"className='hover:bg-[#6556CD] hover:text-white p-1 duration-300 rounded-lg'><i class="mr-2 ri-tv-fill"></i>Tv Shows</Link>
            <Link to="/people" className='hover:bg-[#6556CD] hover:text-white p-1 duration-300 rounded-lg'><i class="mr-2 ri-user-3-fill"></i>People</Link>
        </nav>

        <hr className='border-none h-[1px] bg-zinc-400 mt-5' />

        <nav className='flex flex-col text-zinc-400 text-md '>
        <h1 className='text-white font-semibold text-xl mt-7 mb-3'> Website Information</h1>
            <Link to="/contact"  className='hover:bg-[#6556CD] hover:text-white p-1 duration-300 rounded-lg'><i class=" mr-2 ri-phone-fill"></i>contact us</Link>
            <Link to="/about" className='hover:bg-[#6556CD] hover:text-white p-1 duration-300 rounded-lg'><i class="mr-2 ri-information-fill"></i>about</Link>
        </nav>
      </div>
      
    </>
  );
     
  
}

export default SideNav
