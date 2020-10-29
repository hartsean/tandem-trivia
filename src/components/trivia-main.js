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
        { this.state.trivia.map(prompt => 
          <div>
            <div className="question">
              Question: {prompt.question}
            </div>
            <div className="answer">
              Answer: {prompt.incorrect} {prompt.correct}
            </div>
          </div>
        ) }
      </ul>
    )
  }
}