import React from 'react';
import './Info.css';

const Info = ({ name, address,SquareFeet,price,beds,baths,description}) => {
  return (
    <div className="apartment-details-container">
      
      <div className='Name'>
        <h2 className='name_info'> {name} </h2>
        <p className='address_info'>{address}</p>
      </div>
      <div className='SquareFeet'>
        <h2 className='SquareFeet_heading'>SquareFeet</h2>
        <p className='SquareFeet_info'>{SquareFeet}</p>
      </div>
      <div className='Price'>
        <h2 className='price_heading'>Price</h2>
        <p className='price_info'>{price}</p>
      </div>
      <div className='Beds'>
        <h2 className='beds_heading'>Beds</h2>
        <p className='beds_info'>{beds}</p>
      </div>
      <div className='Baths'>
        <h2 className='Baths_heading'>Baths</h2>
        <p className='Baths_info'>{baths}</p>
      </div>
      <div className='description'>
        <h2 className='description_heading'>Description</h2>
        <p className='description_info'>{description}</p>
      </div>
    
    </div>
  );
}

export default Info;
