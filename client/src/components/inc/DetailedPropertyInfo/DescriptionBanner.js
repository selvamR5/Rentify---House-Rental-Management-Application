import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import "./DescriptionBanner.css"

const DescriptionBanner = ({ images,description }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className='descriptionBanner'>
    <div className='sliding-images'>
      <div className='image-container'>
        <img src={images[currentIndex]} alt='Sliding Image' />
      </div>
      <button className='prev' onClick={handlePrev}>
        <FaChevronLeft />
      </button>
      <button className='next' onClick={handleNext}>
        <FaChevronRight />
      </button>
    </div>
    <div className='description'>
      <h2 className='about'>
        About
      </h2>
      <p className='description-content'>
     {description}
      </p>

    </div>
    </div>
  );
};

export default DescriptionBanner;
