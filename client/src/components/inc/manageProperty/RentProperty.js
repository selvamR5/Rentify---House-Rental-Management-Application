import { Grid } from "@mui/material";
import Card from "../recom_apartments/Card"
import "../recom_apartments/Card.css"
import "./RentProperty.css"

function RentProperty(){

    const a = [1, 2, 3]

    return (
        <div>
            <h1 className="title">Your Homes</h1>
            <Grid container spacing={3}>
            {a.map(i => {
                return (
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Card 
                        src="https://a0.muscache.com/im/pictures/miso/Hosting-740807800483774592/original/6491cdaf-0dfa-46ad-b93a-a3f05382cbb1.jpeg?im_w=720"
                        address="181 E Santa Clara St, San Jose, CA 95113"
                        title="Avalon On the Alameda"
                        beds="2 Beds"
                        />
                    </Grid>
                );
            })}
            </Grid>
        </div>
    );
}

export default RentProperty;