import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react'

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
            {/* <StaticImage src="../images/shawcentre.png" alt="map"/> */}
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2800.2629369346737!2d-75.69396168418135!3d45.42420074413206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce0501028f9623%3A0x9d3495d801b96afe!2sShaw%20Centre!5e0!3m2!1sen!2sca!4v1660937763316!5m2!1sen!2sca"
                width="600"
                height="450"
                style={{ border: "0" }}
                allowfullscreen=""
                loading="lazy"
            ></iframe>
            </Grid>
            <Grid item xs={12}>
            <Button variant="contained" color="success" href="https://www.shaw-centre.com/attendee/location/">Parking Information</Button>
            </Grid>
            </Grid>
        </Layout>
    )
}

export default VenueInfo