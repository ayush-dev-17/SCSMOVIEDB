import React, { useEffect, useState } from 'react'
import axios from '../../utilis/Axios.jsx'
import {Link} from "react-router-dom"
import noimg from "/noimg.png"
// import { useEffect } from 'react';

function TopNav() {

  const[query , setquery] = useState("");
  const[searches , setSearches] = useState([]);
  const getSearches = async()=>{
    try{
        let {data} = await axios.get(`/search/multi?query=${query}`);
        setSearches(data.results);
    }catch(err){
      console.log("error :" ,err);
    }
  };

  useEffect(()=>{
    getSearches();

  },[query]);

  return (
    <div className="w-[80%] m-auto h-[10vh]  relative flex  items-center gap-20">
      <i class="text-zinc-400 text-xl ri-search-line"></i>
      <input
        onChange={(e) => setquery(e.target.value)}
        value={query}
        className="w-[50%]  px-4 text-md border-none outline-none p-2 text-zinc-300 rounded-md bg-tranaparent border-[2px]"
        type="text"
        placeholder="search anything"
      />

      {query.length > 0 && (
        <i
          onClick={() => setquery("")}
          class="text-zinc-400 text-xl ri-close-line"
        ></i>
      )}

      <div className="z-[100] absolute w-[50%]  max-h-[50vh] bg-zinc-200 top-[100%] left-[12%] overflow-auto rounded">
        {searches.map((s, i) => (
          <Link to={`/${s.media_type}/details/${s.id}`}
            key={i}
            className="hover:bg-zinc-300 hover:text-black font-semibold text-zinc-600 flex items-center justify-start border-b-2 border-zinc-100 p-5 w-[100%]"
          >
            <img className='w-[10vh] h-[10vh] rounded mr-5 object-cover shadow-lg'
              src={s.backdrop_path || s.profile_path ?`https://image.tmdb.org/t/p/original/${s.backdrop_path || s.profile_path}` : noimg}
              alt=""
            />
            <span>
              {s.name || s.title || s.original_name || s.original_title}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default TopNav

