import React from 'react';
import { Grid, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import KitchenIcon from '@mui/icons-material/Kitchen';
import PoolIcon from '@mui/icons-material/Pool';
import ElevatorIcon from '@mui/icons-material/Elevator';
import LocalLaundryServiceIcon from '@mui/icons-material/LocalLaundryService';
import HotTubIcon from '@mui/icons-material/HotTub';
import WifiIcon from '@mui/icons-material/Wifi';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import HomeIcon from '@mui/icons-material/Home';
import ElectricalServicesIcon from '@mui/icons-material/ElectricalServices';

function Amenities() {
  const points = [
    { text: 'Air Conditioner', type: 'ACunit' },
    { text: 'Refridgerator', type: 'Refridgerator' },
    { text: 'Pool', type: 'Pool' },
    { text: 'Elevator', type: 'Elevator' },
    { text: 'Fitness', type: 'Fitness' },
    { text: 'Spa', type: 'Spa' },
    { text: 'Wi-fi', type: 'Wi-fi' },
    { text: 'Laundry', type: 'Laundry' },
    { text: '24 Hour Service', type: 'Service' },
  ];

  const getIcon = (type) => {
    switch (type) {
      case 'ACunit':
        return <AcUnitIcon />;
      case 'Refridgerator':
        return <KitchenIcon/>;
      case 'Pool':
        return <PoolIcon />;
      case 'Elevator':
        return <ElevatorIcon/>;
      case 'Laundry':
        return <LocalLaundryServiceIcon />;
      case 'Wi-fi':
        return <WifiIcon />;
      case 'Fitness':
        return <FitnessCenterIcon />;
      case 'Spa':
        return <HotTubIcon />;
      case 'Service':
        return <ElectricalServicesIcon />;
      default:
        return <HomeIcon/>;
    }
  };

  const chunkArray = (arr, chunkSize) => {
    let index = 0;
    let arrayLength = arr.length;
    let tempArray = [];
    
    for (index = 0; index < arrayLength; index += chunkSize) {
        let myChunk = arr.slice(index, index+chunkSize);
        tempArray.push(myChunk);
    }

    return tempArray;
  }

  const pointsChunks = chunkArray(points, 3);

  return (
    <Grid container spacing={2}>
      {pointsChunks.map((chunk, chunkIndex) => (
        <Grid item xs={12} sm={4} key={chunkIndex}>
          <List>
            {chunk.map((point, pointIndex) => (
              <ListItem key={`${chunkIndex}_${pointIndex}`}>
                <ListItemIcon style ={{color:'rgb(133, 57, 57)'}}  >{getIcon(point.type)}</ListItemIcon>
                <ListItemText primary={point.text} />
              </ListItem>
            ))}
          </List>
        </Grid>
      ))}
    </Grid>
  );
}

export default Amenities;


