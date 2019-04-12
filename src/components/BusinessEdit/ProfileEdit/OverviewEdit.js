import React, { Component } from 'react'
import GoogleMapEdit from '../../common/GoogleMapEdit/GoogleMapEdit'
// import Overview from '../../BusinessView/Overview/Overview';
const OverviewEdit = props => {
    
        return (
            <div className='business_overview_edit'>
                overview
                <GoogleMapEdit
                lat= {props.business.latitude}
                lng= {props.business.longitude}
                 />
            <button onClick={e => this.handleChanges(e)}>Save</button>
            </div>
        )

}
export default OverviewEdit