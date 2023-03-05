import React,{useState} from 'react'
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select, Card } from '@material-ui/core'
import PlaceDetails from "./PlaceDetails.jsx"
import "./List.css"
const List = () => {
  const [type,setType] = useState('restaurants');
  const [ratings,setRatings] = useState(0);
  const places = [
    {name:'cool place'},
    {name:'Best Beer'},
    {name: 'Best Steak'},
    {name: 'Best chola'},
    {name: 'Best meat'},
    {name: 'Best drink'},
    {name: 'Best fish'},
    {name: 'Best panner'},
    {name: 'Best juice'},
    {name: 'Best jokes'}
  ];
  return (
    <div className='container'>
      <Typography variant="h4" className='heading'>Restaurants,Hotels & Attractions around you</Typography>
      <FormControl className='formControl'>
        <InputLabel>Type</InputLabel>
        <Select value={type} onChange={(e)=>setType(e.target.value)}>
          <MenuItem value="restaurants">Restaurants</MenuItem>
          <MenuItem value="hotels">Hotels</MenuItem>
          <MenuItem value="attractions">Attractions</MenuItem>
        </Select>

      </FormControl>
      <FormControl className='formControl'>
        <InputLabel>Ratings</InputLabel>
        <Select value={ratings} onChange={(e)=>setRatings(e.target.value)}>
          <MenuItem value={0}>All</MenuItem>
          <MenuItem value={3}>Above 3.0</MenuItem>
          <MenuItem value={4}>Above 4.0</MenuItem>
          <MenuItem value={4.5}>Above 4.5</MenuItem>
          
        </Select>

      </FormControl>
      <Grid container spacing={3} className='list'>
        {places?.map((place,i)=>(
          <Grid item key={i} xs={12}>
            <PlaceDetails place={place}/>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default List