import React, { Component } from "react";
import Axios from "../../../services/Axios";
import './Account.css';

class MyProfile extends Component {
    user = this.props.user
    constructor(props) {
        super(props);
        this.state = {
            editName: false
        };
        this.emailRef = React.createRef()
        this.nameRef = React.createRef()
        this.mobileRef = React.createRef()
    }
    editItem = (e, item) => {
        e.preventDefault();
        this.setState({ [item]: true });
    };
    saveEmail = e => {
        e.preventDefault();
        if (
            /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(this.emailRef.current.value)
        ) {
            this.setState({ invalidEmail: false });
            let saveData = {
                _method: "PUT",
                email: this.emailRef.current.value,
                mobile_number: this.user.mobile_number,
                name: this.user.name
            };
            this.saveChanges(saveData, 'email');
        } else {
            this.setState({ invalidEmail: true });
        }
    };
    saveName = e => {
        e.preventDefault();
        if(
            /^[A-z ]+$/.test
            (this.nameRef.current.value)
        ){
            this.setState({invalidName: false});
        
        let saveData = {
            _method: "PUT",
            email: this.user.email,
            mobile_number: this.user.mobile_number,
            name: this.nameRef.current.value
        };
        this.saveChanges(saveData, 'name');
    }else {
        this.setState({ invalidName: true });
    }
    };
    saveMobile = e => {
        e.preventDefault();
        if (this.mobileRef.current.value.length === 10) {
            this.setState({ invalidEmail: false });
            let saveData = {
                _method: "PUT",
                email: this.user.email,
                mobile_number: this.mobileRef.current.value,
                name: this.user.name
            };
            this.saveChanges(saveData, 'mobile');
        } else {
            this.setState({ invalidMobile: true });
        }
    };
    saveChanges(data, from) {
        Axios.authInstance
            .post(Axios.API.user.editProfileUrl, data)
            .then(response => {
                switch (response.status) {
                    case 200: {
                    this.user = response.data.data
                    this.setState({
                        [from]: false,
                        serverEmailError: null,
                        serverMobileError: null
                    })
                    break;
                }
                case 422: {
                    this.setState({
                        serverEmailError: response.data.errors.email ? response.data.errors.email[1] : null,
                        serverMobileError: response.data.errors.mobile ? response.data.errors.mobile[1] : null
                    })
break
                }
                default: {
                    break
                }
            }
            });
    }
    render() {
        console.log(this.user);
        return (
            <React.Fragment>
                <div className="name my_profile">
                <label className="myProfile_form-label">Full Name</label>
                    {this.state.name ? (
                        <React.Fragment>
                            <input ref={this.nameRef} defaultValue={this.user.name} className="account_inputfield" />
                            {
                                this.state.invalidName ? <div className="Input_Err">Invalid Name</div> : null
                            }
                            <div className="account_button_group">
                            <button onClick={e => this.saveName(e)} className="save_btn">save</button>
                            <button onClick={e => this.setState({name: false})} className="cancel_btn">cancel</button>
                            </div>
                        </React.Fragment>
                    ) : (
                            <React.Fragment>
                                <span className="account_details">{this.user.name}</span>
                                <button onClick={e => this.editItem(e, "name")}   className="edit_btn">edit</button>
                            </React.Fragment>
                        )}
                </div>
                <div className="email my_profile">
                <label className="myProfile_form-label">Email</label>
                    {this.state.email ? (
                        <React.Fragment>
                            <input ref={this.emailRef} defaultValue={this.user.email} className="account_inputfield" />
                            {this.state.invalidEmail ? <div className="Input_Err">invalid email</div> : null}
                            {this.state.serverEmailError ? <div>{this.state.serverEmailError}</div> : null}
                            <div className="account_button_group">
                            <button onClick={e => this.saveEmail(e)} className="save_btn">save</button>
                            <button onClick={e => this.setState({email: false})}  className="cancel_btn">cancel</button>
                            </div>
                        </React.Fragment>
                    ) : (
                            <React.Fragment>
                                <span className="account_details">{this.user.email}</span>
                                <button onClick={e => this.editItem(e, "email")}  className="edit_btn">edit</button>
                            </React.Fragment>
                        )}
                </div>
                <div className="mobile my_profile">
                <label className="myProfile_form-label">Phone Number</label>
                    {this.state.mobile ? (
                        <React.Fragment>
                            <input
                                ref={this.mobileRef}
                                defaultValue={this.user.mobile_number}
                                className="account_inputfield"
                            />
                            {this.state.invalidMobile ? (
                                <div className="Input_Err">invalid mobile number</div>
                            ) : null}
                            {this.state.serverMobileError ? (
                                <div className="Input_Err">{this.state.serverMobileError}</div>
                            ) : null}
                            <div className="account_button_group">
                            <button onClick={e => this.saveMobile(e)} className="save_btn">save</button>
                            <button onClick={e => this.setState({mobile: false})} className="cancel_btn">cancel</button>
                            </div>
                        </React.Fragment>
                    ) : (
                            <React.Fragment>
                                <span className="account_details">{this.user.mobile_number}</span>
                                <button onClick={e => this.editItem(e, "mobile")} className="edit_btn">edit</button>
                            </React.Fragment>
                        )}
                </div>
            </React.Fragment>
        );
    }
}
export default MyProfile;
