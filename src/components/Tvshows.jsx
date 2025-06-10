import React from 'react'
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from "../utilis/Axios";
import Loader from "./templates/Loader";
import TopNav from "./templates/TopNav";
import Dropdown from "./templates/Dropdown";
import Card from "./templates/Card";
import InfiniteScroll from "react-infinite-scroll-component";

function Tvshows() {
    const navigate = useNavigate();
    const [category, setCategory] = useState("airing_today");
    const [tv, setTv] = useState([]);
    const [page, setPage] = useState(1);
    const [hasmore, setHasmore] = useState(true);

    document.title = "SCSDB | Tvshows";

    const getTvshows = async () => {
      try {
        let { data } = await axios.get(`/tv/${category}?page=${page}`);

        

        if (data.results.length > 0) {
          setPage(page + 1);
          setTv((prevState) => [...prevState, ...data.results]);
        } else {
          setHasmore(false);
        }
      } catch (err) {
        console.log("errr :", err);
      }
    };

    const refreshHandler = () => {
      if (tv.length === 0) {
        getTvshows();
      } else {
        setPage(1);
        setTv([]);
        getTvshows();
      }
    };

    useEffect(() => {
      refreshHandler();
    }, [category]);

    return tv.length > 0 ? (
      <div className="h-full w-full  ">
        <div className=" w-full px-[5%] mb-7 items-center flex justify-between">
          <h1 className="text-2xl text-zinc-400 font-semibold">
            <i
              onClick={() => navigate("/")}
              class="mr-5 hover:text-[#6556CD] ri-arrow-left-line"
            ></i>
            Tvshows
            <small className="text-sm text-zinc-600 ml-2">({category})</small>
          </h1>

          <div className="w-[80%] flex items-center">
            <TopNav />
            <Dropdown
              title="Category"
              options={["on_the_air", "popular", "top_rated", "airing_today"]}
              func={(e) => setCategory(e.target.value)}
            />
            <div className="w-[1%]"></div>
          </div>
        </div>

        <InfiniteScroll
          dataLength={tv.length}
          next={getTvshows()}
          hasMore={hasmore}
          loader={<h1>loading</h1>}
        >
          <Card data={tv} title="tv" />
        </InfiniteScroll>
      </div>
    ) : (
      <Loader />
    );
}

export default Tvshows
