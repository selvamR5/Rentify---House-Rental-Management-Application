import React from 'react';
import './RecomApartments.css';
import Card from "./Card";
import { Link } from 'react-router-dom';


function RecomApartments() {
  return (
    <div className='recomapartments'>
      <h1>Explore Rentals Near You</h1>
      <div className='rentalSection'>

    <Link to = 'detailed-propertyInfo'>
      <Card
                src="https://a0.muscache.com/im/pictures/miso/Hosting-740807800483774592/original/6491cdaf-0dfa-46ad-b93a-a3f05382cbb1.jpeg?im_w=720"
                address="181 E Santa Clara St, San Jose, CA 95113"
                title="Avalon On the Alameda"
                beds="2 Beds"
                price="$2,700"
            />
      </Link>
           <Card
                src="https://a0.muscache.com/im/pictures/miso/Hosting-717383292590854818/original/b7582c33-4bc8-4247-bafd-f9f7a23fe471.jpeg?im_w=720"
                title="101 San Fernando"
                address="100 N Santa Clara St, San Jose, CA 95126"
                beds="2 Beds"
                price="$2,600"
            />
            <Card
                src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720"
                address="415 N Santa Clara St, San Jose, CA 95112"
                title="Ryland Mews"
                beds="3 Beds"
                price="$3,700"
            />
        </div>
      <div className='rentalSection'>
      <Card
                src="https://media.nomadicmatt.com/2019/airbnb_breakup3.jpg"
                title="Cahill Park"
                address="181 E Santa Clara St, San Jose, CA 95113"
                beds="2 Beds"
                price="$2,700"
            />
            <Card
            src="https://thespaces.com/wp-content/uploads/2017/08/Courtesy-of-Airbnb.jpg"
            title="Colonnade Apartments"
            address="200 W, San Jose, CA 95110"
            beds="2 Beds"
            price="$2,700"
        />
        <Card
        src="https://media.nomadicmatt.com/2018/apartment.jpg"
        address="Willow Glean"
        title="314 E Santa Clara St, San Jose, CA 95132"
        beds="3 Beds"
        price="$4,100"
    />
      </div>

    </div>
  )
}

export default RecomApartments;
