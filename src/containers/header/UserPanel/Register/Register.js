// import React from "react";
// import { Field } from "react-final-form";

// import Modal from "./../../../../UI/Modal/Modal";
// import LoadForm from "./../../../common-components/LoadForm/LoadForm";

// import axios from './../../../../axios';
// import API from './../././../../../api';

// const initForm = {
//   firstname: "",
//   lastname: "",
//   email: "",
//   mobile_number: "",
//   password: "",
//   confirmPassword: ""
// };
// const load = async () => {
//   await initForm;
//   return initForm;
// };

// const loading = <p>Loading</p>;
// const validate = values => {
//   let errors = {};
//   if (!values.firstname) { errors.firstname = "Required"; }
//   if (!values.lastname) { errors.lastname = "Required"; }
//   if (!values.email) {
//     errors.email = "Required";
//     // email validation
//   }
//   if (!values.mobile_number) {
//     errors.mobile_number = "Required";
//     // mobile_number validation
//   }
//   if (!values.password) {
//     errors.password = "Required";
//   }
//   if (!values.confirmPassword) {
//     errors.confirmPassword = "Required";
//   }
//   if (values.password && values.confirmPassword) {
//     // match password
//     // regex validation
//   }
// };

// const Error = ({ name }) => (
//   <Field
//     name={name}
//     subscription={{ error: true, touched: true }}
//     render={({ meta: { error, touched } }) =>
//       touched && error ? <span>{error}</span> : null
//     }
//   />
// );
// // for multiple form field validations
// // const required = value => (value ? undefined : "Required");
// // const mustBeNumber = value => (isNaN(value) ? "Must be a number" : undefined);
// // const minValue = min => value =>
// //   isNaN(value) || value >= min ? undefined : `Should be greater than ${min}`;
// // const composeValidators = (...validators) => value =>
// //   validators.reduce((error, validator) => error || validator(value), undefined);

// const postLoadFormat = values => {
//   const { firstname, lastname, email, mobile_number, password, confirmPassword } = values;
//   return {
//     firstname,
//     lastname,
//     email,
//     mobile_number,
//     password,
//     confirmPassword
//   };
// };

// const preSaveFormat = (values, originalValues) => {
//   return {
//     ...originalValues,
//     name: values.firstname + ' ' + values.lastname,
//     email: values.email,
//     mobile_number: values.mobile_number,
//     password: values.password,
//     // confirmPassword: values.confirmPassword
//   };
// };

// class Register extends React.Component {
//   registered = false;
//   mobileConfirmed = false;
  
//   save = async values => {
//     console.info("Saving", values);
//     // await axios response
//     await axios.post(API.user.registerUrl, values).then(response => {
//       // set token
//       if (response.data) {
//         for (let item in response.data) {
//           localStorage.setItem(item, response.data[item]);
//         }
//       }
//       // route to confirmation screen

//       this.registered = true;
//       return (
//         <Modal show={this.props.show} hide={this.mobileConfirmed} backDropType='shade'>
//           <div>abc</div>
//         </Modal>);
//     });
//   };
//   render() {
//     return (
//       <Modal show={this.props.show} hide={this.registered} backDropType='shade'>
//         <LoadForm
//           load={load}
//           loading={loading}
//           postLoadFormat={postLoadFormat}
//           preSaveFormat={preSaveFormat}
//           save={this.save}
//           validate={validate}
//         >
//           {({ handleSubmit, reset, submitting, pristine, values }) => (
//             <form onSubmit={handleSubmit}>
//               <div className="">
//                 <label>Firstname</label>
//                 <Field
//                   name="firstname"
//                   component="input"
//                   type="text"
//                   placeholder="Firstname"
//                   disabled={submitting}
//                 />
//                 <Error classname="form-error" name="firstname" />
//               </div>
//               <div className="">
//                 <label>Lastname</label>
//                 <Field
//                   name="lastname"
//                   component="input"
//                   type="text"
//                   placeholder="Lastname"
//                   disabled={submitting}
//                 />
//                 <Error classname="form-error" name="lastname" />
//               </div>
//               <div className="">
//                 <label>Email Address</label>
//                 <Field
//                   name="email"
//                   component="input"
//                   type="email"
//                   placeholder="Email Address"
//                   disabled={submitting}
//                 />
//                 <Error classname="form-error" name="username" />
//               </div>

//               <div className="">
//                 <label>Mobile Number</label>
//                 <Field
//                   name="mobile_number"
//                   component="input"
//                   type="number"
//                   placeholder="Mobile Number"
//                   disabled={submitting}
//                 />
//                 <Error classname="form-error" name="mobile_number" />
//               </div>
//               <div>
//                 <label>Password</label>
//                 <Field
//                   name="password"
//                   component="input"
//                   type="password"
//                   placeholder="Password"
//                   disabled={submitting}
//                 />
//                 <Error className="form-error" name="password" />
//               </div>
//               <div>
//                 <label>Confirm Password</label>
//                 <Field
//                   name="confirmPassword"
//                   component="input"
//                   type="password"
//                   placeholder="Confirm Password"
//                   disabled={submitting}
//                 />
//                 <Error className="form-error" name="confirmPassword" />
//               </div>
//               <div className="buttons">
//                 <button type="submit" disabled={submitting || pristine}>
//                   Login
//               </button>
//                 <button
//                   type="button"
//                 // onClick={}  reroute
//                 >
//                   Not a user, Register!
//               </button>
//               </div>
//               <h3>Form Values</h3>
//               <pre>{JSON.stringify(values, 0, 2)}</pre>
//               {/* <h3>Database Record</h3>
//         <pre>{JSON.stringify(record, 0, 2)}</pre> */}
//             </form>
//           )}
//         </LoadForm>
//       </Modal>
//     );
//   }
// }
// export default Register;
