import React from 'react';

const Checkbox = props => {
    console.log('checkbox props', props)
return (
    <input type='checkbox' onChange={props.toggle} value={props.value} />
)
}
export default Checkbox;