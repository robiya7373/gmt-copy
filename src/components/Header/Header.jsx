import React from 'react'
import Navbar from './Navbar/Navbar'
import Carousel from './Slider/Carousel'
import SeorchNav from './Seorch/SeorchNav'
import Katalog from './Katalog/Katalog'

const Header = () => {
  return (
    <div className=''>
        <Navbar/>
        <hr className=" text-[rgb(229,226,238)]" />
        <SeorchNav/>
        <hr className=" text-[rgb(229,226,238)]" />
        <Katalog/>
        <hr className=" text-[rgb(229,226,238)]" />
        <Carousel/>
    </div>
  )
}

export default Header