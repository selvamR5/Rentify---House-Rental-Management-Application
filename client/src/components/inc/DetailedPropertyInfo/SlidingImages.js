import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import "./SlidingImages.css"

const SlidingImages = ({ images }) => {
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
  );
};

export default SlidingImages;
