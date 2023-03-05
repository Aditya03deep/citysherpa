import React from 'react'
import { Box, Typography, Button, Card, CardActions, CardMedia, CardContent, Chip } from '@material-ui/core'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import PhoneIcon from '@material-ui/icons/Phone';
import Rating from '@material-ui/lab/Rating';
// import './PlaceDetails.css'
const PlaceDetails = ({place}) => {
  return (
    // <h1>{place.name}</h1>
    <Card elevation={6}>
            <CardMedia
                style={{ height: 350 }}
                image={place.photo ? place.photo.images.large.url : 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1930&q=80'}
                title={place.name}
            />
            <CardContent>
                <Typography gutterBottom variant="h5">{place.name}</Typography>
                <Box display="flex" justifyContent="space-between">
                    <Rating  value='4' readOnly/>
                    <Typography gutterBottom variant="subtile1">out of 5</Typography>
                </Box>
                <Box display="flex" justifyContent="space-between">
                    <Typography variant="subtile1">Price</Typography>
                    <Typography gutterBottom variant="subtile1">500</Typography>
                </Box>
                <Box display="flex" justifyContent="space-between">
                    <Typography variant="subtile1">Ranking</Typography>
                    <Typography gutterBottom variant="subtile1">1</Typography>
                </Box>
                {/* {place?.awards?.map((award)=>(
                    <Box my={1} display="flex" justifyContent="space-between" alignItems="center" >
                        <img src={award.images.small} alt={award.display_name}/>
                        <Typography variant="subtitle2" color="textSecondary">{award.display_name}</Typography>
                    </Box>
                ))} */}
                {place?.cuisine?.map(({name})=>(
                    <Chip key={name} size="small" label={name} className='chip'/>
                ))}
                {place?.address && (
                    <Typography gutterBottom variant="body2" color="textSecondary" className='subtitle'>
                        <LocationOnIcon/> {place.address}
                    </Typography>
                )}
                   {place?.phone && (
                    <Typography gutterBottom variant="body2" color="textSecondary" className='spacing'>
                        <PhoneIcon/> {place.phone}
                    </Typography>
                )}
                <CardActions>
                    <Button size="small" color="primary" onClick={()=>window.open('www.google.com','_blank')}>
                        Trip Advisor
                    </Button>
                    <Button size="small" color="primary" onClick={()=>window.open('www.google.com','_blank')}>
                        Website
                    </Button>
                </CardActions>
            </CardContent>

            

        </Card>
    )
   
  
}

export default PlaceDetails