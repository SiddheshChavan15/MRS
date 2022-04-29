import React from 'react'
import Search from '../component/Search';
import Carousel from '../layout/Carousel';
import Genre from '../component/Genre';
const HomePage = ({genres}) => {
  return (
    <>
      <Carousel genres={genres}/>
      <Search />
      {/* <Genre genres={genres}/> */}
    </>    
  )
}

export default HomePage