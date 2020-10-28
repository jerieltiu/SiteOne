import React, { Component } from 'react'
import * as firebase from 'firebase'
import '../client_css/02-Footer.css'

class Footer extends Component {
    state = {
        quote: '',
        links: [],
        photos: []
    }

    componentDidMount = _ => {
        this.quote_fetch()
        this.links_fetch()
        this.photos_fetch()
    }

    // Fetch Data
    quote_fetch = _ => {
        firebase.database().ref('quote').once('value', snapshot => {
            snapshot.forEach((snap) => {
                this.setState({ quote: snap.val().quote })
            })
        })
    }

    links_fetch = _ => {
        firebase.database().ref('links').once('value', snapshot => {
            snapshot.forEach((snap) => {
                var obj = {
                    link_id: snap.val().link_id,
                    link_name: snap.val().link_name,
                    link_href: snap.val().link_href,
                }
                this.setState({ links: this.state.links.concat(obj) })
            })
        })
    }

    photos_fetch = _ => {
        firebase.database().ref('photos').once('value', snapshot => {
            snapshot.forEach((snap) => {
                var obj = {
                    photo_id: snap.val().photo_id,
                    photo_url: snap.val().photo_url
                }
                this.setState({ photos: this.state.photos.concat(obj) })
            })
        })
    }

    // Render Data
    quote_render = _ => {
        return (
            <p>{this.state.quote}</p>
        )
    }

    links_render = props => {
        return (
            <a href={props.link_href}>{props.link_name}</a>
        )
    }

    photos_render = props => {
        return (
            <img src={props.photo_url} />
        )
    }

    render() {
        const { links, photos } = this.state

        return (
            <section id="footer">
                <div>
                    <div>
                        <i class="fa fa-comment" aria-hidden="true"></i>
                        { links.map(this.links_render) }
                    </div>
                    <div>
                        <i class="fa fa-camera" aria-hidden="true"></i>
                        <div>
                            { photos.map(this.photos_render) }
                        </div>
                    </div>
                </div>
                <div>
                    <div></div>
                    { this.quote_render() }
                    <p>xstempus@gmail.com</p>
                    <a href="https://www.facebook.com/collegeopportunitiescommittee/"> <i class="fa fa-facebook" aria-hidden="true"></i> </a>
                    <p>&copy;Tempus</p>
                </div>
            </section>
        )
    }
}

export default Footer