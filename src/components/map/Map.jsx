import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab/Rating';



import './Map.css';

// setCoordinates, setBounds, coordinates, places,setChildClicked,weatherData
const Map = ( ) => {
  // const isDesktop = useMediaQuery('(min-width:600px)');
  // const classes = useStyles();

  //AIzaSyDKAIWbkM0JwPKv5CVcIvM_iYsj5c7XtMs------1
  //AIzaSyCSNW7Pt4PQZ7qxeT6rrTAQoBqpcw51KBE-----2
  const coordinates={lat:0,lng:0};


  return (
   

    
    <div className='mapContainer'>
      <GoogleMapReact
        bootstrapURLKeys={{ key: '' }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={''}
        onChange={''}
        onChildClick={''}
        >

         {/* options={{disableDefaultUI:true,zoomControl:true,styles:mapStyles}}
         onChange={(e) => {
          setCoordinates({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw }) */}
        {/* }} */}
        {/* onChildClick={(child)=>
          setChildClicked(child)
        }
         */}
      
        {/* {places?.map((place,i)=>(
          <div 
            className={classes.markerContainer}
            lat={Number(place.latitude)}
            lng={Number(place.longitude)}
            key={i}
          >
            {
              !isDesktop ? (
                <LocationOnOutlinedIcon color="primary" fontSize="large"/>
              ) : (
                <Paper elevation={3} className={classes.paper}>
                  <Typography className={classes.typography} variant="subtitle2" gutterBottom>{place.name}</Typography>
                  <img className={classes.pointer} src={place.photo ? place.photo.images.large.url : 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1930&q=80'} alt={place.name}/>
                  <Rating size="small" value={Number(place.rating)} readOnly/>
                </Paper>
              )
            }

          </div>

        ))}
        {weatherData?.list?.map((data,i)=>(
          <div key={i} lat={data.coord.lat} lng={data.coord.lon}>
              <img height={100} src={`https://openweathermap.org/img/w/${data.weather[0].icon}.png`}/>
          </div>
        ))} */}
      </GoogleMapReact>
    </div>
  
  );
};

export default Map;