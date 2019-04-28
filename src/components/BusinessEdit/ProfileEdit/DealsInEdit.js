import React, { Component } from 'react'
import Spinner from '../../../helpers/Spinner';
import "./DealsInEdit.css";
var checked = [];
export default class DealsInEdit extends Component {
    handleChecked = (e) => {
        if (e.target.checked === true) {
            checked.push(e.target.value)
            console.log(checked);
        }
        else {
            checked.splice(checked.indexOf('foo'), 1);
            console.log(checked)
        }
    }
    render() {
        console.log(this.props.dealsIn)
        return (
            this.props.dealsIn
                ?
                <div className='business_dealsin_edit'>
                    {this.props.dealsIn.map((dealsIn) => {
                        return <div className="dealsin_list" key={dealsIn.id}>
                            <h4>{dealsIn.name}</h4>
                            {dealsIn.children.map((dealsIn) => {
                            return <div className="deals_individual">
                            <input onChange={this.handleChecked} type="checkbox" id={dealsIn.id} value={dealsIn.id} />
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