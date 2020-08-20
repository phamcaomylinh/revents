import React, { useState } from "react";
import { Grid } from "semantic-ui-react";
import EventList from "../EventList/EventList";
import { useSelector } from "react-redux";

const EventDashboard = () => {
  const {events} = useSelector(state => state.event);

  function handleDeleteEvent(eventId) {
    // setEvents(events.filter((evt) => evt.id !== eventId));
  }

  return (
    <Grid>
      <Grid.Column width={10}>
        <EventList events={events} deleteEvent={handleDeleteEvent} />
      </Grid.Column>
      <Grid.Column width={6}>
        <h2>Event Filters</h2>
      </Grid.Column>
    </Grid>
  );
};

export default EventDashboard;
