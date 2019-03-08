import React, { Component } from 'react'
import Axios from '../../../services/Axios';

class MyEmail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            edit: false,
            invalid: false,
            exists: false
        }
        this.emailRef = React.createRef()
    }
    editEmail = (e) => {
        e.preventDefault()
        this.setState({ edit: true })
    }
    saveChanges = e => {
        e.preventDefault()
        if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(this.emailRef.current.value)) {
            this.setState({invalid: false})
            Axios.authInstance.post(Axios.API.user.editEmailUrl, {_method: 'PUT', email: this.emailRef.current.value}).then(
                response => {
                    if (response.data) {
                        
                    }
                }
            )
        } else {
            this.setState({invalid: true})
        }
    }
    render() {
        return (

            <div className='email'>
                {
                    this.state.edit
                        ?
                        (<React.Fragment>
                            <input ref={this.emailRef} defaultValue={this.props.user.email} />
                            {
                                this.state.invalid ? <div>invalid email</div> : null
                            }
                            <button onClick={e => this.saveChanges(e)}>save</button>
                        </React.Fragment>)
                        :
                        (<React.Fragment>
                            <span>{this.props.user.email}</span>
                            <button onClick={e => this.editEmail(e)}>edit</button>
                        </React.Fragment>)
                }
            </div>
        )
    }
}
export default MyEmail