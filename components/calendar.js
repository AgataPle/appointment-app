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
                        endTime = '08:00'
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
                            {title: 'Zajęcia 2', date: Date.parse('2020-01-27 10:00')},
                            // {title: 'Zajęcia 3', date: '2020-01-27T12:00:00'},
                            // {title: 'Zajęcia 4', date: '2020-01-27T14:00:00'},
                            // {title: 'Zajęcia 5', date: '2020-01-27T16:00:00'},
                            // {title: 'Zajęcia 1', date: '2020-01-28T08:00:00'},
                            // {title: 'Zajęcia 2', date: '2020-01-28T10:00:00'},
                            // {title: 'Zajęcia 3', date: '2020-01-28T12:00:00'},
                            // {title: 'Zajęcia 4', date: '2020-01-28T14:00:00'},
                            // {title: 'Zajęcia 5', date: '2020-01-28T16:00:00'},
                            // {title: 'Zajęcia 1', date: '2020-01-29T08:00:00'},
                            // {title: 'Zajęcia 2', date: '2020-01-29T10:00:00'},
                            // {title: 'Zajęcia 3', date: '2020-01-29T12:00:00'},
                            // {title: 'Zajęcia 4', date: '2020-01-29T14:00:00'},
                            // {title: 'Zajęcia 5', date: '2020-01-29T16:00:00'},
                            // {title: 'Zajęcia 1', date: '2020-01-30T08:00:00'},
                            // {title: 'Zajęcia 2', date: '2020-01-30T10:00:00'},
                            // {title: 'Zajęcia 3', date: '2020-01-30T12:00:00'},
                            // {title: 'Zajęcia 4', date: '2020-01-30T14:00:00'},
                            // {title: 'Zajęcia 5', date: '2020-01-30T16:00:00'},
                            // {title: 'Zajęcia 1', date: '2020-01-31T08:00:00'},
                            // {title: 'Zajęcia 2', date: '2020-01-31T10:00:00'},
                            // {title: 'Zajęcia 3', date: '2020-01-31T12:00:00'},
                            // {title: 'Zajęcia 4', date: '2020-01-31T14:00:00'},
                            // {title: 'Zajęcia 5', date: '2020-01-31T16:00:00'}
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
