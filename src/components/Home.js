import React, { Component } from 'react'
import css from '../css/Home.module.css'
import EntryPage from './EntryPage'
import Main from './Main'

export class Home extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isClicked: false,
         buttonText: 'Enter',
      }
    }

    handleClick() {
        this.setState((prevState, prevProps) => {
            return {
                isClicked: prevState.isClicked === false ? true : false,
                buttonText: prevState.buttonText === 'Enter' ? 'Worked!' : 'Enter',
            }
        })
    }
    
  render() {
    return (
      <div className={css.content}>
      {this.state.isClicked ? (
            <Main />
        ) : (
            <EntryPage />
        )}
        <button onClick={() => this.handleClick()}>{this.state.buttonText}</button>
      </div>
    )
  }
}

export default Home
