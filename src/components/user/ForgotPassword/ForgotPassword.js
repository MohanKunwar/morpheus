import React, { Component } from 'react'
import { Form } from 'react-final-form';
import Inputfield from '../../../UI/Inputfield/inputfield';
import Error from '../../../helpers/FormError';
import Axios from '../../../services/Axios';
import boosting from './../../../assets/images/boosting.jpg';
class ForgotPassword extends Component {
    email
    mobile_number
    state = {
        idNotSubmitted: true,
        reset_context: 'email'
    }
    submitId = values => {
        let payload
        if (this.state.reset_context === 'email') {
            payload = { email: values.email }
            this.email = values.email
        } else {
            payload = { mobile_number: values.mobile_number }
            this.mobile_number = values.mobile_number
        }
        console.log(payload)
        Axios.instance.post(Axios.API.user.getCodeForgotPasswordUrl, payload).then(response => {
            if (response) {
                switch (response.status) {
                    case 204: {
                        this.setState({ idNotSubmitted: false })
                        break
                    }
                    default: {
                        break
                    }
                }
            }
        })
    }
    setResendContext = e => {
        e.preventDefault()
        this.setState({ reset_context: e.target.value })
    }
    onCodeSubmit = values => {
        // this.email ? values.email = this.email : values.mobile_number = this.mobile_number
        values.email= 'mohan.kunwar@outlook.com'
        Axios.instance.post(Axios.API.user.resetCodeForgotPasswordUrl, values).then(response => {
            if (response) {
                console.log(response)
            }
        })
    }
    render() {
        return (
            <div className='login-container'>
                {this.state.idNotSubmitted
                    ?
                    <div>
                        <select onChange={e => this.setResendContext(e)}>
                            <option value='email'>Email</option>
                            <option value='mobile_number'>Mobile Number</option>
                        </select>
                        <Form
                            onSubmit={this.submitId}
                            validate={values => {
                                const errors = {}

                                if (this.state.reset_context === 'email') {
                                    if (!values.email) {
                                        errors.email = 'Email is required'
                                    } else {
                                        var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                                        if (!re.test(values.email)) {
                                            errors.email = 'invalid email'
                                        }
                                    }
                                }
                                else {
                                    if (!values.mobile_number) {
                                        errors.mobile_number = 'Mobile number is required'
                                    } else {
                                        if (values.mobile_number.length !== 10) {
                                            errors.mobile_number = 'Invalid Mobile Number'
                                        }
                                    }
                                }
                                return errors
                            }
                            }>{({ handleSubmit }) =>
                                <form onSubmit={handleSubmit}>
                                    <div className="khoz_form_group">
                                        {
                                            this.state.reset_context === 'email'
                                                ?
                                                <React.Fragment>
                                                    <Inputfield
                                                        name={'email'}
                                                        type={'text'}
                                                        placeholder={'Email'}
                                                    />
                                                    <Error classname="form-error" name='email' />
                                                </React.Fragment>
                                                :
                                                <React.Fragment>
                                                    <Inputfield
                                                        name={'mobile_number'}
                                                        type={'number'}
                                                        placeholder={'Mobile Number'}
                                                    />
                                                    <Error classname="form-error" name='mobile_number' />
                                                </React.Fragment>
                                        }
                                    </div>
                                    <button type='submit'>Submit</button>
                                </form>
                            }
                        </Form>
                    </div>
                    :
                    <Form
                        onSubmit={this.onCodeSubmit}
                        validate={values => {
                            const errors = {};
                            if (!values.otp) {
                                errors.otp = "confirmation code is required";
                            } else if (values.otp.trim().length !== 4) {
                                errors.otp = 'invalid confirmation code'
                            }
                            if (!values.confirm_password) {
                                errors.confirm_password = "Confirm Password is required";
                            }
                            if (!values.password) {
                                errors.password = "Password is required";
                            }
                            if (values.password !== values.confirm_password) {
                                errors.confirm_password = 'Passwords do not match'
                            }
                            return errors
                        }}
                    >
                        {({ handleSubmit }) => (
                            <form onSubmit={handleSubmit} className="khoz_form">
                                <div className='khoz_form_group'>
                                    <label>{this.email ? `Email: ${this.email}` : `Mobile Number: ${this.mobile_number}`}</label>
                                </div>
                                <div className="khoz_form_group">
                                    <label>Enter confirmation code</label>
                                    <Inputfield
                                        type="number"
                                        name="confirmation_code"
                                        placeholder="Confirmation Code"
                                    />
                                    <Error className="form-error" name="confirmation_code" />
                                </div>
                                <div className="register-form-group">
                                    <label className="register-form-label">Password</label>
                                    <Inputfield
                                        type={"password"}
                                        name={"password"}
                                        placeholder={"password"}
                                    />
                                    <Error className="form-error" name="password" />
                                </div>
                                <div className="register-form-group">
                                    <label className="register-form-label">Confirm Password</label>
                                    <Inputfield
                                        type={"password"}
                                        name={"otp"}
                                        placeholder={"confirm password"}
                                    />
                                    <Error className="form-error" name="otp" />
                                </div>
                                <div className="buttons">
                                    <button type="submit">Submit</button>
                                    <button onClick={e => this.resendConfirmCode(e)}>Resend Confirmation Code</button>
                                </div>
                            </form>
                        )}
                    </Form>
                }
                <div className="loginside_img">
                    <img src={boosting} alt='bossting' />
                </div>

            </div>
        )
    }
}
export default ForgotPassword;