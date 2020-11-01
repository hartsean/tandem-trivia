import Ranking from './ranking'
import axios from 'axios'
import React from 'react'

export default class Trivia extends React.Component{
  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this);
  }
  state = {
<<<<<<< HEAD
    trivia: ""
=======
    trivia: [],
    points: 0,
    wrong: 0
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
      this.setState(prevState => {
        return {wrong: prevState.wrong + 1}
     })
      console.log('selected incorrect');
    }
    if(this.state.wrong + this.state.points === 10){
      console.log('end of round');
    }
>>>>>>> newChange
  }

  handleClick(e){
    this.checkAnswer(e)
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
<<<<<<< HEAD
      <Ranking />
        { this.state.trivia }
=======
      <Ranking/>
      Points:{this.state.points}
        { this.state.trivia.map(prompt => 
          <div key={prompt.question}>
            <div className="question">
              Question: {prompt.question}
            </div>
            <div className="answer">
              <div className="incorrect" onClick={this.handleClick}> {prompt.incorrect} </div>
              <div className="correct" onClick={this.handleClick}> {prompt.correct} </div>
            </div>
          </div>
        ) }
>>>>>>> newChange
      </ul>
    )
  }
}