import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import TopNav from './templates/TopNav';
import Dropdown from './templates/Dropdown';
import axios from '../utilis/Axios';
import Loader from './templates/Loader';
import Card from './templates/Card';
import InfiniteScroll from "react-infinite-scroll-component";


function Trending() {
    let navigate = useNavigate();
    const [category , setCategory] = useState("all");
    const [duration , setDuration] = useState("day");
    const [trending , setTrending] = useState([]);
    const [page , setPage] = useState(1);
    const [hasmore , setHasmore] = useState(true)
    document.title = "SCSDB | Trending " + category.toUpperCase();

    const getTrending = async()=>{
      try{
          let {data} = await axios.get(`/trending/${category}/${duration}?page=${page}`);

          if(data.results.length>0){
            setPage(page + 1);
            setTrending((prevState) => [...prevState, ...data.results]);
          }else{
            setHasmore(false)
          }
          
      }catch(err){
        console.log("errr :" , err)
      }
    }
    
    const refreshHandler = ()=>{
      if(trending.length===0){
        getTrending();
      }
      else{
         setPage(1)
         setTrending([]);
         getTrending()
      }
    }

    useEffect(()=>{
      refreshHandler();
    },[category , duration])

  return trending.length>0 ? (
    <div className="h-full w-full  ">
      <div className=" w-full px-[5%] mb-7 items-center flex justify-between">
        <h1 className="text-2xl text-zinc-400 font-semibold">
          <i
            onClick={() => navigate("/")}
            class="mr-5 hover:text-[#6556CD] ri-arrow-left-line"
          ></i>
          Trending
        </h1>

        <div className='w-[80%] flex items-center'>
          <TopNav />
          <Dropdown
            title="Category"
            options={["movie", "tv", "all"]}
            func={(e)=>setCategory(e.target.value)}
          />
          <div className="w-[1%]"></div>
          <Dropdown title="Duration" options={["week", "day"]} func={(e)=>setDuration(e.target.value)} />
        </div>
      </div>

      <InfiniteScroll 
      dataLength={trending.length} 
      next={getTrending()} 
      hasMore={hasmore}
      loader={<h1>loading</h1>}>

        <Card data = {trending} title={category}/>

      </InfiniteScroll>

    </div>
  ):<Loader/>
}

export default Trending
