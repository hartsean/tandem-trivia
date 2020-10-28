import Ranking from './ranking'
import Game from './gameplay'
import axios from 'axios'
import React from 'react'

export default class Trivia extends React.Component{
  state = {
    trivia: [],
    choices: []
  }

  componentDidMount() {
    axios.get(`/trivia-data/trivia-data.json`)
      .then(res => {
        const trivia = res.data;
        this.setState({ trivia });
      })
  }

  render() {
    return (
      <ul>
      <Ranking />
      <Game />
        { this.state.trivia.map(prompt => 
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