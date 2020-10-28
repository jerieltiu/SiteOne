import React, { Component } from 'react'
import * as firebase from 'firebase'
import helpers from './helper'
import '../client_css/05-Individual_College.css'

class Add_College extends Component {
    state = {
        name: '',
        location: '',
        context: '',
        original_site: '',
        background: '',
        requirement: '',
        requirements: [],
        photo_file: '',
        photo: ''
    }

    // Add Data
    colleges_add = _ => {
        let id_num = helpers.timestamp()
        const { name, location, context, original_site, background, requirements } = this.state

        let confirm = window.confirm('Are you sure you would like to add this college?')

        if (confirm) {
            this.collegeImage_add(id_num)

            firebase.database().ref('colleges').child(`${id_num}`).update({
                college_id: id_num,
                college_name: name,
                college_location: location,
                college_context: context,
                college_site: original_site,
                college_background: background
            })

            for (let i = 0; i < requirements.length; i++) {
                firebase.database().ref('colleges').child(`${id_num}`).child('requirements').child(requirements[i]).update({
                    requirement: requirements[i]
                })
            }
    
            this.setState({
                name: '',
                location: '',
                context: '',
                original_site: '',
                background: '',
                requirement: '',
                requirements: []
            })

            alert('College successfully added.')
        }
    }

    collegeImage_add = async (id_num) => {
        const data = new FormData()

        data.append('file', this.state.photo_file)
        data.append('upload_preset', 'tempus')
        data.append('tags', [id_num])
        const response = await fetch('https://api.cloudinary.com/v1_1/xs-tempus/image/upload', { method: 'POST', body: data })
        const photo = await response.json()

        firebase.database().ref('colleges').child(`${id_num}`).update({
            college_photo: photo.secure_url
        })
    }

    requirement_add = event => {
        event.preventDefault()
        this.setState({ requirements: [...this.state.requirements, this.state.requirement], requirement: '' })
    }

    // Render Data
    requirements_render = item => {
        return (
            <li>{item}</li>
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

    render() {
        const { name, location, context, original_site, background, requirement, requirements, photo } = this.state

        return (
            <section class="individual_college_admin">
                <a href="/yultnbimscsXzBUKKhwaq@@@@4t4t4E9L4Xrr7;fadjsjfdsajfpjwa543666433lkjfU8Dq3q@534fgdgjtsryh8836jggjdid;;3flsZ/colleges">&larr;</a>
                <div>
                    <form>
                        <input type="text" name="name" value={name} onChange={this.handleChange} placeholder="University Name" autocomplete="off" />
                        <input type="text" name="location" value={location} onChange={this.handleChange} placeholder="University Location" autocomplete="off" />
                        <select name="context" value={context} onChange={this.handleChange} autocomplete="off">
                            <option value="">---Select Global Location---</option>
                            <option value="Local">Local</option>
                            <option value="Abroad">Abroad</option>
                        </select>
                        <input type="text" name="original_site" value={original_site} onChange={this.handleChange} placeholder="Link to University Site" autocomplete="off" />
                        <input type="text" name="background" value={background} onChange={this.handleChange} placeholder="Brief Background" autocomplete="off" />
                        <input type="text" name="requirement" value={requirement} onChange={this.handleChange} placeholder="Input Requirement" autocomplete="off" />
                        <button onClick={this.requirement_add}>Input Requirement</button>
                        <p>University Requirements:</p>
                        <ul>
                            { requirements !== null ? requirements.map(this.requirements_render) : null }
                        </ul>
                        <input type="file" onChange={this.handlePhotos} class="fileInput" />
                        <img src={photo} style={{ width: '200px' }} />
                    </form>
                    <button onClick={() => this.colleges_add()}>Add College</button>
                </div>
            </section>
        )
    }
}

export default Add_College