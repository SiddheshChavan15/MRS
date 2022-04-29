import React,{useState,useEffect} from 'react'
import axios from 'axios';
import {  useNavigate } from 'react-router-dom';
const RecommendedMovies = ({movieId}) => {
    const [movie,setMovie] = useState({})
    // console.log(movieId)
    const navigate = useNavigate()
    const clickHandler = () => {
        navigate(`/movie/${movieId}/${movie.title}`,{replace: true}) 
        window.location.reload()
        
    }
    const fetchMovie = async () => {
        const res = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=4c84e185bd2955be5432fcc0687697d8&language=en-US`)
        setMovie(res.data)
        // console.log(res.data)
    }
    useEffect(() => {
        fetchMovie()
    },[])
    return (
      

    <div className="poster-lg" onClick={() => clickHandler()}>
    {/* {console.log(typeof(movie.poster_path)==='string')} */}
        {
            typeof(movie.poster_path)==='string' ? <img className="poster" style={{borderRadius: 40,cursor: "pointer"}} alt={`${movie.name}`} height={400} width={250} src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} /> :  <></> }

      </div>
        
  )
}

export default RecommendedMovies