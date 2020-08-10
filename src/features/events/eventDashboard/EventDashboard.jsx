import React, {useState} from 'react';
import { Grid } from 'semantic-ui-react';
import EventList from './EventList';
import EventForm from '../evetnForm/EventForm';
import {sampleData} from '../../../app/api/sampleData';

const EventDashboard = () => {
    const [events, setEvents] = useState(sampleData);

    function handleDeleteEvent(eventId) {
        setEvents(events.filter(evt => evt.id !== eventId))
    }

    return (
        <Grid>
            <Grid.Column width={10}>
                <EventList events={events} 
                    deleteEvent={handleDeleteEvent} />
            </Grid.Column>
            <Grid.Column width={6}>
            </Grid.Column>
        </Grid>
    )
}

export default EventDashboard; 