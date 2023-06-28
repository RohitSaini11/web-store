import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
// import { RxDotFilled } from 'react-icons/rx';

function Slider() {
  const slides = [
    {
      url: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80',
      headline: "Power and Portability at your Fingertips",
      body: "Discover our wide range of laptops for all your computing needs. From ultrabooks to gaming laptops, our selection offers the perfect combination of power and portability for your lifestyle.",
      category: "laptop",
    },
    {
      url: 'https://images.unsplash.com/photo-1611926653670-e18689373857?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9iaWxlJTIwYWR2ZXJ0aXNpbmd8ZW58MHx8MHx8fDA%3D&w=1000&q=80',
      headline: "Stay Connected on the Go",
      body: "Keep up with the latest trends and stay connected on-the-go with our selection of smartphones. Choose from top brands and affordable options, with advanced features to enhance your mobile experience.",
      category: "smartphone",
    },
    {
      url: 'https://images.unsplash.com/photo-1619037961390-f2047d89bc55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c21hcnQlMjB3YXRjaGVzfGVufDB8fDB8fHwy&auto=format&fit=crop&w=500&q=60',
      headline: "Track your Fitness and Stay Connected",
      body: "Enhance your lifestyle with our range of smartwatches. Monitor your fitness goals and stay connected to your digital life with ease. Choose from popular brands and a variety of styles and features.",
      category: "smartwatch",
    },
    {
      url: 'https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2253&q=80',
      headline: "The Ultimate Gaming Experience",
      body: "Take your gaming experience to the next level with our high-performance graphics cards. Choose from top brands and the latest technology for smooth and fast gameplay.",
      category: "graphics card",
    },
    {
      url: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2lyZWxlc3MlMjBlYXJwaG9uZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
      headline: "Listen in Style and Comfort",
      body: "Elevate your audio experience with our selection of earbuds and headphones. Choose from the latest models and top brands, with noise-cancelling and wireless options for a customized listening experience.",
      category: "earbuds",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

//   const goToSlide = (slideIndex) => {
//     setCurrentIndex(slideIndex);
//   };

  return (
    <div className=' h-[700px] w-full m-auto  relative group'>
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className='w-full h-full bg-center bg-cover hover:backdrop-blur-lg duration-500 flex justify-center items-center'
      >
        
        <div className='flex flex-col gap-5 items-start pl-20  bg-black/70 w-full h-full justify-center'>
            <h1 className='text-7xl text-violet-50 font-medium w-4/5'>{slides[currentIndex].headline}</h1>
            <p  className="text-gray-50 w-3/5"> {slides[currentIndex].body}</p>
            <Link 
                to='/Product'
                className=" text-violet-50  border mt-4 border-violet-50 hover:border-orange-400 hover:text-orange-500 duration-300 py-2 px-6"
            >
                Shop Now
            </Link>
        </div>
        
      </div>
      {/* Left Arrow */}
      <div className='hidden group-hover:block z-[1] absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/90 text-white cursor-pointer'>
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className='hidden group-hover:block z-[1] absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/90 text-white cursor-pointer'>
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      {/* <div className='flex top-4 text-gray-400 justify-center py-2'>
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className='text-2xl cursor-pointer'
          >
            <RxDotFilled />
          </div>
        ))}
      </div> */}
    </div>
  );
}

export default Slider;