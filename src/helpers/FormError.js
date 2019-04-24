import React from 'react';
import { Field } from 'react-final-form';
 
const err_style = {
  color : 'red',
  fontSize: '12px'

  
}
const Error = ({ name }) => (
    <Field name={name} subscription={{ error: true, touched: true }}>
      {({ meta: { error, touched } }) =>
        error && touched ? <span style={err_style}>{error}</span> : null
      }
    </Field>
  )
  export default Error;