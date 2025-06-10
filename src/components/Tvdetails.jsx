import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncloadtv, removetv } from "../store/actions/tvAction";
import {
  useNavigate,
  useParams,
  Link,
  useLocation,
  Outlet,
} from "react-router-dom";
import Loader from "./templates/Loader";
import HorizontalCards from "./templates/HorizontalCards";

function Tvdetails() {
  const{pathname} = useLocation();
    const navigate = useNavigate();
    const {info} = useSelector ((state)=>state.tv)
    const {id} = useParams();
    const dispatch = useDispatch();
  
    useEffect(()=>{
      dispatch(asyncloadtv(id))
      return ()=>{
        dispatch(removetv())
      }
    },[id])

    return info ? (
      <div
        style={{
          background: `linear-gradient(rgba(0,0,0,0.1),rgba(0,0,0,0.2),rgba(0,0,0,0.3) ,rgba(0,0,0,0.4)),url(https://image.tmdb.org/t/p/original/${info.detail.backdrop_path})`,
          backgroundPosition: "top",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        className="relative w-screen h-[210vh] px-[10%]"
      >
        {/* $$$$$$$$$$Part-1&&&&&&&&&&&&&&&  navigation*/}

        <nav className="h-[10vh] items-center w-full text-zinc-100 flex gap-10 text-xl">
          <i
            onClick={() => navigate(-1)}
            class="mr-5 hover:text-[#6556CD] ri-arrow-left-line"
          ></i>

          <a target="_blank" href={info.detail.homepage}>
            <i class="ri-external-link-line"></i>
          </a>

          <a
            target="_blank"
            href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}/`}
          >
            <i class="ri-global-line"></i>
          </a>

          <a
            target="_blank"
            href={`https://www.imdb.com/title/${info.externalid.imdb_id}/`}
          >
            imdb
          </a>
        </nav>

        {/* $$$$$$$$$$Part-2&&&&&&&&&&&&&&&  details and poster*/}

        <div className="w-full flex ">
          <img
            title={info.provider_name}
            className="shadow-[8px_17px_38px_2px_rgba(0,0,0,0.5)] h-[58vh] "
            src={`https://image.tmdb.org/t/p/original/${
              info.detail.poster_path || info.detail.backdrop_path
            }`}
            alt=""
          />

          <div className="context ml-[5%] text-white">
            <h1 className="text-5xl font-black text-white flex items-center">
              {info.detail.name ||
                info.detail.title ||
                info.detail.original_name ||
                info.detail.original_title}
              <small className="text-2xl font-bold text-zinc-300 ">
                ({info.detail.first_air_date.split("-")[0]})
              </small>
            </h1>

            <div className="mt-3 mb-3 flex text-white items-center gap-x-5">
              <span className=" bottom-[40%] rounded-full text-xs font-semibold bg-yellow-500 w-[5vh] h-[5vh] flex justify-center items-center text-white">
                {(info.detail.vote_average * 10).toFixed()} <sup>%</sup>
              </span>
              <h1 className="w-[60px] font-semibold text-2xl leading-6">
                User Score
              </h1>
              <h1>{info.detail.first_air_date}</h1>
              <h1>{info.detail.genres.map((g) => g.name).join(",")}</h1>
              <h1>{info.detail.runtime}min</h1>
            </div>

            <h1 className="text-xl font-semibold italic text-zinc-200">
              {info.detail.tagline}
            </h1>

            <h1 className="text-2xl mt-3 mb-3 ">tv Translated</h1>
            <p className="mb-7">{info.translations.join(", ")}</p>

            <Link
              className=" px-5 py-3 bg-[#6556CD] rounded-lg"
              to={`${pathname}/trailer`}
            >
              <i class="text-sm mr-2 ri-play-fill"></i>
              Play Trailer
            </Link>
          </div>
        </div>

        {/* $$$$$$$$$$Part-3&&&&&&&&&&&&&&&  details and poster*/}

        <div className="w-[80%] flex flex-col gap-y-5 mt-10">
          {info.watchproviders && info.watchproviders.buy && (
            <div className="flex gap-x-10 items-center text-white">
              <h1>Buy Now</h1>
              {info.watchproviders.buy.map((w, i) => (
                <img
                  key={i}
                  title={w.provider_name}
                  className="w-[5vh] h-[5vh] object-fit rounded-md "
                  src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                  alt=""
                />
              ))}
            </div>
          )}

          {info.watchproviders && info.watchproviders.rent && (
            <div className="flex gap-x-10 items-center text-white">
              <h1>Available on rent</h1>
              {info.watchproviders.rent.map((w, i) => (
                <img
                  key={i}
                  title={w.provider_name}
                  className="w-[5vh] h-[5vh] object-fit rounded-md "
                  src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                  alt=""
                />
              ))}
            </div>
          )}
        </div>

        {/* $$$$$$$$$$Part-4&&&&&&&&&&&&&&& Recommediation and similar*/}
        <hr className="mt-7 mb-3 border-none h-[2px] bg-zinc-500" />
        <h1 className="text-3xl font-bold text-white ">Seasons</h1>
        <div className="w-[100%] flex overflow-y-hidden  p-5 ">
          {info.detail.seasons.length > 0 ? (
            info.detail.seasons.map((s, i) => (
              <div className="w-[15vh] mr-[11%]">
                <img
                  key={i}
                  className="shadow-[8px_17px_38px_2px_rgba(0,0,0,0.5)] h-[40vh] min-w-[14vw]"
                  src={`https://image.tmdb.org/t/p/original/${s.poster_path}`}
                  alt=""
                />
                <h1 className="text-xl text-zinc-200 mt-3 w-[12vw] font-semibold">
                  {s.name 
                    }
                </h1>
              </div>
            ))
          ) : (
            <h1 className="text-3xl text-white font-black text-center mt-5">
              Nothing to show
            </h1>
          )}
        </div>

        {/* $$$$$$$$$$Part-5&&&&&&&&&&&&&&& Recommediation and similar*/}
        <hr className="mt-7 mb-3 border-none h-[2px] bg-zinc-500" />
        <h1 className="text-3xl font-bold text-white ml-4  ">
          Recommendation & Similar stuff
        </h1>

        <HorizontalCards
          trending={
            info.recommendations.length > 0
              ? info.recommendations
              : info.similar
          }
        />
        <Outlet />
      </div>
    ) : (
      <Loader />
    );
}

export default Tvdetails;
