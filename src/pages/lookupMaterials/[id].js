import * as React from "react"
import LocalizedStrings from 'react-localization';

//Components
import Layout from "../../components/layout"
import Seo from "../../components/seo"
// import ImagePreview from "../../components/imagePreview"
// import downloadArray from "../../components/Download/downloadArray"

//Docs
// import * as Docs from "../../docs"


//MUI
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { green } from '@mui/material/colors';
import { DownloadRounded } from "@mui/icons-material";
import VideoLibraryRoundedIcon from '@mui/icons-material/VideoLibraryRounded';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from "@mui/material/Grid";
import { ListItemButton } from "@mui/material"
// import Input from "@mui/material"
// import TextField from "@mui/material"
import DownloadArray from "../../components/Download/downloadArray"

//import the events JSON
var en = require('../../data/enevents.json').events;
var fr = require('../../data/frevents.json').events;

//Localization Strings
let strings = new LocalizedStrings({
  en: {
    events: {en},
    title: "Documents",
    zoomlink: "Zoom Link",
  },
  fr: {
    events: {fr},
    title: "Documents",
    zoomlink: "Lien pour Zoom",
  }
})

function LookupMaterials(props) {
    const eventId = props.params.id
    const events = strings.events[navigator.language]
    var specificEvent = events[eventId];

    return (

        <Layout>

          <h5>{strings.title}</h5>
               <p>
               {""}
               <DownloadArray>
              </DownloadArray>
                </p>

               <React.Fragment>
      <CssBaseline />
      <Paper square sx={{ pb: '50px' }}>
        <Typography variant="h5"
        gutterBottom component="div" sx={{ p: 2, pb: 0 }}>
        {specificEvent.title}
        </Typography>

        {/* This is where we list the Documents  */}
        {specificEvent.Materials.map(material => {
          return (
            <ListItem>
            <ListItemButton href={'src/docs/event-1'}>
            <Grid item xs={12}>
              <ListItemText>{material.filename}</ListItemText>

              <input type="file"/>
                       <input
                          accept="image/*"
                          type="file"
                          id="select-image"
                          style={{ display: 'none' }}
               />



              </Grid>
            </ListItemButton>
            </ListItem>
          );
     })}

      </Paper>

    </React.Fragment>




            <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md">
             <p>


            </p>


      </Container>
    </React.Fragment>

    <p> {""}</p>

            <Stack spacing={4} direction="row"
            alignItems="center"
            justifyContent="space-evenly"
            >



            {/* <Button variant="contained"
                href="/check-in-now"
                sx={{ bgcolor: green[500] }}
                endIcon={< QrCodeScanner />}>
                Check in
              </Button> */}

              {/* <Button variant="contained"
                sx={{ bgcolor: green[500] }}
                endIcon={< DownloadRounded />}>
                Download
              </Button> */}




                <Button variant="contained"
                href="https://www.zoom.us/"
                sx={{ bgcolor: green[500] }}
                endIcon={< VideoLibraryRoundedIcon />}>
                {strings.zoomlink}
              </Button>

            </Stack>

            <p> {""}
            </p>

            <p> {""}
            </p>


            <p> {""}
            </p>
        </Layout>
    );

}


export const Head = () => <Seo title="Lookup Material" />

export default LookupMaterials
