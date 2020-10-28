import React, { Component } from 'react'
import * as firebase from 'firebase'
import '../client_css/06-Questions.css'

class Questions extends Component {
    state = {
        questions: []
    }

    componentDidMount = _ => this.questions_fetch()

    // Fetch Data
    questions_fetch = _ => {
        firebase.database().ref('prompts').once('value', snapshot => {
            snapshot.forEach((snap) => {
                var obj = {
                    prompt_id: snap.val().prompt_id,
                    prompt_question: snap.val().prompt_question,
                    prompt_answer: snap.val().prompt_answer,
                }
                this.setState({ questions: this.state.questions.concat(obj) })
            })
        })
    }

    // Render Data
    questions_render = props => {
        return (
            <div>
                <div class="questions_contents">
                    <div>
                        <p>Q.</p>
                        <p>{props.prompt_question}</p>
                    </div>
                    <div>
                        <p>A.</p>
                        <p>{props.prompt_answer}</p>
                    </div>
                </div>
                <div></div>
            </div>
        )
    }

    render() {
        const { questions } = this.state

        return (
            <section id="questions">
                <p>Frequently Asked Questions</p>
                { questions !== null ? questions.map(this.questions_render) : null }
            </section>
        )
    }
}

export default Questions