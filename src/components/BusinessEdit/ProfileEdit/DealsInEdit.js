import React, { Component } from 'react'
import Spinner from '../../../helpers/Spinner';
import "./DealsInEdit.css";
var checked= [];
export default class DealsInEdit extends Component {
    handleChecked= (e) => {
        if(e.target.checked ===  true){
            checked.push(e.target.value)
            console.log(checked);
        }
        else{
            checked.splice( checked.indexOf('foo'), 1 );
            console.log(checked)
        }
    }
    render() {
        console.log(this.props.dealsIn)
        return (
            this.props.dealsIn
            ?
            <div className='business_dealsin_edit'>
          {  this.props.dealsIn.map((dealsIn) => {
            return <div className="dealsin_list" key={dealsIn.id}>
            <input onChange={this.handleChecked} type="checkbox" id={dealsIn.id} value={dealsIn.id}/> 
            <label htmlFor={dealsIn.id}>{dealsIn.name}</label>
            </div>
            }) }
            <button type="submit" className="dealsin_submit">
            <img src={require("../../../assets/images/send.svg")} alt="send svg" />
             Submit
            </button>
            </div>
            : <Spinner />
        )
    }
}