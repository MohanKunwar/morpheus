// import React, { Component } from 'react';
// import axios from './../../axios-authenticated';

// class ConfirmMobileCode extends Component {
//     code = 0;
    
//     submitCode = ($event) => {
//         $event.preventDefault();
//         axios.post(API.user.confirmCodeUrl, {confirmation_code: this.code}).then(
//             response =>  {
//                 console.log('confirm response', response);
//             }
//         )
//     }
//     onChange = ($event) => {
//         $event.preventDefault();
//         this.code = $event.target.value;
//     }
//     render() {
//         // if (props.history)
//         return (
//             <div className="confirm-mobile-code">
//                 <form onSubmit={this.submitCode.bind(this)}>
//                     <label>Enter Mobile confirmation code</label>
//                     <input type="number" 
//                     defaultValue={this.code} 
//                     placeholder="Confirmation Code" 
//                     onChange={this.onChange.bind(this)} />
//                     <button type='submit'>Send</button>
//                 </form>
//             </div>
//         )
//     }
// }
// export default ConfirmMobileCode;