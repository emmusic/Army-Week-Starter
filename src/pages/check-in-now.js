

import * as React from "react"

import Layout from "../components/layout"
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { deepPurple, green } from '@mui/material/colors';
import { ChevronLeftSharp, DownloadRounded } from "@mui/icons-material";

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

// bottom bar

import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Fab from '@mui/material/Fab';
import IconButton from "@mui/material/IconButton";
import SearchIcon from '@mui/icons-material/Search';
import MoreIcon from '@mui/icons-material/MoreVert';
import HomeIcon from '@mui/icons-material/Home';
import { MdOutlineHelp} from "react-icons/md";
import { QrCodeScanner } from "@mui/icons-material";
import VideoLibraryRoundedIcon from '@mui/icons-material/VideoLibraryRounded';
import AddTaskIcon from '@mui/icons-material/AddTask';
import ArrowBackIosSharpIcon from '@mui/icons-material/ArrowBackIosSharp';


import textField from '../components/textField'
import HelperTextAligned from "../components/textField";
import FreeSoloCreateOptionDialog from "../components/addUserName"
import ImagePreview from "../components/imagePreview";


const StyledFab = styled(Fab)({

    position: 'absolute',
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: '0 auto',
  });



function CheckInNow() {
    return (

        <Layout>

  <h5>
          Welcome to Army Week!</h5>

               <p>
               {"What's your name?"}
                </p>

<html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport"
    content="width=device-width; initial-scale=1.0;
    maximum-scale=1.0; user-scalable=0;" />
    <link rel="stylesheet" href="src/styles.css" />
  </head>
  <body>
    <div id="container">

            <Container maxWidth="lg">

                <FreeSoloCreateOptionDialog>

                </FreeSoloCreateOptionDialog>




            </Container>


      <canvas hidden="" id="qr-canvas"></canvas>

      <div id="qr-result" hidden="">
        <b>Data:</b> <span id="outputData"></span>


      </div>
    </div>
    <script src="./src/qrCodeScanner.js"></script>
  </body>
</html>



{/* bottom toolbar */}
      <AppBar position="fixed" color="success" sx={{ top: 'auto', bottom: 0 }}>
         <Toolbar>

            <IconButton color="inherit" href="/faq" >
               < MdOutlineHelp />
          </IconButton>

          <StyledFab color="secondary" aria-label="add" href="/">
            <HomeIcon />
          </StyledFab>

          <Box sx={{ flexGrow: 12 }} />
          <IconButton color="inherit">
            <SearchIcon />
          </IconButton>

          <IconButton color="inherit">
            <MoreIcon />
          </IconButton>

        </Toolbar>
      </AppBar>
    {/* </React.Fragment> */}

    <p> {""}</p>

            <Stack spacing={4} direction="row"
            alignItems="center"
            justifyContent="space-evenly"
            >

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

            {/* <IconButton  >
            <Link to="/">
               < HomeIcon sx={{ color: deepPurple[500], fontSize: 40 }} />
             </Link>
          </IconButton> */}
        </Layout>
    );
}


export default CheckInNow
