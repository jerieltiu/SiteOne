import React, { Component } from 'react'
import * as firebase from 'firebase'
import helpers from './helper'
import '../admin_css/04-Questions.css'

class Questions extends Component {
    state = {
        // Add Data
        modal_add: false,
        question: '',
        answer: '',

        // Render Data
        prompts: [],
        modal: false,
        modal_prompt: ''
    }

    componentDidMount = _ => this.prompts_fetch()

    // Fetch Data
    prompts_fetch = _ => {
        firebase.database().ref('prompts').once('value', snapshot => {
            snapshot.forEach((snap) => {
                var obj = {
                    prompt_id: snap.val().prompt_id,
                    prompt_question: snap.val().prompt_question,
                    prompt_answer: snap.val().prompt_answer,
                }
                this.setState({ prompts: this.state.prompts.concat(obj) })
            })
        })
    }

    // Add Data
    prompts_add = _ => {
        let id_num = helpers.timestamp()
        const { question, answer } = this.state

        let confirm = window.confirm('Are you sure you would like to add this prompt?')

        if (confirm) {
            firebase.database().ref('prompts').child(`${id_num}`).update({
                prompt_id: id_num,
                prompt_question: question,
                prompt_answer: answer,
            })

            this.setState({ modal_add: false, prompts: [] })
            this.prompts_fetch()
            this.clear()
            alert('Prompt successfully added.')
        }
    }

    // Edit Data
    prompts_update = id => {
        const { question, answer } = this.state

        let confirm = window.confirm('Are you sure you would like to edit this prompt?')

        if (confirm) {
            firebase.database().ref('prompts').child(`${id}`).update({
                prompt_question: question,
                prompt_answer: answer,
            })

            this.setState({ modal: false, prompts: [] })
            this.prompts_fetch()
            this.clear()
            alert('Prompt successfully edited.')
        }
    }

    // Delete Data
    prompts_delete = id => {
        let confirm = window.confirm('Are you sure you would like to delete this prompt?')

        if (confirm) {
            firebase.database().ref('prompts').child(`${id}`).remove()

            this.setState({ prompts: [] })
            this.prompts_fetch()
            alert('Prompt successfully deleted.')
        }
    }

    // Render Data
    prompts_render = props => {
        return (
            <tr>
                <td>{props.prompt_question}</td>
                <td>{props.prompt_answer}</td>
                <td>
                    <button onClick={() => this.setState({ modal: true, modal_prompt: props.prompt_id })}>EDIT</button>
                    <button onClick={() => this.prompts_delete(props.prompt_id)}>DELETE</button>
                </td>
            </tr>
        )
    }

    promptModals_render = props => {
        const { question, answer, modal_prompt } = this.state

        if (modal_prompt == props.prompt_id) {
            return (
                <div class="modal" onClick={() => this.setState({ modal: false })}>
                    <div class="modal-content" onClick={this.stopPropagation}>
                        <div class="modal-header"></div>
                        <div class="modal-body">
                            <form>
                                <input type="text" name="question" value={question} onChange={this.handleChange} placeholder="Question Prompt" autocomplete="off" required />
                                <input type="text" name="answer" value={answer} onChange={this.handleChange} placeholder="Answer" autocomplete="off" required />
                            </form>
                            <button onClick={() => this.prompts_update(props.prompt_id)}>Save Changes</button>
                        </div>
                        <div class="modal-footer"></div>
                    </div>
                </div>
            )
        }
    }

    addPromptModals_render = _ => {
        const { question, answer } = this.state

        return (
            <div class="modal" onClick={() => this.setState({ modal_add: false })}>
                <div class="modal-content" onClick={this.stopPropagation}>
                    <div class="modal-header"></div>
                    <div class="modal-body">
                        <form>
                            <input type="text" name="question" value={question} onChange={this.handleChange} placeholder="Question Prompt" autocomplete="off" required />
                            <input type="text" name="answer" value={answer} onChange={this.handleChange} placeholder="Answer" autocomplete="off" required />
                        </form>
                        <button onClick={() => this.prompts_add()}>Add Prompt</button>
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
            question: '',
            answer: ''
        })
    }

    render() {
        const { prompts, modal, modal_add } = this.state

        return (
            <section id="questions_admin">
                <p>FAQs</p>
                <button onClick={() => this.setState({ modal_add: true })}>Add Prompt</button>
                <div class="table">
                    <table class="table_contents">
                        <thead>
                            <tr>
                                <th>Question</th>
                                <th>Answer</th>
                                <th></th>
                            </tr>
                        </thead>

                        <tbody class="dataTable">
                            { prompts.map(this.prompts_render) }
                        </tbody>
                    </table>
                </div>

                { modal ===  true ? prompts.map(this.promptModals_render) : null }
                { modal_add === true ? this.addPromptModals_render() : null }
            </section>
        )
    }
}

export default Questions