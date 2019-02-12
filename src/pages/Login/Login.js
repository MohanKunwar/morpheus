import React, { Component } from "react";
import { Field } from "react-final-form";

import "./Login.css";
import LoadForm from './../../containers/common-components/LoadForm/LoadForm';
import axios from './../../axios';
import API from './../../api';
import ContextService from './../../services/index';
import AppContext from './../../hoc/ContextProvider/Context';
const initForm = {
  username: "",
  password: ""
};
// const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
const load = async () => {
  //   await sleep(1500);
  // if cached values, append values to initform
  return initForm;
};

const loading = <p>Loading</p>;
// client validation
const validate = values => {
  let errors = {};
  if (!values.username) {
    errors.username = "Required";
  }
  if (!values.password) {
    errors.password = "Required";
  }
  if (values.password) {
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
  const { username, password } = values;
  return {
    username,
    password
  };
};

const preSaveFormat = (values, originalValues) => {
  return {
    ...originalValues,
    username: values.username,
    password: values.password
  };
};

class Login extends Component {
  
  save = values => {
    axios.post(API.user.loginUrl, values).then(response => {
      if (response.data) {
        for (let item in response.data) {
          // set tokens on local storage
          ContextService.setItem(item, response.data[item]);
        }
        this.props.context.updateLogin.bind(this);
        this.props.history.push('/home');
      } else {
        console.log('invalid login');
      }
    });
  };

  render() {
    return (
      <LoadForm
        load={load}
        loading={loading}
        postLoadFormat={postLoadFormat}
        preSaveFormat={preSaveFormat}
        save={this.save}
        validate={validate}
      >
        {({ handleSubmit, reset, submitting, pristine, values }) => (
          <form className="login-form" onSubmit={handleSubmit}>
            <div className="login-form-group">
              <label className="login-form-label">Email/Mobile Number</label>
              <Field
                name="username"
                component="input"
                type="email"
                className="login-form-field"
                placeholder="Email/Mobile Number"
                disabled={submitting}
              />
              <Error classname="form-error" name="username" />
            </div>
            <div className="login-form-group">
              <label className="login-form-label">Password</label>
              <Field
                name="password"
                component="input"
                type="password"
                className="login-form-field"
                placeholder="Password"
                disabled={submitting}
              />
              <Error className="form-error" name="password" />
            </div>
            <div className="buttons">
              <button type="submit" disabled={submitting || pristine}>
                Login
              </button>
              <button
                type="button"
              // onClick={}  reroute
              >
                Not a user, Register!
              </button>
            </div>
            {/* <h3>Form Values</h3>
                        <pre>{JSON.stringify(values, 0, 2)}</pre> */}
            {/* <h3>Database Record</h3>
        <pre>{JSON.stringify(record, 0, 2)}</pre> */}
          </form>
        )}
      </LoadForm>);
  }

}

const withContext = (Component) => {
  return (props) => {
    return (<AppContext.Consumer>
      {(context) => {
        return <Component {...props} context={context} />
      }}
    </AppContext.Consumer>)
  }
}
export default withContext(Login);
