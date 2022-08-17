import * as React from "react"

//Components
import Layout from "../../components/layout"
import Seo from "../../components/seo"

//MUI
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { green } from '@mui/material/colors';
import { DownloadRounded } from "@mui/icons-material";
import Paper from '@mui/material/Paper';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Grid from "@mui/material/Grid";
import Typography from '@mui/material/Typography';
import Fab from '@mui/material/Fab';
import List from '@mui/material/List';
import ListSubheader from '@mui/material/ListSubheader';
import { QrCodeScanner } from "@mui/icons-material";
import VideoLibraryRoundedIcon from '@mui/icons-material/VideoLibraryRounded';


//import the events JSON
var events = require('../events.json').events;

   const StyledFab = styled(Fab)({
    position: 'absolute',
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: '0 auto',
  });


function SelectedEvent(props) {
  const eventId = props.params.id
  // I couldn't get the lookup to work, for this line below to work the events need to stay in the correct order where their id=index
  var specificEvent = events[eventId];

    return (

        <Layout>

    <Grid container justify="flex-end">

    </Grid>

          <h5>Selected Event - Details</h5>
            <Grid container justify="center">
            <h1>
                {specificEvent.Title}
            </h1>
            <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md">
            <p> Presenter: {specificEvent.Presenter}
                <p> {""}</p>

                <b> {specificEvent.Date}, {specificEvent.Time} </b>
            </p>
      </Container>
    </React.Fragment>
    <React.Fragment>
      <CssBaseline />
      <Paper square sx={{ pb: '50px' }}>
        <Typography variant="h5" gutterBottom component="div" sx={{ p: 2, pb: 0 }}>
          {specificEvent.Title}
        </Typography>
        <List sx={{ mb: 2 }}>
                <ListSubheader sx={{ bgcolor: 'background.paper' }}>
                <p>Category: {specificEvent.Category}</p>
                <p>Location: {specificEvent.Location}</p>

                  <p>{" "}</p>
                </ListSubheader>
        </List>
      </Paper>

    </React.Fragment>

      <CssBaseline />
      <Container maxWidth="md">
             <p>
            </p>
      </Container>

<Stack spacing={4} direction="row"
alignItems="center"
justifyContent="space-evenly"
>

    <Button variant="contained"
    href="/check-in-now"
    sx={{ bgcolor: green[500] }}
    endIcon={< QrCodeScanner />}>
    Check in
  </Button>

  <Button variant="contained"
    sx={{ bgcolor: green[500] }}
    href={`/lookupMaterials/${specificEvent.Id}`}
    endIcon={< DownloadRounded />}>
    Lookup Materials
  </Button>

  <Button variant="contained"
    href="https://www.zoom.us/"
    sx={{ bgcolor: green[500] }}
    endIcon={< VideoLibraryRoundedIcon />}>
    Zoom Link
  </Button>

</Stack>
<Container maxWidth="md">
             <p>
            </p>
</Container>
<Container maxWidth="md">
             <p>
            </p>
</Container>
    
            </Grid>
        </Layout>
    );
}

export const Head = () => <Seo title="Selected Event" />

export default SelectedEvent
