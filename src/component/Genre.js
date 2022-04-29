import React from 'react'
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom'

const Genre = ({genres}) => {
  const params = useParams();
  if(params.id !== undefined){
    genres = genres.genres
  }
    
    var settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        swipeToSlide: true,
        slidesToShow: 5,
        slidesToScroll: 5,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 5,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4,
              initialSlide: 4
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3
            }
          }
        ]
      };
      // console.log(genres)
    return (
        <div className='mb-4 me-5 ms-5'>
        <h1 className='heading'>Genres</h1>
        <Slider {...settings}>
        {genres.length > 0 ? genres.map((genre,indx) => {
            return (
                <Link to={`/genre/${genre.id}`} className="Link" key={genre.id}>
                <div className={`genre bg-dark w-75  ${genre.name}`} key={genre.id} >
                    <div className='genre__title text-light fw-bold'>{genre.name}</div>
                </div>
                </Link>
            )
        }):
        <div className="d-flex justify-content-center" style={{height: "100vh"}}>
          {/* {console.log('loading')} */}
      <div className="spinner-border" style={{width: "3rem", height: "3rem" }}role="status">
      </div>
    </div>}

        </Slider>
    </div>
  )
}

export default Genre