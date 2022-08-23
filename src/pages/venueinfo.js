import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import LocalizedStrings from 'react-localization';

//Components
import Layout from "../components/layout"
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

let strings = new LocalizedStrings({
    en: {title: "Venue Info",
    address: "Ottawa Conference and Event Centre, 200 Coventry Road, Ottawa, ON",
    moreinfo: "More Information",
    floorplantitle: "Floorplan"
    },
    fr: {
        title: "L'information du site",
        address: "Ottawa Conference and Event Centre, 200 Coventry Road, Ottawa, ON",
        moreinfo: "Plus d'information",
        floorplantitle: "Plan d'étage"
    }
})

function VenueInfo () {
    return (
        <Layout>
            <h2>{strings.title}</h2>
            <h5>{strings.address}</h5>
            <Grid container spacing={2} alignItems="center" justifyContent="center">
            <Grid item xs={12}>
            <iframe
                title="Venue"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2800.420185993698!2d-75.6567551!3d45.4210305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce0579e9f90d19%3A0x9f5ab468c23b6b6!2s200%20Coventry%20Rd%2C%20Ottawa%2C%20ON%20K1K%204S3!5e0!3m2!1sen!2sca!4v1661179337038!5m2!1sen!2sca"
                width="600"
                height="450"
                style={{ border: "0" }}
                allowfullscreen=""
                loading="lazy"
            ></iframe>
            </Grid>
            <Grid item xs={12}>
            <Button variant="contained" color="success" href="https://ottawaconferenceandeventcentre.com/our-facilities/">{strings.moreinfo}</Button>
            <h3>{strings.floorplantitle}</h3>
            <StaticImage src="../images/floor1-1.png" alt="floorplan" />
            <StaticImage src="../images/floor2.png" alt="floorplan" />
            <StaticImage src="../images/floor3.png" alt="floorplan" />
            </Grid>
            </Grid>            
            
        </Layout>
    )
}

export default VenueInfo