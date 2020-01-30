import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction' // needed for dayClick

import '../css/style.scss'

export default class MyComponent extends React.Component {

    calendarComponentRef = React.createRef()
    state = {
        calendarEvents: [
            {
                numberOfUsers: 0
            }
        ]
    };

    render() {
        return (
            <div className='demo-app'>
                <div className='demo-app-calendar'>
                    <FullCalendar
                        fullDay = "false"
                        timeZone = 'local'
                        startTime = '08:00'
                        endTime = '18:00'
                        slotDuration = "00:30:00"
                        defaultView="timeGridWeek"
                        aspectRatio = "1.8"
                        editable = "true"
                        header={{
                            left: 'prev,next today',
                            center: 'title',
                            right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
                        }}
                        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                        ref={this.calendarComponentRef}
                        events={this.handleSinginClick}
                        weekends={false}
                        events={[
                            {title: 'Zajęcia 1', date: Date.parse('2020-01-27 08:00')},

                        ]}

                    />
                </div>
            </div>
        )
    }


    handleSinginClick = () => {
        if (confirm('Czy chcesz zapisać się na te zajęcia?')) {
            this.setState({
                numberOfUsers: numberOfUsers + 1

            })
        }
    }

}
