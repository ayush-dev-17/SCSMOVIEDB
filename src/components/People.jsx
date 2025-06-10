
import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "../utilis/Axios";
import Loader from "./templates/Loader";
import TopNav from "./templates/TopNav";
import Dropdown from "./templates/Dropdown";
import Card from "./templates/Card";
import InfiniteScroll from "react-infinite-scroll-component";

function People() {
    const navigate = useNavigate();
    const [category, setCategory] = useState("popular");
    const [person, setPerson] = useState([]);
    const [page, setPage] = useState(1);
    const [hasmore, setHasmore] = useState(true);

    document.title = "SCSDB | Tvshows";

    const getPerson = async () => {
      try {
        let { data } = await axios.get(`/person/${category}?page=${page}`);

        console.log(data);

        if (data.results.length > 0) {
          setPage(page + 1);
          setPerson((prevState) => [...prevState, ...data.results]);
        } else {
          setHasmore(false);
        }
      } catch (err) {
        console.log("errr :", err);
      }
    };

    const refreshHandler = () => {
      if (person.length === 0) {
        getPerson();
      } else {
        setPage(1);
        setPerson([]);
        getPerson();
      }
    };

    useEffect(() => {
      refreshHandler();
    }, [category]);

  
    return person.length > 0 ? (
      <div className="h-full w-full  ">
        <div className=" w-full px-[5%] mb-7 items-center flex justify-between">
          <h1 className="text-2xl text-zinc-400 font-semibold">
            <i
              onClick={() => navigate("/")}
              class="mr-5 hover:text-[#6556CD] ri-arrow-left-line"
            ></i>
            People
            <small className="text-sm text-zinc-600 ml-2">({category})</small>
          </h1>

          <div className="w-[80%] flex items-center">
            <TopNav />
            
            <div className="w-[1%]"></div>
          </div>
        </div>

        <InfiniteScroll
          dataLength={person.length}
          next={getPerson()}
          hasMore={hasmore}
          loader={<h1>loading</h1>}
        >
          <Card data={person} title="person" />
        </InfiniteScroll>
      </div>
    ) : (
      <Loader />
    );
}

export default People
