import React, { Component } from 'react'
import Spinner from '../../../helpers/Spinner';
import "./DealsInEdit.css";
var checked = [];
export default class DealsInEdit extends Component {
    handleChecked = (e) => {

    }
    handleClick= (e) => {
        console.log(e.target.checked);
    }
    render() {
        console.log(this.props.dealsIn)
        return (
            this.props.dealsIn
                ?
                <div className='business_dealsin_edit'>
                    {this.props.dealsIn.map((dealsIn, index) => {
                        return <div className="dealsin_list" key={index}>
                            <h4>{dealsIn.name}</h4>
                            {dealsIn.children.map((dealsIn, index) => {
                            return <div className="deals_individual" key={index}>
                            <input defaultChecked={dealsIn.selected === true ? true : false} onChange={this.handleChecked} type="checkbox" id={dealsIn.id} value={dealsIn.id} />
                            <label htmlFor={dealsIn.id}>{dealsIn.name}</label>
                            </div>
                            })}
                        </div>
                    })}
                </div>
                : <Spinner />
        )
    }
}