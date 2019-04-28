import React, { Component } from 'react'
import * as moment from 'moment'
import KhozModal from './KhozModal';
import Axios from '../services/Axios';
class AddEditBusinessHours extends Component {
    state = {
        alwaysOpen: this.props.business.hours_always_open
    }
    openingHours = { }
    componentWillMount() {
        console.log(this.props.hours)
        this.props.hours.map(hour => {
            this.openingHours[hour.day] = {}
            this.openingHours[hour.day]['start'] = hour.start
            this.openingHours[hour.day]['end'] = hour.end
            this.setState({ [hour.day]: true })
        })
        //     const index = this.props.hours.findIndex(hour => hour.day === day)
        //    return index >= 0 ? this.setState({[day]: true}) : this.setState({[day]: false})
    }
    timeOptions = [
        '00:00:00', '00:30:00',
        '01:00:00', '01:30:00',
        '02:00:00', '02:30:00',
        '03:00:00', '03:30:00',
        '04:00:00', '04:30:00',
        '05:00:00', '05:30:00',
        '06:00:00', '06:30:00',
        '07:00:00', '07:30:00',
        '08:00:00', '08:30:00',
        '09:00:00', '09:30:00',
        '10:00:00', '10:30:00',
        '11:00:00', '11:30:00',
        '12:00:00', '12:30:00',
        '13:00:00', '13:30:00',
        '14:00:00', '14:30:00',
        '15:00:00', '15:30:00',
        '16:00:00', '16:30:00',
        '17:00:00', '17:30:00',
        '18:00:00', '18:30:00',
        '19:00:00', '19:30:00',
        '20:00:00', '20:30:00',
        '21:00:00', '21:30:00',
        '22:00:00', '22:30:00',
        '23:00:00', '23:30:00'
    ]
    days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']


    selectedDay = (e, day) => {
        if (e.target.checked) {
            this.setState({ [day]: true })
            this.openingHours[day]={}
            this.openingHours[day]['start'] = '09:00:00'
            this.openingHours[day]['end'] = '17:00:00'
        } else {
            this.setState({ [day]: false })
            delete this.openingHours[day]
        }
    }
    handleCheck247Change = e => {
        console.log(e, e.target.checked, e.target.value)
        if (e.target.checked && e.target.value === 'selected_hrs') {
            this.setState({ alwaysOpen: false })
        } else if (e.target.checked && e.target.value === 'always_open') {
            this.setState({ alwaysOpen: true })
        }
    }
    openTimeChange = (e, day, status) => {
        this.openingHours[day][status] = e.target.value
        this.setState({ a: day })
    }
    saveChanges = () => {
        let postData = {'_method': 'PUT', 'openinghours': this.openingHours}
        console.log(postData)
        Axios.authInstance.post(Axios.API.businessEdit.editHoursUrl(this.props.business.slug), {'_method': 'PUT', 'openinghours': this.openingHours}).then(response => {
            if (response && response.data) {
                this.props.update(response.data.data)
                this.props.toggleModal()
            }
        })
    }
    render() {
        console.log(this.openingHours)
        
        return (
            <React.Fragment>
                    <input
                        type='radio'
                        name='check247'
                        onChange={this.handleCheck247Change}
                        value='selected_hrs'
                        checked={!this.state.alwaysOpen} /><span>Open on select hours</span>
                    <input
                        type='radio'
                        name='check247'
                        value='always_open'
                        onChange={this.handleCheck247Change}
                        checked={this.state.alwaysOpen} /><span>Always Open</span>
                    {
                        !this.state.alwaysOpen ?
                            this.days.map((day, index) =>
                                <div className='business_hour_day' key={index}>
                                    <input type='checkbox'
                                        defaultChecked={this.state[day]}
                                        onChange={e => this.selectedDay(e, day)} />

                                    <span>{day}</span>

                                    <span>open</span>
                                    <select
                                        onChange={e => this.openTimeChange(e, day, 'start')}
                                        value={this.openingHours[day] ? this.openingHours[day]['start'] : '09:00:00'}
                                        disabled={!this.state[day]}>
                                        {
                                            this.timeOptions.map((timeStamp, index) =>
                                                <option
                                                    key={index}
                                                    value={timeStamp}>{moment(timeStamp, 'HH:mm:ss').format('hh:mm A')}</option>)
                                        }
                                    </select>

                                    <span>close</span>
                                    <select
                                        onChange={e => this.openTimeChange(e, day, 'end')}
                                        value={this.openingHours[day] ? this.openingHours[day]['end']  : '17:00:00'}
                                        disabled={!this.state[day]}>
                                        {
                                            this.timeOptions.map((timeStamp, index) =>
                                                <option
                                                    key={index}
                                                    value={timeStamp}>{moment(timeStamp, 'HH:mm:ss').format('hh:mm A')}</option>)
                                        }
                                    </select>

                                </div>
                            )
                            : null
                    }
                    <button onClick={this.saveChanges}>Save</button>
                    <button onClick={this.props.toggleModal}>Cancel</button>

            </React.Fragment>

        )
    }
}
export default AddEditBusinessHours