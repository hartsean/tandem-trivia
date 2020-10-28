import Ranking from './ranking'
import axios from 'axios'
import React from 'react'

export default class Trivia extends React.Component{
  state = {
    trivia: []
  }

  componentDidMount() {
    axios.get(`/trivia-data/trivia-data.json`)
      .then(res => {
        const trivia = res.data;
        this.setState({ trivia });
      })
    ;
  }

  render() {
    return (
      <ul>
      <Ranking />
      <br />
        { this.state.trivia.map(prompt => 
          <div>
            <li>Question: {prompt.question}</li>
            {/* {push promt.correct into prompt.correct array, shuffle, and then render} */}
            <li>Answer: {prompt.incorrect}{prompt.correct}</li>
            {/* <li>Correct: {prompt.correct}</li> */}
            <br />
          </div>
        ) }
      </ul>
    )
  }
}