import * as React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import Seo from "../../components/seo"
import RegisterButton from "../../components/registerButton"

//import { Text, View } from 'react-native';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import { styled } from '@mui/material/styles';
import { deepOrange, deepPurple, lightGreen } from '@mui/material/colors';
import { green, pink } from '@mui/material/colors';
import FolderIcon from '@mui/icons-material/Folder';
import PageviewIcon from '@mui/icons-material/Pageview';
import { DownloadRounded } from "@mui/icons-material";

import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';


import Grid from "@mui/material/Grid";

import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Fab from '@mui/material/Fab';
import List from '@mui/material/List';
import ListSubheader from '@mui/material/ListSubheader';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import MoreIcon from '@mui/icons-material/MoreVert';
import HomeIcon from '@mui/icons-material/Home';
import { MdOutlineHelp} from "react-icons/md";
import { QrCodeScanner } from "@mui/icons-material";
import VideoLibraryRoundedIcon from '@mui/icons-material/VideoLibraryRounded';
import * as queryString from "query-string";


//import the events JSON
var events = require('../events.json');

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
  // I couldn't get the lookup to work, for this line below to work the events need to stay in the correct order where their id=index+1
  var specificEvent = events[eventId-1];

    return (

        <Layout>

    <Grid container justify="flex-end">

<Stack direction="row" spacing={2} alignItems="flex-end">
      <Avatar sx={{ bgcolor: deepPurple[500] }}
        > JB
         </Avatar>
          <Stack
            direction="row"
            spacing={3}
            alignItems="flex-end"
            justifyContent="space-evenly" >
                <Avatar sx={{ bgcolor: green[400] }}>
                    <FolderIcon />
                </Avatar>

                <Avatar sx={{ bgcolor: green[400] }}>
                    <PageviewIcon />
                </Avatar>

                <Avatar sx={{ bgcolor: green[400] }}>
                    <DownloadRounded />
                </Avatar>
            </Stack>
             </Stack>

    </Grid>

          <h5>Selected Event - Details</h5>
            <Grid container justify="center">
            <h1>
                {specificEvent.name}
            </h1>
            <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md">
            <p> Status: {specificEvent.status}
                <p> {""}</p>

                <b> {specificEvent.date}, {specificEvent.time} </b>

            </p>
      </Container>
    </React.Fragment>
    <React.Fragment>
      <CssBaseline />
      <Paper square sx={{ pb: '50px' }}>
        <Typography variant="h5" gutterBottom component="div" sx={{ p: 2, pb: 0 }}>
          {specificEvent.name}
        </Typography>
        <List sx={{ mb: 2 }}>
                <ListSubheader sx={{ bgcolor: 'background.paper' }}>
                  {specificEvent.description}

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
    href="/lookup-materials"
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
            {/* })} */}
              {/* <h1>
                Defense in the Digital Age
            </h1> */}

            {/* <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md">
            <p> Status: Open
                <p> {""}</p>

                <b> September 12, 0900 - 1015 </b>

            </p>
      </Container>
    </React.Fragment> */}

            {/* <React.Fragment>
      <CssBaseline />
      <Paper square sx={{ pb: '50px' }}>
        <Typography variant="h5" gutterBottom component="div" sx={{ p: 2, pb: 0 }}>
          Defense in the Digital Age
        </Typography>
        <List sx={{ mb: 2 }}>
          {SelectedEventText.map(({ id }) => (
            <React.Fragment key={id}>
              {id === 1 && (
                <ListSubheader sx={{ bgcolor: 'background.paper' }}>
                  Modern war is not fought on the battleground, but online.

                  <p>{" "}</p>

                  Lorem ipsum and lots of other good information and whatnot.
                </ListSubheader>

              )}
            </React.Fragment>

          ))}
        </List>
      </Paper>

    </React.Fragment>


            <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md">
             <p>


            </p>




      </Container>
    </React.Fragment> */}


    {/* <p> {""}</p>

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
                href="/lookup-materials"
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

            <p> {""}
            </p>

            <p> {""}
            </p>


            <p> {""}
            </p> */}

        </Layout>
    );
}

export const Head = () => <Seo title="Selected Event" />

export default SelectedEvent
