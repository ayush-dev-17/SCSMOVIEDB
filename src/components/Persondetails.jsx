
import React, {useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncloadperson, removeperson } from "../store/actions/PersonAction";

import {
  useNavigate,
  useParams,
  Link,
  useLocation,
  Outlet,
} from "react-router-dom";
import Loader from "./templates/Loader";
import HorizontalCards from "./templates/HorizontalCards";
import Dropdown from "./templates/Dropdown";

function Persondetails() {
    const{pathname} = useLocation();
    const navigate = useNavigate();
    const {info} = useSelector ((state)=>state.person)
    const {id} = useParams();
    const dispatch = useDispatch();
    const [category , setcategory] = useState("movie")

    
  
    useEffect(()=>{
      dispatch(asyncloadperson(id))
      return ()=>{
        dispatch(removeperson())
      }
    },[id])

  return info ? (
    <div className="px-[10%] w-screen h-[250vh] bg-[#1F1E24] ">
      {/* $$$$$$$$$$Part-1&&&&&&&&&&&&&&&  navigation*/}

      <nav className="h-[10vh] items-center w-full text-zinc-100 flex gap-10 text-xl">
        <Link
          onClick={() => navigate(-1)}
          className="mr-5 hover:text-[#6556CD] ri-arrow-left-line"
        ></Link>
      </nav>

      <div className="w-full flex ">
        {/* #part 2 left poster */}
        <div className="w-[20%] ]">
          <img
            title={info.provider_name}
            className="shadow-[8px_17px_38px_2px_rgba(0,0,0,0.5)] h-[35vh] "
            src={`https://image.tmdb.org/t/p/original/${info.detail.profile_path}`}
            alt=""
          />
          <hr className="mt-5 mb-3 border-none h-[2px] bg-zinc-500" />

          {/* Links and external Links */}

          <div className="text-xl text-white flex gap-x-5">
            <a
              target="_blank"
              href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}/`}
            >
              <i className="ri-global-line"></i>
            </a>

            <a
              target="_blank"
              href={`https://www.facebook.com/${info.externalid.facebook_id}/`}
            >
              <i className="ri-facebook-circle-fill"></i>
            </a>

            <a
              target="_blank"
              href={`https://www.instagram.com/${info.externalid.instagram_id}/`}
            >
              <i className="ri-instagram-fill"></i>
            </a>

            <a
              target="_blank"
              href={`https://twitter.com/${info.externalid.twitter_id}/`}
            >
              <i className="ri-twitter-x-fill"></i>
            </a>
          </div>

          {/* Personal information */}
          <h1 className="text-2xl text-zinc-400 my-2 font-semibold">
            Person Info
          </h1>
          <h1 className="text-lg text-zinc-400  font-semibold">Known for</h1>
          <h1 className=" text-zinc-400  font-semibold">
            {info.detail.known_for_department}
          </h1>
          <h1 className="text-lg text-zinc-400 mt-3 font-semibold">Gender</h1>
          <h1 className=" text-zinc-400">
            {info.detail.gender === 2 ? "male" : "female"}
          </h1>
          <h1 className="text-lg text-zinc-400 mt-3 font-semibold">Birthday</h1>
          <h1 className=" text-zinc-400">{info.detail.birthday}</h1>
          <h1 className="text-lg text-zinc-400 mt-3 font-semibold">Deathday</h1>
          <h1 className=" text-zinc-400">
            {info.detail.deathday ? info.detail.deathday : "still alive"}
          </h1>
          <h1 className="text-lg text-zinc-400 mt-3 font-semibold">
            Place of Birth
          </h1>
          <h1 className=" text-zinc-400">{info.detail.place_of_birth}</h1>
          <h1 className="text-lg text-zinc-400 mt-3 font-semibold">
            Also known as
          </h1>
          <h1 className=" text-zinc-400">
            {info.detail.also_known_as.join(" ")}
          </h1>
        </div>

        {/* #part 3 left poster */}
        <div className="w-[80%] ml-[5%]">
          <h1 className="text-5xl text-zinc-400 mt-3 font-black">
            {info.detail.name}
          </h1>
          <h1 className="text-xl font-semibold  text-zinc-400 mt-4">
            Biography
          </h1>
          <p className="text-sm mt-2 text-zinc-400">{info.detail.biography}</p>
          <h1 className="text-lg font-semibold  text-zinc-400 mt-4">Summary</h1>
          <HorizontalCards trending={info.combinedcredits.cast} />

          <div className="w-full flex justify-between">
            <h1 className="mt-5 text-xl text-zinc-400 font-semibold">Acting</h1>
            <Dropdown
              title="Category"
              options={["tv", "movie"]}
              func={(e) => setcategory(e.target.value)}
            />
          </div>

          <div className=" list-disc w-full h-[50vh] border-2 border-zinc-600 text-zinc-400 p-5 overflow-x-hidden overflow-y-auto shadow-lg shadow-[rgba(255,255,255,.1)] mt-5 ">
            {info[category + "Credits"].cast.map((c, i) => (
              <li key={i} className="hover:text-white duration-300 cursor-pointer mb-5">
                <Link to={`/${category}/details/${c.id}`}>
                  <span >
                    {c.name || c.title || c.original_name || c.original_title}
                  </span>
                  <span className=" block ml-5 mt-3">{c.character && `character name : ${c.character}`} </span>
                </Link>
              </li>
            ))}
          </div>
        </div>
      </div>
    </div>
  ) : (
    <Loader />
  );
  
}

export default Persondetails




{/*  */}