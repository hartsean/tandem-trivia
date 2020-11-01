import Ranking from './ranking'
import axios from 'axios'
import React from 'react'

export default class Trivia extends React.Component{
  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this);
  }
  state = {
    trivia: [],
    points: 1,
  }
  checkAnswer(e){
    e.stopPropagation()
    // console.log(e.target.className); 
    if(e.target.className === "correct"){
      this.setState(prevState => {
        return {points: prevState.points + 1}
     })
      console.log('selected correct');
    } else {
      console.log('selected incorrect');
    }
  }

  handleClick(e){
    this.checkAnswer(e)
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
      <Ranking/>
      Points:{this.state.points}
        { this.state.trivia.map(prompt => 
          <div key={prompt.question}>
            <div className="question">
              Question: {prompt.question}
            </div>
            <div className="answer">
              Answer: 
              <div className="incorrect" onClick={this.handleClick}>{prompt.incorrect}</div>
              <div className="correct" onClick={this.handleClick}>{prompt.correct}</div>
            </div>
          </div>
        ) }
      </ul>
    )
  }
}