import React, { useEffect, useState } from 'react';
import '../../inc/recom_apartments/RecomApartments.css';
import Card from "../../inc/recom_apartments/Card";
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Navbar from '../navbar/Navbar';
import axios from 'axios';
import { Grid } from "@mui/material";
import "../manageProperty/RentProperty.css"

function SearchPage() {

    const { value } = useParams();
    const [properties, setProperties] = useState([]);

    useEffect(() => {
        // Fetch properties from the backend API
        fetch(`http://localhost:3001/property/find/${value}`)
            .then((response) => response.json())
            .then((response) => {
                console.log(response)
                setProperties(response);
            })
            .catch((error) => {
                console.error(error);
            });
    }, [value]);

    function renderProperties() {
        var propertyCards = [];
        console.log('properties', properties[0])

        for (var i = 0; i < properties.length; i++) {
            var property = properties[i];
            console.log('property', property)
            var address = `${property.address}, ${property.city}, ${property.state}, ${property.zip}`;
            var bedBath = `${property.bedNo} Beds, ${property.bathNo} bath`;
            var price = `$ ${property.rentPrice}`;

            propertyCards.push(
                <>
                    <Grid item xs={12} md={6} lg={4}>
                        <Link to='detailed-propertyInfo'>
                            <Card
                                src="https://a0.muscache.com/im/pictures/miso/Hosting-740807800483774592/original/6491cdaf-0dfa-46ad-b93a-a3f05382cbb1.jpeg?im_w=720"
                                address={address}
                                title="Avalon On the Alameda"
                                beds={bedBath}
                                price={price}
                            />
                        </Link>
                    </Grid >

                </>
            )

        }
        console.log(propertyCards)
        return propertyCards;
    }

    console.log(properties)
    return (
        <div >
            <h1>Search results for '{value}'</h1>
            <div className='rentHomes'>
                {properties.length > 0 ? (
                    <Grid container spacing={1}>
                        {renderProperties()}
                    </Grid>
                ) : (
                    <>
                        <h2>No results found</h2>
                    </>
                )}
            </div>
        </div >
    )
}

export default SearchPage;
