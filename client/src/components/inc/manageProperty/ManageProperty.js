import "../recom_apartments/Card.css"
import "./ManageProperty.css"
import { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import Card from "../recom_apartments/Card";
import { useSelector } from "react-redux";

const ManageProperty = () => {
    const [activeTab, setActiveTab] = useState('Tenant');
    const [properties, setProperties] = useState([]);
    const userId = useSelector((state) => state.userId.value);

    useEffect(() => {
        var type = '';
        if(activeTab === 'Tenant'){
            type='tenant'
        } else type = 'landlord'

        // Fetch properties from the backend API
        fetch(`http://localhost:3001/property/get/${type}/${userId}`)
            .then((response) => response.json())
            .then((response) => {
                console.log(response)
                setProperties(response);
            })
            .catch((error) => {
                console.error(error);
            });

        
    }, [activeTab]);

    const handleTabClick = (tabName) => {
        
        setActiveTab(tabName);
    };

    function renderProperties() {
        var propertyCards = [];
        console.log('properties', properties[0])

        for (var i = 0; i < properties.length; i++) {
            var property = properties[i];
            console.log('property', property)
            var address = `${property.address}, ${property.city}, ${property.state}, ${property.zip}`;
            var bedBath = `${property.bedNo} Beds, ${property.bathNo} bath`;
            var price = `$ ${property.rentPrice}`;
            var propertyInfoURL=`/manage-rental/dashboard`
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
        console.log(propertyCards)
        return propertyCards;
    }

    return (
        <div>
            <h1 className="title">Your Homes</h1>
            <div className="tab-container">
                <button
                    className={`tab-button ${activeTab === 'Tenant' ? 'active' : ''}`}
                    onClick={() => handleTabClick('Tenant')}
                >
                    Tenant
                </button>
                <button
                    className={`tab-button ${activeTab === 'Landlord' ? 'active' : ''}`}
                    onClick={() => handleTabClick('Landlord')}
                >
                    Landlord
                </button>
            </div>

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

            {/* {activeTab === 'Tenant' &&
                <div className="rentHomes">
                    <Grid container spacing={1}>
                        <Grid item xs={12} md={6} lg={4}>
                            <Link to='/manage-rental/dashboard'>
                                <Card
                                    src="https://a0.muscache.com/im/pictures/miso/Hosting-717383292590854818/original/b7582c33-4bc8-4247-bafd-f9f7a23fe471.jpeg?im_w=720"
                                    title="101 San Fernando"
                                    address="100 N Santa Clara St, San Jose, CA 95126"
                                    beds="2 Beds"
                                />
                            </Link>
                        </Grid>
                    </Grid>
                </div>}
            {activeTab === 'Landlord' &&
                <div className="rentHomes">
                    <Grid container spacing={1}>
                        <Grid item xs={12} md={6} lg={4}>
                            <Link to='/manage-rental/dashboard'>
                                <Card
                                    src="https://a0.muscache.com/im/pictures/miso/Hosting-740807800483774592/original/6491cdaf-0dfa-46ad-b93a-a3f05382cbb1.jpeg?im_w=720"
                                    address="181 E Santa Clara St, San Jose, CA 95113"
                                    title="Avalon On the Alameda"
                                    beds="2 Beds"
                                />
                            </Link>
                        </Grid>
                    </Grid>
                </div>} */}
        </div>
    );
};


export default ManageProperty;

// const a = [1, 2, 3, 4, 5]
// {a.map(i => {
//     return (
//     );
// })}