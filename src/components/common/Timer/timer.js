/* eslint-disable no-unused-expressions */
import React from 'react';
class Timer extends React.Component{
   state= {
       counter: this.props.time
   }
   timer= setInterval(() => {
       this.setState({counter: this.state.counter > 0 ? this.state.counter - 1 : 0})
   }, 1000);
   resetCounter= () => {
       this.setState({counter: this.props.time});
   }
   disable= (e) => {
       if(this.state.counter > 0){
           return true;
       }
       else{
           return false;
       }
   }
   setStyle= () => {
    if(this.state.counter > 0){
        return {
            cursor: "not-allowed"
        }
    }
    else{
        return {
            cursor: "pointer"
        }
    }
   }
    render(){
        return(
        <div className="timer">
        <button
        onClick= {this.resetCounter}
        disabled={this.disable()}
        style={this.setStyle()}
        >Resend Code</button>
        <div className="timer-countdown">{this.state.counter}sec</div>
        </div>)
     }
    }
export default Timer;