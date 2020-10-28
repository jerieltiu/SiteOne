import React, { Component } from 'react'
import * as firebase from 'firebase'
import helpers from './helper'
import '../admin_css/06-Footer.css'

class Footer extends Component {
    state = {
        modal_quote: false,
        quote: '',
        modal_link: false,
        links: [],
        link_href: '',
        link_name: '',
        modal_photo: false,
        photos: [],
        photo: '',
        photo_file: ''
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

    // Add Date
    links_add = _ => {
        let id_num = helpers.timestamp()
        const { link_href, link_name } = this.state

        let confirm = window.confirm('Are you sure you would like to add this link?')

        if (confirm) {
            firebase.database().ref('links').child(`${id_num}`).update({
                link_id: id_num,
                link_href: link_href,
                link_name: link_name
            })

            this.setState({ modal_link: false, links: [] })
            this.links_fetch()
            this.setState({ link_href: '', link_name: '' })
            alert('Link successfully added.')
        }
    }

    photos_add = _ => {
        let id_num = helpers.timestamp()

        let confirm = window.confirm('Are you sure you would like to add this photo?')

        if (confirm) {
            this.photoImage_add(id_num)
            
            this.setState({ photo_file: '', photo: '' })
            alert('Photo successfully added.')
        }
    }

    photoImage_add = async (id_num) => {
        const data = new FormData()

        data.append('file', this.state.photo_file)
        data.append('upload_preset', 'tempus')
        data.append('tags', [id_num])
        const response = await fetch('https://api.cloudinary.com/v1_1/xs-tempus/image/upload', { method: 'POST', body: data })
        const photo = await response.json()

        firebase.database().ref('photos').child(`${id_num}`).update({
            photo_id: id_num,
            photo_url: photo.secure_url
        })

        this.setState({ modal_photo: false, photos: [] })
        this.photos_fetch()
    }

    // Edit Data
    quote_update = _ => {
        let id_num = helpers.timestamp()
        const { quote } = this.state

        let confirm = window.confirm('Are you sure you would like to change this quote?')

        if (confirm) {
            firebase.database().ref('quote').child(`${id_num}`).update({
                quote: quote
            })

            this.setState({ modal_quote: false, quote: '' })
            this.quote_fetch()
            alert('Quote successfully edited.')
        }
    }

    // Delete Data
    links_delete = id => {
        let confirm = window.confirm('Are you sure you would like to delete this link?')

        if (confirm) {
            firebase.database().ref('links').child(`${id}`).remove()

            this.setState({ links: [] })
            this.links_fetch()
            alert('Link successfully deleted.')
        }
    }

    photos_delete = id => {
        let confirm = window.confirm('Are you sure you would like to delete this photo?')

        if (confirm) {
            firebase.database().ref('photos').child(`${id}`).remove()

            this.setState({ photos: [] })
            this.photos_fetch()
            alert('Photo successfully deleted.')
        }
    }

    // Render Data
    quoteModals_render = props => {
        const { quote } = this.state

        return (
            <div class="modal" onClick={() => this.setState({ modal_quote: false })}>
                <div class="modal-content" onClick={this.stopPropagation}>
                    <div class="modal-header"></div>
                    <div class="modal-body">
                        <form>
                            <input type="text" name="quote" value={quote} onChange={this.handleChange} placeholder="Quote" autocomplete="off" required />
                        </form>
                        <button onClick={() => this.quote_update()}>Save Changes</button>
                    </div>
                    <div class="modal-footer"></div>
                </div>
            </div>
        )
    }

    links_render = props => {
        return (
            <li>
                <button onClick={() => this.links_delete(props.link_id)}>Remove</button>
                <a href={props.link_href}>{props.link_name}</a>
            </li>
        )
    }

    linkModals_render = _ => {
        const { link_href, link_name } = this.state

        return (
            <div class="modal" onClick={() => this.setState({ modal_link: false })}>
                <div class="modal-content" onClick={this.stopPropagation}>
                    <div class="modal-header"></div>
                    <div class="modal-body">
                        <form>
                            <input type="text" name="link_href" value={link_href} onChange={this.handleChange} placeholder="Link URL" autocomplete="off" required />
                            <input type="text" name="link_name" value={link_name} onChange={this.handleChange} placeholder="Link Name" autocomplete="off" required />
                        </form>
                        <button onClick={() => this.links_add()}>Save Changes</button>
                    </div>
                    <div class="modal-footer"></div>
                </div>
            </div>
        )
    }

    photos_render = props => {
        return (
            <div>
                <img src={props.photo_url} />
                <span onClick={() => this.photos_delete(props.photo_id)}>&times;</span>
            </div>
        )
    }

    photoModals_render = _ => {
        const { photo } = this.state

        return (
            <div class="modal" onClick={() => this.setState({ modal_photo: false })}>
                <div class="modal-content" onClick={this.stopPropagation}>
                    <div class="modal-header"></div>
                    <div class="modal-body">
                        <form>
                            <input type="file" onChange={this.handlePhotos} class="fileInput" />
                            <img src={photo} style={{ width: '200px' }} />
                        </form>
                        <button onClick={() => this.photos_add()}>Save Changes</button>
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

    render() {
        const { quote, links, photos, modal_quote, modal_link, modal_photo } = this.state

        return (
            <section id="footer_admin">
                <p>Footer Contents</p>
                <div>
                    <p>Quote</p>
                    <div>
                        <button onClick={() => this.setState({ modal_quote: true })}>Change</button>
                        <p>{ quote }</p>
                    </div>
                </div>
                <div>
                    <p>Links</p>
                    <button onClick={() => this.setState({ modal_link: true })}>Add Link</button>
                    <ul>   
                        { links.map(this.links_render) }
                    </ul>
                </div>
                <div>
                    <p>Images</p>
                    <button onClick={() => this.setState({ modal_photo: true })}>Add Image</button>
                    <div class="image-wrap">
                        { photos.map(this.photos_render) }
                    </div>
                </div>

                { modal_quote === true ? this.quoteModals_render() : null }
                { modal_link === true ? this.linkModals_render() : null }
                { modal_photo === true ? this.photoModals_render() : null }
            </section>
        )
    }
}

export default Footer