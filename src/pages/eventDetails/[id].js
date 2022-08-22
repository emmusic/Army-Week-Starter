import * as React from "react"

//Components
import Layout from "../../components/layout"
import Seo from "../../components/seo"


//MUI
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { green } from '@mui/material/colors';
import { DownloadRounded } from "@mui/icons-material";
import Typography from '@mui/material/Typography';
import VideoLibraryRoundedIcon from '@mui/icons-material/VideoLibraryRounded';
import { PictureAsPdf } from "@mui/icons-material";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

// import ImagePreview from "../../components/imagePreview";
import DownloadBtn from "../../components/Download/downloadBtn.js";

//import the events JSON
var events = require('../events.json').events;

function SelectedEvent(props) {
  const eventId = props.params.id
  // I couldn't get the lookup to work, for this line below to work the events need to stay in the correct order where their id=index
  var specificEvent = events[eventId];

    return (

        <Layout>
          <Card sx={{ minWidth: 275 }}>
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
          Date: {specificEvent.Date}
          <br />
          Time: {specificEvent.Time}
          <br />
          Location: {specificEvent.Location}
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

        </Layout>
    );
}

export const Head = () => <Seo title="Selected Event" />

export default SelectedEvent