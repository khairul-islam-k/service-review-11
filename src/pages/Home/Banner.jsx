import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import slide_1 from '../../assets/slide-1.png';
import slide_2 from '../../assets/slide-2.png';
import slide_3 from '../../assets/slide-3.png';

const Banner = () => {
    return (
        <div className="carousel w-full lg:h-[500px]">
  <div id="slide1" className="carousel-item relative w-full">
    <img
      src={slide_1}
      className="w-full rounded-2xl" />
      <h3 className='absolute bg-[#ece3e3] py-2 px-3 rounded-lg'>update available</h3>
      <p className='absolute bottom-4 lg:bottom-20 left-2 lg:left-5 text-2xl font-bold lg:text-3xl'>flowering trees need water,sunlight,Pruning and Fertilizing</p>
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
      <p className='absolute bottom-4 lg:bottom-20 left-2 lg:left-5 text-2xl font-bold lg:text-3xl'>some essential pineapple plant care tips is watering, Ideal temperature 18-29'C and Fertilizing</p>
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
      <p className='absolute bottom-4 lg:bottom-20 left-2 lg:left-5 text-2xl font-bold lg:text-3xl'>we need some steps Seed or grafted plant, Watering and soil PH 5.5-5.6</p>
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide2" className="btn btn-circle">❮</a>
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
    );
};

export default Banner;