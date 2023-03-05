import React from 'react'
import {CssBaseline,Grid} from '@material-ui/core'
import Header from './Header'
import List from './List'
import Map from './Map'

const Map_main = () => {
  return (
    <>
    <CssBaseline/>
    <Header/>
    <Grid container spacing={3} style={{width:'100%'}}>
      <Grid item xs={12} md={4}>
        <List/>
        
      </Grid>
      {/* <Grid item={12} md={8}>
        <Map/>
      </Grid> */}
    </Grid>
    </>
   
  )
}

export default Map_main