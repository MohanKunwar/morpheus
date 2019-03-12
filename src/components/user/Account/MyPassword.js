import React, { Component } from 'react';
import { Form, Field } from 'react-final-form';
import Inputfield from '../../../UI/Inputfield/inputfield';
import Axios from '../../../services/Axios';

const Error = ({ name }) => (
    <Field name={name} subscription={{ error: true, touched: true }}>
        {({ meta: { error, touched } }) =>
            error && touched ? <span>{error}</span> : null
        }
    </Field>
);
class MyPassword extends Component {
    
    onSubmit = values => {
        // values._method = 'PUT'
        this.old_password_error = null
        Axios.authInstance.put(Axios.API.user.changePasswordUrl, values)
        .then(response => {
            switch (response.status) {
                case 200: {
                    // todo
                    // implement toastr
                    this.props.history.push('/user/profile')
                    break
                }
                case 422: {
                    this.old_password_error = response.data.errors.old ? response.data.errors.old[0] : null
                    this.setState({serverError: true})
                    break
                }
                default: {
                    break
                }
            }
        })
    }
    render() {
        return (
            <React.Fragment>
                <div className="login-container">
                    <Form
                        onSubmit={this.onSubmit}
                        validate={values => {
                            this.old_password_error = null
                            const errors = {}
                            if (!values.old) {
                                errors.old = `Please type your current password`
                            }
                            if (!values.new) {
                                errors.new = 'password is required'
                            } 
                            if (!values.confirmation) {
                                errors.confirmation = 'confirm Password is required'
                            }
                            if (values.new !== values.confirmation) {
                                errors.confirmation = `Passwords don't match`
                            }
                            return errors
                        }}>

                        {({ handleSubmit }) => (
                            <form className="change_password_form" onSubmit={handleSubmit}>
                                
                                <div className="change_password_form-group">
                                    <label className="change_password_form-label">Current Password</label>
                                    <Inputfield
                                        name={'old'}
                                        type={'password'}
                                        placeholder={'Please type your current password'}
                                    />
                                    <Error classname="form-error" name="old" />
                                    {
                                        this.old_password_error ? this.old_password_error : null
                                    }
                                </div>
                                <div className="change_password_form-group">
                                    <label className="change_password_form-label">New Password</label>
                                    <Inputfield
                                        name={"new"}
                                        type={"password"}
                                        placeholder={"Please type new password"}
                                    />

                                    <Error className="form-error" name="new" />
                                </div>

                                <div className="change_password_form-group">
                                    <label className="change_password_form-label">Confirm Password</label>
                                    <Inputfield
                                        name={"confirmation"}
                                        type={"password"}
                                        placeholder={"Please confirm your new password"}
                                    />

                                    <Error className="form-error" name="confirmation" />
                                </div>
                                <div className="buttons">
                                    <button type="submit">Submit</button>
                                </div>
                            </form>
                        )}
                    </Form>
                </div>
                );
            </React.Fragment>
        )
    }
}
export default MyPassword;