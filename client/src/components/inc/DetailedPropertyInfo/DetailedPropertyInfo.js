import React, { useEffect, useState } from 'react';
import DescriptionBanner from "./DescriptionBanner.js";
import Info from "./Info"
import { useParams } from 'react-router-dom';

function DetailedPropertyInfo() {

  const { propertyId } = useParams();
  const [property, setProperty] = useState(null);


  useEffect(() => {
    // Fetch properties from the backend API
    fetch(`http://localhost:3001/property/get/${propertyId}`)
      .then((response) => response.json())
      .then((response) => {
        console.log(response)
        setProperty(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [propertyId]);

  console.log(property)

  const images = [
    'https://a0.muscache.com/im/pictures/miso/Hosting-740807800483774592/original/6491cdaf-0dfa-46ad-b93a-a3f05382cbb1.jpeg?im_w=720',
    'https://a0.muscache.com/im/pictures/miso/Hosting-717383292590854818/original/b7582c33-4bc8-4247-bafd-f9f7a23fe471.jpeg?im_w=720',
    'https://a0.muscache.com/im/pictures/miso/Hosting-740807800483774592/original/6491cdaf-0dfa-46ad-b93a-a3f05382cbb1.jpeg?im_w=720',

  ];


  function renderPropInfo() {
    var apartment =
    {
      name: `${property.title}`,
      address: `${property.address}, ${property.city}, ${property.state}, ${property.zip}`,
      // address: '181 E Santa Clara St, San Jose, CA 95113',
      SquareFeet: `${property.sqft}`,
      price: 3200,
      beds: `${property.bedNo}`,
      baths: `${property.bathNo}`,
      description: `${property.description}`,
      rating: 4.5
    }

    return (
      <>
        <DescriptionBanner images={property.pictures} description={apartment.description} />
        <Info
          name={apartment.name}
          address={apartment.address}
          SquareFeet={apartment.SquareFeet}
          price={apartment.price}
          beds={apartment.beds}
          baths={apartment.baths}
          rating={apartment.rating}
        />
      </>
    )
  }

  return (
    <div className='DetailedProperty'>
      {property !== null ? renderPropInfo() : ''}
    </div>


  );
}
export default DetailedPropertyInfo;
