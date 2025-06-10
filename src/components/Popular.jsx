import React, { useState , useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from "../utilis/Axios";
import Loader from './templates/Loader';
import TopNav from './templates/TopNav';
import Dropdown from './templates/Dropdown';
import Card from "./templates/Card";
import InfiniteScroll from "react-infinite-scroll-component";

function Popular() {
  const navigate = useNavigate();
  const[category , setCategory] = useState("movie");
  const[popular , setPopular] = useState([]);
  const[page , setPage] = useState(1);
  const[hasmore , setHasmore] = useState(true);

  document.title = "SCSDB | Popular " + category;

  const getPopular = async () => {
    try {
      let { data } = await axios.get(
        `${category}/popular?page=${page}`
      );

      console.log(data)

      if (data.results.length > 0) {
        setPage(page + 1);
        setPopular((prevState) => [...prevState, ...data.results]);
      } else {
        setHasmore(false);
      }
    } catch (err) {
      console.log("errr :", err);
    }
  };

  const refreshHandler = () => {
    if (popular.length === 0) {
      getPopular();
    } else {
      setPage(1);
      setPopular([]);
      getPopular();
    }
  };

  useEffect(() => {
    refreshHandler();
  }, [category]);

  return popular.length > 0 ? (
    <div className="h-full w-full  ">
      <div className=" w-full px-[5%] mb-7 items-center flex justify-between">
        <h1 className="text-2xl text-zinc-400 font-semibold">
          <i
            onClick={() => navigate("/")}
            class="mr-5 hover:text-[#6556CD] ri-arrow-left-line"
          ></i>
          Popular
        </h1>

        <div className="w-[80%] flex items-center">
          <TopNav />
          <Dropdown
            title="Category"
            options={["movie", "tv"]}
            func={(e) => setCategory(e.target.value)}
          />
          <div className="w-[1%]"></div>
          
        </div>
      </div>

      <InfiniteScroll
        dataLength={popular.length}
        next={getPopular()}
        hasMore={hasmore}
        loader={<h1>loading</h1>}
      >
        <Card data={popular} title={category} />
      </InfiniteScroll>
    </div>
  ) : (
    <Loader />
  );
}

export default Popular
