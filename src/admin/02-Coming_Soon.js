import React, { Component } from 'react'
import * as firebase from 'firebase'
import helpers from './helper'
import '../admin_css/02-Coming_Soon.css'

class Coming_Soon extends Component {
    state = {
        // Add Data
        modal_add: false,
        photo_file: '',
        photo: '',
        title: '',
        date: '',
        time: '',
        location: '',
        description: '',

        // Render Data
        events: [],
        modal: false,
        modal_event: ''
    }

    componentDidMount = _ => this.events_fetch()

    // Fetch Data
    events_fetch = _ => {
        firebase.database().ref('events').once('value', snapshot => {
            snapshot.forEach((snap) => {
                var obj = {
                    event_id: snap.val().event_id,
                    event_name: snap.val().event_name,
                    event_date: snap.val().event_date,
                    event_time: snap.val().event_time,
                    event_location: snap.val().event_location,
                    event_description: snap.val().event_description,
                    event_photo: snap.val().event_photo
                }
                this.setState({ events: this.state.events.concat(obj) })
            })
        })
    }

    // Add Data
    events_add = _ => {
        let id_num = helpers.timestamp()
        const { title, date, time, location, description } = this.state

        let confirm = window.confirm('Are you sure you would like to add this event?')

        if (confirm) {
            this.eventImage_add(id_num)
        
            firebase.database().ref('events').child(`${id_num}`).update({
                event_id: id_num,
                event_name: title,
                event_date: date,
                event_time: time, 
                event_location: location,
                event_description: description
            })

            this.setState({ modal_add: false, events: [] })
            this.events_fetch()
            this.clear()
            alert('Event successfully added.')
        }
    }

    eventImage_add = async (id_num) => {
        const data = new FormData()

        data.append('file', this.state.photo_file)
        data.append('upload_preset', 'tempus')
        data.append('tags', [id_num])
        const response = await fetch('https://api.cloudinary.com/v1_1/xs-tempus/image/upload', { method: 'POST', body: data })
        const photo = await response.json()

        firebase.database().ref('events').child(`${id_num}`).update({
            event_photo: photo.secure_url
        })
    }

    // Edit Data
    events_update = id => {
        const { title, date, time, location, description } = this.state

        let confirm = window.confirm('Are you sure you would like to edit this event?')

        if (confirm) {
            this.eventImage_add(id)
        
            firebase.database().ref('events').child(`${id}`).update({
                event_name: title,
                event_date: date,
                event_time: time, 
                event_location: location,
                event_description: description
            })

            this.setState({ modal: false, events: [] })
            this.events_fetch()
            this.clear()
            alert('Event successfully edited.')
        }
    }

    // Delete Data
    events_delete = id => {
        let confirm = window.confirm('Are you sure you would like to delete this event?')

        if (confirm) {
            firebase.database().ref('events').child(`${id}`).remove()

            this.setState({ events: [] })
            this.events_fetch()
            alert('Event successfully deleted.')
        }
    }

    // Render Data
    events_render = props => {
        return (
            <tr>
                <td>
                    <img src={props.event_photo} />
                </td>
                <td>{props.event_name}</td>
                <td>{props.event_date}<br /><br />{props.event_time}<br /><br/>@{props.event_location}</td>
                <td>{props.event_description}</td>
                <td>
                    <button onClick={() => this.setState({ modal: true, modal_event: props.event_id })}>EDIT</button>
                    <button onClick={() => this.events_delete(props.event_id)}>DELETE</button>
                </td>
            </tr>
        )
    }

    eventModals_render = props => {
        const { photo, title, date, time, location, description, modal_event } = this.state

        if (modal_event == props.event_id) {
            return (
                <div class="modal" onClick={() => this.setState({ modal: false })}>
                    <div class="modal-content" onClick={this.stopPropagation}>
                        <div class="modal-header"></div>
                        <div class="modal-body">
                            <form>
                                <input type="file" onChange={this.handlePhotos} class="fileInput" />
                                <img src={photo} style={{ width: '200px' }} />
                                <input type="text" name="title" value={title} onChange={this.handleChange} placeholder="Event Title" autocomplete="off" required />
                                <input type="text" name="date" value={date} onChange={this.handleChange} placeholder="Event Date (MM/DD/YY)" autocomplete="off" required />
                                <input type="text" name="time" value={time} onChange={this.handleChange} placeholder="Event Time (HH:MM)AM/PM" autocomplete="off" required />
                                <input type="text" name="location" value={location} onChange={this.handleChange} placeholder="Event Location" autocomplete="off" required />
                                <input type="text" name="description" value={description} onChange={this.handleChange} placeholder="Event Description" autocomplete="off" required />
                            </form>
                            <button onClick={() => this.events_update(props.event_id)}>Save Changes</button>
                        </div>
                        <div class="modal-footer"></div>
                    </div>
                </div>
            )
        }
    }

    addEventModals_render = _ => {
        const { photo, title, date, time, location, description } = this.state

        return (
            <div class="modal" onClick={() => this.setState({ modal_add: false })}>
                <div class="modal-content" onClick={this.stopPropagation}>
                    <div class="modal-header"></div>
                    <div class="modal-body">
                        <form>
                            <input type="file" onChange={this.handlePhotos} class="fileInput" />
                            <img src={photo} style={{ width: '200px' }} />
                            <input type="text" name="title" value={title} onChange={this.handleChange} placeholder="Event Title" autocomplete="off" required />
                            <input type="text" name="date" value={date} onChange={this.handleChange} placeholder="Event Date (MM/DD/YY)" autocomplete="off" required />
                            <input type="text" name="time" value={time} onChange={this.handleChange} placeholder="Event Time (HH:MM)AM/PM" autocomplete="off" required />
                            <input type="text" name="location" value={location} onChange={this.handleChange} placeholder="Event Location" autocomplete="off" required />
                            <input type="text" name="description" value={description} onChange={this.handleChange} placeholder="Event Description" autocomplete="off" required />
                        </form>
                        <button onClick={() => this.events_add()}>Add Event</button>
                    </div>
                    <div class="modal-footer"></div>
                </div>
            </div>
        )
    }

    // Helper Functions
	handleChange = event => {
		event.preventDefault()
		const {name, value} = event.target
		this.setState({ [name]: value })
    }

    handlePhotos = event => {
        event.preventDefault()
        this.setState({ 
            photo: URL.createObjectURL(event.target.files[0]),
            photo_file: event.target.files[0]
        })
    }
    
    stopPropagation = event => event.stopPropagation()

    clear = _ => {
        this.setState({
            photo_file: '',
            photo: '',
            title: '',
            date: '',
            time: '',
            location: '',
            description: '',
            modal_event: ''
        })
    }

    render() {
        const { events, modal, modal_add } = this.state

        return (
            <section id="coming_soon">
                <p>Events Coming Soon</p>
                <button onClick={() => this.setState({ modal_add: true })}>Add Event</button>
                <div class="table">
                    <table class="table_contents">
                        <thead>
                            <tr>
                                <th>Photo</th>
                                <th>Event</th>
                                <th>Date & Location</th>
                                <th>Description</th>
                                <th></th>
                            </tr>
                        </thead>

                        <tbody class="dataTable">
                            { events.map(this.events_render) }
                        </tbody>
                    </table>
                </div>

                { modal ===  true ? events.map(this.eventModals_render) : null }
                { modal_add === true ? this.addEventModals_render() : null }
            </section>
        )
    }
}

export default Coming_Soon