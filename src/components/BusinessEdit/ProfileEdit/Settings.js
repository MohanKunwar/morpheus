import React, { Component } from 'react'
import Axios from '../../../services/Axios'
import { FaTrash } from 'react-icons/fa'

class Settings extends Component {
    state = {
        error: 'Invalid Email'
    }
    componentWillMount() {
    }
    emailAdded = e => {
        if (this.state.submit) {
            if (this.validate(e.target.value)) {
                this.setState({ invalidEmail: false })
            }
        }
        this.setState({ email: e.target.value })
    }
    addEmail = () => {
        this.setState({ submit: true, })
        if (this.validate(this.state.email)) {
            Axios.authInstance.post(Axios.API.user.addUserUrl(this.props.business.slug), { email: this.state.email, type: 'admin' }).then(response => {
                if (response && response.data) {
                    if (response.data.errors) {
                        this.setState({ error: response.data.errors.email[0] })
                    } else {
                        this.props.update('settings')
                    }
                }
            })
        } else {
            this.setState({ invalidEmail: true })
        }
    }
    deleteUser = userId => {
        Axios.authInstance.delete(Axios.API.user.deleteUser(userId)).then(response => {
            if (response && response.status === 204) {
                this.props.update('settings')
            }
        })
    }
    validate = email => {
        let re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        return re.test(email)
    }
    render() {
        return (
            <div className='business_settings_edit'>
                <div className='users_view'>
                    {
                        this.props.users ?
                            <React.Fragment>
                                <h4>Manage Users</h4>
                                {
                                    this.props.users.map((user, index) =>
                                        <div className='user_view' key={index}>
                                            <img src={user.photo_url} alt={user.name} />
                                            <span>{user.name} - {user.role}</span>
                                            <FaTrash onClick={() => this.deleteUser(user.id)} />
                                        </div>
                                    )
                                }
                            </React.Fragment>
                            : null
                    }
                </div>
                <h4>Add Users</h4>
                <span>*make sure, the email is already registered as khozinfo user</span>
                <input type='email' onChange={e => this.emailAdded(e)} />
                {
                    this.state.invalidEmail ? <span>{this.state.error}</span> : null
                }
                <button onClick={this.addEmail}>Add</button>
            </div>
        )
    }
}
export default Settings