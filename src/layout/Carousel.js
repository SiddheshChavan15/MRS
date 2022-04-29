import React,{useState,useEffect} from 'react'
import SingleCarousel from '../component/SingleCarousel'
import axios from 'axios'
const Carousel = ({genres}) => {
    const [movies,setMovies] = useState([])
    
    const fetchMovies = async () => {
        const res = await axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=4c84e185bd2955be5432fcc0687697d8&language=en-US&page=1')
        setMovies(res.data.results)
        // console.log(res.data.results)
    }
    useEffect(() => {
        fetchMovies()
    },[])
    // console.log(genres)
    // setMovies(movies.filter(movie => movie.original_language.includes("en")))
  
  return (
    <div id="carouselExampleControls" className="carousel text-center slide " data-bs-ride="carousel">

        {movies.length > 0 ?
        <>
  <div className="carousel-inner ">
  {
    movies.filter(movie => movie.original_language.includes("en")).map((movie, index) => {
     
      return (
        
    <SingleCarousel movie={movie} index={index} key={movie.id} genre={genres.map(genre => (
      // movie.genre_ids.includes(genre.id) ? genre.name : null
    genre.id === movie.genre_ids[0] 
    ? genre.name : null
  )
  )}/>
  
  )
  })
  }
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
  </>
  :
  <div className="d-flex justify-content-center" style={{height: "100vh"}}>
          {/* {console.log('loading')} */}
      <div className="spinner-border" style={{width: "3rem", height: "3rem" }}role="status">
      </div>
    </div>
}

  </div>
)
}
export default Carousel