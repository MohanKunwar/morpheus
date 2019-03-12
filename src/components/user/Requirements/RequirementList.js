import React from 'react';
import Img from 'react-image';
import './requirement.css';
const RequirementList = props => {
    return (
        props.items && props.items.length > 0
            ? (props.items.map((item, index) =>
                (
                    <div className='requirement-item' key={index}>
                        <span className="require_title">{item.title}</span><br />
                        <span className="require_location">{item.created_at} &#124; {item.location ? item.location.name : null}</span><br />
                        <p className="require_dec">{item.description}</p>
                        <div className="require_image"><Img src={item.attachment} alt={item.title} /></div><br />
                        <span className="require_count">{item.businesses_connected_count} connected &#124; {item.businesses_possible_connection_count} possible connections</span>
                        <span className="approval_status">{item.status === 'pending' ? 'Approval Pending' : item.status === 'approved' ? 'Approved' : 'Request Completed'}</span>
                        <span>{
                            item.status === 'approved' 
                            ? <button onClick={e => closeRequest(e, item)}>Close Request</button>
                            : null
                        }</span>
                    </div>
                )))
            : <div>no items found</div>
    )
}
const closeRequest = (e, item) => {
    e.preventDefault()
    
}
export default RequirementList;