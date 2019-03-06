import React, { Component } from "react";
import { Field } from "react-final-form";
import { Link } from 'react-router-dom';
import "./Login.css";
import Axios from '../../../services/Axios';
import UserService from '../../../services/User';
import KhozContext from '../../../services/Context';
import KhozForm from '../../common/Form';
import khozlogo from './../../../assets/images/khozlogo.png';
import boosting from './../../../assets/images/boosting.jpg';
import Inputfield from "../../../UI/Inputfield/inputfield";

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
//   state = {
//     inputItems: []
// }

  save = values => {
    Axios.instance.post(Axios.API.user.loginUrl, values).then(response => {
      if (response.data) {
        for (let item in response.data) {
          UserService.setItem(item, response.data[item]);
        }
        Axios.authInstance.get(Axios.API.user.userDetailsUrl).then(response => {
          if (response.status === 200) {
            this.props.context.login(response.data.data)
            this.props.history.push('/home')
          } else {

          }
        })
      } else {
        console.log('invalid login');
      }

    });
  };

  render() {
    return (
      <div className="login-container">
      <KhozForm
        load={load}
        loading={loading}
        postLoadFormat={postLoadFormat}
        preSaveFormat={preSaveFormat}
        save={this.save}
        validate={validate}
      >
      
        {({ handleSubmit, reset, submitting, pristine, values }) => (
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
                type={'email'}
                placeholder={'Email/Mobile Number'}
                disabled={submitting}
                value={values}
                />
              <Error classname="form-error" name="username" />
            </div>
            <div className="login-form-group">
              <label className="login-form-label">Password</label>
              <Inputfield
                name={"password"}
                type={"password"}
                placeholder={"password"}
                disabled={submitting}
                value={values}
              />
              
              <Error className="form-error" name="password" />
            </div>
            <div className="forget_password">Forget password ?</div>
            <div className="buttons">
              <button type="submit" disabled={submitting || pristine}>
                Login
              </button>
              <div className="register_click">
              <Link
                to='/register'
              // onClick={}  reroute
              >
                Not a user, Register!
              </Link>
              </div>
            </div>
            {/* <h3>Form Values</h3>
                        <pre>{JSON.stringify(values, 0, 2)}</pre> */}
            {/* <h3>Database Record</h3>
        <pre>{JSON.stringify(record, 0, 2)}</pre> */}
          </form>
        )}
      </KhozForm>
      <div className="loginside_img">
        <img src= {boosting} alt='bossting' />
      </div>
      </div>
      );
      
  }

}

const withContext = (Component) => {
  return (props) => {
    return (<KhozContext.AppContext.Consumer>
      {(context) => {
        return <Component {...props} context={context} />
      }}
    </KhozContext.AppContext.Consumer>)
  }
}
export default withContext(Login);
