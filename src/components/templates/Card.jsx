import React from 'react'
import { Link } from 'react-router-dom'
import noimg from "/noimg.png"

function Card({data , title}) {
  return (
    <div className="flex flex-wrap w-full h-full px-[5%] bg-[#1F1E24]">
      {data.map((c, i) => (
        <Link
          to={`/${c.media_type || title}/details/${c.id}`}
          className="relative w-[25vh] mr-[5%] mb-[5%] object-cover"
          key={i}
        >
          <img
            className="shadow-[8px_17px_38px_2px_rgba(0,0,0,0.5)] h-[40vh]"
            src={
              c.poster_path ||
              c.backdrop_path ||
              c.profile_path ? `https://image.tmdb.org/t/p/original/${
                c.poster_path || c.backdrop_path || c.profile_path
              }`: noimg
            }
            alt=""
          />
          <h1 className="text-xl text-zinc-200 mt-3 font-semibold">
            {c.name || c.title || c.original_name || c.original_title}
          </h1>

          {c.vote_average && (
            <div className="absolute right-[-10%] bottom-[40%] rounded-full text-xs font-semibold bg-yellow-500 w-[5vh] h-[5vh] flex justify-center items-center text-white">
              {(c.vote_average * 10).toFixed()} <sup>%</sup>
            </div>
          )}
        </Link>
      ))}
    </div>
  );
}

export default Card
