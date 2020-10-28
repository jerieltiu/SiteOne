import React, { Component } from 'react'
import * as firebase from 'firebase'
import '../client_css/05-Individual_College.css'

class Individual_College extends Component {
    state = {
        college_id: this.props.location.collegeID,
        college: [],
        requirements: []
    }

    componentWillMount = _ => {
        if (this.props.location.collegeID === undefined) {
            var collegeID = JSON.parse(localStorage.getItem("college_id"))
            this.setState({ college_id: collegeID })
        }
    }

    componentDidMount = _ => {
        const { college_id } = this.state

        if (college_id !== undefined) {
            localStorage.setItem("college_id", JSON.stringify(college_id))
        }

        this.college_fetch()
    }

    // Fetch Data
    college_fetch = _ => {
        firebase.database().ref('colleges').child(this.state.college_id).once('value', snapshot => {
            var obj = {
                college_id: snapshot.val().college_id,
                college_photo: snapshot.val().college_photo,
                college_name: snapshot.val().college_name,
                college_location: snapshot.val().college_location,
                college_background: snapshot.val().college_background,
                college_site: snapshot.val().college_site,
            }
            this.setState({ college: this.state.college.concat(obj) })
        })

        firebase.database().ref('colleges').child(this.state.college_id).child('requirements').once('value', snapshot => {
            snapshot.forEach((snap) => {
                this.setState({ requirements: [...this.state.requirements, snap.val().requirement] })
            })
        })
    }
    
    // Render Data
    college_render = props => {
        return (
            <div>
                <p>{props.college_name}</p>
                <p>{props.college_location}</p>
                <img src={props.college_photo} />
                <a href={props.college_site}>Visit the Official Website</a>
                <p>Brief Background</p>
                <p>{props.college_background}</p>
                <p>University Requirements</p>
                <ul>
                    { this.state.requirements.map(item => <li>{item}</li>) }
                </ul>
            </div>
        )
    }

    render() {
        return (
            <section class="individual_college">
                <a href="/explore">&larr;</a>
                { this.state.college.map(this.college_render) }
            </section>
        )
    }
}

export default Individual_College