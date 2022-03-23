import React, { useEffect, useState } from 'react'
import axios from "./axios"
import "./App.css"
import requests from './requests'
import YouTube from 'react-youtube'
import movieTrailer from "movie-trailer"

const imageurl="https://image.tmdb.org/t/p/original"

const Url = "https://api.themoviedb.org/3"
function Row({ title, fetchURL,isLarge }) {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, settrailerUrl] = useState('')
    useEffect(() => {
        async function fetchdata() {
            return fetch(Url + fetchURL)

                .then((response) => response.json())
                .then((request) => {  setMovies(request.results)
                    return request;
                })

            

        }



        


        fetchdata()
    }
        , [fetchURL])
        const opts ={
            height: "390px",
            width:"100%",
            playerVars:{
                autoplay:1,
            },
            
        }
        
    const handleClick=(movie)=>{
        if (trailerUrl){
            settrailerUrl('')
        }
        else{
            movieTrailer(movie?.title || movie?.name )
            .then((url)=>{
                const UrlParams=new URLSearchParams(new URL(url).search);
               settrailerUrl( UrlParams.get('v'))

            })
            .catch(error=> console.log(error))
        }
    }


    return (

        <div className="row">
            <h3 className="row_title">{title}</h3>
            <div className="row_posters">
                {movies.map(movie=>{
                    return <img
                    onClick={() => handleClick(movie)}
                    key={movie.id} className={`row_poster ${isLarge && "row_posterlarge"}`}
                     src={`${imageurl}${isLarge? movie.poster_path : movie.backdrop_path}`} alt="" />
                })}
                
            </div>
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>}
        </div>
    )
}

export default Row
