import React, { Component } from 'react'
import * as firebase from 'firebase'
import helpers from './helper'
import '../admin_css/03-Deadlines.css'

class Deadlines extends Component {
    state = {
        // Add Event
        modal_add: false,
        date: '',
        topic: '',
        description: '',

        // Render Data
        deadlines: [],
        modal: false,
        modal_deadline: ''
    }

    componentDidMount = _ => this.deadlines_fetch()

    // Fetch Data
    deadlines_fetch = _ => {
        firebase.database().ref('deadlines').once('value', snapshot => {
            snapshot.forEach((snap) => {
                var obj = {
                    deadline_id: snap.val().deadline_id,
                    deadline_date: snap.val().deadline_date,
                    deadline_topic: snap.val().deadline_topic,
                    deadline_description: snap.val().deadline_description
                }
                this.setState({ deadlines: this.state.deadlines.concat(obj) })
            })
        })
    }

    // Add Data
    deadlines_add = _ => {
        let id_num = helpers.timestamp()
        const { date, topic, description } = this.state

        let confirm = window.confirm('Are you sure you would like to add this deadline?')

        if (confirm) {
            firebase.database().ref('deadlines').child(`${id_num}`).update({
                deadline_id: id_num,
                deadline_date: date,
                deadline_topic: topic,
                deadline_description: description
            })

            this.setState({ modal_add: false, deadlines: [] })
            this.deadlines_fetch()
            this.clear()
            alert('Deadline successfully added.')
        }
    }

    // Edit Data
    deadlines_update = id => {
        const { date, topic, description } = this.state

        let confirm = window.confirm('Are you sure you would like to edit this deadline?')

        if (confirm) {
            firebase.database().ref('deadlines').child(`${id}`).update({
                deadline_date: date,
                deadline_topic: topic,
                deadline_description: description
            })

            this.setState({ modal_add: false, deadlines: [] })
            this.deadlines_fetch()
            this.clear()
            alert('Deadline successfully edited.')
        }
    }

    // Delete Data
    deadlines_delete = id => {
        let confirm = window.confirm('Are you sure you would like to delete this deadline?')

        if (confirm) {
            firebase.database().ref('deadlines').child(`${id}`).remove()

            this.setState({ deadlines: [] })
            this.deadlines_fetch()
            alert('Deadline successfully deleted.')
        }
    }

    // Render Data
    deadlines_render = props => {
        return (
            <tr>
                <td>{props.deadline_date}</td>
                <td>{props.deadline_topic}</td>
                <td>{props.deadline_description}</td>
                <td>
                    <button onClick={() => this.setState({ modal: true, modal_deadline: props.deadline_id })}>EDIT</button>
                    <button onClick={() => this.deadlines_delete(props.deadline_id)}>DELETE</button>
                </td>
            </tr>
        )
    }

    deadlineModals_render = props => {
        const { date, topic, description, modal_deadline } = this.state

        if (modal_deadline == props.deadline_id) {
            return (
                <div class="modal" onClick={() => this.setState({ modal: false })}>
                    <div class="modal-content" onClick={this.stopPropagation}>
                        <div class="modal-header"></div>
                        <div class="modal-body">
                            <form>
                                <input type="text" name="date" value={date} onChange={this.handleChange} placeholder="Deadline (MM/DD/YY)" autocomplete="off" required />
                                <input type="text" name="topic" value={topic} onChange={this.handleChange} placeholder="Deadline Topic" autocomplete="off" required />
                                <input type="text" name="description" value={description} onChange={this.handleChange} placeholder="Deadline Description" autocomplete="off" required />
                            </form>
                            <button onClick={() => this.deadlines_update(props.deadline_id)}>Save Changes</button>
                        </div>
                        <div class="modal-footer"></div>
                    </div>
                </div>
            )
        }
    }

    addDeadlinesModals_render = _ => {
        const { date, topic, description } = this.state

        return (
            <div class="modal" onClick={() => this.setState({ modal_add: false })}>
                <div class="modal-content" onClick={this.stopPropagation}>
                    <div class="modal-header"></div>
                    <div class="modal-body">
                        <form>
                            <input type="text" name="date" value={date} onChange={this.handleChange} placeholder="Deadline (MM/DD/YY)" autocomplete="off" required />
                            <input type="text" name="topic" value={topic} onChange={this.handleChange} placeholder="Deadline Topic" autocomplete="off" required />
                            <input type="text" name="description" value={description} onChange={this.handleChange} placeholder="Deadline Description" autocomplete="off" required />
                        </form>
                        <button onClick={() => this.deadlines_add()}>Add Deadline</button>
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
    
    stopPropagation = event => event.stopPropagation()

    clear = _ => {
        this.setState({
            date: '',
            topic: '',
            description: '',
            modal_deadline: ''
        })
    }

    render() {
        const { deadlines, modal, modal_add } = this.state

        return (
            <section id="deadlines_admin">
                <p>Noteable Deadlines</p>
                <button onClick={() => this.setState({ modal_add: true })}>Add Deadline</button>
                <div class="table">
                    <table class="table_contents">
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Topic</th>
                                <th>Description</th>
                                <th></th>
                            </tr>
                        </thead>

                        <tbody class="dataTable">
                            { deadlines.map(this.deadlines_render) }
                        </tbody>
                    </table>
                </div>

                { modal ===  true ? deadlines.map(this.deadlineModals_render) : null  }
                { modal_add === true ? this.addDeadlinesModals_render() : null }
            </section>
        )
    }
}

export default Deadlines