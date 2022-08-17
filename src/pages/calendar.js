import React from 'react';
import { useState } from 'react';
import Calendar from 'react-calendar';
import Layout from "../components/layout"

import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

const allevents = require('./events.json').events;

function Cal() {
    function handleEventClick(event) {
        var eventId = event.event.Id
        window.open(`/eventDetails/${eventId}`)
        return (
            <h2>{event.start}</h2>
        )
    }
    return (
      <Layout>
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView="timeGridWeek"
          initialDate="2022-09-11"
          headerToolbar = {{
            start: 'timeGridWeek,timeGridDay',
            center: 'title',   
            end: 'prev,next'
          }}
          events={allevents}     
          nowIndicator
          eventClick={(event) => {var eventId = event.event.id
            window.open(`/eventDetails/${eventId}`)}}
        />
      </Layout>
    );
  }

export default Cal;