import React, { useEffect, useState } from 'react'
import SideNav from './templates/SideNav';
import TopNav from './templates/TopNav';
import axios from '../utilis/Axios';
import Header from './templates/Header'
import HorizontalCards from './templates/HorizontalCards';
import Dropdown from "./templates/Dropdown";
import Loader from './templates/Loader';
function Home() {
document.title="SCSDB | HomePage"

const [wallpaper , setWallpaper] = useState();
const [trending , setTrending] = useState();
const [category , setCategory] = useState("all");

const getHeaderWallpaper = async()=>{
  try{
    const {data} = await axios.get("/trending/all/day");
    let dataResults =  data.results[(Math.random()*data.results.length).toFixed()];
    setWallpaper(dataResults);

  }catch(err){
    console.log("error :" , err);
  }
};


const getTrending = async () => {
  try {
    const { data } = await axios.get(`/trending/${category}/day`);
    
    setTrending(data.results);
  } catch (err) {
    console.log("error :", err);
  }
};




useEffect(()=>{
  !wallpaper && getHeaderWallpaper();
  getTrending();
} ,[category]);



  return wallpaper && trending ? (
    <>
      <SideNav />
      <div className="w-[80%] h-full overflow-auto overflow-x-hidden ">
        <TopNav />
        <Header wallpaper={wallpaper} />

        <div className="p-5 flex justify-between">
          <h1 className="text-3xl text-zinc-400 font-semibold">Trending</h1>
          <Dropdown title="filter" options={["tv", "movie", "all"]} func={(e)=>setCategory(e.target.value)} />
        </div>

        <HorizontalCards trending={trending} />
      </div>
    </>
  ) : (
    <Loader/>
  );
}

export default Home
