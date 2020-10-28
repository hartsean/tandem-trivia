import Ranking from './ranking'
import Game from './gameplay'
import axios from 'axios'
import React from 'react'

export default class Trivia extends React.Component{
  state = {
    questions: []
  }

  componentDidMount() {
    axios.get(`/trivia-data/trivia-data.json`)
      .then(res => {
        console.log(res)
        const questions = res.data;
        this.setState({ questions });
      })
  }

  render() {
    return (
      <ul>
      <Ranking />
      <Game />
        { this.state.questions.map(prompt => 
          <div>
            <li>{prompt.question}</li>
            {/* {push promt.correct into prompt.correct array, shuffle, and then render} */}
            <li>{prompt.incorrect}</li>
            <li>{prompt.correct}</li>
          </div>
        ) }
      </ul>
    )
  }
}