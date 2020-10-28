import React, { Component } from 'react'
import * as firebase from 'firebase'
import { HashLink as Link } from 'react-router-hash-link'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import '../client_css/03-Home.css'

class Home extends Component {
    state = {
        nextEvents: [],
        deadlines: []
    }

    componentDidMount = _ => {
        this.nextEvents_fetch()
        this.deadlines_fetch()
    } 

    // Fetch Data
    nextEvents_fetch = _ => {
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
                this.setState({ nextEvents: this.state.nextEvents.concat(obj) })
            })
        })
    }

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

    // Render Data
    nextEvents_render = props => {
        return (
            <div class="coming-soon_carousel_contents">
                <img src={props.event_photo} />
                <div>
                    <h3>{props.event_name}</h3>
                    <h4>{props.event_date}, {props.event_time}, {props.event_location}</h4>
                    <p>{props.event_description}</p>
                </div>
            </div>
        )
    }

    deadlines_render = props => {
        return (
            <div class="timeline_contents">
                <p>{props.deadline_date}</p>
                <div>
                    <h2>{props.deadline_topic}</h2>
                    <p>{props.deadline_description}</p>
                </div>
            </div>
        )
    }

    render() {
        const { nextEvents, deadlines } = this.state

        const responsive = {
			desktop: {
				breakpoint: { max: 3000, min: 1350 },
				items: 3,
				slidesToSlide: 1
            },
            tablet: {
                breakpoint: { max: 1350, min: 900 },
				items: 2,
				slidesToSlide: 1
            },
            phone: {
                breakpoint: { max: 900, min: 250 },
				items: 1,
				slidesToSlide: 1
            }
		}

        return (
            <div>
                <section id="home">
                    <div>Tempus<div></div></div>
                    <div>Your online college dashboard</div>
                    <div> <Link to="/#coming-soon">Start</Link> </div>
                </section>

                <section id="coming-soon">
                    <p>Coming Soon</p>
                    <Carousel containerClass="coming-soon_carousel" responsive={responsive} infinite={false} swipeable={false} draggable={false}>
                        { nextEvents == null ? 'No Upcoming Events' : nextEvents.map(this.nextEvents_render) }
                    </Carousel>
                </section>

                <section id="deadlines">
                    <p>Dates to Remember</p>
                    <div class="timeline">
                        <div class="timeline_body">
                            { deadlines == null ? 'No Upcoming Deadlines' : deadlines.map(this.deadlines_render) }
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Home