import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import slide_1 from '../../assets/banner-transport.png';
import slide_2 from '../../assets/slide-2.png';
import slide_3 from '../../assets/banner-call-center.png';

const Banner = () => {
  return (
    <div className='w-11/12 mx-auto'>
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src={slide_1}
            className="w-full rounded-2xl" />
          <h3 className='absolute bg-[#ece3e3] py-2 px-3 rounded-lg'>update available</h3>
          <p className='absolute bottom-4 lg:bottom-20 left-2 lg:left-5 text-2xl font-bold lg:text-3xl'>New model car from HG company.</p>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide3" className="btn btn-circle">❮</a>
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src={slide_2}
            className="w-full rounded-2xl" />
          <h3 className='absolute bg-[#ece3e3] py-2 px-3 rounded-lg'>update available</h3>
          <p className='absolute bottom-4 lg:bottom-20 left-2 lg:left-5 text-2xl font-bold lg:text-3xl'>Local pineapple raw market</p>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle">❮</a>
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src={slide_3}
            className="w-full rounded-2xl" />
          <h3 className='absolute bg-[#ece3e3] py-2 px-3 rounded-lg'>update available</h3>
          <p className='absolute bottom-4 lg:bottom-20 left-2 lg:left-5 text-2xl font-bold lg:text-3xl'>wonderful call center</p>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle">❮</a>
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;