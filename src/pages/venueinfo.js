import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

//Components
import Layout from "../components/layout"
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
//import HighlightedCode from 'docs/src/modules/components/HighlightedCode';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function VenueInfo () {
    return (
        <Layout>
            <h2>Venue Info</h2>
            <h5>Ottawa Conference and Event Centre, 200 Coventry Road, Ottawa, ON</h5>
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
            <Button variant="contained" color="success" href="https://ottawaconferenceandeventcentre.com/our-facilities/">More Information</Button>
            <h3>Floor Plan</h3>
           
            <Stack direction="row" spacing={2}>
            <StaticImage src="../images/floor1.png" alt="floorplan" />
            <StaticImage src="../images/floor2.png" alt="floorplan" />
            <StaticImage src="../images/floor3.png" alt="floorplan" />
            </Stack>
            </Grid>
            </Grid>            
            
        </Layout>
    )
}

export default VenueInfo