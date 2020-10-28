import React, { Component } from 'react'
import * as firebase from 'firebase'
import { HashLink as Link } from 'react-router-hash-link'
import '../client_css/04-Explore.css'
import Select from 'react-select'

class Explore extends Component {
    state = {
        colleges: [],
        location: 'All',
        locations_options: [
            { value: 'All', label: 'All' },
            { value: 'Local', label: 'Local' },
            { value: 'Abroad', label: 'Abroad' }
        ]
    }

    componentDidMount = _ => this.colleges_fetch()

    // Fetch Data
    colleges_fetch = _ => {
        firebase.database().ref('colleges').once('value', snapshot => {
            snapshot.forEach((snap) => {
                var obj = {
                    college_id: snap.val().college_id,
                    college_photo: snap.val().college_photo,
                    college_name: snap.val().college_name,
                    college_location: snap.val().college_location,
                    college_context: snap.val().college_context
                }
                this.setState({ colleges: this.state.colleges.concat(obj) })
            })
        })
    }

    // Render Data
    colleges_render = props => {
        const { location } = this.state

        const college = _ => {
            return (
                <div class="colleges_contents">
                    <Link to={{ 
                        pathname: `/explore/${props.college_id}`,
                        collegeID: props.college_id
                    }}>
                        <img src={props.college_photo} />
                    </Link>
                    <p>{props.college_name}</p>
                    <p>{props.college_location}</p>
                </div>
            )
        }

        if (location === 'All') return college()
        else {
            if (props.college_context == location) return college()
        }
    }

    // General Functions
    handleChange = option => {
        this.setState({ location: option.value })
    }

    render() {
        const { colleges, locations_options } = this.state

        return (
            <section id="explore">
                <p>Explore Colleges</p>
                <div class="colleges_filters">
                    <Select options={locations_options} defaultValue={{ value: "", label: '---Select University Location---' }} onChange={this.handleChange} style={{ color: 'black' }} />
                </div>
                <div class="colleges">
                    { colleges !== null ? colleges.map(this.colleges_render) : null }
                </div>
            </section>
        )
    }
}

export default Explore