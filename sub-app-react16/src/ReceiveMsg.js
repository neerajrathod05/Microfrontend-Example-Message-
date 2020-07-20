import React, { Component } from "react";

export class ReceiveMsg extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.sendMsgToAngular = this.sendMsgToAngular.bind(this);
    this.rcvMessage = this.rcvMessage.bind(this);
    this.state = {
      msgToAngular: '',
      msgFromAngular: ''
    };
  }
  
  render() {
    const msgToAngular = this.state.msgToAngular;
    return (
      <div class="react-div">
         <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/320px-React-icon.svg.png" className="App-logo" alt="logo" />
        <h1>React 16 Microfrontend App</h1>
        <h2>Message from Angular : <b>{this.state.msgFromAngular}</b></h2>
        <div class="fromcontrol">
          <input type="text"  placeholder="Say something to Angular" value={msgToAngular} onChange={this.handleChange}/>
          <button  class="send-button" onClick={this.sendMsgToAngular}>Send</button>
        </div>
      </div>
    );
  }

  handleChange(e) {
    this.setState({msgToAngular: e.target.value});
  }

  rcvMessage = (event) => {
    this.setState({msgFromAngular: event.msg});
  };

  componentDidMount() {
    window.addEventListener("sendMsg", this.rcvMessage);
  }

  componentWillUnmount() {
    window.removeEventListener("sendMsg", this.rcvMessage);
  }

  sendMsgToAngular = () =>  {
    const event = new Event('rcvMsg');
    event['msg'] = this.state.msgToAngular;
    window.dispatchEvent(event);
  }
}
