import React from 'react';
import ResponsiveAppBar from '../components/Navbar/navbar';

import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';
import Grid from '@mui/material/Grid';

const allevents = require('./events.json').events;

function Cal() {
    return (
      <Grid container spacing={2} alignItems="center" justifyContent="center">
        <Grid item xs={12}>
      <ResponsiveAppBar />
      </Grid>      
         <Grid item xs={11}>
        <FullCalendar
          plugins = {[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]}
          initialView = "timeGridWeek"
          initialDate = "2022-09-11"
          headerToolbar = {{
            start: 'timeGridWeek,timeGridDay,listWeek',
            // center: 'title',   
            end: 'prev,next'
          }}
          slotMinTime='08:00'
          height="auto"
          expandRows={true} 
          navLinks={true}
          events = {allevents}
          handleWindowResize={true}           
          nowIndicator
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
  }

export default Cal;