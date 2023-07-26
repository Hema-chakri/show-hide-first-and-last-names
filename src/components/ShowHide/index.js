// Write your code here
import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {
    firstCardName: false,
    lastCardName: false,
  }

  firstName = () => {
    const {firstCardName} = this.state
    this.setState(() => ({
      firstCardName: !firstCardName,
    }))
  }

  lastName = () => {
    const {lastCardName} = this.state
    this.setState(() => ({
      lastCardName: !lastCardName,
    }))
  }

  render() {
    const {firstCardName, lastCardName} = this.state
    return (
      <div className="container">
        <h1 className="title">Show/Hide</h1>
        <div className="cards-container">
          <div className="card-container">
            <button
              type="button"
              className="button-name"
              onClick={this.firstName}
            >
              Show/Hide Firstname
            </button>
            {firstCardName ? <p className="name-card"> Joe</p> : ''}
          </div>
          <div className="card-container">
            <button
              type="button"
              className="button-name"
              onClick={this.lastName}
            >
              Show/Hide Lastname
            </button>
            {lastCardName ? <p className="name-card">Jonas</p> : ''}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
