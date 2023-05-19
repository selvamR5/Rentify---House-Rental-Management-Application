import React, { useEffect, useState } from 'react';
import './RecomApartments.css';
import Card from "./Card";
import { Grid } from "@mui/material";
import { Link } from 'react-router-dom';


function RecomApartments() {

  const [properties, setProperties] = useState([]);

  useEffect(() => {
    // Fetch properties from the backend API
    fetch(`http://localhost:3001/property/get/all`)
        .then((response) => response.json())
        .then((response) => {
            console.log(response)
            setProperties(response);
        })
        .catch((error) => {
            console.error(error);
        });
}, []);


function renderProperties() {
  var propertyCards = [];
  console.log('properties', properties[0])

  for (var i = 0; i < properties.length; i++) {
      var property = properties[i];
      console.log('property', property)
      var address = `${property.address}, ${property.city}, ${property.state}, ${property.zip}`;
      var bedBath = `${property.bedNo} Beds, ${property.bathNo} bath`;
      var price = `$ ${property.rentPrice}`;
      var propertyInfoURL = `/detailed-propertyInfo/${property._id}`
      var title= `${property.title}`
      var images= `${property.pictures[0]}`

      propertyCards.push(
          <>
              <Grid item xs={12} md={6} lg={4}>
                  <Link to={propertyInfoURL} key={property._id}>
                      <Card
                          src={images}
                          address={address}
                          title={title}
                          beds={bedBath}
                          price={price}
                      />
                  </Link>
              </Grid >

          </>
      )

  }
  return propertyCards;
}

  return (
    <div className='recomapartments'>
      <h1>Explore Rentals Near You</h1>
      <div className='rentHomes'>
                {properties.length > 0 ? (
                    <Grid container spacing={1}>
                        {renderProperties()}
                    </Grid>
                ) : (
                    <>
                    </>
                )}
            </div>
    </div>
  )
}

export default RecomApartments;
