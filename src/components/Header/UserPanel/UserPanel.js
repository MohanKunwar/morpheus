import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import KhozContext from '../../../services/Context';
import Dropdown from './Dropdown';
// import Dropdown from '../../../UI/Dropdown/Dropdown';
import './UserPanel.css';
import { FaBell, FaUserPlus } from 'react-icons/fa';
class UserPanel extends Component {
    render() {
        return (
            <div className='user_panel'>
                {
                    this.props.context.user
                        ?
                        <AuthPanel user={this.props.context.user} logout={this.props.context.logout} />
                        : (<React.Fragment>
                            <Link to='/business/register'>Add Business</Link>
                            <span className="pipesign"></span>
                            <Link to='/khoz/register'>Join</Link>
                            <span className="pipesign"></span>
                            <Link to='/khoz/login'>Login</Link>
                        </React.Fragment>)

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
                 <Link to='/business/register'>Add Business</Link>
                 <span className="pipesign"></span>
                <Link to='/user/notifications'><FaBell /></Link>
                <span className="pipesign"></span>
                <Link to='/user/account/image'>
                    {
                        this.props.user.photo ?
                            <img src={this.props.user.photo} alt={this.props.user.name} />
                            : <FaUserPlus />
                    }
                </Link>
                <span className="pipesign"></span>
                <Dropdown user={this.props.user} logout={this.props.logout} />
            </React.Fragment>

        )
    }
}
