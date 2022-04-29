import React from 'react'
import { Link } from 'react-router-dom'

const SingleCarousel = ({movie,genre,index}) => {
  
  var movieGenre =[]
  genre.length > 0 ? genre.map(gen => gen === null ? "" : movieGenre.push(gen)): <></>
  
  return (<>
  
    <div className={`carousel-item  ${index===0 ? 'active':''}`} data-bs-interval="3000" >
    <Link to={`/movie/${movie.id}/${movie.title}`} className="Link" >
         
          <div className='row image__overlay'>
            <div className='col-sm-4 flexer '>
              <div className="d-block">
                <h1 className='movie__title'>{movie.title}</h1>
                
                <span className='movie__details text-uppercase fs-3 fw-bolder'>
                {`${movie.original_language}`} 
                <span className="dot"> </span> 
                {`${movieGenre.join(', ')}`} 
                <span className="dot"> </span> 
                {`${movie.release_date.slice(0,4)}`}
                </span>
                
                <p className='fs-5 movie__overview me-5 ms-5' >{movie.overview}</p>
                
              </div>
            </div>
            <div className='col-sm-8'>
              <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} className="d-block backdrop__img w-100" alt="..." />
            </div>  
          </div>
  </Link>
        </div>
        </>
          
          
        
  )
}

export default SingleCarousel