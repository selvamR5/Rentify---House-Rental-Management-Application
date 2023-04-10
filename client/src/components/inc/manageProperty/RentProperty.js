import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import Card from "../recom_apartments/Card"
import "../recom_apartments/Card.css"
import "./RentProperty.css"

function RentProperty(){

    const a = [1, 2, 3, 4, 5]

    return (
        <div className="rentHomes">
            <h1 className="title">Your Homes</h1>
            <Grid container spacing={1}>
            {a.map(i => {
                return (
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
                );
            })}
            </Grid>
        </div>
    );
}

export default RentProperty;