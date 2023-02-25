import React, { Component } from 'react'

export default class LifeCycleComponent extends Component {

    constructor(props){
        super(props)
        this.state = {
            tanggal : new Date()
        }
        // console.log('Constructor')
    }

    componentDidMount() {
        // console.log('DidMount')
        this.timerID = setInterval(() => this.tick(),100)
    }
  
    componentWillUnmount() {
        // console.log('WillUnmount') 
        clearInterval(this.timerID)
    }

    tick() {
      this.setState({
        tanggal: new Date()
      });
    }

  render() {
    return (
      <div>
        <h1>Life Cycle</h1>
        <p>This time: {this.state.tanggal.toLocaleTimeString()}</p>
      </div>
    )
  }
}
