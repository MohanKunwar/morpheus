import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import KhozContext from '../../../services/Context';
import Dropdown from './Dropdown';
// import Dropdown from '../../../UI/Dropdown/Dropdown';
import './UserPanel.css';
class UserPanel extends Component {
    render() {
        console.log('context rerender from userpanel ', this.props.context);
        return (
            <div className='user_panel'>
                {
                    this.props.context.user
                        ?
                        <AuthPanel user={this.props.context.user} logout={this.props.context.logout} />
                        : (<ul>
                            <li><Link to='/khoz/login'>Login</Link></li>
                            <li><Link to='/khoz/register'>Join</Link></li>
                            <li><Link to='/business/register'>Add Business<span>&#124;</span></Link></li>
                        </ul>)

                }
            </div>
        );
    }
}
export default KhozContext.withAppContext(UserPanel);

class AuthPanel extends Component {
    state = {
        showUserDropDown: false
    }
    render() {
        return (
            <React.Fragment>
                <ul>
                    <li>Notifications</li>
                    <li>Add Business</li>
                    <li>
                        {/* {
                            this.props.user.photo ?
                                <img src={this.props.user.photo} alt={this.props.user.name} />
                                : <img src={require('../../../assets/images/place.svg')} alt='stock' />
                        } */}
                        {/* <button onClick={e => this.setState({ showUserDropDown: true })} /> */}
                        <Dropdown user={this.props.user} logout={this.props.logout} />
                    </li>
                </ul>
            </React.Fragment>

        )
    }
}
