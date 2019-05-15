import React from 'react';

export default class ClickityClick extends React.Component {

  constructor() {
    //inheriting from super. but no properties to send
    //we want an update to happen when we click
    //aka we want to change the State
    super();
  //first we define initial state:
  this.state = {
    hasBeenClicked: false
  //usually an attribute we want to update
  }
}


handleClick = () => {
  this.setState({
    hasBeenClicked: true
  })
  //what will happen when the click is fired off
  //the actual updating of the state happens here
};

render() {
  return(
    <div>
      <p>I have {this.state.hasBeenClicked ? null : 'not'} been clicked!</p>
      <button onClick={this.handleClick}>Click me!</button>
    </div>
  )
}




}
