import React from 'react'
import { Link } from 'react-router-dom';

function Header({wallpaper}) {

  return (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,0.1),rgba(0,0,0,0.2),rgba(0,0,0,0.3) ,rgba(0,0,0,0.4)),url(https://image.tmdb.org/t/p/original/${
          wallpaper.backdrop_path || wallpaper.profile_path
        })`,
        backgroundPosition: "top",
        backgroundSize: "cover",
        backgroundRepeat:"no-repeat"
      }}
      className="w-full h-[50vh] flex flex-col justify-end items-start p-[5%] py-[1.5%]"
    >
      <h1 className="w-[70%] text-5xl font-black  text-white">
        {wallpaper.name ||
          wallpaper.title ||
          wallpaper.original_name ||
          wallpaper.original_title}
      </h1>

      <p className="text-white w-[70%] mt-3">
        {wallpaper.overview.slice(0, 200)}...
        <Link to={`/${wallpaper.media_type}/details/${wallpaper.id}`} className="text-blue-400">more</Link>
      </p>

      <p className='text-white '>
        <i class="text-yellow-500 ri-megaphone-fill"></i>{wallpaper.release_date || "Not infrom"}
        <i class="ml-5 text-yellow-500 ri-album-fill"></i>{wallpaper.media_type.toUpperCase()}
      </p>

      <Link to={`/${wallpaper.media_type}/details/${wallpaper.id}/trailer`} className='mt-3 p-3 bg-[#6556CD] rounded text-white  '>Watch Trailer</Link>
    </div>
  );
}

export default Header
