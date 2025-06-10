import React from 'react'
import { Link } from "react-router-dom";
import noimg from "/noimg.png";
// import Dropdown from './Dropdown';

function HorizontalCards({trending}) {
  return (
    <div className="w-full h-[40vh] mb-25  p-5">
      {/* <div className="w-[15%] h-full  bg-green-500 "> </div> */}
      <div className="w-[100%] flex overflow-y-hidden">
        {trending.length > 0 ? (
          trending.map((d, i) => (
            <Link
              to={`/${d.media_type}/details/${d.id}`}
              key={i}
              className="min-w-[19%] h-[45vh]  mr-5 bg-zinc-900 mb-3"
            >
              <img
                className="w-full h-[50%]  object-cover"
                src={
                  d.backdrop_path ||
                  d.poster_path ?`https://image.tmdb.org/t/p/original/${
                    d.backdrop_path || d.poster_path
                  })`: noimg
                }
                alt=""
              />

              <div className="text-white p-3 h-[45%] overflow-y-auto ">
                <h1 className=" text-xl font-semibold ">
                  {" "}
                  {d.title || d.name || d.original_name || d.original_title}
                </h1>

                <p className="mt-2">
                  {d.overview.slice(0, 50)}...
                  <span className="text-zinc-500">...more</span>
                </p>
              </div>
            </Link>
          ))
        ) : (
          <h1 className="text-3xl text-white font-black text-center mt-5">
            Nothing to show
          </h1>
        )}
      </div>
    </div>
  );
}

export default HorizontalCards
