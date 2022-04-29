import React from 'react'
import { useParams } from 'react-router-dom'
const SingleGenre = ({genres}) => {
    
    const params = useParams();
    // console.log(genres)

    const genreId = genres.length > 0 ? genres.map(genre => ( 
        genre.id === parseInt(params.id) ? genre.name : null
    )) : ""
    const genreName = genres.length > 0 ? genreId.filter(genre => genre !== null).toString() : null
    
  return (
    <div className='ms-5'>
    <h1 className='heading '>{`Genre: ${genreName}`}</h1>
    
    </div>
  )
}

export default SingleGenre