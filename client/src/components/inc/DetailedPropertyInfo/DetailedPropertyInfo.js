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
      name: 'Avalon On the Alameda',
      address: `${property.address}, ${property.city}, ${property.state}, ${property.zip}`,
      // address: '181 E Santa Clara St, San Jose, CA 95113',
      SquareFeet: '1346 sq ft',
      price: 3200,
      beds: 2,
      baths: 2,
      description: "Avalon On The Alameda features 1,2, and 3 bedroom apartment homes and townhomes in San Jose, CA located three blocks from the San Jose Arena. Avalon on the Alameda offers apartments with in unit washer and dryer, spacious walk in closets (select units), and central air conditioning and heating.This pet friendly community also includes a state of the art fitness center and swimming pool, WiFi access, and an on-site Starbucks.",
      rating: 4
    }

    return (
      <>
        <DescriptionBanner images={images} description={apartment.description} />
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
