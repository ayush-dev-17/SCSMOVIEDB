import React from 'react'
import Home from "./components/Home"
import Trending from './components/Trending';
import Popular from './components/Popular';
import Movie from './components/Movie';
import Tvshows from './components/Tvshows';
import People from "./components/People";
import About from "./components/About"
import Contact from "./components/Contact"
import{Routes , Route} from "react-router-dom"
import Moviedetails from './components/Moviedetails';
import Tvdetails from './components/Tvdetails';
import Persondetails from './components/Persondetails';
import Trailer from './components/templates/Trailer';
import NotFound from './components/templates/NotFound';

function App() {
  return (
    <div className="bg-[#1F1E24] flex w-full h-screen">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/trending" element={<Trending />}></Route>
        <Route path="/popular" element={<Popular />}></Route>

        <Route path="/movie" element={<Movie />}> </Route>

        <Route path="/movie/details/:id" element={<Moviedetails />}>
          <Route path="/movie/details/:id/trailer" element={<Trailer/>}></Route>
        </Route>
        

        <Route path="/tv" element={<Tvshows />}> </Route>

        <Route path="/tv/details/:id" element={<Tvdetails />}>
          <Route path="/tv/details/:id/trailer" element={<Trailer/>}></Route>
        </Route>
     

        <Route path="/people" element={<People />}> </Route>
        <Route path="/person/details/:id" element={<Persondetails/>}/>
        
          
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>

        <Route path="*" element={<NotFound/>}></Route>

      </Routes>
    </div>
  );
}

export default App
