import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

//Components
import Layout from "../components/layout"
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

function VenueInfo () {
    return (
        <Layout>
            <h2>Venue Info</h2>
            <h5>Ottawa Conference Centre, 55 Colonel By Dr, Ottawa, ON</h5>
            <Grid container spacing={2} alignItems="center" justifyContent="center">
            <Grid item xs={12}>
            <StaticImage src="../images/shawcentre.png" alt="map"/>
            </Grid>
            <Grid item xs={12}>
            <Button variant="contained" color="success" href="https://www.shaw-centre.com/attendee/location/">Parking Information</Button>
            </Grid>
            </Grid>
        </Layout>
    )
}

export default VenueInfo