import React, { useState } from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css'

const localizer = momentLocalizer(moment)

const MyCalendar = props => {
    const [events, setEvents] = useState([
        {
          start: moment().month("march").date(22),
          end: moment().month("march").date(24),
          title: "Time Left to video"
        },
        {
          start: moment().month("march").date(26),
          end: moment().month("march").date(26),
          title: "Capstone Due"
        },
        {
          start: moment().month("march").date(27),
          end: moment().month("march").date(27),
          title: "Graduation: 6pm"
        },
        // {
        //   start: moment().month("march").date(22),
        //   end: moment()
        //     .add(1, "days")
        //     .toDate(),
        //   title: "Some title"
        // }
      ])

    return (
        <div>
            <Calendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            style={{ height: '70vh', width: '80%' }}
            />
        </div>
    )
}
export default MyCalendar;