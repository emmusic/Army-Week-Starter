import * as React from "react"

//Components
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import Bottombar from "../../components/Bottombar/bottombar"
import ImagePreview from "../../components/imagePreview"

//Docs
import * as Docs from "../../docs"


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
import Input from "@mui/material"
import TextField from "@mui/material"

//import the events JSON
var events = require('../events.json').events;


function LookupMaterials(props) {
    const eventId = props.params.id
    var specificEvent = events[eventId];

    return (

        <Layout>

          <h5>Lookup Materials</h5>
               <p>
               {""}
                </p>

               <React.Fragment>
      <CssBaseline />
      <Paper square sx={{ pb: '50px' }}>
        <Typography variant="h5" gutterBottom component="div" sx={{ p: 2, pb: 0 }}>
        {specificEvent.title}
        </Typography>

        {/* This is where we list the lookup materials  */}
        {specificEvent.Materials.map(material => {
          return (
            <ListItem>
            <ListItemButton href={'src/docs/Event 1'}>
            <Grid item xs={12}>
              <ListItemText>{material.filename}</ListItemText>

              <input type="file"/>
                       <input
                          accept="image/*"
                          type="file"
                          id="select-image"
                          style={{ display: 'none' }}
               />




              <ImagePreview></ImagePreview>



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

              <Button variant="contained"
                sx={{ bgcolor: green[500] }}
                endIcon={< DownloadRounded />}>
                Download
              </Button>


                <Button variant="contained"
                href="https://www.zoom.us/"
                sx={{ bgcolor: green[500] }}
                endIcon={< VideoLibraryRoundedIcon />}>
                Zoom Link
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
