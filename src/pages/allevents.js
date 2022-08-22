import React from 'react';
import Layout from "../components/layout"

//MUI
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { ListItemButton } from '@mui/material';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import CheckInPopper from "../components/checkInPopper"
import CheckInButtons from "../components/checkInBtn"

//import the events JSON
var allevents = require('./events.json').events;
//filtering out Lunch and Break from the event list
var events = allevents.filter(function (event) {
  return event.Break !== true;
});
//Filtering events for each date
var mon = events.filter(function (event) {
  return event.Date === "Mon Sept 12";
});
var tue = events.filter(function (event) {
  return event.Date === "Tue Sept 13";
});
var wed = events.filter(function (event) {
  return event.Date === "Wed Sept 14";
});
var thu = events.filter(function (event) {
  return event.Date === "Thur Sept 15";
});
var fri = events.filter(function (event) {
  return event.Date === "Fri Sept 16";
});
var sun = events.filter(function (event) {
  return event.Date === "Sun Sept 18";
});

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
                    <h2>All Events</h2>
                </Item>
            </Grid>
            <Grid item xs={12}>
            <List dense={true}>
            {/* This function maps all elements of the array into List Items */}

<h2>Monday Sept 12</h2>
            {mon.map(event => {
          return (
            <ListItem>
            <ListItemButton href={`/eventDetails/${event.id}`}>
            <Grid item xs={12}>
              <ListItemText>{event.title}</ListItemText>
              </Grid>
              <Grid item xs={6}></Grid>
              <Grid item xs={12} justifyContent="right">
              <ListItemText secondary={event.Time} />
              </Grid>
            </ListItemButton>
            </ListItem>
          );
            })}

<h2>Tuesday Sept 13</h2>
            {tue.map(event => {
          return (
            <ListItem>
                 <CheckInButtons>
                  </CheckInButtons>
            <ListItemButton href={`/eventDetails/${event.Id}`}>
            <Grid item xs={12}>
              <ListItemText>{event.title}</ListItemText>
              </Grid>
              <Grid item xs={6}></Grid>
              <Grid item xs={12} justifyContent="right">
              <ListItemText secondary={event.Time} />

              </Grid>
            </ListItemButton>

            </ListItem>
          );
            })}

<h2>Wednesday Sept 14</h2>
            {wed.map(event => {
          return (
            <ListItem>
            <ListItemButton href={`/eventDetails/${event.id}`}>
            <Grid item xs={6}>
              <ListItemText>{event.title}</ListItemText>
              </Grid>
              <Grid item xs={6}></Grid>
              <Grid item xs={6} justifyContent="right">
              <ListItemText secondary={event.Time} />
              </Grid>
            </ListItemButton>
            </ListItem>
          );
            })}

<h2>Thursday Sept 15</h2>
            {thu.map(event => {
          return (
            <ListItem>
            <ListItemButton href={`/eventDetails/${event.id}`}>
            <Grid item xs={12}>
              <ListItemText>{event.title}</ListItemText>
              </Grid>
              <Grid item xs={6}></Grid>
              <Grid item xs={12} justifyContent="right">
              <ListItemText secondary={event.Time} />
              </Grid>
            </ListItemButton>
            </ListItem>
          );
            })}

<h2>Friday Sept 16</h2>
            {fri.map(event => {
          return (
            <ListItem>
            <ListItemButton href={`/eventDetails/${event.id}`}>
            <Grid item xs={12}>
              <ListItemText>{event.title}</ListItemText>
              </Grid>
              <Grid item xs={6}></Grid>
              <Grid item xs={12} justifyContent="right">
              <ListItemText secondary={event.Time} />
              </Grid>
            </ListItemButton>
            </ListItem>
          );
            })}

<h2>Sunday Sept 18</h2>
            {sun.map(event => {
          return (
            <ListItem>
            <ListItemButton href={`/eventDetails/${event.id}`}>
            <Grid item xs={12}>
              <ListItemText>{event.title}</ListItemText>
              </Grid>
              <Grid item xs={6}></Grid>
              <Grid item xs={12} justifyContent="right">
              <ListItemText secondary={event.Time} />
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