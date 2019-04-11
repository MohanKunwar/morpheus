import React, { Component } from "react";
import { Form } from "react-final-form";
import { Link } from 'react-router-dom';
import "./Login.css";
import Axios from '../../../services/Axios';
import UserService from '../../../services/User';
import KhozContext from '../../../services/Context';
import khozlogo from './../../../assets/images/khozlogo.png';
import boosting from './../../../assets/images/boosting.jpg';
import Inputfield from "../../../UI/Inputfield/inputfield";
import Error from '../../../helpers/FormError';
class Login extends Component {
  state = {
    submitting: false
  }
  onSubmit = values => {
    this.setState({ submitting: true })
    Axios.instance.post(Axios.API.user.loginUrl, values).then(response => {
      if (response.data) {
        for (let item in response.data) {
          UserService.setItem(item, response.data[item]);
        }
        Axios.authInstance.get(Axios.API.user.userDetailsUrl).then(response => {
          if (response.status === 200) {
            this.props.context.login(response.data.data)
            if (this.props.location.state) {
              this.props.history.push(this.props.location.state.from.pathname)
            } else {
              this.props.history.push('/home')
            }
          } else {

          }
        })
      } else {
        console.log('invalid login');
        this.setState({ submitting: false })
      }

    });
  };

  render() {
    document.title = 'Khoz-Login'
    return (
      <div className="login-container">
        <Form
          onSubmit={this.onSubmit}
          validate={values => {
            const errors = {}
            if (!values.username) {
              errors.username = 'Username is required'
            } else if (!isNaN(values.username)) {
              if (values.username.toString().length !== 10) {
                errors.username = 'invalid phone number'
              }
            } else {
              var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
              if (!re.test(values.username)) {
                errors.username = 'invalid email'
              }
            }
            if (!values.password) {
              errors.password = 'Password is required'
            }
            return errors
          }}>

          {({ handleSubmit }) => (
            <form className="login-form" onSubmit={handleSubmit}>
              <div className="logo_or_head">
                <img alt='logo' src={khozlogo} />
                <h2>Connecting Buyers<br /> & Sellers Digitally</h2>
                <span>Free forever. No cerdit card needed.</span>
              </div>
              <div className="login-form-group">
                <label className="login-form-label">Email/Mobile Number</label>
                <Inputfield
                  name={'username'}
                  type={'text'}
                  placeholder={'Email/Mobile Number'}
                />
                <Error classname="form-error" name="username" />
              </div>
              <div className="login-form-group">
                <label className="login-form-label">Password</label>
                <Inputfield
                  name={"password"}
                  type={"password"}
                  placeholder={"password"}
                />

                <Error className="form-error" name="password" />
              </div>
              <div className="forget_password">
                <Link to='/khoz/forgot-password'>Forget password ?</Link>
              </div>
              <div className="buttons">
                <button type="submit" disabled={this.state.submitting ? 'disabled' : null}>
                  {
                    !this.state.submitting ? 'Login' : '...'
                  }
                </button>
                <div className="register_click">
                  <Link
                    to='/khoz/register'
                  >
                    Not a user, Register!
              </Link>
                </div>
              </div>
            </form>
          )}
        </Form>
        <div className="loginside_img">
          <img src={boosting} alt='bossting' />
        </div>
      </div>
    );

  }

}
export default KhozContext.withAppContext(Login);
