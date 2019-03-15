import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import KhozContext from '../../../services/Context';
import Dropdown from './Dropdown';
import './UserPanel.css';
class UserPanel extends Component {
    render() {
        console.log('context rerender from userpanel ', this.props.context);
        return (
            <div className='user_panel'>
                {
                    this.props.context.user
                        ?
                        <Panel user={this.props.context.user} logout={this.props.context.logout} />
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

const Panel = (props) => {
    return (
        <React.Fragment>
            <ul>
                <li>Notifications</li>
                <li>Add Business</li>
                <li>
                    {
                        props.user.photo ?
                            <img src={props.user.photo} alt={props.user.name} />
                            : <img src={require('../../../assets/images/place.svg')} alt='stock' />
                    } </li>
            </ul>
            <Dropdown user={props.user} logout={props.logout} />
        </React.Fragment>

    )
}
