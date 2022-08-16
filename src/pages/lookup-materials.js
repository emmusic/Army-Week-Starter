import * as React from "react"

//Components
import Layout from "../components/layout"
import Seo from "../components/seo"
import RegisterButton from "../components/registerButton"
import Bottombar from "../components/Bottombar/bottombar"

//MUI
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import { deepPurple, green } from '@mui/material/colors';
import FolderIcon from '@mui/icons-material/Folder';
import { DownloadRounded } from "@mui/icons-material";
import VideoLibraryRoundedIcon from '@mui/icons-material/VideoLibraryRounded';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Grid from "@mui/material/Grid";
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Fab from '@mui/material/Fab';
import List from '@mui/material/List';
import ListSubheader from '@mui/material/ListSubheader';
import PageviewIcon from '@mui/icons-material/Pageview';
import { QrCodeScanner } from "@mui/icons-material";


const LookupMaterialsText = [
    {
      id: 1,
      primary: 'Defense in the Digital Age and Whatnot',
     }
   ];

  const StyledFab = styled(Fab)({
    position: 'absolute',
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: '0 auto',
  });


function LookupMaterials() {

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

          <h5>Lookup Materials</h5>
              {/* <h4>
                Defense in the Digital Age
               </h4> */}
               <p>
               {""}
                </p>
                <RegisterButton />


               <React.Fragment>
      <CssBaseline />
      <Paper square sx={{ pb: '50px' }}>
        <Typography variant="h5" gutterBottom component="div" sx={{ p: 2, pb: 0 }}>
          Defense in the Digital Age
        </Typography>
        <List sx={{ mb: 2 }}>
          {LookupMaterialsText.map(({ id }) => (
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

<Bottombar />
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



            <Button variant="contained"
                href="/check-in-now"
                sx={{ bgcolor: green[500] }}
                endIcon={< QrCodeScanner />}>
                Check in
              </Button>

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
