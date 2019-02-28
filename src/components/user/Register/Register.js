import React from "react";
import { Field } from "react-final-form";
import './register.css';
import LoadForm from '../../../containers/common-components/LoadForm/LoadForm';
import Axios from '../../../services/Axios';
import UserService from '../../../services/User';
import KhozContext from '../../../services/Context';
import { Link } from 'react-router-dom';
import khozlogo from './../../../assets/images/khozlogo.png';
import boosting from './../../../assets/images/boosting.jpg';
import Inputfield from "../../../UI/Inputfield/inputfield";
const initForm = {
  firstname: "",
  lastname: "",
  email: "",
  mobile_number: "",
  password: "",
  confirmPassword: ""
};
const load = async () => {
  await initForm;
  return initForm;
};

const loading = <p>Loading</p>;
const validate = values => {
  let errors = {};
  if (!values.firstname) { errors.firstname = "Required"; }
  if (!values.lastname) { errors.lastname = "Required"; }
  if (!values.email) {
    errors.email = "Required";
    // email validation
  }
  if (!values.mobile_number) {
    errors.mobile_number = "Required";
    // mobile_number validation
  }
  if (!values.password) {
    errors.password = "Required";
  }
  if (!values.confirmPassword) {
    errors.confirmPassword = "Required";
  }
  if (values.password && values.confirmPassword) {
    // match password
    // regex validation
  }
};

const Error = ({ name }) => (
  <Field
    name={name}
    subscription={{ error: true, touched: true }}
    render={({ meta: { error, touched } }) =>
      touched && error ? <span>{error}</span> : null
    }
  />
);
// for multiple form field validations
// const required = value => (value ? undefined : "Required");
// const mustBeNumber = value => (isNaN(value) ? "Must be a number" : undefined);
// const minValue = min => value =>
//   isNaN(value) || value >= min ? undefined : `Should be greater than ${min}`;
// const composeValidators = (...validators) => value =>
//   validators.reduce((error, validator) => error || validator(value), undefined);

const postLoadFormat = values => {
  const { firstname, lastname, email, mobile_number, password, confirmPassword } = values;
  return {
    firstname,
    lastname,
    email,
    mobile_number,
    password,
    confirmPassword
  };
};

const preSaveFormat = (values, originalValues) => {
  return {
    ...originalValues,
    name: values.firstname + ' ' + values.lastname,
    email: values.email,
    mobile_number: values.mobile_number,
    password: values.password,
    // confirmPassword: values.confirmPassword
  };
};

class Register extends React.Component {
  registered = false;
  mobileConfirmed = false;

  save = values => {
    console.info("Saving", values);
    // await axios response
    Axios.instance.post(Axios.API.user.registerUrl, values).then(response => {
      if (response.data) {
        for (let item in response.data) {
          localStorage.setItem(item, response.data[item]);
        }
      }

    })
    this.props.history.push('/confirm-mobile-code')
  }
  render() {
    return (
      <div className="register-container">
      <LoadForm
        load={load}
        loading={loading}
        postLoadFormat={postLoadFormat}
        preSaveFormat={preSaveFormat}
        save={this.save}
        validate={validate}
      >
        {({ handleSubmit, reset, submitting, pristine, values }) => (
          <form onSubmit={handleSubmit} className="register-form">
           <div className="logo_reg_head">
         <img alt='logo' src={khozlogo} />
        <h2>Connecting Buyers<br /> & Sellers Digitally</h2>
        <span>Free forever. No cerdit card needed.</span>
        </div>
            <div className="register-form-group">
              <label className="register-form-label">Firstname</label>
              <Inputfield 
              type={'text'}
              name={'firstname'}
              placeholder={'firstname'}
              disabled={submitting}
              />
              <Error classname="form-error" name="firstname" />
            </div>
            <div className="register-form-group">
              <label className="register-form-label">Lastname</label>
              <Inputfield 
               type={'text'}
               name={'lastname'}
               placeholder={'Lastname'}
               disabled={submitting}
              />
              <Error classname="form-error" name="lastname" />
            </div>
            <div className="register-form-group">
              <label className="register-form-label">Email Address</label>
              <Inputfield 
              type={'email'}
              name={'email'}
              placeholder={'email address'}
              disabled={submitting}
              />
              <Error classname="form-error" name="username" />
            </div>

            <div className="register-form-group">
              <label className="register-form-label">Mobile Number</label>
              <Inputfield 
              type={'text'}
              name={'mobile_number'}
              placeholder={'mobile number'}
              disabled={submitting}
              />
              <Error classname="form-error" name="mobile_number" />
            </div>
            <div className="register-form-group">
              <label className="register-form-label">Password</label>
              <Inputfield 
              type={'password'}
              name={'password'}
              placeholder={'password'}
              disabled={submitting}
              />
              <Error className="form-error" name="password" />
            </div>
            <div className="register-form-group">
              <label className="register-form-label">Confirm Password</label>
              <Inputfield 
              type={'password'}
              name={'confirmPassword'}
              placeholder={'confirm password'}
              disabled={submitting}
              />
              <Error className="form-error" name="confirmPassword" />
            </div>
            <div className="buttons">
              <button type="submit" disabled={submitting || pristine}>
                Signin
              </button>
              <div className="login_click">
              <Link to="/login"
              // onClick={}  reroute
              >
               Already user, Login!
              </Link>
              </div>
            </div>
            {/* <h3>Form Values</h3>
            <pre>{JSON.stringify(values, 0, 2)}</pre> */}
            {/* <h3>Database Record</h3>
        <pre>{JSON.stringify(record, 0, 2)}</pre> */}
          </form>
        )}
      </LoadForm>
      <div className="registerside_img">
        <img src= {boosting} alt='bossting' />
      </div>
      </div>
    );
  }
}
export default Register;
