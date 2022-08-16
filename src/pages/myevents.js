import React from 'react';
import Layout from "../components/layout"

//MUI
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { ListItemButton } from '@mui/material';
import Container from '@mui/material/Container';

//import the events JSON
var events = require('./events.json').events;

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const MyEvents = () => {

  return(
    <Layout>
    <div>
        <Grid container spacing={2} alignItems="center" justifyContent="center">
            <Grid item xs={12}>
                <Item>
                    <h2>My Events</h2>
                </Item>
            </Grid>
            <Grid item xs={10}>
            <List dense={true}>
            {/* This function maps all elements of the array into List Items */}
            {events.map(event => {
          return (
            <ListItem>
            <ListItemButton href={`/eventDetails/${event.Id}`}>
            <Grid item xs={10}>
              <ListItemText>{event.Title}</ListItemText>
              </Grid>
              <Grid item xs={10}>
              <ListItemText secondary={event.Date} />
              </Grid>
            </ListItemButton>
            </ListItem>
          );
            })}
            </List>
            </Grid>
      </Grid>
    </div>
    <Container maxWidth="md">
             <p>
            </p>
      </Container>
      <Container maxWidth="md">
             <p>
            </p>
      </Container>
    </Layout>
  )
}

export default MyEvents