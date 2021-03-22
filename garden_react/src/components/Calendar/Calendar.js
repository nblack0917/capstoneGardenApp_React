import React from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import '../../../node_modules/react-big-calendar/lib/css/react-big-calendar.css'

const localizer = momentLocalizer(moment)

const MyCalendar = props => {
    
    return (
        <div>
            <Calendar
            localizer={localizer}
            events={myEventsList}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 500 }}
            />
        </div>
    )
}
export default MyCalendar;