import React, { useState, useEffect } from 'react'
import { Calendar, momentLocalizer, Views } from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css'

const localizer = momentLocalizer(moment)

const ColoredDateCellWrapper = ({ children }) =>
  React.cloneElement(React.Children.only(children), {
    style: {
      backgroundColor: 'lightblue',
    },
  })

let plantEvents = [];

const createEvents = (plants) => {
  let plantVarietyList = [];
  for (let plant of plants) {
    // console.log(`plant`, plant)
    let plantName = plant.variety_name
    
    const checkPlantName = (arr, name) => {
      return arr.some(
        function(arrVal) {
          return name === arrVal;
        }
        )
      }
      
      if (!checkPlantName(plantVarietyList, plantName)) {
        plantVarietyList.push(plantName)
        if (plant.spring_sow_start) {
        let newEvent = {};
        let harvestEvent = {}
        let sowStart = moment(plant.spring_sow_start, 'MMMM DD')
        let sowEnd = moment(plant.spring_sow_end, 'MMMM DD')
        newEvent.start = sowStart;
        newEvent.end = sowEnd;
        newEvent.title = `${plant.variety_name} - Start seeds indoors`
        plantEvents.push(newEvent)
        let daysToHarvest = plant.daysToHarvest
        let harvestStart = moment(plant.spring_sow_start, 'MMMM DD').add(daysToHarvest, 'days')
        let harvestEnd = moment(plant.spring_sow_end, 'MMMM DD').add(daysToHarvest, 'days')
        harvestEvent.start = harvestStart;
        harvestEvent.end = harvestEnd;
        harvestEvent.title= `${plant.variety_name} - Harvest crops`
      }
      if (plant.spring_transplant_start) {
        let newEvent = {};
        let transplantStart = moment(plant.spring_transplant_start, 'MMMM DD')
        let transplantEnd = moment(plant.spring_transplant_end, 'MMMM DD')
        newEvent.start = transplantStart;
        newEvent.end = transplantEnd;
        newEvent.title = `${plant.variety_name} - Transplant seedlings`
        plantEvents.push(newEvent)
      }
      if (plant.fall_sow_start) {
        let newEvent = {};
        let harvestEvent = {}
        let sowStart = moment(plant.fall_sow_start, 'MMMM DD')
        let sowEnd = moment(plant.fall_sow_end, 'MMMM DD')
        newEvent.start = sowStart;
        newEvent.end = sowEnd;
        newEvent.title = `${plant.variety_name} - Start seeds indoors`
        plantEvents.push(newEvent)
        let daysToHarvest = plant.daysToHarvest
        let harvestStart = moment(plant.fall_sow_start, 'MMMM DD').add(daysToHarvest, 'days')
        let harvestEnd = moment(plant.fall_sow_end, 'MMMM DD').add(daysToHarvest, 'days')
        harvestEvent.start = harvestStart;
        harvestEvent.end = harvestEnd;
        harvestEvent.title= `${plant.variety_name} - Harvest crops`
      }
      if (plant.fall_transplant_start) {
        let newEvent = {};
        let transplantStart = moment(plant.fall_transplant_start, 'MMMM DD')
        let transplantEnd = moment(plant.fall_transplant_end, 'MMMM DD')
        newEvent.start = transplantStart;
        newEvent.end = transplantEnd;
        newEvent.title = `${plant.variety_name} - Transplant seedlings`
        plantEvents.push(newEvent)
      }
    }
  }
  console.log("plantVarietyList",plantVarietyList)
}

  let thisDate = moment("March 29", "MMMM DD")
  console.log(thisDate)

const MyCalendar = props => {
    const [events, setEvents] = useState([
        // {
        //   start: moment().month("march").date(22),
        //   end: moment().month("march").date(24),
        //   title: "Time Left to video"
        // },
        // {
        //   start: moment().month("march").date(26),
        //   end: moment().month("march").date(26),
        //   title: "Capstone Due"
        // },
        // {
        //   start: moment().month("march").date(27),
        //   end: moment().month("march").date(27),
        //   title: "Graduation: 6pm"
        // },
        // {
        //   start: moment("March 27", "MMMM DD"),
        //   end: thisDate,
        //   title: "Graduation: 6pm"
        // },
        // {
        //   start: moment().month("march").date(22),
        //   end: moment()
        //     .add(1, "days")
        //     .toDate(),
        //   title: "Some title"
        // }
      ])

      console.log(props.userAllGardenPlants)

      let allViews = Object.keys(Views).map(k => Views[k])

    useEffect(() => {
      createEvents(props.userAllGardenPlants)
      console.log("plantEvents", plantEvents)
      setEvents(plantEvents)
    }, [])

    return (
        <div className="userHomeBody">
            <Calendar
            
              events={events}
              views={['month']}
              view='month'
              step={60}
              showMultiDayTimes
              startAccessor="start"
              endAccessor="end"
              // max={dates.add(dates.endOf(new Date(2015, 17, 1), 'day'), -1, 'hours')}
              defaultDate={new Date()}
              components={{
                timeSlotWrapper: ColoredDateCellWrapper,
              }}
              style={{ height: '70vh', width: '80%' }}
              localizer={localizer}
            />
            {/* <Calendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            style={{ height: '70vh', width: '80%' }}
            /> */}
        </div>
    )
}
export default MyCalendar;