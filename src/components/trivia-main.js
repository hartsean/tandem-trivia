import Ranking from './ranking'
import axios from 'axios'
import React from 'react'

export default class Trivia extends React.Component{
  state = {
    trivia: ""
  }

  componentDidMount() {
    axios.get(`/server/`)
      .then(res => {
        const trivia = res;
        this.setState({ trivia });
        console.log(trivia);
      })
    ;
  }

  render() {
    return (
      <ul>
      <Ranking />
        { this.state.trivia }
      </ul>
    )
  }
}