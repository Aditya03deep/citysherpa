import React, { useState } from 'react'
import { Autocomplete } from '@react-google-maps/api';
import { AppBar, Toolbar, Typography, InputBase, Box } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';


import "./Header.css"

const Header = () => {
    return (
        <AppBar position="static" className="appbar">
            <Toolbar className="toolbar">
                <Typography variant="h6" className="title1">
                    CITY SHERPA
                </Typography>
                <Box className="inputBox" >
                    <Typography variant="h6" className="title2">
                        Explore new Places
                    </Typography>
                    {/* <Autocomplete> */}
                        <div className='search'>
                            {/* <div className='searchIcon'>
                                <SearchIcon/>
                            </div> */}
                            <InputBase placeholder='Search....' className='input'/>
                        </div>
                    {/* </Autocomplete> */}
                </Box>
            </Toolbar>
        </AppBar>
    )
}
// const Header = ({ setCoordinates }) => {

//     // const classes = useStyles();
//     const [autocomplete, setAutoComplete] = useState([]);

//     const onLoad = (autoC) =>  setAutoComplete(autoC);

//     const onPlaceChanged = () => {
//         const lat = autocomplete.getPlace().geometry.location.lat();
//         const lng = autocomplete.getPlace().geometry.location.lng();
//         setCoordinates({ lat, lng });
//     }
    

export default Header