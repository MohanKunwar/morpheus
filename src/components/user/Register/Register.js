import React from "react";
import { Form } from "react-final-form";
import "./register.css";
import Axios from "../../../services/Axios";
import { Link } from "react-router-dom";
import khozlogo from "./../../../assets/images/khozlogo.png";
import boosting from "./../../../assets/images/boosting.jpg";
import Inputfield from "../../../UI/Inputfield/inputfield";
import Error from '../../../helpers/FormError';
import Timer from '../../common/Timer/timer';

class Register extends React.Component {
  confirmCode;
  state = {
    register: true
  };
  componentWillUpdate() {
    if (!this.state.register) {
      Axios.authInstance.get(Axios.API.getConfirmCodeUrl).then(response => {
        this.confirmCode = response.data.data;
      });
    }
  }
  onSubmit = values => {
    Axios.instance.post(Axios.API.user.registerUrl, values).then(response => {
      if (response.data) {
        for (let item in response.data) {
          localStorage.setItem(item, response.data[item]);
        }
        this.setState({ register: false });
      }
    });
  };
  onCodeSubmit = value => {
    Axios.authInstance
      .post(Axios.API.user.confirmCodeUrl, value)
      .then(response => {
        console.log("confirm response", response);
      });
  }

  resendConfirmCode = e => {
    e.preventDefault()
    Axios.authInstance.post(Axios.API.user.resendConfirmCodeUrl).then(response => {
      if (response && response.data) {

      }
    })
  }

  render() {
    document.title = 'Khoz-Register'
    return (
      <div className="register-container">
        {this.state.register ? (
          <Form
            onSubmit={this.onSubmit}
            validate={values => {
              const errors = {};
              if (!values.username) {
                errors.username = "Username is required";
              } else if (!isNaN(values.username)) {
                if (values.username.toString().length !== 10) {
                  errors.username = "invalid phone number";
                }
              } else {
                var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                if (!re.test(values.username)) {
                  errors.username = "invalid email";
                }
              }
              if (!values.firstname) {
                errors.firstname = "Firstname is required";
              }
              if (!values.lastname) {
                errors.lastname = "Lastname is required";
              }
              if (!values.email) {
                errors.email = "Email address is required";
              }
              if (!values.mobile_number) {
                errors.mobile_number = "Mobile number is required";
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
              return errors;
            }}
          >
            {({ handleSubmit }) => (
              <form onSubmit={handleSubmit} className="register-form">
                <div className="logo_reg_head">
                  <img alt="logo" src={khozlogo} />
                  <h2>
                    Connecting Buyers
                    <br /> & Sellers Digitally
                  </h2>
                  <span>Free forever. No cerdit card needed.</span>
                </div>
                <div className="register-form-group">
                  <label className="register-form-label">Firstname</label>
                  <Inputfield
                    type={"text"}
                    name={"firstname"}
                    placeholder={"firstname"}
                  />
                  <Error classname="form-error" name="firstname" />
                </div>
                <div className="register-form-group">
                  <label className="register-form-label">Lastname</label>
                  <Inputfield
                    type={"text"}
                    name={"lastname"}
                    placeholder={"Lastname"}
                  />
                  <Error classname="form-error" name="lastname" />
                </div>
                <div className="register-form-group">
                  <label className="register-form-label">Email Address</label>
                  <Inputfield
                    type={"email"}
                    name={"email"}
                    placeholder={"email address"}
                  />
                  <Error classname="form-error" name="email" />
                </div>

                <div className="register-form-group">
                  <label className="register-form-label">Mobile Number</label>
                  <Inputfield
                    type={"text"}
                    name={"mobile_number"}
                    placeholder={"mobile number"}
                  />
                  <Error classname="form-error" name="mobile_number" />
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
                  <label className="register-form-label">
                    Confirm Password
                  </label>
                  <Inputfield
                    type={"password"}
                    name={"confirm_password"}
                    placeholder={"confirm password"}
                  />
                  <Error className="form-error" name="confirm_password" />
                </div>
                <div className="buttons">
                  <button type="submit">Register</button>
                  <div className="login_click">
                    <Link to="/khoz/login">Already a user, Login!</Link>
                  </div>
                </div>
              </form>
            )}
          </Form>
        ) : (
          <Form
            onSubmit={this.onCodeSubmit}
            validate={values => {
              const errors = {};
              if (!values.confirmation_code) {
                errors.confirmation_code = "confirmation code is required";
              }
              return errors
            }}
          >
            {({ handleSubmit }) => (
              <form onSubmit={handleSubmit} className="khoz_form">
                <div className="khoz_form_group">
                  <label>Enter Mobile confirmation code</label>
                  <Inputfield
                    type="number"
                    name="confirmation_code"
                    placeholder="Confirmation Code"
                  />

                  <Error className="form-error" name="confirmation_code" />
                  <div className="buttons">
                  <button type="submit">Submit</button>
                    {/* <button onClick={e => this.resendConfirmCode(e)}>Resend Confirmation Code</button> */}
                    <Timer time= {90}/>
                  
                </div>
                </div>
              </form>
            )}
          </Form>
        )}
        <div className="registerside_img">
          <img src={boosting} alt="bossting" />
        </div>
      </div>
    );
  }
}
export default Register;
