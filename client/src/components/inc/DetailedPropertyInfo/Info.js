import React from 'react';
import './Info.css'
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import Contact from './Contact';
import Amenities from './Amenities';
import { Rating } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
const Info = ({ name, address, SquareFeet, price, beds, baths,rating}) => {
  return (
   <div className='details-contact'>
    
    <div className='apartment-details-container'>
      <div className='Name'>
        <h2 className='name_info'>{name}</h2>
        <p className='address_info'>{address}</p>
        <Rating
      name="star-rating"
      value={rating}
      precision={0.5}
      emptyIcon={<StarIcon style={{ color: 'grey'}} />}
      icon={<StarIcon style={{ color:'rgb(133, 57, 57)' }} />}
    />
      </div>
      <div className='info-grid'>
      <Container >
        <Row >
          <Col xs={3} className='info'>
            <h4 className='heading'>SquareFeet</h4>
            <p className='numbers'>{SquareFeet}</p>
          </Col>
          <Col xs={3} className='info'>
            <h4 className='heading'>Price</h4>
            <p className='numbers'>{price}</p>
          </Col>
          <Col xs={3} className='info'>
            <h4 className='heading'>Beds</h4>
            <p className='numbers'>{beds}</p>
          </Col>
          <Col xs={3} className='info'>
            <h4 className='heading'>Baths</h4>
            <p className='numbers'>{baths}</p>
          </Col>
        </Row>
      </Container>
      </div>
   <div className='amenities_list'>
    <h2>
      Amenities
    </h2>
    <div>
      <Amenities/>
    
    </div>

   </div>
    </div>
    <div className='contact'>
      <Contact/>
    </div>


    </div>

    

  );
};

export default Info;
