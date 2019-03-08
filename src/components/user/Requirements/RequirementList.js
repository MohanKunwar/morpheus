import React from 'react';
const RequirementList = props => {
    return (
        props.items && props.items.length > 0
            ? (props.items.map((item, index) =>
                (
                    <div className='requirement-item' key={index}>
                        <span>{item.title}</span>
                        <span>{item.created_at} &#124; {item.location ? item.location.name : null}</span>
                        <span>{item.description}</span>
                        <span>image goes here</span>
                        <span>{item.businesses_connected_count} connected &#124; {item.businesses_possible_connection_count} possible connections</span>
                        <span>{item.status === 'pending' ? 'Approval Pending' : item.status === 'approved' ? 'Approved' : 'Request Completed'}</span>
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