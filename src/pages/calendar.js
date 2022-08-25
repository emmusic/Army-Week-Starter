import React from 'react';
import ResponsiveAppBar from '../components/Navbar/navbar';
import LocalizedStrings from 'react-localization';

import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';
import Grid from '@mui/material/Grid';

const allevents = require('../data/enevents.json').events;

//gets users browser language
var initialLocaleCode = navigator.language;

var en = require('../data/enevents.json').events;
var fr = require('../data/frevents.json').events;

let strings = new LocalizedStrings({
  en: {week: "week",
  day: "day", 
  list: "list",
  events: {en}
  },
  fr: {week: "semaine", 
  day: "jour",
  list: "liste",
  events: {fr}
  }
})

export default class Cal extends React.Component {
  render(){
    let width = window.innerWidth;
    if (width>768) {
    return (
      <Grid container spacing={2} alignItems="center" justifyContent="center">
        <Grid item xs={12}>
      <ResponsiveAppBar />
      </Grid>     
         <Grid item xs={11}>
        <FullCalendar
          plugins = {[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]}
          initialView = "timeGridWeek"
          initialDate = "2022-09-12"
          locale= {initialLocaleCode}
          headerToolbar = {{
            start: 'timeGridWeek,timeGridDay,listWeek',
            // center: 'title',   
            end: 'prev,next'
          }}
          buttonText={{week: strings.week, day: strings.day, list: strings.list }}
          slotMinTime='08:00'
          height="auto"
          expandRows={true} 
          navLinks={true}
          events = {strings.events[initialLocaleCode]}
          handleWindowResize={true}           
          nowIndicator
          firstDay={1}
          allDaySlot = {false}
          contentHeight="auto"
          slotDuration="00:10:00"
          eventOverlap = {false}
          eventClick = {(event) => {var eventId = event.event.id
            window.open(`/eventDetails/${eventId}`)}}
        />
         </Grid>
        </Grid>
    );
  } else {
    //For mobile
    //the same but without week view
    return (
      <Grid container spacing={2} alignItems="center" justifyContent="center">
      <Grid item xs={12}>
    <ResponsiveAppBar />
    </Grid>     
       <Grid item xs={11}>
      <FullCalendar
        plugins = {[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]}
        initialView = "timeGridDay"
        initialDate = "2022-09-12"
        locale= {initialLocaleCode}
        headerToolbar = {{
          start: 'timeGridDay,listWeek',
          // center: 'title',   
          end: 'prev,next'
        }}
        buttonText={{day: strings.day, list: strings.list }}
        slotMinTime='08:00'
        height="auto"
        expandRows={true} 
        navLinks={true}
        events = {strings.events[initialLocaleCode]}
        handleWindowResize={true}           
        nowIndicator
        firstDay={1}
        allDaySlot = {false}
        contentHeight="auto"
        slotDuration="00:10:00"
        eventOverlap = {false}
        eventClick = {(event) => {var eventId = event.event.id
          window.open(`/eventDetails/${eventId}`)}}
      />
       </Grid>
      </Grid>
    )
  }
}
}