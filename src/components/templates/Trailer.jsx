import React from 'react'
import { useSelector } from 'react-redux';
import { useLocation, useNavigate ,Link } from 'react-router-dom';
import ReactPlayer from "react-player";
import NotFound from './NotFound';


function Trailer() {
    const navigate = useNavigate();
    const{pathname} = useLocation();
    const category = pathname.includes("movie") ? "movie" : "tv"
    const youtube = useSelector((state)=>state[category].info.videos)
  return  (
    <div className="absolute top-0 left-0 z-[100] bg-[rgba(0,0,0,0.9)] w-full h-full flex items-center justify-center">
      <Link
        onClick={() => navigate(-1)}
        class=" absolute mr-5 hover:text-[#6556CD] ri-close-fill right-[5%] top-[18%] text-3xl text-white"
      ></Link>

     {youtube ?(<ReactPlayer
        controls
        height={500}
        width={1200}
        url={`https://www.youtube.com/watch?v=${youtube.key}`}
      ></ReactPlayer>):(<NotFound/>)}
    </div>
  )
}

export default Trailer
