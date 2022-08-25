import * as React from "react"
import LocalizedStrings from 'react-localization';

//Components
import Faq from "react-faq-component";
import Layout from "../components/layout"

//MUI
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

let strings = new LocalizedStrings({
    en:{pagetitle:"Help",
    more:"Still have questions?",
      data: {
        title: "FAQ",
        rows: [
            {
                title: "Where can I find the presentation?",
                content: `From the calendar you can click on a particular event which will show you further information about that event, 
                including the presentation.`,
            },
            {
                title: "Do I need to register?",
                content:
                    `Yes, you need to register for the Zoom Webinar for each part of army week, regardless if you are participating virtually 
                    or in-person. You would have received an Outlook calendar invite for each part of Army Week that included a link to 
                    register for the Zoom Webinar.`,
            },
            {
                title: "How do I check in to an event?",
                content: `Scan the QR Code on your phone and you'll be redirected to a page that will ask you to type your name.`,
            },
            {
                title: "Where can I see the event's location?",
                content: `From the calendar you can click on a particular event which will show you further information about that event, 
                including the location.` ,
            },
            {
                title: "How can I contact the event's organizer?",
                content: `If you have questions not answered by this FAQ yoou can contact the organizers at (email address).` ,
            },
            {
                title: "What Covid protocols are in place?",
                content: ` Non-Medical Masks are required indoors throughout Army Week, except by speakers and panelists, and when eating or drinking.` ,
            },
            {
                title: "Do in-person events have limited capacity?",
                content: `Yes. Participation in-person is limited to those invited to participate in person as per the Army Week 2022 Operation Order.` ,
            },
            {
                title: "Are all events open to anyone?",
                content: `No. Participation is limited to those invited as per the Army Week 2022 Operation Order. ` ,
            },
        ],
    },
    },
    fr: {pagetitle:"Aide",
    more:"Encore des questions?",
      data: {
        title: "FAQ",
        rows: [
            {
                title: "Ou est-ce-que je peux trouver le présentation?",
                content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat,
                  ultricies metus at, consequat velit. Curabitur est nibh, varius in tellus nec, mattis pulvinar metus.
                  In maximus cursus lorem, nec laoreet velit eleifend vel. Ut aliquet mauris tortor, sed egestas libero interdum vitae.
                  Fusce sed commodo purus, at tempus turpis.`,
            },
            {
                title: "Est-ce que j'ai besion de m'inscrire?",
                content:
                    "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam, vitae convallis ex tortor sed dolor.",
            },
            {
                title: "How can I contact the event organizer",
                content: `Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem.
                Fusce tempor lacus ut libero posuere viverra. Nunc velit dolor, tincidunt at varius vel, laoreet vel quam.
                Sed dolor urna, lobortis in arcu auctor, tincidunt mattis ante. Vivamus venenatis ultricies nibh in volutpat.
                Cras eu metus quis leo vestibulum feugiat nec sagittis lacus.Mauris vulputate arcu sed massa euismod dignissim. `,
            },
            {
                title: "Are COVID Protocols in place?",
                content: `Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem.
                Fusce tempor lacus ut libero posuere viverra. Nunc velit dolor, tincidunt at varius vel, laoreet vel quam.
                Sed dolor urna, lobortis in arcu auctor, tincidunt mattis ante. Vivamus venenatis ultricies nibh in volutpat.
                Cras eu metus quis leo vestibulum feugiat nec sagittis lacus.Mauris vulputate arcu sed massa euismod dignissim. ` ,
            },
            {
                title: "Do events have limited capacity?",
                content: `Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem.
                Fusce tempor lacus ut libero posuere viverra. Nunc velit dolor, tincidunt at varius vel, laoreet vel quam.
                Sed dolor urna, lobortis in arcu auctor, tincidunt mattis ante. Vivamus venenatis ultricies nibh in volutpat.
                Cras eu metus quis leo vestibulum feugiat nec sagittis lacus.Mauris vulputate arcu sed massa euismod dignissim. ` ,
            },
            {
                title: "How do I 'Check in' to an event?",
                content: `Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem.
                Fusce tempor lacus ut libero posuere viverra. Nunc velit dolor, tincidunt at varius vel, laoreet vel quam.
                Sed dolor urna, lobortis in arcu auctor, tincidunt mattis ante. Vivamus venenatis ultricies nibh in volutpat.
                Cras eu metus quis leo vestibulum feugiat nec sagittis lacus.Mauris vulputate arcu sed massa euismod dignissim. ` ,
            },
        ],
    },
    },
   });

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  //This is placeholder data and will need to be filled with actual Questions/Answers

const styles = {
    // bgColor: 'white',
    titleTextColor: 'green',
    // titleTextSize: '48px',
    rowTitleColor: 'black',
    // rowTitleTextSize: 'medium',
    // rowContentColor: 'grey',
    rowContentTextSize: '16px',
    // rowContentPaddingTop: '10px',
    //rowContentPaddingBottom: '10px',
    //rowContentPaddingLeft: '150px',
    //rowContentPaddingRight: '150px',
    // arrowColor: "red",
    //transitionDuration: "1s",
    // timingFunc: "ease"
};

const config = {
    // animate: true,
    // arrowIcon: "V",
    // tabFocus: true
};

function Help() {

    return (
        <Layout>
        <div>
            <Grid container spacing={2}>
                <Grid item xs={22}>
                    <Item>
                        <h2>{strings.pagetitle}</h2>
                    </Item>

                </Grid>
                <Grid item xs={12}>
                    <Box m={5}>
                        <Faq
                            data={strings.data}
                            styles={styles}
                            config={config}
                        />
                    </Box>
                </Grid>
                <Box m="auto">
                <h5>{strings.more}</h5>
                Replace with message capability
                    {/* <Button variant="contained" color="success" href="/contact">
                    Contact Us
                    </Button> */}
                </Box>
            </Grid>
        </div>
        </Layout>
    );
}

export default Help