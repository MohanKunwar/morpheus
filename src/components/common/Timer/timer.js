/* eslint-disable no-unused-expressions */
import React from 'react';
class Timer extends React.Component{
   state= {
       counter: parseInt(this.props.time)
   }
   timer= setInterval(() => {
       this.setState({counter: this.state.counter > 0 ? this.state.counter - 1 : 0})
   }, 1000);

   resetCounter= () => {
       this.setState({counter: parseInt(this.props.time)});
   }
   disable= () => {
       if(this.state.counter > 0){
           return true;
       }
       else{
           return false;
       }
   }
    render(){
        return(
        <div className="timer">
        <button
        onClick= {this.resetCounter}
        disabled={this.disable()}
        >Resend Code</button>
        <div className="timer-countdown">{this.state.counter}sec</div>
        </div>)
     }
    }
export default Timer;