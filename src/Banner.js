import React, { useEffect, useState } from 'react'
import requests from "./requests"

const Umm = "https://api.themoviedb.org/3/discover/tv?api_key=5a216771946f309ad99eae0d3155b28d&with_networks=213"

function Banner(fetchURL) {
    const [banner, setBanner] = useState([])
    useEffect(() => {
        async function fetchbanner() {
            return fetch(Umm)
                .then((response) => response.json())
                .then((data) => {
                    setBanner(data.results[Math.floor(Math.random() * data.results.length - 1)])
                    return data;
                })
        }

        fetchbanner()
    }


        , [])
    console.log(banner)
    return (
        <header className="banner"
            style={{
                backgroundSize: "cover",
                backgroundImage: `url(https://image.tmdb.org/t/p/original${banner?.backdrop_path})`,
                backgroundPosition: "center center",
            }}
             >
            <div className="banner_contents">
                <h1 className='banner_title'>{banner.name}</h1>
                <button className="btn">Play</button>
                <button className="btn">My List</button>
                <h1 className="overview">{banner.overview}</h1>
               
            </div>
            <div className="banner_fade"/>
        </header>
    )
}

export default Banner
