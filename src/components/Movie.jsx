import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../utilis/Axios";
import Loader from "./templates/Loader";
import TopNav from "./templates/TopNav";
import Dropdown from "./templates/Dropdown";
import Card from "./templates/Card";
import InfiniteScroll from "react-infinite-scroll-component";

function Movie() {
    const navigate = useNavigate();
    const [category, setCategory] = useState("now_playing");
    const [movie, setMovie] = useState([]);
    const [page, setPage] = useState(1);
    const [hasmore, setHasmore] = useState(true);

    document.title = "SCSDB | Popular " + category.toUpperCase();

    const getMovie = async () => {
      try {
        let { data } = await axios.get(`/movie/${category}?page=${page}`);

        

        if (data.results.length > 0) {
          setPage(page + 1);
          setMovie((prevState) => [...prevState, ...data.results]);
        } else {
          setHasmore(false);
        }
      } catch (err) {
        console.log("errr :", err);
      }
    };

    const refreshHandler = () => {
      if (movie.length === 0) {
        getMovie();
      } else {
        setPage(1);
        setMovie([]);
        getMovie();
      }
    };

    useEffect(() => {
      refreshHandler();
    }, [category]);

    return movie.length > 0 ? (
      <div className="h-full w-full  ">
        <div className=" w-full px-[5%] mb-7 items-center flex justify-between">
          <h1 className="text-2xl text-zinc-400 font-semibold">
            <i
              onClick={() => navigate("/")}
              class="mr-5 hover:text-[#6556CD] ri-arrow-left-line"
            ></i>
            Movie<small className="text-sm text-zinc-600 ml-2">({category})</small>
          </h1>

          <div className="w-[80%] flex items-center">
            <TopNav />
            <Dropdown
              title="Category"
              options={["upcoming", "now_playing", "top_rated", "popular"]}
              func={(e) => setCategory(e.target.value)}
            />
            <div className="w-[1%]"></div>
          </div>
        </div>

        <InfiniteScroll
          dataLength={movie.length}
          next={getMovie()}
          hasMore={hasmore}
          loader={<h1>loading</h1>}
        >
          <Card data={movie} title="movie" />
        </InfiniteScroll>
      </div>
    ) : (
      <Loader />
    );
}

export default Movie;
