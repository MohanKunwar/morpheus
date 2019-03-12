import React, { Component } from "react";
import Axios from "../../../services/Axios";

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
        let saveData = {
            _method: "PUT",
            email: this.user.email,
            mobile_number: this.user.mobile_number,
            name: this.nameRef.current.value
        };
        this.saveChanges(saveData, 'name');
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
                <div className="name">
                    {this.state.name ? (
                        <React.Fragment>
                            <input ref={this.nameRef} defaultValue={this.user.name} />
                            <button onClick={e => this.saveName(e)}>save</button>
                            <button onClick={e => this.setState({name: false})}>cancel</button>
                        </React.Fragment>
                    ) : (
                            <React.Fragment>
                                <span>{this.user.name}</span>
                                <button onClick={e => this.editItem(e, "name")}>edit</button>
                            </React.Fragment>
                        )}
                </div>
                <div className="email">
                    {this.state.email ? (
                        <React.Fragment>
                            <input ref={this.emailRef} defaultValue={this.user.email} />
                            {this.state.invalidEmail ? <div>invalid email</div> : null}
                            {this.state.serverEmailError ? <div>{this.state.serverEmailError}</div> : null}
                            <button onClick={e => this.saveEmail(e)}>save</button>
                            <button onClick={e => this.setState({email: false})}>cancel</button>
                        </React.Fragment>
                    ) : (
                            <React.Fragment>
                                <span>{this.user.email}</span>
                                <button onClick={e => this.editItem(e, "email")}>edit</button>
                            </React.Fragment>
                        )}
                </div>
                <div className="mobile">
                    {this.state.mobile ? (
                        <React.Fragment>
                            <input
                                ref={this.mobileRef}
                                defaultValue={this.user.mobile_number}
                            />
                            {this.state.invalidMobile ? (
                                <div>invalid mobile number</div>
                            ) : null}
                            {this.state.serverMobileError ? (
                                <div>{this.state.serverMobileError}</div>
                            ) : null}
                            <button onClick={e => this.saveMobile(e)}>save</button>
                            <button onClick={e => this.setState({mobile: false})}>cancel</button>
                        </React.Fragment>
                    ) : (
                            <React.Fragment>
                                <span>{this.user.mobile_number}</span>
                                <button onClick={e => this.editItem(e, "mobile")}>edit</button>
                            </React.Fragment>
                        )}
                </div>
            </React.Fragment>
        );
    }
}
export default MyProfile;
