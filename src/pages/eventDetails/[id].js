import * as React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import LocalizedStrings from 'react-localization';

//Components
import Layout from "../../components/layout"
import Seo from "../../components/seo"

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

// PDF stuff
// import pdf from '/home/emklassen/Army-Week-Starter-1/src/images/OSINT-Overview.pdf'
import PDF from "react-pdf-js";
import {ZoomInOutlined, ZoomOutOutlined} from '@ant-design/icons';


//import the events JSON
var en = require('../../data/enevents.json').events;
var fr = require('../../data/frevents.json').events;

let strings = new LocalizedStrings({
  en: {
    events: {en},
    title: "Selected Event - Details",
    presenter: "Presenter:",
    category: "Category:",
    date: "Date:",
    time: "Time:",
    location: "Location",
    lookupmaterials: "Documents",
    zoomlink: "Zoom Link",
    floorplan: "Floorplan",
  },
  fr: {
    events: {fr},
    title: "Évènement selectionné - Détails",
    presenter: "Présentateur:",
    category: "Catégorie:",
    date: "Date:",
    time: "Heure:",
    location: "Lieu",
    lookupmaterials: "Documents",
    zoomlink: "Lien pour Zoom",
    floorplan: "Plan d'étage",
  }
})


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
  const events = strings.events[navigator.language]
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
        {strings.title}
        </Typography>
        <Typography variant="h5" component="div">
          {specificEvent.title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {strings.presenter} {specificEvent.Presenter}

        </Typography>
        <Typography variant="body2">
          {strings.category} {specificEvent.Category}
          <br />
          {strings.date} {specificEvent.date}
          <br />
          {strings.time} {specificEvent.Time}
          <br />
          {strings.location}: {specificEvent.location}
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
    {strings.lookupmaterials}
  </Button>

  <Button variant="contained"
    href="https://www.zoom.us/"
    sx={{ bgcolor: green[500] }}
    endIcon={< VideoLibraryRoundedIcon />}>
    {strings.zoomlink}
  </Button>

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
              {specificEvent.location} {strings.floorplan}
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
                {strings.location}
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