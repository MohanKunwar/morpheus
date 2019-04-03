import React, { Component } from 'react'
import Spinner from '../../../helpers/Spinner';

export default class DealsInEdit extends Component {
    render() {
        console.log(this.props.dealsIn)
        return (
            this.props.dealsIn
            ?
            <div className='business_dealsin_edit'>
                DealsIn
            </div>
            : <Spinner />
        )
    }
}