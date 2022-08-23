import * as React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image"

//Components
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import ImagePreview from "../../components/imagePreview";


//MUI
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { green } from '@mui/material/colors';
import Typography from '@mui/material/Typography';
import VideoLibraryRoundedIcon from '@mui/icons-material/VideoLibraryRounded';

import { PictureAsPdf } from "@mui/icons-material";
import Box from '@mui/material/Box';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';


// import ImagePreview from "../../components/imagePreview";
import DownloadBtn from "../../components/Download/downloadBtn.js";


//import the events JSON
var events = require('../../data/events.json').events;

function SelectedEvent(props) {
  const data = useStaticQuery(graphql`{
    allFile {
      edges {
        node {
          childImageSharp {
            gatsbyImageData(width: 500)
          }
          relativePath
        }
      }
    }
  }`);

  const eventId = props.params.id
  // For this line below to work the events need to stay in the correct order where their id=index
  var specificEvent = events[eventId];

  // Grabs the floorplan image that matches this event's room #
  const roomFloorplan = data.allFile.edges.filter(edges => edges.node.relativePath === specificEvent.RoomFloorplan)
  const venueFloorplan = data.allFile.edges.filter(edges => edges.node.relativePath === specificEvent.VenueFloorplan)

    return (

        <Layout>
          <Card sx={{ minWidth: 300 }}>
      <CardContent>        
        <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
        Selected Event - Details
        </Typography>
        <Typography variant="h5" component="div">
          {specificEvent.title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Presenter: {specificEvent.Presenter}

        </Typography>
        <Typography variant="body2">
          Category: {specificEvent.Category}
          <br />
          date: {specificEvent.date}
          <br />
          Time: {specificEvent.Time}
          <br />
          Location: {specificEvent.location}
          <br />

        </Typography>

      </CardContent>
      <CardActions>      
      <Stack spacing={2} direction="row"
alignItems="center"
justifyContent="space-evenly"
>
{/*
    <Button variant="contained"
    href="/check-in-now"
    sx={{ bgcolor: green[500] }}
    endIcon={< ImagePreview />}>
    </Button> */}

  <Button variant="contained"
    sx={{ bgcolor: green[500] }}
    href={`/lookupMaterials/${specificEvent.id}`}
    endIcon={< PictureAsPdf />}>
    Lookup Materials
  </Button>

  <Button variant="contained"
    href="https://www.zoom.us/"
    sx={{ bgcolor: green[500] }}
    endIcon={< VideoLibraryRoundedIcon />}>
    Zoom Link
  </Button>

  <DownloadBtn>
    </DownloadBtn>

</Stack>

      </CardActions>
      </Card>
      <Card sx={{ minWidth: 275 }}>
      <CardContent>
              {/* Room Floorplan Image Please make it pretty :D */}
              {roomFloorplan.map(x => {
          return (
            <Grid>
            <Typography variant="h6" component="div">
              {specificEvent.location} Floorplan
            </Typography>
            <GatsbyImage image={getImage(x.node)} alt="Room Floorplan"/>
            </Grid>
          );
            })}

            {/* Venue Floorplan Image Please make it pretty :D */}
            {venueFloorplan.map(x => {
              return (
                <Grid>
                <Typography variant="h6" component="div">
                {specificEvent.location} Location
                </Typography>
                <GatsbyImage image={getImage(x.node)} alt="Venue Floorplan"/>
                </Grid>
              );
            })}
            </CardContent>
    </Card>  

        </Layout>
    );
}

export const Head = () => <Seo title="Selected Event" />

export default SelectedEvent