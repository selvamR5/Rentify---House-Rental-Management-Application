import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import Card from "../recom_apartments/Card"
import "../recom_apartments/Card.css"
import "./RentProperty.css"

function RentProperty() {

    const a = [1, 2, 3, 4, 5]

    return (
        <div className="rentHomes">
            <h1 className="title">Your Homes</h1>
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
                    <Grid item xs={12} md={6} lg={4}>

                    <Link>
                        <Card
                            src="https://a0.muscache.com/im/pictures/miso/Hosting-717383292590854818/original/b7582c33-4bc8-4247-bafd-f9f7a23fe471.jpeg?im_w=720"
                            title="101 San Fernando"
                            address="100 N Santa Clara St, San Jose, CA 95126"
                            beds="2 Beds"
                        />
                    </Link>
                    </Grid>
                    <Grid item xs={12} md={6} lg={4}>

                    <Link>
                        <Card
                            src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720"
                            address="415 N Santa Clara St, San Jose, CA 95112"
                            title="Ryland Mews"
                            beds="3 Beds"
                        />
                    </Link>
                    </Grid>
            </Grid>
        </div>
    );
}

export default RentProperty;

// {a.map(i => {
//     return (
//     );
// })}