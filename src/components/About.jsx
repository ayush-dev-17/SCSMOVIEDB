import React from 'react'
import { useNavigate } from 'react-router-dom';

function About() {
    const navigate = useNavigate();
  return (
    <div className="text-zinc-200 px-[20%] py-[2%]">
      <h1 className="text-3xl font-semibold">
        <i
          onClick={() => navigate("/")}
          class="mr-5 hover:text-[#6556CD] ri-arrow-left-line"
        ></i>
        About-Us
      </h1>

      <p className="mt-2 font-sm text-md mb-5">
        Welcome to SCSDB your gateway to the world of movies and TV shows! We
        are passionate about entertainment and committed to providing you with
        the latest information on your favorite movies, TV series, actors, and
        more.  To deliver accurate and
        up-to-date data, we proudly use The Movie Database SCSDB API – a
        powerful, community-built movie and TV database. TMDB offers a rich
        collection of metadata, including cast, crew, release dates, posters,
        ratings, trailers, and much more, which allows us to bring an engaging
        and informative experience to our users.
      </p>
      <h1 className="text-2xl font-semibold">what we offer :</h1>
      <ul className="list-disc mt-3 ml-5">
        <li className="text-md">Detailed movie and TV show information</li>
        <li className="text-md">Latest trailers and posters</li>
        <li className="text-md">Cast and crew profiles</li>
        <li className="text-md">Trending and top-rated content</li>
        <li className="text-md">Search and discovery features</li>
      </ul>
      <h1 className="text-2xl font-semibold mt-4">Powered by TMDB API</h1>
      <p className="mt-2 font-sm mb-5">
        All our data is sourced from The Movie Database (TMDB), an open-source
        and ever-growing community of film and television fans. We are not
        affiliated with TMDB but gratefully use their API to enhance your
        entertainment discovery experience.
      </p>
      <hr className=" text-zinc-600"/>
    </div>
  );
}

export default About
